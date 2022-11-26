import { Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import logo from "../../../assets/proxym.png";
import Sidebar from "../Sidebar/Sidebar";
import SettingsPopper from "./SettingsPopper";
import Grid from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#5BA0BF",
  },
  image: {
    marginInline: "30px",
  }
}));

function Header() {
  const classes = useStyles();

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.header}>

        <Sidebar />
        <div className={classes.image}>
        <img src={logo} height={70} 
                width= "auto" alt="This is logo of  proxym" /></div>

        <SettingsPopper />
      </Toolbar>
    );
  };

  return displayDesktop();
}

export default Header;
