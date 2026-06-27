import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle2 } from "lucide-react";

function Callout({ type, children }: { type: "info" | "warn"; children: React.ReactNode }) {
  const s = {
    info: { cls: "bg-[#EFF6FF] border-[#1A1A2E]", Icon: CheckCircle2, color: "text-[#1A1A2E]" },
    warn: { cls: "bg-[#FFFBEB] border-[#D97706]",  Icon: AlertTriangle, color: "text-[#D97706]" },
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

const clubs = [
  {
    tier: "Tier 1 — Essential",
    color: "text-[#1A1A2E] bg-[#EEF2FF]",
    items: [
      { name: "ACM Chapter (Association for Computing Machinery)", desc: "Your school's CS society. Hosts LeetCode practice sessions, technical talks, and has alumni in tech. Join in the first week of school." },
      { name: "Hackathon Teams", desc: "Participate in hackathons — HackMIT, TreeHacks, HackHarvard, or local events. Hackathons produce projects for your resume and are a direct pipeline to SWE internships through sponsors." },
      { name: "Diversity Organizations in Tech (NSBE, SHPE, SASE, WiCS)", desc: "NSBE, SHPE, SASE, and Women in Computer Science host recruiting events where Google, Meta, and Amazon are specifically looking for underrepresented talent. These are not just community — they are direct recruiting pipelines." },
      { name: "Research Lab / Undergraduate Research", desc: "Working in a professor's CS or ML lab is equivalent to a junior internship in terms of recruiting signal. Go to office hours, ask about research opportunities, and apply to work in labs starting as early as freshman spring." },
    ],
  },
  {
    tier: "Tier 2 — High Value",
    color: "text-[#1B4332] bg-[#D1FAE5]",
    items: [
      { name: "Robotics Club", desc: "Strong signal for hardware/software integration roles. Google, Amazon, and companies working on autonomous systems recruit from competitive robotics teams." },
      { name: "Software Consulting Club (e.g., Codebase at Berkeley)", desc: "Student clubs that build real software for real clients. You get client experience, code review, and a deliverable you can speak to in interviews — before any company has hired you." },
      { name: "Open Source Contribution Groups", desc: "Clubs or communities that contribute to real open source projects. A merged pull request on a project with 1,000+ stars is a rare signal that separates serious engineers from the crowd." },
      { name: "Entrepreneurship / Startup Club", desc: "Shows initiative and product thinking. Useful for startup-focused SWE roles and PM-adjacent engineering paths." },
    ],
  },
  {
    tier: "Tier 3 — Supplemental",
    color: "text-[#6B6B6B] bg-[#F5F5F0]",
    items: [
      { name: "Math and CS Honor Societies (Phi Beta Kappa, Tau Beta Pi)", desc: "Signal for academic achievement. Worth joining if you qualify, but not a substitute for technical experience." },
      { name: "TA / Course Assistant", desc: "Teaching assistant experience shows up consistently across engineer profiles. It demonstrates deep understanding and builds relationships with faculty who write recommendations." },
    ],
  },
];

const projects = [
  { signal: "High", title: "Web or mobile app with a real use case", desc: "It should be on GitHub with a README, live at a public URL if possible, and describable in one sentence. Use a database, an API, authentication. Build something that solves a real problem, not a tutorial project." },
  { signal: "High", title: "Machine learning project with a real dataset", desc: "A Kaggle competition, a personal dataset you collected, or an ML model applied to a real problem. The model should be deployed and usable — not just a Jupyter notebook." },
  { signal: "High", title: "Open source contribution", desc: "A merged pull request on a project with 1,000+ stars. Shows you can navigate a real production codebase, read other people's code, and contribute meaningfully to a living project." },
  { signal: "High", title: "Hackathon project (especially if it won or placed)", desc: "Include the hackathon name, your role, the tech stack, and the outcome. A winning or placing hackathon project is a real credential that companies recognize." },
  { signal: "High", title: "Undergraduate research with a professor", desc: "Even a poster at a research symposium is on the path to a publication. Research experience is especially valuable for ML/AI roles and graduate school applications." },
  { signal: "Medium", title: "Freelance or contract work", desc: "Building websites, apps, or tools for real clients — local businesses, Upwork contracts, anything with real deadlines and real accountability. Shows you can ship under pressure." },
];

export default function SWEClubsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Header */}
      <div className="mb-10">
        <Link href="/careers/software-engineering" className="text-xs font-semibold text-[#6B7280] hover:text-[#1A1A2E] transition-colors">
          ← Software Engineering
        </Link>
        <span className="block text-xs font-semibold uppercase tracking-widest text-[#1B4332] mt-4 mb-2">Clubs & Activities</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          What to Join and Build.
        </h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
          The clubs, organizations, and projects that show up on the profiles of engineers at Google, Meta, and Amazon.
        </p>
        <Callout type="info">
          The students who break into top tech companies are not the ones who did the most things. They did the right things early and consistently. One club done well, one project shipped, one research relationship built — that's the record that opens doors.
        </Callout>
      </div>

      <Divider label="Recommended Major" />
      <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
        Computer Science is the standard and the clearest path. If your school offers EECS or Computer Engineering, those are strong alternatives. Mathematics + CS as a joint major is respected at any school that offers it.
      </p>
      <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
        Statistics or Data Science works specifically for ML and AI roles. Artificial Intelligence as a declared major is an emerging path — especially for ML-focused roles. Any other STEM major can work only if you supplement it with strong projects and internships that prove coding ability.
      </p>
      <Callout type="warn">
        Business, economics, and non-technical majors do not open doors at Google or Meta — no matter how strong your other credentials are. If you want to work in software, study software.
      </Callout>

      <Divider label="Clubs — What to Join" />

      <div className="space-y-8">
        {clubs.map((tier) => (
          <div key={tier.tier}>
            <span className={`inline-block text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full mb-4 ${tier.color}`}>{tier.tier}</span>
            <div className="space-y-3">
              {tier.items.map((item) => (
                <div key={item.name} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
                  <CheckCircle2 size={15} className="text-[#1A1A2E] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0D0D0D] text-sm">{item.name}</p>
                    <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Divider label="Projects — What to Build" />
      <p className="text-sm text-[#6B6B6B] mb-6">Projects are how you prove you can build before a company has hired you. The best ones are real, deployed, and describable in a single sentence.</p>

      <div className="space-y-3">
        {projects.map((p) => (
          <div key={p.title} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
            <span className={`flex-shrink-0 text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full h-fit mt-0.5 ${
              p.signal === "High" ? "text-[#1B4332] bg-[#D1FAE5]" : "text-[#6B6B6B] bg-[#F5F5F0]"
            }`}>
              {p.signal}
            </span>
            <div>
              <p className="font-semibold text-[#0D0D0D] text-sm">{p.title}</p>
              <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Divider label="What to Avoid" />
      <div className="space-y-3">
        {[
          { title: "Joining 10 clubs shallowly.", body: "Recruiters and interviewers can tell. One meaningful leadership role is worth more than a resume full of clubs where you attended a few meetings." },
          { title: "Only joining for the resume line.", body: "The best clubs and research labs can tell when someone's not genuinely interested. Show up because you care — those people get pulled into the best opportunities." },
          { title: "Waiting until junior year to join anything.", body: "The students who get the most out of organizations joined freshman year, grew into leadership roles, and have two or three years of consistent involvement to talk about." },
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

      <div className="bg-[#F5F5F0] border border-[#E5E5E0] rounded-xl p-6 mt-10">
        <p className="text-sm font-semibold text-[#0D0D0D] mb-2">You don't need to know how to code to start building.</p>
        <p className="text-sm text-[#6B6B6B] leading-relaxed">Tools like Claude, Cursor, and other AI-assisted builders let you create apps, websites, and automations without writing every line of code yourself. You can describe what you want to build, get working code, and ship something real. Non-technical students are building real products with these tools today. If you have an idea, the barrier to building has never been lower. Start.</p>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row gap-3">
        <Link href="/careers/software-engineering/programs" className="inline-flex items-center gap-2 px-5 py-3 bg-[#1A1A2E] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer">
          ← Key Programs & Fellowships
        </Link>
        <Link href="/careers/software-engineering/interviews" className="inline-flex items-center gap-2 px-5 py-3 border border-[#E5E5E0] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:border-[#1A1A2E] transition-colors cursor-pointer">
          Interview Prep <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
