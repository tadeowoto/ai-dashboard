import {create} from 'zustand';


interface AsideState {
    dashboardMode: "Laboratory" | "Proyects" | "History";
}

interface State {
    asideMode: AsideState;
    setDashboardMode: (mode: "Laboratory" | "Proyects" | "History") => void;
}

export const useAsideStore = create<State>((set) => ({
    asideMode: {
        dashboardMode: "Laboratory",
    },
    setDashboardMode: (mode) => set({ asideMode: { dashboardMode: mode } }),
}))
