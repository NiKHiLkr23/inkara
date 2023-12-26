import { create } from "zustand";

type Store = {
  loading: boolean;
  setLoading: () => void;
};

export const useStore = create<Store>()((set) => ({
  loading: true,
  setLoading: () => set((state) => ({ loading: false })),
}));
