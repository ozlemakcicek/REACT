//! componente props gonderme mantigi ile yapiyoruz.yup kullanmiyoruz o yuzden yup ifadelerini siliyorz.ama importlar yine yup tan

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Form } from "formik";
import { object, string, ref } from "yup";

export const registerSchema = object({
  username: string()
    .max(10, "Kullanıcı adı 10 karakterden az olmalıdır.")
    .required(),
  first_name: string().max(20, "İsim 20 karakterden az olmalıdır.").required(),
  last_name: string()
    .max(20, "Soyisim 30 karakterden az olmalıdır.")
    .required(),

  email: string().email().required(),
  password: string()
    .required("password zorunludur")
    .min(8, "password en az 8 karakter olmalıdır")
    .max(20, "password en fazla 20 karakter olmalıdır")
    .matches(/\d+/, "Password bir sayı içermelidir")
    .matches(/[a-z]/, "Password bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter içermelidir"),
  password2: string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required("Confirm password zorunludur!"),
});
//Register sayfasindan callback yerine props ile gonderilen olmasi gerekne degerleri karsilayip asagida kullanalim.
// inputlarda value lar formun bosalmasina  neden olur.peki nerden gelecek bu value?kendimiz yazmiyoruz bunlari.Formik in props olarak verdigi callback function dan aldigimiz values, handleChange,errors.. dan yakaliyoruz bu degerleri.
const SignUpForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  return (
    <div>
      <Form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="User Name"
            name="username"
            id="userName"
            type="text"
            variant="outlined"
            value={values.username} // name e gore yaziyoz bunlari
            onChange={handleChange} // kullncnin girdgi degeri yakalr
            onBlur={handleBlur} // kullncnin input alannindan ayrildigini yakalaylm 
            helperText={touched.username && errors.username} // birsuru input o.i.helpertext i statik yazamayiz.dinamik olmali ve kirmizi yazsin diye error u da kullaniyorz
            error={touched.username && Boolean(errors.username)}

            //!neden boolean degerini aldik?password zorunludur gibi bir mesaj degilde burdan donen string ya da bos ifadenin true ya da false halini versin. yukaridaki tanimlanan validation larda hata varsa burasi false dondurur ve kirmizi renge burunur.
          />
          <TextField
            label="First Name"
            name="first_name"
            id="firstName"
            type="text"
            variant="outlined"
            value={values.first_name}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.first_name && errors.first_name}
            error={touched.first_name && Boolean(errors.first_name)}
          />
          <TextField
            label="Last Name"
            name="last_name"
            id="last_name"
            type="text"
            variant="outlined"
            value={values.last_name}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.last_name && errors.last_name}
            error={touched.last_name && Boolean(errors.last_name)}
          />
          <TextField
            label="Email"
            name="email"
            id="email"
            type="email"
            variant="outlined"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.email && errors.email}
            error={touched.email && Boolean(errors.email)}
          />
          <TextField
            label="password"
            name="password"
            id="password"
            type="password"
            variant="outlined"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password && errors.password}
            error={touched.password && Boolean(errors.password)}
          />
          <TextField
            label="Confirm Password"
            name="password2"
            id="password"
            type="password"
            variant="outlined"
            value={values.password2}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.password2 && errors.password2}
            error={touched.password2 && Boolean(errors.password2)}
          />
          <Button type="submit" variant="contained" size="large">
            Submit
          </Button>
        </Box>
      </Form>
    </div>
  );
};

export default SignUpForm;
