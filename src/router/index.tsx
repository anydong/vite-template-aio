import { FC, LazyExoticComponent, Suspense, lazy } from 'react';
import { RouteObject, createBrowserRouter } from 'react-router-dom';

import Loading from '@/components/Loading';
import AuthLayout from '@/layouts/AuthLayout';
import BasicLayout from '@/layouts/BasicLayout';

/* eslint-disable react-refresh/only-export-components */
const App = lazy(() => import('@/pages/index'));
const LoginPage = lazy(() => import('@/pages/login'));
/* eslint-enable */

const lazyLoad = (Component: LazyExoticComponent<FC>) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  );
};

const routes: RouteObject[] = [
  {
    path: '/',
    children: [
      {
        index: true,
        element: lazyLoad(App),
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
        element: lazyLoad(LoginPage),
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
