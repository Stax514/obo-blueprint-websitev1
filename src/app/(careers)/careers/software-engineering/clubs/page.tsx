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

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-4 border-[#1B4332] bg-[#F0FDF4] px-4 py-3 rounded-r-lg my-4">
      <p className="text-sm text-[#374151] leading-relaxed">{children}</p>
    </div>
  );
}

const clubs = [
  {
    tier: "Tier 1 — Essential",
    items: [
      {
        name: "ACM Chapter (Association for Computing Machinery)",
        desc: "Your school's CS society. Hosts LeetCode practice sessions, technical talks, and has alumni in tech. Join in the first week of school.",
      },
      {
        name: "Hackathon Teams",
        desc: "Participate in hackathons — HackMIT, TreeHacks, HackHarvard, or local events. Hackathons produce projects you can put on your resume and are a direct pipeline to SWE internships through sponsors.",
      },
      {
        name: "Diversity Organizations in Tech (NSBE, SHPE, SASE, WiCS)",
        desc: "NSBE (National Society of Black Engineers), SHPE (Society of Hispanic Professional Engineers), SASE (Society of Asian Scientists and Engineers), and Women in Computer Science host recruiting events where Google, Meta, and Amazon are specifically looking for underrepresented talent. These are not just community — they are direct recruiting pipelines.",
      },
      {
        name: "Research Lab / Undergraduate Research",
        desc: "Working in a professor's CS or ML lab is equivalent to a junior internship in terms of recruiting signal. Go to office hours, ask about research opportunities, and apply to work in labs starting sophomore year.",
      },
    ],
  },
  {
    tier: "Tier 2 — High Value",
    items: [
      {
        name: "Robotics Club",
        desc: "Strong signal for hardware/software integration roles. Google, Amazon, and companies working on autonomous systems recruit from competitive robotics teams.",
      },
      {
        name: "Software Consulting Club (e.g., Codebase at Berkeley)",
        desc: "Student clubs that build real software for real clients. You get client experience, code review, and a deliverable you can speak to in interviews — before any company has hired you.",
      },
      {
        name: "Open Source Contribution Groups",
        desc: "Clubs or communities that contribute to real open source projects. A merged pull request on a project with 1,000+ stars is a rare signal that separates serious engineers from the crowd.",
      },
      {
        name: "Entrepreneurship / Startup Club",
        desc: "Shows initiative and product thinking. Useful for startup-focused SWE roles and PM-adjacent engineering paths.",
      },
    ],
  },
  {
    tier: "Tier 3 — Supplemental",
    items: [
      {
        name: "Math and CS Honor Societies (Phi Beta Kappa, Tau Beta Pi)",
        desc: "Signal for academic achievement. Worth joining if you qualify, but not a substitute for technical experience.",
      },
      {
        name: "TA / Course Assistant",
        desc: "Teaching assistant experience shows up consistently across engineer profiles. It demonstrates deep understanding and builds relationships with faculty who write recommendations. Look for TA opportunities starting sophomore year.",
      },
    ],
  },
];

const projects = [
  {
    signal: "High",
    title: "Web or mobile app with a real use case",
    desc: "It should be on GitHub with a README, live at a public URL if possible, and describable in one sentence. Complexity matters — use a database, an API, authentication. Build something that solves a real problem, not a tutorial project.",
  },
  {
    signal: "High",
    title: "Machine learning project with a real dataset",
    desc: "A Kaggle competition, a personal dataset you collected, or an ML model applied to a real problem. The model should be deployed and usable — not just a Jupyter notebook.",
  },
  {
    signal: "High",
    title: "Open source contribution",
    desc: "A merged pull request on a project with 1,000+ stars. Shows you can navigate a real production codebase, read other people's code, and contribute meaningfully to a living project.",
  },
  {
    signal: "High",
    title: "Hackathon project (especially if it won or placed)",
    desc: "Include the hackathon name, your role, the tech stack, and the outcome. A winning or placing hackathon project is a real credential that companies recognize.",
  },
  {
    signal: "High",
    title: "Undergraduate research with a professor",
    desc: "Even a poster at a research symposium is on the path to a publication. Research experience is especially valuable for ML/AI roles and graduate school applications.",
  },
  {
    signal: "Medium",
    title: "Freelance or contract work",
    desc: "Building websites, apps, or tools for real clients — local businesses, Upwork contracts, anything with real deadlines and real accountability. Shows you can ship under pressure.",
  },
];

