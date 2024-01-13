import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useStockCalls from "../services/useStockCalls";
import { Grid, Typography } from "@mui/material";
import { Button } from "@mui/base";
import FirmCard from "../components/FirmCard";

const Firms = () => {
  const { firms } = useSelector((state) => state.stock);
  const { getStocks } = useStockCalls();
  useEffect(() => {
    getStocks("firms");
  }, []);
  console.log(firms);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firms
      </Typography>
      <Button variant="contained">New Firm</Button>

      <Grid container gap={2} mt={3} justifyContent={"center"}>

        {firms?.map((firm) => (
          <Grid item key={firm._id}>
            <FirmCard firm={firm} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Firms;
