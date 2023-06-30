import loadable from "@loadable/component";

export const App = loadable(() => import("@/pages/App"));

export const LoginPage = loadable(() => import("@/pages/auth/login"));
