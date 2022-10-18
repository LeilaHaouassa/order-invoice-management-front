import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { Button } from "@material-ui/core";
import useStyles from "../../../components/Form/AddFormStyles";
import * as partyActions from "../../../store/actions/parties";
import * as productActions from "../../../store/actions/products";
import ValidationSchema from "./FormModel/ValidationSchema";
import FormInitialValues from "./FormModel/FormInitialValues";
import FormLayout from "../../../components/Form/FormLayout/FormLayout";
import { Link, useParams } from "react-router-dom";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import SendOrderForm from "./SendOrderForm";

function SendOrderMain() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const parties = useSelector((state) => state.partyReducer.partiesRef);
  const products = useSelector((state) => state.productReducer.products);
  let { partyId } = useParams();
  
 

  useEffect(() => {
    dispatch(partyActions.retrieveOtherParties(partyId));
    dispatch(productActions.retrieveProducts());
  }, []);


  async function _submitForm(values, actions) {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(true);
  }

  async function _validate(values,actions,errors){
    ValidationSchema.validate(values).then(function(value){
      console.log(value)
    }).catch(function(err){
      console.log(err)
    });
    console.log(errors);
  }

  return (
    <FormLayout>
      <React.Fragment>
        <Formik
          initialValues={FormInitialValues}
          validationSchema={ValidationSchema}
          onSubmit={_submitForm}
          
        >
          {({errors,values}) => (
          <Form>
            <SendOrderForm parties={parties} products={products} />
            <div className={classes.buttons}>
              {errors && console.log(errors)
              }
              <div className={classes.wrapper}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Envoyer
                </Button>
                <Button
                  onClick={() => _validate(values,errors)}
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  test
                </Button>
              </div>
            </div>
          </Form>)}
        </Formik>
      </React.Fragment>
    </FormLayout>
  );
}

export default SendOrderMain; 