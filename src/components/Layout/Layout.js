import React from "react";
import Aux from "../hoc/Aux";
import Header from "../Navigation/Header/Header";
import OrderList from "../../containers/Order/OrderList";
import { Container, Col, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Main from "../../containers/Order/AddOrder/Main";
import PartyList from "../../containers/Party/PartyList";


const Layout = (props) => {
  return (
    <Aux>
      <Container fluid>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col>
            <Routes>
              {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
              <Route path="/customerSide/orders" element={<OrderList/>} />
              <Route path="/customerSide/orders/add" element={<Main/>} />
              {/* <Route path="/produits" element={<ProductList/>} /> */}
              <Route path="/parties" element={<PartyList/>} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Aux>
  );
};

export default Layout;
