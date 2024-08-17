import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../services/user/user";

const SignUp = () => {
  const [show, setShow] = useState<boolean>(false);
  const [message, setMessage] = useState<string>();
  //default value
  const [password, setPassword] = useState("secret99");
  const onFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formData = Object.fromEntries(form.entries());

    fetch("https://ratnaafinuatcustomer.aiplservices.com/api/register", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "x-client-token": "YArUWh1Daf23VhRsxb5e-mn_OGhTX-fAx4AA5U_OsPQ",
        "content-type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setMessage(json.message);
      })
      .catch((error) => {
        setMessage(error);
      });
  };
  return (
    <div className="container">
      <h3>SIGN UP</h3>
      <form onSubmit={onFormSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          defaultValue="testuser991"
          name="username"
          type="text"
        />
        <label htmlFor="password">Password</label>
        {show ? (
          <input
            name="password"
            type="text"
            id="password"
            defaultValue={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        ) : (
          <input
            name="password"
            type="password"
            id="password"
            defaultValue={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        )}
        <button
          type="button"
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => {
            setShow(!show);
          }}
        >
          👁️
        </button>
        <p className="text-center mt-3">
          Already Have Account? <Link to={"../login"}>Login</Link>
        </p>
        <button type="submit">LOGIN</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SignUp;
