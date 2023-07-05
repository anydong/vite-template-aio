import { ProConfigProvider, ProLayout, ProLayoutProps, ProSettings } from '@ant-design/pro-components';
import { ConfigProvider } from 'antd';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const Index: FC = () => {
  const proSettings: ProSettings = {
    layout: 'top',
    fixedHeader: true,
    suppressSiderWhenMenuEmpty: true,
  };
  const proLayoutProps: ProLayoutProps = {
    title: 'Admin Panel',
    token: {},
    onPageChange: (location) => {
      console.log(location);
    },
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
export default Index;
