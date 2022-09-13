import React, { Component } from "react";
import Login from "./containers/Security/Login";

import { Route, Routes } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Layout from "./components/Layout/Layout";




class App extends Component {
  
  render() {
    return (
      <div>
        <Routes>
          <Route path="/auth/*"  element={<Login />} />
          <Route  path="/app/*" element={<Layout />} />
        </Routes>

        {/* <Layout></Layout> */}
      </div>
    );
  }
}

export default App;
