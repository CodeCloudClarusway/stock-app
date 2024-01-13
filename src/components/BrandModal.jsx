import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { FormControl, TextField } from "@mui/material";
import { useState } from "react";
import useStockCalls from "../services/useStockCalls";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BrandModal({ open, handleClose, info, setInfo }) {
  const { createFirms, putFirms } = useStockCalls();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {
      putFirms("brands", info._id, info);
    } else {
      createFirms("brands", info);
    }

    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            style={{ display: "flex", gap: "1rem", flexDirection: "column" }}
          >
            <TextField
              label="Firm Name"
              name="name"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
            />

            <TextField
              id="outlined-basic"
              name="image"
              label="Image"
              variant="outlined"
              value={info.image}
              onChange={handleChange}
            />
            <Button type="submit" variant="contained">
              {info._id ? "UPDATE" : "ADD"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
