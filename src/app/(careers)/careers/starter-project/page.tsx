import Link from "next/link";
import { ArrowLeft, Lightbulb, Users, FileText, BarChart2, Wrench, MessageCircle, RefreshCw, TrendingUp, BookOpen } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Find a Problem to Solve",
    color: "bg-[#F4A825]",
    border: "border-[#F4A825]",
    intro: "Look around your world — school, home, clubs, your city, your community.",
    content: [
      {
        label: "Ask questions like:",
        items: [
          "What do students at my school constantly complain about?",
          "What's something frustrating I experienced recently?",
          "Is there a broken system that could be improved with software?",
          "What do I wish existed but doesn't?",
          "Where do people still use pen and paper when tech could help?",
        ],
      },
    ],
    callout: {
      type: "tip",
      text: "Key principle: Start with pain, not features.",
    },
  },
  {
    number: "02",
    icon: Users,
    title: "Brainstorm a Simple Solution",
    color: "bg-[#059669]",
    border: "border-[#059669]",
    intro: "Once you've picked a problem, imagine a basic solution. It doesn't need to be flashy — just something that works.",
    content: [
      {
        label: "Tools we recommend:",
        items: [
          "Claude (claude.ai) – This entire site was built with Claude. You can do this too. Describe what you want to build, and it will write the code, debug errors, scaffold the app, and help you think through product decisions.",
          "ChatGPT / Gemini – Use an LLM to iterate on your idea before you write a single line of code. Talk through the problem, pressure-test your solution, generate user stories, and refine your thinking.",
          "Figma – Design mockups and prototypes without writing code",
          "Notion – Organize your roadmap, user feedback, and docs",
          "Vercel / Replit – Deploy what you build so real users can actually access it",
        ],
      },
    ],
    callout: {
      type: "tip",
      text: "The recommended order: use ChatGPT or Gemini to iterate on the idea → talk to real users → write your PRD → then start building with Claude end-to-end. Don't start coding until you've done the first three. That's how real PMs work.",
    },
  },
  {
    number: "03",
    icon: FileText,
    title: "Write a 1-Page PRD",
    color: "bg-[#7C3AED]",
    border: "border-[#7C3AED]",
    intro: "Treat this like a real PM assignment. Writing a PRD will help you organize your thinking and simulate real-world PM documentation.",
    content: [
      {
        label: "A simple 1-page PRD should include:",
        items: [
          "Problem Statement – Who are the users? What pain point are they experiencing?",
          "User Stories – \"As a [user], I want to [do something], so that [outcome].\"",
          "Goals / Success Metrics – What does success look like?",
          "Proposed Solution – What are you building and why?",
          "MVP Scope – What will be included in version 1? What's out of scope?",
          "Assumptions / Risks – What are you unsure about?",
        ],
      },
    ],
    callout: null,
  },
  {
    number: "04",
    icon: BarChart2,
    title: "Prioritize Features Like a PM",
    color: "bg-[#D97706]",
    border: "border-[#D97706]",
    intro: "You can't build everything — so prioritize like a real PM.",
    content: [
      {
        label: "How to prioritize:",
        items: [
          "Start with a feature brainstorm",
          "Use ICE (Impact, Confidence, Ease) — score each feature 1–10 on each dimension, multiply for total",
          "Or use MoSCoW (Must have, Should have, Could have, Won't have this version)",
          "Focus on the smallest set of features that delivers real user value",
        ],
      },
    ],
    callout: {
      type: "tip",
      text: "ICE scoring is a quick gut-check. MoSCoW is better for aligning a team on what's in vs. out of scope.",
    },
  },
  {
    number: "05",
    icon: Wrench,
    title: "Design and Build the MVP",
    color: "bg-[#0891B2]",
    border: "border-[#0891B2]",
    intro: "You're not aiming for perfection — just a working version that solves the problem.",
    content: [
      {
        label: "How to build it:",
        items: [
          "Describe what you want to Claude: 'Build me a web app that does X for Y users' — it will write the code",
          "Deploy on Vercel or Replit so real users can actually use it — not just see screenshots",
          "Design in Figma first if you want to validate the idea before building",
        ],
      },
    ],
    callout: {
      type: "info",
      text: "Document your process — how you decided what to build and why. This becomes your story in interviews. A PM who can ship something real using AI tools is exactly what companies are looking for right now.",
    },
  },
  {
    number: "06",
    icon: MessageCircle,
    title: "Test with Real Users and Get Feedback",
    color: "bg-[#DB2777]",
    border: "border-[#DB2777]",
    intro: "Now comes the real PM work: getting your product in front of people.",
    content: [
      {
        label: "How to get feedback:",
        items: [
          "Ask classmates, online communities, or friends to try it",
          "Share it with a student org or local business",
          "Use Google Forms or Typeform to collect feedback",
          "Do short interviews or user observation sessions",
        ],
      },
    ],
    callout: {
      type: "tip",
      text: "Focus on what users say, do, and struggle with — not just their compliments.",
    },
  },
  {
    number: "07",
    icon: RefreshCw,
    title: "Iterate and Improve",
    color: "bg-[#7C3AED]",
    border: "border-[#7C3AED]",
    intro: "PMs constantly iterate based on user feedback. Show that you can:",
    content: [
      {
        label: "What iteration looks like:",
        items: [
          "Identify patterns in user feedback",
          "Decide what to improve first (prioritize again)",
          "Make changes and launch a v1.1",
          "Share what changed and why — document your decisions",
        ],
      },
    ],
    callout: {
      type: "info",
      text: "This shows your ability to drive a product forward post-launch — one of the most valued PM skills.",
    },
  },
  {
    number: "08",
    icon: TrendingUp,
    title: "Track and Define Success Metrics",
    color: "bg-[#059669]",
    border: "border-[#059669]",
    intro: "Even if your app is small, showing that you thought about metrics sets you apart.",
    content: [
      {
        label: "Three metric types to track:",
        items: [
          "North Star Metric – The one metric that best reflects success (e.g., weekly active users)",
          "Supporting Metrics – Other indicators of value (e.g., signup rate, session duration)",
          "Guardrail Metrics – Metrics that ensure quality isn't sacrificed (e.g., churn, complaints)",
        ],
      },
      {
        label: "Tools to use:",
        items: [
          "Google Sheets – Simple tracking and charts",
          "Airtable – More structured data with views",
          "Analytics platforms – If available (Mixpanel, PostHog, Amplitude)",
        ],
      },
    ],
    callout: null,
  },
  {
    number: "09",
    icon: BookOpen,
    title: "Reflect and Write a Resume-Ready Summary",
    color: "bg-[#0F172A]",
    border: "border-[#0F172A]",
    intro: "Once done, write up your experience to showcase on your resume, portfolio, or LinkedIn.",
    content: [
      {
        label: "Format example:",
        items: [
          "Identified a user pain point around [problem], interviewed X users, and validated demand.",
          "Created a 1-page PRD outlining user stories, MVP scope, and metrics.",
          "Built a prototype using [tools], launched to real users, and collected feedback.",
          "Iterated based on feedback, improving [metric] by X%.",
          "Tracked key success metrics and defined future improvements.",
        ],
      },
    ],
    callout: {
      type: "tip",
      text: "Title format: Project Name | Founder + PM | Jan 2025 – Mar 2025. This structure gives you a polished project story that hiring managers will recognize as real PM experience.",
    },
  },
];

