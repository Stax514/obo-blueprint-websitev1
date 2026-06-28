import Link from "next/link";
import { ArrowRight, CheckCircle2, HelpCircle } from "lucide-react";

const whatIDo = [
  { title: "Build Financial Models", desc: "Analysts build LBO models, DCF analyses, and comparable company analyses to value businesses and advise on transactions." },
  { title: "Execute M&A Deals", desc: "You'll work on mergers, acquisitions, and divestitures — building deal books, running process timelines, and supporting senior bankers in client meetings." },
  { title: "Run Capital Markets Transactions", desc: "Equity (IPOs, follow-ons) and debt (bond offerings, leveraged finance) — IB analysts help companies raise capital from public markets." },
  { title: "Build Pitch Books", desc: "Every client meeting starts with a deck. Analysts build the models and slides that senior bankers use to win mandates and advise clients." },
  { title: "Cover Specific Industries", desc: "IB is organized into coverage groups — TMT, Healthcare, FIG, Energy, Real Estate, LATAM, and more. Your group shapes the deals you work on." },
  { title: "Exit to PE, HF, or MBA", desc: "After 2–3 years, most analysts exit to private equity, hedge funds, corporate development, or top MBA programs. The IB brand opens every door." },
];

const verticals = [
  { name: "Bulge Bracket Banks (GS, JPM, MS, BofA, Citi, Barclays)", desc: "The highest prestige, highest pay, most competitive recruiting. Goldman Sachs, JPMorgan, and Morgan Stanley are the top three. These are the firms that recruit at a short list of target schools." },
  { name: "Elite Boutiques (Lazard, Evercore, Centerview, PJT, Moelis)", desc: "Smaller firms that do exclusively advisory — no commercial banking, no trading. Often pay as well as or more than bulge brackets. Fewer seats, extremely competitive." },
  { name: "Middle Market Banks (Jefferies, Baird, Houlihan Lokey, William Blair)", desc: "A notch below elite boutiques. More accessible from semi-target schools. Strong deal flow and good exit opportunities. A legitimate stepping stone to top firms." },
  { name: "Big 4 Financial Advisory (Deloitte, PwC, EY, KPMG)", desc: "Transaction advisory, valuation, and restructuring. Not traditional IB but builds transferable financial skills and is more accessible from non-target schools." },
  { name: "Corporate Finance / Treasury", desc: "In-house finance roles at corporations. FP&A, treasury, and corporate development. Less prestigious than IB but builds real business finance skills and can lead to IB laterals." },
  { name: "Coverage Groups (TMT, Healthcare, FIG, Energy, LATAM)", desc: "Within IB, you'll be placed in a coverage group by industry. Knowing which group you're targeting — and why — is a key part of the interview. Generic 'I love finance' answers don't work." },
];

const insights = [
  { headline: "IB is the most school-dependent career we studied.", body: "Every analyst in our research attended a school with a recognized finance reputation — Harvard, Wharton, Cornell, Berkeley Haas, NYU Stern, USC. Unlike tech or consulting, banks recruit on-campus at a short list of schools. If your school isn't on that list, you need a different entry point." },
  { headline: "But semi-target and even non-target students do break in.", body: "Georgetown Walsh (not even a business school), USC, and University of Georgia all appeared in our dataset. Every one of those students used at least one of: a diversity program, a boutique IB internship first, or aggressive alumni network outreach. The formula exists — it just requires running the full playbook." },
  { headline: "Diversity programs are direct pipelines, not side doors.", body: "Brandon Robinson (Michigan Ross) and Rhema Onyia (Cornell) both got into JPMorgan through the Advancing Black Pathways Fellowship — directly into Corporate & Investment Banking. These programs exist at every bulge bracket and exist specifically to give underrepresented students a direct path in." },
  { headline: "The boutique-first route is real and documented.", body: "Zoe Zhao went Georgetown → UBS Investment Banking → JPMorgan. She explicitly cited the Georgetown alumni network as what made it possible. Getting any IB internship — even at a smaller firm — opens the door to the big banks later." },
  { headline: "Vertical matters. 'I want to do IB' is not enough.", body: "Mateo Graziosi targeted the LATAM group at JPMorgan — his background aligned with that focus and he got in. Fiona Popescu landed ECM Healthcare at JPMorgan. Specificity is the differentiator in IB recruiting. Know your group and have a real reason for it." },
];

