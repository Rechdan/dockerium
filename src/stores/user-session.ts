import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type UserSessionStore = {
  jwt: string | null;
  setJwt: (jwt: string) => void;
  clearJwt: () => void;
};

const useUserSession = create<UserSessionStore>()(
  persist(
    immer((set) => ({
      jwt: null,
      setJwt: (jwt) => set({ jwt }),
      clearJwt: () => set({ jwt: null }),
    })),
    {
      name: "userSession",
      storage: createJSONStorage(() => localStorage),
      version: 1,
      partialize: (s) => ({
        jwt: s.jwt,
      }),
    }
  )
);

export default useUserSession;
