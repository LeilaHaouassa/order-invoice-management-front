import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputField from "../../../components/Form/InputField";

export default function PaymentForm(props) {
  const {
    formField: {
      itemName,
      itemPrice,
      itemQuantity,
      itemDescription,
      expiryDate,
    },
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Article
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={itemName.name} label={itemName.label} type="text" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name={itemPrice.name}
            label={itemPrice.label}
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name={itemQuantity.name}
            label={itemQuantity.label}
            type="number"
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name={itemDescription.name}
            label={itemDescription.label}
            type="text"
            multiline
            maxRows={2}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
