import { ReactElement } from "react";
import { Outlet } from "react-router-dom";

const BasicLayout = (): ReactElement => {
  return <Outlet />;
};
export default BasicLayout;
