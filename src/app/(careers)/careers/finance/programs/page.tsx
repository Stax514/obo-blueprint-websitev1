import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";

function Callout({ type, children }: { type: "info" | "warn"; children: React.ReactNode }) {
  const s = {
    info: { cls: "bg-[#FFF7ED] border-[#7C2D12]", Icon: CheckCircle2, color: "text-[#7C2D12]" },
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
      <h2 className="text-xl font-extrabold text-[#7C2D12] whitespace-nowrap">{label}</h2>
      <div className="h-px flex-1 bg-[#E2E8F0]" />
    </div>
  );
}

const programs = [
  {
    bank: "JPMorgan Chase",
    color: "bg-[#003087]",
    items: [
      { name: "Advancing Black Pathways (ABP) Fellowship", when: "Apply Fall semester", who: "Sophomore • Black students", what: "JPMorgan's premier diversity fellowship. Brandon Robinson (Michigan Ross) and Rhema Onyia (Cornell) both announced their JPMorgan CIB offers as direct results of this program. It routes participants directly into Corporate & Investment Banking. This is not a side door — it is a pipeline." },
      { name: "Launching Leaders", when: "Apply Fall semester", who: "Freshman & Sophomore • Underrepresented students", what: "JPMorgan's early career diversity program for freshmen and sophomores. Provides access to JPMorgan bankers, mentorship, and exposure to the firm before formal recruiting begins." },
      { name: "Winning Women", when: "Apply Fall semester", who: "Sophomore • Women in finance", what: "JPMorgan's early career diversity program for women interested in investment banking, markets, and corporate finance." },
    ],
  },
  {
    bank: "Goldman Sachs",
    color: "bg-[#1A1A1A]",
    items: [
      { name: "Virtual Insight Series", when: "Apply Fall semester", who: "Freshman & Sophomore • Underrepresented students", what: "Rhema Onyia was selected out of 10,000+ applicants as a first step into the Goldman Sachs recruiting pipeline. The program provides resume and interview coaching, divisional exposure, and a direct connection to GS recruiters." },
      { name: "Possibilities Summit", when: "Apply Fall semester", who: "Freshman & Sophomore • Underrepresented students", what: "Goldman's on-campus diversity conference for underrepresented students. Exposure to different GS divisions and early relationship-building with GS alumni." },
      { name: "Goldman Sachs Freshman/Sophomore Programs", when: "Apply September–November", who: "Freshman & Sophomore • Underrepresented students", what: "Goldman runs multiple early career programs that vary by year. Check gs.com/careers for current program names and timelines — they update annually." },
    ],
  },
  {
    bank: "Morgan Stanley",
    color: "bg-[#0033A0]",
    items: [
      { name: "Sophomore IB Diversity Program", when: "Apply Fall semester", who: "Sophomore • Underrepresented students", what: "Morgan Stanley's structured early program for sophomores interested in investment banking. Direct access to Morgan Stanley IB bankers, technical prep, and a head start in the recruiting funnel." },
    ],
  },
  {
    bank: "Citi",
    color: "bg-[#003B70]",
    items: [
      { name: "Freshman Discovery Program", when: "Apply Fall semester", who: "Freshman • Underrepresented students", what: "Citi's early career diversity program for freshmen. One of the few bulge bracket programs explicitly targeting first-year students. Apply in September." },
    ],
  },
  {
    bank: "Bank of America",
    color: "bg-[#E31837]",
    items: [
      { name: "BofA Freshman Diversity Program", when: "Apply Fall semester", who: "Freshman & Sophomore • Underrepresented students", what: "Bank of America's early career diversity program providing exposure to global banking, markets, and research divisions." },
    ],
  },
];

const fallbacks = [
  { title: "Apply to a boutique IB internship.", body: "If you don't land a diversity program, a boutique or middle market bank internship is the documented fallback. Zoe Zhao went Georgetown → UBS Investment Banking → JPMorgan. Any IB internship — even at a smaller firm — opens the door to bulge brackets later." },
  { title: "Target middle market banks (Jefferies, Baird, Houlihan Lokey).", body: "Middle market banks recruit more broadly than bulge brackets. Getting into Jefferies or Houlihan Lokey as a sophomore or junior is a real path to Goldman or JPMorgan later." },
  { title: "Pursue a corporate finance or financial advisory internship.", body: "FP&A, treasury, or transaction advisory at a Big 4 firm builds financial modeling skills and demonstrates finance seriousness. It's not IB, but it's a legitimate stepping stone." },
  { title: "Build the alumni network aggressively.", body: "Zoe Zhao explicitly credited the Georgetown alumni network with making her IB career possible. Even from a semi-target school, alumni who are already at the banks will refer you if you build those relationships early." },
  { title: "Consider the pre-MBA IB path.", body: "Some people enter corporate finance or consulting and move to IB at 24–26 after an MBA. It's a longer path, but it's real. An MBA from HBS, Wharton, or Booth resets the recruiting clock." },
];

export default function FinanceProgramsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-10">
        <Link href="/careers/finance" className="text-xs font-semibold text-[#6B7280] hover:text-[#7C2D12] transition-colors">← Finance & IB</Link>
        <span className="block text-xs font-semibold uppercase tracking-widest text-[#7C2D12] mt-4 mb-2">Key Programs</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          Diversity Programs & Early Access.
        </h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
          The programs that open bulge bracket doors — especially before junior year recruiting begins.
        </p>
        <Callout type="info">
          Two people in our dataset got into JPMorgan through the Advancing Black Pathways Fellowship — directly into Corporate & Investment Banking. These programs exist at every bulge bracket bank and are documented pipelines, not participation awards. Apply to all of them starting freshman fall.
        </Callout>
      </div>

      <Divider label="Bank-by-Bank Programs" />
      <p className="text-sm text-[#6B6B6B] mb-6">Most application windows open in September–November of your freshman or sophomore year — before most students even know these programs exist.</p>

      <div className="space-y-8">
        {programs.map((bank) => (
          <div key={bank.bank}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-2 h-2 rounded-full ${bank.color}`} />
              <p className="text-xs font-bold uppercase tracking-widest text-[#6B6B6B]">{bank.bank}</p>
            </div>
            <div className="space-y-3">
              {bank.items.map((p) => (
                <div key={p.name} className="border border-[#E5E5E0] rounded-xl p-5 bg-white">
                  <h3 className="text-sm font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>{p.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-[#7C2D12] bg-[#FFF7ED] px-2 py-0.5 rounded-full">{p.when}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-[#1A1A2E] bg-[#EEF2FF] px-2 py-0.5 rounded-full">{p.who}</span>
                  </div>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">{p.what}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Divider label="When You Can't Land a Program" />
      <p className="text-sm text-[#6B6B6B] mb-6">Diversity programs are competitive. If you don't get in, here's what the data says actually works:</p>
      <div className="space-y-3">
        {fallbacks.map((item, i) => (
          <div key={i} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#7C2D12] flex items-center justify-center text-xs font-bold text-white">{i + 1}</div>
            <div>
              <p className="font-semibold text-[#0D0D0D] text-sm">{item.title}</p>
              <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-3">
        <Link href="/careers/finance/roadmap" className="inline-flex items-center gap-2 px-5 py-3 bg-[#7C2D12] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer">
          ← Back to Roadmap
        </Link>
        <Link href="/careers/finance/clubs" className="inline-flex items-center gap-2 px-5 py-3 border border-[#E5E5E0] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:border-[#7C2D12] transition-colors cursor-pointer">
          Clubs & Activities <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
