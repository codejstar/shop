import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {UserProvider } from './components/contexts/user.context';
import { CategoriesProvider } from './components/contexts/categories.context';
import { CardProvider } from './components/context/card-context.component';

import "./categories.style.scss";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <UserProvider>
  <CategoriesProvider>
  <CardProvider>
   <App />
  </CardProvider>
  </CategoriesProvider>
  </UserProvider>
  </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
