import { Link } from "react-router-dom";

const Home = () => {
  const handleClick = (action: string) => {
    console.log(`user click ${action}`);
  };
  return (
    <div className="App">
      
      <div className="container">
        <h1>Welcome to TCS</h1>
        <p>Select an option</p>
        <Link to="/login">
          <button onClick={() => handleClick("next")}>Generate</button>
        </Link>
        <Link to="/signUp">
          <button onClick={() => handleClick("previous")}>Creation</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
