import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h3>
        <Link to={"introduction"}>Introduction</Link>
      </h3>
      <hr />
      <h3>Template</h3>
      <hr />
      <ul>
        <li>
          <Link to={"upload"}>Template Upload</Link>
        </li>
        <li>
          <Link to={"generate"}>Template Generation</Link>
        </li>
      </ul>
      <h3>Account</h3>
      <hr />
      <ul>
        <li>
          <Link to={"profile"}>Profile</Link>
        </li>
        <li>
          <Link to={"login"}>Login</Link>
        </li>
        <li>
          <Link to={"sign-up"}>Sign-ups</Link>
        </li>
      </ul>
      {/* <button className="sign-out-button">Sign-out</button> */}
    </aside>
  );
};

export default Sidebar;
