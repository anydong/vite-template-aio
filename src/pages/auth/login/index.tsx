import { useIntl } from "@ant-design/pro-components";
import { FC } from "react";

const LoginPage: FC = () => {
  const intl = useIntl();

  return <>{intl.getMessage("app.hello", "你好")}</>;
};

export default LoginPage;
