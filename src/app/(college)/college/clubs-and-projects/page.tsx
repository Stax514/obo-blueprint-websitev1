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
  return (
    <h3 className="text-base font-bold text-[#0D0D0D] mt-6 mb-2">
      {children}
    </h3>
  );
}

function CareerCTA() {
  return (
    <div className="mt-12 p-5 rounded-xl border-2 border-[#0D0D0D] bg-white">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#6B6B6B] mb-1">Career-specific plans</p>
      <p className="text-base font-semibold text-[#0D0D0D] mb-1">Know what field you're going into?</p>
      <p className="text-sm text-[#6B6B6B] mb-4">We break down exactly which clubs and projects are worth pursuing based on your career path.</p>
      <Link
        href="/careers"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D0D0D] text-[#FAFAF7] text-sm font-semibold rounded-md hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer"
      >
        Explore career plans
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}

export default function ClubsAndProjectsPage() {
  return (
    <>
      <section className="bg-[#1B4332] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">College Guide</p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FAFAF7] leading-[1.05] mb-4"
            style={{ fontFamily: "'Libre Bodoni', serif" }}
          >
            Clubs & Projects.
          </h1>
          <p className="text-white/60 text-base leading-relaxed max-w-xl">
            The experiences that make you competitive — and the ones that keep you grounded.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        <H2>Why this matters.</H2>
        <P>Your degree tells employers you showed up and passed. Your clubs and projects tell them what you actually care about and what you can do. Those are two different things.</P>
        <P>By sophomore and junior year, everyone has the same GPA range and the same major. What separates candidates in competitive internship pools is experience doing real work — not grades, not the school name, not the clubs you listed. The work.</P>
        <P>Clubs and projects are how you get that experience before anyone will hire you — and that matters most freshman year, when your resume is still thin. Most freshmen don't have internship experience yet. The ones who joined the right clubs in September come into spring recruiting with something real to talk about. That's the difference between landing a sophomore internship and not.</P>

        <H2>Apply the week you get on campus.</H2>
        <P>This is not an exaggeration. Most professional clubs on campus recruit in the first few weeks of fall semester. If you wait until October, many of them have already closed applications. If you wait until spring, you've lost your first shot entirely.</P>
        <P>The students who walk into sophomore year with internship offers are the ones who applied to clubs during orientation week. That is how early it starts. Get on campus, find the clubs that matter for your field, and apply immediately.</P>
        <P>This is the fastest way to get experience as a freshman when no company will hire you yet. The club gives you the work, the skills, and the resume line. The resume line gets you the internship. The internship gets you the next one. It starts here.</P>

        <H2>How to find clubs at your school.</H2>
        <P>Every university has a student organizations database — usually on the student affairs or campus life section of your school's website. Most schools also host an activities fair at the start of fall semester where clubs set up tables and you can learn about dozens of organizations in one afternoon. Go to that fair. Talk to people. Take the flyers.</P>
        <P>Beyond the fair:</P>
        <ul className="list-disc list-inside space-y-2 text-sm text-[#374151] mb-6 ml-2">
          <li>Search your school's student org directory online — filter by category or keyword</li>
          <li>Ask upperclassmen in your major what they're involved in</li>
          <li>Check department bulletin boards and email listservs — smaller clubs and research groups often recruit through those</li>
          <li>Ask your academic advisor what past students in your major have joined</li>
        </ul>
        <P>You won't find everything at once. Keep your eyes open throughout freshman year.</P>

        <H2>How to get in — clubs at big schools are competitive.</H2>
        <P>At large universities, the best professional clubs are selective. They review resumes, ask for applications, and hold multiple rounds of interviews. Treat it like a job application — because it is.</P>

        <H3>Do your homework before you apply</H3>
        <P>Read everything on their website. Understand what they do, who their clients are, what past members have gone on to do. Know their focus and be able to speak to why it aligns with what you care about.</P>

        <H3>Go to the info session</H3>
        <P>Almost every club hosts one before applications open. Show up. This is where you learn how the club actually operates, meet the people running it, and get a real sense of whether it's right for you. It also signals genuine interest — the people evaluating your application often remember who was in that room.</P>

        <H3>Talk to current members</H3>
        <P>Reach out on LinkedIn or introduce yourself at the info session. Ask them what they've worked on, what they've gotten out of it, what they look for in applicants. But don't treat it like a networking transaction — get to know them the same way you'd get to know anyone you met on campus. Ask real questions. Be curious about them as people, not just as a door to walk through.</P>
        <P>Trying too hard can work against you. These are people looking for someone they actually want to spend time with — not the most polished version of you, the real one. Genuine interest reads differently than rehearsed interest, and the people doing the selecting can tell. Be yourself, put your best foot forward, and trust that the right club will find you.</P>

        <H3>Put your best foot forward</H3>
        <P>Tailor your application to the club specifically. Practice your interview answers out loud. Treat every round seriously, even the first one.</P>

        <H2>What to join.</H2>

        <H3>Professional clubs</H3>
        <P>These are organizations that do real client work, often paid, and operate more like a small firm than a campus group. They're some of the most valuable things you can join regardless of your major.</P>
        <P><strong>Consulting clubs</strong> are the best example. Most universities have at least one. Members work in teams to solve real business problems for actual clients — companies pay the club to analyze their market, develop a go-to-market strategy, figure out how to reach younger consumers, improve their operations, or build out a new product direction. You walk away with a deliverable you worked on, a client you can reference, and problem-solving skills that transfer to almost any field.</P>
        <P>Other professional clubs follow the same model — dev clubs that build software for companies, design orgs with client portfolios, data clubs that run analysis for real organizations, finance clubs that manage actual funds or pitch real investments. Some clubs help companies understand how to reach Gen Z audiences. Others build algorithms or automation tools for startups. The work varies but the value is the same: you're doing something real, for someone who asked for it, that you can put on your resume.</P>
        <P>These clubs often have competitive applications. Apply to them. If you don't get in the first time, try again.</P>

        <H3>Interest and community clubs</H3>
        <P>Join at least one thing that has nothing to do with your career. A concert club if you're into music. A dance team. An art collective. An intramural sports league. A cultural organization. A faith community. These are where you meet people you wouldn't otherwise meet, decompress, and stay connected to who you are outside of the job you're working toward.</P>
        <P>The balance to aim for: one or two clubs that build your professional profile, and one or two that keep you human.</P>

        <P>For specific clubs worth joining based on what you want to do after graduation, go to the <Link href="/careers" className="font-semibold text-[#1A1A2E] underline underline-offset-2 hover:text-[#F4A825] transition-colors">Career Plans</Link> page.</P>

        <H2>If your school doesn't have what you need.</H2>
        <P>Build it. Starting a club from scratch is legitimate experience. You identified a gap and organized people around it — that is exactly what employers and graduate programs look for. You don't need a budget or a faculty advisor to get started. You need a clear purpose and a small group of people willing to show up.</P>

        <H2>Projects — and why you might already be a founder.</H2>
        <P>A project is anything you built, started, or organized that solves a real problem. It doesn't need to be affiliated with a club, a class, or a company. It just needs to be real.</P>
        <P>Here's how to think about it: look around at a problem that actually bothers you. Something in your school, your community, your field, your daily life. Now ask — is there a way to solve this? Can you build something, organize something, create something that makes it better? That is a project. And if people start using it, you're a founder.</P>
        <P>This is not a stretch. If you build an app and get users, you founded something. If you create a platform that connects students to tutors in your area and 200 people sign up, you're a founder. If you organize a student marketplace, run an event series, launch a newsletter with readers, or build a tool that your classmates actually use — you built something. Put it on your resume that way.</P>

        <H3>What a project can look like across any major</H3>
        <ul className="list-disc list-inside space-y-2 text-sm text-[#374151] mb-6 ml-2">
          <li>Built an app that helps students find study groups on campus</li>
          <li>Created a social media account around mental health resources that grew a real following</li>
          <li>Organized a monthly speaker series connecting first-gen students with professionals in their field</li>
          <li>Built a website for a local small business that had no online presence</li>
          <li>Ran a tutoring service for high school students in your hometown over the summer</li>
          <li>Designed and sold merchandise to raise money for a cause</li>
          <li>Wrote and published a newsletter on policy issues in your area</li>
          <li>Built a dashboard tracking something your community cared about</li>
          <li>Started a podcast interviewing people in a field you want to enter</li>
        </ul>
        <P>The major doesn't matter. The skill set doesn't matter. What matters is that you identified something worth solving and you did something about it.</P>

        <H3>You don't need to know how to code</H3>
        <P>Tools like Claude, Cursor, and other AI-assisted builders let you create apps, websites, and automations without writing a line of code. You can describe what you want to build, get working code back, and ship something real. If you have an idea, the tools exist right now to build it. Non-technical students are building real products today with these tools — there is no excuse to wait.</P>

        <H3>Find a friend and build together</H3>
        <P>Some of the best projects come out of two people sitting in a dorm room with a problem they both care about. One person brings the idea, one brings the execution, or you both figure it out together. Look around at the people you meet freshman year. Some of them are going to build things. Be one of those people.</P>

        <H2>What this looks like by year.</H2>
        <ul className="space-y-4 text-sm text-[#374151] mb-6">
          <li><strong>Freshman year:</strong> Find one professional club and one interest club. Apply the week you arrive. Also start thinking about a project — something small, something you could ship by the end of the year.</li>
          <li><strong>Sophomore year:</strong> Go deeper in your club. Take on more responsibility. If you had a project, keep building it. If you haven't started one, start now.</li>
          <li><strong>Junior and senior year:</strong> You should be leading something, building something, or doing something with enough substance to fill a real conversation in a final-round interview. By now your projects and clubs should connect to your internship experience and show a clear direction.</li>
        </ul>

        <H2>A note on leadership.</H2>
        <P>Leadership matters, but it's not the goal. The goal is experience. If you end up leading something, that's a result of doing good work and being around long enough — not something to chase for a resume line. Relevant experience as a member of an organization is valuable. A leadership title with nothing behind it is not.</P>

        <H2>Interview practice starts here.</H2>
        <P>Many clubs on campus require interviews to get in. Practice before you need to. Sit down with a friend, use an AI tool, record yourself answering out loud. Get comfortable talking about what you've done and why you did it.</P>
        <P>The students who are ready for competitive club interviews in October of freshman year are the same ones who are ready for competitive job interviews junior year. It's the same skill, built early.</P>

        <CareerCTA />
      </section>
    </>
  );
}
