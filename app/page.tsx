"use client";

import Laboratory from "@/components/features/Laboratory";
import { useAsideStore } from "@/store/useAside";

export default function Home() {
  const dashboardMode = useAsideStore((state) => state.asideMode.dashboardMode);

  return (
    <section className="w-full h-full">
      {dashboardMode === "Laboratory" && <Laboratory />}
      {dashboardMode === "Proyects" && (
        <div>
          <h2 className="text-3xl font-semibold mb-4">Proyects</h2>
          <p>Here are your Proyects. Manage and track your work efficiently.</p>
        </div>
      )}
      {dashboardMode === "History" && (
        <div>
          <h2 className="text-3xl font-semibold mb-4">History</h2>
          <p>Review your activity history and past actions here.</p>
        </div>
      )}
    </section>
  );
}
