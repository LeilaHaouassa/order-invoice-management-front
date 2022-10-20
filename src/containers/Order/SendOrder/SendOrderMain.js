import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import useStyles from "../../../components/Form/AddFormStyles";
import * as partyActions from "../../../store/actions/parties";
import * as productActions from "../../../store/actions/products";
import * as orderActions from "../../../store/actions/orders";
import ValidationSchema from "./FormModel/ValidationSchema";
import FormInitialValues from "./FormModel/FormInitialValues";
import FormLayout from "../../../components/Form/FormLayout/FormLayout";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SendOrderForm from "./SendOrderForm";
import AddMultiOrderLine from "./AddMultiOrderLine";


function SendOrderMain() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const parties = useSelector((state) => state.partyReducer.partiesRef);
  const products = useSelector((state) => state.productReducer.products);
  let { partyId } = useParams();
  const [errorMessage, setErrorMessage] = useState("");
  const [anticipatedTotalVar, setAnticipatedTotalVar] = useState(0);
  const nav = useNavigate();

  useEffect(() => {
    dispatch(partyActions.retrieveOtherParties(partyId));
    dispatch(productActions.retrieveProducts());
  }, []);

  async function _submitForm(values, actions) {
    values.anticipatedMonetaryTotal.payableAmount.amountContent =
      anticipatedTotalVar;
    placeOrder(values, actions);
  }

  async function placeOrder(values, actions) {
    dispatch(orderActions.placeOrder(partyId, values))
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
          {({ values, setValues }) => (
            <Form>
              <Grid container spacing={3}>
                <SendOrderForm parties={parties} errorMessage={errorMessage} />

                <AddMultiOrderLine
                  products={products}
                  values={values}
                  setValues={setValues}
                  anticipatedTotalVar={anticipatedTotalVar}
                  setAnticipatedTotalVar={setAnticipatedTotalVar}
                />

                <Grid item xs={12} container justifyContent="flex-end">
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
          )}
        </Formik>
      </React.Fragment>
    </FormLayout>
  );
}

export default SendOrderMain;
