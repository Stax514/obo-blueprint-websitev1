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

const clubs = [
  {
    tier: "Tier 1 — Essential",
    color: "text-[#7C2D12] bg-[#FFF7ED]",
    items: [
      { name: "Investment Banking Club", desc: "The single most important club for aspiring IB analysts. IB clubs run mock technical interviews, financial modeling workshops, and maintain direct alumni pipelines to banks. Join in the first week of school and rise to leadership over 3–4 years." },
      { name: "Finance Club", desc: "Broader than the IB club — covers markets, equity research, fixed income, and corporate finance. Finance club leadership combined with IB club membership is the standard pattern across the profiles we studied." },
      { name: "Identity & Community Organizations (NSBE, Black Business Student Association, NABA)", desc: "NABA (National Association of Black Accountants) and NBMBAA (National Black MBA Association) both have student chapters that connect directly to bank diversity recruiting events. These organizations appeared repeatedly across profiles and often provide direct introductions to firm recruiters." },
    ],
  },
  {
    tier: "Tier 2 — High Value",
    color: "text-[#1A1A2E] bg-[#EEF2FF]",
    items: [
      { name: "Undergraduate Business Association / Student Government", desc: "Leadership roles in the broader student business community signal cross-functional coordination and stakeholder management. Multiple profiles included student council or business association leadership alongside finance club roles." },
      { name: "Equity Research Club / Stock Pitch Club", desc: "Equity research and stock pitch competitions develop the same analytical muscles as IB. Pitching a stock — with a thesis, valuation, and recommendation — is the closest student activity to what analysts actually do." },
      { name: "Impact Investing / Socially Responsible Investing Club", desc: "These clubs appeared on multiple profiles. They signal both finance interest and a broader perspective on how capital is allocated — increasingly valued at banks with ESG and sustainability practices." },
      { name: "Entrepreneurship Club", desc: "Initiative and ownership appeared in profiles across all three careers. Founding or leading a project that required resource management and decision-making is a meaningful signal even in the most structured industry." },
    ],
  },
  {
    tier: "Tier 3 — Supplemental",
    color: "text-[#6B6B6B] bg-[#F5F5F0]",
    items: [
      { name: "Honor Societies (Phi Beta Kappa, Beta Gamma Sigma, Beta Alpha Psi)", desc: "Academic distinction recognition. Beta Alpha Psi specifically targets accounting and finance students. Worth joining if you qualify — reinforces the academic record IB requires." },
      { name: "Unusual Extracurriculars That Show Genuine Curiosity", desc: "Mateo Graziosi (NYU Stern → JPMorgan LATAM) ran an Isomer Space Program working on CubeSat technology. Unusual extracurriculars that demonstrate intellectual curiosity and leadership complement finance credentials — they don't detract from them." },
    ],
  },
];

const experiences = [
  { signal: "High", title: "IB club leadership (VP or President) + finance club membership", desc: "The standard combination across profiles. IB club leadership signals preparation and commitment. Finance club broadens your fluency. Together, they tell a coherent story." },
  { signal: "High", title: "Bulge bracket or elite boutique diversity program (ABP, GS Virtual Insight, MS Sophomore IB)", desc: "The most powerful single credential before junior year. Documented pipeline to full-time offers at JPMorgan, Goldman Sachs, and Morgan Stanley." },
  { signal: "High", title: "Any IB internship — boutique, middle market, or bulge bracket", desc: "In IB, relevant internship experience compounds. Any investment banking internship — even at a small regional firm — gives you deal exposure and makes you a more credible junior-year candidate." },
  { signal: "High", title: "3.7+ GPA maintained throughout", desc: "Not just a nice-to-have. Banks screen applications by GPA before a human reads the resume. Protect it from day one." },
  { signal: "High", title: "Active alumni network outreach and relationship-building", desc: "Zoe Zhao explicitly credited Georgetown alumni for her JPMorgan offer. The alumni network is not abstract — it's who refers your resume to a recruiter and passes along your name before interviews." },
  { signal: "Medium", title: "International experience or language skills", desc: "Mateo Graziosi's background aligned with JPMorgan's LATAM group. Fiona Popescu's name and background likely aligned with specific deal flow. International experience and language skills open specific coverage group doors." },
  { signal: "Medium", title: "Finance-relevant research or thesis", desc: "A thesis on a capital markets topic, an independent research project on M&A trends, or an economics paper with a real argument — any of these signal intellectual seriousness beyond coursework." },
];

