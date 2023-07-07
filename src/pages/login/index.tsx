import { LoginFormPage, ProFormText } from '@ant-design/pro-components';
import { Form } from 'antd';
import { FC } from 'react';

import { LoginRequest, LoginRequestFormRule, login } from '@/services/LoginService';

const LoginPage: FC = () => {
  const [loginForm] = Form.useForm();
  const submitLoginRequest = async (formData: any) => {
    const request: LoginRequest = {
      username: formData.username,
      password: formData.password,
    };
    login(request)
      .then((response) => {
        const data = response.data;
        console.log(data);
        return true;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <LoginFormPage form={loginForm} title="登录" onFinish={submitLoginRequest}>
      <ProFormText
        name="username"
        label="用户名"
        rules={LoginRequestFormRule.username}
        formItemProps={{
          required: false,
        }}
      />
      <ProFormText.Password
        name="password"
        label="密码"
        rules={LoginRequestFormRule.password}
        formItemProps={{
          required: false,
        }}
      />
    </LoginFormPage>
  );
};

export default LoginPage;
