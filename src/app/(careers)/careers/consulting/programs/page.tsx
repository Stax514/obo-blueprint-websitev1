import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";

function Callout({ type, children }: { type: "info" | "warn"; children: React.ReactNode }) {
  const s = {
    info: { cls: "bg-[#F0FDF4] border-[#1B4332]", Icon: CheckCircle2, color: "text-[#1B4332]" },
    warn: { cls: "bg-[#FFFBEB] border-[#D97706]", Icon: AlertTriangle, color: "text-[#D97706]" },
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
      <h2 className="text-xl font-extrabold text-[#1B4332] whitespace-nowrap">{label}</h2>
      <div className="h-px flex-1 bg-[#E2E8F0]" />
    </div>
  );
}

const programs = [
  {
    name: "Bain Emerging Leaders (BEL)",
    when: "Apply ~Feb 1",
    who: "Sophomore • Underrepresented students",
    what: "Bain's premier sophomore diversity program. Direct access to Bain mentors, case workshops, and a head start on the ACI (Associate Consultant Intern) pipeline. Applications open around February 1 — earlier than most people expect.",
    link: "https://www.bain.com/careers/find-a-role/undergraduate/",
  },
  {
    name: "McKinsey Early Insight / Freshman Summit",
    when: "Apply Fall semester",
    who: "Freshman & Sophomore • Underrepresented students",
    what: "McKinsey's early diversity programs vary by year and cohort but consistently target freshmen and sophomores from underrepresented groups. Provides exposure to consulting, mentorship, and a direct path into McKinsey's recruiting funnel.",
    link: "https://www.mckinsey.com/careers/students",
  },
  {
    name: "BCG Early Access / Exploring BCG",
    when: "Apply Fall semester",
    who: "Freshman & Sophomore • Underrepresented students",
    what: "BCG's early diversity programs give freshmen and sophomores access to the firm before full recruiting begins. Check bcg.com/careers for current program names and timelines — they vary by year.",
    link: "https://www.bcg.com/careers/students",
  },
  {
    name: "Deloitte Discovery Intern Program",
    when: "Apply Fall semester",
    who: "Freshman & Sophomore • Underrepresented students",
    what: "Deloitte's early career diversity program. One of our research subjects explicitly named this as her entry point into professional consulting — it led directly to her Bain offer two years later. Big 4 programs are a documented on-ramp to MBB.",
    link: "https://www.deloitte.com/us/en/pages/careers/topics/students.html",
  },
  {
    name: "Oliver Wyman Black Leaders in Business / Women in Business",
    when: "Apply Fall/Spring",
    who: "Underrepresented students • Any year",
    what: "Oliver Wyman's diversity programs provide access to one of the top boutique strategy firms. Strong for students interested in financial services consulting and a stepping stone into broader MBB recruiting.",
    link: "https://www.oliverwyman.com/careers/students.html",
  },
];

const competitions = [
  {
    name: "National Diversity Case Competition",
    hosted: "Hosted by Indiana University Kelley School of Business",
    what: "Open to students from all schools — not just target universities. Winning this is a documented differentiator for non-target students. One Indiana → Bain consultant won two case competitions before receiving any MBB offer. This was her primary credential.",
  },
  {
    name: "Deloitte Case Competition",
    hosted: "National • Open to undergrads",
    what: "One of the most recognized case competitions in the country. Placing well is a visible signal to every major consulting firm, not just Deloitte.",
  },
  {
    name: "Darden Case Competition (UVA)",
    hosted: "University of Virginia Darden School",
    what: "Highly regarded in consulting recruiting circles. Strong signal for strategy-focused firms including MBB.",
  },
  {
    name: "MIT Sloan Case Competition",
    hosted: "MIT Sloan School of Management",
    what: "Nationally recognized. Gives non-target students a credential associated with an elite school name.",
  },
  {
    name: "International Global Scaling Challenge",
    hosted: "International • Open to undergrads",
    what: "Cross-border case competition. Valued especially at firms with strong international practices like McKinsey and BCG.",
  },
  {
    name: "Your School's Internal Case Competition",
    hosted: "Check with your consulting club",
    what: "Many schools run internal competitions through their consulting clubs. These build the skills and often lead to external competition invitations. Start here if you're new to casing.",
  },
];

