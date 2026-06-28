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

function Step({ num, label, children, tips }: { num: number; label: string; children: React.ReactNode; tips?: string[] }) {
  return (
    <div className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#7C2D12] flex items-center justify-center text-xs font-bold text-white">{num}</div>
      <div>
        <p className="font-semibold text-[#0D0D0D] text-sm">{label}</p>
        <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{children}</p>
        {tips && (
          <ul className="mt-2 space-y-1">
            {tips.map((t, i) => <li key={i} className="flex gap-2 text-xs text-[#9CA3AF]"><span>→</span>{t}</li>)}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function FinanceRoadmapPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-10">
        <Link href="/careers/finance" className="text-xs font-semibold text-[#6B7280] hover:text-[#7C2D12] transition-colors">← Finance & IB</Link>
        <span className="block text-xs font-semibold uppercase tracking-widest text-[#7C2D12] mt-4 mb-2">IB Roadmap</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          Year-by-Year IB Roadmap.
        </h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
          Freshman through senior year. What to do, when to do it, and what's at stake.
        </p>
        <Callout type="info">
          In IB, every full-time offer came from the same path: junior year summer analyst internship → return offer → done. Everything before junior year is building toward that one summer. Miss it, and you're recruiting from scratch senior year.
        </Callout>
      </div>

      <Divider label="High School — Build the Foundation" />
      <p className="text-sm text-[#6B6B6B] mb-6">IB recruiting is school-dependent more than any other career. The foundation you build before college determines which banks recruit on your campus.</p>
      <div className="space-y-3">
        <Step num={1} label="Target a school with IB recruiting presence." tips={["Cornell, Berkeley Haas, UCLA, USC, Georgetown, NYU Stern, Michigan Ross — all confirmed in our data", "If you're at a non-target, know that before you start. Your entry point will be a diversity program or boutique first."]}>
          IB banks recruit on-campus at a short list of schools. Cornell, Wharton, Harvard, Berkeley Haas, and NYU Stern are the primary feeders. If your school isn't on the list, a diversity program or boutique internship is your entry point.
        </Step>
        <Step num={2} label="Excel academically — especially in math and economics." tips={["IB has a 3.7 GPA screen that consulting and tech do not", "Strong AP Economics, AP Statistics, AP Calc signal quantitative readiness"]}>
          IB has a 3.7+ GPA requirement at most bulge bracket banks. It is a hard screen — not a soft preference. Start building the academic record now.
        </Step>
        <Step num={3} label="Learn Excel early." tips={["Financial modeling starts with Excel fluency", "Build a basic DCF or P&L model — it signals genuine interest, not just stated interest"]}>
          IB analysts live in Excel. Even basic proficiency before college sets you apart and signals genuine interest in the work.
        </Step>
      </div>

      <Divider label="Freshman Year — Orientation and Early Programs" />
      <Callout type="warn">
        Goldman Sachs, JPMorgan, and Morgan Stanley all have freshman and sophomore diversity programs. Applications open in September–November of freshman year. Most students don't know these exist. Apply before anyone else.
      </Callout>
      <div className="space-y-3">
        <Step num={1} label="Declare Finance, Economics, or Accounting as your major." tips={["Business, Financial Engineering, or Applied Math also work at non-business schools", "A non-quantitative major without a finance supplement is a red flag in IB"]}>
          IB recruiters want to see a finance-relevant major. Unlike consulting or SWE where your major matters less, IB is explicit about this.
        </Step>
        <Step num={2} label="Join the Investment Banking Club and Finance Club immediately." tips={["These clubs run mock interviews, case workshops, and direct alumni pipelines to banks", "IB club leadership over 3–4 years is the single most common extracurricular across all profiles we studied"]}>
          Your school's IB and finance clubs are your primary recruiting infrastructure. Join in the first week. Start building relationships with upperclassmen who are recruiting.
        </Step>
        <Step num={3} label="Apply to freshman and sophomore diversity programs in September–November." tips={["Goldman Sachs Possibilities Summit", "JPMorgan Launching Leaders / Winning Women", "Morgan Stanley Sophomore IB Diversity Program", "Citi Freshman Discovery Program"]}>
          These programs provide firm access, mentorship, and often a direct path to junior-year summer analyst applications. Rhema Onyia was selected for the GS Virtual Insight Series out of 10,000+ applicants as a freshman. Apply to all of them.
        </Step>
        <Step num={4} label="Maintain a 3.7+ GPA from day one." tips={["IB GPA screens are enforced — a 3.5 will get you filtered out at many banks", "If your GPA dips, it's very hard to recover by junior year"]}>
          The GPA requirement is real and it's checked early. A 3.5 will get you filtered out at Goldman Sachs and JPMorgan. Build the record now.
        </Step>
      </div>

      <Divider label="Sophomore Year — The Most Important Year" />
      <Callout type="info">
        Junior year IB recruiting begins in August–September of junior year — which means your preparation and positioning must be done by the spring of sophomore year. Sophomore year is the most important year in IB recruiting.
      </Callout>
      <div className="space-y-3">
        <Step num={1} label="Apply to every sophomore diversity program you qualify for." tips={["ABP (Advancing Black Pathways) at JPMorgan — directly into Corporate & Investment Banking", "Goldman Sachs Virtual Insight Series, Freshman/Sophomore Programs", "Morgan Stanley Sophomore IB Diversity Program"]}>
          The Advancing Black Pathways Fellowship at JPMorgan routed Brandon Robinson (Michigan Ross) and Rhema Onyia (Cornell) directly into Corporate & Investment Banking. These are documented pipelines. Apply to all of them.
        </Step>
        <Step num={2} label="Get any finance internship — boutique bank, wealth management, corporate finance." tips={["A boutique IB internship is the best fallback if you don't land a diversity program", "Zoe Zhao: Georgetown → UBS IB → JPMorgan. The boutique-first route is real."]}>
          If you can't land a diversity program, any finance internship that involves financial modeling, deal analysis, or investment research is building the IB toolkit. Document it clearly on your resume.
        </Step>
        <Step num={3} label="Learn which coverage group you want to target and why." tips={["TMT, Healthcare, FIG, Energy, Real Estate, LATAM — pick one and build conviction", "Mateo Graziosi targeted LATAM at JPMorgan based on his background. Specificity got him in."]}>
          IB interviews ask "why this group?" and generic answers fail. Research two or three coverage groups, pick one that aligns with your background or interests, and build a real answer for it.
        </Step>
        <Step num={4} label="Start building your alumni network at target banks." tips={["LinkedIn cold outreach: 'I'm a sophomore at [school] interested in [group]. Would you have 15 minutes for a call?'", "The Georgetown alumni network was explicitly credited by Zoe Zhao for her JPMorgan offer"]}>
          IB is relationship-driven. Alumni at the banks will refer you, pass along your resume, and give you inside information on the interview process. Start building these relationships in sophomore spring.
        </Step>
        <Step num={5} label="Begin learning financial modeling fundamentals." tips={["Excel: VLOOKUP, INDEX/MATCH, pivot tables, financial statement formatting", "Build a simple three-statement model or DCF on your own — it signals real preparation"]}>
          Junior year interviews will test your technical knowledge. The earlier you start learning DCF, comparable company analysis, and accounting basics, the better.
        </Step>
      </div>

      <Divider label="Junior Year — The Conversion Moment" />
      <Callout type="warn">
        IB summer analyst recruiting for the following summer begins in August–September of junior year. Banks recruit an entire year in advance. If you're not ready by August, you've already missed the window.
      </Callout>
      <div className="space-y-3">
        <Step num={1} label="Apply to bulge bracket and elite boutique banks starting in August." tips={["Goldman Sachs, JPMorgan, Morgan Stanley, Bank of America, Citi, Barclays, Deutsche Bank", "Lazard, Evercore, Centerview, PJT, Moelis — elite boutiques pay as well as bulge brackets", "Apply to all of them simultaneously — don't wait for one to respond before submitting others"]}>
          The application window is narrow and competitive. Submit applications broadly across bulge brackets and elite boutiques at the same time. Don't hold out for your top choice.
        </Step>
        <Step num={2} label="Prepare for technical interviews: LBO, DCF, comps, accounting." tips={["Breaking Into Wall Street (BIWS) or Wall Street Prep are the industry-standard prep courses", "Know the three financial statements and how they connect cold", "Be able to walk through a DCF and explain every assumption"]}>
          IB technical interviews are specific and rigorous. You will be asked to walk through an LBO, build a DCF from memory, and answer accounting questions. Prepare with purpose, not just familiarity.
        </Step>
        <Step num={3} label="Prepare for behavioral interviews: why IB, why this bank, why this group." tips={["Every answer must be specific to the firm and the group — not generic IB enthusiasm", "'Why Goldman Sachs TMT?' is a different question from 'Why do you want to do IB?'"]}>
          Behavioral prep in IB is as important as technical prep. Interviewers are evaluating whether you understand what you're walking into and whether you'll survive it.
        </Step>
        <Step num={4} label="Convert your summer analyst offer into a full-time return offer." tips={["Most full-time IB offers come from the summer internship — not from recruiting after graduation", "Treat the internship as a 10-week audition. Every model, every deck, every interaction is evaluated."]}>
          This is the most important outcome in IB recruiting. A return offer from your junior summer is the standard path to full-time employment. Treat the internship as the actual job.
        </Step>
      </div>

      <Divider label="Senior Year — Return Offer or Re-Recruit" />
      <div className="space-y-3">
        <Step num={1} label="If you got a return offer: accept it and enjoy senior year." tips={["Negotiate start date, group preference, and location if possible", "Stay in touch with your team from the summer — your network is already built"]}>
          A return offer is the finish line. Most students who get here have been locked in since sophomore year. Appreciate it.
        </Step>
        <Step num={2} label="If you didn't convert: recruit immediately in September–October." tips={["Middle market banks and elite boutiques often have later timelines", "A boutique offer now beats a gap in your resume later"]}>
          Not converting a summer offer is painful but not the end. Recruit immediately for any remaining bulge bracket or boutique analyst roles. Speed matters — don't wait.
        </Step>
        <Step num={3} label="Know the exit paths and start thinking about them." tips={["PE recruiting often starts during your first year as an analyst — sometimes before you've even started", "Top MBA programs (HBS, Wharton, Booth) are the other major exit for analysts who don't go directly to PE"]}>
          IB analyst programs last 2–3 years. The exit paths — private equity, hedge funds, corporate development, MBA — are well-documented. Understanding where you want to go shapes how you perform and which deals you ask to work on.
        </Step>
      </div>

      <Divider label="What to Avoid" />
      <div className="space-y-3">
        {[
          { title: "Letting your GPA drop below 3.7.", body: "It's a hard screen. A 3.5 will filter you out at Goldman Sachs, JPMorgan, and Morgan Stanley before a human ever reads your resume. Protect the GPA." },
          { title: "Waiting until junior fall to start networking.", body: "The students who break into IB from semi-target schools started networking sophomore spring. Alumni relationships take time to build. Start early." },
          { title: "Being vague about which group you want.", body: "'I want exposure to different industries' is not an answer. Know your vertical, know why, and be able to explain a deal in that space clearly." },
          { title: "Skipping the boutique internship if you can't land a diversity program.", body: "A boutique IB internship is the documented fallback. Zoe Zhao did it — Georgetown → UBS → JPMorgan. Don't skip this step if the diversity program route doesn't work out." },
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
        <Link href="/careers/finance" className="inline-flex items-center gap-2 px-5 py-3 bg-[#7C2D12] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer">
          ← What is IB?
        </Link>
        <Link href="/careers/finance/programs" className="inline-flex items-center gap-2 px-5 py-3 border border-[#E5E5E0] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:border-[#7C2D12] transition-colors cursor-pointer">
          Diversity Programs <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
