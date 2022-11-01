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

import Button from "@mui/material/Button";
import { useNavigate, Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as orderActions from "../../../store/actions/orders";
import * as settingsActions from "../../../store/actions/settings";
import getOrderStatus from "../getOrderStatus";
import AcceptOrderForm from "./AcceptOrder/AcceptOrderForm";

const ReceivedOrderList = () => {
  const classes = useStyles();
  const orders = useSelector((state) => state.orderReducer.orders);
  const settings = useSelector((state) => state.settingsReducer.settings);
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const [idOfClickedRow, setIdOfClickedRow] = useState("");
  const [openAcceptDialog, setOpenAcceptDialog] = React.useState(false);
  const nav = useNavigate();
  let { partyId } = useParams();

  const handleOpenAcceptDialog = () => {
    setOpenAcceptDialog(true);
  };

  useEffect(() => {
    dispatch(orderActions.retrieveReceivedOrders(partyId));
    dispatch(settingsActions.getSettings());
  }, []);

  async function acceptWithNoFurtherAction(orderId) {
    dispatch(orderActions.acceptWithNoFurtherAction(partyId, orderId))
      .then(() => {})
      .catch((e) => {
        setErrorMessage(e.message);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      });
  }

  const checkIfActionIsPossible = (status) => {
    return status === "PENDING" || status === "CHANGED";
  };

  return (
    <React.Fragment>
      <div className={classes.distanceForTableBloc}>
        <div className={classes.distanceForTitle}>
          <Typography component="h6" variant="h4" gutterBottom>
            Liste des Bons de Commande Reçus:
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
                <StyledTableCell align="center">Client</StyledTableCell>
                <StyledTableCell align="center">Date</StyledTableCell>
                <StyledTableCell align="center">Statut</StyledTableCell>
                <StyledTableCell align="center">Négocier</StyledTableCell>
                <StyledTableCell align="center">Accepter</StyledTableCell>
                <StyledTableCell align="center">Rejetter</StyledTableCell>
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
                        order.buyerCustomerParty.party.partyName.name
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
                          size="small"
                          onClick={() =>
                            nav(
                              `/app/parties/${partyId}/supplier-side/orders/${order.technicalId}/add-detail`
                            )
                          }
                        >
                          Négocier
                        </Button>
                      ) : (
                        <Button size="small" disabled={true}>
                          Négocier
                        </Button>
                      )}
                    </TableCell>
                    <TableCell align="center">
                      {checkIfActionIsPossible(order.status) ? (
                        <>
                          {" "}
                          {settings.responseToBuyerIsRequiredWhenAcceptingOrder ? (
                            <>
                              <Button
                                onClick={() => {
                                  handleOpenAcceptDialog();
                                  setIdOfClickedRow(order.technicalId);
                                }}
                                size="small"
                              >
                                Accepter
                              </Button>
                              <AcceptOrderForm
                                openAcceptDialog={openAcceptDialog}
                                setOpenAcceptDialog={setOpenAcceptDialog}
                                orderId={idOfClickedRow}
                              />
                            </>
                          ) : (
                            <Button
                              onClick={() =>
                                acceptWithNoFurtherAction(order.technicalId)
                              }
                              size="small"
                            >
                              Accepter
                            </Button>
                          )}{" "}
                        </>
                      ) : (
                        <Button size="small" disabled={true}>
                          Accepter
                        </Button>
                      )}
                    </TableCell>
                    <TableCell align="center">
                      {checkIfActionIsPossible(order.status) ? (
                        <Button
                          size="small"
                          onClick={() =>
                            nav(
                              `/app/parties/${partyId}/supplier-side/orders/${order.technicalId}/reject`
                            )
                          }
                        >
                          Rejetter
                        </Button>
                      ) : (
                        <Button size="small" disabled={true}>
                          Rejetter
                        </Button>
                      )}
                    </TableCell>
                    <TableCell align="center">
                      {/* // A bug is created here  */}
                      <Button
                        size="small"
                        onClick={() =>
                          nav(
                            `/app/parties/${partyId}/supplier-side/orders/${order.technicalId}/history`
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
          <Link to={`/app/parties/${partyId}/supplier-side/orders/send`}>
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

export default ReceivedOrderList;
