import Link from "next/link";
import { ArrowRight, Map, Calendar, BookOpen, Wrench, FileText, CheckCircle2, HelpCircle } from "lucide-react";

const pmSections = [
  {
    href: "/careers/roadmap",
    icon: Map,
    label: "Roadmap",
    title: "Year-by-Year PM Roadmap",
    desc: "Freshman through post-grad. What to do every single year to give yourself the best shot at landing a PM role.",
    color: "bg-[#F4A825]",
  },
  {
    href: "/careers/prep",
    icon: Calendar,
    label: "10-Week Prep",
    title: "10-Week Interview Prep Guide",
    desc: "A structured week-by-week plan covering every interview type, career milestones, and how to fix gaps in your experience.",
    color: "bg-[#1B4332]",
  },
  {
    href: "/careers/interviews",
    icon: BookOpen,
    label: "Interview Guide",
    title: "Interview Frameworks",
    desc: "Frameworks and full walkthroughs for every PM interview type: product design, strategy, metrics, GTM, A/B testing, estimation, behavioral, and more.",
    color: "bg-[#1A1A2E]",
  },
  {
    href: "/careers/starter-project",
    icon: Wrench,
    label: "Starter Project",
    title: "Build Something Real",
    desc: "No internship experience? Build a product. Step-by-step guide from finding a problem to writing a resume-ready case study.",
    color: "bg-[#C45B3D]",
  },
  {
    href: "/careers/resources",
    icon: FileText,
    label: "Resources",
    title: "Templates & Tools",
    desc: "Resume template, cover letter, email & LinkedIn templates, interview cheat sheet, and every tool you need — all in one place.",
    color: "bg-[#0D0D0D]",
  },
];

const pmFunctions = [
  { title: "Voice of the User", desc: "PMs talk to users constantly — surfacing their real needs, frustrations, and goals. The whole team builds what the PM learns." },
  { title: "Cross-Functional Glue", desc: "PMs sit at the intersection of engineering, design, marketing, and sales. No one else owns the full picture." },
  { title: "Strategy & Prioritization", desc: "PMs decide what gets built and what doesn't. Every roadmap decision is a tradeoff — and the PM makes the call." },
  { title: "Execution & Coordination", desc: "PMs move the product from idea to launch, coordinating across teams, removing blockers, and keeping everyone aligned." },
  { title: "Data-Driven Decisions", desc: "PMs use metrics to know if something worked — and if not, why. Success is measured, not assumed." },
  { title: "Leading Without Authority", desc: "PMs don't manage anyone directly. They lead through clarity, reasoning, and trust — not title." },
];

const pmProjectSteps = [
  { step: "1", title: "Identify the Issue", desc: "Meet with the engineer adding languages to Google Translate. They explain: there isn't enough written material to train the AI model." },
  { step: "2", title: "Research the Problem", desc: "Discover the language is primarily spoken, not written, due to cultural tradition. Elders in the community hold the knowledge orally." },
  { step: "3", title: "Propose a Solution", desc: "Suggest recording elders speaking the language to train the model. Research how many speakers exist and what resources are needed." },
  { step: "4", title: "Write the PRD", desc: "Draft a Product Requirements Document outlining: how recordings train the model, a marketing plan for the Ivory Coast and globally, and metrics for success." },
  { step: "5", title: "Get Buy-In", desc: "Present to leadership, showcase the impact, secure funding and prioritization. PMs don't have a budget — they have to earn it." },
  { step: "6", title: "Execute & Ship", desc: "Coordinate across engineering, legal, partnerships, and marketing to launch the feature. Track the metrics. Iterate." },
];