const communityPrompts = [
  { q: "Walk around your campus or neighborhood.", hint: "What do people complain about? What takes too long, costs too much, or gets lost in the cracks?" },
  { q: "Talk to 5 people in your community.", hint: "Ask them: what's the most frustrating thing about daily life here? What do they wish existed?" },
  { q: "Look for pen and paper.", hint: "Where are people still doing things manually that software could solve? That gap is usually a product." },
  { q: "Notice what gets posted in group chats.", hint: "The recurring questions, the shared frustrations, the things people ask each other for help with — those are problems worth solving." },
  { q: "Think about your own community's specific needs.", hint: "First-gen students, immigrant families, underserved neighborhoods — technology often hasn't caught up to real people's lives. You have context that others don't." },
];

const learnings = [
  "Problem discovery and validation",
  "Writing a PRD",
  "Prioritizing features",
  "Collaborating with others",
  "Building and shipping a product",
  "Talking to users and iterating",
  "Defining and tracking success metrics",
  "Communicating your impact",
];

export default function StarterProjectPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back */}
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-[#6B6B6B] hover:text-[#F4A825] transition-colors mb-8">
        <ArrowLeft size={14} />
        Back to home
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-[#FFF7ED] text-[#D97706] text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
          <Wrench size={12} />
          Starter Project
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          Build Something Real
        </h1>
        <p className="text-lg text-[#6B6B6B] leading-relaxed">
          No internship experience? Build a product. This step-by-step guide takes you from finding a problem to writing a resume-ready case study — all while building real PM skills that interviewers recognize.
        </p>
      </div>

      {/* Goal callout */}
      <div className="callout callout-info mb-10">
        <p className="font-semibold text-[#0D0D0D] mb-1">The Goal</p>
        <p className="text-[#6B6B6B]">
          Build a small, scrappy product that solves a real-world problem using technology — and treat it like you&apos;re a PM and a founder. You don&apos;t need to build the next big thing. You just need a story you can tell.
        </p>
      </div>

      {/* Pro tip */}
      <div className="callout callout-tip mb-12">
        <p className="font-semibold text-[#0D0D0D] mb-1">Do this with a group of friends</p>
        <p className="text-[#6B6B6B]">
          Building with friends makes the process more fun, more creative, and more like the real world — where PMs work with engineers, designers, and teammates every day. Even if your friends aren&apos;t technical, they can help with research, ideas, testing, and getting feedback.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-8 mb-16">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.number} className={`border-l-4 ${step.border} pl-6`}>
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-8 h-8 ${step.color} rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5`}>
                  <Icon size={14} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#94A3B8] mb-0.5">Step {step.number}</p>
                  <h2 className="text-xl font-bold text-[#0D0D0D]">{step.title}</h2>
                </div>
              </div>

              <p className="text-[#6B6B6B] leading-relaxed mb-4">{step.intro}</p>

              {step.content.map((block, i) => (
                <div key={i} className="mb-4">
                  <p className="text-sm font-semibold text-[#0D0D0D] mb-2">{block.label}</p>
                  <ul className="space-y-1.5">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#6B6B6B]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1] flex-shrink-0 mt-1.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {step.callout && (
                <div className={`callout callout-${step.callout.type} mt-4`}>
                  <p className="text-sm text-[#6B6B6B]">{step.callout.text}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Finding your project idea */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-[#0D0D0D] mb-2">How to find your project idea</h2>
        <p className="text-[#6B6B6B] mb-2 leading-relaxed">
          Don&apos;t sit at your laptop waiting for inspiration. The best product ideas come from looking at your community — the place you actually live, the people you actually know, the problems you actually see.
        </p>
        <div className="callout callout-info mb-6">
          <p className="text-sm text-[#374151]">
            <strong>The rule:</strong> Look at your community first. Every neighborhood, campus, family, and social group has problems that technology hasn&apos;t solved yet. You have context and proximity that most product teams don&apos;t. Use it.
          </p>
        </div>
        <div className="space-y-3">
          {communityPrompts.map((p, i) => (
            <div key={i} className="border border-[#E5E5E0] rounded-xl p-4 bg-white">
              <p className="text-sm font-semibold text-[#0D0D0D] mb-1">{p.q}</p>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">{p.hint}</p>
            </div>
          ))}
        </div>
        <div className="callout callout-tip mt-5">
          <p className="text-sm text-[#374151]">Once you have a problem, describe it to Claude: <em>&quot;I want to build something that helps [specific people] with [specific problem]. What should I build and how?&quot;</em> It will help you brainstorm, scope the MVP, and start building immediately.</p>
        </div>
      </div>

      {/* Founder callout */}
      <div className="border-2 border-[#F4A825] rounded-xl p-6 mb-8 bg-[#FDF8EC]">
        <p className="text-xl font-extrabold text-[#F4A825] mb-2">If you have a product with real users — congratulations, you&apos;re a founder.</p>
        <p className="text-sm text-[#374151] leading-relaxed">
          That&apos;s not a metaphor. You identified a problem, built a solution, shipped it, and got people to use it. That is exactly what founders do — and exactly what PM interviewers are looking for. Now document it, quantify it, and own it.
        </p>
      </div>

      {/* What You'll Learn */}
      <div className="bg-[#0F172A] rounded-xl p-8">
        <h2 className="text-xl font-bold text-white mb-2">What You&apos;ll Learn</h2>
        <p className="text-[#94A3B8] mb-6">By completing this project, you&apos;ll gain real PM experience in:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {learnings.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4A825] flex-shrink-0" />
              <p className="text-sm text-[#94A3B8]">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t border-[#1E293B]">
          <p className="text-sm text-[#6B6B6B]">
            Ready to take this further?{" "}
            <Link href="/careers/interviews" className="text-[#F4A825] hover:underline">
              Study the interview frameworks
            </Link>{" "}
            so you can walk through this project confidently in a product design question.
          </p>
        </div>
      </div>
    </main>
  );
}
