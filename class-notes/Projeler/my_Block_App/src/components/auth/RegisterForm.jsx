import React from "react";
import { Form } from "formik";
import { object, string,ref } from "yup";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

// import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";






export const registerSchema = object().shape({
  username: string()
    .min(1, "Too Short!")
    .max(150, "Too Long!")
    .required("Required"),

  email: string().email("Invalid email").required(" Email Required"),

  image: string().max(400, "Too Long!"),

  bio: string(),

  password: string()
    .matches(/\d+/, "Das Passwort muss eine Zahl enthalten") //regex.\d(decimal)+ ile sayi icermesini belrtyrz.- ile istemediklerimizi belirtirz
    .matches(/[a-z]/, "Das Passwort muss einen Kleinbuchstaben enthalten")
    .matches(/[A-Z]/, "Das Passwort muss einen Großbuchstaben enthalten")
    .matches(
      /[!,?{}><%&$#£+-.]+/,
      "Das Passwort muss ein Sonderzeichen enthalten"
    )
    .required("Required"),

  password2: string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required("Confirm Passwort wird benötigt !"),
});


  
 
const RegisterForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
 

}) => {

  return (
    <div>
      <Form>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            marginTop: "3rem",
          }}
        >
          <TextField
            id="username"
            label="Username"
            name="username"
            type="text"
            variant="outlined"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.username && errors.username}
            error={touched.username && Boolean(errors.username)}
            required
          />

          <TextField
            id="email"
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.email && errors.email}
            error={touched.email && Boolean(errors.email)}
            required
          />

          <TextField
            id="password"
            label="Password"
            name="password"
            type="password"
            value={values.password}
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password && errors.password}
            error={touched.password && Boolean(errors.password)}
            required
          />

          <TextField
            id="password2"
            label="Confirm Password"
            name="password2"
            type="password"
            value={values.password2}
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password2 && errors.password2}
            error={touched.password2 && Boolean(errors.password2)}
            required
          />

          <TextField
            id="image"
            label="Image"
            name="image"
            type="img"
            value={values.image}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.image && errors.image}
            error={touched.image && Boolean(errors.image)}
          />

          <TextField
            id="bio"
            label="Bio"
            name="bio"
            type="text"
            value={values.bio}
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.bio && errors.bio}
            error={touched.bio && Boolean(errors.bio)}
          />

          <Button
            variant="contained"
            type="submit"
            size="large"
            sx={{
              bgcolor: "lightgreen",
              color: "black",
              fontWeight: "600",
              ":hover": { bgcolor: "lightgreen" },
            }}
          >
            SIGN UP
          </Button>
        </Box>
      </Form>
    </div>
  );
};

export default RegisterForm;
