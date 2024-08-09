import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store/store.js';
import './index.css';
import App from './App.jsx';
const Home = lazy(() => import('./components/home/Home.jsx'));
const Products = lazy(() => import('./components/products/Products.jsx'))
const ProductDetail = lazy(() => import('./components/products/ProductDetail.jsx'))
const Cart = lazy(() => import('./components/cart/Cart.jsx'));
const Wishlist = lazy(() => import('./components/wishlist/Wishlist.jsx'));

library.add(fas, fab, far);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/Tech-Sphere/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='products' element={<Products />} />
      <Route path='products/:productId' element={<ProductDetail />} />
      <Route path='cart' element={<Cart />} />
      <Route path='wishlist' element={<Wishlist />} />
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
