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

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as invoiceActions from "../../../store/actions/invoices";


const ReceivedInvoiceList = () => {
  const classes = useStyles();
  const invoices = useSelector((state) => state.invoiceReducer.invoices);
  const dispatch = useDispatch();
  let { partyId } = useParams();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    dispatch(invoiceActions.getReceivedInvoices(partyId))
    .then()
    .catch((e) => {
        setErrorMessage(e.message);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      });
  }, [partyId]);

  return (
    <React.Fragment>
      <div className={classes.distanceForTableBloc}>
        <div className={classes.distanceForTitle}>
          <Typography component="h6" variant="h4" gutterBottom>
            Liste des Factures Reçues:
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
              <TableRow binvoice={1}>
                <StyledTableCell align="center">Id</StyledTableCell>
                <StyledTableCell align="center">Date</StyledTableCell>
                <StyledTableCell align="center">Temps</StyledTableCell>
                <StyledTableCell align="center">Fournisseur</StyledTableCell>
                <StyledTableCell align="center">Total(DNT)</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {invoices &&
                invoices.map((invoice) => (
                  <StyledTableRow key={invoice.technicalId}>
                    <TableCell align="center">
                      {invoice.id.identifierContent}
                    </TableCell>
                    <TableCell component="th" scope="row" align="center">
                      {invoice.issueDate.dateContent}
                    </TableCell>
                    <TableCell component="th" scope="row" align="center">
                      {invoice.issueTime.timeContent}
                    </TableCell>
                    <TableCell align="center">
                      {
                        invoice.sellerSupplierParty.party.partyName.name
                          .textContent
                      }
                    </TableCell>
                    <TableCell component="th" scope="row" align="center">
                      {invoice.legalMonetaryTotal.payableAmount.amountContent}
                    </TableCell>
                    
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </React.Fragment>
  );
};

export default ReceivedInvoiceList;
