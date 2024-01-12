import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ReceiptIcon from "@material-ui/icons/Receipt";
import ShopTwoIcon from "@material-ui/icons/ShopTwo";
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";
import { useNavigate } from "react-router-dom/dist";
const MenuListItems = () => {
  const navigate = useNavigate();
  const listItems = [
    {
      icon: <DashboardCustomizeIcon />,
      url: "/stock/",
      title: "Dashboard",
    },
    {
      icon: <ProductionQuantityLimitsIcon />,
      url: "/stock/products/",
      title: "Products",
    },
    {
      icon: <ReceiptIcon />,
      url: "/stock/sales/",
      title: "Sales",
    },
    {
      icon: <ShopTwoIcon />,
      url: "/stock/purchases/",
      title: "Purchases",
    },
    {
      icon: <ConfirmationNumberIcon />,
      url: "/stock/firms/",
      title: "Firms",
    },
    {
      icon: <BrandingWatermarkIcon />,
      url: "/stock/brands/",
      title: "Brands",
    },
  ];
  return (
    <>
      {listItems.map((item) => (
        <ListItem
          sx={{
            "&:hover": { backgroundColor: "rgba(0,120,0,0.3)", color: "white" },
            "&:hover .MuiSvgIcon-root": {
              color: "white",
            },
          }}
          onClick={() => navigate(item.url)}
        >
          <ListItemButton>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
};

export default MenuListItems;
