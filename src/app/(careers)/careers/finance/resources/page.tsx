import Link from "next/link";
import { ExternalLink } from "lucide-react";

const templates = [
  {
    title: "IB Resume Template",
    desc: "Investment banking resume format with the right sections, bullet structure, and GPA/finance coursework placement.",
    href: "https://docs.google.com/document/d/1QAapl2egG76ipJ9Azwjfs5WeHug6GfrNQdCxUYS5A9Y/edit?usp=drive_link",
    color: "bg-[#7C2D12]",
    label: "Open template",
  },
  {
    title: "Cold Outreach & Networking Templates",
    desc: "Email and LinkedIn messages for reaching out to IB analysts, associates, and diversity program coordinators.",
    href: "https://docs.google.com/document/d/1VJBR_TZ4sQAnk47lE_P6rKRJ22-cgHuge8yWGR8jAzk/edit?usp=drive_link",
    color: "bg-[#059669]",
    label: "Open template",
  },
];

const tools = [
  { name: "Breaking Into Wall Street (BIWS)", desc: "Industry-standard financial modeling course. Covers three-statement modeling, DCF, LBO, and comps. The most commonly cited prep resource by IB analysts.", href: "https://breakingintowallstreet.com" },
  { name: "Wall Street Prep", desc: "Alternative to BIWS — same core curriculum. Many banks use WSP for their own internal analyst training, which tells you the quality level.", href: "https://www.wallstreetprep.com" },
  { name: "Mergers & Inquisitions", desc: "Free guide to IB recruiting, technical questions, and career paths. The best free resource on the internet for IB-specific prep.", href: "https://mergersandinquisitions.com" },
  { name: "Wall Street Oasis", desc: "Forums where IB analysts share interview questions, firm culture, and recruiting timelines. Essential for understanding what specific banks are currently asking.", href: "https://www.wallstreetoasis.com" },
  { name: "JPMorgan Advancing Black Pathways (ABP)", desc: "The documented pipeline from Michigan Ross and Cornell to JPMorgan CIB. Apply in the fall semester.", href: "https://careers.jpmorgan.com/us/en/students/programs" },
  { name: "Goldman Sachs Virtual Insight Series", desc: "Selected from 10,000+ applicants — this is a real credential and a documented path into the GS recruiting funnel.", href: "https://www.goldmansachs.com/careers/students/" },
  { name: "Morgan Stanley Sophomore IB Program", desc: "Morgan Stanley's structured early access program for sophomores interested in investment banking.", href: "https://www.morganstanley.com/people-opportunities/students-graduates" },
];

const reading = [
  { title: "Investment Banking", author: "Rosenbaum & Pearl", desc: "The definitive IB technical reference. Read the valuation chapters (DCF, comps, precedent transactions) before every interview." },
  { title: "The Buy Side", author: "Turney Duff", desc: "A firsthand account of life in finance — what the industry actually looks like from the inside." },
  { title: "Liar's Poker", author: "Michael Lewis", desc: "A classic account of Wall Street culture at Salomon Brothers. Gives context for how the industry thinks about itself and the people in it." },
  { title: "The Intelligent Investor", author: "Benjamin Graham", desc: "Foundational investment philosophy. Understanding value investing gives you the conceptual bedrock for understanding why valuation matters." },
];

export default function FinanceResourcesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-10">
        <Link href="/careers/finance" className="text-xs font-semibold text-[#6B7280] hover:text-[#7C2D12] transition-colors">← Investment Banking</Link>
        <span className="block text-xs font-semibold uppercase tracking-widest text-[#7C2D12] mt-4 mb-2">Resources</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          IB Templates & Tools.
        </h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed">
          Everything you need to apply, prep, and land your first investment banking offer.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-sm font-bold text-[#0D0D0D] uppercase tracking-widest mb-4">Templates</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {templates.map((t) => (
            <div key={t.title} className="border border-[#E5E5E0] rounded-xl p-5 bg-white flex flex-col gap-3">
              <div className={`w-8 h-8 rounded-lg ${t.color} flex items-center justify-center`}>
                <span className="text-white text-xs font-bold">T</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[#0D0D0D] text-sm mb-1">{t.title}</p>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">{t.desc}</p>
              </div>
              <a href={t.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7C2D12] hover:text-[#F4A825] transition-colors">
                {t.label} <ExternalLink size={11} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-sm font-bold text-[#0D0D0D] uppercase tracking-widest mb-4">Platforms & Programs</h2>
        <div className="space-y-3">
          {tools.map((tool) => (
            <div key={tool.name} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
              <div className="flex-1">
                <p className="font-semibold text-[#0D0D0D] text-sm">{tool.name}</p>
                <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{tool.desc}</p>
              </div>
              <a href={tool.href} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 text-[#6B6B6B] hover:text-[#7C2D12] transition-colors mt-0.5">
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-sm font-bold text-[#0D0D0D] uppercase tracking-widest mb-4">Reading List</h2>
        <div className="space-y-3">
          {reading.map((book) => (
            <div key={book.title} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#FFF7ED] flex items-center justify-center text-xs font-bold text-[#7C2D12]">B</div>
              <div>
                <p className="font-semibold text-[#0D0D0D] text-sm">{book.title}</p>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-[#9CA3AF] mb-1">{book.author}</p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">{book.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <Link href="/careers/finance/interviews" className="inline-flex items-center gap-2 px-5 py-3 bg-[#7C2D12] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer">
          ← Technical Interview Guide
        </Link>
      </div>
    </div>
  );
}
