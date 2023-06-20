//!  EN ASAGIYA MODEL BIR TOOLKIT FOLDERI BIRAKTIM ONA BAKARAK AYNISINI YAZIP DUZENLEYELIM

//! Css olarak Material UI kullanacagiz ve Redux ile yapacagiz projeyi

//* store sayfasini ayri yaptigimiz icin onu gormesi icin Provider ile butun cocuklarini gorecegi icin burda veya AppRouter da veya index.js de bile sarmallamayi yapablrsin. import et store ve provider i

import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';
import { store } from './app/store';

function App() {

  //* provider ile cocuklarda yetkiSlice ve haberSlice i gorsun diye sarmalliyoruz.store da yapmistik bunu o yuzden de bu stor u gonderiyoruz AppRouter daki herkese
  return (
    <div>
    <Provider store={store}>
        <AppRouter />
    </Provider>
    </div>
  );
}

export default App;
