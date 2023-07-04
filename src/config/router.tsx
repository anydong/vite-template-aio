import { createBrowserRouter, RouteObject } from 'react-router-dom';

import AuthLayout from '@/layouts/AuthLayout';
import BasicLayout from '@/layouts/BasicLayout';

import { App, LoginPage } from '@/app';

const routes: RouteObject[] = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
  {
    path: '/',
    element: <BasicLayout />,
    children: [],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
