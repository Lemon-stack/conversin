import { Routes, Route, Outlet } from "react-router-dom";
import Hero from "./layout/hero";
import { lazy, Suspense, useEffect } from "react";
import PrivateRoute from "./auth/Private";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { signInSuccess, signOut } from "./reducers/googleSigninSlice";
import { auth } from "./client/firebase";
import Dashboard from "./layout/main/dashboard";
import Paraphrase from "./layout/features/paraphrase";
const Generator = lazy(() =>
  import("./layout/features/tool-features/generator")
);
const Translate = lazy(() =>
  import("./layout/features/tool-features/translate")
);
const Login = lazy(() => import("./auth/login"));
const Home = lazy(() => import("./layout/main/home"));
const Spinner = lazy(() => import("./layout/Spinner"));
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
          <Route path="/d" element={<PrivateRoute element={<Outlet />} />}>
            <Route path="dashboard" element={<Home />}>
              <Route index element={<Dashboard />} />
              <Route path="generate" element={<Generator />} />
              <Route path="translate" element={<Translate />} />
              <Route path="paraphrase" element={<Paraphrase />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
