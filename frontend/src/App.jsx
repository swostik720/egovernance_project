// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Verification from "./pages/Verification";
import SelectionPage from "./pages/Select_option";
import Citizenship from "./pages/Citizenship";
import License from "./pages/License";
import Login from "./pages/Login";
import SetPassword from "./pages/Setpassword";
import Forgotpassword from "./pages/Forgotpassword";
import Resetpassword from "./pages/Resetpassword";
import Card from "./components/Card";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import LicenseCard from "./card/Licensecard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/verification" element={<Verification/>} />
        <Route path="/select-option" element={<SelectionPage/>} />
        <Route path="/citizenship" element={<Citizenship/>} />
        <Route path="/license" element={<License/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/setpassword" element={<SetPassword/>} />
        <Route path="/forgotpassword" element={<Forgotpassword/>} />
        <Route path="/resetpassword" element={<Resetpassword/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/card" element={<Card/>} />
        <Route path="/home/:type" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
