"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/why-college", label: "Why College" },
  { href: "/which-college", label: "Which College" },
  { href: "/timeline", label: "Timeline" },
  { href: "/applications", label: "Applications" },
  { href: "/extracurriculars", label: "Extracurriculars" },
  { href: "/financial-aid", label: "Financial Aid" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF7]/95 backdrop-blur-sm border-b border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <div className="w-8 h-8 bg-[#0D0D0D] rounded-sm flex items-center justify-center">
              <span className="text-[#F4A825] font-bold text-sm" style={{ fontFamily: "'Libre Bodoni', serif" }}>O</span>
            </div>
            <span
              className="font-bold text-[#0D0D0D] text-lg tracking-tight"
              style={{ fontFamily: "'Libre Bodoni', serif" }}
            >
              Obolu Blueprint
            </span>
          </Link>

          {/* Desktop nav */}
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

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="mailto:tsadiku514@gmail.com"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-[#0D0D0D] text-[#FAFAF7] text-sm font-medium rounded-md hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors duration-150 cursor-pointer"
            >
              Get Help
            </Link>
            <button
              className="lg:hidden p-2 text-[#0D0D0D] cursor-pointer"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-[#E5E5E0] bg-[#FAFAF7]">
          <nav className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "block px-3 py-2.5 rounded-md text-sm font-medium transition-colors cursor-pointer",
                  pathname === link.href
                    ? "text-[#0D0D0D] bg-[#F4A825]/15"
                    : "text-[#6B6B6B] hover:text-[#0D0D0D] hover:bg-[#0D0D0D]/5"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="mailto:tsadiku514@gmail.com"
              onClick={() => setOpen(false)}
              className="block mt-2 px-3 py-2.5 bg-[#0D0D0D] text-[#FAFAF7] text-sm font-medium rounded-md text-center cursor-pointer"
            >
              Get Help
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
