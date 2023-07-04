import { ProConfigProvider, ProLayout, ProLayoutProps, ProSettings } from '@ant-design/pro-components';
import { ConfigProvider } from 'antd';
import zhCn from 'antd/locale/zh_CN';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const BasicLayout: FC = () => {
  const proSettings: ProSettings = {
    layout: 'top',
    fixedHeader: true,
    suppressSiderWhenMenuEmpty: true,
  };
  const proLayoutProps: ProLayoutProps = {
    title: 'Admin Panel',
  };
  return (
    <ProConfigProvider>
      <ConfigProvider locale={zhCn}>
        <ProLayout {...proLayoutProps} {...proSettings}>
          <Outlet />
        </ProLayout>
      </ConfigProvider>
    </ProConfigProvider>
  );
};
export default BasicLayout;
