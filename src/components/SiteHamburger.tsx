"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";

const highSchoolLinks = [
  { href: "/high-school/why-college", label: "Why College?" },
  { href: "/high-school/which-college", label: "Which College?" },
  { href: "/high-school/timeline", label: "Timeline" },
  { href: "/high-school/applications", label: "Applications" },
  { href: "/high-school/extracurriculars", label: "Extracurriculars" },
  { href: "/high-school/financial-aid", label: "Financial Aid" },
];

const collegeLinks = [
  { href: "/college/guide", label: "The Guide" },
  { href: "/college/internships", label: "Summer Internships" },
  { href: "/college/clubs-and-projects", label: "Clubs & Projects" },
  { href: "/college/general-tips", label: "General Tips" },
  { href: "/college/resources", label: "Resources" },
];

const careerLinks = [
  { href: "/careers/product-management", label: "Product Management" },
  { href: "/careers/software-engineering", label: "Software Engineering" },
  { href: "/careers/consulting", label: "Consulting" },
  { href: "/careers/finance", label: "Finance & IB" },
  { href: null, label: "UX Design" },
  { href: null, label: "Data Science" },
];

function SectionDropdown({
  label,
  href,
  links,
  comingSoon,
  onClose,
}: {
  label: string;
  href: string | null;
  links: { href: string | null; label: string }[];
  comingSoon?: boolean;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-[#E5E5E0] rounded-lg overflow-hidden">
      <div className="flex items-center">
        {href ? (
          <Link
            href={href}
            onClick={onClose}
            className="flex-1 px-4 py-3 text-sm font-semibold text-[#0D0D0D] hover:bg-[#F0F0EB] transition-colors cursor-pointer"
          >
            {label}
          </Link>
        ) : (
          <span className="flex-1 px-4 py-3 text-sm font-semibold text-[#9CA3AF]">{label}</span>
        )}
        <button
          onClick={() => setExpanded(!expanded)}
          className="px-4 py-3 border-l border-[#E5E5E0] text-[#6B6B6B] hover:bg-[#F0F0EB] transition-colors cursor-pointer"
        >
          <ChevronDown size={16} className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
        </button>
      </div>
      {expanded && (
        <div className="border-t border-[#E5E5E0]">
          {comingSoon ? (
            <p className="px-4 py-3 text-sm text-[#9CA3AF] bg-white">Coming soon</p>
          ) : (
            links.map((link) =>
              link.href ? (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="block px-6 py-2.5 text-sm text-[#0D0D0D] bg-white hover:bg-[#F5F5F0] transition-colors cursor-pointer border-b border-[#E5E5E0] last:border-b-0"
                >
                  {link.label}
                </Link>
              ) : (
                <div key={link.label} className="flex items-center justify-between px-6 py-2.5 text-sm text-[#9CA3AF] bg-white border-b border-[#E5E5E0] last:border-b-0">
                  {link.label}
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C4841A] bg-[#F4A825]/15 px-1.5 py-0.5 rounded-full">Soon</span>
                </div>
              )
            )
          )}
        </div>
      )}
    </div>
  );
}

export default function SiteHamburger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Trigger button */}
      <button
        className="p-2 text-[#0D0D0D] cursor-pointer"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={20} />
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      {open && (
        <div
          className="fixed top-0 right-0 z-50 w-72 bg-[#FAFAF7] shadow-2xl flex flex-col"
          style={{ animation: "slideIn 0.25s ease-out", height: "100dvh" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#E5E5E0]">
            <span className="font-bold text-[#0D0D0D] text-base" style={{ fontFamily: "'Libre Bodoni', serif" }}>
              Navigate
            </span>
            <button
              onClick={() => setOpen(false)}
              className="p-1.5 text-[#6B6B6B] hover:text-[#0D0D0D] transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-2">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-lg border border-[#E5E5E0] bg-white hover:border-[#0D0D0D] transition-colors cursor-pointer group"
            >
              <p className="text-sm font-semibold text-[#0D0D0D]">Home</p>
              <ArrowRight size={15} className="text-[#6B6B6B] group-hover:text-[#0D0D0D] transition-colors" />
            </Link>

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between px-4 py-3 rounded-lg border border-[#E5E5E0] bg-white hover:border-[#0D0D0D] transition-colors cursor-pointer group"
            >
              <div>
                <p className="text-sm font-semibold text-[#0D0D0D]">About Us</p>
                <p className="text-xs text-[#6B6B6B] mt-0.5">Our story & why we built this</p>
              </div>
              <ArrowRight size={15} className="text-[#6B6B6B] group-hover:text-[#0D0D0D] transition-colors flex-shrink-0 ml-4" />
            </Link>

            <SectionDropdown label="High School" href="/high-school" links={highSchoolLinks} onClose={() => setOpen(false)} />
            <SectionDropdown label="College" href="/college" links={collegeLinks} onClose={() => setOpen(false)} />
            <SectionDropdown label="Careers" href="/careers" links={careerLinks} onClose={() => setOpen(false)} />
          </nav>
        </div>
      )}
    </>
  );
}
