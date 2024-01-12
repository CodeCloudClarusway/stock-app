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
const MenuListItems = () => {
  const listItems = [
    {
      icon: <DashboardCustomizeIcon />,
      url: "/stock",
      title: "Dashboard",
    },
    {
      icon: <ProductionQuantityLimitsIcon />,
      url: "/products",
      title: "Products",
    },
    {
      icon: <ReceiptIcon />,
      url: "/sales",
      title: "Sales",
    },
    {
      icon: <ShopTwoIcon />,
      url: "/purchases",
      title: "Purchases",
    },
    {
      icon: <ConfirmationNumberIcon />,
      url: "/firms",
      title: "Firms",
    },
    {
      icon: <BrandingWatermarkIcon />,
      url: "/brands",
      title: "Brands",
    },
  ];
  return (
    <>
      {listItems.map((item) => (
        <ListItem>
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
