

import React from "react";
import { Formik } from "formik";
import RegisterForm, { registerSchema } from "../components/auth/RegisterForm";
import useAuthCalls from "../hooks/useAuthCalls";


import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";

import { Link } from "react-router-dom";


const Register = () => {
  const { register } = useAuthCalls();

 

  return (
    <Container maxWidth="lg">
      <Grid
        justifyContent="center"
        alignItems="center"
        direction="row-reverse"
        sx={{
          // height: "100vh",
          p: 10,
        }}
      >
        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",

              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>

          <Typography
            variant="h4"
            align="center"
            mb={4}
            color="blue"
          
          >
            Sign Up
          </Typography>

          <Formik
            initialValues={{
              username: " ",
              email: " ",
              image: " ",
              bio: " ",
              password: " ",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              register({ ...values, password2: values.password });;
              console.log(values);
              actions.resetForm(); // submit bitince resetle
              actions.setSubmitting(false);
            }}
            //!2.yontemde component props mantigi ile gonderme o.i. butun verileri(formik icindeki) RegisterForm componentine gonderelim.Formik arasina bisey yazmaya gerek yok boylece.callback icindekiler bunlardi.registerFormda kullanacagz bnlari
            //   values,
            //   errors,
            //   touched,
            //   handleChange,
            //   handleBlur,
            //   handleSubmit,
            component={props=> <RegisterForm {...props} />}
          ></Formik>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <div style={{ display: "flex", justifyContent: "center", gap: 4 }}>
              <p>Do you have not an account?</p>
              <p sx={{ ":hover": { color: "red" } }}>
                <Link to="/login">Sign In</Link>
              </p>
            </div>
          </Box>
        </Grid>

        <Grid item xs={10} sm={7} md={6}>
        
        </Grid>
      </Grid>
    </Container>
  );
};
export default Register;
