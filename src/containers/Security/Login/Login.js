import React, { useState } from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Alert from "@mui/material/Alert";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import ValidationSchema from "./ValidationSchema";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import * as authActions from "../../../store/actions/auth";

const theme = createTheme();

export default function Login() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (values, actions) => {
    dispatch(authActions.login(values.email, values.password))
      .then(() => {
        actions.setSubmitting(true);
        nav(`/app/home`);
      })
      .catch((e) => {
        setErrorMessage('Verifiez votre email et mot de pass');
        actions.setSubmitting(false);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 15,
            marginBottom: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#5BA0BF", width: 56, height: 56 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" align="center" marginBottom={2}>
          Se connecter à  mon compte
          </Typography>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={ValidationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              {errorMessage && (
                <Grid item xs={12} marginBottom={1}>
                  <Alert severity="error">{errorMessage}</Alert>
                </Grid>
              )}
              <Field
                component={TextField}
                name="email"
                label="Adresse Email"
                type="text"
                margin="normal"
                fullWidth
              />
              <Field
                component={TextField}
                name="password"
                label="Mot de pass"
                type="password"
                margin="normal"
                fullWidth
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Se connecter
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link to={"/auth/signup"}>
                    {"Vous n'avez pas de compte ? Inscrivez-vous"}
                  </Link>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
