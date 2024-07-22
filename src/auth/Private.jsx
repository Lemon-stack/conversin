// src/components/PrivateRoute.js
import { Navigate, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function PrivateRoute({ element }) {
  const navigate = useNavigate();
  const isSignedIn = useSelector((state) => state.googleSignin);
  useEffect(() => {
    if (isSignedIn !== false ) {
      navigate("/d/dashboard/main");
    }
  }, [isSignedIn, navigate]);

  // Return the element if signed in
  return isSignedIn !== false ? element : <Navigate to="/login" />;
}
PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
};
