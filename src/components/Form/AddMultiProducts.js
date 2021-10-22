import React, { useState } from "react";
import { Box } from "@mui/system";
import DropdownInput from "../../components/Form/DropdownInput";
import productData from "../../containers/Product/ProductData";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function AddMultiProducts() {
  const [numberOfProducts, setNumberOfProducts] = useState([]);
  const addProduct = () => {
    const newNumberOfProducts = numberOfProducts;
    const size = newNumberOfProducts.length + 1;
    newNumberOfProducts.push(size);
    setNumberOfProducts(newNumberOfProducts);
    console.log(numberOfProducts)
  };

  const addProductField = (event) => {
    addProduct();
    event.preventDefault();
  };

  return (
    <section>
      <Box>
        <DropdownInput
          name="OrderProduct"
          label="Le(s) produit(s)"
          options={productData}
        />

        <TextField
          label="Quantité"
          type="number"
          defaultValue="1"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Button variant="outlined" color="secondary" onClick={addProduct}>
          Ajouter un autre produit Helooooo
        </Button>

        

        {numberOfProducts.map((index) => {
          return (
            <div key={index}>
              <DropdownInput
                name="OrderProduct"
                label="Le(s) produit(s)"
                options={productData}
              />

              <TextField
                label="Quantité"
                type="number"
                defaultValue="1"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          );
        })}
      </Box>
    </section>
  );
}

export default AddMultiProducts;

// sx={{ width: (theme) => theme.spacing(50) }}
