import { StyleProvider } from "@ant-design/cssinjs";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { App, ConfigProvider } from "antd";
import zhCn from "antd/locale/zh_CN";
import React, { Suspense } from "react";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
      );

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <StyleProvider layer>
          <ConfigProvider locale={zhCn} theme={{ cssVar: true, hashed: false }}>
            <App>
              <Outlet />
            </App>
          </ConfigProvider>
        </StyleProvider>
        <Suspense>
          <TanStackRouterDevtools position="bottom-right" />
        </Suspense>
      </>
    );
  },
  notFoundComponent: () => {
    return (
      <div>
        <p>Not found!</p>
        <Link to="/">Go home</Link>
      </div>
    );
  },
});
