import * as React from "react";

import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,

  CircularProgress
} from "@material-ui/core";
import { Formik, Form } from "formik";
import CustomerPartyForm from "./CustomerPartyForm";
import PaymentForm from "./PaymentForm";
import useStyles from "../../../components/Form/AddFormStyles";
import SupplierPartyForm from "./SupplierPartyForm";
import OrderFormModel from "./FormModel/OrderFormModel";
import ValidationSchema from "./FormModel/ValidationSchema";
import FormInitialValues from "./FormModel/FormInitialValues";
import FormLayout from "../../../components/Form/FormLayout/FormLayout";
import * as actionTypes from "../../../store/actions/types";
import { connect } from "react-redux";

// const steps = ["Partie client", "Partie fournisseur", "Article"];
const steps = ["", "", ""];
const { formId, formField } = OrderFormModel;

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <CustomerPartyForm formField={formField} />;
    case 1:
      return <SupplierPartyForm formField={formField} />;
    case 2:
      return <PaymentForm formField={formField} />;
    default:
      return <div> Not Found </div>;
  }
}



function AddOrderMain() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const currentValidationSchema = ValidationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  

  async function _submitForm(values, actions) {
    await _sleep(1000);
    console.log(values);
    this.props.addOrder(values);
    actions.setSubmitting(true);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <FormLayout>
      <Typography component="h1" variant="h4" align="center">
        Création bon de commande
      </Typography>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
          <div> BAsta </div>
        ) : (
          <Formik
            initialValues={FormInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                
                {_renderStepContent(activeStep)}

                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <div className={classes.wrapper}>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      {isLastStep ? "Place order" : "Next"}
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </React.Fragment>
    </FormLayout>
  );
}

const mapDispatchToProps = dispatch => {
  return{
    addOrder: (order) => dispatch({type:actionTypes ,payload:{addedOrder : order}}) 
  };
};

export default connect(null,mapDispatchToProps)(AddOrderMain);