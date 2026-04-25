import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface SectionLayoutProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  quote: string;
  accentColor: string;
  accentBg: string;
  accentText: string;
  prevSection?: { href: string; label: string };
  nextSection?: { href: string; label: string };
  children: React.ReactNode;
}

export default function SectionLayout({
  eyebrow,
  title,
  subtitle,
  quote,
  accentColor,
  accentBg,
  accentText,
  prevSection,
  nextSection,
  children,
}: SectionLayoutProps) {
  return (
    <>
      {/* Section Hero */}
      <section className={`${accentBg} py-20 md:py-28`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium mb-10 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            style={{ color: accentText === "text-white" ? "white" : "#0D0D0D" }}
          >
            <ArrowLeft size={16} />
            Back to Blueprint
          </Link>

          <div className="max-w-3xl">
            <p className={`text-xs font-semibold uppercase tracking-widest mb-4 opacity-70`}
              style={{ color: accentText === "text-white" ? "white" : "#0D0D0D" }}>
              {eyebrow}
            </p>
            <h1
              className={`text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] mb-6 ${accentText}`}
              style={{ fontFamily: "'Libre Bodoni', serif" }}
            >
              {title}
            </h1>
            <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${accentText} opacity-75`}>
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Quote bar */}
      <div className="bg-[#0D0D0D] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <blockquote
            className="text-[#FAFAF7] text-lg sm:text-xl italic max-w-3xl"
            style={{ fontFamily: "'Libre Bodoni', serif" }}
          >
            &ldquo;{quote}&rdquo;
            <span className="block mt-2 text-sm not-italic text-[#6B7280]">— Tsadiku & Adiyah Obolu</span>
          </blockquote>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {children}
      </div>

      {/* Nav between sections */}
      <div className="border-t border-[#E5E5E0] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-between items-center">
          <div>
            {prevSection && (
              <Link
                href={prevSection.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#6B6B6B] hover:text-[#0D0D0D] transition-colors cursor-pointer"
              >
                <ArrowLeft size={16} />
                {prevSection.label}
              </Link>
            )}
          </div>
          <div>
            {nextSection && (
              <Link
                href={nextSection.href}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D0D0D] hover:text-[#F4A825] transition-colors cursor-pointer"
              >
                {nextSection.label}
                <ArrowRight size={16} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
