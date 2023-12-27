import { Outlet } from "react-router-dom";
import { useParams, useSearchParams } from "react-router-dom";
const Users = () => {
  const params = useParams(); // to get the params from URL

  // params after '?' is called as search params
  const [searchParams, setSearchParams] = useSearchParams({});
  const showActiveUsers = searchParams.get("filter") === "active";

  const buttonStyles = {
    padding: "10px",
    margin: "20px",
  };

  return (
    <div>
      <h1>User 1</h1>
      <h1>User 2</h1>
      <h1>User 3</h1>
      <button
        style={buttonStyles}
        onClick={() => setSearchParams({ filter: "active" })}
      >
        Active Users
      </button>
      <button style={buttonStyles} onClick={() => setSearchParams({})}>
        Reset Users
      </button>
      <Outlet />
      <div>
        {showActiveUsers ? <div>Active Users</div> : <div>All Users</div>}
      </div>
    </div>
  );
};

export default Users;
