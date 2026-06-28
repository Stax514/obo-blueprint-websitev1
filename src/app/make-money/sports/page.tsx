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

const outcomes = [
  { path: "NBA Player", pMaking: "~0.02%", pWealth: "< 0.01%", reality: "~60% of NBA players are in financial distress within 5 years of retirement" },
  { path: "NFL Player", pMaking: "~0.03%", pWealth: "< 0.01%", reality: "~78% of NFL players in financial distress within 2 years; average career 3.3 years" },
];

const costs = [
  { title: "You need to go all-in before you know if it works", body: "Professional sports requires 6–8 hours per day of physical training during the exact years you would otherwise be in school building career credentials. You cannot hedge. You commit fully, or you don't compete." },
  { title: "You sacrifice years that your peers are compounding", body: "If you're seriously pursuing the NBA or NFL from ages 18–24, your peers with college degrees are already 3–4 years into career income. That compounding gap never fully closes." },
  { title: "Most who miss are left with no degree and no career skills", body: "The 99.98% who don't make the league are 22–25 years old with no credential, peers ahead in their careers, and no professional skills. They have to restart from below Tier 0a at an age when college graduates are already compounding year 2 or 3 of income." },
  { title: "Even making it doesn't guarantee wealth", body: "~60% of NBA players and ~78% of NFL players experience financial distress after retirement. Making the league is not the same as building wealth. Short careers, poor financial management, and large entourages drain even substantial contracts." },
];

const whatMakesItDifferent = [
  { factor: "Can you do both (sports + school)?", sports: "Almost impossible — requires 6–8 hrs/day physical training", other: "Most careers: Yes — school and career building can coexist" },
  { factor: "Does preparation/strategy help your odds?", sports: "Minimal — physical talent is the gate", other: "Most careers: Significantly — preparation moves the needle" },
  { factor: "Do you need to go all-in before you know?", sports: "Yes — you sacrifice school and career development years", other: "Most careers: No — you build credentials first, pivot if needed" },
  { factor: "Does it require sacrificing your degree?", sports: "Often yes", other: "Most careers: No" },
];

export default function SportsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-10">
        <Link href="/make-money" className="text-xs font-semibold text-[#6B7280] hover:text-[#065F46] transition-colors">← Make Money</Link>
        <span className="block text-xs font-semibold uppercase tracking-widest text-[#065F46] mt-4 mb-2">Sports</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          NBA / NFL: The Binary Outcome.
        </h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-4">
          Professional sports is categorized differently from every other path in this guide — not because the money isn't real, but because entry is not a skills or preparation game. Physical talent ultimately decides who makes it. Preparation has a ceiling that no other career path has.
        </p>
        <Callout type="warn">
          The age column is irrelevant for NBA/NFL. It doesn't matter that an NBA player can hit $1M at 21 — if only 2 in 10,000 people who seriously pursue this path make the league, and most of them lose the money anyway, the age milestone is a statistical ghost.
        </Callout>
      </div>

      <section className="mb-14">
        <h2 className="text-2xl font-bold text-[#0D0D0D] mb-6" style={{ fontFamily: "'Libre Bodoni', serif" }}>The numbers</h2>
        <div className="overflow-x-auto rounded-xl border border-[#E5E5E0]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#FFF7ED] border-b border-[#E5E5E0]">
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#374151] uppercase tracking-wider">Path</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-[#374151] uppercase tracking-wider">P(Making It)</th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-[#374151] uppercase tracking-wider">P($1M, Long-Term)</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-[#374151] uppercase tracking-wider hidden md:table-cell">Reality</th>
              </tr>
            </thead>
            <tbody>
              {outcomes.map((row, i) => (
                <tr key={i} className="border-b border-[#E5E5E0] last:border-b-0 bg-white">
                  <td className="px-4 py-3 font-bold text-[#0D0D0D]">{row.path}</td>
                  <td className="px-4 py-3 text-center font-bold text-[#DC2626]">{row.pMaking}</td>
                  <td className="px-4 py-3 text-center font-bold text-[#DC2626]">{row.pWealth}</td>
                  <td className="px-4 py-3 text-[#6B6B6B] hidden md:table-cell text-xs">{row.reality}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#9CA3AF] mt-2">Sources: NBPA research (~60% within 5 years of retirement); Sports Illustrated / NFLPA (~78% within 2 years).</p>
      </section>

      <Divider label="What Chasing This Path Actually Costs" />
      <div className="space-y-3 mb-8">
        {costs.map((item, i) => (
          <div key={i} className="flex gap-4 p-5 border border-[#E5E5E0] rounded-xl bg-white">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#FEF2F2] flex items-center justify-center text-xs font-bold text-[#DC2626]">{i + 1}</div>
            <div>
              <p className="font-semibold text-[#0D0D0D] text-sm mb-1">{item.title}</p>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      <Divider label="Why Sports is Different" />
      <p className="text-sm text-[#6B6B6B] mb-6">Why professional sports can't be compared to other high-upside career paths.</p>
      <div className="overflow-x-auto rounded-xl border border-[#E5E5E0] mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#F9FAFB] border-b border-[#E5E5E0]">
              <th className="text-left px-4 py-3 text-xs font-semibold text-[#374151] uppercase tracking-wider">Factor</th>
              <th className="text-center px-4 py-3 text-xs font-semibold text-[#374151] uppercase tracking-wider">NBA / NFL</th>
              <th className="text-center px-4 py-3 text-xs font-semibold text-[#374151] uppercase tracking-wider">Other High-Upside Careers</th>
            </tr>
          </thead>
          <tbody>
            {whatMakesItDifferent.map((row, i) => (
              <tr key={i} className="border-b border-[#E5E5E0] last:border-b-0 bg-white">
                <td className="px-4 py-3 font-medium text-[#0D0D0D] text-xs">{row.factor}</td>
                <td className="px-4 py-3 text-center text-xs text-[#DC2626] font-medium">{row.sports}</td>
                <td className="px-4 py-3 text-center text-xs text-[#065F46] font-medium">{row.other}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Callout type="warn">
        <strong>What pursuing NBA/NFL really costs if you miss:</strong> You are 22–25 years old with no college degree, peers who are 3–4 years ahead in their careers, and no professional skills. You have to start from scratch — below Tier 0a — at an age when most college graduates are already compounding their first year of career income.
      </Callout>

      <Callout type="info">
        <strong>This doesn't mean don't play sports.</strong> Playing at a high level through high school and college is valuable — athletic identity, discipline, teamwork, and scholarships are all real. The question is whether you're building a career path alongside it, or sacrificing your career development for a 0.02% lottery ticket.
      </Callout>

      <div className="flex flex-col sm:flex-row gap-3 mt-8">
        <Link href="/make-money/tiers" className="inline-flex items-center gap-2 px-5 py-3 bg-[#065F46] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#4ADE80] hover:text-[#0D0D0D] transition-colors cursor-pointer">
          ← The Tiers
        </Link>
        <Link href="/make-money/music" className="inline-flex items-center gap-2 px-5 py-3 border border-[#E5E5E0] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:border-[#065F46] transition-colors cursor-pointer">
          Music <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
