import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom/dist";
import PrivateRouter from "./PrivateRouter";
import { Home } from "../pages/Home";
import Brands from "../pages/Brands";
import Products from "../pages/Products";
import Purchases from "../pages/Purchases";
import Firms from "../pages/Firms";
import Sales from "../pages/Sales";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="stock" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />}>
            <Route index path="" element={<Home/>}/>
            <Route  path="products" element={<Products/>}/>
            <Route  path="brands" element={<Brands/>}/>
            <Route  path="purchases" element={<Purchases/>}/>
            <Route  path="sales" element={<Sales/>}/>
            <Route  path="firms" element={<Firms/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
