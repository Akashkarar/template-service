import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Generate from "./generate";
import UserDetails from "../userDetails.tsx";
import "../../App.css";
import Upload from "./Upload.tsx";

const Templates = () => {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-left">
          <button>
            <Link to={"generate"}>Generate</Link>
          </button>
          <button>
            <Link to={"upload"}>Upload</Link>
          </button>
        </div>
        <div className="nav-right">
          <button>
            <Link to={"user-details"}>User Details</Link>
          </button>
        </div>
      </nav>
      <main className="main-content">
        <Routes>
          <Route path="generate" element={<Generate />} />
          <Route path="upload" element={<Upload />} />
          <Route path="user-details" element={<UserDetails />} />
        </Routes>
      </main>
    </div>
  );
};

export default Templates;
