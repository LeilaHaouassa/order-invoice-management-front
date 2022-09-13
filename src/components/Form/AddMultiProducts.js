import React, { useState } from "react";

import DropdownInput from "../../components/Form/DropdownInput";
import productData from "../../containers/Product/ProductData";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function AddMultiProducts() {
  const [numberOfProducts, setNumberOfProducts] = useState([]);
  const addProduct = () => {
    const newNumberOfProducts = [...numberOfProducts];
    const size = newNumberOfProducts.length + 1;
    newNumberOfProducts.push(size);
    setNumberOfProducts(newNumberOfProducts);
    console.log(numberOfProducts);
  };

  const addProductField = (event) => {
    addProduct();
    event.preventDefault();
  };

  const showExtraProductField = () => {
    return numberOfProducts.map((index) => {
      return (
        <Grid
        item
        xs={12}
        key={index}
        container
        spacing={2}
        direction="row"
        justifyContent="flex-start"
      >
        <Grid item xs={2}>
          <h3>Produit:</h3>
        </Grid>
        <Grid item xs={4}>
          <DropdownInput name="OrderProduct" options={productData} />
        </Grid>
        <Grid item xs={2}>
          <h3>Quantité:</h3>
        </Grid>
        <Grid item xs={4}>
          <TextField type="number" defaultValue="1" />
        </Grid>
      </Grid>
      );
    });
  };

  return (
    <Grid item container key={-1} spacing={2} direction="column">
      <Grid
        item
        xs={12}
        container
        spacing={2}
        direction="row"
        justifyContent="flex-start"
      >
        <Grid item xs={2}>
          <h3>Produit:</h3>
        </Grid>
        <Grid item xs={4}>
          <DropdownInput name="OrderProduct" options={productData} />
        </Grid>
        <Grid item xs={2}>
          <h3>Quantité:</h3>
        </Grid>
        <Grid item xs={4}>
          <TextField type="number" defaultValue="1" />
        </Grid>
      </Grid>
      {showExtraProductField()}
      <Grid item xs={12} container justifyContent="center">
        <Button variant="outlined" color="secondary" onClick={addProduct}>
          Ajouter un autre produit
        </Button>
      </Grid>
    </Grid>
  );
}

export default AddMultiProducts;

// sx={{ width: (theme) => theme.spacing(50) }}
