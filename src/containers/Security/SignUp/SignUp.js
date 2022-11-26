import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import ValidationSchema from "./ValidationSchema";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import * as authActions from "../../../store/actions/auth";

const theme = createTheme();

export default function SignUp() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = (values, actions) => {
    dispatch(
      authActions.register(values.username, values.email, values.password)
    )
      .then((data) => {
        actions.setSubmitting(true);
        setSuccessful(true);
        nav(`/auth`);
      })
      .catch((e) => {
        setSuccessful(false);
        setMessage(e);
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
          <Typography component="h1" variant="h4" marginBottom={2}>
          Créer un compte
          </Typography>
          {message && (
                  <Grid item xs={12}  marginBottom={2} maxWidth={400}>
                    <Alert severity="error" >{message}</Alert>
                  </Grid>
                )}
          <Formik
            initialValues={{ username: "", email: "", password: "" }}
            validationSchema={ValidationSchema}
            onSubmit={onSubmit}
          >
           
            {!successful && (
              <Form>
                
                <Field
                  component={TextField}
                  name="username"
                  label="Nom de l'utilisateur"
                  type="text"
                  margin="normal"
                  fullWidth
                />

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
                  Créer un compte
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link to={"/auth/login"}>
                      {"Vous avez déjà un compte? Se connecter"}
                    </Link>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
