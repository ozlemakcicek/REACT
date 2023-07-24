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

const Login = () => {
  const { login } = useAuthCalls();

  return (
    <Container maxWidth="lg">
      <Grid
       
        justifyContent="center"
        alignItems="center"
        direction="row-reverse"
        sx={{

          height: "80vh",
          p: 10,
        }}
      >
        <Grid item xs={12} sm={10} md={6} >
          <Avatar
            sx={{
              backgroundColor: "orange",
            
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography variant="h4" align="center" mb={4} color="grey">
            Login
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

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <div style={{ display: "flex", justifyContent: "center", gap: 4 }}>
              <p>Do you have not an account?</p>
              <p >
                <Link to="/register">
                  Sign Up
                </Link>
              </p>
            </div>
          </Box>
        </Grid>

        <Grid item xs={10} sm={7} md={6}>
          {/* <Container>
            <img src={image} alt="img" />
          </Container> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
