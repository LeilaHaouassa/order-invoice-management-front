import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputField from "../../../components/Form/InputField";

export default function CustomerPartyForm(props) {
  const {
    formField: {
      customerFullName,
      customerPhoneNumber,
      customerEmail,
      customerCity,
      customerZipcode,
      noteOnCustomer,
    },
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Partie client
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField
            name={customerFullName.name}
            label={customerFullName.label}
            type="text"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name={customerPhoneNumber.name}
            label={customerPhoneNumber.label}
            type="text"
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name={customerEmail.name}
            label={customerEmail.label}
            type="email"
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name={noteOnCustomer.name}
            label={noteOnCustomer.label}
            type="text"
            multiline
            maxRows={2}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
        <InputField
            name={customerCity.name}
            label={customerCity.label}
            type="text"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <InputField
            name={customerZipcode.name}
            label={customerZipcode.label}
            type="text"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
