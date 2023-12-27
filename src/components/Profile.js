import { useAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const logoutHandler = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <>
      <div>Profile</div>
      <button onClick={logoutHandler}>Logout</button>
    </>
  );
};

export default Profile;
