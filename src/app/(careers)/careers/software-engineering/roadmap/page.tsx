import Link from "next/link";
import { ArrowRight } from "lucide-react";

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-bold text-[#0D0D0D] mt-10 mb-3" style={{ fontFamily: "'Libre Bodoni', serif" }}>
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[#374151] text-sm leading-relaxed mb-4">{children}</p>;
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base font-bold text-[#0D0D0D] mt-6 mb-2">{children}</h3>;
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-4 border-[#1A1A2E] bg-[#EEF2FF] px-4 py-3 rounded-r-lg my-4">
      <p className="text-sm text-[#374151] leading-relaxed">{children}</p>
    </div>
  );
}

export default function SWERoadmapPage() {
  return (
    <>
      <section className="bg-[#1A1A2E] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/careers/software-engineering" className="inline-flex items-center gap-1.5 text-sm text-[#9CA3AF] hover:text-[#F4A825] transition-colors mb-6 cursor-pointer">
            ← Software Engineering
          </Link>
          <p className="text-[#9CA3AF] text-xs font-semibold uppercase tracking-widest mb-4">SWE Roadmap</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#FAFAF7] leading-[1.05] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
            Year-by-Year SWE Roadmap.
          </h1>
          <p className="text-[#9CA3AF] text-base leading-relaxed max-w-xl">
            Freshman through senior year. What to do, when to do it, and what's at stake each summer.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        <Note>
          The internship pipeline is real: freshman internship → sophomore internship → junior internship → full-time offer. Every summer builds the next one. The students who understand this in September of freshman year are the ones who walk into senior year with offers already signed.
        </Note>

        <H2>High School — Build Before You Arrive</H2>
        <P>The engineers who land the best opportunities in college are almost always the ones who started building in high school. Not because the credential matters, but because the habit does.</P>

        <H3>What actually matters</H3>
        <ul className="list-disc list-inside space-y-2 text-sm text-[#374151] mb-6 ml-2">
          <li><strong>Build something real.</strong> An app, a website, a game, a hardware project. Even small-scale. The habit of shipping something — not just learning — is what separates people.</li>
          <li><strong>Excel at math.</strong> Linear algebra, probability, and discrete math are the foundations of CS. Strong math signals in high school (AMC, AIME, national competitions) show up consistently on the profiles of top engineers.</li>
          <li><strong>Get early exposure to CS competitions.</strong> USACO, ACSL, hackathons, FIRST Robotics — these develop the problem-solving instinct that technical interviews test.</li>
          <li><strong>Lead something.</strong> It doesn't have to be technical. A club, a team, a community initiative. Leadership at any level shows up on profiles across the board.</li>
        </ul>

        <H2>Freshman Year — Start Immediately</H2>
        <P>Freshman year feels like adjustment. It is. But the students who start positioning themselves in September — not January, not sophomore year — are the ones who have options by junior year.</P>

        <H3>Apply to early diversity programs in August and September</H3>
        <P>This is the single highest-leverage action you can take as a freshman. Google STEP, Microsoft New Technologist, Meta University, and Amazon Propel are programs specifically designed for freshmen and sophomores from underrepresented groups. They exist to open doors that recruiting pipelines don't naturally open. Multiple engineers at Google and Meta got their start through STEP as freshmen.</P>
        <P>Applications open in August and September — before most people have been to their first class. Apply immediately.</P>
        <P>See the full list on the <Link href="/careers/software-engineering/programs" className="font-semibold text-[#1A1A2E] underline underline-offset-2 hover:text-[#F4A825] transition-colors">Programs page</Link>.</P>

        <H3>Academic priorities</H3>
        <ul className="list-disc list-inside space-y-2 text-sm text-[#374151] mb-6 ml-2">
          <li>Data Structures and Algorithms — the foundation of every technical interview. Start early.</li>
          <li>Discrete Math and Calculus — required prerequisites and the base for everything more advanced.</li>
          <li>Your first CS project course — build something that goes beyond homework assignments.</li>
        </ul>

        <H3>Build your portfolio from day one</H3>
        <P>Set up a GitHub account. Start committing code — anything you're working on, any project you start. By the end of freshman year you should have 2–3 projects on GitHub with READMEs. Not polished products. Real attempts at building something.</P>

        <H3>Join one technical club</H3>
        <P>Find your school's ACM chapter, coding club, hackathon team, or CS-adjacent organization. Apply to it in the first weeks of school. These clubs host LeetCode sessions, have alumni in tech, and connect you to people ahead of you on the same path. See the <Link href="/careers/software-engineering/clubs" className="font-semibold text-[#1A1A2E] underline underline-offset-2 hover:text-[#F4A825] transition-colors">Clubs page</Link> for what to look for.</P>

        <H3>If you're eligible, TA a CS course</H3>
        <P>TA experience shows up consistently on the profiles of engineers at top companies. It builds your relationship with faculty, deepens your technical knowledge, and signals that you understand the material well enough to teach it. Look for TA opportunities starting freshman spring.</P>

        <Note>
          If you can't land a tech internship freshman summer — build something. Start a personal project, contribute to open source, do freelance work, participate in an MLH Fellowship. Don't let the summer be blank.
        </Note>

        <H2>Sophomore Year — Get Real Experience</H2>
        <P>Sophomore year is when the recruiting gets serious. Your freshman year experience — even if it was a small project, a student org, or a non-FAANG internship — is now your credential. Use it.</P>

        <H3>Internship target: any tech company</H3>
        <P>The goal sophomore summer is to get a real software engineering internship. It doesn't need to be FAANG. A startup where you're writing production code, a mid-size tech company, a research lab — anything where you're building something real. The sophomore internship is what gets you the junior internship that gets you the offer.</P>
        <P>Google STEP and Microsoft Explore are most competitive sophomore year. Apply to those and apply broadly everywhere else. The earlier you submit, the better your chances.</P>

        <H3>Start LeetCode now</H3>
        <P>Junior year recruiting starts in August and September of junior year. That means your technical interview preparation needs to begin sophomore year — not junior year. Work through easy and medium problems consistently. Build the muscle. 150+ problems by the start of junior year is a reasonable floor.</P>

        <H3>Go deeper in your clubs and projects</H3>
        <P>Take on more responsibility in the organizations you joined freshman year. Lead a project, manage a team, start something that didn't exist. The sophomore year club record is what you bring into junior year recruiting conversations.</P>

        <H3>Build your referral network</H3>
        <P>Start reaching out to engineers at companies you want to work at. Coffee chats, informational interviews, LinkedIn messages. The relationships you build sophomore year become the referrals you use in junior year recruiting. See the <Link href="/college/internships" className="font-semibold text-[#1A1A2E] underline underline-offset-2 hover:text-[#F4A825] transition-colors">Internships guide</Link> for how to do this effectively.</P>

        <H2>Junior Year — The Critical Summer</H2>
        <P>This is the year that determines where you start after graduation. Every engineer we studied had an internship the summer after junior year. In almost every case, that internship led directly to a full-time offer.</P>

        <H3>Applications open in August. Apply the day a role posts.</H3>
        <P>Top tech companies — Google, Meta, Amazon, Microsoft, Apple, Stripe, Airbnb — close their junior internship applications in October or November for the following summer. Some close sooner. Have your resume finalized before school starts. Have your referrals lined up. When a role opens, apply within 24 hours.</P>

        <H3>LeetCode target: 150+ problems minimum</H3>
        <P>Medium difficulty, patterns over memorization. The technical interview at a top company will test your ability to recognize problem types and apply algorithms cleanly. Practice until a dynamic programming or graph problem doesn't feel unfamiliar — it feels like a category you've seen before.</P>
        <P>See the full interview prep guide on the <Link href="/careers/software-engineering/interviews" className="font-semibold text-[#1A1A2E] underline underline-offset-2 hover:text-[#F4A825] transition-colors">Interviews page</Link>.</P>

        <H3>Use your referral network</H3>
        <P>The coffee chats and informational interviews from sophomore year matter now. Reach out to your contacts when roles open. A referral from someone inside the company dramatically increases the likelihood of getting an interview. Maintain the relationships before you need the favor.</P>

        <H3>Target the team, not just the company</H3>
        <P>It's much harder to switch teams as a new grad than to pick the right team at the intern stage. Research the teams you're interviewing for. Know what they work on. Ask about the team in your interviews. The first team you're on shapes your trajectory more than the company name.</P>

        <Note>
          If junior summer doesn't go as planned: don't let it be blank. Build a meaningful project, contribute to open source, find a startup internship. Arrive at senior year with something real to talk about regardless of where it came from.
        </Note>

        <H2>Senior Year — Execute</H2>
        <P>If you got a return offer from junior summer: evaluate the team, the comp, and the growth potential carefully before you accept. Your first team shapes your career more than the company name. Then finish strong and start well.</P>

        <P>If you didn't get a return offer: recruit broadly in September and October for full-time SWE roles. Your junior year internship experience plus your projects plus your GPA are still strong signals. Apply to companies of all sizes — startup to enterprise. Cast a wide net.</P>

        <H3>The Master's as a path corrector</H3>
        <P>If your recruiting didn't go the way you wanted, a strong Master's program resets your pipeline access. Georgia Tech OMSCS, Carnegie Mellon, Stanford, UIUC, and UT Austin all have strong recruiting relationships with top companies. The MS is not required — but it's a real option if undergrad recruiting didn't land where you wanted.</P>

        <H3>Non-linear paths work</H3>
        <P>Some engineers went Capital One → Twitter → Meta over three years. Others started at a regional tech company and moved to FAANG two years in. Every step built the next one. The path is not a single gate — it's a series of doors, each one opened by what you did before it.</P>

        <div className="mt-12 flex flex-col sm:flex-row gap-3">
          <Link
            href="/careers/software-engineering/programs"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#1A1A2E] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer"
          >
            Key Programs & Fellowships <ArrowRight size={14} />
          </Link>
          <Link
            href="/careers/software-engineering/interviews"
            className="inline-flex items-center gap-2 px-5 py-3 border border-[#E5E5E0] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:border-[#1A1A2E] transition-colors cursor-pointer"
          >
            Interview Prep Guide <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