const fallbacks = [
  { title: "Enter a case competition instead.", body: "If you didn't land a diversity program, a case competition win is the next best credential. It builds the same skills and produces a verifiable, school-agnostic signal." },
  { title: "Do any internship that builds structured thinking.", body: "Finance, operations, nonprofit consulting, government — any role where you're analyzing data and making recommendations is building the consulting toolkit. Explain the connection clearly in your resume." },
  { title: "Build a consulting project yourself.", body: "Work with a local nonprofit or small business on a real problem — market analysis, operational review, strategy recommendations. Document it as a project with a concrete outcome." },
  { title: "TA a quantitative course.", body: "TA experience appeared repeatedly across both the consulting and SWE profiles we studied. It signals analytical depth and communication ability — both core to consulting." },
  { title: "Read cases and practice solo.", body: "If you can't find a casing partner, use Management Consulted's video library to watch cases being solved. Build the vocabulary and instinct even without live practice." },
];

export default function ConsultingProgramsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-10">
        <Link href="/careers/consulting" className="text-xs font-semibold text-[#6B7280] hover:text-[#1B4332] transition-colors">← Consulting</Link>
        <span className="block text-xs font-semibold uppercase tracking-widest text-[#F4A825] mt-4 mb-2">Key Programs</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          Diversity Programs & Competitions.
        </h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
          The programs and competitions that open MBB doors — especially for students not at target schools.
        </p>
        <Callout type="info">
          Three of the four non-target school MBB consultants in our research explicitly used a diversity program or case competition as their entry point. These are not participation trophies — they are documented pipelines to McKinsey, BCG, and Bain offers.
        </Callout>
      </div>

      <Divider label="Early Diversity Programs" />
      <p className="text-sm text-[#6B6B6B] mb-6">Apply to these as early as freshman year. Some windows open in the fall semester — before most students even know these programs exist.</p>

      <div className="space-y-5">
        {programs.map((p) => (
          <div key={p.name} className="border border-[#E5E5E0] rounded-xl p-6 bg-white">
            <h3 className="text-base font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>{p.name}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-[10px] font-semibold uppercase tracking-wide text-[#1B4332] bg-[#D1FAE5] px-2 py-0.5 rounded-full">{p.when}</span>
              <span className="text-[10px] font-semibold uppercase tracking-wide text-[#1A1A2E] bg-[#EEF2FF] px-2 py-0.5 rounded-full">{p.who}</span>
            </div>
            <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">{p.what}</p>
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B4332] hover:text-[#F4A825] transition-colors">
              Learn more & apply <ArrowRight size={12} />
            </a>
          </div>
        ))}
      </div>

      <Divider label="Case Competitions Worth Entering" />
      <p className="text-sm text-[#6B6B6B] mb-6">In consulting, winning a case competition is what a strong GitHub project is in SWE. It builds the exact skills tested in case interviews and produces a credential that works regardless of your school's brand.</p>

      <div className="space-y-3">
        {competitions.map((c, i) => (
          <div key={i} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#F5F5F0] border border-[#E5E5E0] flex items-center justify-center text-xs font-bold text-[#6B6B6B]">{i + 1}</div>
            <div>
              <p className="font-semibold text-[#0D0D0D] text-sm">{c.name}</p>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[#9CA3AF] mb-1">{c.hosted}</p>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">{c.what}</p>
            </div>
          </div>
        ))}
      </div>

      <Divider label="When You Can't Get a Program or Competition" />
      <p className="text-sm text-[#6B6B6B] mb-6">Recruiting doesn't always go as planned. Here's what to do instead:</p>

      <div className="space-y-3">
        {fallbacks.map((item, i) => (
          <div key={i} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1B4332] flex items-center justify-center text-xs font-bold text-white">{i + 1}</div>
            <div>
              <p className="font-semibold text-[#0D0D0D] text-sm">{item.title}</p>
              <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-3">
        <Link href="/careers/consulting/roadmap" className="inline-flex items-center gap-2 px-5 py-3 bg-[#1B4332] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer">
          ← Back to Roadmap
        </Link>
        <Link href="/careers/consulting/clubs" className="inline-flex items-center gap-2 px-5 py-3 border border-[#E5E5E0] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:border-[#1B4332] transition-colors cursor-pointer">
          Clubs & Activities <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
