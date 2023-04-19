import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes';
import "./assets/styles/app.scss"
import { Provider } from 'react-redux';
import { setupInterceptor } from './services/request';
import store from './store/configureStore';

setupInterceptor(store)

function App() {
  return (
   <Provider store={store}>
     <BrowserRouter>
        <Router />
     </BrowserRouter>
   </Provider>
  );
} 

export default App;
