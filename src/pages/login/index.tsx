import { LoginFormPage, ProFormText } from '@ant-design/pro-components';
import type { FormRule } from 'antd';
import { Form } from 'antd';
import { FC } from 'react';

import { LoginRequest, login } from '@/services/LoginService';

const usernameFieldRules: FormRule[] = [
  { required: true, message: '请输入用户名' },
  { min: 3, max: 16, message: '用户名长度在 3 ～ 16 位之间' },
];
const passwordFieldRules: FormRule[] = [
  { required: true, message: '请输入密码' },
  { min: 6, message: '密码长度最低为 6 位' },
];
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
        rules={usernameFieldRules}
        formItemProps={{
          required: false,
        }}
      />
      <ProFormText.Password
        name="password"
        label="密码"
        rules={passwordFieldRules}
        formItemProps={{
          required: false,
        }}
      />
    </LoginFormPage>
  );
};

export default LoginPage;
