

import React from "react";
import { Formik } from "formik";
import RegisterForm, { RegisterSchema } from "../components/auth/RegisterForm";
import useAuthCalls from "../hooks/useAuthCalls";


import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";

import myImage from "../assets/20943790.jpg";

import { Link } from "react-router-dom";


const Register = () => {
  const { register } = useAuthCalls();

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="row-reverse"
        // rowSpacing={{ sm: 3 }}
        spacing={3}
      
      >
        <Grid item xs={12}  md={6} lg={6}>
          <Avatar
            sx={{
              backgroundColor: "primary.dark",
              m: "auto",
              width: 40,
              height: 40,
              marginTop: 2,
              marginBottom: 4,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h3"
            color="primary"
            align="center"
            sx={{ marginBottom: 4 }}
          >
            Register
          </Typography>
          <Formik
            initialValues={{
              username: "",
              first_name: "",
              last_name: "",
              email: "",
              //   image: "",
              bio: "",
              password: "",
              password2: "",
            }}
            validationSchema={RegisterSchema}
            onSubmit={(values, actions) => {
              // same shape as initial values

              register({ ...values, password2: values.password });
              console.log(values);
              actions.resetForm(); //submit islemi yapincaform u resetler
            }}
            component={(props) => <RegisterForm {...props} />}
          >
</Formik>
          <Box sx={{ mt: 3, textAlign: "center", width: "100%",position: "absolute", // Yeni stil eklendi
              bottom: 0 }}>
            <Link to="/login">Haben Sie ein Konto?</Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Container>
            <img
              src={myImage}
              alt="" // eslint-disable-next-line
              style={{
                width: "100%", // Image takes the full width of the container
                height: "auto", // Maintain aspect ratio
                // display: "block", // Remove inline alignment
                //margin: "auto",
                
              }}

              //  xs={2}
            />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
