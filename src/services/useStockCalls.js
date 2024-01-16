import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getStockSuccess } from "../features/stockSlice";

const useStockCalls = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const BaseUrl = process.env.REACT_APP_BASE_URL;

  const getStocks = async (url = "firms") => {
    try {
      const { data } = await axios(`${BaseUrl}/${url}/`, {
        headers: { Authorization: `Token ${token}` },
      });
      const apiData = data.data;
      dispatch(getStockSuccess({ apiData, url }));
    } catch (error) {
      console.log(error);
    }
  };
  const deleteStock = async (url, id) => {
    await axios.delete(`${BaseUrl}/${url}/${id}`, {
      headers: { Authorization: `Token ${token}` },
    });
    getStocks(url);
  };
  const createFirms = async (url = "firms", info) => {
    try {
      await axios.post(`${BaseUrl}/${url}/`, info, {
        headers: { Authorization: `Token ${token}` },
      });
      getStocks(url);
    } catch (error) {
      console.log(error);
    }
  };
  const putFirms = async (url = "firms", id,info) => {
    try {
      await axios.put(`${BaseUrl}/${url}/${id}`, info, {
        headers: { Authorization: `Token ${token}` },
      });
      getStocks(url);
    } catch (error) {
      console.log(error);
    }
  };

  return { getStocks, deleteStock, createFirms, putFirms };
};

export default useStockCalls;
