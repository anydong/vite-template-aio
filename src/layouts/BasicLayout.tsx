import { ConfigProvider } from "antd";
import { ReactElement } from "react";
import { Outlet } from "react-router-dom";

const BasicLayout = (): ReactElement => {
  return (
    <ConfigProvider>
      <Outlet />
    </ConfigProvider>
  );
};
export default BasicLayout;
