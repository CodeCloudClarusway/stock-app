import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
} from "../features/authSlice";
import { useNavigate } from "react-router-dom/dist";

export const useAuthCalls = () => {
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}/auth/login/`, userInfo);
      dispatch(loginSuccess(data));
      navigate("/stock");
      console.log(data);
      alert("login success");
    } catch (error) {
      console.log(error);
    }
  };
  const logout = async () => {
    dispatch(fetchStart());

    try {
      await axios(`${BASE_URL}/auth/logout`, {
        headers: { Authorization: `Token ${token}` },
      });
      dispatch(logoutSuccess());
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  return { login, logout };
};
