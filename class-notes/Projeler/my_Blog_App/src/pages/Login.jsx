import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
// import image from "../assets/result.svg";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import useAuthCall from "../hooks/useAuthCalls";
import LoginForm, { loginScheme } from "../components/auth/LoginForm";
import useAuthCalls from "../hooks/useAuthCalls";

import myImage2 from "../assets/20944201.jpg";

const Login = () => {
  const { login } = useAuthCalls();

  return (
    <Container maxWidth="lg">
      <Grid
      container

        justifyContent="center"
        alignItems="center"
        direction="row-reverse"
        //rowSpacing={{ sm: 3 }}
        spacing={3}
        sx={{ height: "85vh", paddingTop: "1rem" }}
      >
        <Grid item xs={12} sm={10} md={6} lg={6}>
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
            Anmeldung
          </Typography>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginScheme}
            onSubmit={(values, actions) => {
              login(values);
              actions.resetForm();
            }}
            component={(props) => <LoginForm {...props} />}
          ></Formik>

          <Box sx={{ textAlign: "center", mt: 3, width: "100%" }}>
            <Link to="/register">Haben Sie kein Konto?</Link>
          </Box>
        </Grid>

        <Grid item xs={12} sm={10} md={6} lg={6}>
          <Container>
            <img
              src={myImage2}
              alt="myImage"
              style={{
               
                width: "100%", // Image takes the full width of the container
                height: "38vh", // Maintain aspect ratio
               display: "block", // Remove inline alignment
                margin: "auto",
              }}
               
             //xs={2}
            />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
