import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import InputField from "../../../components/Form/InputField";

export default function AddPartyForm(props) {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography component="h6" variant="h4" align="center" gutterBottom>
            {props.isAddMode
              ? "Création de l'entreprise"
              : "Modification de l'entreprise"}
          </Typography>
        </Grid>
        {props.errorMessage && (
          <Grid item xs={12}>
            <Alert severity="error">{props.errorMessage}</Alert>
          </Grid>
        )}
        <Grid item xs={12} sm={6}>
          <InputField
            name="partyIdentification.id.identifierContent"
            label="Identifiant de l'entreprise"
            type="text"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name="partyName.name.textContent"
            label="Nom de l'entreprise"
            type="text"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" marginTop={1}>
            Adresse postal
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name="postalAddress.id.identifierContent"
            label="Identifiant de l'adresse"
            type="text"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name="postalAddress.country.name.textContent"
            label="Pays"
            type="text"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name="postalAddress.cityName.textContent"
            label="Ville"
            type="text"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name="postalAddress.postalZone.textContent"
            label="Code postal"
            type="text"
            required
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1" marginTop={2}>
            Contact
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name="contact.id.identifierContent"
            label="Identifiant du contact"
            type="text"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name="contact.name.textContent"
            label="Nom du contact"
            type="text"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name="contact.telephone.textContent"
            label="Numéro télèphone du contact"
            type="text"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name="contact.electronicMail.textContent"
            label="Adresse mail du contact"
            type="text"
            required
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="subtitle1" marginTop={2}>
            Compte Bancaire
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name="financialAccount.id.identifierContent"
            label="Numéro du compte"
            type="text"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            name="financialAccount.currencyCode.codeContent"
            label="Code de devise"
            type="text"
          />
        </Grid>
        <Grid item xs={12} sm={9}>
          <InputField
            name="financialAccount.paymentNote.textContent"
            label="Note de paiement"
            type="text"
            multiline
            maxRows={3}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
