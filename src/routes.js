import React from 'react';

import EditProduct from './pages/EditProduct';
import NewProduct from './pages/NewProduct';
import ProductList from './pages/ProductList';
import SignIn from './pages/SignIn/';
import SignUp from './pages/SignUp/';

const routes = [
  {
    path: '/edit-products/:id',
    component: <EditProduct />,
  },
  {
    path: '/new-product',
    component: <NewProduct />,
    exact: true,
  },
  {
    path: '/product-list',
    component: <ProductList />,
    exact: true,
  },
  {
    path: '/sign-in',
    component: <SignIn />,
    exact: true,
  },
  {
    path: '/sign-up',
    component: <SignUp />,
    exact: true,
  },
];

export default routes;