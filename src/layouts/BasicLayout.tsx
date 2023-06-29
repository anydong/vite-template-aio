import { ProConfigProvider } from "@ant-design/pro-components";
import { ConfigProvider } from "antd";
import zhCn from "antd/locale/zh_CN";
import { ReactElement } from "react";
import { Outlet } from "react-router-dom";

const BasicLayout = (): ReactElement => {
  return (
    <ProConfigProvider>
      <ConfigProvider locale={zhCn}>
        <Outlet />
      </ConfigProvider>
    </ProConfigProvider>
  );
};
export default BasicLayout;
