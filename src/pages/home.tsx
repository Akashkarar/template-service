import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-left"></div>
        <div className="nav-right">
          <button>
            <Link to={"login"}>Login</Link>
          </button>
          <button>
            <Link to={"sign-up"}>Sign up</Link>
          </button>
        </div>
      </nav>
      <div className="container">
        <h1>Welcome to TCS</h1>
        <p>Select an option</p>
        <Link to="/template/generate">
          <button>Generate</button>
        </Link>
        <Link to="/template/upload">
          <button>Upload</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
