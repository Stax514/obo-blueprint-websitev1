import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle2, Lightbulb } from "lucide-react";

function Callout({ type, children }: { type: "info" | "warn" | "tip"; children: React.ReactNode }) {
  const s = {
    info: { cls: "bg-[#EFF6FF] border-[#1A1A2E]", Icon: CheckCircle2, color: "text-[#1A1A2E]" },
    warn: { cls: "bg-[#FFFBEB] border-[#D97706]",  Icon: AlertTriangle, color: "text-[#D97706]" },
    tip:  { cls: "bg-[#F0FDF4] border-[#059669]",  Icon: Lightbulb,     color: "text-[#059669]" },
  }[type];
  return (
    <div className={`${s.cls} border-l-4 p-4 rounded-r-lg flex gap-3 my-6`}>
      <s.Icon size={15} className={`${s.color} flex-shrink-0 mt-0.5`} />
      <p className="text-sm leading-relaxed text-[#374151]">{children}</p>
    </div>
  );
}

function Divider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 my-10">
      <div className="h-px flex-1 bg-[#E2E8F0]" />
      <h2 className="text-xl font-extrabold text-[#1A1A2E] whitespace-nowrap">{label}</h2>
      <div className="h-px flex-1 bg-[#E2E8F0]" />
    </div>
  );
}

const programs = [
  {
    name: "Google STEP Internship",
    when: "Apply Aug–Oct",
    who: "Freshman & Sophomore • Underrepresented in CS",
    what: "Google's flagship early diversity internship. Real SWE work, full pay, mentorship from Google engineers. Multiple engineers now at Google full-time got their start through STEP. This is the highest-leverage program on this list.",
    link: "https://buildyourfuture.withgoogle.com/programs/step",
  },
  {
    name: "Microsoft New Technologist Intern",
    when: "Apply Aug–Nov",
    who: "Freshman • Underrepresented students",
    what: "Microsoft's early diversity internship specifically for freshmen. Combines SWE and PM experience. Direct pipeline into Microsoft's broader internship and recruiting funnel.",
    link: "https://careers.microsoft.com/students/us/en/us-new-technologist-program",
  },
  {
    name: "Microsoft Explore Program",
    when: "Apply Aug–Nov",
    who: "Sophomore • Underrepresented students",
    what: "Microsoft's sophomore program — distinct from New Technologist which targets freshmen. Rotates between SWE and PM. Full-time paid summer internship and one of the most structured early programs in tech.",
    link: "https://careers.microsoft.com/students/us/en/us-exploreprogram",
  },
  {
    name: "Meta University Internship",
    when: "Apply Sep–Dec",
    who: "Freshman & Sophomore • Underrepresented students",
    what: "Meta's early career program for underrepresented students. Real engineering work in Meta's codebase with structured mentorship. Direct pipeline to Meta SWE internship junior year.",
    link: "https://www.metacareers.com/careerprograms/students",
  },
  {
    name: "Amazon Propel / Amazon Future Engineer",
    when: "Apply Sep–Jan",
    who: "Freshman & Sophomore • Underrepresented STEM students",
    what: "Amazon's early diversity program for CS students. Provides internship experience, mentorship, and access to Amazon's broader recruiting pipeline.",
    link: "https://www.amazonfutureengineer.com",
  },
  {
    name: "MLH Fellowship",
    when: "Apply rolling • Any year",
    who: "Open to all students",
    what: "A remote 12-week fellowship where you contribute to real open source projects under mentorship from senior engineers. Treated like an internship on your resume. Excellent fallback if you can't land a company internship.",
    link: "https://fellowship.mlh.io",
  },
  {
    name: "NSF REU (Research Experience for Undergraduates)",
    when: "Apply Jan–Mar • Any year",
    who: "US citizens and permanent residents",
    what: "Federally funded summer research at a university. Paid. Produces real research output. Highly respected by graduate schools and — increasingly — by tech companies hiring for ML and AI roles.",
    link: "https://www.nsf.gov/crssprgm/reu",
  },
];

const competitions = [
  { name: "ICPC (International Collegiate Programming Contest)", what: "The most prestigious competitive programming contest in the world. Placing at regionals or advancing to the World Finals is a significant signal for competitive engineering roles at Google and Meta." },
  { name: "Google Code Jam / Kick Start", what: "Google's own competitive programming competition. Winners get fast-tracked in Google recruiting. Even placing well is a visible credential." },
  { name: "Meta Hacker Cup", what: "Meta's equivalent of Code Jam. Strong performance signals directly to Meta recruiting." },
  { name: "Hackathons (HackMIT, TreeHacks, HackHarvard, local events)", what: "Weekend events where you build a project in 24–48 hours. The project goes on your resume. The network you build is real. Sponsors at major hackathons actively recruit participants." },
];

