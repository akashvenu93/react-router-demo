import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";
import { useLocation } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location?.state?.path || "/";
  const loginHandler = () => {
    auth.login(userName);
    navigate("/profile", { replace: true });
  };
  return (
    <>
      <input
        type='text'
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={loginHandler}>Login</button>
    </>
  );
};

export default Login;
