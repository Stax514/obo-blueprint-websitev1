import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, Briefcase, Users, Lightbulb, FileText } from "lucide-react";

const sections = [
  {
    num: "01",
    href: "/college/guide",
    title: "The Guide",
    tagline: "Freshman through senior year. What to do, when to do it.",
    description: "A year-by-year breakdown of how to navigate college — from the summer before you arrive to the day you graduate.",
    color: "bg-[#1A1A2E]",
    iconColor: "text-white",
    icon: BookOpen,
  },
  {
    num: "02",
    href: "/college/internships",
    title: "Summer Internships",
    tagline: "Applications open earlier than you think.",
    description: "The full breakdown on when to apply, what to look for, and what to do if the summer doesn't go as planned.",
    color: "bg-[#F4A825]",
    iconColor: "text-[#0D0D0D]",
    icon: Calendar,
  },
  {
    num: "03",
    href: "/college/clubs-and-projects",
    title: "Clubs & Projects",
    tagline: "The experiences that make you competitive.",
    description: "What to join, what to build if it doesn't exist, and how to turn your interests into work experience.",
    color: "bg-[#1B4332]",
    iconColor: "text-white",
    icon: Users,
  },
  {
    num: "04",
    href: "/college/general-tips",
    title: "General Tips",
    tagline: "The things nobody told us until we figured them out.",
    description: "Office hours, journals, study abroad, lifting as you climb — the advice that doesn't fit anywhere else but matters.",
    color: "bg-[#C45B3D]",
    iconColor: "text-white",
    icon: Lightbulb,
  },
  {
    num: "05",
    href: "/college/resources",
    title: "Resources",
    tagline: "Templates and tools. Free.",
    description: "Resume template, cover letter, cold email scripts, and every other resource you need — all in one place.",
    color: "bg-[#0D0D0D]",
    iconColor: "text-white",
    icon: FileText,
  },
];

export default function CollegeHubPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A1A2E] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#9CA3AF] text-xs font-semibold uppercase tracking-widest mb-4">Obolu Blueprint — College</p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#FAFAF7] leading-[1.05] mb-6"
            style={{ fontFamily: "'Libre Bodoni', serif" }}
          >
            College is where
            <br />
            <span className="italic text-[#F4A825]">the blueprint becomes real.</span>
          </h1>
          <p className="text-[#9CA3AF] text-lg leading-relaxed max-w-2xl mb-10">
            You spent four years in high school building toward this. Now you have four more years to build toward everything after. This guide covers how to actually navigate them — what to do each year, when to start, what matters, and what doesn't.
          </p>
          <Link
            href="/college/guide"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F4A825] text-[#0D0D0D] font-semibold rounded-md hover:bg-[#C4841A] transition-colors cursor-pointer"
          >
            Start with the Guide
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Career plans CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <Link
          href="/careers"
          className="flex items-center justify-between p-5 rounded-xl border-2 border-[#0D0D0D] bg-white hover:bg-[#F5F5F0] transition-colors cursor-pointer group"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#6B6B6B] mb-1">Career-specific plans</p>
            <p className="text-base font-semibold text-[#0D0D0D]">Know what field you're going into?</p>
            <p className="text-sm text-[#6B6B6B] mt-0.5">We have dedicated 4-year plans for specific careers — exactly what to do each year to get there.</p>
          </div>
          <ArrowRight size={18} className="text-[#6B6B6B] group-hover:text-[#0D0D0D] flex-shrink-0 ml-6 transition-colors" />
        </Link>
      </section>

      {/* Section cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.href}
                href={s.href}
                className="group relative border border-[#E5E5E0] rounded-2xl p-6 bg-white hover:border-[#0D0D0D] hover:shadow-md transition-all cursor-pointer flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-9 h-9 ${s.color} rounded-lg flex items-center justify-center`}>
                    <Icon size={16} className={s.iconColor} />
                  </div>
                  <span className="text-xs font-semibold text-[#9CA3AF]">{s.num}</span>
                </div>
                <h2 className="text-lg font-bold text-[#0D0D0D] mb-1" style={{ fontFamily: "'Libre Bodoni', serif" }}>
                  {s.title}
                </h2>
                <p className="text-xs font-medium text-[#6B6B6B] mb-3 italic">{s.tagline}</p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed flex-1">{s.description}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#0D0D0D] group-hover:text-[#F4A825] transition-colors">
                  Read more <ArrowRight size={12} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
