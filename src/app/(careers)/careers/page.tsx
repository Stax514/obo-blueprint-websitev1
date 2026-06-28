import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

const tracks = [
  {
    id: "product-management",
    label: "Product Management",
    tagline: "Break into PM at top tech companies.",
    desc: "Roadmaps, interview frameworks, 10-week prep guide, and a starter project. Everything you need from zero to offer.",
    inside: ["What is PM?", "Roadmap", "10-Week Prep", "Interview Guide", "Starter Project", "Resources"],
    status: "live" as const,
    href: "/careers/product-management",
    accent: "bg-[#0D0D0D]",
    accentText: "text-[#0D0D0D]",
    accentBg: "bg-[#F5F5F0]",
    numColor: "text-[#0D0D0D]/8",
    num: "01",
  },
  {
    id: "software-engineering",
    label: "Software Engineering",
    tagline: "Land your first SWE role.",
    desc: "Year-by-year roadmap, key diversity programs, club and project guide, and a full technical interview prep guide. Everything from freshman year to your first offer.",
    inside: ["Year-by-Year Roadmap", "Google STEP & Early Programs", "Clubs & Projects", "Technical Interview Prep", "DSA & Systems Design", "Resources"],
    status: "live" as const,
    href: "/careers/software-engineering",
    accent: "bg-[#1A1A2E]",
    accentText: "text-[#1A1A2E]",
    accentBg: "bg-[#EEF2FF]",
    numColor: "text-[#1A1A2E]/8",
    num: "02",
  },
  {
    id: "consulting",
    label: "Consulting",
    tagline: "Get into McKinsey, BCG, and Bain.",
    desc: "Year-by-year roadmap, diversity programs, case competition guide, and a full case interview prep guide. Everything from freshman year to your MBB offer.",
    inside: ["Year-by-Year Roadmap", "Bain BEL & Early Programs", "Clubs & Case Competitions", "Case Interview Guide", "PEI Prep", "Resources"],
    status: "live" as const,
    href: "/careers/consulting",
    accent: "bg-[#1B4332]",
    accentText: "text-[#1B4332]",
    accentBg: "bg-[#F0FDF4]",
    numColor: "text-[#1B4332]/8",
    num: "03",
  },
  {
    id: "finance",
    label: "Finance & IB",
    tagline: "Break into investment banking.",
    desc: "Technicals, valuation, networking, and the recruiting timeline for IB, PE, and AM. Coming soon.",
    inside: ["Technicals", "Valuation", "Networking", "Recruiting Timeline", "Modeling", "Case Studies"],
    status: "loading" as const,
    href: null,
    accent: "bg-[#6B6B6B]",
    accentText: "text-[#6B6B6B]",
    accentBg: "bg-[#F5F5F0]",
    numColor: "text-[#0D0D0D]/6",
    num: "04",
  },
  {
    id: "ux-design",
    label: "UX Design",
    tagline: "Build a portfolio that gets you hired.",
    desc: "Portfolio strategy, design challenges, case study structure, and internship recruiting. Coming soon.",
    inside: ["Portfolio Strategy", "Design Challenges", "Case Studies", "Tools", "Internships", "Full-time Recruiting"],
    status: "loading" as const,
    href: null,
    accent: "bg-[#6B6B6B]",
    accentText: "text-[#6B6B6B]",
    accentBg: "bg-[#F5F5F0]",
    numColor: "text-[#0D0D0D]/6",
    num: "05",
  },
  {
    id: "data-science",
    label: "Data Science",
    tagline: "Get your first data role.",
    desc: "SQL, statistics, Python, and how to frame your projects for non-technical interviewers. Coming soon.",
    inside: ["SQL & Python", "Statistics", "ML Basics", "Project Portfolio", "Interview Prep", "Job Search"],
    status: "loading" as const,
    href: null,
    accent: "bg-[#6B6B6B]",
    accentText: "text-[#6B6B6B]",
    accentBg: "bg-[#F5F5F0]",
    numColor: "text-[#0D0D0D]/6",
    num: "06",
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D0D0D] py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-[#6B7280] hover:text-[#F4A825] transition-colors mb-10 cursor-pointer">
            <ArrowLeft size={14} />
            Back to Blueprint
          </Link>
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-[#F4A825]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Stage 03</span>
          </div>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#FAFAF7] leading-[1.05] mb-6"
            style={{ fontFamily: "'Libre Bodoni', serif" }}
          >
            Break into the
            <br />
            <span className="italic text-[#F4A825]">career you want.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#9CA3AF] leading-relaxed max-w-2xl">
            Six career tracks. Real frameworks, not fluff. Product Management is live — more tracks coming.
          </p>
        </div>
      </section>

      {/* Tracks */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tracks.map((track) => (
            <div key={track.id}>
              {track.status === "live" ? (
                <Link
                  href={track.href!}
                  className="group relative flex flex-col p-8 border-2 border-[#0D0D0D] rounded-2xl bg-white hover:shadow-lg transition-all duration-200 overflow-hidden cursor-pointer h-full"
                >
                  <span
                    className={`absolute top-3 right-5 text-[80px] font-bold leading-none select-none pointer-events-none ${track.numColor}`}
                    style={{ fontFamily: "'Libre Bodoni', serif" }}
                  >
                    {track.num}
                  </span>
                  <div className="relative z-10 flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#0D0D0D]">{track.label}</span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#F5F5F0] text-[#0D0D0D]">Live</span>
                    </div>
                    <p className="text-[#6B6B6B] text-sm italic mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>{track.tagline}</p>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed mb-5">{track.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {track.inside.map((item) => (
                        <span key={item} className="text-xs font-medium text-[#6B6B6B] bg-[#F5F5F0] px-2.5 py-1 rounded-full border border-[#E5E5E0]">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D0D0D] text-white text-sm font-semibold rounded-lg group-hover:opacity-90 transition-opacity">
                    Enter Guide <ArrowRight size={15} />
                  </div>
                </Link>
              ) : (
                <div className="relative flex flex-col p-8 border border-[#E5E5E0] rounded-2xl bg-[#FAFAF7] overflow-hidden opacity-55 h-full">
                  <span
                    className={`absolute top-3 right-5 text-[80px] font-bold leading-none select-none pointer-events-none ${track.numColor}`}
                    style={{ fontFamily: "'Libre Bodoni', serif" }}
                  >
                    {track.num}
                  </span>
                  <div className="relative z-10 flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF]">{track.label}</span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#E5E5E0] text-[#9CA3AF]">Loading</span>
                    </div>
                    <p className="text-[#9CA3AF] text-sm italic mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>{track.tagline}</p>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed mb-5">{track.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {track.inside.map((item) => (
                        <span key={item} className="text-xs font-medium text-[#9CA3AF] bg-[#F5F5F0] px-2.5 py-1 rounded-full border border-[#E5E5E0]">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-[#E5E5E0] text-[#9CA3AF] text-sm font-semibold rounded-lg">
                    Coming soon
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-[#0D0D0D] rounded-xl p-8 text-[#FAFAF7] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-lg font-bold mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>
              Start with Product Management.
            </h2>
            <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-xl">
              The most complete guide on the site. Six sections, a full 10-week prep calendar, and every interview framework you need.
            </p>
          </div>
          <Link
            href="/careers/product-management"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#F4A825] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:bg-[#C4841A] transition-colors"
          >
            Enter PM Guide <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
