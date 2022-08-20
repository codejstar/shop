import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {UserProvider } from './components/contexts/user.context';
import { ProductProvider } from './components/contexts/products.context';
import { CardProvider } from './components/context/card-context.component';

import "./categories.style.scss";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <UserProvider>
  <ProductProvider>
  <CardProvider>
   <App />
  </CardProvider>
  </ProductProvider>
  </UserProvider>
  </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
