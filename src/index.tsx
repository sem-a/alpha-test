import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {store} from './store/store';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PATHS } from './paths';
import Products from './page/products';
import ProductAdd from './page/product-add';
import ProductEdit from './page/product-edit';
import Product from './page/product';

const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: <App />
  },
  {
    path: PATHS.products,
    element: <Products />
  },
  {
    path: PATHS.createProducts,
    element: <ProductAdd />
  },
  {
    path: `${PATHS.editProducts}/:id`,
    element: <ProductEdit />
  },
  {
    path: `${PATHS.product}/:id`,
    element: <Product />
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