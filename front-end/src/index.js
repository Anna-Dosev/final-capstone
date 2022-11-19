import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store'
import { fetchVerify } from './redux/features/isLoggedInSlice';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const token = localStorage.getItem('token');
const isLoggedIn = store.dispatch(fetchVerify(token))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


