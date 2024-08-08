import { Route, Routes } from "react-router-dom";
import Login from "./account/login";
import SignUp from "./account/signUp";
import UserDetails from "./account/userDetails";
import Introduction from "./templates/introduction";
import Generate from "./templates/generate";
import Upload from "./templates/upload";

const Container = () => {
  return (
    <div className="info-container">
      <Routes>
        <Route path="introduction" element={<Introduction />} />
        <Route path="generate" element={<Generate />} />
        <Route path="upload" element={<Upload />} />
        <Route path="profile" element={<UserDetails />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default Container;
