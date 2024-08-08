import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <div>
      <div className="introduction">
        <h3>Introduction</h3>
        <hr />
        <div className="introduction-content">
          TCS - Templates Creation Services is the something
        </div>
      </div>
      <div className="nav-button">
        <div className="nav-btn-left">
          {/* <button>
            <Link to={"previous"}>previous</Link>
          </button> */}
        </div>
        <div className="nav-btn-right">
          <Link to={"../upload"}>
            <button>next</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
