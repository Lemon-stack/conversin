// src/components/PrivateRoute.js
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function PrivateRoute({ element }) {
  const navigate = useNavigate();
  const isSignedIn = useSelector((state) => state.googleSignin);

  useEffect(() => {
    if (!isSignedIn) {
      navigate("/login");
    }
  }, [isSignedIn, navigate]);

  // Return the element if signed in
  return isSignedIn ? element : null;
}
PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
};
