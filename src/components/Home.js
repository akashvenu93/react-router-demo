import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() => {
          navigate("order-summary", { replace: true });
        }}
      >
        Order Now
      </button>
    </>
  );
};

export default Home;
