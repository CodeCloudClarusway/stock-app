import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom/dist";
import PrivateRouter from "./PrivateRouter";
import { Home } from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Purchases from "../pages/Purchases";
import Sales from "../pages/Sales";
import Firms from "../pages/Firms";
import Products from "../pages/Products";
import Brands from "../pages/Brands";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="stock" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="sales" element={<Sales />} />
            <Route path="firms" element={<Firms />} />
            <Route path="products" element={<Products />} />
            <Route path="brands" element={<Brands />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
