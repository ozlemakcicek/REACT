import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import { grey, blueGrey } from "@mui/material/colors";
import { Provider } from "react-redux";
import store,{persistor} from "./app/store";
import { ToastContainer } from "react-toastify";

//persist icin sayfanin istedklerini yapyrz
import { PersistGate } from "redux-persist/integration/react";

function App() {
  //*renkler icin thema olusturmustk ilk derste
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
        {/* redux persist icin sayfasinda istedigi bir sart asagidaki.sayfadan getrp importunu da gtryrz.ve icerisine yapini ekle ve persistor u app/store icine yukari import et */}
          <PersistGate loading={null} persistor={persistor}> 
          <AppRouter />
          </PersistGate>
         
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
