import { create } from "zustand";
import { themeOptions } from "../utils/constants";

const useAppState = create((set) => ({
  theme: themeOptions[0],
  setTheme: (theme) => set({ theme }),
  isCVUploading: false,
  setIsCVUploading: (isCVUploading) => set({ isCVUploading }),
  isJDUploading: false,
  setIsJDUploading: (isJDUploading) => set({ isJDUploading }),
  isQuestionUploading: false,
  setIsQuestionUploading: (isQuestionUploading) => set({ isQuestionUploading }),
}));

export default useAppState;
