import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/ui/fonts";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Ai dashboard",
};

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
        <main className="w-full h-full">
          <aside className="w-1/6 h-full bg-amber-300 flex flex-col items-center py-10">
            <div className="w-full h-30 text-center">
              {/* Logo */}
              <h1 className="text-2xl font-bold">Profile Settings</h1>
            </div>
            <div className="flex flex-col gap-3">
              <Button>Proyects</Button>
              <Button>Laboratory</Button>
              <Button>History</Button>
            </div>
          </aside>
          {children}
        </main>
      </body>
    </html>
  );
}
