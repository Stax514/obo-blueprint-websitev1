import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, Lightbulb } from "lucide-react";

function Callout({ type, children }: { type: "info" | "warn" | "tip"; children: React.ReactNode }) {
  const s = {
    info: { cls: "bg-[#FFF7ED] border-[#7C2D12]", Icon: CheckCircle2, color: "text-[#7C2D12]" },
    warn: { cls: "bg-[#FFFBEB] border-[#D97706]", Icon: AlertTriangle, color: "text-[#D97706]" },
    tip:  { cls: "bg-[#EFF6FF] border-[#1A1A2E]", Icon: Lightbulb,    color: "text-[#1A1A2E]" },
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

const technicals = [
  {
    topic: "Accounting & Financial Statements",
    questions: [
      { q: "Walk me through the three financial statements.", a: "Income statement (revenues → net income), balance sheet (assets = liabilities + equity), cash flow statement (operating, investing, financing). The key is how they connect: net income flows from the income statement to retained earnings on the balance sheet and to operating cash flow on the cash flow statement." },
      { q: "If depreciation increases by $10, what happens to the financial statements?", a: "Income statement: EBIT decreases by $10, taxes decrease by $4 (at 40% tax rate), net income decreases by $6. Balance sheet: PP&E decreases by $10, retained earnings decreases by $6. Cash flow: depreciation is added back in operating activities, so cash is unchanged. Net effect: net income down $6, cash unchanged." },
    ],
  },
  {
    topic: "Valuation",
    questions: [
      { q: "Walk me through a DCF.", a: "Project free cash flows for 5–10 years, calculate a terminal value (using Gordon Growth Model or exit multiple), discount all cash flows back to present using WACC. Sum gives enterprise value. Subtract net debt to get equity value. Divide by shares outstanding to get share price." },
      { q: "What are the three main valuation methodologies and when do you use each?", a: "DCF: intrinsic value based on future cash flows — most rigorous but most assumption-dependent. Comparable company analysis (comps): market-based — uses trading multiples of similar public companies. Precedent transactions: M&A-based — uses multiples from historical deals in the same sector, typically higher than comps due to control premium." },
      { q: "What is WACC and why do we use it?", a: "Weighted Average Cost of Capital — the blended required return of a company's debt and equity holders. Used as the discount rate in a DCF because it represents the opportunity cost of capital for that company." },
    ],
  },
  {
    topic: "M&A Concepts",
    questions: [
      { q: "Walk me through an LBO.", a: "A private equity firm acquires a company using significant debt (60–80% of the purchase price). The acquired company's cash flows service the debt over 4–7 years. At exit (IPO or sale), returns come from: debt paydown (equity grows), EBITDA growth, and multiple expansion. IRR is the key metric." },
      { q: "Is an acquisition accretive or dilutive?", a: "Accretive if the deal increases the acquirer's EPS; dilutive if it decreases EPS. An acquisition is accretive if the target's earnings yield (earnings / purchase price) exceeds the acquirer's P/E ratio. For stock deals: accretive if the target's P/E < acquirer's P/E." },
      { q: "What is a control premium and why does it exist?", a: "The premium an acquirer pays above a company's public market price to gain control. Typically 20–40%. It exists because controlling shareholders can make strategic decisions, redirect cash flows, and realize synergies that minority shareholders cannot." },
    ],
  },
  {
    topic: "Markets & Current Events",
    questions: [
      { q: "Where is the 10-year Treasury yield today and what does it mean for deals?", a: "Know the current level before every interview. Higher yields increase WACC, reducing DCF values and making deals more expensive to finance. Rising rates generally compress valuations and slow M&A activity." },
      { q: "What is a recent deal you found interesting and why?", a: "Pick a real deal — a merger, an IPO, a buyout — from the past 6 months. Know the rationale, the deal structure, the price, and your view on whether it was a good deal. This is not a trick question — they want to see that you actually read about M&A." },
    ],
  },
];

const behavioral = [
  { q: "Why investment banking?", tip: "Be specific and honest. Name a financial concept, a deal, or an experience that sparked your interest. 'I want a broad foundation' is not an answer — every banker knows it." },
  { q: "Why this bank specifically?", tip: "Each bank has a culture and a reputation. Goldman is known for advisory excellence and prestige. JPMorgan is known for breadth and global reach. Morgan Stanley is known for technology IB and equities. Pick something real and firm-specific." },
  { q: "Why this coverage group?", tip: "You must have an answer. 'I'm open to any group' signals unpreparedness. Name a group, explain your interest in the industry, and name a deal that reflects why it matters to you." },
  { q: "Tell me about a time you worked on a team under pressure.", tip: "Use STAR format. Focus on what you specifically contributed, how you handled the pressure, and what the outcome was. IB hours are brutal — show you can function in a high-stakes environment." },
  { q: "Walk me through your resume.", tip: "Chronological or reverse-chronological — your choice. Be prepared to explain every line. The most important question is always a follow-up: 'Tell me more about what you actually did there.'" },
  { q: "What is your biggest weakness?", tip: "Name a real one. Say what you've actively done to improve. The answer that says 'I work too hard' ends the conversation." },
];

export default function FinanceInterviewsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-10">
        <Link href="/careers/finance" className="text-xs font-semibold text-[#6B7280] hover:text-[#7C2D12] transition-colors">← Investment Banking</Link>
        <span className="block text-xs font-semibold uppercase tracking-widest text-[#7C2D12] mt-4 mb-2">Technical Interviews</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          IB Interview Guide.
        </h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
          Technical questions, behavioral prep, and how to walk through the valuation concepts every IB interviewer will ask.
        </p>
        <Callout type="warn">
          IB technical interviews are specific and tested cold. You need to be able to walk through a DCF, explain the three financial statements and how they connect, and describe an LBO from memory — without notes, without hesitation. Prepare with purpose.
        </Callout>
      </div>

      <Divider label="How IB Interviews Are Structured" />
      <div className="space-y-3 mb-6">
        {[
          { label: "First Round", desc: "Typically 30–45 minutes. Mix of technical questions (accounting, valuation, M&A concepts) and behavioral questions. Often conducted by analysts or associates. Technical rigor is high — they are testing whether you've actually prepared." },
          { label: "Superday / Final Round", desc: "Multiple back-to-back interviews in a single day with analysts, associates, VPs, and sometimes MDs. Each interviewer evaluates a different dimension. The technical bar stays consistent throughout. You need to perform at the same level in every session." },
          { label: "Group-Specific Interviews", desc: "If you've expressed interest in a specific coverage group (TMT, Healthcare, FIG, LATAM), interviewers will ask about deals and trends in that space. Know 2–3 recent transactions in your target vertical." },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#F5F5F0] border border-[#E5E5E0] flex items-center justify-center text-xs font-bold text-[#6B6B6B]">{i + 1}</div>
            <div>
              <p className="font-semibold text-[#0D0D0D] text-sm">{item.label}</p>
              <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Divider label="Technical Questions — The Core Topics" />
      <p className="text-sm text-[#6B6B6B] mb-6">These are the questions asked in nearly every IB interview. Know each one cold before your first round.</p>

      <div className="space-y-6">
        {technicals.map((section) => (
          <div key={section.topic}>
            <p className="text-xs font-bold uppercase tracking-widest text-[#7C2D12] mb-3">{section.topic}</p>
            <div className="space-y-3">
              {section.questions.map((item, i) => (
                <div key={i} className="border border-[#E5E5E0] rounded-xl p-5 bg-white">
                  <div className="bg-[#0F172A] text-white rounded-lg px-4 py-3 mb-4">
                    <p className="text-xs text-[#6B6B6B] mb-1">Interview question</p>
                    <p className="text-sm font-medium">&ldquo;{item.q}&rdquo;</p>
                  </div>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Callout type="tip">
        Read the Wall Street Journal and Financial Times deal sections daily for 2 months before recruiting. You should be able to speak to 3–4 recent M&A transactions across your target vertical without hesitation. Interviewers notice when candidates are actually following markets.
      </Callout>

      <Divider label="How to Prepare" />
      <div className="space-y-3">
        {[
          { title: "Breaking Into Wall Street (BIWS) or Wall Street Prep", desc: "The two industry-standard financial modeling courses. Both cover accounting, DCF, LBO, and comps. Pick one and complete it fully before recruiting season." },
          { title: "Investment Banking by Rosenbaum & Pearl", desc: "The definitive IB technical reference book. Read the valuation chapters — DCF, comps, precedent transactions — and keep it as a reference throughout prep." },
          { title: "Mergers & Inquisitions / Wall Street Oasis", desc: "Free guides, interview prep articles, and forums where people share real IB interview questions. Use these to supplement your core prep and to understand what firms are currently asking." },
          { title: "Build a real financial model", desc: "Pick a public company, pull their 10-K, and build a three-statement model and DCF from scratch. Show it in interviews. Saying 'I built a model for [Company]' is more credible than 'I studied valuation.'" },
          { title: "Mock interview with someone who has done IB recruiting", desc: "Find an upperclassman, an alumni, or a peer who has been through IB recruiting. Do full mock technicals under time pressure. The difference between knowing concepts and answering them fluently under pressure is significant." },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#7C2D12] flex items-center justify-center text-xs font-bold text-white">{i + 1}</div>
            <div>
              <p className="font-semibold text-[#0D0D0D] text-sm">{item.title}</p>
              <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Divider label="Behavioral Questions" />
      <p className="text-sm text-[#6B6B6B] mb-6">IB behavioral interviews are as important as technical. Prepare each answer until it sounds natural — not memorized.</p>
      <div className="space-y-3">
        {behavioral.map((item, i) => (
          <div key={i} className="border border-[#E5E5E0] rounded-xl p-5 bg-white">
            <div className="bg-[#0F172A] text-white rounded-lg px-4 py-3 mb-4">
              <p className="text-xs text-[#6B6B6B] mb-1">Interview question</p>
              <p className="text-sm font-medium">&ldquo;{item.q}&rdquo;</p>
            </div>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">{item.tip}</p>
          </div>
        ))}
      </div>

      <Callout type="warn">
        The biggest mistake in IB interviews is being generic. Generic "why IB" answers, generic deal commentary, generic weakness answers. Everything specific to you — your actual interest in a particular vertical, a real deal you followed, a model you built — is what makes you memorable. Be specific.
      </Callout>

      <div className="mt-12 flex flex-col sm:flex-row gap-3">
        <Link href="/careers/finance/clubs" className="inline-flex items-center gap-2 px-5 py-3 bg-[#7C2D12] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer">
          ← Clubs & Activities
        </Link>
        <Link href="/careers/finance/resources" className="inline-flex items-center gap-2 px-5 py-3 border border-[#E5E5E0] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:border-[#7C2D12] transition-colors cursor-pointer">
          Resources <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
