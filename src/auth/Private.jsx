// src/components/PrivateRoute.js
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function PrivateRoute({ element }) {
    const isSignedIn = useSelector((state) => state.googleSignin);
   
   useEffect(() => {
     return isSignedIn ? element : <Navigate to="/login" />;
   }, [isSignedIn, element])
   
   
}

PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
};