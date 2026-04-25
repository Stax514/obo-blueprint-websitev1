import Link from "next/link";
import { ArrowRight, BookOpen, MapPin, Calendar, FileText, Star, DollarSign } from "lucide-react";

const sections = [
  {
    num: "01",
    href: "/why-college",
    title: "Why College?",
    tagline: "The real reasons it matters — not the ones in brochures.",
    description: "Beyond the diploma: earning power, networks, experiences, and what it means to be first.",
    color: "bg-[#F4A825]",
    iconColor: "text-[#0D0D0D]",
    icon: BookOpen,
  },
  {
    num: "02",
    href: "/which-college",
    title: "Which College?",
    tagline: "HBCUs, PWIs, state schools, community college — broken down.",
    description: "No one-size answer. Learn how to find the school that fits your story, not your neighbor's.",
    color: "bg-[#C45B3D]",
    iconColor: "text-white",
    icon: MapPin,
  },
  {
    num: "03",
    href: "/timeline",
    title: "Timeline",
    tagline: "Month by month. Grade by grade. No surprises.",
    description: "A clear roadmap from 9th grade to decision day so you're never behind again.",
    color: "bg-[#1B4332]",
    iconColor: "text-white",
    icon: Calendar,
  },
  {
    num: "04",
    href: "/applications",
    title: "Applications",
    tagline: "The essay, the list, the recs. Done right.",
    description: "How to write an essay that sounds like you — not a pamphlet. Plus everything else admissions wants.",
    color: "bg-[#1A1A2E]",
    iconColor: "text-white",
    icon: FileText,
  },
  {
    num: "05",
    href: "/extracurriculars",
    title: "Extracurriculars",
    tagline: "Quality over quantity. Leadership over membership.",
    description: "Build an activities list that tells a story — and find opportunities starting today.",
    color: "bg-[#6D28D9]",
    iconColor: "text-white",
    icon: Star,
  },
  {
    num: "06",
    href: "/financial-aid",
    title: "Financial Aid",
    tagline: "Don't let money be the reason you don't go.",
    description: "FAFSA, CSS Profile, scholarships built for you — and how to negotiate your award.",
    color: "bg-[#0F766E]",
    iconColor: "text-white",
    icon: DollarSign,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-[#F4A825]"></div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#6B6B6B]">
              From Sacramento to elite schools
            </span>
          </div>

          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#0D0D0D] leading-[1.05] mb-8"
            style={{ fontFamily: "'Libre Bodoni', serif" }}
          >
            Your blueprint
            <br />
            <span className="italic text-[#F4A825]">to college.</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#6B6B6B] leading-relaxed max-w-2xl mb-10">
            We&apos;re Tsadiku and Adiyah Obolu — two Black siblings from Sacramento. We had educated parents and real advantages. Our classmates didn&apos;t always have the same. So we wrote it all down.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/why-college"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#0D0D0D] text-[#FAFAF7] font-semibold rounded-md hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors duration-150 cursor-pointer"
            >
              Start here
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/timeline"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 border border-[#E5E5E0] text-[#0D0D0D] font-medium rounded-md hover:border-[#0D0D0D] transition-colors duration-150 cursor-pointer"
            >
              See the timeline
            </Link>
          </div>
        </div>
      </section>

      {/* Founders story */}
      <section className="bg-[#0D0D0D] text-[#FAFAF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#F4A825] text-xs font-semibold uppercase tracking-widest mb-4">The Founders</p>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
                style={{ fontFamily: "'Libre Bodoni', serif" }}
              >
                We grew up in{" "}
                <span className="italic">Sacramento.</span>
                <br />
                We made it to{" "}
                <span className="text-[#F4A825]">elite schools.</span>
              </h2>
              <p className="text-[#9CA3AF] leading-relaxed mb-4">
                Our parents have PhDs — our mom&apos;s from Harvard, our dad&apos;s from UC Davis. That gave us a real advantage, and we know it. Tsadiku went to Berkeley MET on scholarship. Adiyah goes to Yale on scholarship. We went to a public school in Sacramento where most of our classmates didn&apos;t have the same access to this information.
              </p>
              <p className="text-[#9CA3AF] leading-relaxed">
                This blueprint is our attempt to close that gap. Everything here is real, tactical, honest advice — the same knowledge our background gave us, written down for everyone. No inspiration speeches. No watered-down tips. The actual playbook.
              </p>
            </div>
            <div className="border border-[#2D2D2D] rounded-xl p-8 bg-[#111111]">
              <blockquote
                className="text-2xl sm:text-3xl font-medium italic leading-snug text-[#FAFAF7] mb-6"
                style={{ fontFamily: "'Libre Bodoni', serif" }}
              >
                &ldquo;All the other routes are way harder. Rapping is harder. Getting out the block is harder. And the returns aren&apos;t even better. The math is the math — and we want you to see it clearly.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F4A825] flex items-center justify-center text-[#0D0D0D] font-bold text-sm">
                  T&A
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#FAFAF7]">Tsadiku & Adiyah Obolu</p>
                  <p className="text-xs text-[#6B7280]">Sacramento, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="mb-14">
          <p className="text-[#F4A825] text-xs font-semibold uppercase tracking-widest mb-3">Six sections</p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#0D0D0D]"
            style={{ fontFamily: "'Libre Bodoni', serif" }}
          >
            Everything you need.
            <br />
            <span className="italic">Nothing you don&apos;t.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.href}
                href={section.href}
                className="section-card group relative flex flex-col p-8 bg-white border border-[#E5E5E0] rounded-xl cursor-pointer overflow-hidden"
              >
                <span
                  className="text-[80px] font-bold leading-none text-[#F5F5F0] absolute -top-4 -right-2 select-none pointer-events-none"
                  style={{ fontFamily: "'Libre Bodoni', serif" }}
                >
                  {section.num}
                </span>
                <div className={`w-10 h-10 rounded-md ${section.color} flex items-center justify-center mb-6 relative z-10`}>
                  <Icon size={18} className={section.iconColor} />
                </div>
                <div className="relative z-10 flex-1">
                  <h3
                    className="text-xl font-bold text-[#0D0D0D] mb-2"
                    style={{ fontFamily: "'Libre Bodoni', serif" }}
                  >
                    {section.title}
                  </h3>
                  <p className="text-[#F4A825] text-sm font-medium mb-3 italic" style={{ fontFamily: "'Libre Bodoni', serif" }}>
                    {section.tagline}
                  </p>
                  <p className="text-[#6B6B6B] text-sm leading-relaxed">
                    {section.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#0D0D0D] group-hover:text-[#F4A825] transition-colors">
                  Read section
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#F4A825] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-3"
              style={{ fontFamily: "'Libre Bodoni', serif" }}
            >
              Have questions?{" "}
              <span className="italic">We&apos;re here.</span>
            </h2>
            <p className="text-[#0D0D0D]/70 max-w-xl">
              Whether it&apos;s your essay, a school you&apos;re considering, financial aid, or where to even start — reach out.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-[#0D0D0D] text-[#FAFAF7] font-semibold rounded-md hover:bg-[#1B4332] transition-colors duration-150 cursor-pointer"
          >
            Get help
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
