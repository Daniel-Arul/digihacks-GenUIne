import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App"; // Main App component
import CharityForm from "./components/CharityForm"; 
import Profile from "./components/Profile";

const Root = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes here */}
        <Route path="/" element={<App />} /> {/* Default homepage */}
        <Route path="/form" element={<CharityForm />} /> {/* Charity form route */}
        <Route path="/profile" element={<Profile />} /> {/* Profile route */}
      </Routes>
    </Router>
  );
};

const root = createRoot(document.getElementById("app"));
root.render(<Root />);
