import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";

function Callout({ type, children }: { type: "info" | "warn"; children: React.ReactNode }) {
  const s = {
    info: { cls: "bg-[#EFF6FF] border-[#1E3A5F]", Icon: CheckCircle2, color: "text-[#1E3A5F]" },
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
      <h2 className="text-xl font-extrabold text-[#1E3A5F] whitespace-nowrap">{label}</h2>
      <div className="h-px flex-1 bg-[#E2E8F0]" />
    </div>
  );
}

const keyRoles = [
  {
    name: "Assistant United States Attorney (AUSA)",
    pay: "$73K–$140K",
    what: "AUSAs are federal prosecutors. They prosecute criminal cases in federal district courts — drug trafficking, white collar crime, public corruption, terrorism, cybercrime — and handle civil cases where the federal government is a party. There are 94 US Attorney's Offices across the country. The Southern District of New York (SDNY) is the most prestigious.",
    path: "Most AUSAs first spend 2–5 years in BigLaw or the DOJ, then transition to a US Attorney's Office. Direct entry from law school is rare but possible for candidates with strong academic credentials.",
    work: "Courtroom-heavy. Real trial experience from early in your career. More sustainable hours than BigLaw. The most direct path to trying federal cases.",
  },
  {
    name: "DOJ Honors Program",
    pay: "$73K–$90K starting",
    what: "The DOJ Honors Program is the primary entry point for recent law graduates and judicial clerks into the Department of Justice. About 200–250 positions are offered annually from thousands of applicants. Accepted candidates work in DOJ divisions including Criminal, Civil Rights, Environment, Antitrust, and National Security.",
    path: "Apply in August before your 3L year — the deadline hits before the school year starts. Strong academic record required; Law Review or journal strongly preferred; demonstrated interest in public service essential.",
    work: "Varies by division. Civil Rights Division: voting rights, police misconduct, education discrimination. Criminal Division: fraud, organized crime, public corruption. Antitrust Division: cartel investigations, mergers. Each division is a distinct career.",
  },
];

const agencies = [
  { name: "SEC — Securities and Exchange Commission", desc: "Securities fraud enforcement, rule-making, corporate disclosure. Heavy overlap with finance law. BigLaw securities lawyers frequently move to the SEC and back. Data privacy and crypto enforcement is a growing area." },
  { name: "FTC — Federal Trade Commission", desc: "Antitrust enforcement, consumer protection, data privacy, and tech regulation. The FTC has become one of the most active tech regulators in the US — antitrust work on major platform companies is high-profile." },
  { name: "NLRB — National Labor Relations Board", desc: "Labor law, union organizing, collective bargaining, unfair labor practices. Growing importance as organizing activity increases at tech and service companies." },
  { name: "EPA — Environmental Protection Agency", desc: "Environmental litigation and regulatory work. Enforce the Clean Air Act, Clean Water Act, CERCLA. For students with an environmental law niche." },
  { name: "HHS / CMS — Health & Human Services", desc: "Health law, Medicare and Medicaid, pharmaceutical regulation, clinical trial agreements, FDA enforcement. Large and growing legal division." },
  { name: "FCC — Federal Communications Commission", desc: "Telecommunications and media regulation — broadcast licensing, broadband policy, spectrum allocation, content regulation." },
  { name: "DOD / National Security", desc: "Department of Defense, NSA, CIA general counsel offices. National security law — surveillance, international law, military justice. Requires security clearance." },
];

const pipeline = [
  { year: "1L Summer", what: "Government internship — US Attorney's Office intern, DOJ division intern, federal agency intern, congressional committee. These are competitive. Apply in the fall of 1L year." },
  { year: "2L Summer", what: "DOJ Civil or Criminal Division, USAO summer position, federal agency. Or BigLaw with the explicit plan to transition to government after 2–5 years." },
  { year: "August before 3L", what: "DOJ Honors Program application opens and closes. This is the most important government recruiting deadline in law school. Apply before 3L classes start." },
  { year: "3L Year", what: "Apply for judicial clerkships (common before DOJ or USAO entry). Continue government networking through internship contacts." },
  { year: "After Law School", what: "Clerkship first (common path to DOJ) or direct entry through Honors Program. For USAO: typically 2–5 years at BigLaw or DOJ first." },
  { year: "2–5 Years Post-Law School", what: "Apply to US Attorney's Offices. Move deeper into agency work, pursue senior government roles, or transition to private practice (the 'revolving door')." },
];

