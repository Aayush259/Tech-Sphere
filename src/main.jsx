import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './components/home/Home.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/Tech-Sphere/' element={<App />}>
      <Route index element={<Home />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