const selfAssessment = [
  { q: "Do you like solving problems more than executing them?", context: "PMs identify what to build and why — engineers and designers build it. If you love defining the problem as much as solving it, that's a signal." },
  { q: "Are you comfortable making decisions with incomplete information?", context: "You'll never have all the data you want. PMs make calls with 70% confidence and course-correct fast. Paralysis is not an option." },
  { q: "Can you lead people who don't report to you?", context: "PMs have no direct authority. You move teams through trust, clarity, and persuasion — not power. If you're uncomfortable influencing without control, PM will be frustrating." },
  { q: "Do you genuinely enjoy talking to users and understanding their lives?", context: "User research isn't a checkbox for great PMs — it's the foundation. The best PMs are deeply curious about people." },
  { q: "Can you switch between big-picture strategy and day-to-day details quickly?", context: "In the same day, a PM might define a 3-year vision and write acceptance criteria for a bug fix. Both matter equally." },
  { q: "Are you comfortable with ambiguity?", context: "Your job description will change constantly. The problem you're solving on Monday might be different by Thursday. PMs who need structure struggle." },
  { q: "Do you care about why something is built, not just how?", context: "PMs obsess over user value and business impact. If you find yourself asking 'but what problem does this actually solve?' — that's the PM instinct." },
  { q: "Can you take feedback without getting defensive?", context: "Your roadmap will get challenged. Your decisions will be questioned. PMs who can separate ego from ideas make better products." },
  { q: "Are you drawn to the intersection of technology, business, and people?", context: "PM lives in the overlap. If you love tech but also love people and strategy — not just one — PM might be the right fit." },
  { q: "Do you find yourself naturally thinking about how to improve products you use?", context: "Most PMs can't help but notice what's broken. If you've ever caught yourself saying 'this app should do X instead' — that's a signal worth paying attention to." },
];

const pmTypes = [
  { title: "Consumer PM", desc: "Building products for everyday users — apps, platforms, social products. Think Spotify, Instagram, Google Maps." },
  { title: "B2B / Enterprise PM", desc: "Building products for businesses and teams. Think Salesforce, Workday, Slack for enterprise. Often more process-heavy, longer sales cycles." },
  { title: "Platform PM", desc: "Building the infrastructure other teams build on. APIs, developer tools, internal platforms. High technical depth required." },
  { title: "Growth PM", desc: "Focused entirely on user acquisition, activation, retention, and revenue. Heavy analytics and experimentation." },
  { title: "Technical PM (TPM)", desc: "Works closely with engineering on highly technical problems. Often has a CS or engineering background." },
  { title: "APM (Associate PM)", desc: "The entry point for most new grads at big tech companies. Structured programs at Google, Meta, Salesforce, etc. with mentorship and rotation." },
];

