import { ConfigProvider } from "antd";
import { ReactElement } from "react";
import { Outlet } from "react-router-dom";

import {
  ProConfigProvider,
  ProProvider,
  createIntl,
  merge,
} from "@ant-design/pro-components";

import zh from "@ant-design/pro-provider/lib/locale/zh_CN";

const cc: Record<string, any> = merge(zh, {
  app: {
    hello: "d",
  },
});
console.log("cccccccc", cc);

const intl = createIntl("default", cc);

const AuthLayout = (): ReactElement => {
  return (
    <ProConfigProvider>
      <ProProvider.Provider value={{ intl: intl }}>
        <ConfigProvider>
          <Outlet />
        </ConfigProvider>
      </ProProvider.Provider>
    </ProConfigProvider>
  );
};
export default AuthLayout;
