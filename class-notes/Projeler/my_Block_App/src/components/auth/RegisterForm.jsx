import React, { useState } from "react";
import { Form } from "formik";
import { object, string, ref } from "yup";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";





//2-validate yerine validationSchema yi getirip siteden duzenlyrz.basina export yaziyorz baska syfaya gidecegi icin.ve yup ile degil component mantigi ile register sayfasindan gnderecgmz icin baslardaki yup lari silyrz.ama importlar yine yup tan
export const registerSchema = object().shape({
  userName: string()
    .min(1, "Too Short!")
    .max(150, "Too Long!")
    .required("Required"),
 

  email: string().email("Invalid email").required(" Email Required"),

  image: string().max(400, "Too Long!"),

  bio: string(),

  password: string()
    .matches(/\d+/, "Password bir sayı içermelidir") //regex.\d(decimal)+ ile sayi icermesini belrtyrz.- ile istemediklerimizi belirtirz
    .matches(/[a-z]/, "Password bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter içermelidir")
    .required("Required"),

 
});

//1-return kismini silip Formik yapisini sitedn getrp yapstryrz.initialValuesw kismini App doc daki body den gtrp " " e esitlyrz

// Register sayfasindan props olarak gonderilen CallBack icindeki degerleri(Formik sitesinden goruyoruz) karsilayalim

  

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
            label="UserName"
            name="username" // name e gore yaziyorz bunlari
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
            // value={values.email}
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
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password && errors.password}
            error={touched.password && Boolean(errors.password)}
            required
          />

          <TextField
            id="image"
            label="Image"
            name="image"
            type="img"
            // variant="outlined"
            // value={values.image}
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
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.bio && errors.bio}
            error={touched.bio && Boolean(errors.bio)}
          />

          <Button
            variant="contained"
            type="submit"
            sx={{ bgcolor: "lightgreen", color: "black", fontWeight: "600",":hover":{bgcolor:"lightgreen"}}}
         
          >
            SIGN UP
          </Button>
        </Box>
      </Form>
    </div>
  );
};

export default RegisterForm;
