"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import SiteHamburger from "@/components/SiteHamburger";

const navLinks = [
  { href: "/high-school/why-college", label: "Why College" },
  { href: "/high-school/which-college", label: "Which College" },
  { href: "/high-school/timeline", label: "Timeline" },
  { href: "/high-school/applications", label: "Applications" },
  { href: "/high-school/extracurriculars", label: "Extracurriculars" },
  { href: "/high-school/financial-aid", label: "Financial Aid" },
];

export default function HsNavbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF7]/95 backdrop-blur-sm border-b border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-[#0D0D0D] rounded-sm flex items-center justify-center">
              <span className="text-[#F4A825] font-bold text-base" style={{ fontFamily: "'Libre Bodoni', serif" }}>O</span>
            </div>
            <span className="font-bold text-[#0D0D0D] text-lg tracking-tight" style={{ fontFamily: "'Libre Bodoni', serif" }}>
              Obolu Blueprint
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150 cursor-pointer",
                  pathname === link.href
                    ? "text-[#0D0D0D] bg-[#F4A825]/15"
                    : "text-[#6B6B6B] hover:text-[#0D0D0D] hover:bg-[#0D0D0D]/5"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/high-school/contact"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-[#0D0D0D] text-[#FAFAF7] text-sm font-medium rounded-md hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors duration-150 cursor-pointer"
            >
              Get Help
            </Link>
            <SiteHamburger />
          </div>
        </div>
      </div>
    </header>
  );
}
