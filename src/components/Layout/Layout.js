import React from "react";
import Aux from "../hoc/Aux";
import Header from "../Navigation/Header/Header";
import { Container, Col, Row } from "react-bootstrap";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import PartyList from "../../containers/Party/PartyList";
import AddPartyMain from "../../containers/Party/AddParty/AddPartyMain";
import SentOrderList from "../../containers/Order/Customer-side/SentOrderList";
import SendOrderMain from "../../containers/Order/Customer-side/SendOrder/SendOrderMain";
import CancelOrderMain from "../../containers/Order/Customer-side/CancelOrder/CancelOrderMain";
import ChangeOrderMain from "../../containers/Order/Customer-side/ChangeOrder/ChangeOrderMain";
import OrderHistoryList from "../../containers/Order/OrderHistoryList";
import ReceivedOrderList from "../../containers/Order/Supplier-side/ReceivedOrderList";
import RejectOrderMain from "../../containers/Order/Supplier-side/RejectOrder/RejectOrderMain";
import AddDetailMain from "../../containers/Order/Supplier-side/AddDetail/AddDetailMain";
import SendInvoiceMain from "../../containers/Invoice/Supplier-side/SendInvoice/SendInvoiceMain";
import SentInvoiceList from "../../containers/Invoice/Supplier-side/SentInvoiceList";
import ReceivedInvoiceList from "../../containers/Invoice/Customer-side/ReceivedInvoiceList";
import Dashboard from "../../containers/Dashboard";


const Layout = (props) => {
  const  isLoggedIn  = useSelector((state) => state.authReducer.isLoggedIn);

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
              <Route path="home" element={<Dashboard />} />
              <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
                {console.log(isLoggedIn)}
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
                  element={<OrderHistoryList />}
                />
                <Route
                  path="parties/:partyId/supplier-side/orders"
                  element={<ReceivedOrderList />}
                />
                <Route
                  path="parties/:partyId/supplier-side/orders/:orderId/reject"
                  element={<RejectOrderMain />}
                />
                <Route
                  path="parties/:partyId/supplier-side/orders/:orderId/add-detail"
                  element={<AddDetailMain />}
                />
                <Route
                  path="parties/:partyId/supplier-side/orders/:orderId/send-invoice"
                  element={<SendInvoiceMain />}
                />
                <Route
                  path="parties/:partyId/supplier-side/orders/:orderId/history"
                  element={<OrderHistoryList />}
                />
                <Route
                  path="parties/:partyId/supplier-side/invoices"
                  element={<SentInvoiceList />}
                />
                <Route
                  path="parties/:partyId/customer-side/invoices"
                  element={<ReceivedInvoiceList />}
                />
              </Route>
            </Routes>
          </Col>
        </Row>
      </Container>
    </Aux>
  );
};


const ProtectedRoute = ({ isLoggedIn, redirectPath = "/auth/login", children }) => {
  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};


export default Layout;
