import React, { useState } from "react";
import { Formik, Form } from "formik";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import useStyles from "../../../../components/Form/AddFormStyles";
import * as orderActions from "../../../../store/actions/orders";
import ValidationSchema from "./FormModel/ValidationSchema";
import FormInitialValues from "./FormModel/FormInitialValues";
import FormLayout from "../../../../components/Form/FormLayout/FormLayout";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, } from "react-redux";
import RejectOrderForm from "./RejectOrderForm";

function RejectOrderMain() {
  const classes = useStyles();
  const dispatch = useDispatch();
  let { orderId, partyId } = useParams();
  const [errorMessage, setErrorMessage] = useState("");
  const nav = useNavigate();

  async function _submitForm(values, actions) {
    values.orderReference.technicalId = orderId;
    RejectOrder(values, actions);
  }

  async function RejectOrder(values, actions) {
    dispatch(orderActions.rejectOrder(partyId, values))
      .then(() => {
        actions.setSubmitting(true);
        nav(`/app/parties/${partyId}/supplier-side/orders`);
      })
      .catch((e) => {
        setErrorMessage(e.message);
        actions.setSubmitting(false);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      });
  }

  return (
    <FormLayout>
      <React.Fragment>
        <Formik
          initialValues={FormInitialValues}
          validationSchema={ValidationSchema}
          onSubmit={_submitForm}
        >

            <Form>
              <Grid container spacing={3}>
                <RejectOrderForm
                  errorMessage={errorMessage}
                />

                <Grid item xs={12} container justifyContent="flex-end">
                  <div className={classes.wrapper}>
                    <Button
                      onClick={() =>
                        nav(`/app/parties/${partyId}/supplier-side/orders`)
                      }
                      variant="contained"
                      color="primary"
                      size="small"
                      className={classes.button}
                    >
                      Retour
                    </Button>
                  </div>
                  <div className={classes.wrapper}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="small"
                      className={classes.button}
                    >
                      Envoyer
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Form>

        </Formik>
      </React.Fragment>
    </FormLayout>
  );
}

export default RejectOrderMain;
