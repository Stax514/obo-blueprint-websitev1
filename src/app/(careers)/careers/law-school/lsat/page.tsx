import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle, ExternalLink } from "lucide-react";

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

const scoreTargets = [
  { school: "Yale Law School (YLS)", target: "174+", range: "172–180", note: "Median is 174. A 172 is competitive; below 170 requires an extraordinary everything else." },
  { school: "Harvard Law School (HLS)", target: "173+", range: "170–180", note: "Median is 174. Applications with 170+ are reviewed on full file." },
  { school: "Columbia Law School (CLS)", target: "172+", range: "168–180", note: "25th percentile is 169. A 172+ puts you squarely in the competitive range." },
  { school: "Stanford Law School (SLS)", target: "173+", range: "171–180", note: "Median is 174. Similar to HLS and YLS." },
  { school: "NYU, Penn, Michigan, Virginia, Chicago", target: "168+", range: "165–180", note: "T10 range. A 168+ is competitive with a strong GPA and application." },
  { school: "Georgetown, Cornell, Duke, Northwestern", target: "165+", range: "162–180", note: "T14 floor. A 165+ with a strong GPA and compelling story gets serious review." },
];

const sections = [
  { name: "Logical Reasoning (LR)", count: "Two 25-question sections", what: "Each question presents a short argument followed by a question about it: strengthen, weaken, identify the flaw, draw an inference, identify an assumption. This is the core skill of legal analysis.", prep: "LR is learnable by pattern. Learn the question types first, then practice identifying argument structures. 7Sage is the best platform for this. Do every official LR question ever released." },
  { name: "Analytical Reasoning (AR) — Logic Games", count: "One 23-question section", what: "Ordering, grouping, and matching puzzles with rule sets. Set up diagrams. Apply deductions. Answer questions quickly.", prep: "Most students find logic games the hardest section initially — and the most improvable with practice. Learn the game types (linear, grouping, hybrid). Drill until each type is automatic. PowerScore Logic Games Bible is excellent." },
  { name: "Reading Comprehension (RC)", count: "One 27-question section (includes a comparative passage)", what: "Four passages — one science, one law/social science, one humanities, one comparative (two shorter passages). Questions test main point, inference, author's tone, structure, and detail.", prep: "RC improves more slowly than LR or AR, but it's trainable. Practice reading slowly enough to understand argument structure, not just words. Identify what the author is arguing, not just what the passage says." },
];

const resources = [
  {
    name: "Khan Academy LSAT (Free)",
    desc: "Official LSAC partnership. Adaptive learning, full practice tests, and detailed explanations. The most comprehensive free LSAT resource available — genuinely as good as many paid programs.",
    why: "If you can only use one resource, use this one. It adapts to your weaknesses, tracks your progress, and uses official LSAT questions. Free, forever.",
    href: "https://www.khanacademy.org/prep/lsat",
    cost: "Free",
  },
  {
    name: "7Sage LSAT",
    desc: "The most widely recommended LSAT prep platform by law school students and admissions consultants. Detailed video explanations, logic game explanations, and a massive question bank.",
    why: "7Sage's explanations are unusually clear. The logic games curriculum is particularly strong. Students in our research who scored in the 170s consistently named 7Sage as their primary prep resource.",
    href: "https://7sage.com/",
    cost: "Paid ($150–$400 depending on plan)",
  },
  {
    name: "PowerScore LSAT Bibles (LR, RC, LG)",
    desc: "Three physical books covering logical reasoning, reading comprehension, and logic games. The most thorough textbook-style coverage of LSAT content available.",
    why: "Use the PowerScore Bibles to learn the foundational concepts, then move to official practice questions. The Logic Games Bible in particular is considered essential by many top scorers.",
    href: "https://www.powerscore.com/lsat/publications/",
    cost: "~$30–$45 per book",
  },
  {
    name: "Advantage Testing Foundation (Free for qualifying students)",
    desc: "Free or subsidized professional LSAT tutoring from Advantage Testing — the most respected private LSAT prep firm. For underrepresented students who demonstrate financial need.",
    why: "Private tutoring can cost thousands of dollars. This foundation provides the same quality of preparation to students who can't pay for it. Students in our research used it as part of their path to Harvard Law.",
    href: "https://atfoundation.org/",
    cost: "Free (need-based)",
  },
  {
    name: "Official LSAC Practice Tests",
    desc: "Every LSAT ever released — 80+ full, official tests. The only way to reliably prepare is on official tests. Third-party practice tests are structurally different and will give you misleading scores.",
    why: "No substitute. Do every official test under timed, full-test conditions. Track your performance by section and by question type. Review every missed question — understanding why you got something wrong is more important than the volume you complete.",
    href: "https://www.lsac.org/lsat/lsat-prep/official-lsat-prep",
    cost: "$1–$30 per test (included in many prep programs)",
  },
];

const strategy = [
  { title: "Start 4–6 months before your target test date.", body: "Diagnostic → content study → untimed practice → timed practice → full tests. Cramming for the LSAT doesn't work. The test measures reasoning skills, and those develop over months, not weeks." },
  { title: "Take a diagnostic test first.", body: "Before starting any prep, take a full official LSAT under timed conditions. Your diagnostic score tells you where you are, which sections need the most work, and how much improvement you'll need. Be honest with yourself." },
  { title: "Do untimed before timed.", body: "Learn the question types and approaches before adding time pressure. Going fast before you go accurately just ingrains bad habits. Master the concepts, then drill for speed." },
  { title: "Track your errors by question type.", body: "Don't just track total score. Track which LR question types you miss (assumption vs. strengthen vs. weaken vs. inference). Track which logic game types slow you down. Direct your practice at your specific weaknesses, not random repetition." },
  { title: "Take at least 20 full timed practice tests.", body: "Full tests, not individual sections. Under real testing conditions — no phone, no breaks beyond the scheduled 10-minute break between sections 3 and 4. Simulate test day as closely as possible." },
  { title: "Plan for a retake before you take the test.", body: "Law schools take your highest score. Most serious T14 applicants take the LSAT twice. Take it junior spring, see your score, and retake it over the summer if needed before applications open in the fall. There is no penalty for retaking." },
];

