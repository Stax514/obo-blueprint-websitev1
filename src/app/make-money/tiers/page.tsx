import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";

function Callout({ type, children }: { type: "info" | "warn"; children: React.ReactNode }) {
  const s = {
    info: { cls: "bg-[#ECFDF5] border-[#065F46]", Icon: CheckCircle2, color: "text-[#065F46]" },
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
      <h2 className="text-xl font-extrabold text-[#065F46] whitespace-nowrap">{label}</h2>
      <div className="h-px flex-1 bg-[#E2E8F0]" />
    </div>
  );
}

const tiers = [
  {
    label: "Tier 0a — No Degree, No Trade",
    desc: "Working whatever jobs are available without a credential or skilled trade.",
    insight: "Without a credential, you are dependent on discipline alone to build wealth. Most people in this tier don't reach $1M net worth. The safety net is almost nonexistent.",
    rows: [
      { path: "Unskilled / service work", age: "60–70+", prob: "~15%", notes: "Requires extreme discipline; very few get there" },
      { path: "Retail / food management", age: "55–65", prob: "~20%", notes: "Long runway; possible with consistency" },
      { path: "Self-employed (no credential)", age: "45–60", prob: "~25%", notes: "Business ownership is the only real accelerator at this tier" },
    ],
  },
  {
    label: "Tier 0b — Trade School / Vocational Training",
    desc: "A 1–2 year investment that unlocks skilled, in-demand work.",
    insight: "The unlock is business ownership. A journeyman electrician earning $75–$95K gets there eventually. A master electrician with their own shop billing $1M/year in contracts gets there much faster. The trade credential is cheap to get and the ceiling is real.",
    rows: [
      { path: "Electrician (journeyman)", age: "50–58", prob: "~45%", notes: "Master license + own business is the accelerator" },
      { path: "Plumber", age: "50–58", prob: "~42%", notes: "Similar path to electrician" },
      { path: "HVAC Technician", age: "52–60", prob: "~38%", notes: "Residential + commercial splits income" },
      { path: "Welder (specialized)", age: "50–60", prob: "~35%", notes: "Offshore / industrial pays significantly more" },
      { path: "Electrician (master / own business)", age: "43–52", prob: "~60%", notes: "Business ownership is the key unlock; biggest wealth builder in trades" },
    ],
  },
  {
    label: "Tier 1 — Any College Degree",
    desc: "Any major, any school (including community college → 4-year transfer). The credential matters most at this tier — not the subject.",
    insight: 'Even the "weakest" college degree puts you on a career track with employer credibility, higher starting income, and compounding salary growth. Over 30 years, that gap versus no credential is enormous.',
    rows: [
      { path: "Any bachelor's degree", age: "50–62", prob: "~48%", notes: "General career trajectory; compounding over 30 years" },
      { path: "Liberal arts / humanities", age: "52–62", prob: "~42%", notes: "Lower starting salary; still achievable with discipline" },
      { path: "Education / social work", age: "55–65", prob: "~35%", notes: "Lower income ceiling; possible but requires real discipline" },
      { path: "Any degree + side business", age: "40–52", prob: "~58%", notes: "Entrepreneurship combined with degree income is a major accelerator" },
    ],
  },
  {
    label: "Tier 2 — Strategic Major",
    desc: "Choosing a field with a direct income-to-job pipeline increases the timeline dramatically.",
    insight: "The unlock is the pipeline. These majors have clear job-to-income ratios, demand is high, and the income compounds predictably. The ceiling is not as high as Tier 3, but the probability is.",
    rows: [
      { path: "Registered Nurse", age: "44–54", prob: "~62%", notes: "Travel nursing ($100–$150K) is the major accelerator" },
      { path: "Accountant (CPA)", age: "42–52", prob: "~65%", notes: "CPA license unlocks significantly higher comp" },
      { path: "Software Engineer (avg company)", age: "40–50", prob: "~68%", notes: "Even non-FAANG SWE compounds well at $90–$140K" },
      { path: "Data Analyst", age: "44–54", prob: "~58%", notes: "Growing field; comp varies widely by industry" },
      { path: "Financial Analyst", age: "42–50", prob: "~65%", notes: "Corporate finance track; steady climb" },
      { path: "Civil / Mechanical Engineer", age: "42–52", prob: "~62%", notes: "Stable income; slower growth than SWE" },
    ],
  },
  {
    label: "Tier 3 — Elite Professional Path",
    desc: "Requires the right school, preparation, and execution — but dramatically accelerates the timeline.",
    insight: 'This is what makes Tier 3 especially valuable: even the "failure" cases are financially solid. A BigLaw associate who burns out and leaves for an in-house role earns $150–$300K. An IB analyst who leaves after 2 years lands in corporate finance at $120–$200K. The floor of Tier 3 is often higher than the ceiling of Tier 1.',
    rows: [
      { path: "Private Equity / Hedge Fund", age: "27–31", prob: "~88%", notes: "Carry and bonus concentrates wealth fastest" },
      { path: "Investment Banking (BB/EB)", age: "28–32", prob: "~85%", notes: "Save $100K+/yr starting year 1; compounds fast" },
      { path: "BigLaw Attorney", age: "29–33", prob: "~82%", notes: "$215K+ year 1, $350K+ by year 3" },
      { path: "Software Engineer (FAANG)", age: "30–34", prob: "~80%", notes: "RSU vesting is the engine; $80–$120K/yr in equity alone" },
      { path: "Management Consulting (MBB)", age: "31–35", prob: "~78%", notes: "Strong post-consulting career options" },
      { path: "Product Manager (FAANG)", age: "32–37", prob: "~75%", notes: "Strong equity compensation; market-rate dependent" },
    ],
  },
];

