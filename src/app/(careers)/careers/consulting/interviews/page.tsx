import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, Lightbulb } from "lucide-react";

function Callout({ type, children }: { type: "info" | "warn" | "tip"; children: React.ReactNode }) {
  const s = {
    info: { cls: "bg-[#F0FDF4] border-[#1B4332]", Icon: CheckCircle2, color: "text-[#1B4332]" },
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
      <h2 className="text-xl font-extrabold text-[#1B4332] whitespace-nowrap">{label}</h2>
      <div className="h-px flex-1 bg-[#E2E8F0]" />
    </div>
  );
}

const caseSteps = [
  { label: "Clarify the question.", desc: "Restate the problem in your own words and ask clarifying questions before you structure anything. What does success look like for the client? What's the timeline? Are there constraints?", tips: ["'Just to make sure I understand — we're trying to...'", "Never jump straight to a framework. Clarifying shows you're methodical."] },
  { label: "Structure the problem.", desc: "Build a framework — a logical, mutually exclusive breakdown of the key areas to investigate. State it out loud before you dive in. The interviewer should be able to follow your logic.", tips: ["Issue trees, profitability frameworks (Revenue / Cost), market sizing structures", "Say: 'I'd like to break this into three areas: [X], [Y], [Z]'", "Don't copy-paste a memorized framework — adapt it to the specific problem"] },
  { label: "Prioritize and hypothesize.", desc: "Tell the interviewer which area you want to start with and why. State a hypothesis — your early best guess at the answer — and then test it with data.", tips: ["'I'd like to start with revenue since the cost structure seems stable'", "A hypothesis-driven approach is how real consultants work. Show that instinct."] },
  { label: "Work through the analysis.", desc: "Ask for data, do the math clearly, and narrate your thinking. If you're doing mental math, show your work. If a number seems off, call it out.", tips: ["Practice mental math: percentages, ratios, back-of-the-envelope estimates", "Round numbers to make math cleaner — then note that you've rounded", "If you get stuck, say what you know: 'I know I need to understand the margin here — let me think through that'"] },
  { label: "Synthesize and recommend.", desc: "End with a clear, top-line recommendation. State it first, then support it. Don't bury the answer at the end of a long summary.", tips: ["'Based on the analysis, I'd recommend...'", "Address risks and next steps briefly — shows executive-level thinking"] },
];

const peiStories = [
  { label: "Leadership story", desc: "A time you led a group through a difficult situation. Focus on how you influenced others, the obstacles you faced, and the specific outcome. McKinsey explicitly tests this in the PEI." },
  { label: "Personal impact story", desc: "A time you drove a meaningful result largely through your own initiative. The emphasis is on what you personally did — not the team, not the process." },
  { label: "Entrepreneurial drive story", desc: "A time you started something from scratch or pursued a goal despite not having all the resources or support you needed. Starting a club, launching a project, solving a problem nobody asked you to solve." },
];

const behavioral = [
  { q: "Walk me through your resume.", tip: "Structure: education, most relevant experiences in reverse order, why consulting. Keep it under 2 minutes. End with why this firm specifically — not consulting in general." },
  { q: "Why consulting?", tip: "Be specific and honest. Don't say 'I want a broad foundation' without backing it with a real story. Name a problem you encountered that made you think 'I need the structured thinking consulting trains.'" },
  { q: "Why McKinsey / BCG / Bain specifically?", tip: "This must be firm-specific. Each firm has a culture, a practice emphasis, and a reputation. BCG is known for intellectual rigor and analytics. Bain is known for results orientation and private equity work. McKinsey is known for breadth and prestige. Pick something real." },
  { q: "Tell me about a time you led a team through conflict.", tip: "Use STAR. Focus on how you listened, how you aligned people, and what the outcome was. No stories where you were simply right and everyone else came around." },
  { q: "What's your greatest weakness?", tip: "Name a real one. Then describe what you've actively done to address it. The answer that says 'I work too hard' is not a real answer and experienced interviewers will notice." },
];

