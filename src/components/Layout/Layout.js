import React from "react";
import Aux from "../hoc/Aux";
import Header from "../Navigation/Header/Header";
import OrderList from "../../containers/Order/OrderList";
import { Container, Col, Row } from "react-bootstrap";
import { Route, Routes,  } from "react-router-dom";
import AddOrderMain from "../../containers/Order/AddOrder/AddOrderMain";
import PartyList from "../../containers/Party/List/PartyList";
import AddPartyMain from "../../containers/Party/AddParty/AddPartyMain";




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
              <Route path="/customerSide/orders/add" element={<AddOrderMain/>} />
              {/* <Route path="/produits" element={<ProductList/>} /> */}
              <Route path="/parties" element={<PartyList/>} />
              <Route path="/parties/add" element={<AddPartyMain />}/>
              {/* <Route path="/parties/edit" element={<AddPartyMain/>}/> */}
              <Route path="/parties/edit/:technicalIdOfPartyToUpdate" element={<AddPartyMain/>}/>
            </Routes>
          </Col>
        </Row>
      </Container>
    </Aux>
  );
};

export default Layout;
