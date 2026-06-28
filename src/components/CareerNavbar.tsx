"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import SiteHamburger from "@/components/SiteHamburger";

const pmLinks = [
  { href: "/careers/product-management", label: "What is PM?" },
  { href: "/careers/roadmap", label: "Roadmap" },
  { href: "/careers/prep", label: "10-Week Prep" },
  { href: "/careers/interviews", label: "Interview Guide" },
  { href: "/careers/starter-project", label: "Starter Project" },
  { href: "/careers/resources", label: "Resources" },
];

const sweLinks = [
  { href: "/careers/software-engineering", label: "What is SWE?" },
  { href: "/careers/software-engineering/roadmap", label: "Roadmap" },
  { href: "/careers/software-engineering/programs", label: "Programs" },
  { href: "/careers/software-engineering/clubs", label: "Clubs & Projects" },
  { href: "/careers/software-engineering/interviews", label: "Interview Prep" },
  { href: "/careers/resources", label: "Resources" },
];

const pmPaths = ["/careers/product-management", "/careers/roadmap", "/careers/prep", "/careers/interviews", "/careers/starter-project", "/careers/resources"];
const swePaths = ["/careers/software-engineering"];

export default function CareerNavbar() {
  const pathname = usePathname();

  const isCareersHub = pathname === "/careers";
  const isPM = pmPaths.some((p) => pathname === p || pathname.startsWith(p + "/"));
  const isSWE = swePaths.some((p) => pathname === p || pathname.startsWith(p + "/"));
  const navLinks = isPM ? pmLinks : isSWE ? sweLinks : [];

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
                Blueprint
              </span>
            </Link>
            {isCareersHub && (
              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-[#6B6B6B] bg-[#F5F5F0] px-2 py-0.5 rounded-full border border-[#E5E5E0]">
                Career Tracks
              </span>
            )}
            {isPM && (
              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-[#C4841A] bg-[#FDF8EC] px-2 py-0.5 rounded-full border border-[#F4A825]/30">
                Product Management
              </span>
            )}
            {isSWE && (
              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-[#1A1A2E] bg-[#EEF2FF] px-2 py-0.5 rounded-full border border-[#1A1A2E]/20">
                Software Engineering
              </span>
            )}
          </div>

          {navLinks.length > 0 && (
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "px-3 py-1.5 rounded text-sm font-medium transition-colors duration-150 cursor-pointer",
                    pathname === link.href
                      ? isSWE ? "bg-[#EEF2FF] text-[#1A1A2E]" : "bg-[#FDF8EC] text-[#C4841A]"
                      : "text-[#6B6B6B] hover:text-[#0D0D0D] hover:bg-[#0D0D0D]/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}

          <div className="flex items-center gap-3">
            <Link
              href="/start"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-[#0D0D0D] text-[#FAFAF7] text-sm font-semibold rounded-md hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors duration-150 cursor-pointer"
            >
              Get help
            </Link>
            <SiteHamburger />
          </div>
        </div>
      </div>
    </header>
  );
}
