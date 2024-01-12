import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  token: "",
  error: false,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.token = payload.token;
      state.user = payload.user.username;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.token = "";
      state.user = "";
    },
  },
});

export const { fetchFail, fetchStart, loginSuccess, logoutSuccess } =
  authSlice.actions;

export default authSlice.reducer;
