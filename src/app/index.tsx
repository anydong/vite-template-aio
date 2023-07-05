import { lazy } from 'react';

export const App = lazy(() => import('@/app/page'));

export const LoginPage = lazy(() => import('@/app/auth/login/page'));
