import React, { useContext } from "react";
import { AuthContext } from "../../providers/Authprovider";
import Loading from "../shared/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  return <div>{loading ? <Loading /> : user && children}</div>;
};

export default PrivateRoute;
