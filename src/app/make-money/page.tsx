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

const summary = [
  { path: "No degree, no trade", prob: "~15–20%", age: "60–70+", notes: "Very hard; requires extreme discipline" },
  { path: "Trade school", prob: "~40–60%", age: "43–58", notes: "Business ownership is the unlock" },
  { path: "Any college degree", prob: "~42–55%", age: "50–62", notes: "Floor is real; compounding over 30 years" },
  { path: "Strategic major", prob: "~58–68%", age: "40–54", notes: "Direct income pipeline matters" },
  { path: "Elite professional path", prob: "~75–88%", age: "27–37", notes: "High probability AND strong floor" },
  { path: "NBA / NFL (all who try)", prob: "< 0.01%", age: "—", notes: "Probability too low; most end broke" },
  { path: "Music (full-time only)", prob: "~0.1%", age: "—", notes: "Not recommended as sole path" },
  { path: "Music + career (combined)", prob: "Follows career tier", age: "Follows career tier", notes: "Recommended — music is additive" },
];

const subPages = [
  { href: "/make-money/tiers", num: "01", label: "The 5 Tiers", desc: "From no degree to elite professional — what each path actually delivers in probability of hitting $1M net worth." },
  { href: "/make-money/sports", num: "02", label: "Sports", desc: "NBA and NFL: the binary outcome. What chasing this path costs if you miss — and what most people get wrong about the odds." },
  { href: "/make-money/music", num: "03", label: "Music", desc: "Why music is different from sports, what the streaming math actually says, and the model that works." },
];

export default function MakeMoneyPage() {
  return (
    <div className="bg-[#FAFAF7]">
      <div className="bg-[#0D0D0D] text-[#FAFAF7] px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="mt-6 mb-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FAFAF7] bg-[#065F46] px-2 py-0.5 rounded-full">● Make Money</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 leading-tight" style={{ fontFamily: "'Libre Bodoni', serif" }}>
            Clarity on how much each path pays.<br />
            <span className="text-[#4ADE80] italic">And the misconceptions on how to actually get rich.</span>
          </h1>
          <p className="text-[#A0A0A0] text-lg max-w-2xl mb-8">
            Most income comparisons ask the wrong question. A career can have a spectacular ceiling and a near-zero probability of reaching it — making it a statistically terrible financial bet regardless of the headline number. This guide asks the better question.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/make-money/tiers" className="inline-flex items-center gap-2 px-5 py-3 bg-[#4ADE80] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:bg-white transition-colors cursor-pointer">
              See the tiers <ArrowRight size={14} />
            </Link>
            <Link href="/make-money/sports" className="inline-flex items-center gap-2 px-5 py-3 border border-[#3A3A3A] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:border-[#4ADE80] transition-colors cursor-pointer">
              Sports reality check
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        <Callout type="info">
          The key metric throughout this guide is <strong>P($1M net worth)</strong> — the probability of hitting $1M net worth assuming you are already working in that career. Assumptions: 25% savings rate, 7% annual investment return on total compensation. These are conservative for high earners who typically save 30–40%.
        </Callout>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>What's in this guide</h2>
          <p className="text-sm text-[#6B6B6B] mb-6">Three sections covering every major path from no credential to elite career.</p>
          <div className="space-y-3">
            {subPages.map((p) => (
              <Link key={p.href} href={p.href} className="flex items-center gap-5 p-5 border border-[#E5E5E0] rounded-xl bg-white hover:border-[#065F46] transition-colors group cursor-pointer">
                <span className="text-3xl font-bold text-[#0D0D0D]/8 flex-shrink-0" style={{ fontFamily: "'Libre Bodoni', serif" }}>{p.num}</span>
                <div className="flex-1">
                  <p className="font-bold text-[#0D0D0D] text-sm group-hover:text-[#065F46] transition-colors mb-1">{p.label}</p>
                  <p className="text-xs text-[#6B6B6B]">{p.desc}</p>
                </div>
                <ArrowRight size={16} className="text-[#9CA3AF] group-hover:text-[#065F46] transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
        </section>

        <Divider label="The Full Picture" />

        <p className="text-sm text-[#6B6B6B] mb-6">Every major education-to-career path, sorted by probability of reaching $1M net worth.</p>

        <div className="overflow-x-auto rounded-xl border border-[#E5E5E0] mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F9FAFB] border-b border-[#E5E5E0]">
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#374151] uppercase tracking-wider">Education Path</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-[#374151] uppercase tracking-wider">P($1M Net Worth)</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-[#374151] uppercase tracking-wider">Age Range</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#374151] uppercase tracking-wider hidden md:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody>
              {summary.map((row, i) => (
                <tr key={i} className={`border-b border-[#E5E5E0] last:border-b-0 ${row.prob.startsWith("<") ? "bg-[#FFF7ED]" : row.prob === "~75–88%" ? "bg-[#ECFDF5]" : "bg-white"}`}>
                  <td className="px-4 py-3 font-medium text-[#0D0D0D]">{row.path}</td>
                  <td className={`px-4 py-3 text-center font-bold ${row.prob.startsWith("<") ? "text-[#DC2626]" : row.prob === "~75–88%" ? "text-[#065F46]" : "text-[#374151]"}`}>{row.prob}</td>
                  <td className="px-4 py-3 text-center text-[#6B6B6B]">{row.age}</td>
                  <td className="px-4 py-3 text-[#6B6B6B] hidden md:table-cell">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Callout type="info">
          <strong>The core insight:</strong> Education credentials stack. Every tier up from "no degree" significantly raises both the probability of reaching $1M and the speed at which you get there. Sports and full-time music are the only paths that don't follow this pattern — because entry is not a credential game.
        </Callout>

        <div className="mt-12 p-6 bg-[#0D0D0D] rounded-xl text-[#FAFAF7]">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#6B6B6B] mb-3">Data Notes</p>
          <ul className="space-y-2 text-xs text-[#9CA3AF] leading-relaxed">
            <li>→ Income figures reflect total compensation (base + bonus + equity), not base salary. BLS data understates high-earning careers because it caps at the 90th percentile and excludes equity.</li>
            <li>→ Savings/investment assumptions: 25% savings rate, 7% nominal return (S&P 500 historical average). Conservative for high earners who typically save 30–40%.</li>
            <li>→ Entry probabilities are estimates based on industry hiring data for serious, prepared candidates. Preparation significantly outperforms base rates.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
