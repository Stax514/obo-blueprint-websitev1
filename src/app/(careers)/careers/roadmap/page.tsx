"use client";

import { useState } from "react";
import Link from "next/link";
import { AlertTriangle, CheckCircle2, Clock, Lightbulb, ChevronRight } from "lucide-react";

function Callout({ type, children }: { type: "info" | "warn" | "tip" | "clock"; children: React.ReactNode }) {
  const s = {
    info:  { cls: "callout-info",  Icon: CheckCircle2,  color: "text-[#F4A825]" },
    warn:  { cls: "callout-warn",  Icon: AlertTriangle, color: "text-[#D97706]" },
    tip:   { cls: "callout-tip",   Icon: Lightbulb,     color: "text-[#059669]" },
    clock: { cls: "callout-clock", Icon: Clock,         color: "text-[#7C3AED]" },
  }[type];
  return (
    <div className={`callout ${s.cls} flex gap-3`}>
      <s.Icon size={15} className={`${s.color} flex-shrink-0 mt-0.5`} />
      <p className="text-sm leading-relaxed text-[#374151]">{children}</p>
    </div>
  );
}

interface TierItem { tier: number; label: string; detail: string; highlight?: boolean }
interface SectionItem { time: string; task: string; sub?: string[] }

interface YearData {
  id: string;
  label: string;
  shortLabel: string;
  subtitle: string;
  accent: string;
  bg: string;
  border: string;
  dot: string;
  applicationsBanner: { opens: string; note: string };
  tiers: TierItem[];
  duringYear: SectionItem[];
  summer: { intro: string; items: SectionItem[] };
  callouts?: { type: "info" | "warn" | "tip" | "clock"; text: string }[];
}

