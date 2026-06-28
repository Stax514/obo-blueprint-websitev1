import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";

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

function Step({ num, label, children, tips }: { num: number; label: string; children: React.ReactNode; tips?: string[] }) {
  return (
    <div className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1E3A5F] flex items-center justify-center text-xs font-bold text-white">{num}</div>
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

export default function LawSchoolRoadmapPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-10">
        <Link href="/careers/law-school" className="text-xs font-semibold text-[#6B7280] hover:text-[#1E3A5F] transition-colors">← Law School</Link>
        <span className="block text-xs font-semibold uppercase tracking-widest text-[#1E3A5F] mt-4 mb-2">Roadmap</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          Year-by-Year Law School Roadmap.
        </h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
          Freshman through senior year — and the gap year. What to do, when to do it, and what's at stake.
        </p>
        <Callout type="info">
          The students who got into Harvard Law and Yale Law didn't rely on a single credential. They stacked mock trial, research, pipeline programs, advocacy work, and LSAT prep with intention across four years. This roadmap shows you how.
        </Callout>
      </div>

      <Divider label="High School — Start Earlier Than Anyone Expects" />
      <Callout type="info">
        Harvard Law graduates in our research credited their high school mock trial programs as what first introduced them to the law. The road to HLS started in high school — not college.
      </Callout>
      <div className="space-y-3">
        <Step num={1} label="Join mock trial freshman year and compete through senior year." tips={["Mock trial is the #1 most cited pre-law activity in our entire dataset", "It teaches oral argument, legal reasoning, and courtroom presence — skills law schools know translate directly", "If your school doesn't have one, advocate to start one"]}>
          Mock trial is the clearest pre-law signal you can send from high school. It's not a soft extracurricular — it is the activity Harvard Law graduates in our research most consistently named as their introduction to the law.
        </Step>
        <Step num={2} label="Build debate and Model UN alongside mock trial." tips={["Debate: argumentation, evidence marshaling, quick thinking under pressure", "Model UN: international law exposure and public speaking", "Both skills transfer directly to law school and LSAT logical reasoning"]}>
          Debate and Model UN develop the same cognitive skills the LSAT tests — logical reasoning, argument construction, and real-time analysis under pressure. Law schools notice these activities.
        </Step>
        <Step num={3} label="Start reading about the law you care about." tips={["The New Jim Crow (Michelle Alexander) — criminal justice", "Just Mercy (Bryan Stevenson) — public defense and racial justice", "A Civil Action (Jonathan Harr) — environmental litigation", "The Color of Law (Richard Rothstein) — housing and civil rights"]}>
          Identifying your legal niche starts with curiosity. Read one book about a legal issue that matters to you. Let it point you toward the area of law you'll build your story around.
        </Step>
      </div>

      <Divider label="Freshman Year — Build the Foundation" />
      <div className="space-y-3">
        <Step num={1} label="Choose your major with intention." tips={["Political Science, Philosophy, History, English, Economics all work — any major works if your GPA is strong", "Double major or minor if it aligns with your legal niche (Biology + PoliSci for health law; Economics + PoliSci for corporate law)", "Students in our research graduated summa cum laude from HBCUs with Business + PoliSci combinations → HLS"]}>
          Law schools accept every major. The key is maintaining a high GPA in a rigorous program and connecting your major to your legal interest. Pick something you'll excel in.
        </Step>
        <Step num={2} label="Join mock trial, Pre-Law Society, and BLSA immediately." tips={["Mock trial: oral argument, legal research, competitive casework — start immediately", "Pre-Law Society: LSAT workshops, alumni panels, pipeline program info", "BLSA (Black Law Students Association): civil rights law community, scholarship info, mentorship"]}>
          These three organizations form your pre-law foundation. Join in the first week of school. The relationships you build here — with upperclassmen who are applying to law school — are among the most valuable you'll make in undergrad.
        </Step>
        <Step num={3} label="Start attending office hours and building professor relationships." tips={["Professor relationships are essential for strong recommendation letters", "Go to office hours even when you don't have questions — just to be known", "Ask if you can RA (research assistant) for them, even in a small way"]}>
          You'll need 2–3 strong recommendation letters for law school applications. Those letters are the most powerful when they come from professors who know your work and your thinking — not just professors whose class you aced.
        </Step>
        <Step num={4} label="Protect your GPA from day one." tips={["Target 3.7+. Freshman year GPA is hard to recover from.", "Law school GPA screens are strict — a 3.5 is a significant disadvantage at HLS, YLS, and CLS", "If you struggle early, get help immediately — don't fall behind"]}>
          GPA is the floor, not the ceiling. But a low floor ends your T14 chances before they start. Students in our research who got into HLS and YLS — from HBCUs and CUNY schools — had exceptional GPAs across the board. Protect yours from day one.
        </Step>
      </div>

      <Divider label="Sophomore Year — Get Real Legal Exposure" />
      <Callout type="warn">
        Nobody in our data walked into a T14 law school without real exposure to how the law works. Legal aid, Capitol Hill, advocacy nonprofits, international fellowships, law firm programs — the form varied, but legal exposure was universal. Start building it this year.
      </Callout>
      <div className="space-y-3">
        <Step num={1} label="Identify your legal niche — pick one and commit." tips={["Civil rights, health law, immigration, criminal defense, environmental law, corporate law, international law, tech/AI law, housing, education law, family law", "'I want to help people' is not a niche. 'I want to work on criminal sentencing reform because...' is a niche", "Your personal statement, your research, and your activities should all point toward the same thread"]}>
          Law schools are looking for students who have thought deeply about a specific problem. Pick the legal issue that makes you angry or curious, and build everything toward it. This decision shapes the next three years.
        </Step>
        <Step num={2} label="Get your first legal exposure this summer." tips={["Local legal aid internships, public defender offices, DA offices", "Nonprofit advocacy organizations in your legal niche", "Capitol Hill or state legislature internship if you're interested in policy/public law", "Even shadowing an attorney or volunteering at a legal clinic counts — real exposure beats none"]}>
          Students in our research did Medical-Legal Partnership internships at legal aid clinics and Capitol Hill internships as undergrads before HLS. Start building legal exposure this summer — not next year.
        </Step>
        <Step num={3} label="Reach out to a professor in your niche area and ask to do research." tips={["Email subject: 'Research Assistant Inquiry — [Your Name], [Class Year]'", "Students in our research did undergraduate research at civil rights and AI law centers before HLS", "Research with a tangible output (conference presentation, paper, policy brief) is the strongest signal"]}>
          Undergraduate research is the most underused pre-law credential. Find a professor whose work intersects with your legal niche and ask to help. Even a semester of RA work builds a meaningful line on your application.
        </Step>
        <Step num={4} label="Apply to summer pipeline programs — TRIALS at Harvard Law, Luce Scholars." tips={["TRIALS Program at Harvard Law: apply in winter/spring of junior year for the summer program", "Luce Scholars: year abroad in Asia — identify it now even if you apply senior year", "Students in our research stacked UCLA Law Fellows + NAACP LDF Earl Warren Scholar + BIICL Fellowship → HLS"]}>
          Begin identifying the pipeline programs you'll apply to. Many have long preparation timelines. The students in our data who used multiple programs started identifying them sophomore year.
        </Step>
      </div>

      <Divider label="Junior Year — The Most Important Year" />
      <Callout type="info">
        Junior year is when LSAT prep begins, pipeline program applications open, and your most impressive summer experience should happen. Everything builds toward the law school application you'll submit senior fall.
      </Callout>
      <div className="space-y-3">
        <Step num={1} label="Begin LSAT prep in the fall — 4–6 months before your target test date." tips={["Target: 172+ for Yale/HLS. 168+ for Columbia/Georgetown. 165+ for strong T14 consideration", "Free: Khan Academy LSAT (partnered with LSAC, adaptive, excellent)", "Top paid: 7Sage LSAT — the most recommended by law school students", "Take at least 20+ full official LSATs under timed conditions before test day"]}>
          The LSAT is the most important number in your application. A 175 from Hunter College outweighs a 160 from Stanford. Start early, take it seriously, and plan for a retake.
        </Step>
        <Step num={2} label="Apply to the TRIALS Program at Harvard Law for the summer." tips={["TRIALS: underrepresented pre-law students → Harvard Law summer → law school prep community", "Students in our research went from Hunter College (CUNY) to Yale Law School via this program", "Apply in winter/spring of junior year for the summer program between junior and senior year"]}>
          TRIALS is one of the most powerful pipeline programs in pre-law. Students in our research went from public universities to Yale Law School — TRIALS was a turning point in the path. Apply.
        </Step>
        <Step num={3} label="Apply to the Marshall-Motley Scholars Program if civil rights law is your niche." tips={["Full tuition + stipend at a T14 law school", "Students in our research used this scholarship to go from Morehouse and public universities to Yale Law", "Apply junior or senior year — or after graduation"]}>
          Named for Thurgood Marshall and Constance Baker Motley. Full scholarship at a T14 law school for students committed to civil rights law. Two people in our dataset used this program to get to Yale Law.
        </Step>
        <Step num={4} label="Make your most impressive summer happen." tips={["Capitol Hill, legal aid clinic, law firm, government agency, advocacy nonprofit", "The summer between junior and senior year is the last major experience before your application", "Students in our research did Senate Judiciary Committee internships as undergrads — this level of experience differentiates T14 applicants"]}>
          Your sophomore and junior year summers are the two most important professional experiences on your application. The summer after junior year is your last chance to add a major credential before applications open.
        </Step>
        <Step num={5} label="Take the LSAT — January, March, or April of junior year." tips={["Earlier is better: leaving room for a retake is essential strategy", "Law schools take your highest score — there's no penalty for retaking", "If your score is below target, schedule a retake immediately for the summer"]}>
          Take the LSAT junior spring. If the score is where you need it, you're set. If not, you have the summer to retake before applications open in the fall.
        </Step>
      </div>

      <Divider label="Senior Year — Application Season" />
      <div className="space-y-3">
        <Step num={1} label="Submit applications September–October — T14 is rolling admissions." tips={["Most T14 schools use rolling admissions — earlier applications get more attention and more scholarship money", "Early Decision (binding) options exist at several T14 schools — consider if you have a clear first choice", "Apply to 8–12 schools: 2–3 reaches (YLS, HLS), 3–4 targets, 2–3 safeties"]}>
          T14 admissions is rolling. Applying in September is meaningfully better than applying in December. Have your materials ready before applications open.
        </Step>
        <Step num={2} label="Write a personal statement with a specific legal niche — not a resume in prose." tips={["2 pages maximum", "Opens with a specific scene or moment, not a generic statement about justice", "Shows a through-line: early experience → undergrad activities → law school goal → legal niche", "Does NOT repeat your resume"]}>
          Your personal statement is the place where your story becomes a narrative. The students who got into HLS and YLS had personal statements built around a specific legal problem — not a general desire to help people.
        </Step>
        <Step num={3} label="Submit a diversity statement if applicable." tips={["Optional at most schools — but used by nearly everyone with a compelling personal background", "Tells the story your personal statement doesn't have space for", "Explains how your background informs your approach to law and your legal niche"]}>
          The diversity statement is your second page of personal narrative. If your background story is relevant to why you want to practice law — use it.
        </Step>
        <Step num={4} label="Apply to SEO Law Fellows if you're post-admission." tips={["SEO Law Fellows: paid summer associate experience at BigLaw before 1L", "Students in our research did SEO Law Fellows at major BigLaw firms before T14 law schools", "Apply in senior year or after admission — not before"]}>
          SEO Law Fellows is one of the most practical pre-law school programs: you work at a major BigLaw firm the summer before 1L. It gives you firm exposure, income, and a network before law school starts.
        </Step>
      </div>

      <Divider label="The Gap Year — Stronger, Not Weaker" />
      <div className="space-y-3">
        {[
          { title: "Luce Scholars Program", body: "Year abroad in Asia. Students in our research spent their Luce year in Indonesia doing democracy and civil society work — then used that international experience at Yale Law. Apply senior year of undergrad." },
          { title: "NYC Urban Fellowship", body: "Year in NYC government. Students in our research did the NYC Urban Fellowship in government policy and legislative affairs before YLS. A year in government deepens every law school application." },
          { title: "Advocacy nonprofit work", body: "Students in our research reached Director-level titles at labor and workers' rights nonprofits before HLS. Organizations in your legal niche — civil rights, health, immigration, housing — are ideal. Reach a real title and do real work." },
          { title: "Paralegal at a BigLaw firm", body: "Builds legal writing, client work, and firm exposure before law school. A year as a paralegal at a top firm teaches you what law practice actually looks like." },
          { title: "Research position at a law school clinic or policy institute", body: "Faculty research roles or policy institute fellowships deepen your academic credentials and often lead to writing with professors who then write you a recommendation letter." },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1E3A5F] flex items-center justify-center text-xs font-bold text-white">{i + 1}</div>
            <div>
              <p className="font-semibold text-[#0D0D0D] text-sm">{item.title}</p>
              <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      <Divider label="What to Avoid" />
      <div className="space-y-3">
        {[
          { title: "Applying without a defined legal niche.", body: "'I want to help people' or 'I've always been interested in justice' is not a personal statement — it's a placeholder. Pick a specific area of law, build toward it, and write about it specifically." },
          { title: "Skipping the LSAT retake when your score is below target.", body: "Law schools take your highest score. There is no penalty for retaking. If you scored 165 and your target is 172, retake it. The difference of a few points is the difference between T14 and not." },
          { title: "Applying late.", body: "T14 admissions is rolling. Applying in December instead of September can cost you scholarship money and admission slots. Have your materials done before applications open." },
          { title: "Relying on one credential.", body: "Every T14 admit in our data had multiple signals: GPA + LSAT + legal exposure + pipeline program + research or leadership. One strong thing is not enough. Stack the credentials across four years." },
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
        <Link href="/careers/law-school" className="inline-flex items-center gap-2 px-5 py-3 bg-[#1E3A5F] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer">
          ← What is Law School?
        </Link>
        <Link href="/careers/law-school/programs" className="inline-flex items-center gap-2 px-5 py-3 border border-[#E5E5E0] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:border-[#1E3A5F] transition-colors cursor-pointer">
          Pipeline Programs <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