const selfCheck = [
  "Are you prepared to maintain a 3.7+ GPA? IB has formal GPA screens that consulting and tech do not.",
  "Are you genuinely interested in financial markets — M&A, capital markets, valuations — not just the salary?",
  "Can you handle 80–100 hour weeks as an analyst? IB is the most demanding analyst role in finance.",
  "Are you enrolled at or targeting a school with IB recruiting presence?",
  "Are you prepared to do 2–3 years before the major exit opportunities open up?",
  "Do you want to work on large-scale transactions — M&A deals, IPOs, leveraged buyouts?",
  "Are you willing to build technical skills in Excel modeling, financial statement analysis, and valuation?",
  "Do you want to eventually work in private equity, hedge funds, or corporate strategy — and see IB as the path there?",
];

const sections = [
  { href: "/careers/finance/roadmap", label: "Year-by-Year Roadmap", desc: "Freshman through senior year. When to apply, what to build, and how the recruiting timeline actually works.", num: "01" },
  { href: "/careers/finance/programs", label: "Diversity Programs", desc: "ABP, Goldman Freshman Programs, Morgan Stanley Sophomore IB, and every early program worth applying to.", num: "02" },
  { href: "/careers/finance/clubs", label: "Clubs & Experiences", desc: "IB club, finance club, case competitions, and the credentials that show up on IB analyst profiles.", num: "03" },
  { href: "/careers/finance/interviews", label: "Technical Interview Guide", desc: "LBO, DCF, comparable company analysis, accounting questions, and behavioral prep — the full picture.", num: "04" },
  { href: "/careers/finance/resources", label: "Resources", desc: "Templates, platforms, and reading for your IB recruiting journey.", num: "05" },
];

