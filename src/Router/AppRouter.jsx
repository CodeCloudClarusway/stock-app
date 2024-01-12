import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom/dist";
import PrivateRouter from "./PrivateRouter";
import { Home } from "../pages/Home";
import Login from "../pages/Login";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
