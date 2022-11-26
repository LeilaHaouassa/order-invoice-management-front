import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import "./Sidebar.css";
import SidebarMenu from "./SidebarMenu";
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from "@mui/material/IconButton";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setSidebar(open);
  };

  const list = () => (
    <Box
      sx={{ width: 330 }}
      role="presentation"
      onKeyDown={toggleDrawer(false)}
    >
      <SidebarMenu toggleDrawer={toggleDrawer} />
    </Box>
  );


  return (
    <div>
      <React.Fragment>
        <IconButton  onClick={toggleDrawer(true)}><MenuIcon color="disabled"/></IconButton>
        <Drawer anchor="left" open={sidebar} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default Sidebar;
