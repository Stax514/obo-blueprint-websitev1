import Link from "next/link";

interface Week {
  num: number;
  title: string;
  framework: string;
  skill: string;
  career: { heading: string; items: string[] }[];
}

const weeks: Week[] = [
  {
    num: 1,
    title: "Product Design — Clarify & Identify Pain Points",
    framework: "Product Design (Clarify → Users → Pain Points)",
    skill: "Understanding user needs and defining product goals through user segmentation and problem exploration.",
    career: [
      {
        heading: "Resume Formatting & Writing Fundamentals",
        items: [
          "Learn how to structure a resume using action verbs, metrics, and impact statements",
          "Review examples of strong PM resumes and start a draft using a proven template",
          "Download the resume template from Resources",
        ],
      },
      {
        heading: "Create or Update LinkedIn Profile",
        items: [
          "Complete your profile with a concise summary and headline that signals interest (e.g., 'Aspiring PM | Building X')",
          "Add a featured section — you'll populate it with project work later",
          "Custom banner is a nice touch if you have one",
        ],
      },
      {
        heading: "Set Up a PM Preparation Calendar",
        items: [
          "Establish a weekly system to allocate time for product work, outreach, mock interviews, and applications",
          "Use Notion, Google Calendar, or a simple planner — what matters is consistency",
        ],
      },
      {
        heading: "Begin a PM Alignment Tracker",
        items: [
          "Identify 2–3 specific PM-relevant gaps in your experience (e.g., no data/metrics work, no cross-functional collaboration, no leadership roles)",
          "Track these gaps throughout the 10 weeks and actively close them",
        ],
      },
    ],
  },
  {
    num: 2,
    title: "Product Design II — Ideation & Prioritization",
    framework: "Product Design (Solutions → Prioritize → Trade-offs)",
    skill: "Defining a Minimum Viable Product (MVP) and prioritizing features using frameworks like RICE or Impact vs. Effort.",
    career: [
      {
        heading: "Build a Resume Bullet for Your Project",
        items: [
          "Learn how to craft bullets that emphasize ownership and outcomes",
          "Example: 'Led user interviews and synthesized feedback to define MVP for campus delivery app'",
        ],
      },
      {
        heading: "Identify Top 10 Companies + APM Application Timeline",
        items: [
          "Research target companies and note typical application open dates using past cycles",
          "Document what each APM program looks for in intern candidates",
          "Use APM Season (apmseason.com) to track open applications",
        ],
      },
      {
        heading: "Begin Cold Outreach",
        items: [
          "Use Apollo.io or LinkedIn to find 5–10 PMs or APMs at your target companies",
          "Craft a personalized cold message asking for a short coffee chat",
          "Don't mass blast — be intentional. Focus on companies you genuinely want to work at",
        ],
      },
      {
        heading: "Address First PM Alignment Gap",
        items: [
          "Choose one gap from your tracker and actively begin working on it",
          "Examples: seek a collaborator, contribute to a design, enroll in a short SQL or analytics course",
        ],
      },
    ],
  },
  {
    num: 3,
    title: "Product Strategy",
    framework: "Product Strategy (Goals → Landscape → Options → Decision)",
    skill: "Making product decisions that align with user needs and company goals while analyzing the competitive landscape.",
    career: [
      {
        heading: "Begin Informational Coffee Chats",
        items: [
          "Conduct at least 2–3 chats this week",
          "Focus on learning about day-to-day responsibilities, team structure, and what made the person successful",
          "Go in with a learning mindset — not a sales pitch",
        ],
      },
      {
        heading: "Send Thank-You Notes Post-Chat",
        items: [
          "Write personalized follow-ups within 24 hours",
          "Mention one specific insight from the conversation and express continued interest",
          "This is how you turn a coffee chat contact into a future referral",
        ],
      },
      {
        heading: "Create a Coffee Chat Research Guide",
        items: [
          "Before each chat, research the company's current products, strategic bets, and market position",
          "Write out 3 tailored questions and a modified elevator pitch aligned with that company's mission",
        ],
      },
      {
        heading: "Continue Addressing Resume Gaps",
        items: [
          "If you're missing experience in strategy or market analysis, publish a product teardown or competitor comparison on LinkedIn",
        ],
      },
    ],
  },
  {
    num: 4,
    title: "Go-to-Market (GTM) Strategy",
    framework: "Go-to-Market (Define → Strategy → Execution)",
    skill: "Creating and executing a go-to-market plan, identifying early adopters, and crafting product messaging.",
    career: [
      {
        heading: "Continue Coffee Chats and Cold Outreach",
        items: [
          "Focus this week on smaller, high-growth companies where you may get more ownership and exposure",
          "Smaller companies often reply faster and give better early-stage conversations",
        ],
      },
      {
        heading: "Send Follow-Ups to Previous Messages",
        items: [
          "Politely follow up on older outreach with an update — e.g., 'Just wanted to follow up and share a project I've been building…'",
          "One follow-up is appropriate. Don't spam.",
        ],
      },
      {
        heading: "Start Mock Interview Practice",
        items: [
          "Use Exponent, ChatGPT, or a peer to practice a GTM interview",
          "Focus on structuring your answer and communicating clearly",
          "See the Interview Guide for the full GTM framework",
        ],
      },
      {
        heading: "Address Second Resume Gap",
        items: [
          "If you're lacking experience in communication or launches, simulate a launch plan or host a feedback session with users",
        ],
      },
    ],
  },
  {
    num: 5,
    title: "Metrics — How to Measure Success",
    framework: "Metrics (North Star → Supporting → Guardrails)",
    skill: "Defining a success framework, balancing growth and risk, and connecting metrics to user and business impact.",
    career: [
      {
        heading: "Update Resume Bullets with Metrics",
        items: [
          "Go back to old roles, side projects, or class projects and quantify the outcomes",
          "Use phrases like 'Improved X by Y%' or 'Reached Z users in 3 weeks'",
          "If you don't have metrics, estimate them — make them defensible",
        ],
      },
      {
        heading: "Research 5 Fallback Companies",
        items: [
          "Add non-APM companies to your list that offer rotational programs or startup roles",
          "These are not backup plans — they're alternate paths to PM that are equally valid",
        ],
      },
      {
        heading: "Continue Mock Interviews + Coffee Chats",
        items: [
          "Schedule at least one mock focused on metrics and one coffee chat outside your top 10 list",
          "Broadening your conversations builds perspective and unexpected connections",
        ],
      },
      {
        heading: "Address Data Gap in Resume",
        items: [
          "Learn basic analytics tools: Google Sheets, SQL basics, Mixpanel",
          "Apply one to your product case — even a simple insights breakdown counts",
        ],
      },
    ],
  },
  {
    num: 6,
    title: "Execution — Trade-Off Decisions",
    framework: "Execution Trade-Offs",
    skill: "Navigating decisions with competing priorities — user needs vs. business goals, time vs. impact, MVP vs. full feature.",
    career: [
      {
        heading: "Create a Mock Interview Partner Schedule",
        items: [
          "Find 2–3 peers or mentors and block recurring time for mock sessions",
          "Focus each session on a different interview type",
          "Product Haven Slack has a #mock-interviews channel for finding partners",
        ],
      },
      {
        heading: "Begin Messaging for Referrals",
        items: [
          "Reach out to PMs or APMs you've chatted with previously",
          "Request referrals for specific open roles, ideally with your updated resume attached",
          "Be specific: mention the exact role and company, not just a general ask",
        ],
      },
      {
        heading: "Work on Decision-Making Experience",
        items: [
          "Reflect on past experiences: when did you make a tough call, set a priority, or say no?",
          "Add this to your resume or prepare it as a STAR story for behavioral interviews",
        ],
      },
    ],
  },
  {
    num: 7,
    title: "Execution — Experiment Design",
    framework: "A/B Testing and Hypothesis Testing",
    skill: "Designing, running, and interpreting experiments to validate assumptions or drive user growth.",
    career: [
      {
        heading: "Conduct a Mock Interview Focused on A/B Testing",
        items: [
          "Use your product's metrics or features to walk through an experiment design in an interview setting",
          "See the Interview Guide for the full A/B Testing framework",
        ],
      },
      {
        heading: "Build a Notion-Based Application Tracker",
        items: [
          "Track companies, application stages, referral contacts, status, and follow-up reminders",
          "Update this weekly — it will save you from missing deadlines",
        ],
      },
      {
        heading: "DM 5 Professionals for Feedback or Referrals",
        items: [
          "Share your product write-up or a project link and ask for specific feedback",
          "Or ask directly if they know of any open roles or can submit a referral",
        ],
      },
      {
        heading: "Address Experimentation Gap",
        items: [
          "If you've never designed or run a test, use Google Forms or Typeform to create a simple user survey",
          "Analyze the results and write a short summary — this is real product experience",
        ],
      },
    ],
  },
  {
    num: 8,
    title: "Behavioral Interviews + STAR Storytelling",
    framework: "Behavioral (Leadership, Failure, Collaboration)",
    skill: "Communicating past experiences clearly and impactfully using the STAR method (Situation, Task, Action, Result).",
    career: [
      {
        heading: "Conduct Two Behavioral Mock Interviews",
        items: [
          "Practice both common and curveball questions: 'Tell me about a failure,' 'When did you handle conflict?' 'What's your proudest project?'",
          "Use the STAR framework for every answer",
        ],
      },
      {
        heading: "Finalize Resume and LinkedIn",
        items: [
          "Make final edits — every bullet is impact-driven, and your project is linked or described",
          "LinkedIn should match your resume and be recruiter-optimized",
        ],
      },
      {
        heading: "Fix Gaps in Storytelling or Leadership",
        items: [
          "If you're missing leadership stories, identify a time you owned something independently — even if small — and frame it using STAR",
          "Every experience has a PM-relevant angle if you frame it right",
        ],
      },
    ],
  },
  {
    num: 9,
    title: "Full Mock Interviews",
    framework: "Mixed (Product Design, Strategy, Metrics, Behavioral)",
    skill: "Demonstrating confidence, clarity, and structured thinking in real-time interview scenarios.",
    career: [
      {
        heading: "Apply to at Least Five APM/PM Roles",
        items: [
          "Use your completed resume and case study to apply to open roles",
          "Attach a personalized note if the application allows it",
        ],
      },
      {
        heading: "Send Updates to Past Coffee Chats and Mentors",
        items: [
          "Let them know you've built your product, are actively applying, and would love a referral if opportunities arise",
          "People are more likely to refer you when you keep them in the loop",
        ],
      },
      {
        heading: "Address One Final PM Gap",
        items: [
          "Rewatch recorded mocks or gather feedback on what to improve — structure, examples, confidence",
          "One targeted improvement this week can meaningfully change interview outcomes",
        ],
      },
    ],
  },
  {
    num: 10,
    title: "Application Strategy + Long-Term PM Paths",
    framework: "Review and Strategic Planning",
    skill: "Mapping out your long-term PM journey (APM → PM → Group PM), knowing how to pivot (SWE → PM, adjacent roles → PM), and understanding MBA transitions.",
    career: [
      {
        heading: "Submit Final Product Case Study",
        items: [
          "Package your project into a 1-pager, Notion page, slide deck, or video pitch",
          "Use it in interviews and your LinkedIn portfolio",
        ],
      },
      {
        heading: "Build a 30-Day PM Plan",
        items: [
          "Plan 30 days of focused job search: X applications per week, Y mock interviews, Z cold messages",
          "Weekly reflection keeps you iterating instead of grinding aimlessly",
        ],
      },
      {
        heading: "Final PM Alignment Tracker Review",
        items: [
          "What gaps have you filled? Which ones remain?",
          "Make a plan to keep growing over the next 3–6 months with mini-projects, content creation, or new roles",
        ],
      },
    ],
  },
];

