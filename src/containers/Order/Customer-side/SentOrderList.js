import { useState, useEffect } from "react";

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
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as orderActions from "../../../store/actions/orders";
import getOrderStatus from "../getOrderStatus";
import CancelOrderMain from "./CancelOrder/CancelOrderMain";

import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

const SentOrderList = () => {
  const classes = useStyles();
  const orders = useSelector((state) => state.orderReducer.orders);
  const dispatch = useDispatch();
  let { partyId } = useParams();
  const nav = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [idOfClickedRow, setIdOfClickedRow] = useState("");
  const [openCancelDialog, setOpenCancelDialog] = useState(false);

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

  const handleOpenCancelDialog = () => {
    setOpenCancelDialog(true);
  };

  return (
    <>
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
                        <IconButton
                          onClick={() => acceptOrder(order.technicalId)}
                          size="small"
                          color="primary"
                        >
                          <TaskAltOutlinedIcon />
                        </IconButton>
                      ) : (
                        <IconButton disabled={true} size="small">
                          <TaskAltOutlinedIcon />
                        </IconButton>
                      )}
                    </TableCell>
                    <TableCell align="center">
                      {checkIfChangeIsPossible(order.status) ? (
                        <IconButton
                          size="small"
                          color="primary"
                          onClick={() =>
                            nav(
                              `/app/parties/${partyId}/customer-side/orders/${order.technicalId}/change`
                            )
                          }
                        >
                          <ModeEditOutlineOutlinedIcon />
                        </IconButton>
                      ) : (
                        <IconButton disabled={true} size="small">
                          <ModeEditOutlineOutlinedIcon />
                        </IconButton>
                      )}
                    </TableCell>
                    <TableCell align="center">
                      {checkIfActionIsPossible(order.status) ? (
                        <>
                          <IconButton
                            size="small"
                            color="primary"
                            onClick={() => {
                              handleOpenCancelDialog();
                              setIdOfClickedRow(order.technicalId);
                            }}
                          >
                            <CancelOutlinedIcon />
                          </IconButton>
                          <CancelOrderMain
                            openCancelDialog={openCancelDialog}
                            setOpenCancelDialog={setOpenCancelDialog}
                            orderId={idOfClickedRow}
                            partyId={partyId}
                          />
                        </>
                      ) : (
                        <IconButton disabled={true} size="small">
                          <CancelOutlinedIcon />
                        </IconButton>
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
                        <HistoryOutlinedIcon />
                      </Button>
                    </TableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <div className={classes.distanceForAddButton}>
          <Button
            variant="contained"
            size="small"
            onClick={() =>
              nav(`/app/parties/${partyId}/customer-side/orders/send`)
            }
            className={classes.containedButton}
          >
            Nouvelle commande
          </Button>
        </div>
      </div>
    </>
  );
};

export default SentOrderList;
