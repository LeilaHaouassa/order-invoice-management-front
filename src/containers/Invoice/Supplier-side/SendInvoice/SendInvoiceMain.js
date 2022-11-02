import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import useStyles from "../../../../components/Form/AddFormStyles";
import * as productActions from "../../../../store/actions/products";
import * as invoiceActions from "../../../../store/actions/invoices";
import ValidationSchema from "./FormModel/ValidationSchema";
import FormInitialValues from "./FormModel/FormInitialValues";
import FormLayout from "../../../../components/Form/FormLayout/FormLayout";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SendInvoiceForm from "./SendInvoiceForm";
import AddMultiInvoiceLine from "../../AddMultiInvoiceLine";

function SendInvoiceMain() {
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
      dispatch(invoiceActions.getDocumentForInvoice(partyId, orderId))
        .then((data) => {
          console.log(data);
          setLegalTotalVar(
            data.anticipatedMonetaryTotal === undefined
              ? data.legalMonetaryTotal.payableAmount.amountContent
              : data.anticipatedMonetaryTotal.payableAmount.amountContent
          );
          let newSizeOfInvoiceLine = data.orderLine.length;
          for (let i = 1; i < newSizeOfInvoiceLine; i++) {
            FormInitialValues.invoiceLine.push({
              id: {
                identifierContent: "",
              },
              item: "",
              lineExtensionAmount: {
                amountContent: 0,
              },
              invoicedQuantity: {
                quantityContent: 1,
              },
            })
            
          }
          for (let i = 0; i < newSizeOfInvoiceLine; i++) {
            let index = products.findIndex((product) => {
              return (
                product.name.textContent ===
                data.orderLine[i].lineItem.item.name.textContent
              );
            });
            FormInitialValues.invoiceLine[i].item  = products[index];
            FormInitialValues.invoiceLine[i].invoicedQuantity.quantityContent=data.orderLine[i].lineItem.quantity.quantityContent;
            FormInitialValues.invoiceLine[i].lineExtensionAmount.amountContent=data.orderLine[i].lineItem.price.priceAmount.amountContent;
          }
          setInitialValues(FormInitialValues);
          console.log(initialValues);
        })
        .catch((err) => {
          setErrorMessage(err.message);
          console.log(err);
        })
    );
  }, []);

  async function _submitForm(values, actions) {
    values.legalMonetaryTotal.payableAmount.amountContent = legalTotalVar;
    values.orderReference.technicalId = orderId;
    SendInvoice(values, actions);
  }
  
  async function SendInvoice(values, actions) {
    dispatch(invoiceActions.sendInvoice(partyId, values))
      .then(() => {
        actions.setSubmitting(true);
        nav(`/app/parties/${partyId}/supplier-side/invoices`);
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
                <SendInvoiceForm errorMessage={errorMessage} />

                <AddMultiInvoiceLine
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

export default SendInvoiceMain;
