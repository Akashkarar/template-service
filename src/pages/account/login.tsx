import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <h3>Welcome</h3>
      <label htmlFor="userName">Username</label>
      <input id="userName" name="userName" type="text" value="" />
      <label htmlFor="userName">Password</label>
      <input id="userName" name="userName" type="text" value="" />
      <button><Link to={"/"}>LOGIN</Link></button>
    </div>
  );
};

export default Login;
