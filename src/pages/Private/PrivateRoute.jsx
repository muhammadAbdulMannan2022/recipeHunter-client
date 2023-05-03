import React, { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";
import Loading from "../shared/Loading/Loading";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  } else {
    return user ? (
      children
    ) : (
      <Navigate to="/1/login" state={{ from: location }} replace />
    );
  }
};

export default PrivateRoute;