const weekColors = [
  "border-[#F4A825] bg-[#FDF8EC] text-[#F4A825]",
  "border-[#059669] bg-[#ECFDF5] text-[#059669]",
  "border-[#7C3AED] bg-[#F5F3FF] text-[#7C3AED]",
  "border-[#D97706] bg-[#FFFBEB] text-[#D97706]",
  "border-[#0891B2] bg-[#ECFEFF] text-[#0891B2]",
  "border-[#BE185D] bg-[#FDF2F8] text-[#BE185D]",
  "border-[#16A34A] bg-[#F0FDF4] text-[#16A34A]",
  "border-[#EA580C] bg-[#FFF7ED] text-[#EA580C]",
  "border-[#4F46E5] bg-[#EEF2FF] text-[#4F46E5]",
  "border-[#0F172A] bg-[#F5F5F0] text-[#0D0D0D]",
];

export default function PrepPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#F4A825]">Interview Prep</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mt-2 mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          10-Week PM Interview Prep Guide
        </h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed">
          A structured week-by-week plan covering every PM interview type, career milestones, resume building, and how to close gaps in your experience. By the end of 10 weeks, you&apos;ll be ready to walk into interviews with clarity, structure, and confidence.
        </p>
      </div>

      {/* Jump nav */}
      <div className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF] mb-3">Jump to week</p>
        <div className="flex flex-wrap gap-2">
          {weeks.map((w) => (
            <a
              key={w.num}
              href={`#week-${w.num}`}
              className="px-3 py-1.5 text-sm font-medium border border-[#E5E5E0] rounded-lg text-[#6B6B6B] hover:border-[#F4A825] hover:text-[#F4A825] transition-colors"
            >
              Week {w.num}
            </a>
          ))}
        </div>
      </div>

      {/* Week blocks */}
      <div className="space-y-8">
        {weeks.map((w, i) => {
          const colorCls = weekColors[i % weekColors.length];
          const [borderCls, bgCls, textCls] = colorCls.split(" ");
          return (
            <div key={w.num} id={`week-${w.num}`} className={`year-block border-l-4 ${borderCls} ${bgCls} rounded-r-xl p-6 sm:p-8`}>
              <div className="flex items-center gap-3 mb-1">
                <span className={`text-xs font-bold uppercase tracking-widest ${textCls}`}>Week {w.num}</span>
              </div>
              <h2 className="text-lg font-bold text-[#0D0D0D] mb-1">{w.title}</h2>

              <div className="flex flex-col sm:flex-row gap-3 mb-5">
                <div className="flex-1 bg-white/70 rounded-lg p-3 border border-white">
                  <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide mb-1">Framework</p>
                  <p className="text-sm text-[#374151]">{w.framework}</p>
                </div>
                <div className="flex-1 bg-white/70 rounded-lg p-3 border border-white">
                  <p className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-wide mb-1">PM Skill</p>
                  <p className="text-sm text-[#374151]">{w.skill}</p>
                </div>
              </div>

              <div className="space-y-4">
                {w.career.map((c, ci) => (
                  <div key={ci} className="flex gap-4">
                    <div className="flex-shrink-0 w-4 mt-1.5">
                      <div className={`w-2 h-2 rounded-full ${bgCls.replace("bg-", "bg-")} border-2 ${borderCls}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-[#0D0D0D] mb-1">{c.heading}</p>
                      <ul className="space-y-1">
                        {c.items.map((item, ii) => (
                          <li key={ii} className="flex gap-2 text-xs text-[#6B6B6B] leading-relaxed">
                            <span className="text-[#9CA3AF] flex-shrink-0 mt-0.5">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Resources */}
      <div className="mt-12 bg-[#F5F5F0] border border-[#E5E5E0] rounded-xl p-6">
        <h3 className="font-bold text-[#0D0D0D] mb-2">Resources to track role openings</h3>
        <ul className="space-y-2">
          {[
            { label: "APM Season", url: "https://www.apmseason.com/", desc: "Best single source for APM application open dates" },
            { label: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/", desc: "Set alerts for APM/PM internship roles" },
            { label: "Product Haven Slack", url: "https://join.slack.com/t/producthaven/shared_invite/zt-2w7gyx677-NBOd1mBsJ32BBLBqodKgUg", desc: "Free PM community — #mock-interviews and #jobs channels" },
          ].map((r) => (
            <li key={r.label} className="flex gap-3 items-start">
              <span className="text-[#F4A825] flex-shrink-0 mt-0.5">→</span>
              <div>
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#F4A825] hover:underline">{r.label}</a>
                <span className="text-xs text-[#6B6B6B] ml-2">{r.desc}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Next */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/careers/interviews" className="group p-5 border border-[#E5E5E0] rounded-xl hover:border-[#F4A825] transition-colors">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF] mb-1">Next</p>
          <p className="font-bold text-[#0D0D0D] group-hover:text-[#F4A825] transition-colors">Interview Frameworks →</p>
          <p className="text-sm text-[#6B6B6B] mt-1">Every PM interview type with full walkthroughs.</p>
        </Link>
        <Link href="/careers/starter-project" className="group p-5 border border-[#E5E5E0] rounded-xl hover:border-[#F4A825] transition-colors">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF] mb-1">Also</p>
          <p className="font-bold text-[#0D0D0D] group-hover:text-[#F4A825] transition-colors">Build a Starter Project →</p>
          <p className="text-sm text-[#6B6B6B] mt-1">No internship experience? Build something real.</p>
        </Link>
      </div>
    </div>
  );
}
