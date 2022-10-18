import React from "react";
import Aux from "../hoc/Aux";
import Header from "../Navigation/Header/Header";
import { Container, Col, Row } from "react-bootstrap";
import { Route, Routes,  } from "react-router-dom";
import PartyList from "../../containers/Party/PartyList";
import AddPartyMain from "../../containers/Party/AddParty/AddPartyMain";
import SentOrderList from "../../containers/Order/SentOrderList";
import SendOrderMain from "../../containers/Order/SendOrder/SendOrderMain";




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
              {/* <Route path="/customerSide/orders/add" element={<AddOrderMain/>} /> */}
              {/* <Route path="/produits" element={<ProductList/>} /> */}
              <Route path="parties" element={<PartyList/>} />
              <Route path="parties/add" element={<AddPartyMain />}/>
              <Route path="parties/edit/:technicalIdOfPartyToUpdate" element={<AddPartyMain/>}/>
              <Route path="parties/:partyId/customer-side/orders/sent" element={<SentOrderList/>} />
              <Route path="parties/:partyId/customer-side/orders/send" element={<SendOrderMain/>} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Aux>
  );
};

export default Layout;
