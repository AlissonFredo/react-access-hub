import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const user = true;

  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
