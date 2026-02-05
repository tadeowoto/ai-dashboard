"use client";

import { useAsideStore } from "@/store/useAside";

export default function Home() {
  const dashboardMode = useAsideStore((state) => state.asideMode.dashboardMode);

  return <div>{dashboardMode}</div>;
}
