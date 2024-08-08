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
import ProductDetail from './components/products/ProductDetail.jsx';
import Cart from './components/cart/Cart.jsx';
import { Provider } from 'react-redux';
import store from './app/store/store.js';

library.add(fas, fab);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/Tech-Sphere/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='products' element={<Products />} />
      <Route path='products/:productId' element={<ProductDetail />} />
      <Route path='cart' element={<Cart />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
