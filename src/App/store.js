import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authSlice from "../features/authSlice";
import stockReducer from "../features/stockSlice";

const persistConfig = {
  key: "root",
  storage,
};
 const persistedReducer = persistReducer(persistConfig, authSlice);

export const store = configureStore({
  reducer: { auth: persistedReducer, stock: stockReducer },
});

export const persistor = persistStore(store);


