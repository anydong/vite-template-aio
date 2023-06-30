import {
  ProConfigProvider,
  ProLayout,
  ProLayoutProps,
  ProSettings,
} from "@ant-design/pro-components";
import { ConfigProvider } from "antd";
import { ReactElement } from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = (): ReactElement => {
  const proSettings: ProSettings = {
    layout: "top",
    fixedHeader: true,
    suppressSiderWhenMenuEmpty: true,
  };
  const proLayoutProps: ProLayoutProps = {
    title: "Admin Panel",
  };
  return (
    <ProConfigProvider>
      <ConfigProvider>
        <ProLayout {...proLayoutProps} {...proSettings}>
          <Outlet />
        </ProLayout>
      </ConfigProvider>
    </ProConfigProvider>
  );
};
export default AuthLayout;
