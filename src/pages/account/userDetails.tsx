import { Link } from "react-router-dom";

const userDetails = () => {
  return (
    <div className="container">
      <h3>User Details</h3>
      <p>username</p>
      <div>
        <label htmlFor="username">x-api-key</label>
      </div>
      <div>
        <label htmlFor="username">x-client-token</label>
      </div>

      <button>
        <Link to={"../../"}>LOGOUT</Link>
      </button>
      <div className="nav-button">
        <div className="nav-btn-left">
          <Link to={"../generate"}>
            <button>previous</button>
          </Link>
        </div>
        <div className="nav-btn-right">
          <Link to={"../login"}>
            <button>next</button>
          </Link>
        </div>
      </div>
      <iframe
        src="http://10.55.12.198:5173/"
        style={{ width: "80vw", height: "50vh" }}
      ></iframe>
    </div>
  );
};

export default userDetails;
