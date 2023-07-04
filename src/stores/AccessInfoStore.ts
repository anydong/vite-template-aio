import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AccessInfo {
  token: string;
  expiresAt?: Date;
}

interface UseAccessInfoStore {
  accessInfo?: AccessInfo;
  setAccessInfo: (accessInfo: AccessInfo) => void;
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
      removeAccessInfo: () =>
        set(() => {
          return { accessInfo: undefined };
        }),
    }),
    { name: 'access_info', storage: createJSONStorage(() => localStorage) },
  ),
);

export default useAccessInfoStore;
