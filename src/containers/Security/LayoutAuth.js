import React from "react";
import logo from "../../assets/proxym.png";
import { Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Col, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#5BA0BF",
  },
}));

const LayoutAuth = (props) => {
  const classes = useStyles();
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Toolbar className={classes.header}>
              <img
                src={logo}
                height={70}
                width= "auto"
                alt="This is logo of  proxym"
                
              />
            </Toolbar>
          </Col>
        </Row>
        <Row>
          <Col>
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LayoutAuth;
