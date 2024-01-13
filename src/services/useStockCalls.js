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
  return { getStocks, deleteStock };
};

export default useStockCalls;
