import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="container">
      <h3>SIGN UP</h3>
      <label htmlFor="userName">Username</label>
      <input id="userName" name="userName" type="text" value="" />
      <label htmlFor="password">Password</label>
      <input id="password" name="userName" type="text" value="" />
      <p className="text-center mt-3">
        Already Have Account? <Link to={"../login"}>Login</Link>
      </p>
      <button>SIGN UP</button>
    </div>
  );
};

export default SignUp;
