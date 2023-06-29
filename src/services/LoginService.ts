import client from "../libs/request.ts";

export interface LoginRequest {
  username: string;
  password: string;
}

export const login = async (request: LoginRequest) => {
  return client.post("/auth/login", request);
};
