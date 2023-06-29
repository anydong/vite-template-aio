import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type AccessToken = {
  token: string;
  expiresAt?: Date;
};

interface UseAccessTokenStoreI {
  accessToken?: AccessToken;
  setAccessToken: (accessToken: AccessToken) => void;
}

const useAccessTokenStore = create<UseAccessTokenStoreI>()(
  persist(
    (set) => ({
      accessToken: undefined,
      setAccessToken: (accessToken) =>
        set(() => {
          return { accessToken: accessToken };
        }),
    }),
    { name: "access_token", storage: createJSONStorage(() => localStorage) }
  )
);

export default useAccessTokenStore;
