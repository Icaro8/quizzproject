import React from "react";
import { Routes, Route, PrivateRoute } from "react-router-dom";

//Pages
import { Login } from "./Pages/Login";

export const RoutesAplication = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};
