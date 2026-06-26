"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const highSchoolLinks = [
  { href: "/high-school/why-college", label: "Why College?" },
  { href: "/high-school/which-college", label: "Which College?" },
  { href: "/high-school/timeline", label: "Timeline" },
  { href: "/high-school/applications", label: "Applications" },
  { href: "/high-school/extracurriculars", label: "Extracurriculars" },
  { href: "/high-school/financial-aid", label: "Financial Aid" },
];

const careerLinks = [
  { href: "/careers/product-management", label: "Product Management" },
  { href: null, label: "Software Engineering", soon: true },
  { href: null, label: "Data Science", soon: true },
  { href: null, label: "Finance", soon: true },
];

function Dropdown({
  label,
  links,
  comingSoon,
}: {
  label: string;
  links: { href: string | null; label: string; soon?: boolean }[];
  comingSoon?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium text-[#6B6B6B] hover:text-[#0D0D0D] hover:bg-[#0D0D0D]/5 transition-colors duration-150 cursor-pointer"
      >
        {label}
        <ChevronDown size={14} className={`transition-transform duration-150 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 w-52 bg-white border border-[#E5E5E0] rounded-xl shadow-lg shadow-black/5 py-1.5 z-50">
          {comingSoon ? (
            <div className="px-4 py-3 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6B6B6B] mb-1">Coming Soon</p>
              <p className="text-xs text-[#9CA3AF]">We&apos;re building this section now.</p>
            </div>
          ) : (
            links.map((link) =>
              link.href ? (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-4 py-2.5 text-sm text-[#0D0D0D] hover:bg-[#F5F5F0] transition-colors cursor-pointer"
                >
                  {link.label}
                </Link>
              ) : (
                <div
                  key={link.label}
                  className="flex items-center justify-between px-4 py-2.5 text-sm text-[#9CA3AF]"
                >
                  {link.label}
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C4841A] bg-[#F4A825]/15 px-1.5 py-0.5 rounded-full">
                    Soon
                  </span>
                </div>
              )
            )
          )}
        </div>
      )}
    </div>
  );
}

export default function HomeNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF7]/95 backdrop-blur-sm border-b border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-[#0D0D0D] rounded-sm flex items-center justify-center">
              <span className="text-[#F4A825] font-bold text-sm" style={{ fontFamily: "'Libre Bodoni', serif" }}>O</span>
            </div>
            <span className="font-bold text-[#0D0D0D] text-lg tracking-tight" style={{ fontFamily: "'Libre Bodoni', serif" }}>
              Obolu Blueprint
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-[#6B6B6B] hover:text-[#0D0D0D] hover:bg-[#0D0D0D]/5 transition-colors duration-150 cursor-pointer">
              Home
            </Link>
            <Link href="/high-school/about" className="px-3 py-2 rounded-md text-sm font-medium text-[#6B6B6B] hover:text-[#0D0D0D] hover:bg-[#0D0D0D]/5 transition-colors duration-150 cursor-pointer">
              About Us
            </Link>
            <Dropdown label="High School" links={highSchoolLinks} />
            <Dropdown label="College" links={[]} comingSoon />
            <Dropdown label="Careers" links={careerLinks} />
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              href="/high-school/contact"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-[#0D0D0D] text-[#FAFAF7] text-sm font-medium rounded-md hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors duration-150 cursor-pointer"
            >
              Get Help
            </Link>
            <button
              className="p-2 text-[#0D0D0D] cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#E5E5E0] bg-[#FAFAF7]">
          <nav className="px-4 py-4 space-y-4">
            <div>
              <Link href="/" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-[#0D0D0D] hover:bg-[#F5F5F0] rounded-md cursor-pointer">Home</Link>
              <Link href="/high-school/about" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-sm font-medium text-[#0D0D0D] hover:bg-[#F5F5F0] rounded-md cursor-pointer">About Us</Link>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6B6B6B] mb-2 px-1">High School</p>
              {highSchoolLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 text-sm text-[#0D0D0D] hover:bg-[#F5F5F0] rounded-md cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6B6B6B] mb-2 px-1">College</p>
              <p className="px-3 py-2 text-sm text-[#9CA3AF]">Coming soon</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6B6B6B] mb-2 px-1">Careers</p>
              {careerLinks.map((link) =>
                link.href ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 text-sm text-[#0D0D0D] hover:bg-[#F5F5F0] rounded-md cursor-pointer"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <div key={link.label} className="flex items-center justify-between px-3 py-2.5 text-sm text-[#9CA3AF]">
                    {link.label}
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C4841A] bg-[#F4A825]/15 px-1.5 py-0.5 rounded-full">Soon</span>
                  </div>
                )
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