export default function FinancePage() {
  return (
    <div className="bg-[#FAFAF7]">
      {/* Hero */}
      <div className="bg-[#0D0D0D] text-[#FAFAF7] px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Link href="/careers" className="text-xs font-semibold text-[#6B6B6B] hover:text-[#FAFAF7] transition-colors">← All careers</Link>
          <div className="mt-6 mb-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FAFAF7] bg-[#7C2D12] px-2 py-0.5 rounded-full">● Investment Banking</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 leading-tight" style={{ fontFamily: "'Libre Bodoni', serif" }}>
            The complete guide to<br />
            <span className="text-[#F4A825] italic">breaking into IB.</span>
          </h1>
          <p className="text-[#A0A0A0] text-lg max-w-2xl mb-8">
            Goldman Sachs, JPMorgan, and Morgan Stanley. Here's what it actually takes — from freshman year to your first bulge bracket offer.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/careers/finance/roadmap" className="inline-flex items-center gap-2 px-5 py-3 bg-[#F4A825] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:bg-white transition-colors cursor-pointer">
              Start with the roadmap <ArrowRight size={14} />
            </Link>
            <Link href="/careers/finance/interviews" className="inline-flex items-center gap-2 px-5 py-3 border border-[#3A3A3A] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:border-[#F4A825] transition-colors cursor-pointer">
              Jump to technical interviews
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* What is IB */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>What is Investment Banking?</h2>
          <p className="text-[#6B6B6B] leading-relaxed mb-4">
            Investment bankers advise corporations, governments, and other institutions on major financial transactions — mergers and acquisitions, IPOs, bond offerings, and restructurings. You are hired to help your client make the most important financial decisions of their company's life.
          </p>
          <p className="text-[#6B6B6B] leading-relaxed mb-4">
            As an analyst, you are the foundation of the deal team. You build the financial models, create the pitch books, run the data, and support senior bankers through every stage of a transaction. The hours are long — 80–100 hours per week in active deal periods — but the training is unmatched.
          </p>
          <p className="text-[#6B6B6B] leading-relaxed">
            The IB brand follows you. Two to three years at Goldman Sachs, JPMorgan, or Morgan Stanley opens every door in finance — private equity, hedge funds, venture capital, corporate development, or an MBA at a top business school. It is one of the most valuable two-year investments you can make early in your career.
          </p>
        </section>

        {/* What analysts do */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>What analysts actually do</h2>
          <p className="text-sm text-[#6B6B6B] mb-6">Day-to-day life as a first-year IB analyst.</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {whatIDo.map((item) => (
              <div key={item.title} className="flex gap-3 p-4 border border-[#E5E5E0] rounded-xl bg-white">
                <CheckCircle2 size={15} className="text-[#7C2D12] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#0D0D0D] text-sm">{item.title}</p>
                  <p className="text-xs text-[#6B6B6B] mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Types of firms */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>Types of IB firms</h2>
          <p className="text-sm text-[#6B6B6B] mb-6">Finance isn't one thing. Here's how the landscape breaks down.</p>
          <div className="space-y-3">
            {verticals.map((v) => (
              <div key={v.name} className="p-4 border border-[#E5E5E0] rounded-xl bg-white">
                <p className="font-semibold text-[#0D0D0D] text-sm mb-1">{v.name}</p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What the data shows */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>What the data actually shows</h2>
          <p className="text-sm text-[#6B6B6B] mb-6">We studied 18 real LinkedIn profiles of analysts at Goldman Sachs, JPMorgan, and Morgan Stanley. Here's what we found.</p>
          <div className="space-y-4">
            {insights.map((item, i) => (
              <div key={i} className="bg-white border border-[#E5E5E0] rounded-xl p-5">
                <p className="font-bold text-[#0D0D0D] text-sm mb-2">{item.headline}</p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Self-assessment */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>Is IB right for you?</h2>
          <p className="text-sm text-[#6B6B6B] mb-6">Eight questions worth being honest about.</p>
          <div className="space-y-2">
            {selfCheck.map((q, i) => (
              <div key={i} className="flex gap-3 p-4 border border-[#E5E5E0] rounded-lg bg-white">
                <HelpCircle size={15} className="text-[#7C2D12] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-[#6B6B6B] leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats strip */}
        <section className="bg-[#0D0D0D] rounded-2xl p-8 mb-14 grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-2xl font-bold text-[#F4A825]">Aug–Oct</p>
            <p className="text-xs text-[#A0A0A0] mt-1">Junior year recruiting window</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#F4A825]">3.7+</p>
            <p className="text-xs text-[#A0A0A0] mt-1">GPA screen at most BB banks</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#F4A825]">2–3 yrs</p>
            <p className="text-xs text-[#A0A0A0] mt-1">Analyst program before PE/HF/MBA</p>
          </div>
        </section>

        {/* Guide sections */}
        <section>
          <h2 className="text-2xl font-bold text-[#0D0D0D] mb-6" style={{ fontFamily: "'Libre Bodoni', serif" }}>What's in this guide</h2>
          <div className="space-y-3">
            {sections.map((s) => (
              <Link key={s.href} href={s.href} className="flex items-center gap-5 p-5 border border-[#E5E5E0] rounded-xl bg-white hover:border-[#7C2D12] transition-colors group cursor-pointer">
                <span className="text-3xl font-bold text-[#0D0D0D]/8 flex-shrink-0">{s.num}</span>
                <div className="flex-1">
                  <p className="font-semibold text-[#0D0D0D] text-sm group-hover:text-[#7C2D12] transition-colors">{s.label}</p>
                  <p className="text-xs text-[#6B6B6B] mt-0.5">{s.desc}</p>
                </div>
                <ArrowRight size={16} className="text-[#9CA3AF] group-hover:text-[#7C2D12] transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
