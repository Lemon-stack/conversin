// src/components/PrivateRoute.js
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function PrivateRoute({ element }) {
  const isSignedIn = useSelector((state) => state.googleSignin);
const navigate = useNavigate()
  useEffect(() => {
    if (isSignedIn == null) {
      return element;
    } else {
      navigate ("/login");
    }
  }, [isSignedIn, element,navigate]);
}

PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
};
