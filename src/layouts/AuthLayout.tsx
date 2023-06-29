import { ConfigProvider } from "antd";
import { ReactElement } from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = (): ReactElement => {
  return (
    <ConfigProvider>
      <Outlet />
    </ConfigProvider>
  );
};
export default AuthLayout;
