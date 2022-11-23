import React from "react";
import Grid from "@mui/material/Grid";
import { Field, FieldArray } from "formik";
import MenuItem from "@mui/material/MenuItem";
import { TextField } from "formik-mui";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";

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

function AddMultiInvoiceLine(props) {
  const classes = useStyles();
  const addInvoiceLineField = (event, values, setValues) => {
    const invoiceLine = [...values.invoiceLine];
    invoiceLine.push({
      id: {
        identifierContent: "",
      },
      item: "",
      lineExtensionAmount: {
        amountContent: 0,
      },
      invoicedQuantity: {
        quantityContent: 1,
      },
    });

    setValues({ ...values, invoiceLine });
    event.preventDefault();
  };

  const calculateTotal = (values, setLegalTotalVar) => {
    let total = 0;
    values.invoiceLine.forEach((invoiceLine) => {
      total +=
        invoiceLine.lineExtensionAmount.amountContent *
        invoiceLine.invoicedQuantity.quantityContent;
    });
    setLegalTotalVar(total);
  };

  return (
    <Grid item container columnSpacing={4}>
      <div className={classes.distanceForTableBloc}>
        <Grid item container justifyContent="flex-end">
          <Grid item xs={12} sm={2} container justifyContent="flex-end">
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ marginBottom: 10 }}
              onClick={(e) =>
                addInvoiceLineField(e, props.values, props.setValues)
              }
            >
              +
            </Button>
          </Grid>
        </Grid>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow border={1}>
                <StyledTableCell align="center">Numéro</StyledTableCell>
                <StyledTableCell align="center">Identifiant</StyledTableCell>
                <StyledTableCell align="center">Quantité</StyledTableCell>
                <StyledTableCell align="center">Prix</StyledTableCell>
                <StyledTableCell align="center">
                  Produit ou service
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <FieldArray name="invoiceLine">
                <>
                  {props.values.invoiceLine &&
                    props.values.invoiceLine.length > 0 &&
                    props.values.invoiceLine.map((invoiceLine, index) => {
                      return (
                        <StyledTableRow key={index}>
                          <TableCell align="center">{index + 1}</TableCell>
                          <TableCell align="center">
                            <Field
                              component={TextField}
                              name={`invoiceLine[${index}].id.identifierContent`}
                              type="text"
                              margin="normal"
                              variant="standard"
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Field
                              component={TextField}
                              name={`invoiceLine[${index}].invoicedQuantity.quantityContent`}
                              type="number"
                              margin="normal"
                              variant="standard"
                              onBlur={(e) => {
                                calculateTotal(
                                  props.values,
                                  props.updateLegalTotalVar
                                );
                              }}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Field
                              component={TextField}
                              name={`invoiceLine[${index}].lineExtensionAmount.amountContent`}
                              margin="normal"
                              type="number"
                              variant="standard"
                              onBlur={(e) => {
                                calculateTotal(
                                  props.values,
                                  props.updateLegalTotalVar
                                );
                              }}
                            />
                          </TableCell>
                          <TableCell align="center">
                            {props.products && props.products.length > 0 && (
                              <Field
                                component={TextField}
                                name={`invoiceLine[${index}].item`}
                                select
                                variant="standard"
                                margin="normal"
                                fullWidth
                              >
                                <MenuItem disabled value=""></MenuItem>
                                {props.products.map((product, productIndex) => (
                                  <MenuItem
                                    key={product.technicalId}
                                    value={props.products[productIndex]}
                                  >
                                    {`${product?.name?.textContent}`}
                                  </MenuItem>
                                ))}
                              </Field>
                            )}
                          </TableCell>
                        </StyledTableRow>
                      );
                    })}
                </>
              </FieldArray>
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <Grid item xs={12} container marginTop={4}>
        <Grid item xs={9}>
          <Typography variant="h5" align="right" marginRight={5} gutterBottom >
            Montant Total(TND)
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h5" align="right" marginRight={5} gutterBottom>
            {props.legalTotalVar}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AddMultiInvoiceLine;
