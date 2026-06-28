import Link from "next/link";
import { ArrowRight, Map, Zap, Users, BookOpen, FileText, CheckCircle2, HelpCircle } from "lucide-react";

const consultingSections = [
  {
    href: "/careers/consulting/roadmap",
    icon: Map,
    label: "Roadmap",
    title: "Year-by-Year Consulting Roadmap",
    desc: "Freshman through senior year. What to do every year to give yourself the best shot at landing at McKinsey, BCG, or Bain.",
    color: "bg-[#1B4332]",
  },
  {
    href: "/careers/consulting/programs",
    icon: Zap,
    label: "Key Programs",
    title: "Diversity & Early Programs",
    desc: "Bain Emerging Leaders, McKinsey Early Insight, BCG Early Access, Deloitte Discovery — the programs built for freshmen and sophomores that most people miss.",
    color: "bg-[#F4A825]",
  },
  {
    href: "/careers/consulting/clubs",
    icon: Users,
    label: "Clubs & Activities",
    title: "What to Join and Build",
    desc: "The clubs, case competitions, and credentials that show up on the profiles of consultants at McKinsey, BCG, and Bain.",
    color: "bg-[#0D0D0D]",
  },
  {
    href: "/careers/consulting/interviews",
    icon: BookOpen,
    label: "Case Interviews",
    title: "Case Interview Guide",
    desc: "The full breakdown of how case interviews work, how to prepare, and what it takes to get through McKinsey, BCG, and Bain's recruiting process.",
    color: "bg-[#C45B3D]",
  },
  {
    href: "/careers/resources",
    icon: FileText,
    label: "Resources",
    title: "Templates & Tools",
    desc: "Resume template, cover letter, cold outreach scripts — everything you need to apply and stand out.",
    color: "bg-[#1A1A2E]",
  },
];

const consultingFunctions = [
  { title: "Solve Complex Business Problems", desc: "Consultants are hired to diagnose problems that organizations can't solve on their own — strategy, operations, growth, cost reduction, market entry." },
  { title: "Work Across Industries", desc: "In one year you might work on a healthcare system in Q1, a retail chain in Q2, and a private equity deal in Q3. The breadth is real and it compounds fast." },
  { title: "Build Structured Thinking", desc: "Consultants break every problem into a framework, hypothesis, and data-backed recommendation. This is a skill that transfers to every career after consulting." },
  { title: "Communicate to Executives", desc: "Every engagement ends with a deck presented to C-suite leaders. Consulting trains you to communicate insights clearly and persuasively under pressure." },
  { title: "Work in High-Intensity Teams", desc: "You'll work in small teams (2–5 people) embedded at a client site, often traveling Monday through Thursday. The pace is fast and the standards are high." },
  { title: "Build an Elite Network Fast", desc: "Two years at McKinsey, BCG, or Bain puts you in a network of alumni across every industry. The consulting alumni network is among the most valuable in business." },
];

const consultingTypes = [
  { title: "MBB (McKinsey, BCG, Bain)", desc: "The top tier. Highest prestige, highest pay, most competitive recruiting. Exit opportunities to PE, startups, and corporate strategy are unmatched." },
  { title: "Big 4 (Deloitte, PwC, EY, KPMG)", desc: "Massive firms with consulting arms. Less competitive to enter, more accessible from non-target schools. Strong stepping stone to MBB." },
  { title: "Boutique Strategy Firms (Oliver Wyman, LEK, Kearney, Roland Berger)", desc: "Specialized strategy firms that often go deeper in one sector. Oliver Wyman dominates financial services; LEK does a lot of life sciences and PE." },
  { title: "Tech Consulting (Accenture, Capgemini, IBM)", desc: "Consulting that sits at the intersection of technology and business transformation. More technical, less case-interview heavy." },
  { title: "In-House / Corporate Strategy", desc: "Many ex-consultants move in-house to build strategy teams at Fortune 500 companies. Less travel, more implementation, often the step after 2–3 years at MBB." },
  { title: "Social Sector / Government", desc: "Consulting applied to nonprofits, governments, and international development. Deloitte Federal, BCG's Social Impact practice, and firms like Dalberg specialize here." },
];