const years: YearData[] = [
  {
    id: "freshman",
    label: "Freshman Year",
    shortLabel: "Freshman",
    subtitle: "Build your foundation. Join, explore, and try things.",
    accent: "text-[#F4A825]",
    bg: "bg-[#EFF6FF]",
    border: "border-[#F4A825]",
    dot: "bg-[#F4A825]",
    applicationsBanner: {
      opens: "Applications open: August – October",
      note: "Right when you get on campus, internship applications for next summer start dropping. Apply early — rolling reviews mean August applicants have a real edge over October applicants.",
    },
    callouts: [
      { type: "info", text: "APM programs like Google APM, Meta RPM, and Salesforce APM recruit juniors for summer internships and seniors/post-grads for full-time roles. You won't be applying yet — but knowing the destination shapes everything you do now. Every club, project, and internship you stack is building the story you'll tell in your junior year PM interviews." },
    ],
    tiers: [
      { tier: 1, label: "SWE Internship", detail: "Top priority. Shows technical credibility. Opens more PM doors later than any other early experience.", highlight: true },
      { tier: 2, label: "PM Internship", detail: "Very hard to get freshman year without experience — but if you can, take it." },
      { tier: 3, label: "Any Technical Internship", detail: "QA, data, product ops, dev tools — anything where you build or ship something counts." },
      { tier: 4, label: "Research", detail: "Technical research with a professor. Shows you can take a project from ideation to delivery." },
      { tier: 5, label: "Personal Project", detail: "Build a small product with friends. Real users and iteration make it much stronger." },
      { tier: 6, label: "Summer Classes + LeetCode", detail: "If nothing lands, grind LeetCode. Consistent prep now puts you ahead by sophomore year." },
    ],
    duringYear: [
      {
        time: "Day 1",
        task: "As soon as you arrive on campus, two things: find your career center and look up internship applications that are already live. Most students don't know applications open in August — you now have an edge.",
        sub: [
          "Set calendar reminders for August 1 to check APM and SWE program career pages",
          "Find out if your school has a PM or tech club — join within the first two weeks",
          "Connect with upperclassmen who have PM or SWE internships already",
        ],
      },
      {
        time: "Major",
        task: "Ideal: Computer Science, Software Engineering, Data Science, IT, or Cognitive Science. Any engineering discipline (MechE, Aerospace, Industrial) works too. Non-technical majors like Business or Econ are doable — but get a minor in Data Science or take intro CS courses.",
        sub: [
          "Dual degree with Business is a bonus if your school offers it",
          "If not CS, get at least a minor in a technical field",
          "Non-technical background means you'll have to prove technical credibility another way — start early",
        ],
      },
      {
        time: "Join clubs",
        task: "Join professional clubs immediately — consulting clubs, tech clubs, product or entrepreneurship orgs. What matters more than which club you join is joining early so you can rise into leadership by junior year.",
        sub: [
          "Best combo: one professional club (consulting, tech, product) + one social or cultural club",
          "Look for clubs that work with clients or do real projects — that's PM-adjacent experience",
          "These clubs are your best source of alumni referrals when it matters most",
          "Berkeley, Michigan, UT, UNC, etc. have strong club cultures — take advantage if yours does too",
        ],
      },
      {
        time: "No clubs?",
        task: "Get a group of friends and build something. Identify a real problem at your school or in your community and build a simple solution. Even a basic MVP counts — it simulates PM work directly.",
        sub: [
          "Use tools like ChatGPT, Cursor, Glide, Figma, Notion, Framer, Vercel, or Bubble to ship quickly",
          "It's about learning to solve problems using technology — a direct PM skill",
          "Example problems: textbook swap tool, dorm Slack bot, scholarship tracker",
        ],
      },
      {
        time: "No project?",
        task: "Research is great too. Talk to professors after class or during office hours. Send thoughtful cold emails. Any STEM field works — what matters is taking something from ideation to delivery.",
        sub: [
          "Research your school's lab websites and find professors doing interesting work",
          "Send personalized emails — mention their specific project, not just your interest",
          "Building a relationship with a professor opens doors to recommendations and research funding",
        ],
      },
      {
        time: "Resume",
        task: "Build your college-level resume now. Start from your high school resume and replace things as you join college clubs and projects. A well-formatted resume as a freshman is a green flag to recruiters — even with light experience.",
        sub: [
          "Use Harvard's resume formatting guide (linked in Resources)",
          "Get feedback from PMs, peers, or experienced upperclassmen",
          "Every bullet should start with a strong action verb",
        ],
      },
      {
        time: "Elevator pitch",
        task: "Write and practice your 30-second elevator pitch. This is crucial for career fairs, networking events, and interviews. Tailor it to whoever you're talking to. Start practicing early — confidence compounds.",
        sub: [
          "Use the CMU elevator pitch guide (linked in Resources)",
          "Practice with friends, in the mirror, or record yourself",
          "Your pitch changes as you gain experience — but get the foundation down now",
        ],
      },
      {
        time: "LeetCode",
        task: "Start LeetCode if you want SWE internships — it's the main filter. Even without an internship lined up, start now so you're ahead by sophomore year. 2–3 problems per week, focus on patterns.",
        sub: [
          "Arrays, strings, hashmaps — cover the basics first",
          "LeetCode is a skill that compounds: starting now is worth 10x more than starting junior year",
        ],
      },
      {
        time: "Networking",
        task: "Attend every relevant event: career fairs, tech talks, conferences (NSBE, SHPE, SWE, AfroTech). Freshmen almost never land roles through cold applications — relationships are the path. Practice confidence by talking to professionals regularly.",
        sub: [
          "Even if you don't land anything at a fair, you practiced and made connections",
          "Alumni from your school are the warmest leads — find them on LinkedIn",
          "Follow up within 24 hours of every conversation you have",
        ],
      },
      {
        time: "Just taking classes?",
        task: "That's okay too. College is hard — especially freshman year. Focus on adjusting and finding your balance. No need to stress if you're not doing everything at once. You'll catch up.",
      },
    ],
    summer: {
      intro: "Primary goal: get any technical or product-facing experience. Don't worry about perfection — any real experience beats nothing.",
      items: [
        {
          time: "SWE internship",
          task: "Top priority. Technical credibility from a SWE internship makes PM recruiting easier — many companies actually want PMs who've built things. Apply to all underclassman-specific programs.",
          sub: [
            "Google STEP — most competitive underclassman SWE program",
            "Microsoft Explore (SWE/PM hybrid) — great for sophomores too",
            "NVIDIA Ignite — strong for hardware-adjacent PM roles",
            "UberSTAR Program — check their careers page in August",
            "Meta University — Meta's underclassman SWE program",
          ],
        },
        {
          time: "Research",
          task: "Work under a professor in any STEM department. Builds technical expertise, strengthens professor relationships, and shows long-term initiative.",
        },
        {
          time: "Personal project",
          task: "Identify a problem, build an MVP, test with real users, iterate. A documented project with actual users becomes a strong interview story.",
        },
        {
          time: "Summer classes",
          task: "Useful for lightening your sophomore load or exploring design, HCI, or data analysis.",
        },
        {
          time: "Grind LeetCode",
          task: "If you don't get an internship, make LeetCode your job. Doing this prep early gives you a huge edge when SWE applications open sophomore year.",
        },
      ],
    },
  },
  {
    id: "sophomore",
    label: "Sophomore Year",
    shortLabel: "Sophomore",
    subtitle: "Build real experience. Take initiative and lead.",
    accent: "text-[#059669]",
    bg: "bg-[#ECFDF5]",
    border: "border-[#059669]",
    dot: "bg-[#059669]",
    applicationsBanner: {
      opens: "Applications open: August – October",
      note: "Same window as freshman year — but now you have experience and referrals to work with. Have your resume ready before classes start. Apply within 24 hours of roles going live.",
    },
    callouts: [
      { type: "info", text: "APM programs (Google APM, Meta RPM, Salesforce APM, etc.) recruit juniors for internships — that's next year. Use sophomore year to build the experience and relationships that make your junior year application compelling. The groundwork you lay now is what gets you the referral and the interview." },
      { type: "tip", text: "Leadership is a HUGE signal for PM. Recruiters scan your resume in seconds — a leadership title (VP, director, project lead) stops their eye. 'Member' does not. Get a title this year." },
    ],
    tiers: [
      { tier: 1, label: "SWE Internship", detail: "Still the top priority. Two summers of SWE experience going into junior year is the ideal setup for PM recruiting.", highlight: true },
      { tier: 2, label: "PM Internship", detail: "Hard to land without experience, but possible if you have strong club leadership, projects, or a referral. Use your story intentionally." },
      { tier: 3, label: "Startup (Technical Role)", detail: "Startup internships often give you more hands-on product work than big company internships. Less prestige, more reps." },
      { tier: 4, label: "Consulting / Business Internship", detail: "Shows structured thinking and client communication — PM-adjacent skills. Good if SWE or PM doesn't work out." },
      { tier: 5, label: "Research", detail: "Staying in a research lab shows follow-through and technical depth. Especially strong if you can publish or present." },
      { tier: 6, label: "Personal Project / Hackathon", detail: "If nothing else lands, build something real. Users + iteration = a story you can tell in every interview." },
    ],
    duringYear: [
      {
        time: "Lead your club",
        task: "Take a leadership role in the clubs you joined freshman year — project lead, VP, director, event organizer. This is the move. Companies look for leadership when evaluating PM candidates. A leadership title on your resume is worth more than most other lines.",
        sub: [
          "My personal rule: one social/cultural club + one professional club",
          "If you can't get a formal title, create a project or event and own it end-to-end",
          "Document your impact — PMs need to quantify their work, so start practicing now",
        ],
      },
      {
        time: "Personal project",
        task: "Build and ship something with friends. Bonus points if you get real users and iterate on feedback. Even a small project demonstrates product thinking when you can explain the problem, the build decisions, and what you learned.",
      },
      {
        time: "Resume",
        task: "By now, most high school experience should be removed. Every bullet should highlight project ownership, technical depth, leadership roles, and measurable outcomes.",
        sub: [
          "Start with a strong action verb: 'Led', 'Built', 'Reduced', 'Launched', 'Managed'",
          "Quantify everything you can: X% improvement, Y users, Z dollars saved",
          "Get feedback from at least 3 people — ideally including a PM or engineer",
        ],
      },
      {
        time: "Interview prep",
        task: "Start learning PM interview frameworks now. Don't wait until junior year. Product design, metrics, strategy, estimation — the frameworks take time to internalize. Start understanding the structure before you worry about polish.",
        sub: [
          "Practice at least once a week with friends, AI, or solo",
          "Use Exponent, Product Alliance, or the Interview Frameworks section of this site",
          "Focus on product design and product sense first — they're the most common",
        ],
      },
      {
        time: "Coffee chats",
        task: "Start building relationships with PMs, APMs, and engineers at companies you're targeting. Use LinkedIn and Apollo.io. Ask about their work, their path, and what they wish they'd known. Do not ask for a referral in the first message — build rapport first.",
        sub: [
          "Goal: 2–3 coffee chats per month",
          "Go in with a learning mindset — ask about day-to-day, surprises, and advice for someone in your position",
          "Always send a thank-you note within 24 hours. Always.",
          "The referrals you need junior year come from the relationships you build sophomore year",
        ],
      },
      {
        time: "Apollo.io",
        task: "Use Apollo.io to find professional email addresses for PMs and recruiters at your target companies. Craft tight 3-sentence cold emails: (1) who you are, (2) why you're reaching out to them specifically, (3) one clear ask.",
        sub: [
          "Don't spam. Be intentional. 10 thoughtful emails beat 100 copy-paste ones",
          "Mention something specific about their work or their company",
          "Your ask should be small: a 20-minute call, not a job",
        ],
      },
      {
        time: "LeetCode",
        task: "Keep building toward SWE-level interview readiness. Consistent weekly practice compounds. If you want a SWE internship this summer, this is non-negotiable.",
      },
    ],
    summer: {
      intro: "Goal: a PM or SWE internship — this summer sets up junior year. The stronger your story here, the better your shot at APM programs.",
      items: [
        {
          time: "SWE internship",
          task: "Still the top priority for sophomore summer. Two summers of SWE experience going into junior year is the ideal PM recruiting setup. Technical credibility opens PM doors.",
          sub: [
            "Referrals matter — use connections from coffee chats and club alumni",
            "Apply to the same underclassman programs plus general SWE internship roles",
          ],
        },
        {
          time: "PM internship",
          task: "Hard to land without experience, but not impossible. Use club leadership, research, or a project as your PM story. Nail the product design and strategy frameworks.",
        },
        {
          time: "Startup experience",
          task: "If formal internships don't pan out, offer to help a startup with product work — paid or unpaid. Many are open to remote help. You'll often get more hands-on PM experience in a smaller environment than a big company.",
        },
        {
          time: "Intense PM prep",
          task: "Start intensive PM interview prep this summer. Treat it as a pre-bootcamp for junior year. Daily or weekly mocks with friends, AI tools, or mentors. Build your confidence and storytelling well before applications open.",
          sub: [
            "Use Exponent, Product Alliance, or the Interview Frameworks section here",
            "Do mock interviews with friends who are also prepping — 15–20 mocks before your first real one",
            "Review every framework: product design, strategy, metrics, estimation, behavioral",
          ],
        },
        {
          time: "Research / projects",
          task: "If nothing formal lands, build something impressive: a documented MVP with users, a hackathon team win, or continuing your research lab work. These become centerpiece interview stories.",
        },
      ],
    },
  },
  {
    id: "junior",
    label: "Junior Year",
    shortLabel: "Junior",
    subtitle: "This is your moment. Go all in.",
    accent: "text-[#7C3AED]",
    bg: "bg-[#F5F3FF]",
    border: "border-[#7C3AED]",
    dot: "bg-[#7C3AED]",
    applicationsBanner: {
      opens: "Applications open: July – October",
      note: "This is the year. Your application should be READY before school starts. Apply within 24 hours of a role going live — early applicants have a real advantage in rolling review cycles.",
    },
    tiers: [
      { tier: 1, label: "PM Internship (w/ Return Offer)", detail: "The goal. Get the offer, crush the internship, convert to return. Senior year becomes stress-free.", highlight: true },
      { tier: 2, label: "SWE Internship", detail: "Still strong. Technical credibility + return offer pipeline keeps your options open for full-time PM recruiting." },
      { tier: 3, label: "Startup PM / Product Work", detail: "If APM programs don't land, product work at a funded startup is a legitimate PM entry point." },
      { tier: 4, label: "PM-Adjacent Role (BizOps, Strategy, PMM)", detail: "BizOps at Uber/DoorDash, Product Marketing, Strategy & Ops — strong bridge roles into PM." },
      { tier: 5, label: "Consulting Internship", detail: "Shows structured problem-solving. Strong if you're targeting enterprise PM roles (Salesforce, Workday, SAP)." },
      { tier: 6, label: "Build Your Own Product", detail: "Last resort — but a well-documented product with users is better than nothing. Treat it like a PM internship." },
    ],
    callouts: [
      { type: "clock", text: "Applications for PM internships open between July and October. By the time school starts, your resume should be polished, referrals lined up, and target list ready. Apply within 24 hours of any role going live." },
      { type: "tip", text: "Referrals change everything. One referral from a current APM to Google's program is worth 100 cold applications. That's why the coffee chat grind from freshman and sophomore year matters — those contacts become your referral network." },
    ],
    duringYear: [
      {
        time: "Apply immediately",
        task: "Apply to every APM program the moment they open. Set a calendar reminder for August 1 to check every careers page. Applications are reviewed on a rolling basis — applying in October to a program that opened in July is worse than applying in July.",
        sub: [
          "Google APM — most competitive (~60 spots), opens August/September",
          "Meta RPM (Rotational PM) — opens August, rotates across 2–3 teams",
          "Salesforce APM — opens September, less competition than Google/Meta",
          "Microsoft Explore (SWE/PM hybrid) — opens August",
          "LinkedIn RPM — opens September, strong alumni network",
          "Atlassian APM — opens September/October, great for devtools PM track",
          "Workday APM — opens October, enterprise focus",
          "NVIDIA Ignite — opens September, strong for hardware-adjacent PM",
          "Uber UberSTAR — check their careers page in August",
        ],
      },
      {
        time: "Get referrals",
        task: "Reach out to PMs and APMs you've chatted with at your target companies. Make it easy for them: attach your resume, one sentence on why you're excited about the role, and explicitly ask if they can submit a referral. Most people who like you will say yes — but you have to ask.",
        sub: [
          "Be specific: 'I just applied to the Google APM program (req ID: XXXXX) — would you be willing to submit a referral?'",
          "Keep your referral contacts on speed dial — apply the day a role opens and ask same day",
          "If you've maintained the relationship well, this is not a big ask",
        ],
      },
      {
        time: "Mock interviews",
        task: "Weekly mock PM interviews are non-negotiable. By the time your first real interview happens, you should have done 15–20 mocks. This is the difference between fumbling through frameworks and owning the room.",
        sub: [
          "Rotate through: product design, strategy, metrics, estimation, root cause, behavioral",
          "Record your mocks and watch them back — painful but effective",
          "Use Exponent for structured mocks with strangers",
          "Product Haven Slack has a #mock-interviews channel — use it",
          "Product design and product sense are the most common — those should be a fastbreak layup by now",
        ],
      },
      {
        time: "Resume polish",
        task: "Your resume should be complete and polished by September. Every bullet starts with a strong action verb. Every achievement is quantified. Your internship experience is the top bullet. Get feedback from at least 3 people.",
      },
      {
        time: "LinkedIn",
        task: "Clean up your LinkedIn — make sure it matches your resume and is optimized for recruiters. Your headline should signal intent clearly (e.g., 'Aspiring PM | CS @ [University]'). Recruiters search LinkedIn actively.",
      },
      {
        time: "Product teardowns",
        task: "Do product teardowns weekly. Pick an app you use, write 300–500 words on what's working, what's broken, and what you'd change. Post on LinkedIn. Builds your product sense and gives you concrete examples for interviews.",
      },
      {
        time: "Stay active",
        task: "Stay active on LinkedIn, Product Haven Slack, and APM Season (apmseason.com) to know when roles go live. Don't neglect your social life — mental health and balance matter for interview performance.",
      },
    ],
    summer: {
      intro: "The goal is a PM internship with a return offer. If you land one and convert it, senior year is effectively locked — you show up just to graduate.",
      items: [
        {
          time: "Got the PM internship?",
          task: "Crush it. Treat it like a full-time tryout. Ask for feedback regularly, show initiative, track your wins, and build relationships across the team.",
          sub: [
            "Deliver on your project — scope it tightly if you need to, but ship something real",
            "Ask your manager directly: 'What would make this a return offer?'",
            "Connect with other interns and full-time PMs — your network at this company just expanded",
          ],
        },
        {
          time: "No PM internship?",
          task: "Build your own product, help a startup with product work, or get a PM-adjacent role (BizOps, Product Marketing, Strategy & Ops). A PM-adjacent role is not a failure — it's a bridge. Use it intentionally.",
          sub: [
            "Build something and document the entire process — problem, users, PRD, MVP, metrics",
            "Treat this summer as a PM bootcamp: daily mocks, frameworks, whiteboarding",
            "Start intense prep for senior year full-time applications in September",
          ],
        },
      ],
    },
  },
  {
    id: "senior",
    label: "Senior Year",
    shortLabel: "Senior",
    subtitle: "Wrap it up. Make your next move intentional.",
    accent: "text-[#D97706]",
    bg: "bg-[#FFFBEB]",
    border: "border-[#D97706]",
    dot: "bg-[#D97706]",
    applicationsBanner: {
      opens: "Applications open: August – October",
      note: "Full-time APM and new grad PM applications open the same window as internships. Be ready before the semester starts. Evaluate any return offer carefully before the deadline — don't let it expire.",
    },
    tiers: [
      { tier: 1, label: "Full-Time PM / APM Program", detail: "The dream. Google APM, Meta RPM, Salesforce APM, LinkedIn, Atlassian, Workday — apply to all of them.", highlight: true },
      { tier: 2, label: "PM Role at Startup", detail: "Early-stage startups (Seed–Series A) often hire first-time PMs. Less structure, more ownership." },
      { tier: 3, label: "Strategy & Operations", detail: "Uber Ops, DoorDash, Google BizOps — fast-paced, high visibility, strong PM transition path within 1–2 years." },
      { tier: 4, label: "Associate PM at Smaller Company", detail: "Same role, less brand name. Real PM work, faster feedback loops, often easier to land." },
      { tier: 5, label: "Product Analyst / Data Analyst", detail: "Strong if you have a technical background. Transition to PM within 12–18 months is common." },
      { tier: 6, label: "SWE, UX Research, Consulting, TPM", detail: "All legitimate bridges. Most PMs break in from adjacent roles. This is the normal path, not the fallback." },
    ],
    callouts: [
      { type: "clock", text: "Full-time APM applications open August–October. Same urgency as internships — have everything ready before the semester starts." },
      { type: "tip", text: "This is when APM programs open their full-time tracks — the same programs (Google APM, Meta RPM, Salesforce APM, etc.) that recruited juniors for internships now recruit seniors and new grads for full-time roles. If you interned at one of these companies, evaluate your return offer first. If not, apply to all of them immediately when they open." },
      { type: "info", text: "If you have a return offer from a strong internship — evaluate it carefully. Consider compensation, team quality, and growth trajectory. Don't assume returning is always right, but don't gamble a great offer chasing marginal upside." },
    ],
    duringYear: [
      {
        time: "Apply to FT roles",
        task: "Apply to full-time APM and PM programs the moment they open. Same programs as junior year, plus companies that don't have formal APM tracks but hire new grad PMs.",
        sub: [
          "Focus: Google APM, Meta RPM, Salesforce APM, LinkedIn, Atlassian, Workday",
          "Also target: Stripe, Airbnb, DoorDash, Figma, Notion, Robinhood",
          "Enterprise companies (Salesforce, ServiceNow, Workday) have less competition — worth prioritizing",
          "Cast a wide net. Let their decisions be selective, not yours",
        ],
      },
      {
        time: "Evaluate offers",
        task: "Total compensation = base + bonus + equity. Factor in cost of living and tax rates. A $130k offer in SF might be less than $110k in Austin after everything.",
        sub: [
          "Use levels.fyi for PM comp data by company and level",
          "APM base salaries range $120k–$160k at top tech companies (as of recent years — verify current data)",
          "Always negotiate — the first offer is almost never the final offer",
          "Ask: which team would I join, what does the PM development program look like, what's the promo timeline",
        ],
      },
      {
        time: "Keep mocking",
        task: "Continue weekly mock interviews through the fall. Stay sharp — full-time interviews are the same format as intern interviews but with higher expectations on polish and depth.",
      },
      {
        time: "One last project",
        task: "If you have capacity, launch or refine a project this semester. It's great interview content and a case study you can reference for years.",
      },
      {
        time: "No PM job yet?",
        task: "Most PMs don't start as PMs. PM-adjacent roles are a real and common path — treat them as Plan A, not Plan B.",
        sub: [
          "Strategy & Operations (Uber Ops, DoorDash, Google BizOps) — fast-paced, high visibility, strong PM transition",
          "Associate PM at smaller companies — same role, less brand name, easier to land",
          "Product Analyst / Data Analyst — transition to PM in 12–18 months",
          "UX Research — strong path for user-insights-focused PMs",
          "Management Consulting — tech practice feeds directly into PM roles",
          "Program / Project Management (TPM) — common stepping stone, especially at big tech",
          "SWE — strongest bridge. Engineers-turned-PMs have natural credibility in technical reviews",
        ],
      },
      {
        time: "Stay balanced",
        task: "Senior year can feel high-pressure. Make sure you're sleeping, staying social, and enjoying your last year of undergrad. Reflect on what kind of companies and products you actually want to work on — not just brand names.",
      },
    ],
    summer: {
      intro: "Start your full-time role. Whether you landed PM or a bridge role, be intentional about the move and hit the ground running.",
      items: [
        {
          time: "Got a PM role?",
          task: "Celebrate — you're ahead of the game. Reach out to your future manager before day one and ask if there's anything you can study or prep. Review product sense and technical skills to ensure a smooth transition.",
        },
        {
          time: "In a bridge role?",
          task: "The transition from adjacent roles to PM typically takes 12–24 months. Move: (1) volunteer to write specs and own features in your current role, (2) build relationships with PMs at your company, (3) apply internally before externally.",
          sub: [
            "Internal PM transfers are much easier than external applications — build the internal brand first",
            "Keep doing mock interviews every month to stay sharp",
            "Apply to APM programs and PM roles at startups while working — it's normal to keep looking",
          ],
        },
      ],
    },
  },
  {
    id: "postgrad",
    label: "Post-Grad",
    shortLabel: "Post-Grad",
    subtitle: "Making the transition — from adjacent roles, startups, and beyond.",
    accent: "text-[#64748B]",
    bg: "bg-[#F8FAFC]",
    border: "border-[#94A3B8]",
    dot: "bg-[#94A3B8]",
    applicationsBanner: {
      opens: "You're in the open market now",
      note: "APM programs still accept post-grad applicants (usually up to 2 years out). Mid-level PM roles open year-round. Keep networking and keep applying — the timeline is flexible.",
    },
    tiers: [
      { tier: 1, label: "Internal Transfer to PM", detail: "The fastest path if you're in a tech company. Build relationships with PMs, own product decisions in your current role, then make the move internally.", highlight: true },
      { tier: 2, label: "APM Program (Post-Grad)", detail: "Many programs accept candidates up to 2 years post-graduation. Keep applying." },
      { tier: 3, label: "PM at Early-Stage Startup", detail: "Seed–Series A startups often hire first-time PMs with domain knowledge. YC directory and AngelList are good sources." },
      { tier: 4, label: "Product Fellowship", detail: "First Round Product Fellowship, On Deck, Venture for America — immersive PM experience and mentorship." },
      { tier: 5, label: "MBA (Mid-Career)", detail: "Top programs (HBS, Wharton, Stanford GSB, Haas, Booth, Sloan) have strong PM recruiting pipelines. A 2-year, $150k–$200k investment — do the math." },
      { tier: 6, label: "Keep Building", detail: "Launch side projects. Write publicly. Share your journey on LinkedIn. Opportunities come from visibility." },
    ],
    callouts: [
      { type: "info", text: "Not landing a PM role straight out of college is completely normal. Most PMs break in after 1–3 years in adjacent roles. You are not behind. The path is not linear." },
      { type: "tip", text: "Most APM programs (Google APM, Meta RPM, Salesforce APM, etc.) accept applicants up to 1–2 years post-graduation — so you haven't missed the window. Keep applying to those programs while building experience in an adjacent role. The combination of real work experience plus a strong interview makes post-grad candidates more compelling, not less." },
    ],
    duringYear: [
      {
        time: "Adjacent → PM",
        task: "If you're in a PM-adjacent role, the transition typically takes 12–24 months. The move: (1) volunteer to write specs and own features in your current role, (2) build relationships with PMs at your company, (3) apply internally before externally — internal transfers are significantly easier.",
      },
      {
        time: "Startups",
        task: "Early-stage startups (Seed–Series A) are often willing to hire first-time PMs, especially if you have domain knowledge. Title, autonomy, and equity upside — but less structured mentorship.",
        sub: [
          "Use YC's company directory (ycombinator.com/companies) to find funded startups",
          "AngelList / Wellfound for startup PM job listings",
          "Reach out directly to founders at the early stage — most are accessible on LinkedIn or Twitter",
        ],
      },
      {
        time: "Fellowships",
        task: "PM-specific fellowships offer immersive experience and strong networks:",
        sub: [
          "First Round's Product Fellowship — mentorship and immersive PM experience",
          "On Deck (Beondeck) — cohort-based PM community",
          "Venture for America — startup-leaning, great for product exposure",
          "Code2040 — for Black and Latino technologists",
        ],
      },
      {
        time: "MBA",
        task: "An MBA is a legitimate PM path — especially for mid-career switchers or those wanting to break in at a senior level. Top programs (HBS, Wharton, Stanford GSB, Haas, Booth, Sloan) have strong PM recruiting pipelines. This is a 2-year, $150k–$200k investment — do the math carefully.",
      },
      {
        time: "Keep building",
        task: "Build side projects, write publicly, stay active on LinkedIn. A PM who can show a shipped product — even small — has a real advantage in interviews. Launch something on Product Hunt. Write product teardowns. Share your journey — opportunities come from visibility.",
      },
      {
        time: "Keep applying",
        task: "Stay in the habit of practicing interviews monthly. Apply to APM programs (many accept up to 2 years post-grad) and PM roles at startups and smaller companies. Maintain momentum — many PMs break in 6–12 months post-grad.",
      },
    ],
    summer: {
      intro: "There's no distinct 'summer' in post-grad. Just keep moving — keep applying, keep building, keep networking.",
      items: [
        {
          time: "Your #1 priority",
          task: "Get into tech first. Once you're in — in any role — it's much easier to pivot into PM. The internal transfer path is well-worn and the most common route.",
        },
        {
          time: "Stay sharp",
          task: "Don't let interview skills atrophy. Do a mock PM interview every month even while working full-time. When the right opportunity opens, you want to be ready in 2 weeks, not 2 months.",
        },
      ],
    },
  },
];

