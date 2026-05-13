import Link from "next/link";
import { ArrowRight, Lock, BookOpen } from "lucide-react";

const careers = [
  {
    id: "product-management",
    label: "Product Management",
    desc: "Roadmaps, interview frameworks, resume templates, and a year-by-year guide to breaking into PM.",
    href: "/careers/product-management",
    live: true,
    tag: "Available now",
  },
  {
    id: "software-engineering",
    label: "Software Engineering",
    desc: "Coming soon.",
    href: null,
    live: false,
    tag: "Coming soon",
  },
  {
    id: "consulting",
    label: "Consulting",
    desc: "Coming soon.",
    href: null,
    live: false,
    tag: "Coming soon",
  },
  {
    id: "finance",
    label: "Finance & Investment Banking",
    desc: "Coming soon.",
    href: null,
    live: false,
    tag: "Coming soon",
  },
  {
    id: "design",
    label: "UX / Product Design",
    desc: "Coming soon.",
    href: null,
    live: false,
    tag: "Coming soon",
  },
  {
    id: "data",
    label: "Data Science & Analytics",
    desc: "Coming soon.",
    href: null,
    live: false,
    tag: "Coming soon",
  },
];

const features = [
  { label: "Roadmap", desc: "Year-by-year plan from freshman year to your first offer." },
  { label: "Interview Help", desc: "Frameworks and full walkthroughs for every interview type." },
  { label: "Resume Templates", desc: "Downloadable templates built for the roles you want." },
  { label: "10-Week Prep Plan", desc: "A structured week-by-week guide to get interview-ready." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-[#F4A825]"></div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
              Free. No login. No paywall.
            </span>
          </div>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#FAFAF7] leading-[1.05] mb-6"
            style={{ fontFamily: "'Libre Bodoni', serif" }}
          >
            A career blueprint
            <br />
            <span className="italic text-[#F4A825]">built for college students.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#9CA3AF] leading-relaxed max-w-2xl mb-10">
            Everything you need to break into the career you want — roadmaps, interview frameworks, and resume templates. Select your path below to get started.
          </p>

          {/* What's inside strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {features.map((f) => (
              <div key={f.label} className="bg-[#111111] border border-[#2D2D2D] rounded-lg p-3">
                <p className="text-xs font-bold text-[#FAFAF7] mb-0.5">{f.label}</p>
                <p className="text-xs text-[#6B7280] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career selection */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="mb-10">
          <p className="text-[#F4A825] text-xs font-semibold uppercase tracking-widest mb-3">Career tracks</p>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-2"
            style={{ fontFamily: "'Libre Bodoni', serif" }}
          >
            Select your career path.
          </h2>
          <p className="text-[#6B6B6B]">Choose the field you want to break into. Product Management is live — more coming soon.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {careers.map((c) =>
            c.live ? (
              <Link
                key={c.id}
                href={c.href!}
                className="section-card group relative flex flex-col p-6 border-2 border-[#F4A825] rounded-xl bg-white hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-9 h-9 bg-[#F4A825] rounded-lg flex items-center justify-center">
                    <ArrowRight size={16} className="text-[#0D0D0D]" />
                  </div>
                  <span className="text-xs font-semibold text-[#C4841A] bg-[#FDF8EC] px-2 py-1 rounded-full">{c.tag}</span>
                </div>
                <h3
                  className="font-bold text-[#0D0D0D] text-lg mb-2 group-hover:text-[#C4841A] transition-colors"
                  style={{ fontFamily: "'Libre Bodoni', serif" }}
                >
                  {c.label}
                </h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed flex-1">{c.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#F4A825]">
                  Start here <ArrowRight size={12} />
                </div>
              </Link>
            ) : (
              <div
                key={c.id}
                className="relative flex flex-col p-6 border border-[#E5E5E0] rounded-xl bg-[#F5F5F0] opacity-70"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-9 h-9 bg-[#E5E5E0] rounded-lg flex items-center justify-center">
                    <Lock size={14} className="text-[#9CA3AF]" />
                  </div>
                  <span className="text-xs font-semibold text-[#9CA3AF] bg-[#EBEBEB] px-2 py-1 rounded-full">{c.tag}</span>
                </div>
                <h3
                  className="font-bold text-[#9CA3AF] text-lg mb-2"
                  style={{ fontFamily: "'Libre Bodoni', serif" }}
                >
                  {c.label}
                </h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed flex-1">Full guide, roadmap, and templates — coming soon.</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* High School track */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="h-px bg-[#E5E5E0] mb-12" />
        <div className="mb-8">
          <p className="text-[#F4A825] text-xs font-semibold uppercase tracking-widest mb-3">Also on Blueprint</p>
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#0D0D0D] mb-2"
            style={{ fontFamily: "'Libre Bodoni', serif" }}
          >
            Still in high school?
          </h2>
          <p className="text-[#6B6B6B]">We built a full college prep guide too — the same honest, tactical playbook for getting into the school you want.</p>
        </div>

        <Link
          href="/high-school"
          className="section-card group flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 border-2 border-[#0D0D0D] rounded-xl bg-white hover:shadow-md transition-all cursor-pointer max-w-2xl"
        >
          <div className="w-12 h-12 bg-[#0D0D0D] rounded-xl flex items-center justify-center flex-shrink-0">
            <BookOpen size={20} className="text-[#F4A825]" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3
                className="font-bold text-[#0D0D0D] text-lg group-hover:text-[#F4A825] transition-colors"
                style={{ fontFamily: "'Libre Bodoni', serif" }}
              >
                Obolu Blueprint — High School
              </h3>
              <span className="text-xs font-semibold text-[#FAFAF7] bg-[#0D0D0D] px-2 py-0.5 rounded-full">Live</span>
            </div>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">Why college, which college, the timeline, applications, extracurriculars, financial aid — everything from 9th grade to decision day.</p>
          </div>
          <div className="flex items-center gap-1 text-sm font-semibold text-[#0D0D0D] group-hover:text-[#F4A825] transition-colors flex-shrink-0">
            Go to guide <ArrowRight size={14} />
          </div>
        </Link>
      </section>

      {/* Note */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#0D0D0D] rounded-xl p-8 text-[#FAFAF7]">
          <h2
            className="text-xl font-bold mb-3"
            style={{ fontFamily: "'Libre Bodoni', serif" }}
          >
            A note before you start
          </h2>
          <p className="text-[#9CA3AF] leading-relaxed mb-3">
            This guide is designed to give you the best chance at a PM role — it doesn&apos;t guarantee one. Plenty of people have done things completely differently and still broken into top APM programs. There is no single path.
          </p>
          <p className="text-[#9CA3AF] leading-relaxed">
            There&apos;s also a lot on this list. Trying to do it all can be draining. You are in college once in your life — please enjoy it. Go to that party, study abroad, join that team. Those experiences make you a more empathetic, interesting, and capable PM.
          </p>
          <p className="text-[#FAFAF7] font-medium mt-3">
            GPA isn&apos;t that important for PM. Experience is everything. Don&apos;t tank your classes, but know where your priorities are.
          </p>
        </div>
      </section>
    </>
  );
}
