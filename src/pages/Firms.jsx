import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useStockCalls from "../services/useStockCalls";

const Firms = () => {
  const { firms } = useSelector((state) => state.stock);
  const { getStocks } = useStockCalls();
  useEffect(() => {
    getStocks("firms");
  }, []);
  console.log(firms);

  return <div>Firms</div>;
};

export default Firms;
