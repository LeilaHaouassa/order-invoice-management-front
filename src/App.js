import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LayoutAuth from "./containers/Security/LayoutAuth";




class App extends Component {
  
  render() {
    return (
      <div>
        <Routes>
          <Route path="/auth/*"  element={<LayoutAuth />} />
          <Route  path="/app/*" element={<Layout />} />
        </Routes>
      </div>
    );
  }
}

export default App;
