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

const types = [
  { name: "District Court (Trial Court)", competitive: "Competitive", term: "1 year", desc: "You work on both criminal and civil matters. The best introduction to how federal courts actually work — from filing to trial. Available in every federal district across the country. Easier to get than circuit. A great starting point if you plan to ladder up." },
  { name: "Circuit Court (Appeals Court)", competitive: "Very Competitive", term: "1–2 years", desc: "Pure legal writing and analysis — no trials. You research and draft opinions on the most significant legal questions in the country. The 2nd Circuit (NY), 9th Circuit (CA), and DC Circuit are the most prestigious. A circuit clerkship opens essentially every door in law." },
  { name: "DC Circuit", competitive: "Extremely Competitive", term: "1–2 years", desc: "The most prestigious circuit. The primary pipeline to Supreme Court clerkships. Heavily recruited by the DOJ and elite BigLaw firms. Clerking for the DC Circuit is a career-defining credential." },
  { name: "Supreme Court", competitive: "Near-Impossible", term: "1 year", desc: "36 clerks total — 4 per Justice. Typically requires a circuit clerkship first. Clerks draft bench memos on petitions for certiorari, assist with mergers opinions, and work on some of the most consequential legal questions of any generation. Every SCOTUS clerk has their pick of any job in law." },
  { name: "State Supreme Court", competitive: "Competitive (varies)", term: "1–2 years", desc: "Prestigious within your state. Good for students who want to build a career in a specific state — the state supreme court clerkship gives you visibility with the most important judges and lawyers in that jurisdiction." },
];

const applySteps = [
  { label: "Build your credentials in 1L", body: "Top grades in 1L are essential — particularly the first semester. Law Review membership is the single strongest signal. A strong seminar paper or law review Note becomes your writing sample." },
  { label: "Cultivate professor relationships early", body: "Judicial clerkship recommendations from law professors who know federal judges are critical. Office hours, research assistant positions, and seminar courses are how you build those relationships. Start in 1L." },
  { label: "Prepare a strong writing sample", body: "Judges are hiring a legal writer. Your writing sample — usually a seminar paper, law review Note, or edited brief — is your most important application document after grades. Make it your best legal writing." },
  { label: "Apply through OSCAR", body: "OSCAR (Online System for Clerkship Application and Review) is the federal clerkship application portal. Most applications go through it. Some judges hire outside the official plan on their own timeline — check each judge's preferences on their court's website." },
  { label: "Apply broadly", body: "50–100 applications for circuit clerkships is normal. 30–50 for district. Most applicants target a geographic region, a practice area specialty (criminal vs. civil), and a range of prestige levels. Cast a wide net." },
  { label: "Understand the timing", body: "The federal clerkship hiring market has changed significantly in recent years. Many judges now participate in a voluntary hiring plan with applications in fall of 3L year. Others hire much earlier. Research each judge's preferences individually." },
];

const afterClerkship = [
  { path: "BigLaw", desc: "Former clerks receive a clerkship bonus on top of their associate salary: $25,000 for district court; $75,000–$100,000+ for circuit; $100,000+ for SCOTUS. They're also placed directly into mid-level associate roles, skipping the first year or two of associate seniority." },
  { path: "Department of Justice", desc: "DOJ aggressively recruits circuit and SCOTUS clerks for its Appellate and Civil Divisions. A clerkship is near-required for the most prestigious DOJ positions. Many career DOJ attorneys and federal judges clerked first." },
  { path: "Law Academia", desc: "Most law professors at top schools have at least one federal clerkship. A SCOTUS clerkship is often required at the elite law schools. If academia is your goal, a clerkship is essentially mandatory." },
  { path: "Second Clerkship (Ladder)", desc: "District court clerks often apply for circuit clerkships. Circuit clerks apply for SCOTUS. This 'clerkship ladder' is a deliberate strategy for students targeting the most prestigious positions — each step opens the next." },
  { path: "State Attorney General / US Attorney's Office", desc: "Clerks are highly competitive candidates for USAO and AG offices. The writing and legal judgment developed in clerkships is exactly what those offices want." },
];