export default function TiersPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-10">
        <Link href="/make-money" className="text-xs font-semibold text-[#6B7280] hover:text-[#065F46] transition-colors">← Make Money</Link>
        <span className="block text-xs font-semibold uppercase tracking-widest text-[#065F46] mt-4 mb-2">The 5 Tiers</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          Every major path. What it actually pays.
        </h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
          From no credential to elite professional — what each tier actually delivers in probability of hitting $1M net worth. Not headline salary. Probability.
        </p>
        <Callout type="info">
          <strong>Assumptions throughout:</strong> 25% savings rate, 7% annual investment return on total compensation. Net worth = savings + investments (excludes home equity). These are conservative — high earners typically save 30–40%.
        </Callout>
      </div>

      {tiers.map((tier, ti) => (
        <div key={ti} className="mb-14">
          <Divider label={tier.label} />
          <p className="text-sm text-[#6B6B6B] mb-6 leading-relaxed">{tier.desc}</p>
          <div className="overflow-x-auto rounded-xl border border-[#E5E5E0] mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F9FAFB] border-b border-[#E5E5E0]">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#374151] uppercase tracking-wider">Career</th>
                  <th className="text-center px-4 py-3 text-xs font-semibold text-[#374151] uppercase tracking-wider">Age to $1M</th>
                  <th className="text-center px-4 py-3 text-xs font-semibold text-[#374151] uppercase tracking-wider">P($1M)</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-[#374151] uppercase tracking-wider hidden md:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {tier.rows.map((row, i) => (
                  <tr key={i} className="border-b border-[#E5E5E0] last:border-b-0 bg-white">
                    <td className="px-4 py-3 font-medium text-[#0D0D0D]">{row.path}</td>
                    <td className="px-4 py-3 text-center text-[#6B6B6B]">{row.age}</td>
                    <td className="px-4 py-3 text-center font-bold text-[#065F46]">{row.prob}</td>
                    <td className="px-4 py-3 text-[#6B6B6B] hidden md:table-cell">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Callout type="info">{tier.insight}</Callout>
        </div>
      ))}

      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <Link href="/make-money/sports" className="inline-flex items-center gap-2 px-5 py-3 bg-[#065F46] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#4ADE80] hover:text-[#0D0D0D] transition-colors cursor-pointer">
          Sports <ArrowRight size={14} />
        </Link>
        <Link href="/make-money/music" className="inline-flex items-center gap-2 px-5 py-3 border border-[#E5E5E0] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:border-[#065F46] transition-colors cursor-pointer">
          Music <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
