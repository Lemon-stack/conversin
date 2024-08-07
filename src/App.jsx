import { Routes, Route, Outlet } from "react-router-dom";
import "flowbite";
import Hero from "./layout/hero";
import { lazy, Suspense, useEffect } from "react";
import PrivateRoute from "./auth/Private";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { signInSuccess, signOut } from "./reducers/googleSigninSlice";
import { auth } from "./client/firebase";
import Layout from "./layout/layoutContainer";
import Main from "./layout/generationContainer/home";
const Login = lazy(() => import("./auth/login"));
const Spinner = lazy(() => import("./layout/sub-components/Spinner"));
export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          signInSuccess({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            credits: user.credits,
          })
        );
      } else {
        dispatch(signOut());
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Hero />} />
          <Route
            path="/d"
            element={
              <PrivateRoute
                element={
                  <Suspense fallback={<Spinner />}>
                    <Outlet />
                  </Suspense>
                }
              />
            }
          >
            <Route path="dashboard" element={<Layout />}>
              <Route path="c/:chatId" element={<Main />} />
            </Route>
          </Route>
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
