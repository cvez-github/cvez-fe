import { create } from "zustand";
import { themeOptions } from "../utils/constants";

const useAppState = create((set) => ({
  theme: themeOptions[0],
  setTheme: (theme) => set({ theme }),
}));

export default useAppState;
