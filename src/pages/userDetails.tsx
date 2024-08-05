import { Link } from "react-router-dom";

const userDetails = () => {
  return (
    <div className="container">
      <h3>User Details</h3>
      <p>username</p>
      <label htmlFor="userName">Password</label>
      <input id="userName" name="userName" type="text" value="" />
      <button><Link to={"../../"}>LOGOUT</Link></button>
    </div>
  );
};

export default userDetails;
