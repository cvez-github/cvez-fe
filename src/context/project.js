import { create } from "zustand";

const useProjectsState = create((set) => ({
  projects: [],
  setProjects: (projects) => set({ projects }),
  addProject: (project) => set((state) => ({ projects: [...state.projects, project] })),
  shared: [],
  setShared: (shared) => set({ shared }),
}));

export default useProjectsState;