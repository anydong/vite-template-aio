import loadable from "@loadable/component";

const fallback = <div>Loading...</div>;

export const App = loadable(() => import("@/pages/App"), { fallback });

export const LoginPage = loadable(() => import("@/pages/auth/login"), {
  fallback,
});
