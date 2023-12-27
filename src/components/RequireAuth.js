import { useAuth } from "../utils/auth";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  // for protected route to profile, here the it checks wheter there is user is present or not
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to='/login' state={{ path: location.pathname }} />;
  }

  return children;
};

export default RequireAuth;
