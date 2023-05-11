import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>Home page</h1>
      <Link to="/tweets">to cards</Link>
    </>
  );
};

export default HomePage;
