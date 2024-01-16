import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import stockReducer from "../features/stockSlice";

export const store = configureStore({
  reducer: { auth: authSlice, stock: stockReducer },
});
