import React, { useState, useEffect } from "react";

import {
  useStyles,
  StyledTableCell,
  StyledTableRow,
} from "../../components/List/Styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Button from "@mui/material/Button";
import { Link, useParams ,useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/orders";
import getActionType from "./getActionType";

const OrderHistoryListForCustomer = () => {
  const classes = useStyles();
  let { partyId, orderId } = useParams();
  const history = useSelector((state) => state.orderReducer.history);
  const orders = useSelector((state) => state.orderReducer.orders);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(actions.getOrderById(orderId));
    dispatch(actions.getOrderHistory(orderId));
  }, []);

  const getActionDoer = (element) => {
    switch(getActionType(element.actionType)){
      case "confirmer": case "refuser": case "négocier":
        return element.sellerSupplierParty.party.partyName.name.textContent;break;
      default:
        return element.buyerCustomerParty.party.partyName.name.textContent;break;
    }
  }

  const decideReturnPath = (pathname) => {
    if(pathname.includes("customer-side")){
      return `/app/parties/${partyId}/customer-side/orders`
    }else{
      return `/app/parties/${partyId}/supplier-side/orders`
    }
  }

  return (
    <React.Fragment>
      <div className={classes.distanceForTableBloc}>
        <div className={classes.distanceForTitle}>
          <Typography component="h6" variant="h4" gutterBottom>
            Historique de cette commande:
          </Typography>
        </div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow border={1}>
                <StyledTableCell align="center">Action</StyledTableCell>
                <StyledTableCell align="center">Actionneur</StyledTableCell>
                <StyledTableCell align="center">ID</StyledTableCell>
                <StyledTableCell align="center">Date</StyledTableCell>
                <StyledTableCell align="center">Temps</StyledTableCell>
                <StyledTableCell align="center">Détails</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders &&
                orders.length > 0 &&
                orders.map((order) => (
                  <StyledTableRow key={order.technicalId}>
                    <TableCell align="center">
                      {getActionType(order?.actionType)}
                    </TableCell>
                    <TableCell align="center">
                      {order.buyerCustomerParty.party.partyName.name.textContent}
                    </TableCell>
                    <TableCell align="center">
                      {order?.id?.identifierContent}
                    </TableCell>
                    <TableCell component="th" scope="row" align="center">
                      {order?.issueDate?.dateContent}
                    </TableCell>
                    <TableCell component="th" scope="row" align="center">
                      {order?.issueTime?.timeContent}
                    </TableCell>
                    <TableCell component="th" scope="row" align="center">
                      Détails
                    </TableCell>
                  </StyledTableRow>
                ))}
              {history &&
                history.length > 0 &&
                history.map((element) => (
                  <StyledTableRow key={element.technicalId}>
                    <TableCell align="center">
                      {getActionType(element?.actionType)}
                    </TableCell>
                    <TableCell align="center">
                      {getActionDoer(element)}
                    </TableCell>
                    <TableCell align="center">
                      {element?.id?.identifierContent}
                    </TableCell>
                    <TableCell align="center">
                      {element?.issueDate?.dateContent}
                    </TableCell>
                    <TableCell align="center">
                      {element?.issueTime?.timeContent}
                    </TableCell>
                    <TableCell align="center">Détails</TableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div className={classes.distanceForAddButton}>
          <Link to={decideReturnPath(pathname)}>
            <Button
              variant="contained"
              size="small"
              className={classes.containedButton}
            >
              Retourner
            </Button>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OrderHistoryListForCustomer;
