import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AccessInfo {
  token: string;
  expiresAt?: Date;
}

interface UseAccessInfoStore {
  accessInfo?: AccessInfo;
  setAccessInfo: (accessInfo: AccessInfo) => void;
  setToken: (token: string) => void;
  removeAccessInfo: () => void;
}

const useAccessInfoStore = create<UseAccessInfoStore>()(
  persist(
    (set) => ({
      accessInfo: undefined,
      setAccessInfo: (accessInfo) =>
        set(() => {
          return { accessInfo: accessInfo };
        }),
      setToken: (token) =>
        set((state) => {
          return { accessInfo: { ...state?.accessInfo, token: token } };
        }),
      removeAccessInfo: () =>
        set(() => {
          return { accessInfo: undefined };
        }),
    }),
    { name: 'access_info', storage: createJSONStorage(() => localStorage) },
  ),
);

export default useAccessInfoStore;
