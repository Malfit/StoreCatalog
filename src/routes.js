import React from 'react';

import EditProduct from './pages/EditProduct';
import SignIn from './pages/SignIn/';
import SignUp from './pages/SignUp/';

const routes = [
  {
    path: '/edit-products/:id',
    component: <EditProduct />,
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