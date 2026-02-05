import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/ui/fonts";

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
        {children}
      </body>
    </html>
  );
}
