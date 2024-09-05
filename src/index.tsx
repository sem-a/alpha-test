import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {store} from './store/store';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PATHS } from './paths';
import Product from './page/product';
import ProductAdd from './page/product-add';

const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: <App />
  },
  {
    path: PATHS.products,
    element: <Product />
  },
  {
    path: PATHS.createProducts,
    element: <ProductAdd />
  }
])

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);