import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import { Field } from "formik";


import { TextField } from "formik-mui";

export default function CancelOrderForm(props) {
  return (
    <React.Fragment>
      <Grid item container spacing={3}>
        <Grid item xs={12}>
          <Typography component="h5" variant="h5" align="center" gutterBottom>
            Annulation du Bon de Commande
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
            label="Identifiant de la demande d'annulation"
            type="text"
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} sm={8}>
          <Field
            component={TextField}
            name="cancellationNote[0].textContent"
            label="Raison d'annulation"
            type="text"
            fullWidth
            multiline
            maxRows={3}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}