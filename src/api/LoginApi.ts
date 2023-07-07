import type { FormRule } from 'antd';

import client from '@/libs/request';
import { AxiosResponse } from 'axios';

export interface LoginRequest {
  username: string;
  password: string;
}

export const LoginRequestFormRule: Record<keyof LoginRequest, FormRule[]> = {
  username: [
    { required: true, message: '请输入用户名' },
    { min: 3, max: 16, message: '用户名长度在 3 ～ 16 位之间' },
  ],
  password: [
    { required: true, message: '请输入密码' },
    { min: 6, message: '密码长度最低为 6 位' },
  ],
};

export const login = async (request: LoginRequest): Promise<AxiosResponse<Response>> => {
  return client.post('/auth/login', request);
};
