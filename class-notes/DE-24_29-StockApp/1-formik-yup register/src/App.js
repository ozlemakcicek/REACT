//! npm install Formik yup diyerek formik ve yup i indirelim
//* yanlis yuklemelerde npm uninstall yuuup(boyle bir isim verdiysen) deyince o silinir formik kalir.tekrar npm install yup dersin



import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import { grey, blueGrey } from "@mui/material/colors";
import { Provider } from "react-redux";
import store from "./app/store";
import { ToastContainer } from "react-toastify";
//persist kullanimi icin dokumantatsyon da  provideri sarmalla importunu yap diyor
import { PersistGate } from "redux-persist/integration/react";


//! renkler icin bir theme create ettik  mui den ve bu theme yi ThemeProvider ile sarmalladik icine de redux Provideri koyduk.tum Componentlerimizn oldugu AppRouteri redux Provider ile sarmalladik ki store da tanimladigim  butun degerlere verilere tum componentlerde erisilebilsin. Ve toastify icin ToastContainer da ekledik
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: grey["900"],
      },
      secondary: {
        main: blueGrey["900"],
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppRouter />
        </Provider>

        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
