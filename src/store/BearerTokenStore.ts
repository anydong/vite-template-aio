import { create } from "zustand";

type BearerToken = {
  token: string;
  expiresAt: Date;
};

interface UseBearerTokenStoreI {
  bearerToken?: BearerToken;
  setBearerToken: (bearerToken: BearerToken) => void;
}

const useBearerTokenStore = create<UseBearerTokenStoreI>()((set) => ({
  bearerToken: undefined,
  setBearerToken: (bearerToken) =>
    set(() => {
      return { bearerToken: bearerToken };
    }),
}));

export default useBearerTokenStore;
