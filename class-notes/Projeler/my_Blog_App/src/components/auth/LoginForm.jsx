import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { Form } from "formik";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";

export const loginScheme = object({
  email: string()
    .email("Lutfen valid bir email giriniz")
    .required("Email zorunludur"),
  password: string().required("password zorunludur"),
});

const LoginForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  
  const navigate=useNavigate()
  
  return (
    <Form >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
          required
        />
        <TextField
          label="Password"
          name="password"
          id="password"
          type="password"
          variant="outlined"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.password && errors.password}
          error={touched.password && Boolean(errors.password)}
          required
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            bgcolor: "lightGrey",
            color: "black",
            fontWeight: "600",
            ":hover": { bgcolor: "grey" }
          }}
         
        >
          SIGN IN
        </Button>
      </Box>
    </Form>
  );
};

export default LoginForm;
