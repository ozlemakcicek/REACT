//! Css olarak Material UI kullanacagiz ve Redux ile yapacagiz projeyi
//* store sayfasini ayri yaptigimiz icin onu gormesi icin Provider ile butun cocuklarini gorecegi icin burda veya AppRouter da veya index.js de bile sarmallamayi yapablrsin. import et store ve provider i

import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';
import { store } from './app/store';

function App() {

  
  return (
    <div>
    <Provider store={store}>
        <AppRouter />
    </Provider>
    </div>
  );
}

export default App;
