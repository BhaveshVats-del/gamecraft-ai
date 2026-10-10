import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GameCraft AI",
  description: "Generate cohesive game assets from a single concept",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-white antialiased">{children}</body>
    </html>
  );
}
}
