import React, { useState } from "react";
import { Formik, Form } from "formik";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import useStyles from "../../../../components/Form/AddFormStyles";
import * as orderActions from "../../../../store/actions/orders";
import ValidationSchema from "./FormModel/ValidationSchema";
import FormInitialValues from "./FormModel/FormInitialValues";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Field } from "formik";
import { TextField } from "formik-mui";
import Alert from "@mui/material/Alert";

function CancelOrderMain({ openCancelDialog, setOpenCancelDialog, orderId , partyId }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const nav = useNavigate();

  async function _submitForm(values, actions) {
    values.orderReference[0].technicalId = orderId;
    CancelOrder(values, actions);
  }

  const handleCloseCancelDialog = () => {
    setOpenCancelDialog(false);
  };

  async function CancelOrder(values, actions) {
    dispatch(orderActions.cancelOrder(partyId, values))
      .then(() => {
        actions.setSubmitting(true);
        nav(`/app/parties/${partyId}/customer-side/orders`);
      })
      .catch((e) => {
        setErrorMessage(e.message);
        actions.setSubmitting(false);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      });
  }

  return (
    <React.Fragment>
      <Dialog open={openCancelDialog} onClose={handleCloseCancelDialog}>
        <Formik
          initialValues={FormInitialValues}
          validationSchema={ValidationSchema}
          onSubmit={_submitForm}
        >
          <Form>
            <DialogTitle>Annulation du Bon de Commande</DialogTitle>
            <DialogContent>
              {errorMessage && (
                <Grid item xs={12}>
                  <Alert severity="error">{errorMessage}</Alert>
                </Grid>
              )}
              <DialogContentText>
                Pour confirmer l'annulation de cette commande, veuillez entrer
                un identifiant pour l'annulation avec la raison d'annulation.
              </DialogContentText>
              <p></p>
              <Field
                component={TextField}
                name="id.identifierContent"
                label="Identifiant de la demande d'annulation"
                type="text"
                fullWidth
              />
              <p></p>
              <Field
                component={TextField}
                name="cancellationNote[0].textContent"
                label="Raison d'annulation"
                type="text"
                fullWidth
                multiline
                maxRows={3}
              />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleCloseCancelDialog}
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
              >
                Retour
              </Button>

              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="small"
                className={classes.button}
              >
                Envoyer
              </Button>
            </DialogActions>
          </Form>
        </Formik>
      </Dialog>
    </React.Fragment>
  );
}

export default CancelOrderMain;
