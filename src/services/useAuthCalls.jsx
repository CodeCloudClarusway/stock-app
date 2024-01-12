import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { fetchStart, loginSuccess } from "../features/authSlice";
import { useNavigate } from "react-router-dom/dist";

export const useAuthCalls = () => {
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const dispath = useDispatch();
  const login = async (userInfo) => {
    dispath(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}/auth/login/`, userInfo);
      dispath(loginSuccess(data));
      navigate("/stock");
      console.log(data);
      alert("login success");
    } catch (error) {
      console.log(error);
    }
  };
  return { login };
};
