import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getStockSuccess } from "../features/stockSlice";

const useStockCalls = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const getStocks = async (url = "firms") => {
    const BaseUrl = process.env.REACT_APP_BASE_URL;

    try {
      const { data } = await axios(`${BaseUrl}/${url}/`, {
        headers: {  Authorization: `Token ${token}` },
      });
      const apiData = data.data;
      dispatch(getStockSuccess({ apiData,url}));
    } catch (error) {
      console.log(error);
    }
  };
  return { getStocks };
};

export default useStockCalls;
