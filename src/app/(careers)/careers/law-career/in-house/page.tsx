import Link from "next/link";
import { CheckCircle2, AlertTriangle } from "lucide-react";

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

const howToGetIn = [
  { from: "M&A / Corporate Associate", to: "In-house M&A Counsel", where: "PE fund, public company, tech company corporate legal team" },
  { from: "IP Associate", to: "In-house IP Counsel", where: "Tech or pharma company — patent-heavy industries especially" },
  { from: "Employment Associate", to: "In-house HR / Employment Counsel", where: "Any large employer — HR and legal teams overlap heavily" },
  { from: "Privacy / Cybersecurity Associate", to: "In-house Privacy Counsel", where: "Tech companies, healthcare, finance — huge demand post-GDPR and AI regulation" },
  { from: "Regulatory Associate", to: "In-house Regulatory Affairs", where: "Healthcare, pharma, financial services — FDA, SEC, CFTC overlap" },
  { from: "Litigation Associate", to: "In-house Litigation Counsel", where: "Companies with recurring litigation needs — retail, insurance, media" },
];

const whereTheyWork = [
  { sector: "Technology", companies: "Google, Apple, Meta, Amazon, Microsoft, Salesforce, Stripe, Airbnb", desc: "In-house legal teams at tech companies are large, well-compensated, and handle everything from M&A to content moderation to employment litigation. Stock compensation can be transformative — RSUs at major tech companies can represent 50–100% of base salary." },
  { sector: "Financial Services", companies: "Goldman Sachs, JPMorgan, Morgan Stanley, BlackRock, Fidelity", desc: "Legal and compliance teams at banks and asset managers. Heavy securities, M&A, and regulatory work. High compensation with significant bonus component." },
  { sector: "Healthcare & Pharma", companies: "Pfizer, Johnson & Johnson, Merck, hospital systems, insurance companies", desc: "Healthcare law, FDA regulatory compliance, clinical trial agreements, pharmaceutical licensing. One of the largest and fastest-growing sectors for in-house counsel." },
  { sector: "Entertainment & Media", companies: "Netflix, Disney, Warner Bros., Spotify, Sony", desc: "IP, talent contracts, content licensing, production agreements. IP and entertainment law backgrounds translate directly here." },
  { sector: "Private Equity & VC", companies: "KKR, Blackstone, Andreessen Horowitz, General Atlantic", desc: "Fund counsel, portfolio company legal support, transaction execution. Deal-heavy work — requires strong M&A and fund formation background from BigLaw." },
  { sector: "Retail & Consumer Goods", companies: "Amazon (retail), Nike, Procter & Gamble, Target", desc: "Supply chain contracts, consumer protection, employment at scale, privacy compliance. More varied than financial services — you cover whatever the business touches." },
];

const typicalWeek = [
  "Reviewing and negotiating a vendor contract for a new software platform",
  "Advising the HR team on a potential employment law matter",
  "Reviewing marketing materials to flag consumer protection risks",
  "Supporting a business development team on a partnership deal",
  "Attending a product meeting to flag legal risks in a new feature launch",
  "Managing outside counsel (BigLaw firms) handling complex litigation or regulatory matters",
  "Briefing the General Counsel on a regulatory development in your area",
];

const payTable = [
  { type: "Big Tech (Google, Meta, Apple)", base: "$200K–$350K", total: "$300K–$600K+ (with RSUs and bonuses)" },
  { type: "Financial Services (Goldman, JPMorgan)", base: "$200K–$400K", total: "$300K–$700K+ (with bonus)" },
  { type: "Healthcare / Pharma", base: "$150K–$280K", total: "$200K–$400K (with bonus)" },
  { type: "Mid-size company / startup", base: "$130K–$250K", total: "$150K–$350K+ (with equity upside)" },
  { type: "General Counsel (senior role)", base: "$400K–$1M+", total: "$600K–$5M+ at large public companies" },
];

const whyBigLawFirst = [
  { title: "You learn the work at the highest level.", body: "BigLaw trains you intensively. You handle more complex transactions in 2 years at a top firm than many in-house lawyers see in a decade. Companies want people who already know how to do the work at a high level before they hire them." },
  { title: "You build the network.", body: "Former BigLaw colleagues, clients, and partners become your contacts when you go in-house. Many in-house roles are filled through informal networks — people hiring lawyers they already know and trust." },
  { title: "The BigLaw brand gives you leverage.", body: "Cravath → Google Legal. S&C → JPMorgan Compliance. The firm name on your resume opens doors at companies that would otherwise require more years of experience. Use it while it has maximum value." },
  { title: "You learn to manage outside counsel.", body: "In-house lawyers spend much of their time managing BigLaw firms working on their company's matters. Having been on the BigLaw side makes you a dramatically better client — you know how the work is staffed, priced, and done." },
];

const reasons = [
  "You want work-life balance with strong compensation — in-house is the best combination of both in law",
  "You're interested in a specific industry and want to understand a business from the inside",
  "You want to be a business partner, not just a service provider — in-house lawyers sit at the table",
  "You want variety — covering everything the company touches legally, not one narrow practice area",
  "You want to grow with a company — as the company grows, so does your role and compensation",
  "You've done 2–5 years at BigLaw and want to apply those skills in a more sustainable environment",
];

