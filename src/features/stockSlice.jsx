import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firms: [],
  brands: [],
  sales: [],
  products: [],
  purchases: [],
  loading: false,
  error: false,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    getStockSuccess: (state, { payload: { url, apiData } }) => {
      state.loading = false;
      state[url] = apiData;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { getStockSuccess } = stockSlice.actions;

export default stockSlice.reducer;
