import { Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import logo from "../../../assets/proxym.png";
import Sidebar from "../Sidebar/Sidebar";
import SettingsPopper from "./SettingsPopper";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#5BA0BF",
  },
}));

function Header() {
  const classes = useStyles();

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.header}>
        <Sidebar />

        <img src={logo} height={80} width={140} alt="This is logo of  proxym" />

        <SettingsPopper />
      </Toolbar>
    );
  };

  return displayDesktop();
}

export default Header;
