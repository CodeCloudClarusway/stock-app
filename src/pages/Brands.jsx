import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useStockCalls from "../services/useStockCalls";
import { Grid, Typography } from "@mui/material";
import { Button } from "@mui/base";
import FirmCard from "../components/FirmCard";

import BrandModal from "../components/BrandModal";

const Brands = () => {
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

  const { brands } = useSelector((state) => state.stock);
  const { getStocks } = useStockCalls();
  useEffect(() => {
    getStocks("brands");
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Brands
      </Typography>
      <Button onClick={handleOpen} variant="contained">
        New Brand
      </Button>
      <BrandModal
        handleClose={handleClose}
        handleOpen={handleOpen}
        open={open}
        setOpen={setOpen}
        info={info}
        setInfo={setInfo}
      />

      <Grid container gap={2} mt={3} justifyContent={"center"}>
        {brands?.map((brand) => (
          <Grid item key={brand._id}>
            <FirmCard
              firm={brand}
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

export default Brands;
