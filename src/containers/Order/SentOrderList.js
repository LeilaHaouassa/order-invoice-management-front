import React, { useState, useEffect } from "react";

import { useStyles, StyledTableCell, StyledTableRow } from "../../components/List/Styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { Button } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/orders";
import getOrderStatus from "./getOrderStatus";

const SentOrderList = () => {
  const classes = useStyles();
  const orders = useSelector((state) => state.orderCustomerReducer.orders);
  const dispatch = useDispatch();
  let { partyId } = useParams();

  useEffect(() => {
    dispatch(actions.retrieveSentOrders(partyId));
  }, [partyId]);


  return (
    <React.Fragment>
      <div className={classes.distanceForTableBloc}>
        <div className={classes.distanceForTitle}>
          <Typography component="h2" variant="h6" gutterBottom>
            Liste des Bons de Commande Envoyés:
          </Typography>
        </div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow border={1}>
                <StyledTableCell align="center">Id</StyledTableCell>
                <StyledTableCell align="center">Fournisseur</StyledTableCell>
                <StyledTableCell align="center">Date</StyledTableCell>
                <StyledTableCell align="center">Statut</StyledTableCell>
                {/* <StyledTableCell align="center">Montant</StyledTableCell> */}
                <StyledTableCell align="center">Détails</StyledTableCell>
                <StyledTableCell align="center">Historique</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders && 
              orders.map((order) => (
                
                <StyledTableRow key={order.technicalId}>
                  <TableCell align="center">{order.id.identifierContent}</TableCell> 
                  <TableCell align="center">{order.sellerSupplierParty.party.partyName.name.textContent}</TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {order.issueDate.dateContent}
                  </TableCell>
                  <TableCell align="center">{getOrderStatus(order.status)}</TableCell> 
                  {/* <TableCell align="center">{order.total}</TableCell> */}
                  <TableCell align="center"> voir plus
                    {/* <VscIcons.VscOpenPreview color="disabled"></VscIcons.VscOpenPreview> */}
                  </TableCell>
                  <TableCell align="center">
                    Historique
                  </TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div className={classes.distanceForAddButton}>
          <Link to={`/app/parties/${partyId}/customer-side/orders/send`}> 
          <Button
            variant="contained"
            size="large"
            className={classes.containedButton}
          >
            Envoyer un bon de commande 
          </Button>
          </Link> 
        </div>
      </div>
    </React.Fragment>
  );
};



export default SentOrderList;
