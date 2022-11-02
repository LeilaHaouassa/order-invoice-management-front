import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import { Field } from "formik";
import { TextField } from "formik-mui";

export default function SendInvoiceForm(props) {
  return (
    <React.Fragment>
      <Grid item container spacing={3}>
        <Grid item xs={12}>
          <Typography component="h6" variant="h4" align="center" gutterBottom>
            Création d'une facture
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
            label="Identifiant de la facture"
            type="text"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

