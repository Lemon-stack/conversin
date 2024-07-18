// src/components/PrivateRoute.js
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function PrivateRoute({ element }) {
    const isSignedIn = useSelector((state) => state.googleSignin);
    return isSignedIn ? element : <Navigate to="/login" />;
}

PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
};