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

function AddMultiOrderLine(props) {
  const classes = useStyles();
  let legalOrAnticipatedBoolean = (props.legalTotalVar !== undefined) ? true : false; // true => legal false => anticipated
  const addOrderLineField = (event, values, setValues) => {
    const orderLine = [...values.orderLine];
    orderLine.push({
      lineItem: {
        id: {
          identifierContent: "",
        },
        quantity: {
          quantityContent: 1,
        },
        price: {
          priceAmount: {
            amountContent: 0,
          },
        },
        item: "",
      },
    });

    setValues({ ...values, orderLine });
    event.preventDefault();
  };

  const calculateTotal = (
    test,
    values,
    setAnticipatedTotalVar,
    setLegalTotalVar
  ) => {
    let total = 0;
    values.orderLine.forEach((orderLine) => {
      total +=
        orderLine.lineItem.price.priceAmount.amountContent *
        orderLine.lineItem.quantity.quantityContent;
    });
    if (test) {
      setLegalTotalVar(total);
    } else {
      setAnticipatedTotalVar(total);
    }
  };

  return (
    <Grid item container columnSpacing={4}>
      <div className={classes.distanceForTableBloc}>
        <Grid item container spacing={10}>
          <Grid item xs={12} sm={10} justifyContent="flex-start">
            <Typography
              variant="h6"
              align="left"
              marginTop={2}
              marginBottom={2}
            >
              Lignes de commande:
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2} container>
            <Button
              variant="contained"
              color="primary"
              size="small"
              style={{ margin: "auto" }}
              onClick={(e) =>
                addOrderLineField(e, props.values, props.setValues)
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
              <FieldArray name="orderLine">
                <>
                  {props.values.orderLine &&
                    props.values.orderLine.length > 0 &&
                    props.values.orderLine.map((orderLine, index) => {
                      return (
                        <StyledTableRow key={index}>
                          <TableCell align="center">{index + 1}</TableCell>
                          <TableCell align="center">
                            <Field
                              component={TextField}
                              name={`orderLine[${index}].lineItem.id.identifierContent`}
                              type="text"
                              margin="normal"
                              variant="standard"
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Field
                              component={TextField}
                              name={`orderLine[${index}].lineItem.quantity.quantityContent`}
                              type="number"
                              margin="normal"
                              variant="standard"
                              onBlur={(e) => {
                                calculateTotal(
                                  legalOrAnticipatedBoolean,
                                  props.values,
                                  props.setAnticipatedTotalVar,
                                  props.updateLegalTotalVar,
                                );
                              }}
                            />
                          </TableCell>
                          <TableCell align="center">
                            <Field
                              component={TextField}
                              name={`orderLine[${index}].lineItem.price.priceAmount.amountContent`}
                              margin="normal"
                              type="number"
                              variant="standard"
                              onBlur={(e) => {
                                calculateTotal(
                                  legalOrAnticipatedBoolean,
                                  props.values,
                                  props.setAnticipatedTotalVar,
                                  props.updateLegalTotalVar,
                                );
                              }}
                            />
                          </TableCell>
                          <TableCell align="center">
                          
                            {props.products && props.products.length > 0 && (
                              <Field
                                component={TextField}
                                name={`orderLine[${index}].lineItem.item`}
                                select
                                variant="standard"
                                margin="normal"
                                fullWidth
                              >
                                <MenuItem  disabled value=""></MenuItem>
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

      <Grid item xs={12} container justifyContent="center" marginTop={4}>
        <Grid item xs={12}>
          <Typography variant="h5" align="center" gutterBottom>
            Montant Total {legalOrAnticipatedBoolean ? props.legalTotalVar : props.anticipatedTotalVar} TND
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AddMultiOrderLine;
