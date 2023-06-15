import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/result.svg";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";


import { Box, Button, TextField } from "@mui/material";
import { Form, Formik } from "formik";

//Formik yaz ve import et.icine initialValues yaz ve kendi apikeyin ile acilan API den account_register_create yapisini al getir
// Schemayi da getir importu ile beraber

import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(4, "Too Short!")
    .max(150, "Too Long!")
    .required("username required"),
  first_name: Yup.string().max(100, "Too Long!").required("Required"),
  last_name: Yup.string().max(100, "Too Long!").required("Required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string()
    .min(8, "En az 8 karakter uzunluğunda olması lazım")
    .max(50, "Too Long!")
    .matches(/\d+/, "Password bir sayı içermelidir")
    .matches(/[a-z]/, "Password bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter içermelidir") //regex
    .required("Required"),
  password2: Yup.string()
    .oneOf([Yup.ref("password")], "Password aynı olmak zorundadır!")
    .required("Required"),
});

const Register = () => {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

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
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>
          {/* formik ve schema kismini,Formik in Formunu  siteden getirip ayarlamalari apiyoruz.Material UI den input alanini getir duzenle */}
          <Formik
            initialValues={{
              username: "",
              first_name: "",
              last_name: "",
              email: "",
              password: "",
              password2: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              //! submit işlemi gerçekleştiğinde yapmasını istediğimiz işlemleri buraya yazıyoruz.

              console.log(values);
              actions.resetForm();
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <Form>
                <Box sx={{display:"flex", flexDirection:"column", gap:2}}>
                  <TextField
                    id="username"
                    label="User Name"
                    type="text"
                    variant="outlined"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.username && errors.username} //validationda verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için
                    error={touched.username && errors.username} //validationda verdiğimiz kalıba uymazsa rengi errora çevirmesi için
                  />
                  {/* mui textfield kullanmadığımzda <span>{touched.username && errors.username}</span> */}

                  <TextField
                    id="first_name"
                    label="First Name"
                    type="text"
                    variant="outlined"
                    name="first_name"
                    value={values.first_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.first_name && errors.first_name} //validationda verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için
                    error={touched.first_name && errors.first_name} //validationda verdiğimiz kalıba uymazsa rengi errora çevirmesi için
                  />
                  <TextField
                    id="last_name"
                    label="Last Name"
                    type="text"
                    variant="outlined"
                    name="last_name"
                    value={values.last_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.last_name && errors.last_name} //validationda verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için
                    error={touched.last_name && errors.last_name} //validationda verdiğimiz kalıba uymazsa rengi errora çevirmesi için
                  />
                  <TextField
                    id="email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.email && errors.email} //validationda verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için
                    error={touched.email && errors.email} //validationda verdiğimiz kalıba uymazsa rengi errora çevirmesi için
                  />
                  <TextField
                    id="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.password && errors.password} //validationda verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için
                    error={touched.password && errors.password} //validationda verdiğimiz kalıba uymazsa rengi errora çevirmesi için
                  />
                  <TextField
                    id="password2"
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    name="password2"
                    value={values.password2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.password2 && errors.password2} //validationda verdiğimiz kalıba uymazsa ilgili mesajları göstermesi için
                    error={touched.password2 && errors.password2} //validationda verdiğimiz kalıba uymazsa rengi errora çevirmesi için
                  />

                  <Button type="submit" variant="contained" size="large">SUBMIT</Button>
                </Box>
              </Form>
            )}
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/">Do you have an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={0} sm={7} md={6}>
          <Container>
            <img src={image} alt="" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;

 {/* once formikten initial degerleri alip getir.sonra schema yi getir ve initial degerler icin olan sartlari yaz.sonra onsubmit yapinca olmasi gereknler.sonra formikin form yapisini getir.sonra olmazsa olmaz olan callback degerlerini getir.ve mui den yapiyi kullan ve eklemeler yap(helper text ve error mesajini dinamik sekilde ayarla).boylece form yapisini kurariz */}
