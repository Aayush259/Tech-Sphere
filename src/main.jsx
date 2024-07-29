import React from 'react';
import ReactDOM from 'react-dom/client';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './components/home/Home.jsx';
import Products from './components/products/Products.jsx';

library.add(fas, fab);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/Tech-Sphere/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='products' element={<Products />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
