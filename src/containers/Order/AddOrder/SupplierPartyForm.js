import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputField from "../../../components/Form/InputField";

function SupplierPartyForm(props) {
  const {
    formField: {
      supplierFullName,
      supplierPhoneNumber,
      supplierEmail,
      supplierCity,
      supplierZipcode,
      noteOnSupplier,
    },
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Partie fournisseur
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <InputField
            name={supplierFullName.name}
            label={supplierFullName.label}
            type="text"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name={supplierPhoneNumber.name}
            label={supplierPhoneNumber.label}
            type="text"
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name={supplierEmail.name}
            label={supplierEmail.label}
            type="email"
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            name={noteOnSupplier.name}
            label={noteOnSupplier.label}
            type="text"
            multiline
            maxRows={2}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
        <InputField
            name={supplierCity.name}
            label={supplierCity.label}
            type="text"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <InputField
            name={supplierZipcode.name}
            label={supplierZipcode.label}
            type="text"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default SupplierPartyForm;
