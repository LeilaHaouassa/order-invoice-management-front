import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import { Field } from "formik";
import MenuItem from "@mui/material/MenuItem";

import { TextField } from "formik-mui";

export default function SendOrderForm(props) {
  return (
    <React.Fragment>
      <Grid item container spacing={3}>
        <Grid item xs={12}>
          <Typography component="h3" variant="h4" align="center" gutterBottom>
            Création du Bon de Commande
          </Typography>
        </Grid>
        {props.errorMessage && (
          <Grid item xs={12}>
            <Alert severity="error">{props.errorMessage}</Alert>
          </Grid>
        )}
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            name="id.identifierContent"
            label="Identifiant du bon de commande"
            type="text"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {props.parties && props.parties.length > 0 && (
            <Field
              component={TextField}
              name="sellerSupplierParty.party"
              label="Fournisseur"
              select
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
      </Grid>
    </React.Fragment>
  );
}
