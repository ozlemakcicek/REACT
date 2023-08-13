import React from "react";
import { Form } from "formik";
import { object, string,ref } from "yup";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import * as Yup from "yup";

// import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";





export const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "zu kurz!")
    .max(150, "zu  lang!")
    .required("erforderlich"),
  first_name: Yup.string()
    //  .min(2, "zu kurz!")
    .max(100, "zu  lang!")
    .required("erforderlich"),
  last_name: Yup.string()
    //  .min(2, "zu kurz!")
    .max(100, "zu  lang!")
    .required("erforderlich"),
  email: Yup.string().email("Invalid email").required("erforderlich"),
  password: Yup.string()
    .min(8, "muss mindestens 8 Zeichen lang sein !")
    .max(150, "Zu lang!")
    .required("erforderlich")
    .matches(/\d+/, "Das Passwort muss eine Zahl enthalten") //regex.\d(decimal)+ ile sayi icermesini belrtyrz.- ile istemediklerimizi belirtirz
    .matches(/[a-z]/, "Das Passwort muss einen Kleinbuchstaben enthalten")
    .matches(/[A-Z]/, "Das Passwort muss einen Großbuchstaben enthalten")
    .matches(
      /[!,?{}><%&$#£+-.]+/,
      "Das Passwort muss ein Sonderzeichen enthalten"
    )
    .required("erforderlich"),
  password2: Yup.string() //! password ile uyusmasi lazim o nedenle asagidaki cod yaziliyor
    .oneOf([Yup.ref("password"), null], "Das Passwort muss identisch sein!")
    .required("erforderlich"),
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
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            id="username"
            name="username"
            type="text"
            label="Username"
            variant="outlined"
            //defaultValue="Username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.last_name && errors.username}
            error={touched.last_name && Boolean(errors.username)}
            required
            //error=True ya da False olsun diye Boolean  ile sarmalaldik
          />
          <TextField
            id="first_name"
            name="first_name"
            type="text"
            label="Vorname"
            variant="outlined"
            //defaultValue="Vorname"
            value={values.first_name}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.last_name && errors.first_name}
            error={touched.last_name && Boolean(errors.first_name)}
            required
          />

          <TextField
            id="lastname"
            name="last_name"
            type="text"
            label="Nachname"
            variant="outlined"
            //defaultValue="Nachname"
            value={values.last_name}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.last_name && errors.last_name}
            error={touched.last_name && Boolean(errors.last_name)}
            required
          />

          <TextField
            id="email"
            name="email"
            type="email"
            label="Email"
            variant="outlined"
            // defaultValue="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.email && errors.email}
            error={touched.email && Boolean(errors.email)}
            required
          />

          <TextField
            id="password"
            name="password"
            type="password"
            label="Password"
            variant="outlined"
            // defaultValue="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password && errors.password}
            error={touched.password && Boolean(errors.password)}
            required
          />

          <TextField
            id="password2"
            name="password2"
            type="password"
            label="Bestätige Password"
            variant="outlined"
            // defaultValue="Bestätige das Passwort"
            value={values.password2}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password2 && errors.password2}
            error={touched.password2 && Boolean(errors.password2)}
            required
          />
          {/* 
                  <TextField
                    id="image"
                    name="image"
                    // type="image"
                    label="Image"
                    variant="outlined"
                    defaultValue="Image"
                    value={values.image}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.image && errors.image}
                    error={touched.image && errors.image}
                    required
                  /> */}
          <Button type="submit" variant="contained" size="large">
            Register
          </Button>
        </Box>
      </Form>
    </div>
  );
};

export default RegisterForm;
