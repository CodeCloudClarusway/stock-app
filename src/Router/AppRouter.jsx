import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom/dist";
import PrivateRouter from "./PrivateRouter";
import { Home } from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="stock" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
