import "./App.css";
import SignUp from "./pages/account/signUp";
// import Login from "./pages/templates/Upload"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/account/login";
import Introduction from "./pages/introduction/introPage";
import Templates from "./pages/templates/templates";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Introduction />} />
        {/* <Route path="/" element={<Home2 />} /> */}
        <Route path="/template/*" element={<Templates />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