const qualify = [
  "Top 10–15% of class at a T14 law school (or near the top at a non-T14)",
  "Law Review membership — both writing and editing experience",
  "A strong judicial writing sample (seminar paper or law review Note)",
  "Strong faculty recommendations from professors who know federal judges",
  "For SCOTUS: a prior circuit clerkship + exceptional academic credentials",
  "Geographic flexibility — the strongest candidates apply nationally, not only in one city",
];

export default function ClerkshipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-10">
        <Link href="/careers/law-career" className="text-xs font-semibold text-[#6B7280] hover:text-[#1E3A5F] transition-colors">← Getting a Law Job</Link>
        <span className="block text-xs font-semibold uppercase tracking-widest text-[#1E3A5F] mt-4 mb-2">Judicial Clerkships</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          Judicial Clerkships.
        </h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-4">
          A 1–2 year position working directly for a federal judge right after law school. You are the judge's principal researcher and writer — drafting bench memos, researching novel legal questions, and advising on rulings. The most intellectually rigorous post-law school experience available. The single most prestigious credential in the legal profession.
        </p>
        <Callout type="info">
          At elite BigLaw firms, former clerks receive a clerkship bonus of $25,000–$100,000+ on top of regular associate pay. At the DOJ and in academia, clerkship experience is near-required for top positions. At the Supreme Court, clerks shape the law of the land. Clerkships close essentially no doors — and open nearly all of them.
        </Callout>
      </div>

      <section className="mb-14">
        <h2 className="text-2xl font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>Types of clerkships</h2>
        <p className="text-sm text-[#6B6B6B] mb-6">Each level of the federal judiciary is a different experience — and a different door.</p>
        <div className="space-y-4">
          {types.map((t) => (
            <div key={t.name} className="border border-[#E5E5E0] rounded-xl bg-white p-5">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-bold text-[#0D0D0D] text-base">{t.name}</h3>
                <div className="flex gap-2 flex-shrink-0">
                  <span className="text-[10px] font-semibold text-[#6B7280] bg-[#F3F4F6] px-2 py-0.5 rounded">{t.term}</span>
                  <span className="text-[10px] font-semibold text-[#1E3A5F] bg-[#EFF6FF] px-2 py-0.5 rounded">{t.competitive}</span>
                </div>
              </div>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider label="Who Gets Clerkships" />
      <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">Federal circuit clerkships — especially the 9th Circuit, 2nd Circuit, and DC Circuit — are extremely competitive. Here's what the strongest applicants have in common.</p>
      <div className="space-y-2 mb-8">
        {qualify.map((q, i) => (
          <div key={i} className="flex gap-3 p-4 border border-[#E5E5E0] rounded-lg bg-white">
            <CheckCircle2 size={14} className="text-[#1E3A5F] flex-shrink-0 mt-0.5" />
            <p className="text-sm text-[#6B6B6B] leading-relaxed">{q}</p>
          </div>
        ))}
      </div>

      <Divider label="How to Apply" />
      <div className="space-y-3 mb-8">
        {applySteps.map((s, i) => (
          <div key={i} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1E3A5F] flex items-center justify-center text-xs font-bold text-white">{i + 1}</div>
            <div>
              <p className="font-semibold text-[#0D0D0D] text-sm">{s.label}</p>
              <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{s.body}</p>
            </div>
          </div>
        ))}
      </div>

      <Divider label="What Happens After a Clerkship" />
      <div className="space-y-3 mb-12">
        {afterClerkship.map((item) => (
          <div key={item.path} className="p-5 border border-[#E5E5E0] rounded-xl bg-white">
            <p className="font-bold text-[#0D0D0D] text-sm mb-2">{item.path}</p>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/careers/law-career/biglaw" className="inline-flex items-center gap-2 px-5 py-3 bg-[#1E3A5F] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer">
          ← BigLaw
        </Link>
        <Link href="/careers/law-career/government" className="inline-flex items-center gap-2 px-5 py-3 border border-[#E5E5E0] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:border-[#1E3A5F] transition-colors cursor-pointer">
          Government <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
