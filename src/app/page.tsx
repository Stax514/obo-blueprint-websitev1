import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import SiteHamburger from "@/components/SiteHamburger";

const highSchoolTags = ["Why College", "Which College", "Timeline", "Applications", "Extracurriculars", "Financial Aid"];
const collegeTags = ["First Year Survival", "Finding Your Path", "Internships", "Campus Life", "Mental Health", "Graduating Strong"];
const careerTags = ["Product Management", "Software Engineering", "Consulting", "Finance & IB", "UX Design", "Data Science"];

function HomeNavbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF7]/95 backdrop-blur-sm border-b border-[#E5E5E0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-7 h-7 bg-[#0D0D0D] rounded-sm flex items-center justify-center">
              <span className="text-[#F4A825] font-bold text-sm" style={{ fontFamily: "'Libre Bodoni', serif" }}>O</span>
            </div>
            <span className="font-bold text-[#0D0D0D] text-base tracking-tight" style={{ fontFamily: "'Libre Bodoni', serif" }}>
              Obolu Blueprint
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/high-school/contact"
              className="hidden sm:inline-flex items-center px-4 py-1.5 bg-[#0D0D0D] text-[#FAFAF7] text-sm font-medium rounded-md hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors duration-150 cursor-pointer"
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

export default function HomePage() {
  return (
    <>
      <HomeNavbar />

      {/* Hero */}
      <section className="bg-[#0D0D0D] py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-[#6B7280] text-xs font-semibold uppercase tracking-widest mb-6">Obolu Blueprint</p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#FAFAF7] leading-[1.05] mb-6"
            style={{ fontFamily: "'Libre Bodoni', serif" }}
          >
            Your blueprint
            <br />
            <span className="italic text-[#F4A825]">for every stage.</span>
          </h1>
          <p className="text-[#9CA3AF] text-base sm:text-lg max-w-lg leading-relaxed">
            From high school applications to your first career offer. Three guides. One path. Select the stage you&apos;re in.
          </p>
        </div>
      </section>

      {/* Stage cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24 space-y-4">

        {/* About us — above High School */}
        <Link
          href="/about"
          className="flex items-center justify-between p-5 rounded-xl border-2 border-[#0D0D0D] bg-white hover:bg-[#F5F5F0] transition-colors cursor-pointer group"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6B6B6B] mb-1">Who we are</p>
            <p className="text-base font-semibold text-[#0D0D0D]">Learn about us & who we are</p>
            <p className="text-sm text-[#6B6B6B] mt-0.5">Tsadiku & Adiyah Obolu — our story and why we built this</p>
          </div>
          <ArrowRight size={18} className="text-[#6B6B6B] group-hover:text-[#0D0D0D] flex-shrink-0 ml-6 transition-colors" />
        </Link>

        {/* 01 — High School */}
        <div className="relative border-2 border-[#F4A825] rounded-2xl p-8 bg-white">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#F4A825] rounded-md flex items-center justify-center">
                <span className="text-[#0D0D0D] font-bold text-xs">01</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#6B6B6B]">High School</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#1B4332] bg-[#1B4332]/10 border border-[#1B4332]/20 px-2 py-0.5 rounded-full">Live</span>
              </div>
            </div>
            <span className="text-[#F5F5F0] font-bold text-6xl leading-none select-none" style={{ fontFamily: "'Libre Bodoni', serif" }}>01</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#0D0D0D] mb-3" style={{ fontFamily: "'Libre Bodoni', serif" }}>
            Your blueprint to college.
          </h2>
          <p className="text-[#6B6B6B] text-sm leading-relaxed mb-6 max-w-lg">
            From 9th grade to your acceptance letter. Why college, which college, the timeline, applications, extracurriculars, and financial aid — everything written down.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {highSchoolTags.map((tag) => (
              <span key={tag} className="text-xs text-[#6B6B6B] border border-[#E5E5E0] px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>

          <Link
            href="/high-school"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D0D0D] text-[#FAFAF7] text-sm font-semibold rounded-md hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer"
          >
            Enter High School Guide
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Connector */}
        <div className="flex justify-center py-1 text-[#D4D4D0]">
          <ArrowDown size={20} />
        </div>

        {/* 02 — College */}
        <Link href="/college" className="relative border border-[#E5E5E0] rounded-2xl p-8 bg-[#FAFAF7] hover:border-[#0D0D0D] hover:shadow-md transition-all cursor-pointer block group">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#1A1A2E] rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs">02</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#1A1A2E]">College</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#1B4332] bg-[#D1FAE5] border border-[#6EE7B7] px-2 py-0.5 rounded-full">Live</span>
              </div>
            </div>
            <span className="text-[#F0F0EC] font-bold text-6xl leading-none select-none" style={{ fontFamily: "'Libre Bodoni', serif" }}>02</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#0D0D0D] mb-3" style={{ fontFamily: "'Libre Bodoni', serif" }}>
            Navigate college life.
          </h2>
          <p className="text-[#6B6B6B] text-sm leading-relaxed mb-6 max-w-lg">
            Internships, clubs, networking, mental health, studying abroad, and making the most of four years. A guide for once you&apos;re in.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {collegeTags.map((tag) => (
              <span key={tag} className="text-xs text-[#6B6B6B] border border-[#E5E5E0] px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>

          <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A1A2E] text-[#FAFAF7] text-sm font-semibold rounded-md group-hover:bg-[#F4A825] group-hover:text-[#0D0D0D] transition-colors">
            Explore the College Guide
            <ArrowRight size={14} />
          </span>
        </Link>

        {/* Connector */}
        <div className="flex justify-center py-1 text-[#D4D4D0]">
          <ArrowDown size={20} />
        </div>

        {/* 03 — Careers */}
        <div className="relative border-2 border-[#0D0D0D] rounded-2xl p-8 bg-white">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#0D0D0D] rounded-md flex items-center justify-center">
                <span className="text-[#FAFAF7] font-bold text-xs">03</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#6B6B6B]">Careers</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#1B4332] bg-[#1B4332]/10 border border-[#1B4332]/20 px-2 py-0.5 rounded-full">Live</span>
              </div>
            </div>
            <span className="text-[#F5F5F0] font-bold text-6xl leading-none select-none" style={{ fontFamily: "'Libre Bodoni', serif" }}>03</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-[#0D0D0D] mb-3" style={{ fontFamily: "'Libre Bodoni', serif" }}>
            Break into the career you want.
          </h2>
          <p className="text-[#6B6B6B] text-sm leading-relaxed mb-6 max-w-lg">
            Roadmaps, interview frameworks, and resume templates for every field. Product Management is live — more tracks coming.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {careerTags.map((tag) => (
              <span key={tag} className="text-xs text-[#6B6B6B] border border-[#E5E5E0] px-3 py-1 rounded-full">{tag}</span>
            ))}
          </div>

          <Link
            href="/careers"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D0D0D] text-[#FAFAF7] text-sm font-semibold rounded-md hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer"
          >
            Enter Career Guide
            <ArrowRight size={15} />
          </Link>
        </div>

      </section>
    </>
  );
}
