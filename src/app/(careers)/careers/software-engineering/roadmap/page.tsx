import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle2, Lightbulb } from "lucide-react";

function Callout({ type, children }: { type: "info" | "warn" | "tip"; children: React.ReactNode }) {
  const s = {
    info: { cls: "bg-[#EFF6FF] border-[#1A1A2E]", Icon: CheckCircle2, color: "text-[#1A1A2E]" },
    warn: { cls: "bg-[#FFFBEB] border-[#D97706]",  Icon: AlertTriangle, color: "text-[#D97706]" },
    tip:  { cls: "bg-[#F0FDF4] border-[#059669]",  Icon: Lightbulb,     color: "text-[#059669]" },
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
      <h2 className="text-xl font-extrabold text-[#1A1A2E] whitespace-nowrap">{label}</h2>
      <div className="h-px flex-1 bg-[#E2E8F0]" />
    </div>
  );
}

function Step({ num, title, body, bullets }: { num: string; title: string; body: string; bullets?: string[] }) {
  return (
    <div className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1A1A2E] flex items-center justify-center text-xs font-bold text-white">
        {num}
      </div>
      <div>
        <p className="font-semibold text-[#0D0D0D] text-sm">{title}</p>
        <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{body}</p>
        {bullets && (
          <ul className="mt-2 space-y-1">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-2 text-xs text-[#9CA3AF]">
                <span>→</span>{b}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function SWERoadmapPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Header */}
      <div className="mb-10">
        <Link href="/careers/software-engineering" className="text-xs font-semibold text-[#6B7280] hover:text-[#1A1A2E] transition-colors">
          ← Software Engineering
        </Link>
        <span className="block text-xs font-semibold uppercase tracking-widest text-[#1A1A2E] mt-4 mb-2">SWE Roadmap</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          Year-by-Year SWE Roadmap.
        </h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
          Freshman through senior year. What to do, when to do it, and what's at stake each summer.
        </p>
        <Callout type="info">
          The internship pipeline is real: freshman internship → sophomore internship → junior internship → full-time offer. Every summer builds the next one. The students who understand this in September of freshman year are the ones who walk into senior year with offers already signed.
        </Callout>
      </div>

      {/* High School */}
      <Divider label="High School — Build Before You Arrive" />
      <p className="text-sm text-[#6B6B6B] leading-relaxed mb-5">
        The engineers who land the best opportunities in college are almost always the ones who started building in high school. Not because the credential matters, but because the habit does.
      </p>
      <div className="space-y-3">
        <Step num="1" title="Build something real." body="An app, a website, a game, a hardware project. Even small-scale. The habit of shipping something — not just learning — is what separates people." />
        <Step num="2" title="Excel at math." body="Linear algebra, probability, and discrete math are the foundations of CS. Strong math in high school (AMC, AIME, USACO, national competitions) shows up on profiles across the board." />
        <Step num="3" title="Get early exposure to CS competitions." body="USACO, ACSL, hackathons, FIRST Robotics — these develop the problem-solving instinct that technical interviews test." />
        <Step num="4" title="Lead something." body="It doesn't have to be technical. A club, a team, a community initiative. Leadership at any level shows up on profiles across the board." />
      </div>

      {/* Freshman */}
      <Divider label="Freshman Year — Start Immediately" />
      <p className="text-sm text-[#6B6B6B] leading-relaxed mb-5">
        Freshman year feels like adjustment. It is. But the students who start positioning themselves in September — not January, not sophomore year — are the ones who have options by junior year.
      </p>
      <Callout type="warn">
        Applications open in August and September — before most people have been to their first class. Apply immediately. The students who don't know this are the ones who find out too late.
      </Callout>
      <div className="space-y-3">
        <Step
          num="1"
          title="Apply to early diversity programs immediately."
          body="Google STEP, Microsoft New Technologist (freshman-specific), Meta University, and Amazon Propel are designed for freshmen and sophomores from underrepresented groups. Multiple engineers at Google and Meta got their start through STEP as freshmen."
          bullets={["See the full list on the Programs page", "Apply to all of them — they're non-exclusive", "Applications close fast — don't wait"]}
        />
        <Step
          num="2"
          title="Build your GitHub from day one."
          body="Set up a GitHub account. Start committing code — anything you're working on, any project you start. By the end of freshman year you should have 2–3 projects with READMEs."
        />
        <Step
          num="3"
          title="Join one technical club."
          body="Find your school's ACM chapter, coding club, hackathon team, or CS-adjacent org. Apply in the first weeks. These clubs host LeetCode sessions, have alumni in tech, and connect you to people ahead of you on the same path."
        />
        <Step
          num="4"
          title="TA a CS course as soon as you're eligible."
          body="TA experience shows up consistently on top engineers' profiles. Some schools allow freshmen to TA introductory courses — look for these opportunities as early as freshman spring."
        />
      </div>
      <Callout type="tip">
        If you can't land a tech internship freshman summer — build something. Start a personal project, contribute to open source, do freelance work, participate in an MLH Fellowship. Don't let the summer be blank.
      </Callout>

      {/* Sophomore */}
      <Divider label="Sophomore Year — Get Real Experience" />
      <p className="text-sm text-[#6B6B6B] leading-relaxed mb-5">
        Sophomore year is when the recruiting gets serious. Your freshman year experience — even if it was a small project, a student org, or a non-FAANG internship — is now your credential. Use it.
      </p>
      <div className="space-y-3">
        <Step
          num="1"
          title="Internship target: any tech company."
          body="The goal sophomore summer is a real software engineering internship. It doesn't need to be FAANG. A startup, a mid-size tech company, a research lab — anything where you're writing production code. This internship is what gets you the junior internship that gets you the offer."
          bullets={["Google STEP and Microsoft Explore (the sophomore program) are most competitive this year", "Apply broadly — the earlier you submit, the better your chances"]}
        />
        <Step
          num="2"
          title="Start LeetCode now."
          body="Junior year recruiting starts in August and September. That means technical interview preparation needs to begin sophomore year — not junior year. Work through easy and medium problems consistently. 150+ problems by the start of junior year is the floor."
        />
        <Step
          num="3"
          title="Go deeper in your clubs and projects."
          body="Take on more responsibility in the organizations you joined freshman year. Lead a project, manage a team, start something that didn't exist. The sophomore year record is what you bring into junior year recruiting conversations."
        />
        <Step
          num="4"
          title="Build your referral network."
          body="Start reaching out to engineers at companies you want to work at. Coffee chats, informational interviews, LinkedIn messages. The relationships you build sophomore year become the referrals you use junior year."
        />
      </div>

      {/* Junior */}
      <Divider label="Junior Year — The Critical Summer" />
      <p className="text-sm text-[#6B6B6B] leading-relaxed mb-5">
        This is the year that determines where you start after graduation. Every engineer in our research had an internship the summer after junior year. In almost every case, that internship led directly to a full-time offer.
      </p>
      <Callout type="warn">
        Top tech companies close junior internship applications in October or November for the following summer. Some close sooner. Have your resume finalized before school starts. When a role opens, apply within 24 hours.
      </Callout>
      <div className="space-y-3">
        <Step
          num="1"
          title="Applications open in August. Apply the day a role posts."
          body="Google, Meta, Amazon, Microsoft, Apple, Stripe, Airbnb — have your resume and referrals ready before school starts."
        />
        <Step
          num="2"
          title="LeetCode target: 150+ problems minimum."
          body="Medium difficulty, patterns over memorization. Practice until a dynamic programming or graph problem doesn't feel unfamiliar — it feels like a category you've seen before. See the Interview Prep guide for what to study."
        />
        <Step
          num="3"
          title="Use your referral network."
          body="The coffee chats from sophomore year matter now. Reach out to your contacts when roles open. A referral dramatically increases the likelihood of getting an interview."
        />
        <Step
          num="4"
          title="Target the team, not just the company."
          body="It's much harder to switch teams as a new grad than to pick the right team at the intern stage. Research the teams you're interviewing for. Ask about the team in your interviews."
        />
      </div>
      <Callout type="tip">
        If junior summer doesn't go as planned: build a meaningful project, contribute to open source, find a startup internship. Arrive at senior year with something real to talk about regardless of where it came from.
      </Callout>

      {/* Senior */}
      <Divider label="Senior Year — Execute" />
      <div className="space-y-3">
        <Step
          num="1"
          title="If you got a return offer: evaluate carefully."
          body="Your first team shapes your career more than the company name. Evaluate the team, the comp, and the growth potential before accepting. Then finish strong and start well."
        />
        <Step
          num="2"
          title="If you didn't get a return offer: recruit broadly now."
          body="Apply to companies of all sizes — startup to enterprise — in September and October. Your junior year internship experience, projects, and GPA are still strong signals. Cast a wide net."
        />
        <Step
          num="3"
          title="The Master's as a path corrector."
          body="If recruiting didn't go the way you wanted, a strong Master's program resets your pipeline. Georgia Tech OMSCS, Carnegie Mellon, Stanford, UIUC, and UT Austin all have strong recruiting relationships with top companies."
        />
        <Step
          num="4"
          title="Non-linear paths work."
          body="Some engineers went Capital One → Twitter → Meta over three years. Others started at a mid-size company and moved to a top company two years in. Every step builds the next one. The path is not a single gate."
        />
      </div>

      {/* What to avoid */}
      <Divider label="What to Avoid" />
      <div className="space-y-3">
        {[
          { title: "Joining 10 clubs shallowly.", body: "One club where you lead something is worth more than ten clubs where you showed up twice. Depth signals commitment. Breadth without depth signals nothing." },
          { title: "Waiting until junior or senior year to start coding seriously.", body: "Technical skill takes time to build. The students who do well in interviews started writing code years before the interview happened." },
          { title: "Only applying to your dream companies.", body: "Apply broadly. A startup internship junior year is infinitely better than no internship. You can always move up — you can't un-lose a summer." },
          { title: "Treating LeetCode as something you can cram.", body: "You can't. 150+ problems over 18 months beats 150 problems in a 3-week sprint every time. Start early." },
          { title: "Disappearing after coffee chats.", body: "The referral value of a contact comes from the relationship. Follow up. Keep the relationship warm. These are the people who will go to bat for you." },
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

      {/* Nav */}
      <div className="mt-12 flex flex-col sm:flex-row gap-3">
        <Link href="/careers/software-engineering/programs" className="inline-flex items-center gap-2 px-5 py-3 bg-[#1A1A2E] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer">
          Key Programs & Fellowships <ArrowRight size={14} />
        </Link>
        <Link href="/careers/software-engineering/interviews" className="inline-flex items-center gap-2 px-5 py-3 border border-[#E5E5E0] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:border-[#1A1A2E] transition-colors cursor-pointer">
          Interview Prep Guide <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
