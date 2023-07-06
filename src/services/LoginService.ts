import client from '@/libs/request';

export interface LoginRequest {
  username: string;
  password: string;
}

export const login = async (request: LoginRequest) => {
  return client.post('/auth/login', request);
};