export default function RoadmapPage() {
  const [active, setActive] = useState(0);
  const year = years[active];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Header */}
      <div className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#F4A825]">The PM Roadmap</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mt-2 mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          Year-by-year guide to breaking into PM
        </h1>
        <p className="text-[#64748B] text-lg leading-relaxed">
          From freshman year through post-grad. What to do every single year — including which internships to prioritize, when to apply, and how to stack experience in the right order.
        </p>
      </div>

      {/* Key reminders */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
        {[
          { label: "Apply in August", desc: "Most applications open Aug–Oct. Early applicants have a real edge." },
          { label: "GPA isn't everything", desc: "Experience matters more. Don't tank classes, but know your priorities." },
          { label: "Referrals > cold apps", desc: "Build real relationships. Referrals change the game." },
          { label: "Balance is real", desc: "You're in college once. Work hard, but please enjoy it." },
        ].map((item) => (
          <div key={item.label} className="p-3 border border-[#E2E8F0] rounded-lg bg-white">
            <p className="font-semibold text-[#0F172A] text-xs mb-1">{item.label}</p>
            <p className="text-xs text-[#64748B]">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Tab bar */}
      <div className="flex gap-1 mb-8 bg-[#F1F5F9] rounded-xl p-1 overflow-x-auto">
        {years.map((y, i) => (
          <button
            key={y.id}
            onClick={() => setActive(i)}
            className={`flex-1 min-w-max px-4 py-2.5 text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
              active === i
                ? "bg-white text-[#0F172A] shadow-sm"
                : "text-[#64748B] hover:text-[#0F172A]"
            }`}
          >
            {y.shortLabel}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div key={year.id} className={`border-l-4 ${year.border} ${year.bg} rounded-r-xl p-6 sm:p-8`}>

        {/* Year header */}
        <div className="mb-6">
          <h2 className={`text-2xl font-bold ${year.accent} mb-1`}>{year.label}</h2>
          <p className="text-sm text-[#64748B] italic">{year.subtitle}</p>
        </div>

        {/* Applications banner */}
        <div className="flex items-start gap-3 bg-white border border-[#E2E8F0] rounded-xl p-4 mb-6">
          <div className={`w-2 h-2 rounded-full ${year.dot} flex-shrink-0 mt-1.5`} />
          <div>
            <p className="text-xs font-bold text-[#0F172A] uppercase tracking-widest mb-1">{year.applicationsBanner.opens}</p>
            <p className="text-sm text-[#64748B] leading-relaxed">{year.applicationsBanner.note}</p>
          </div>
        </div>

        {/* Internship tiers */}
        <div className="mb-8">
          <p className="text-xs font-bold text-[#0F172A] uppercase tracking-widest mb-3">Internship Priority — What to Aim For This Summer</p>
          <div className="space-y-2">
            {year.tiers.map((t) => (
              <div
                key={t.tier}
                className={`flex items-start gap-3 px-4 py-3 rounded-lg border ${
                  t.highlight
                    ? "bg-white border-[#F4A825] shadow-sm"
                    : "bg-white border-[#E2E8F0]"
                }`}
              >
                <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  t.highlight ? "bg-[#F4A825] text-white" : "bg-[#F1F5F9] text-[#64748B]"
                }`}>
                  {t.tier}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-semibold ${t.highlight ? "text-[#F4A825]" : "text-[#0F172A]"}`}>{t.label}</p>
                  <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">{t.detail}</p>
                </div>
                {t.highlight && <ChevronRight size={14} className="text-[#F4A825] flex-shrink-0 mt-0.5" />}
              </div>
            ))}
          </div>
        </div>

        {/* Callouts */}
        {year.callouts?.map((c, i) => (
          <Callout key={i} type={c.type}>{c.text}</Callout>
        ))}

        {/* During the year */}
        <div className="mt-6 mb-8">
          <p className="text-xs font-bold text-[#0F172A] uppercase tracking-widest mb-4">During the School Year</p>
          <div className="space-y-5">
            {year.duringYear.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-28 text-xs font-semibold text-[#94A3B8] uppercase tracking-wide pt-0.5 leading-tight">
                  {item.time}
                </div>
                <div className="flex-1 border-l border-[#E2E8F0] pl-4">
                  <p className="text-sm text-[#374151] leading-relaxed">{item.task}</p>
                  {item.sub && (
                    <ul className="mt-2 space-y-1">
                      {item.sub.map((s, j) => (
                        <li key={j} className="flex gap-2 text-xs text-[#64748B] leading-relaxed">
                          <span className="text-[#94A3B8] flex-shrink-0 mt-0.5">→</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summer section */}
        <div className="bg-[#0F172A] rounded-xl p-6">
          <p className="text-xs font-bold text-white uppercase tracking-widest mb-2">Summer</p>
          <p className="text-sm text-[#94A3B8] leading-relaxed mb-5">{year.summer.intro}</p>
          <div className="space-y-4">
            {year.summer.items.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-28 text-xs font-semibold text-[#64748B] uppercase tracking-wide pt-0.5 leading-tight">
                  {item.time}
                </div>
                <div className="flex-1 border-l border-[#1E293B] pl-4">
                  <p className="text-sm text-[#CBD5E1] leading-relaxed">{item.task}</p>
                  {item.sub && (
                    <ul className="mt-2 space-y-1">
                      {item.sub.map((s, j) => (
                        <li key={j} className="flex gap-2 text-xs text-[#64748B] leading-relaxed">
                          <span className="text-[#334155] flex-shrink-0 mt-0.5">→</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab navigation */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setActive(Math.max(0, active - 1))}
            className={`text-sm font-medium text-[#64748B] hover:text-[#0F172A] transition-colors ${active === 0 ? "invisible" : ""}`}
          >
            ← {years[active - 1]?.shortLabel}
          </button>
          <button
            onClick={() => setActive(Math.min(years.length - 1, active + 1))}
            className={`text-sm font-medium text-[#64748B] hover:text-[#0F172A] transition-colors ${active === years.length - 1 ? "invisible" : ""}`}
          >
            {years[active + 1]?.shortLabel} →
          </button>
        </div>
      </div>

      {/* APM Programs table */}
      <div className="mt-14">
        <h2 className="text-2xl font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>APM Programs — the full list</h2>
        <p className="text-[#64748B] mb-6 text-sm">Apply to all of them. Don&apos;t be selective with your applications — let their decisions be selective.</p>
        <div className="overflow-x-auto rounded-xl border border-[#E2E8F0]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0F172A] text-white">
                <th className="text-left px-4 py-3 font-semibold">Company</th>
                <th className="text-left px-4 py-3 font-semibold">Program</th>
                <th className="text-left px-4 py-3 font-semibold">Opens</th>
                <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Google", "APM Program", "Aug–Sep", "Most competitive. ~60 spots. Apply first."],
                ["Meta", "RPM (Rotational PM)", "Aug–Sep", "Rotates across 2–3 teams over 18 months."],
                ["Salesforce", "APM Program", "Sep–Oct", "Strong enterprise track. Less competition than Google/Meta."],
                ["Microsoft", "Explore (SWE/PM hybrid)", "Aug–Sep", "Sophomore-focused. Mix of PM and SWE work."],
                ["LinkedIn", "RPM", "Sep", "Solid program, strong alumni network."],
                ["Atlassian", "APM Program", "Sep–Oct", "Great for devtools/B2B PM career track."],
                ["Workday", "APM Program", "Oct", "Enterprise focus. Opens later than most."],
                ["NVIDIA", "Ignite Program", "Sep", "Strong for hardware-adjacent PM roles."],
                ["Uber", "UberSTAR", "Aug–Sep", "Check careers page — timing varies by year."],
                ["Google", "STEP (SWE, underclassmen)", "Sep", "Freshmen/sophs with CS background."],
                ["Meta", "Meta University (SWE)", "Sep", "Meta's underclassman SWE program."],
              ].map(([co, prog, opens, notes], i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                  <td className="px-4 py-3 font-medium text-[#0F172A]">{co}</td>
                  <td className="px-4 py-3 text-[#374151]">{prog}</td>
                  <td className="px-4 py-3 text-[#F4A825] font-medium whitespace-nowrap">{opens}</td>
                  <td className="px-4 py-3 text-[#64748B] hidden md:table-cell">{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Next steps */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/careers/prep" className="group p-5 border border-[#E2E8F0] rounded-xl hover:border-[#F4A825] transition-colors">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8] mb-1">Next</p>
          <p className="font-bold text-[#0F172A] group-hover:text-[#F4A825] transition-colors">10-Week Interview Prep →</p>
          <p className="text-sm text-[#64748B] mt-1">Week-by-week plan to get interview-ready.</p>
        </Link>
        <Link href="/careers/interviews" className="group p-5 border border-[#E2E8F0] rounded-xl hover:border-[#F4A825] transition-colors">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8] mb-1">Also</p>
          <p className="font-bold text-[#0F172A] group-hover:text-[#F4A825] transition-colors">Interview Frameworks →</p>
          <p className="text-sm text-[#64748B] mt-1">Every PM interview type with full walkthroughs.</p>
        </Link>
      </div>
    </div>
  );
}