export default function SWEClubsPage() {
  return (
    <>
      <section className="bg-[#1B4332] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/careers/software-engineering" className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors mb-6 cursor-pointer">
            ← Software Engineering
          </Link>
          <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">Clubs & Activities</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#FAFAF7] leading-[1.05] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
            What to Join and Build.
          </h1>
          <p className="text-white/60 text-base leading-relaxed max-w-xl">
            The clubs, organizations, and projects that show up on the profiles of engineers at Google, Meta, and Amazon.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        <Note>
          The students who break into top tech companies are not the ones who did the most things. They did the right things early and consistently. One club done well, one project shipped, one research relationship built — that's the record that opens doors.
        </Note>

        <H2>Recommended Major</H2>
        <P>Computer Science is the standard and the clearest path. If your school offers EECS (Electrical Engineering & Computer Science) or Computer Engineering, those are strong alternatives. Mathematics + CS as a joint major is respected at any school that offers it.</P>
        <P>Statistics or Data Science works specifically for ML and AI roles. Artificial Intelligence as a declared major is an emerging path at schools that offer it — especially for ML-focused roles. Any other STEM major can work only if you supplement it with strong projects and internships that prove coding ability. Business, economics, and non-technical majors do not open doors at Google or Meta — no matter how strong your other credentials are.</P>

        <H2>Clubs — What to Join</H2>

        <div className="space-y-8 mt-4">
          {clubs.map((tier) => (
            <div key={tier.tier}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#6B6B6B] mb-3">{tier.tier}</h3>
              <div className="space-y-3">
                {tier.items.map((item) => (
                  <div key={item.name} className="border border-[#E5E5E0] rounded-xl p-5 bg-white">
                    <p className="text-sm font-semibold text-[#0D0D0D] mb-1.5">{item.name}</p>
                    <p className="text-xs text-[#6B6B6B] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <H2>Projects — What to Build</H2>
        <P>Projects are how you prove you can build before a company has hired you. The best ones are real, deployed, and describable in a single sentence. Here's what to aim for.</P>

        <div className="space-y-4 mt-4">
          {projects.map((p) => (
            <div key={p.title} className="border border-[#E5E5E0] rounded-xl p-5 bg-white">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${
                  p.signal === "High"
                    ? "text-[#1B4332] bg-[#D1FAE5]"
                    : "text-[#6B6B6B] bg-[#F5F5F0]"
                }`}>
                  {p.signal} Signal
                </span>
              </div>
              <p className="text-sm font-semibold text-[#0D0D0D] mb-1.5">{p.title}</p>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <H2>What to avoid</H2>
        <ul className="list-disc list-inside space-y-2 text-sm text-[#374151] mb-6 ml-2">
          <li><strong>Joining 10 clubs shallowly.</strong> Recruiters and interviewers can tell. One meaningful leadership role in one organization is worth more than a resume full of clubs where you attended a few meetings.</li>
          <li><strong>Only joining for the resume line.</strong> The best clubs and research labs can tell when someone's not genuinely interested. Show up because you care — the people who do are the ones who get pulled into the best opportunities.</li>
          <li><strong>Waiting until junior year to join anything.</strong> The students who get the most out of organizations are the ones who joined freshman year, grew into leadership roles, and have two or three years of consistent involvement to talk about.</li>
        </ul>

        <H2>You don't need to know how to code to start building.</H2>
        <P>Tools like Claude, Cursor, and other AI-assisted builders let you create apps, websites, and automations without writing every line of code yourself. You can describe what you want to build, get working code, and ship something real. Non-technical students are building real products with these tools today. If you have an idea, the barrier to building has never been lower. Start.</P>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link
            href="/careers/software-engineering/programs"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#1B4332] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer"
          >
            Key Programs & Fellowships <ArrowRight size={14} />
          </Link>
          <Link
            href="/careers/software-engineering/interviews"
            className="inline-flex items-center gap-2 px-5 py-3 border border-[#E5E5E0] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:border-[#1B4332] transition-colors cursor-pointer"
          >
            Interview Prep <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
