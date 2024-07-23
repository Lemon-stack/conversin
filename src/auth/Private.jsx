// src/components/PrivateRoute.js
import { Navigate, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/client/firebase";

export default function PrivateRoute({ element }) {
  const navigate = useNavigate();
  const isSignedIn = useSelector((state) => state.googleSignin);
  console.log(isSignedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user === null) {
        navigate("/login")
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch, navigate]);

  // Return the element if signed in
 return !isSignedIn == false ? element : <Navigate to="/login" />;
}
PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
};