export default function LawSchoolLSATPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-10">
        <Link href="/careers/law-school" className="text-xs font-semibold text-[#6B7280] hover:text-[#1E3A5F] transition-colors">← Law School</Link>
        <span className="block text-xs font-semibold uppercase tracking-widest text-[#1E3A5F] mt-4 mb-2">LSAT Prep</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          LSAT Prep Guide.
        </h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-4">
          The most important number in your law school application. What to target, how to study, and why a retake is almost always the right move.
        </p>
        <Callout type="info">
          A 175 LSAT from Hunter College (CUNY) will advance your application further than a 160 LSAT from Stanford. The LSAT is the great equalizer in law school admissions — and unlike GPA, it's one number you can improve with months of intentional practice. Start early.
        </Callout>
      </div>

      {/* Score targets */}
      <section className="mb-14">
        <h2 className="text-xl font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>Score Targets by School</h2>
        <p className="text-sm text-[#6B6B6B] mb-6">These are the ranges where your score becomes competitive. Below these numbers, no other credential fully compensates.</p>
        <div className="space-y-3">
          {scoreTargets.map((s) => (
            <div key={s.school} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
              <div className="flex-shrink-0 w-14 text-center">
                <p className="text-lg font-bold text-[#1E3A5F]">{s.target}</p>
                <p className="text-[10px] text-[#9CA3AF]">target</p>
              </div>
              <div>
                <p className="font-semibold text-[#0D0D0D] text-sm">{s.school}</p>
                <p className="text-xs text-[#9CA3AF] mb-1">Middle 50%: {s.range}</p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">{s.note}</p>
              </div>
            </div>
          ))}
        </div>
        <Callout type="warn">
          These targets are not guarantees. A 175 does not guarantee YLS admission. A 168 does not preclude it. But below these numbers, your application faces significant headwinds that no other credential reliably overcomes.
        </Callout>
      </section>

      {/* What's on the test */}
      <section className="mb-14">
        <h2 className="text-xl font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>What's on the LSAT</h2>
        <p className="text-sm text-[#6B6B6B] mb-6">Three section types, each testing a distinct skill.</p>
        <div className="space-y-4">
          {sections.map((s) => (
            <div key={s.name} className="border border-[#E5E5E0] rounded-xl bg-white p-5">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-bold text-[#0D0D0D] text-base">{s.name}</h3>
                <span className="text-[10px] font-semibold text-[#6B7280] bg-[#F3F4F6] px-2 py-0.5 rounded flex-shrink-0">{s.count}</span>
              </div>
              <p className="text-sm text-[#6B6B6B] leading-relaxed mb-2">{s.what}</p>
              <div className="bg-[#FAFAF7] border border-[#E5E5E0] rounded-lg p-3">
                <p className="text-xs font-semibold text-[#6B7280] mb-1">How to prep:</p>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">{s.prep}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Study strategy */}
      <section className="mb-14">
        <h2 className="text-xl font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>How to Study</h2>
        <p className="text-sm text-[#6B6B6B] mb-6">Six principles that separate real score improvements from wasted practice hours.</p>
        <div className="space-y-3">
          {strategy.map((item, i) => (
            <div key={i} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1E3A5F] flex items-center justify-center text-xs font-bold text-white">{i + 1}</div>
              <div>
                <p className="font-semibold text-[#0D0D0D] text-sm">{item.title}</p>
                <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prep resources */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>Prep Resources</h2>
        <p className="text-sm text-[#6B6B6B] mb-6">The platforms and books worth your time.</p>
        <div className="space-y-4">
          {resources.map((r) => (
            <div key={r.name} className="border border-[#E5E5E0] rounded-xl bg-white p-5">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-bold text-[#0D0D0D] text-base">{r.name}</h3>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-[10px] font-semibold text-[#6B7280] bg-[#F3F4F6] px-2 py-0.5 rounded">{r.cost}</span>
                  <a href={r.href} target="_blank" rel="noopener noreferrer" className="text-[#1E3A5F] hover:text-[#F4A825] transition-colors">
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
              <p className="text-sm text-[#6B6B6B] leading-relaxed mb-2">{r.desc}</p>
              <p className="text-sm text-[#1E3A5F] font-medium leading-relaxed">{r.why}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-[#0D0D0D] rounded-2xl p-8 mb-12 grid grid-cols-3 gap-6 text-center">
        <div>
          <p className="text-2xl font-bold text-[#F4A825]">172+</p>
          <p className="text-xs text-[#A0A0A0] mt-1">Target for YLS / HLS / Columbia</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-[#F4A825]">20+</p>
          <p className="text-xs text-[#A0A0A0] mt-1">Full timed practice tests before test day</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-[#F4A825]">4–6 mo</p>
          <p className="text-xs text-[#A0A0A0] mt-1">Minimum focused prep timeline</p>
        </div>
      </section>

      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Link href="/careers/law-school/clubs" className="inline-flex items-center gap-2 px-5 py-3 bg-[#1E3A5F] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer">
          ← Clubs & Activities
        </Link>
        <Link href="/careers/law-school/resources" className="inline-flex items-center gap-2 px-5 py-3 border border-[#E5E5E0] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:border-[#1E3A5F] transition-colors cursor-pointer">
          Resources <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
