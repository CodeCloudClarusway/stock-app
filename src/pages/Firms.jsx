
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useStockCalls from "../services/useStockCalls";
import { Grid, Typography } from "@mui/material";
import { Button } from "@mui/base";
import FirmCard from "../components/FirmCard";
import CardModal from "../components/CardModal";

const Firms = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
 

  const handleClose = () => {
    setInfo({ name: "", phone: "", address: "", image: "" });
    setOpen(false);
  };
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });

  const { firms } = useSelector((state) => state.stock);
  const { getStocks } = useStockCalls();
  useEffect(() => {
    getStocks("firms");
  }, []);
  
  

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firms
      </Typography>
      <Button onClick={handleOpen} variant="contained">
        New Firm
      </Button>
      <CardModal
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
        setOpen={setOpen}
        info={info}
        setInfo={setInfo}
       
      />

      <Grid container gap={2} mt={3} justifyContent={"center"}>
        {firms?.map((firm) => (
          <Grid item key={firm._id}>
            <FirmCard
              firm={firm}
              handleClose={handleClose}
              handleOpen={handleOpen}
              open={open}
              setOpen={setOpen}
              setInfo={setInfo}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Firms;

