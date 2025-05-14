// Zustand/useUserStore.ts
import { create } from "zustand";

interface UserStoreState {
  user: string | null;
  setUser: (user: string | null) => void;
  clearUser: () => void;
}

const useUserStore = create<UserStoreState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));

export default useUserStore;
