import React, { useState } from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import * as ImIcons from "react-icons/im";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

const SidebarMenu = ({toggleDrawer}) => {
  const [openCustomerMenu, setOpenCustomerMenu] = useState(false);
  const [openSupplierMenu, setOpenSupplierMenu] = useState(false);

  const handleClickCustomerMenu = () => {
    setOpenCustomerMenu(!openCustomerMenu);
  };

  const handleClickSupplierMenu = () => {
    setOpenSupplierMenu(!openSupplierMenu);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Proxym
        </ListSubheader>
      }
    >
      <ListItemButton onClick={toggleDrawer(false)}>
        <ListItemIcon>
          <ImIcons.ImHome />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton onClick={toggleDrawer(false)}>
        <ListItemIcon>
          <BsIcons.BsPeopleFill />
        </ListItemIcon>
        <ListItemText primary="Entreprises" />
      </ListItemButton>
      <ListItemButton onClick={toggleDrawer(false)}>
        <ListItemIcon>
        <RiIcons.RiShoppingCart2Fill />
        </ListItemIcon>
        <ListItemText primary="Produits" />
      </ListItemButton>
      <ListItemButton onClick={handleClickCustomerMenu}>
        <ListItemIcon>
        <FaIcons.FaInbox />
        </ListItemIcon>
        <ListItemText primary="Services de Client" />
        {openCustomerMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openCustomerMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={toggleDrawer(false)}>
            <ListItemIcon>
            <IoIcons.IoIosPaper />
            </ListItemIcon>
            <ListItemText primary="Bons de commande" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={toggleDrawer(false)}>
            <ListItemIcon>
            <IoIcons.IoIosPaper />
            </ListItemIcon>
            <ListItemText primary="Factures" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton onClick={handleClickSupplierMenu}>
        <ListItemIcon>
        <FaIcons.FaInbox />
        </ListItemIcon>
        <ListItemText primary="Sevices de Fournisseur" />
        {openSupplierMenu ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openSupplierMenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} onClick={toggleDrawer(false)}>
            <ListItemIcon>
            <IoIcons.IoIosPaper />
            </ListItemIcon>
            <ListItemText primary="Bons de commande" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }} onClick={toggleDrawer(false)}>
            <ListItemIcon>
            <IoIcons.IoIosPaper />
            </ListItemIcon>
            <ListItemText primary="Factures" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
};

export default SidebarMenu;
