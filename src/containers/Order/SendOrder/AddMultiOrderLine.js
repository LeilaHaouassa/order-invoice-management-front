import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { Field } from "formik";
import MenuItem from "@mui/material/MenuItem";
import { TextField } from "formik-mui";
import Button from "@mui/material/Button";
import Aux from "../../../components/hoc/Aux";

function AddMultiOrderLine(props) {
  console.log(props);
  const [numberOfOrderLines, setNumberOfOrderLines] = useState([]);
  const addOrderLine = () => {
    const newNumberOfOrderLines = [...numberOfOrderLines];
    const size = newNumberOfOrderLines.length + 1;
    newNumberOfOrderLines.push(size);
    setNumberOfOrderLines(newNumberOfOrderLines);
    console.log(numberOfOrderLines);
  };

  const addOrderLineField = (event) => {
    addOrderLine();
    event.preventDefault();
  };

  // const ShowExtraOrderLineField = () => {
  //   return numberOfOrderLines.map((index) => {
  //     return (
  //       <Aux key={index}>
  //         <Grid item xs={12} sm={6}>
  //           <Field
  //             component={TextField}
  //             name={`orderLine[${index}].lineItem.id.identifierContent`}
  //             label="Identifiant du produit"
  //             type="text"
  //             margin="normal"
  //           />
  //         </Grid>
  //         <Grid item xs={12} sm={6}>
  //           <Field
  //             component={TextField}
  //             name={`orderLine[${index}].lineItem.quantity.quantityContent`}
  //             label="Quantité du produit"
  //             type="number"
  //             margin="normal"
  //             defaultValue={1}
  //           />
  //         </Grid>
  //         <Grid item xs={12} sm={6}>
  //           <Field
  //             component={TextField}
  //             name={`orderLine[${index}].lineItem.price.priceAmount.amountContent`}
  //             label="prix du produit"
  //             margin="normal"
  //             type="number"
  //             defaultValue={0}
  //           />
  //         </Grid>
  //         <Grid item xs={12} sm={6}>
  //           <Field
  //             component={TextField}
  //             name={`orderLine[${index}].lineItem.item`}
  //             label="Produit ou Service"
  //             select
  //             margin="normal"
  //             fullWidth
  //           >
  //             {/* <MenuItem disabled selected value=""> Choisissez un produit ou service</MenuItem> */}
  //             {props.products &&
  //               props.products.map((product) => (
  //                 <MenuItem key={product.technicalId} value={product}>
  //                   {product?.name?.textContent}
  //                 </MenuItem>
  //               ))}
  //           </Field>
  //         </Grid>
  //       </Aux>
  //     );
  //   });
  // };
  return (
    <>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          name={`orderLine[0].lineItem.id.identifierContent`}
          label="Identifiant du produit"
          type="text"
          margin="normal"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          name={`orderLine[0].lineItem.quantity.quantityContent`}
          label="Quantité du produit"
          type="number"
          margin="normal"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          name={`orderLine[0].lineItem.price.priceAmount.amountContent`}
          label="prix du produit"
          margin="normal"
          type="number"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        {props.products.length > 0 && (
          <Field
            component={TextField}
            name={`orderLine[0].lineItem.item`}
            label="Produit ou Service"
            select
            margin="normal"
            fullWidth
          >
            {props.products.map((product,index) => (
              <MenuItem key={product.technicalId} value={props.products[index]}>
                <>{product?.technicalId}</>
              </MenuItem>
            ))}
          </Field>
        )}  
      </Grid>
      {/* {ShowExtraOrderLineField()} */}
      <Grid item xs={12} container justifyContent="center">
        <Button variant="outlined" color="primary" onClick={addOrderLineField}>
          Ajouter un autre ligne de commande
        </Button>
      </Grid>
    </>
  );
}

export default AddMultiOrderLine;
