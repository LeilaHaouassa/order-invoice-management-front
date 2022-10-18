import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { Formik, Form } from "formik";
import { useNavigate, useParams, Link } from "react-router-dom";
import useStyles from "../../../components/Form/AddFormStyles";

import ValidationSchema from "./FormModel/ValidationSchema";
import FormInitialValues from "./FormModel/FormInitialValues";
import FormLayout from "../../../components/Form/FormLayout/FormLayout";
import { useDispatch } from "react-redux";
import * as reduxActions from "../../../store/actions/parties";
import AddPartyForm from "./AddPartyForm";

export default function AddPartyMain() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const nav = useNavigate();
  let { technicalIdOfPartyToUpdate } = useParams();
  const isAddMode = !technicalIdOfPartyToUpdate;
  const [initialParty, setInitialParty] = useState(FormInitialValues);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {

    if (!isAddMode) {
      dispatch(reduxActions.getPartyById(technicalIdOfPartyToUpdate))
        .then((data) => {
            setInitialParty(data);
        })
        .catch((err) => {
          setErrorMessage(err.message);
          console.log(err);
        });
    }
  }, []);

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    if (isAddMode) {
      addParty(values, actions);
    } else {
      updateParty(values, actions);
    }
  }

  async function addParty(values, actions) {
    dispatch(reduxActions.addParty(values))
      .then(() => {
        actions.setSubmitting(true);
        nav("/app/parties");
      })
      .catch((e) => {
        setErrorMessage(e.message);
        actions.setSubmitting(false);
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      });
  }

  async function updateParty(values, actions) {
    dispatch(reduxActions.updateParty(technicalIdOfPartyToUpdate, values))
      .then(() => {
        actions.setSubmitting(true);
        nav("/app/parties");
      })
      .catch((e) => {
        setErrorMessage(e.message);
        actions.setSubmitting(false);
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      });
  }

  return (
    <FormLayout>
      <React.Fragment>
        <Formik
          initialValues={initialParty}
          validationSchema={ValidationSchema}
          onSubmit={_submitForm}
          enableReinitialize={true}
        >
          <Form>
            <AddPartyForm isAddMode={isAddMode} errorMessage={errorMessage}/>
            <div className={classes.buttons}>
              <div className={classes.wrapper}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  submit
                </Button>
              </div>
              <div className={classes.wrapper}>
                <Link to="/app/parties">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                  >
                    cancel
                  </Button>
                </Link>
              </div>
            </div>
          </Form>
        </Formik>
      </React.Fragment>
    </FormLayout>
  );
}
