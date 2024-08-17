import { createContext, useState } from "react";
import { loginUser } from "../../services/user/user";

const Login = () => {
  const [show, setShow] = useState<boolean>(false);
  const [response, setResponse] = useState();
  //default value
  const [password, setPassword] = useState("secret99");
  const onFormSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formData = Object.fromEntries(form.entries());

    fetch("https://ratnaafinuatcustomer.aiplservices.com/api/login", {
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
        setResponse(json.message);
      })
      .catch((error) => {
        setResponse(error);
      });
  };
  return (
    <div className="container">
      <h3>Welcome</h3>
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
        <button type="submit">LOGIN</button>
      </form>
      <p>{response.message}</p>
    </div>
  );
};

export default Login;
