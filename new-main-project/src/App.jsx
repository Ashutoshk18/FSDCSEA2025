import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import RegistrationPage from "../components/RegistrationPage";
import LoginPage from "../components/LoginPage";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Link to="/login">Login</Link>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
