import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { Field } from "formik";
import MenuItem from "@mui/material/MenuItem";

import { TextField } from "formik-mui";
import AddMultiOrderLine from "./AddMultiOrderLine";

export default function SendOrderForm(props) {
  const handleChange = (event) => {
    //setSelectedParty(event.target.value);
    //console.log(selectedParty);
    console.log(event.target.value);
  };
 
  

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography component="h5" variant="h5" align="center" gutterBottom>
            Création du Bon de Commande
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Field
            component={TextField}
            name="id.identifierContent"
            label="Identifiant du bon de commande"
            type="text"
          />
        </Grid>
        <Grid item xs={8}>
          {props.parties && (
            <Field
              component={TextField}
              name="sellerSupplierParty.party"
              label="Fournisseur"
              select
              margin="normal"
              fullWidth
            >
              <MenuItem selected disabled value=""></MenuItem>
              {props.parties.map((party, index) => (
                <MenuItem key={party.technicalId} value={props.parties[index]}>
                  {party?.partyName?.name?.textContent}
                </MenuItem>
              ))}
            </Field>
          )}
        </Grid>

        <AddMultiOrderLine products={props.products} />

        {/* {renderMultiline()} */}
      </Grid>
    </React.Fragment>
  );
}