export default function ConsultingInterviewsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-10">
        <Link href="/careers/consulting" className="text-xs font-semibold text-[#6B7280] hover:text-[#1B4332] transition-colors">← Consulting</Link>
        <span className="block text-xs font-semibold uppercase tracking-widest text-[#C45B3D] mt-4 mb-2">Case Interviews</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          Case Interview Guide.
        </h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
          How case interviews work, how to prepare, and what it takes to get through MBB recruiting.
        </p>
        <Callout type="warn">
          The case interview is the barrier between you and an MBB offer. It cannot be faked and it cannot be crammed. The people who pass have done 50–100+ cases over several months. Start early.
        </Callout>
      </div>

      <Divider label="How MBB Recruiting Works" />
      <p className="text-sm text-[#6B6B6B] leading-relaxed mb-5">Understanding the structure before you start preparing makes everything else more efficient.</p>
      <div className="space-y-3">
        {[
          { label: "Round 1", desc: "Typically 2 case interviews. Often includes a Personal Experience Interview (PEI) plus a case. Focus on structured problem decomposition and clear communication." },
          { label: "Round 2 (Final)", desc: "3–4 case interviews in a single day with partners and senior leaders. Higher stakes, more ambiguous problems, deeper follow-up questions. Cases at this round often have no clean answer." },
          { label: "Personal Experience Interview (PEI)", desc: "McKinsey's behavioral component. Tests three specific dimensions: leadership, personal impact, and entrepreneurial drive. Each firm has its version — BCG and Bain use similar behavioral questions with different framing." },
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

      <Divider label="How to Solve a Case" />
      <p className="text-sm text-[#6B6B6B] mb-6">Every case interview follows a consistent structure. Internalize this until it's automatic — then you can focus on the actual problem instead of the format.</p>
      <div className="space-y-3">
        {caseSteps.map((s, i) => (
          <div key={i} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1B4332] flex items-center justify-center text-xs font-bold text-white">{i + 1}</div>
            <div>
              <p className="font-semibold text-[#0D0D0D] text-sm">{s.label}</p>
              <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{s.desc}</p>
              {s.tips && (
                <ul className="mt-2 space-y-1">
                  {s.tips.map((t, ti) => (
                    <li key={ti} className="flex gap-2 text-xs text-[#9CA3AF]"><span>→</span>{t}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      <Divider label="How to Practice" />
      <div className="space-y-4">
        <div className="bg-[#F5F5F0] border border-[#E5E5E0] rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF] mb-3">Target: 50–100+ cases</p>
          <p className="text-sm text-[#6B6B6B] leading-relaxed mb-3">50 cases minimum to be competitive. 100+ for top candidates at McKinsey and BCG. Quality over quantity — get real feedback on every case, not just reps.</p>
          <p className="text-sm text-[#6B6B6B] leading-relaxed">Lydia Melka-White's preparation: 6 weeks of intensive casing using the Management Consulted platform, starting with video examples to build instinct, then live partner practice. That was built on a foundation started sophomore year.</p>
        </div>
        <div className="bg-[#F5F5F0] border border-[#E5E5E0] rounded-xl p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF] mb-3">Resources</p>
          <ul className="space-y-2 text-sm text-[#6B6B6B]">
            <li className="flex gap-2"><span>→</span><span><strong className="text-[#0D0D0D]">Management Consulted</strong> — filter by firm and round; video examples are the best way to build instinct before live practice</span></li>
            <li className="flex gap-2"><span>→</span><span><strong className="text-[#0D0D0D]">Free casebooks</strong> — Wharton, Ross, Darden, and other top MBA programs publish their case books publicly. Hundreds of cases, free.</span></li>
            <li className="flex gap-2"><span>→</span><span><strong className="text-[#0D0D0D]">Casing partner</strong> — find someone at a similar level and commit to weekly sessions. The relationship compounds. Lydia found her partner at a company exploration weekender.</span></li>
            <li className="flex gap-2"><span>→</span><span><strong className="text-[#0D0D0D]">Practice mental math daily</strong> — percentages, ratios, market sizing. 10 minutes a day for 3 months beats a weekend cram every time.</span></li>
          </ul>
        </div>
      </div>
      <Callout type="tip">
        Watch at least 10 cases on video before you do your first live case. Seeing what good looks like — the pacing, the language, the structure — accelerates everything that comes after.
      </Callout>

      <Divider label="Personal Experience Interview (PEI)" />
      <p className="text-sm text-[#6B6B6B] mb-6">The PEI is not a formality. McKinsey explicitly evaluates leadership, personal impact, and entrepreneurial drive as separate dimensions. Prepare 3–4 stories and know them cold.</p>
      <div className="space-y-3 mb-6">
        {peiStories.map((s, i) => (
          <div key={i} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1B4332] flex items-center justify-center text-xs font-bold text-white">{i + 1}</div>
            <div>
              <p className="font-semibold text-[#0D0D0D] text-sm">{s.label}</p>
              <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <Callout type="info">
        Each story should be under 2 minutes. Specific, concrete, and compelling. Practice telling them until they sound natural — not memorized. The PEI interviewer will push back and ask follow-up questions. Know your stories deeply enough to go off-script.
      </Callout>

      <Divider label="Behavioral Questions" />
      <p className="text-sm text-[#6B6B6B] mb-6">Every MBB interview includes behavioral questions beyond the PEI. Prepare for these with the same rigor as the case.</p>
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
        The biggest mistake in consulting interviews is being generic. Generic case answers, generic "why consulting" answers, generic PEI stories. Everything that's specific to you — your actual experience, your actual reasoning, your actual story — is what makes you memorable. Be specific.
      </Callout>

      <div className="mt-12 flex flex-col sm:flex-row gap-3">
        <Link href="/careers/consulting/roadmap" className="inline-flex items-center gap-2 px-5 py-3 bg-[#1B4332] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer">
          ← Back to Roadmap
        </Link>
        <Link href="/careers/resources" className="inline-flex items-center gap-2 px-5 py-3 border border-[#E5E5E0] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:border-[#1B4332] transition-colors cursor-pointer">
          Resume & Templates <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
