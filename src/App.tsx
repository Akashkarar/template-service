import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Introduction from "./pages/introduction/introPage";
import Templates from "./pages/templates/templates";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/template/*" element={<Templates />} />
      </Routes>
    </Router>
  );
}

export default App;
