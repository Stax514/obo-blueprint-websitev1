import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blueprint — Your guide to college and career",
  description: "Free guides for breaking into the career you want and getting into college. Roadmaps, interview frameworks, templates, and more.",
  keywords: "career blueprint, product management, APM programs, college prep, PM roadmap, college applications",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#FAFAF7]">
        {children}
      </body>
    </html>
  );
}
