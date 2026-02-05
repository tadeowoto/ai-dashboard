"use client";
import "./globals.css";
import { inter } from "@/ui/fonts";
import { Button } from "@/components/ui/button";
import { useAsideStore } from "@/store/useAside";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased w-full h-screen bg-amber-100`}
      >
        <main className="w-full h-full flex flex-row">
          <aside className="w-1/6 h-full bg-amber-300 flex flex-col items-center py-10">
            <div className="w-full h-30 text-center">
              {/* Logo */}
              <h1 className="text-2xl font-bold">Profile Settings</h1>
            </div>
            <div className="flex flex-col gap-3">
              <Button
                onClick={() =>
                  useAsideStore.getState().setDashboardMode("Proyects")
                }
              >
                Proyects
              </Button>
              <Button
                onClick={() =>
                  useAsideStore.getState().setDashboardMode("Laboratory")
                }
              >
                Laboratory
              </Button>
              <Button
                onClick={() =>
                  useAsideStore.getState().setDashboardMode("History")
                }
              >
                History
              </Button>
            </div>
          </aside>
          {children}
        </main>
      </body>
    </html>
  );
}
