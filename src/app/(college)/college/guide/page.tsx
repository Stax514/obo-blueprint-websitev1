"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tabs = [
  { id: "before", label: "Before You Arrive", shortLabel: "Before" },
  { id: "freshman", label: "Freshman Year", shortLabel: "Freshman" },
  { id: "sophomore", label: "Sophomore Year", shortLabel: "Sophomore" },
  { id: "junior", label: "Junior Year", shortLabel: "Junior" },
  { id: "senior", label: "Senior Year", shortLabel: "Senior" },
];

function CareerCTA() {
  return (
    <div className="mt-12 p-5 rounded-xl border-2 border-[#0D0D0D] bg-white">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#6B6B6B] mb-1">Career-specific plans</p>
      <p className="text-base font-semibold text-[#0D0D0D] mb-1">Know what field you're going into?</p>
      <p className="text-sm text-[#6B6B6B] mb-4">We have dedicated 4-year plans for specific careers — exactly what to do each year to get there.</p>
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

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-4 border-[#F4A825] bg-[#FDF8EC] px-4 py-3 rounded-r-lg my-4">
      <p className="text-sm text-[#6B6B6B] leading-relaxed">{children}</p>
    </div>
  );
}

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

function BeforeTab() {
  return (
    <div className="prose-content">
      <p className="text-[#6B6B6B] text-sm leading-relaxed mb-8 max-w-2xl">
        Most people spend the summer before college doing nothing with it. A few hours of preparation now will open doors you won't even know exist until sophomore year.
      </p>

      <H2>Why you're here.</H2>
      <P>College is where you have fun, meet people from everywhere, grow into yourself, and build a network that will serve you for the rest of your life. All of that is real and all of it matters.</P>
      <P>But college is also about getting a job. That's the part nobody says out loud — and it's the most important part.</P>
      <P>It doesn't have to happen right after graduation. For some people it's grad school first, then the career. That's a valid path. But in this economy, you need to be thinking about what you want to do when you leave — what you want to major in, what roles exist in that field, what the path actually looks like. Every professional and educational decision you make in college should connect back to that. Not because college is only a career pipeline, but because the students who leave with options are the ones who were intentional about it while they were there.</P>
      <P>Too many people come out of college saying it wasn't worth it. A lot of the time, the real issue isn't college — it's that nobody guided them through it. No one in their family had gone. There was no access to the information that tells you which clubs to join, when internship applications open, how to talk to a professor, what a referral actually does. The guardrails that some people grow up with just weren't there.</P>
      <P>That's what this is. We're not here to tell you what to do with your life — what you pursue is entirely your choice. We're here to give you the blueprint to do it well.</P>

      <H2>Build your LinkedIn before you step on campus.</H2>
      <P>Add everything you did in high school — clubs, leadership positions, awards, programs, anything. Don't leave it blank because you think you don't have enough yet. You do. Write a bio that talks about what you care about and where you're headed. If you wrote personal insight questions or a personal statement for your college applications, use those as your starting point — you already did the work of articulating who you are and what drives you. Carry that into your LinkedIn.</P>

      <H2>Start your resume now.</H2>
      <P>Fill it out with your high school experience — clubs, leadership roles, awards, extracurriculars, any work you did. This is your foundation. As you build experience in college you'll replace things, but right now having a clean, well-formatted resume before freshman year puts you ahead of most of your classmates. We have a template — use it, make a copy, and keep it updated.</P>
      <Link href="/college/resources" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A1A2E] hover:text-[#F4A825] transition-colors mb-6">
        Check out the resume template <ArrowRight size={13} />
      </Link>

      <H2>Reach out to people at your school doing careers that interest you.</H2>
      <P>Go on LinkedIn. Search your university. Filter by people working in fields that look interesting. Send a short, direct message — introduce yourself, say you're an incoming freshman, tell them what you're curious about, and ask if they'd be willing to share how they got there. Keep it to three sentences.</P>
      <P>Start with people who share something with you — same hometown, same background, same first-generation experience. They're more likely to respond. That said, reach out to anyone doing work you want to understand. The goal is to learn what these careers actually look like day to day.</P>
      <Link href="/college/resources" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A1A2E] hover:text-[#F4A825] transition-colors mb-6">
        We have outreach templates to help <ArrowRight size={13} />
      </Link>

      <Note>
        <strong>A note on direction:</strong> You don't need your career figured out before you arrive. But pick something that interests you and start moving toward it. You gain skills even from experiences you end up not liking — indecision costs you more than a wrong turn does.
      </Note>

      <Note>
        <strong>On what's ahead:</strong> College is unlike anything before it. You're about to meet people from everywhere, try things you've never had access to, and change in ways you can't fully predict right now. Let that happen. Go in open — to new experiences, new people, new ways of thinking about yourself and the world. There is no other time in your life quite like this one.
      </Note>

      <CareerCTA />
    </div>
  );
}

function FreshmanTab() {
  return (
    <div className="prose-content">
      <p className="text-[#6B6B6B] text-sm leading-relaxed mb-8 max-w-2xl">
        Freshman year is about adjustment and foundation. The goal is not to have everything figured out — it's to set yourself up so that sophomore year you're actually building something.
      </p>

      <H2>Give yourself time to adjust. Then start building.</H2>
      <P>The adjustment is real. The pace is different, the independence is different, everything shifts at once. Give yourself a semester to find your footing. But use that time to start positioning yourself — even slowly.</P>

      <H2>Pick a direction and pursue it. Don't let indecision keep you from getting started.</H2>
      <P>You don't need certainty. What you need is movement. Pick something that interests you, go try it, and get experience. If you figure out it's not for you, you've still built skills you wouldn't have otherwise. That's not a setback — that's how you narrow in. The worst thing you can do is stay stuck because you're not sure. Anything that genuinely interests you is worth pursuing. Do something.</P>
      <P>One thing that doesn't get talked about enough: different careers mean different lives. Finance, tech, humanities, medicine — they pay differently, the hours are different, the culture is different. How much you want to earn and how you want to spend your time should be part of how you think about this, not an afterthought.</P>

      <H2>Start looking for summer opportunities the moment you arrive.</H2>
      <P>Internships and research positions for the following summer start posting in August and September — before you've been to your first class. This is true across fields. Technical internships, research fellowships, nonprofit work, education programs — opportunities in almost every area open early in the fall. The students who land strong sophomore year summers are usually the ones who started looking in the first weeks of school, not in the spring when most people finally pay attention. Get into the habit of checking early, every year. The whole four years.</P>

      <H2>Experience is the thing. Everything else supports it.</H2>
      <P>A strong GPA matters. A good resume matters. Interview skills matter. But all of those exist to help you get experience — and experience is what actually makes you competitive. Internships, research, real projects, meaningful work in the community. Every summer and every year should have something to show for it. The students who graduate with options are the ones who never let a semester go by without building something real.</P>

      <H2>Join clubs that give you real experience.</H2>
      <P>If your school has professional clubs — consulting, tech, product, engineering, entrepreneurship — those are worth prioritizing. They give you skills and connections you can't get in the classroom. Beyond that, pick at least one club tied to who you are: a cultural organization, a social impact group, something that keeps you grounded. You don't need leadership freshman year. What matters is showing up, doing meaningful work, and building real relationships.</P>
      <P>Know that some clubs on campus require interviews to join. Practice before you arrive — with friends, with AI tools. Get comfortable talking about yourself and your interests before you step on campus.</P>

      <H2>If the experience you need doesn't exist, create it.</H2>
      <P>If your school doesn't have the club you're looking for, start one. If that feels like too much, find two or three people and take on a project together — build something, solve a problem, do work that's related to where you want to go. Tsadiku joined a consulting club that gave him client experience outside the classroom. Adiyah did direct work with schools. Neither path was identical, but both produced something real to point to.</P>

      <H2>If you're going into a technical field, internship applications are already open when you arrive.</H2>
      <P>By the time fall semester starts, programs like Google STEP, Microsoft Explore, Meta University, and NVIDIA Ignite have already posted. These are built for freshmen and sophomores. Apply early — the earlier the better.</P>

      <H2>If you're going into research, humanities, or social impact, start building relationships with professors and graduate students now.</H2>
      <P>Go to office hours — not just when you're stuck, but when you're curious. Read what your professors have written. Talk to graduate students about what their research actually involves day to day. These relationships lead to research opportunities, funding, and access to networks you can't find any other way. If your goal is eventually a PhD or graduate work, being in a research environment as early as freshman year changes your trajectory.</P>

      <H2>Build your resume to college standards and start practicing your pitch.</H2>
      <P>Your high school experiences stay on your resume for now. As you join clubs and take on projects, you'll replace them. Keep the document updated every semester. Practice explaining who you are and what you're working toward — you'll use this at career fairs, in networking conversations, and with professors.</P>
      <Link href="/college/resources" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A1A2E] hover:text-[#F4A825] transition-colors mb-6">
        Resume template <ArrowRight size={13} />
      </Link>

      <H2>Start practicing for interviews now.</H2>
      <P>Most people wait until they have an interview scheduled to prepare. By then it's too late to get good. Practice with friends, with AI tools, with anyone willing to give you honest feedback. Get comfortable talking about your experience, your interests, and how you think through problems. This compounds — the earlier you start, the better you'll be when it counts.</P>

      <H2>Make friends. Seriously.</H2>
      <P>Be deliberate about it, especially early on. Some of the most important relationships of your life start in the first few weeks of freshman year — your roommate, the people on your floor, the person you sat next to in the first class you walked into.</P>
      <P>Go to events. Show up to club meetings for things that actually interest you. Introduce yourself to people in your dorm. Go to parties. Go to the gym — most campuses have leagues and pickup games and group fitness classes where you meet people just by showing up regularly. Join a recreational sports league. None of this requires you to be outgoing by nature. It just requires you to be present and willing to say hello first.</P>
      <P>The friends you make in college become your network, your collaborators, your support system, and in some cases your co-founders. These are the people who will be at your wedding. Lifelong friendships that you don't find anywhere else — not at work, not after college, not the same way. Invest in those relationships with the same intention you bring to everything else.</P>

      <CareerCTA />
    </div>
  );
}

function SophomoreTab() {
  return (
    <div className="prose-content">
      <p className="text-[#6B6B6B] text-sm leading-relaxed mb-8 max-w-2xl">
        Freshman year you were finding your footing. Sophomore year the question changes — not what do I want to do, but what am I actually doing to get there.
      </p>

      <H2>This is when real experience starts to matter.</H2>
      <P>The difference between students who land competitive opportunities junior year and those who don't usually comes down to what they built sophomore year.</P>

      <H2>Get experience that's related to where you want to go.</H2>
      <P>For STEM: pursue a software engineering internship this summer. A technical internship — even if your end goal is product management or another non-engineering role — builds credibility that will matter for the next two years. Programs like Google STEP, Microsoft Explore, and Meta University are specifically designed for sophomores. Applications open in August and September, before your semester even starts. Be ready.</P>
      <P>For humanities and research paths: this is the year to go deeper with professors and graduate students you connected with freshman year. Apply for undergraduate research positions, paid fellowships, and on-campus programs. Schools with Mellon Mays partnerships offer undergraduate research funding that isn't tied to the university — it's worth understanding early whether your school has access to that. Look for ways to do work that connects what you're studying to something real outside the classroom. Adiyah worked directly in schools during her time at Yale. That kind of work — where you're applying what you're learning in a real environment — is what builds a record that means something.</P>

      <H2>Take on more in your clubs, but be intentional about which ones.</H2>
      <P>A simple rule of thumb: one cultural or social impact club, one professional club — consulting, tech, engineering, whatever fits your path. That combination keeps you connected to your community while building the skills that will show up on your resume and in your interviews.</P>
      <P>If you've been showing up consistently, leadership opportunities will come. Take them when they make sense — leading a project, running an event, managing a team. You don't need a president title. What matters is doing work that has real impact and that you can speak to clearly.</P>

      <H2>Start having real conversations with people in fields you want to enter.</H2>
      <P>LinkedIn messages, cold emails, coffee chats — go into these with the goal of learning, not asking for anything. Ask how they got there, what a typical week looks like, what they'd do differently. You can also ask for a mock interview — most people who've been through the process are willing to help if you ask directly.</P>
      <P>Be intentional about who you reach out to. Build a schedule — specific companies you care about, specific roles you're tracking — and work through it deliberately. A focused, thoughtful outreach to 15 people at companies you actually want to work at is far more effective than spraying generic messages everywhere.</P>
      <P>On the tactical side: the Apollo.io Chrome extension lets you pull emails directly from LinkedIn profiles. Use it to send cold emails instead of relying only on LinkedIn DMs. Build a template so the process is repeatable, then personalize each message so it doesn't read like one. The relationships you build this year become your referral network junior year.</P>

      <H2>Document everything.</H2>
      <P>Start a running Google doc — every project, every role, every event you led, every paper you wrote. College moves fast and memory is unreliable. If you're applying to graduate school or fellowships later, you'll want a detailed record of what you actually did. The habit is worth building now.</P>

      <H2>Keep practicing for interviews.</H2>
      <P>Weekly. With friends, with AI, with professionals if you can find them. The people who interview well aren't more qualified — they've had more reps. Every practice conversation makes the next one easier.</P>

      <H2>On GPA: try your best, but understand your priorities.</H2>
      <P>Grades matter to a point. Past that point, experience matters more. Know which season you're in. There will be weeks where you have to make a call. Make it consciously.</P>

      <CareerCTA />
    </div>
  );
}

function JuniorTab() {
  return (
    <div className="prose-content">
      <p className="text-[#6B6B6B] text-sm leading-relaxed mb-8 max-w-2xl">
        This is the year that determines where you start after graduation. Take it seriously starting the day you arrive back on campus in the fall.
      </p>

      <H2>The internship you land this summer changes everything.</H2>
      <P>Not senior year. Junior year. The internship you land this summer — and whether you convert it to a return offer — is the single biggest factor in how your senior year goes. If you get the internship and earn the return offer, senior year looks completely different. You're not scrambling for a job. You're finishing strong, exploring, and closing out college on your terms.</P>

      <H2>Internship applications open in August. Apply the day a role posts.</H2>
      <P>The window is narrow and it moves fast. Have your resume finalized before school starts. Have your referrals identified. When a role opens at a company you want, apply within 24 hours — early applicants have a measurable advantage in most of these processes. Scout LinkedIn daily. Set up alerts. Treat tracking application openings like a part-time job through the fall.</P>

      <H2>Your referral network from sophomore year matters now.</H2>
      <P>Stay in touch with the people you had coffee chats with. When roles open, reach out to them directly. A referral from someone inside a company dramatically increases the likelihood of getting an interview. Don't reach out cold asking for one — maintain the relationship first, then make the ask when the timing is right. If you've kept in contact, this is a natural conversation. If you haven't, it's awkward. That's the only real difference.</P>

      <H2>Your interviews should feel automatic by now.</H2>
      <P>Product design, behavioral questions, case interviews, technical screens — whatever your field requires, these frameworks have had months to settle in. By junior year, a product sense question or a case interview should feel natural — not because the questions are easy, but because you've seen every variation and you know how to structure your thinking in real time. If you've been doing mock interviews since freshman year, this is where that investment pays off. Keep going — better to arrive over-prepared.</P>

      <H2>GPA is not the most important thing.</H2>
      <P>It matters enough to maintain and enough to not ignore. It does not matter more than getting experience. There was a week during junior recruiting with three final interviews and three midterms in the same seven days. The midterms went badly. The offers came through. The classes still got passed. That's not advice to neglect school — it's advice to know your actual priorities when the week forces you to choose.</P>

      <H2>For humanities and research paths, the most significant opportunities open now.</H2>
      <P>If your goal is a PhD or graduate school, junior year is when the most competitive undergraduate research programs become available. Mellon Mays is one — the funding comes through the Mellon Foundation rather than the university, which means more independence. Beyond that, look at fellowships at neighboring institutions, grants tied to your department, and any programs that let you take a research project from question to conclusion. The relationship you have with a faculty member who knows your work deeply is one of the most valuable things you can leave junior year with.</P>

      <H2>Leave campus.</H2>
      <P>Study abroad if you can. Take a weekend trip to a city nearby. Go somewhere that pulls you out of the rhythm of classes, clubs, and recruiting. It's easy to get so locked into the business of college that the world outside starts to feel distant. Junior year is when this pressure peaks — which is exactly when you need the reset.</P>

      <H2>Have a plan if the summer doesn't go as planned.</H2>
      <P>Not every junior year internship works out. If you don't land the role you wanted, build something — a meaningful project, a startup contribution, a research position — that demonstrates the same skills. Arrive at senior year with something to talk about, regardless of where it came from.</P>

      <CareerCTA />
    </div>
  );
}

function SeniorTab() {
  return (
    <div className="prose-content">
      <p className="text-[#6B6B6B] text-sm leading-relaxed mb-8 max-w-2xl">
        If you did the work the previous three years, senior year is about execution. If you're starting from behind, the path is longer but it exists. Be honest with yourself about where you are.
      </p>

      <H2>Apply for full-time roles early, with referrals, before it feels urgent.</H2>
      <P>New graduate roles open in the fall. The same principles apply: apply early, maintain your relationships, keep interviewing until you have something signed. If you earned a return offer from your junior year internship, use that stability to finish college without that cloud over your head.</P>

      <H2>Not having a job at graduation is more common than people admit. It's not the end.</H2>
      <P>Most people who end up in their target career don't start there directly. The path often runs through a related role first — software engineering, program management, UX, product marketing, business operations, project management — where you build domain knowledge and then make the move. That's not settling. That's a real path that works.</P>
      <P>If you didn't get a PM role out of college: a SWE role is probably the clearest adjacent path. You can also get there through UX, product marketing, strategy, or business operations. Many people go back for an MBA a few years in and use that to make the transition. It's common and it works. What matters is getting into the right industry and staying close to the work you want to be doing.</P>

      <H2>Pull up your document.</H2>
      <P>The running record you started sophomore year — every project, every role, every thing you built — is the raw material for your grad school applications, your interviews, your performance reviews. If you're applying to graduate programs, that document is what makes your personal statement specific instead of vague. Know what you actually did across four years. Most people underestimate it.</P>

      <H2>Lift as you climb.</H2>
      <P>Toni Morrison said it plainly: "If you have some power, then your job is to empower somebody else." By senior year you have navigated things that the freshman who just arrived on campus has no idea about. Share what you know. Mentor someone. Create space in the rooms you're already in. The blueprint you followed didn't come from nowhere — pass it forward.</P>

      <H2>Think about what you built — not just what you got.</H2>
      <P>Four years is enough time to have changed. What you did, who you became, what you figured out about yourself — that's the actual output of college. The job is the beginning of the next stage, not the grade on these four years.</P>

      <H2>The blueprint doesn't stop at graduation.</H2>
      <P>We're building the tools to help you navigate what comes next too.</P>

      <CareerCTA />
    </div>
  );
}

const tabContent: Record<string, React.ReactNode> = {
  before: <BeforeTab />,
  freshman: <FreshmanTab />,
  sophomore: <SophomoreTab />,
  junior: <JuniorTab />,
  senior: <SeniorTab />,
};

export default function CollegeGuidePage() {
  const [active, setActive] = useState("before");

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1A1A2E] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#9CA3AF] text-xs font-semibold uppercase tracking-widest mb-4">College Guide</p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FAFAF7] leading-[1.05] mb-4"
            style={{ fontFamily: "'Libre Bodoni', serif" }}
          >
            The Guide.
          </h1>
          <p className="text-[#9CA3AF] text-base leading-relaxed max-w-xl">
            Freshman through senior year. What to do, when to do it, and what's at stake each summer.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-16 z-40 bg-[#FAFAF7]/95 backdrop-blur-sm border-b border-[#E5E5E0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-none gap-1 py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  active === tab.id
                    ? "bg-[#1A1A2E] text-[#FAFAF7]"
                    : "text-[#6B6B6B] hover:text-[#0D0D0D] hover:bg-[#0D0D0D]/5"
                }`}
              >
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.shortLabel}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {tabContent[active]}
      </section>
    </>
  );
}