export default function InHousePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-10">
        <Link href="/careers/law-career" className="text-xs font-semibold text-[#6B7280] hover:text-[#1E3A5F] transition-colors">← Getting a Law Job</Link>
        <span className="block text-xs font-semibold uppercase tracking-widest text-[#1E3A5F] mt-4 mb-2">In-House Counsel</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          In-House Counsel.
        </h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-4">
          Lawyers who work directly for a company rather than a law firm. Instead of billing hours to multiple clients, you work exclusively for one employer — a tech company, bank, hospital, or retailer large enough to have its own legal department. The hours are significantly better than BigLaw. At tech companies, total compensation including equity can match or exceed it.
        </p>
        <Callout type="warn">
          Almost nobody goes directly from law school to an in-house role at a major company. The standard path is 2–5 years at BigLaw in the relevant practice group, then move in-house. Plan your BigLaw years as preparation for where you ultimately want to land.
        </Callout>
      </div>

      <section className="mb-14">
        <h2 className="text-2xl font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>Is in-house right for you?</h2>
        <p className="text-sm text-[#6B6B6B] mb-6">Six signals that this track fits.</p>
        <div className="space-y-2">
          {reasons.map((r, i) => (
            <div key={i} className="flex gap-3 p-4 border border-[#E5E5E0] rounded-lg bg-white">
              <CheckCircle2 size={14} className="text-[#1E3A5F] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#6B6B6B] leading-relaxed">{r}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider label="How People Get In-House" />
      <p className="text-sm text-[#6B6B6B] mb-6">The standard path: build expertise in a relevant BigLaw practice group, then move in-house to a company in the industry you focused on.</p>
      <div className="space-y-3 mb-8">
        {howToGetIn.map((row) => (
          <div key={row.from} className="p-4 border border-[#E5E5E0] rounded-lg bg-white">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="text-xs font-semibold text-[#0D0D0D] bg-[#F3F4F6] px-2 py-0.5 rounded">{row.from}</span>
              <span className="text-xs text-[#9CA3AF]">→</span>
              <span className="text-xs font-semibold text-[#1E3A5F] bg-[#EFF6FF] px-2 py-0.5 rounded">{row.to}</span>
            </div>
            <p className="text-xs text-[#6B6B6B]">{row.where}</p>
          </div>
        ))}
      </div>

      <Divider label="Why BigLaw First?" />
      <div className="space-y-3 mb-8">
        {whyBigLawFirst.map((item) => (
          <div key={item.title} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#EFF6FF] flex items-center justify-center text-xs font-bold text-[#1E3A5F]">→</div>
            <div>
              <p className="font-semibold text-[#0D0D0D] text-sm">{item.title}</p>
              <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      <Divider label="Where In-House Lawyers Work" />
      <div className="space-y-4 mb-8">
        {whereTheyWork.map((s) => (
          <div key={s.sector} className="border border-[#E5E5E0] rounded-xl bg-white p-5">
            <div className="flex items-start justify-between gap-3 mb-2">
              <p className="font-bold text-[#0D0D0D] text-sm">{s.sector}</p>
            </div>
            <p className="text-xs text-[#9CA3AF] mb-2">{s.companies}</p>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <Divider label="What a Typical Week Looks Like" />
      <p className="text-sm text-[#6B6B6B] mb-4">Unlike BigLaw, where you specialize deeply in one practice area, in-house lawyers are generalists who cover whatever the company needs. A typical week might include:</p>
      <div className="space-y-2 mb-8">
        {typicalWeek.map((item, i) => (
          <div key={i} className="flex gap-3 p-3 border border-[#E5E5E0] rounded-lg bg-white">
            <span className="text-xs font-semibold text-[#1E3A5F] flex-shrink-0 mt-0.5">{i + 1}.</span>
            <p className="text-sm text-[#6B6B6B]">{item}</p>
          </div>
        ))}
      </div>

      <Divider label="Compensation by Company Type" />
      <div className="space-y-2 mb-12">
        {payTable.map((row) => (
          <div key={row.type} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white flex-wrap items-start">
            <span className="text-sm font-semibold text-[#0D0D0D] flex-1 min-w-[180px]">{row.type}</span>
            <span className="text-xs text-[#9CA3AF] w-28 flex-shrink-0 mt-0.5">{row.base} base</span>
            <span className="text-xs text-[#1E3A5F] font-medium">{row.total}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/careers/law-career/public-interest" className="inline-flex items-center gap-2 px-5 py-3 bg-[#1E3A5F] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer">
          ← Public Interest
        </Link>
        <Link href="/careers/law-career" className="inline-flex items-center gap-2 px-5 py-3 border border-[#E5E5E0] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:border-[#1E3A5F] transition-colors cursor-pointer">
          ← Back to The 5 Paths
        </Link>
      </div>
    </div>
  );
}