const dataInsights = [
  {
    heading: "School prestige matters more in consulting than in tech — but non-elites still break in.",
    body: "Wharton, Harvard, Yale, Columbia, and Georgetown appear heavily in MBB profiles. That's the reality. But Indiana Kelley, GWU, Boston University, and Howard also produced MBB consultants in our research. In every non-target case, the person had at least one of: a case competition win, consulting club leadership, a sophomore diversity program, or multiple internships. The non-elite path requires more deliberate effort — but it is real and documented.",
  },
  {
    heading: "The ACI internship is the only path in. No exceptions.",
    body: "Every undergrad consultant in our research got their full-time offer by returning from a junior year internship — Bain's ACI, BCG's Summer Associate, or McKinsey's Business Analyst internship. Nobody cold-applied to full-time roles after graduating. This makes the junior internship in consulting more critical than almost any other field. It is not a stepping stone — it is the offer.",
  },
  {
    heading: "Majors are more diverse than you think.",
    body: "Public Policy + CS, Engineering, Economics + Astrophysics, Industrial & Labor Relations, and Marketing + Information Systems all appear in this dataset. The common thread is not the major — it's quantitative aptitude and structured thinking. If you can work with numbers and break down problems, your major is less important than your other signals.",
  },
  {
    heading: "Sophomore diversity programs are the real entry point for non-target students.",
    body: "Bain Emerging Leaders, McKinsey Early Insight, BCG Early Access, and Deloitte Discovery are the consulting equivalent of Google STEP. Three of the four non-elite school consultants in our research explicitly used a diversity program as their on-ramp. These programs give you access, mentors, and case prep before you ever apply to the full internship.",
  },
  {
    heading: "Case competitions are the highest-leverage signal for non-target students.",
    body: "In consulting, winning a case competition is what a strong GitHub project is in SWE. One of our Indiana Kelley → Bain profiles won two separate case competitions before receiving any MBB offer. Case competitions build the exact skills tested in case interviews and produce a verifiable credential that differentiates you when your school's brand doesn't.",
  },
];

const selfAssessment = [
  { q: "Do you enjoy breaking down complex, ambiguous problems into structured pieces?", context: "Consulting is fundamentally about structure. Every problem gets a framework. If you find yourself naturally organizing problems into categories and sub-questions, that's the instinct." },
  { q: "Are you comfortable switching industries and contexts every few months?", context: "You won't specialize early. One project is healthcare, the next is logistics. If variety energizes you rather than unsettles you, consulting is a fit." },
  { q: "Can you work under high pressure with high standards?", context: "The hours are real and the expectations are high. Client work has real deadlines. The pace doesn't slow down because you're tired." },
  { q: "Do you enjoy communicating insights to people more senior than you?", context: "Consultants regularly present to CEOs and C-suite executives as first-year analysts. If you're comfortable in rooms where you're the youngest and the stakes are high, that's a signal." },
  { q: "Are you genuinely curious about how businesses work?", context: "The best consultants are fascinated by business models, competitive dynamics, and operational challenges. If you find yourself asking 'why does this company make money that way?' — that's the instinct." },
  { q: "Can you learn quickly without being an expert first?", context: "You'll be advising on industries you know nothing about. The ability to get smart fast — reading, asking questions, synthesizing — is more important than prior knowledge." },
  { q: "Are you willing to put in the work on case interview prep?", context: "50+ cases minimum to be competitive. 100+ for MBB. It's a real time investment. The people who get the offers are the ones who put in the reps." },
  { q: "Do you want to build a broad business foundation before specializing?", context: "Many people go into consulting specifically to get broad exposure before deciding what they want to do long-term. If you're undecided about industry but want business training, consulting is a strong bridge." },
];

