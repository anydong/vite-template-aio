import { lazy } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

import AuthLayout from '@/layouts/AuthLayout';
import BasicLayout from '@/layouts/BasicLayout';

/* eslint-disable react-refresh/only-export-components */
const App = lazy(() => import('@/app/page'));
const LoginPage = lazy(() => import('@/app/auth/login/page'));
/* eslint-enable */

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