export default function ProductManagementPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-[#6B7280] hover:text-[#F4A825] transition-colors mb-6 cursor-pointer">
            ← All careers
          </Link>
          <div className="inline-flex items-center gap-2 bg-[#FDF8EC] text-[#C4841A] text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4A825]" />
            Product Management
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold text-[#FAFAF7] leading-[1.05] mb-4"
            style={{ fontFamily: "'Libre Bodoni', serif" }}
          >
            The complete guide to
            <br />
            <span className="italic text-[#F4A825]">breaking into PM.</span>
          </h1>
          <p className="text-lg text-[#9CA3AF] leading-relaxed max-w-2xl mb-8">
            Everything you need — from freshman year to your first PM offer. Start by understanding what the role actually is, then decide if it&apos;s right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/careers/roadmap"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#F4A825] text-[#0D0D0D] font-semibold rounded-lg hover:bg-[#C4841A] transition-colors text-sm cursor-pointer"
            >
              Start with the roadmap
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/careers/interviews"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#2D2D2D] text-[#FAFAF7] font-medium rounded-lg hover:border-[#F4A825] transition-colors text-sm cursor-pointer"
            >
              Jump to interview frameworks
            </Link>
          </div>
        </div>
      </section>

      {/* What is PM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="mb-8">
          <h2
            className="text-2xl font-bold text-[#0D0D0D] mb-3"
            style={{ fontFamily: "'Libre Bodoni', serif" }}
          >
            What is Product Management?
          </h2>
          <div className="space-y-4 text-[#6B6B6B] leading-relaxed">
            <p>
              A Product Manager (PM) is responsible for guiding a team on <strong className="text-[#0D0D0D]">what to build and why</strong> — ensuring the product creates real value for users and the business. Often called the &quot;CEO of the product,&quot; the PM isn&apos;t the boss of anyone. They&apos;re the voice of the user.
            </p>
            <p>
              The PM works at the intersection of <strong className="text-[#0D0D0D]">engineering, design, marketing, sales, and customer support</strong>. You might wonder why a PM is needed when engineers build, designers design, and sales sells. The PM ensures all those teams are aligned and working toward the same goal.
            </p>
            <p>
              Ultimately, the PM <strong className="text-[#0D0D0D]">leads without direct authority</strong>. There&apos;s no one who reports to you. You move the product forward through data, user feedback, clear reasoning, and trust.
            </p>
          </div>
        </div>

        {/* What PMs actually do */}
        <div className="mb-12">
          <h3
            className="text-lg font-bold text-[#0D0D0D] mb-4"
            style={{ fontFamily: "'Libre Bodoni', serif" }}
          >
            What PMs actually do
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {pmFunctions.map((f) => (
              <div key={f.title} className="border border-[#E5E5E0] rounded-xl p-4 bg-white">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-[#F4A825] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-[#0D0D0D] mb-1">{f.title}</p>
                    <p className="text-xs text-[#6B6B6B] leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real PM project example */}
        <div className="mb-14">
          <h3
            className="text-lg font-bold text-[#0D0D0D] mb-2"
            style={{ fontFamily: "'Libre Bodoni', serif" }}
          >
            What a PM project actually looks like
          </h3>
          <p className="text-sm text-[#6B6B6B] mb-6">Example: Adding a new language to Google Translate.</p>
          <div className="relative pl-4 border-l-2 border-[#E5E5E0] space-y-6">
            {pmProjectSteps.map((s) => (
              <div key={s.step} className="flex gap-4">
                <div className="absolute -left-3.5 w-6 h-6 bg-[#F4A825] rounded-full flex items-center justify-center text-[#0D0D0D] text-xs font-bold flex-shrink-0">
                  {s.step}
                </div>
                <div className="pl-4">
                  <p className="text-sm font-semibold text-[#0D0D0D] mb-1">{s.title}</p>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 callout callout-info">
            <p className="text-sm text-[#6B6B6B]">Notice what the PM didn&apos;t do: write a line of code, design a screen, or make a sales call. They identified the problem, coordinated the solution, built the business case, and shipped it — through other people.</p>
          </div>
        </div>

        {/* Types of PM */}
        <div className="mb-14">
          <h3
            className="text-lg font-bold text-[#0D0D0D] mb-2"
            style={{ fontFamily: "'Libre Bodoni', serif" }}
          >
            Types of PM roles
          </h3>
          <p className="text-sm text-[#6B6B6B] mb-5">PM isn&apos;t one thing. Here&apos;s how the role breaks down across different companies and stages.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {pmTypes.map((t) => (
              <div key={t.title} className="border border-[#E5E5E0] rounded-xl p-4 bg-white">
                <p className="text-sm font-semibold text-[#0D0D0D] mb-1">{t.title}</p>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Self-assessment */}
        <div className="mb-14">
          <h3
            className="text-lg font-bold text-[#0D0D0D] mb-2"
            style={{ fontFamily: "'Libre Bodoni', serif" }}
          >
            Is PM right for you?
          </h3>
          <p className="text-sm text-[#6B6B6B] mb-2">
            Before committing, ask yourself these questions honestly. There are no right or wrong answers — but your instincts here matter.
          </p>
          <div className="callout callout-tip mb-6">
            <p className="text-sm text-[#6B6B6B]">You don&apos;t need to say yes to all of these. But if most of them resonate, that&apos;s a strong signal. If most of them don&apos;t — that&apos;s useful information too.</p>
          </div>
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
            { stat: "July–Oct", label: "When APM applications open — most students find out too late." },
            { stat: "Most PMs", label: "Don't start as PMs. Adjacent roles are a real path in." },
            { stat: "Balance", label: "You're in college once. Work hard, but enjoy it." },
          ].map((item) => (
            <div key={item.stat}>
              <p
                className="text-2xl font-bold text-[#F4A825] mb-1"
                style={{ fontFamily: "'Libre Bodoni', serif" }}
              >
                {item.stat}
              </p>
              <p className="text-sm text-[#6B6B6B]">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Guide sections */}
        <div>
          <h3
            className="text-lg font-bold text-[#0D0D0D] mb-1"
            style={{ fontFamily: "'Libre Bodoni', serif" }}
          >
            Ready? Here&apos;s everything in the guide.
          </h3>
          <p className="text-sm text-[#6B6B6B] mb-6">Five sections. Everything you need to go from zero to a PM offer.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pmSections.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  className="section-card group flex flex-col p-6 border border-[#E5E5E0] rounded-xl bg-white hover:border-[#F4A825] hover:shadow-sm transition-all cursor-pointer"
                >
                  <div className={`w-9 h-9 ${s.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon size={16} className="text-white" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF] mb-1">{s.label}</span>
                  <h3
                    className="font-bold text-[#0D0D0D] mb-2 group-hover:text-[#C4841A] transition-colors"
                    style={{ fontFamily: "'Libre Bodoni', serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed flex-1">{s.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#F4A825] opacity-0 group-hover:opacity-100 transition-opacity">
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
