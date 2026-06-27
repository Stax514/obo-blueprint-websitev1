"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import SiteHamburger from "@/components/SiteHamburger";

const navLinks = [
  { href: "/college/guide", label: "The Guide" },
  { href: "/college/internships", label: "Internships" },
  { href: "/college/clubs-and-projects", label: "Clubs & Projects" },
  { href: "/college/general-tips", label: "General Tips" },
  { href: "/college/resources", label: "Resources" },
];

export default function CollegeNavbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF7]/95 backdrop-blur-sm border-b border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 bg-[#0D0D0D] rounded-sm flex items-center justify-center">
                <span className="text-[#F4A825] font-bold text-base" style={{ fontFamily: "'Libre Bodoni', serif" }}>O</span>
              </div>
              <span className="font-bold text-[#0D0D0D] text-lg tracking-tight" style={{ fontFamily: "'Libre Bodoni', serif" }}>
                Obolu Blueprint
              </span>
            </Link>
            <span className="hidden sm:inline-flex items-center text-xs font-semibold text-[#1A1A2E] bg-[#E0E7FF] px-2 py-0.5 rounded-full border border-[#1A1A2E]/20">
              College
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "px-3 py-1.5 rounded text-sm font-medium transition-colors duration-150 cursor-pointer",
                  pathname === link.href || pathname.startsWith(link.href + "/")
                    ? "bg-[#E0E7FF] text-[#1A1A2E]"
                    : "text-[#6B6B6B] hover:text-[#0D0D0D] hover:bg-[#0D0D0D]/5"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/careers"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-[#0D0D0D] text-[#FAFAF7] text-sm font-semibold rounded-md hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors duration-150 cursor-pointer"
            >
              Career Plans
            </Link>
            <SiteHamburger />
          </div>
        </div>
      </div>
    </header>
  );
}
