import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AccessTokenI {
  token: string;
  expiresAt?: Date;
}

interface UseAccessTokenStoreI {
  accessToken?: AccessTokenI;
  setAccessToken: (accessToken: AccessTokenI) => void;
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
