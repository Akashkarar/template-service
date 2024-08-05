import "./App.css"
import Home from "./pages/home"
import SignUp from "./pages/signUp";
// import Login from "./pages/templates/Upload"
import Login from "./pages/login"
import Templates from "./pages/templates/templates"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/template/*" element={<Templates />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App
