import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import useStyles from "../../../components/Form/AddFormStyles";
import * as partyActions from "../../../store/actions/parties";
import * as orderActions from "../../../store/actions/orders";
import ValidationSchema from "./FormModel/ValidationSchema";
import FormInitialValues from "./FormModel/FormInitialValues";
import FormLayout from "../../../components/Form/FormLayout/FormLayout";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CancelOrderForm from "./CancelOrderForm";

function CancelOrderMain() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const parties = useSelector((state) => state.partyReducer.partiesRef);
  let { orderId, partyId } = useParams();
  const [errorMessage, setErrorMessage] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    dispatch(partyActions.retrieveOtherParties(partyId));
  }, []);

  async function _submitForm(values, actions) {
    values.orderReference[0].technicalId = orderId;
    CancelOrder(values, actions);
  }

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
    <FormLayout>
      <React.Fragment>
        <Formik
          initialValues={FormInitialValues}
          validationSchema={ValidationSchema}
          onSubmit={_submitForm}
        >

            <Form>
              <Grid container spacing={3}>
                <CancelOrderForm
                  parties={parties}
                  errorMessage={errorMessage}
                />

                <Grid item xs={12} container justifyContent="flex-end">
                  <div className={classes.wrapper}>
                    <Button
                      onClick={() =>
                        nav(`/app/parties/${partyId}/customer-side/orders`)
                      }
                      variant="contained"
                      color="primary"
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

export default CancelOrderMain;
