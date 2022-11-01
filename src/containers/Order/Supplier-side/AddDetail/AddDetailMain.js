import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import useStyles from "../../../../components/Form/AddFormStyles";
import * as productActions from "../../../../store/actions/products";
import * as orderActions from "../../../../store/actions/orders";
import ValidationSchema from "./FormModel/ValidationSchema";
import FormInitialValues from "./FormModel/FormInitialValues";
import FormLayout from "../../../../components/Form/FormLayout/FormLayout";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AddDetailForm from "./AddDetailForm";
import AddMultiOrderLine from "../../AddMultiOrderLine";

function AddDetailMain() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  let { orderId, partyId } = useParams();
  const [errorMessage, setErrorMessage] = useState("");
  const [initialValues, setInitialValues] = useState(FormInitialValues);
  const [legalTotalVar, setLegalTotalVar] = useState(0);
  const nav = useNavigate();

  const updateLegalTotalVar = (value) => {
    setLegalTotalVar(value);
  };

  useEffect(() => {
    dispatch(productActions.retrieveProducts()).then((products) =>
      dispatch(orderActions.getNegotiationDocument(partyId, orderId))
        .then((data) => {
          console.log(data);
          setLegalTotalVar(
            data.anticipatedMonetaryTotal.payableAmount.amountContent
          );
          FormInitialValues.orderLine = [...data.orderLine];
          console.log(products);
          FormInitialValues.orderLine.forEach((orderLine) => {
            let index = products.findIndex((product) => {
              return (
                product.name.textContent ===
                orderLine.lineItem.item.name.textContent
              );
            });
            orderLine.lineItem.item =products[index];
          });
          setInitialValues(FormInitialValues);
        })
        .catch((err) => {
          setErrorMessage(err.message);
          console.log(err);
        })
    );
  }, []);

  async function _submitForm(values, actions) {
    values.legalMonetaryTotal.payableAmount.amountContent = legalTotalVar;
    values.orderReference[0].technicalId = orderId;
    AddDetail(values, actions);
  }

  async function AddDetail(values, actions) {
    dispatch(orderActions.addDetail(partyId, values))
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
          initialValues={initialValues}
          validationSchema={ValidationSchema}
          onSubmit={_submitForm}
          enableReinitialize={true}
        >
          {({ values, setValues }) => (
            <Form>
              <Grid container spacing={3}>
                <AddDetailForm errorMessage={errorMessage} />

                <AddMultiOrderLine
                  products={products}
                  values={values}
                  setValues={setValues}
                  legalTotalVar={legalTotalVar}
                  updateLegalTotalVar={updateLegalTotalVar}
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
          )}
        </Formik>
      </React.Fragment>
    </FormLayout>
  );
}

export default AddDetailMain;