export default function ConsultingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Link href="/careers" className="inline-flex items-center gap-1.5 text-sm text-[#6B7280] hover:text-[#F4A825] transition-colors mb-6 cursor-pointer">
            ← All careers
          </Link>
          <div className="inline-flex items-center gap-2 bg-[#F0FDF4] text-[#1B4332] text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332]" />
            Consulting
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#FAFAF7] leading-[1.05] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
            The complete guide to
            <br />
            <span className="italic text-[#F4A825]">breaking into MBB.</span>
          </h1>
          <p className="text-lg text-[#9CA3AF] leading-relaxed max-w-2xl mb-8">
            McKinsey, BCG, and Bain are the most prestigious firms in business. Here's what it actually takes — from freshman year to your first offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/careers/consulting/roadmap" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#F4A825] text-[#0D0D0D] font-semibold rounded-lg hover:bg-[#C4841A] transition-colors text-sm cursor-pointer">
              Start with the roadmap <ArrowRight size={16} />
            </Link>
            <Link href="/careers/consulting/interviews" className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#2D2D2D] text-[#FAFAF7] font-medium rounded-lg hover:border-[#F4A825] transition-colors text-sm cursor-pointer">
              Jump to case interviews
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* What is consulting */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#0D0D0D] mb-3" style={{ fontFamily: "'Libre Bodoni', serif" }}>
            What is Management Consulting?
          </h2>
          <div className="space-y-4 text-[#6B6B6B] leading-relaxed">
            <p>A management consultant is brought in by an organization — a company, a government, a nonprofit — to solve a problem the organization can't solve on its own. You are paid to think clearly, move fast, and give recommendations that a CEO will actually act on.</p>
            <p>The job sits at the intersection of <strong className="text-[#0D0D0D]">business strategy, data analysis, and communication</strong>. You don't implement — you diagnose and recommend. Then you move to the next client.</p>
            <p>Two to three years at McKinsey, BCG, or Bain is one of the most valuable career accelerators in business. The skills, the network, and the brand open doors in private equity, venture capital, corporate strategy, startups, and beyond. Most people who go into consulting don't stay forever — they use it as a foundation.</p>
          </div>
        </div>

        {/* What consultants do */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>What consultants actually do</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {consultingFunctions.map((f) => (
              <div key={f.title} className="border border-[#E5E5E0] rounded-xl p-4 bg-white">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-[#1B4332] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-[#0D0D0D] mb-1">{f.title}</p>
                    <p className="text-xs text-[#6B6B6B] leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Types of consulting */}
        <div className="mb-14">
          <h3 className="text-lg font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>Types of consulting firms</h3>
          <p className="text-sm text-[#6B6B6B] mb-5">Consulting isn't one thing. Here's how the landscape breaks down.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {consultingTypes.map((t) => (
              <div key={t.title} className="border border-[#E5E5E0] rounded-xl p-4 bg-white">
                <p className="text-sm font-semibold text-[#0D0D0D] mb-1">{t.title}</p>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data insights */}
        <div className="mb-14">
          <h3 className="text-lg font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>What the data actually shows</h3>
          <p className="text-sm text-[#6B6B6B] mb-6">We studied the real career paths of consultants at McKinsey, BCG, and Bain. Here's what we found — and what it means for you.</p>
          <div className="space-y-4">
            {dataInsights.map((item) => (
              <div key={item.heading} className="border border-[#E5E5E0] rounded-xl p-5 bg-white">
                <p className="text-sm font-semibold text-[#0D0D0D] mb-2">{item.heading}</p>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Self-assessment */}
        <div className="mb-14">
          <h3 className="text-lg font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>Is consulting right for you?</h3>
          <p className="text-sm text-[#6B6B6B] mb-6">Before committing, ask yourself these honestly.</p>
          <div className="space-y-4">
            {selfAssessment.map((item, i) => (
              <div key={i} className="border border-[#E5E5E0] rounded-xl p-5 bg-white">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#F5F5F0] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HelpCircle size={13} className="text-[#6B6B6B]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0D0D0D] mb-1">{item.q}</p>
                    <p className="text-xs text-[#6B6B6B] leading-relaxed">{item.context}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14 border-y border-[#E5E5E0] py-10">
          {[
            { stat: "Aug–Oct", label: "When MBB internship applications open. Most students find out too late." },
            { stat: "50–100+", label: "Cases needed to be competitive. Quality reps over months, not weeks." },
            { stat: "Return offer", label: "The only path in. Every MBB full-time offer in our research came from a junior year internship." },
          ].map((item) => (
            <div key={item.stat}>
              <p className="text-2xl font-bold text-[#1B4332] mb-1" style={{ fontFamily: "'Libre Bodoni', serif" }}>{item.stat}</p>
              <p className="text-sm text-[#6B6B6B]">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Guide sections */}
        <div>
          <h3 className="text-lg font-bold text-[#0D0D0D] mb-1" style={{ fontFamily: "'Libre Bodoni', serif" }}>Ready? Here's everything in the guide.</h3>
          <p className="text-sm text-[#6B6B6B] mb-6">Four sections. Everything you need to go from zero to an MBB offer.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {consultingSections.map((s) => {
              const Icon = s.icon;
              return (
                <Link key={s.href} href={s.href} className="group flex flex-col p-6 border border-[#E5E5E0] rounded-xl bg-white hover:border-[#1B4332] hover:shadow-sm transition-all cursor-pointer">
                  <div className={`w-9 h-9 ${s.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon size={16} className="text-white" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF] mb-1">{s.label}</span>
                  <h3 className="font-bold text-[#0D0D0D] mb-2 group-hover:text-[#1B4332] transition-colors" style={{ fontFamily: "'Libre Bodoni', serif" }}>{s.title}</h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed flex-1">{s.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#1B4332] opacity-0 group-hover:opacity-100 transition-opacity">
                    Read section <ArrowRight size={12} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