const fallbacks = [
  { title: "Build a real project.", body: "A polished GitHub project that solves a real problem is worth more than a mediocre internship. Build something with a public URL that you can demo." },
  { title: "Contribute to open source.", body: "Find a real project on GitHub with 1,000+ stars and submit a pull request that gets merged. This shows you can work in a production codebase." },
  { title: "Apply to MLH Fellowship.", body: "Major League Hacking runs a remote fellowship where you contribute to open source under mentorship. Treated like an internship on your resume." },
  { title: "Apply to NSF REU.", body: "Paid summer research at a university. Google and other companies specifically value students who've done research." },
  { title: "Do freelance work.", body: "Build websites or apps for local businesses or on Upwork. Real clients, real money, real deadlines." },
  { title: "Use the time for LeetCode.", body: "Use the summer to get very good at algorithms. This directly improves your chances in technical interviews the following year." },
];

export default function SWEProgramsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Header */}
      <div className="mb-10">
        <Link href="/careers/software-engineering" className="text-xs font-semibold text-[#6B7280] hover:text-[#1A1A2E] transition-colors">
          ← Software Engineering
        </Link>
        <span className="block text-xs font-semibold uppercase tracking-widest text-[#F4A825] mt-4 mb-2">Key Programs</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          Diversity & Early Programs.
        </h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
          The programs built for freshmen and sophomores that open doors most students don't know exist.
        </p>
        <Callout type="info">
          These programs exist specifically because the standard recruiting pipeline doesn't reach everyone equally. They are not easier versions of the real thing — they are real internships with real pay and real pipelines. Apply to all of them. Multiple engineers now at Google, Meta, and Microsoft got their start this way.
        </Callout>
      </div>

      <Divider label="Early Internship Programs" />
      <p className="text-sm text-[#6B6B6B] mb-6">Apply to these in August and September of freshman year. Don't wait until you feel ready.</p>

      <div className="space-y-5">
        {programs.map((p) => (
          <div key={p.name} className="border border-[#E5E5E0] rounded-xl p-6 bg-white">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-base font-bold text-[#0D0D0D]" style={{ fontFamily: "'Libre Bodoni', serif" }}>{p.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-[10px] font-semibold uppercase tracking-wide text-[#1A1A2E] bg-[#EEF2FF] px-2 py-0.5 rounded-full">{p.when}</span>
              <span className="text-[10px] font-semibold uppercase tracking-wide text-[#1B4332] bg-[#D1FAE5] px-2 py-0.5 rounded-full">{p.who}</span>
            </div>
            <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">{p.what}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1A1A2E] hover:text-[#F4A825] transition-colors">
              Learn more & apply <ArrowRight size={12} />
            </a>
          </div>
        ))}
      </div>

      <Divider label="Competitions Worth Entering" />
      <p className="text-sm text-[#6B6B6B] mb-6">Competitive programming competitions don't just build skills — they produce visible credentials that top companies actively look for.</p>

      <div className="space-y-3">
        {competitions.map((c, i) => (
          <div key={i} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#F5F5F0] border border-[#E5E5E0] flex items-center justify-center text-xs font-bold text-[#6B6B6B]">
              {i + 1}
            </div>
            <div>
              <p className="font-semibold text-[#0D0D0D] text-sm">{c.name}</p>
              <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{c.what}</p>
            </div>
          </div>
        ))}
      </div>

      <Divider label="When You Can't Get the Internship You Want" />
      <p className="text-sm text-[#6B6B6B] mb-6">Internship recruiting is competitive and sometimes a summer doesn't come together. Here's what to do instead:</p>

      <div className="space-y-3">
        {fallbacks.map((item, i) => (
          <div key={i} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1A1A2E] flex items-center justify-center text-xs font-bold text-white">
              {i + 1}
            </div>
            <div>
              <p className="font-semibold text-[#0D0D0D] text-sm">{item.title}</p>
              <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-3">
        <Link href="/careers/software-engineering/roadmap" className="inline-flex items-center gap-2 px-5 py-3 bg-[#1A1A2E] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer">
          ← Back to Roadmap
        </Link>
        <Link href="/careers/software-engineering/clubs" className="inline-flex items-center gap-2 px-5 py-3 border border-[#E5E5E0] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:border-[#1A1A2E] transition-colors cursor-pointer">
          Clubs & Activities <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
