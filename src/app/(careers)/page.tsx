import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stages = [
  {
    num: "01",
    id: "high-school",
    label: "High School",
    headline: "Your blueprint to college.",
    desc: "From 9th grade to your acceptance letter. Why college, which college, the timeline, applications, extracurriculars, and financial aid — everything written down.",
    inside: ["Why College", "Which College", "Timeline", "Applications", "Extracurriculars", "Financial Aid"],
    status: "live" as const,
    href: "/high-school",
    cta: "Enter High School Guide",
    accent: "bg-[#F4A825]",
    accentText: "text-[#C4841A]",
    accentBg: "bg-[#FDF8EC]",
    accentBorder: "border-[#F4A825]",
    numColor: "text-[#F4A825]/20",
  },
  {
    num: "02",
    id: "college",
    label: "College",
    headline: "Navigate college life.",
    desc: "Internships, clubs, networking, mental health, studying abroad, and making the most of four years. A guide for once you're in.",
    inside: ["First Year Survival", "Finding Your Path", "Internships", "Campus Life", "Mental Health", "Graduating Strong"],
    status: "loading" as const,
    href: null,
    cta: null,
    accent: "bg-[#6B6B6B]",
    accentText: "text-[#6B6B6B]",
    accentBg: "bg-[#F5F5F0]",
    accentBorder: "border-[#E5E5E0]",
    numColor: "text-[#0D0D0D]/10",
  },
  {
    num: "03",
    id: "careers",
    label: "Careers",
    headline: "Break into the career you want.",
    desc: "Roadmaps, interview frameworks, and resume templates for every field. Product Management is live — more tracks coming.",
    inside: ["Product Management", "Software Engineering", "Consulting", "Finance & IB", "UX Design", "Data Science"],
    status: "live" as const,
    href: "/careers",
    cta: "Enter Career Guide",
    accent: "bg-[#0D0D0D]",
    accentText: "text-[#0D0D0D]",
    accentBg: "bg-[#F5F5F0]",
    accentBorder: "border-[#0D0D0D]",
    numColor: "text-[#0D0D0D]/10",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D0D0D] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-12 bg-[#F4A825]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">Obolu Blueprint</span>
          </div>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#FAFAF7] leading-[1.05] mb-6"
            style={{ fontFamily: "'Libre Bodoni', serif" }}
          >
            Your blueprint
            <br />
            <span className="italic text-[#F4A825]">for every stage.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#9CA3AF] leading-relaxed max-w-2xl">
            From high school applications to your first career offer. Three guides. One path. Select the stage you&apos;re in.
          </p>
        </div>
      </section>

      {/* Three Stages */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="space-y-6">
          {stages.map((stage, i) => (
            <div key={stage.id}>
              {stage.status === "live" ? (
                <Link
                  href={stage.href!}
                  className="group relative flex flex-col sm:flex-row items-start gap-6 p-8 md:p-10 border-2 rounded-2xl bg-white hover:shadow-lg transition-all duration-200 overflow-hidden cursor-pointer"
                  style={{ borderColor: stage.status === "live" ? (stage.id === "high-school" ? "#F4A825" : "#0D0D0D") : "#E5E5E0" }}
                >
                  {/* Big background number */}
                  <span
                    className={`absolute top-4 right-6 text-[120px] font-bold leading-none select-none pointer-events-none ${stage.numColor}`}
                    style={{ fontFamily: "'Libre Bodoni', serif" }}
                  >
                    {stage.num}
                  </span>

                  {/* Stage indicator */}
                  <div className="flex-shrink-0 pt-1">
                    <div className={`w-12 h-12 ${stage.accent} rounded-xl flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm" style={{ fontFamily: "'Libre Bodoni', serif" }}>
                        {stage.num}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-xs font-bold uppercase tracking-widest ${stage.accentText}`}>{stage.label}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${stage.accentBg} ${stage.accentText}`}>
                        Live
                      </span>
                    </div>
                    <h2
                      className="text-2xl sm:text-3xl font-bold text-[#0D0D0D] mb-3 group-hover:text-inherit transition-colors"
                      style={{ fontFamily: "'Libre Bodoni', serif" }}
                    >
                      {stage.headline}
                    </h2>
                    <p className="text-[#6B6B6B] leading-relaxed mb-5 max-w-xl">{stage.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {stage.inside.map((item) => (
                        <span key={item} className="text-xs font-medium text-[#6B6B6B] bg-[#F5F5F0] px-2.5 py-1 rounded-full border border-[#E5E5E0]">
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className={`inline-flex items-center gap-2 px-5 py-2.5 ${stage.accent} text-white text-sm font-semibold rounded-lg group-hover:opacity-90 transition-opacity`}
                      style={{ color: stage.id === "high-school" ? "#0D0D0D" : "white" }}
                    >
                      {stage.cta} <ArrowRight size={15} />
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="relative flex flex-col sm:flex-row items-start gap-6 p-8 md:p-10 border border-[#E5E5E0] rounded-2xl bg-[#FAFAF7] overflow-hidden opacity-60">
                  <span
                    className={`absolute top-4 right-6 text-[120px] font-bold leading-none select-none pointer-events-none ${stage.numColor}`}
                    style={{ fontFamily: "'Libre Bodoni', serif" }}
                  >
                    {stage.num}
                  </span>

                  <div className="flex-shrink-0 pt-1">
                    <div className="w-12 h-12 bg-[#E5E5E0] rounded-xl flex items-center justify-center">
                      <span className="text-[#9CA3AF] font-bold text-sm" style={{ fontFamily: "'Libre Bodoni', serif" }}>
                        {stage.num}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 relative z-10">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF]">{stage.label}</span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#E5E5E0] text-[#9CA3AF]">
                        Loading
                      </span>
                    </div>
                    <h2
                      className="text-2xl sm:text-3xl font-bold text-[#9CA3AF] mb-3"
                      style={{ fontFamily: "'Libre Bodoni', serif" }}
                    >
                      {stage.headline}
                    </h2>
                    <p className="text-[#9CA3AF] leading-relaxed mb-5 max-w-xl">{stage.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {stage.inside.map((item) => (
                        <span key={item} className="text-xs font-medium text-[#9CA3AF] bg-[#F5F5F0] px-2.5 py-1 rounded-full border border-[#E5E5E0]">
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E5E5E0] text-[#9CA3AF] text-sm font-semibold rounded-lg">
                      Coming soon
                    </div>
                  </div>
                </div>
              )}

              {/* Connector between stages */}
              {i < stages.length - 1 && (
                <div className="flex items-center justify-center py-2">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-4 bg-[#E5E5E0]" />
                    <ArrowRight size={14} className="text-[#9CA3AF] rotate-90" />
                    <div className="w-px h-4 bg-[#E5E5E0]" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </>
  );
}
