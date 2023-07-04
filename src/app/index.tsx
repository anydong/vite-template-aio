import loadable from '@loadable/component';

const fallback = <div>Loading...</div>;

export const App = loadable(() => import('@/app/page'), { fallback });

export const LoginPage = loadable(() => import('@/app/auth/login/page'), {
  fallback,
});
