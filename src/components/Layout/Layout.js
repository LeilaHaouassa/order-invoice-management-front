import React from "react";
import Aux from "../hoc/Aux";
import Header from "../Navigation/Header/Header";
import { Container, Col, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import PartyList from "../../containers/Party/PartyList";
import AddPartyMain from "../../containers/Party/AddParty/AddPartyMain";
import SentOrderList from "../../containers/Order/SentOrderList";
import SendOrderMain from "../../containers/Order/SendOrder/SendOrderMain";
import CancelOrderMain from "../../containers/Order/CancelOrder/CancelOrderMain";
import ChangeOrderMain from "../../containers/Order/ChangeOrder/ChangeOrderMain";
import OrderHistoryListForCustomer from "../../containers/Order/OrderHistoryListForCustomer";


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
              <Route path="parties" element={<PartyList />} />
              <Route path="parties/add" element={<AddPartyMain />} />
              <Route
                path="parties/edit/:technicalIdOfPartyToUpdate"
                element={<AddPartyMain />}
              />
              <Route
                path="parties/:partyId/customer-side/orders"
                element={<SentOrderList />}
              />
              <Route
                path="parties/:partyId/customer-side/orders/send"
                element={<SendOrderMain />}
              />
              <Route
                path="parties/:partyId/customer-side/orders/:orderId/cancel"
                element={<CancelOrderMain />}
              />
              <Route
                path="parties/:partyId/customer-side/orders/:orderId/change"
                element={<ChangeOrderMain />}
              />
              <Route
                path="parties/:partyId/customer-side/orders/:orderId/history"
                element={<OrderHistoryListForCustomer />}
              />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Aux>
  );
};

export default Layout;
