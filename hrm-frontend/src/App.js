import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./api/pages/auth/Login";
import Register from "./api/pages/auth/Register";
import Profile from "./api/pages/auth/Profile";
import Users from "./components/Users"; 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<Users />} /> {/* ✅ added Users route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;



