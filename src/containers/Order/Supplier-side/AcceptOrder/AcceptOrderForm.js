import React, { useState } from "react";
import { Formik, Form } from "formik";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import * as orderActions from "../../../../store/actions/orders";
import ValidationSchema from "./FormModel/ValidationSchema";
import FormInitialValues from "./FormModel/FormInitialValues";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Field } from "formik";
import { TextField } from "formik-mui";

function AcceptOrderForm({ openAcceptDialog, setOpenAcceptDialog, orderId }) {
  const dispatch = useDispatch();
  let { partyId } = useParams();
  const [errorMessage, setErrorMessage] = useState("");
  const nav = useNavigate();

  const handleCloseAcceptDialog = () => {
    setOpenAcceptDialog(false);
  };

  async function _submitForm(values, actions) {
    values.orderReference.technicalId = orderId;
    AcceptOrder(values, actions);
  }

  async function AcceptOrder(values, actions) {
    dispatch(orderActions.acceptWithResponse(partyId, values))
      .then(() => {
        actions.setSubmitting(true);
        handleCloseAcceptDialog();
      })
      .catch((e) => {
        setErrorMessage(e.message);
        actions.setSubmitting(false);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      });
  }

  return (
    <React.Fragment>
      <Dialog open={openAcceptDialog} onClose={handleCloseAcceptDialog}>
        <Formik
          initialValues={FormInitialValues}
          validationSchema={ValidationSchema}
          onSubmit={_submitForm}
        >
          <Form>
            {/* DONT FORGET THE ERROR MESSAGE */}

            <DialogTitle>Confirmation du bon de commande</DialogTitle>
            <DialogContent>
              {errorMessage && (
                <Grid item xs={12}>
                  <Alert severity="error">{errorMessage}</Alert>
                </Grid>
              )}
              <DialogContentText>
                Pour confirmer cette commande, veuillez entrer un identifiant
                pour la confirmation.
              </DialogContentText>
              <p></p>
              <Field
                component={TextField}
                name="id.identifierContent"
                label="Identifiant de la confirmation"
                type="text"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseAcceptDialog} size="small">
                Cancel
              </Button>
              <Button type="submit" size="small">
                Envoyer
              </Button>
            </DialogActions>
          </Form>
        </Formik>
      </Dialog>
    </React.Fragment>
  );
}

export default AcceptOrderForm;
