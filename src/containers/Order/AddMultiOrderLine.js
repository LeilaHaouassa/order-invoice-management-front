import React from "react";
import Grid from "@mui/material/Grid";
import { Field, FieldArray } from "formik";
import MenuItem from "@mui/material/MenuItem";
import { TextField } from "formik-mui";
import Button from "@mui/material/Button";
import Aux from "../../components/hoc/Aux";
import Typography from "@mui/material/Typography";

function AddMultiOrderLine(props) {


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

  const calculateAnticipatedTotal = (values,setAnticipatedTotalVar) => {
    let total = 0;
    values.orderLine.forEach((orderLine) => {
      total +=
        orderLine.lineItem.price.priceAmount.amountContent *
        orderLine.lineItem.quantity.quantityContent;
    });
    setAnticipatedTotalVar(total);
  };

  return (
    <>
      <FieldArray name="orderLine">
        <Grid item xs={12} container>
          {props.values.orderLine &&
            props.values.orderLine.length > 0 &&
            props.values.orderLine.map((orderLine, index) => {
              return (
                <Aux key={index}>
                  <Grid item xs={12}>
                    <Typography
                      variant="subtitle1"
                      align="left"
                      gutterBottom
                      marginTop={2}
                    >
                      Ligne de commande numéro {index + 1}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      component={TextField}
                      name={`orderLine[${index}].lineItem.id.identifierContent`}
                      label="Identifiant du ligne de commande"
                      type="text"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      component={TextField}
                      name={`orderLine[${index}].lineItem.quantity.quantityContent`}
                      label="Quantité du produit"
                      type="number"
                      margin="normal"
                      onBlur={(e) => {
                        calculateAnticipatedTotal(props.values,props.setAnticipatedTotalVar);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      component={TextField}
                      name={`orderLine[${index}].lineItem.price.priceAmount.amountContent`}
                      label="prix du produit"
                      margin="normal"
                      type="number"
                      onBlur={(e) => {
                        calculateAnticipatedTotal(props.values,props.setAnticipatedTotalVar);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    {props.products && props.products.length > 0 && (
                      <Field
                        component={TextField}
                        name={`orderLine[${index}].lineItem.item`}
                        label="Produit ou Service"
                        select
                        margin="normal"
                        fullWidth
                      >
                        <MenuItem selected disabled value=""></MenuItem>
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
                  </Grid>
                </Aux>
              );
            })}
        </Grid>
      </FieldArray>

      <Grid item xs={12} container justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => addOrderLineField(e, props.values, props.setValues)}
        >
          Ajouter un autre ligne de commande
        </Button>
      </Grid>

      <Grid item xs={12} container justifyContent="flex-start">
        <Grid item xs={12}>
          <Typography variant="h5" align="center" gutterBottom marginTop={2}>
            Montant Total {props.anticipatedTotalVar} TND
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default AddMultiOrderLine;
