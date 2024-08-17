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
      <div>
          <Link to={"/template/introduction"}>
            <button>Get started</button>
          </Link>
      </div>
    </div>
  );
};

export default Introduction;
