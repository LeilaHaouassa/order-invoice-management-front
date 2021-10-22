import React from "react";
import Aux from "../hoc/Aux";
import Header from "../Navigation/Header/Header";
import OrderList from "../../containers/Order/OrderList";
import Paper from "@material-ui/core/Paper";
import { Container, Col, Row } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import Home from "../../containers/Home";
import ProductList from "../../containers/Product/ProductList";
import SupplierList from "../../containers/Supplier/SupplierList";
import AddOrder from "../../containers/Order/AddOrder";


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
            
              <Switch>
                <Route exact path="/" component={Home} />
                <Route
                  exact
                  path="/customerSide/orders"
                  component={OrderList}
                />
                <Route exact path="/customerSide/orders/add" component={AddOrder} />
                <Route exact path="/produits" component={ProductList} />
                <Route exact path="/fournisseurs" component={SupplierList} />
                
              </Switch>
            
          </Col>
        </Row>
      </Container>
    </Aux>
  );
};

export default Layout;
