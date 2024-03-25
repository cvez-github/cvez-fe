import { create } from "zustand";

const useGlobalState = create((set) => ({
  user: null,
  theme: "dark",
  setTheme: (theme) => set({ theme }),
}));

export default useGlobalState;