export default function FinanceClubsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-10">
        <Link href="/careers/finance" className="text-xs font-semibold text-[#6B7280] hover:text-[#7C2D12] transition-colors">← Investment Banking</Link>
        <span className="block text-xs font-semibold uppercase tracking-widest text-[#0D0D0D] mt-4 mb-2">Clubs & Activities</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          What to Join and Build.
        </h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
          The clubs, credentials, and experiences that show up on the profiles of analysts at Goldman Sachs, JPMorgan, and Morgan Stanley.
        </p>
        <Callout type="info">
          IB recruiting is the most structured of the three careers we studied. Every profile followed the same core pattern: strong GPA + IB/finance club leadership + internship experience + diversity program or alumni network. The formula is clear. Executing it takes 3 years of consistent effort.
        </Callout>
      </div>

      <Divider label="Recommended Major" />
      <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
        Finance, Economics, Accounting, and Financial Engineering all appear across IB profiles. Business Administration at a strong business school (Ross, McCombs, Stern, Marshall) also works.
      </p>
      <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
        The common requirement is <strong className="text-[#0D0D0D]">quantitative fluency and financial statement literacy</strong>. If your major isn't finance or economics, pair it with accounting and finance coursework that gives you the technical foundation for modeling interviews.
      </p>
      <Callout type="warn">
        Non-quantitative majors without finance supplements are a significant disadvantage in IB. Unlike consulting, where public policy or engineering can work, IB recruiters expect you to understand financial statements and valuation concepts. Close the gap with coursework if your major isn't finance-adjacent.
      </Callout>

      <Divider label="Clubs — What to Join" />
      <div className="space-y-8">
        {clubs.map((tier) => (
          <div key={tier.tier}>
            <span className={`inline-block text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full mb-4 ${tier.color}`}>{tier.tier}</span>
            <div className="space-y-3">
              {tier.items.map((item) => (
                <div key={item.name} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
                  <CheckCircle2 size={15} className="text-[#7C2D12] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0D0D0D] text-sm">{item.name}</p>
                    <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Divider label="Experiences & Credentials — What to Build" />
      <p className="text-sm text-[#6B6B6B] mb-6">Beyond clubs, these are the signals that appeared most consistently across IB analyst profiles.</p>
      <div className="space-y-3">
        {experiences.map((e) => (
          <div key={e.title} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
            <span className={`flex-shrink-0 text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full h-fit mt-0.5 ${
              e.signal === "High" ? "text-[#7C2D12] bg-[#FFF7ED]" : "text-[#6B6B6B] bg-[#F5F5F0]"
            }`}>
              {e.signal}
            </span>
            <div>
              <p className="font-semibold text-[#0D0D0D] text-sm">{e.title}</p>
              <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Divider label="What to Avoid" />
      <div className="space-y-3">
        {[
          { title: "Letting GPA slip below 3.7.", body: "This is the only career in the Blueprint where GPA is a formal screen before humans read your resume. Everything else can be built — a filtered-out GPA cannot be recovered after the fact." },
          { title: "Joining the IB club without rising to leadership.", body: "Membership is table stakes. The arc from analyst to president or VP over 3–4 years is what shows up on the resumes of people who actually break in." },
          { title: "Networking late.", body: "Junior year recruiting starts in August. If you begin networking in July of junior year, you've missed the window. Alumni relationships need months to develop. Start sophomore spring at the latest." },
          { title: "Being vague about your target group.", body: "Generic 'I want to do IB' is the answer that filters people out. Know your vertical, know why, and be able to name a deal in that space that you found interesting." },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#FEF2F2] flex items-center justify-center">
              <AlertTriangle size={13} className="text-[#DC2626]" />
            </div>
            <div>
              <p className="font-semibold text-[#0D0D0D] text-sm">{item.title}</p>
              <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-3">
        <Link href="/careers/finance/programs" className="inline-flex items-center gap-2 px-5 py-3 bg-[#7C2D12] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer">
          ← Key Programs
        </Link>
        <Link href="/careers/finance/interviews" className="inline-flex items-center gap-2 px-5 py-3 border border-[#E5E5E0] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:border-[#7C2D12] transition-colors cursor-pointer">
          Technical Interview Guide <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
