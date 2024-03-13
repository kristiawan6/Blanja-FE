import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Auth/Login/Login";
// import Register from "../../Pages/auth/RegisterCustomer";
// import RegisterSeller from "../../Pages/auth/RegisterSeller";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" replace="true" />} />
        <Route path="/home" element={<Home />} />
       <Route path="/login" element={<Login />} />
       {/*   <Route path="/register" element={<Register />} />
        <Route path="/registerSeller" element={<RegisterSeller />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
