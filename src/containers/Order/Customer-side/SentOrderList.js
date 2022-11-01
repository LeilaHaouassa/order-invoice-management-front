import React, { useState, useEffect } from "react";

import {
  useStyles,
  StyledTableCell,
  StyledTableRow,
} from "../../../components/List/Styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import * as AiIcons from "react-icons/ai";

import Button from "@mui/material/Button";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as orderActions from "../../../store/actions/orders";
import getOrderStatus from "../getOrderStatus";

const SentOrderList = () => {
  const classes = useStyles();
  const orders = useSelector((state) => state.orderReducer.orders);
  const dispatch = useDispatch();
  let { partyId } = useParams();
  const nav = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    dispatch(orderActions.retrieveSentOrders(partyId));
  }, [partyId]);

  async function acceptOrder(orderId) {
    dispatch(orderActions.acceptOrder(partyId, orderId))
      .then()
      .catch((e) => {
        setErrorMessage(e.message);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      });
  }

  const checkIfChangeIsPossible = (status) => {
    return checkIfActionIsPossible(status) || status === "ACCEPTED";
  };

  const checkIfActionIsPossible = (status) => {
    return status === "CONFIRMED" || status === "NEGOTIATING";
  };

  return (
    <React.Fragment>
      <div className={classes.distanceForTableBloc}>
        <div className={classes.distanceForTitle}>
          <Typography component="h6" variant="h4" gutterBottom>
            Liste des Bons de Commande Envoyés:
          </Typography>
        </div>
        {errorMessage && (
          <Grid item xs={12}>
            <Alert severity="error">{errorMessage}</Alert>
          </Grid>
        )}
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow border={1}>
                <StyledTableCell align="center">Id</StyledTableCell>
                <StyledTableCell align="center">Fournisseur</StyledTableCell>
                <StyledTableCell align="center">Date</StyledTableCell>
                <StyledTableCell align="center">Statut</StyledTableCell>
                <StyledTableCell align="center">Accepter</StyledTableCell>
                <StyledTableCell align="center">Modifier</StyledTableCell>
                <StyledTableCell align="center">Annuler</StyledTableCell>
                <StyledTableCell align="center">Historique</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders &&
                orders.map((order) => (
                  <StyledTableRow key={order.technicalId}>
                    <TableCell align="center">
                      {order.id.identifierContent}
                    </TableCell>
                    <TableCell align="center">
                      {
                        order.sellerSupplierParty.party.partyName.name
                          .textContent
                      }
                    </TableCell>
                    <TableCell component="th" scope="row" align="center">
                      {order.issueDate.dateContent}
                    </TableCell>
                    <TableCell align="center">
                      {getOrderStatus(order.status)}
                    </TableCell>
                    <TableCell align="center">
                      {checkIfActionIsPossible(order.status) ? (
                        <Button
                          onClick={() => acceptOrder(order.technicalId)}
                          size="small"
                        >
                          Accepter
                        </Button>
                      ) : (
                        <Button disabled={true} size="small">
                          Accepter
                        </Button>
                      )}
                    </TableCell>
                    <TableCell align="center">
                      {checkIfChangeIsPossible(order.status) ? (
                        <Button
                          size="small"
                          onClick={() =>
                            nav(
                              `/app/parties/${partyId}/customer-side/orders/${order.technicalId}/change`
                            )
                          }
                        >
                          Modifier
                        </Button>
                      ) : (
                        <Button disabled={true} size="small">
                          Modifier
                        </Button>
                      )}
                    </TableCell>
                    <TableCell align="center">
                      {checkIfActionIsPossible(order.status) ? (
                        <Button
                          size="small"
                          onClick={() =>
                            nav(
                              `/app/parties/${partyId}/customer-side/orders/${order.technicalId}/cancel`
                            )
                          }
                        >
                          Annuler
                        </Button>
                      ) : (
                        <Button disabled={true} size="small">
                          Annuler
                        </Button>
                      )}
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        size="small"
                        onClick={() =>
                          nav(
                            `/app/parties/${partyId}/customer-side/orders/${order.technicalId}/history`
                          )
                        }
                      >
                        Historique
                      </Button>
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
              size="small"
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
