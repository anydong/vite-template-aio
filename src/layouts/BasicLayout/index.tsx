import { App, ConfigProvider } from "antd";
import zhCn from "antd/locale/zh_CN";
import type { FC } from "react";
import { Outlet } from "react-router-dom";

export const Component: FC = () => {
  return (
    <ConfigProvider locale={zhCn} theme={{ cssVar: true, hashed: false }}>
      <App>
        <Outlet />
      </App>
    </ConfigProvider>
  );
};
