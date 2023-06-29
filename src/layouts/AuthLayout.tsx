import { ProConfigProvider } from "@ant-design/pro-components";
import { ConfigProvider } from "antd";
import { ReactElement } from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = (): ReactElement => {
  return (
    <ProConfigProvider>
      <ConfigProvider>
        <Outlet />
      </ConfigProvider>
    </ProConfigProvider>
  );
};
export default AuthLayout;
