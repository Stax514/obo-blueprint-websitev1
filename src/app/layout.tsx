import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Obolu Blueprint — Your guide to college",
  description: "A real guide to getting into college, built by Tsadiku and Adiyah Obolu — two Black siblings from Sacramento who did it.",
  keywords: "college prep, Black students, financial aid, college applications, scholarships, HBCU",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#FAFAF7]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