const reasons = [
  { title: "Real courtroom experience from day one.", body: "AUSAs try cases. BigLaw associates rarely see a courtroom in their first five years. If you want to stand up in front of a jury, government law is the fastest path." },
  { title: "Sustainable hours with meaningful work.", body: "Government lawyers work hard — but not BigLaw hard. You can have a life and do important work. Most federal government offices have reasonable hours by legal standards." },
  { title: "Geographic flexibility.", body: "US Attorney's Offices are in every city in the country. Federal agencies have offices nationwide. You don't have to move to New York or DC to have a serious legal career." },
  { title: "Public Service Loan Forgiveness.", body: "Government lawyers qualify for PSLF after 10 years. With law school debt often exceeding $200,000, PSLF makes the government salary math work — the effective compensation is much higher than the listed figure." },
  { title: "The 'revolving door' works both ways.", body: "Many BigLaw partners spent time in government — at the SEC, DOJ, or a US Attorney's Office. Government experience gives you credibility and a network that BigLaw values. You can move from government to private practice and back." },
];

export default function GovernmentPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-10">
        <Link href="/careers/law-career" className="text-xs font-semibold text-[#6B7280] hover:text-[#1E3A5F] transition-colors">← Getting a Law Job</Link>
        <span className="block text-xs font-semibold uppercase tracking-widest text-[#1E3A5F] mt-4 mb-2">Government & DOJ</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          Government Law.
        </h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-4">
          Prosecuting federal crimes. Enforcing antitrust law. Regulating financial markets. Handling environmental litigation. Government legal careers cover a wide range — and they offer something BigLaw almost never does: real courtroom experience from early in your career.
        </p>
        <Callout type="info">
          Congressional committee legal work — drafting legislation, conducting oversight, preparing for hearings — is a high-prestige government path that feeds directly into DOJ, federal agencies, and private practice. Students from HBCUs in our research used Capitol Hill internships as a key stepping stone before top law schools.
        </Callout>
      </div>

      <section className="mb-14">
        <h2 className="text-2xl font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>Why government law?</h2>
        <p className="text-sm text-[#6B6B6B] mb-6">What makes this track different from the others.</p>
        <div className="space-y-3">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
              <CheckCircle2 size={14} className="text-[#1E3A5F] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#0D0D0D] text-sm">{r.title}</p>
                <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
        <Callout type="info">
          Public Service Loan Forgiveness (PSLF): After 10 years of qualifying public service employment and income-driven loan repayments, all remaining federal student loans are forgiven. With law school debt often exceeding $200,000, PSLF dramatically changes the financial calculus for government careers.
        </Callout>
      </section>

      <Divider label="Key Government Roles" />
      <div className="space-y-5 mb-8">
        {keyRoles.map((r) => (
          <div key={r.name} className="border border-[#E5E5E0] rounded-xl bg-white p-6">
            <div className="flex items-start justify-between gap-3 mb-3">
              <h3 className="font-bold text-[#0D0D0D] text-base">{r.name}</h3>
              <span className="text-xs font-semibold text-[#1E3A5F] bg-[#EFF6FF] px-2 py-0.5 rounded flex-shrink-0">{r.pay}</span>
            </div>
            <p className="text-sm text-[#6B6B6B] leading-relaxed mb-3">{r.what}</p>
            <div className="space-y-2">
              <div className="bg-[#FAFAF7] border border-[#E5E5E0] rounded-lg p-3">
                <p className="text-xs font-semibold text-[#6B7280] mb-1">Path in:</p>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">{r.path}</p>
              </div>
              <div className="bg-[#FAFAF7] border border-[#E5E5E0] rounded-lg p-3">
                <p className="text-xs font-semibold text-[#6B7280] mb-1">What the work looks like:</p>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">{r.work}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Divider label="Federal Regulatory Agencies" />
      <p className="text-sm text-[#6B6B6B] mb-6">Every major federal agency has a legal division that hires law school graduates. Here are the most relevant ones and what they do.</p>
      <div className="space-y-3 mb-8">
        {agencies.map((a) => (
          <div key={a.name} className="p-4 border border-[#E5E5E0] rounded-lg bg-white">
            <p className="font-semibold text-[#0D0D0D] text-sm mb-1">{a.name}</p>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">{a.desc}</p>
          </div>
        ))}
      </div>

      <Divider label="The Law School to Government Pipeline" />
      <div className="space-y-2 mb-12">
        {pipeline.map((row) => (
          <div key={row.year} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
            <span className="text-xs font-semibold text-[#1E3A5F] w-36 flex-shrink-0 mt-0.5">{row.year}</span>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">{row.what}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/careers/law-career/clerkships" className="inline-flex items-center gap-2 px-5 py-3 bg-[#1E3A5F] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer">
          ← Clerkships
        </Link>
        <Link href="/careers/law-career/public-interest" className="inline-flex items-center gap-2 px-5 py-3 border border-[#E5E5E0] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:border-[#1E3A5F] transition-colors cursor-pointer">
          Public Interest <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
