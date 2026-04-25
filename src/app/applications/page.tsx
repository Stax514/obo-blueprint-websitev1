import SectionLayout from "@/components/SectionLayout";
import { AlertCircle, Lightbulb } from "lucide-react";

const essayTips = [
  {
    title: "Tell them your story — specifically",
    body: "Tell them your story. Tell them what kind of work you're interested in. Tell them what you've already been doing. That's the formula. Tsadiku did projects connected to beats, to lyrics, to the things he personally loved. That brought him closer to the major he ended up choosing and the career he ended up in. Let one passion fuel the other.",
  },
  {
    title: "Sound like yourself — not a student performing",
    body: "If you wouldn't say it out loud to a friend, don't write it. The best essays sound like a real person talking. Read your draft out loud — if it sounds stiff, rewrite it. Admissions officers read thousands of essays. They can tell immediately when something is authentic versus when someone is trying to impress them.",
  },
  {
    title: "Show, don't tell",
    body: "Don't write 'I am a leader.' Show a specific moment where you led. Don't write 'I am resilient.' Show the moment you got back up. Details do the heavy lifting. The narrower the topic, the more powerful the essay.",
  },
  {
    title: "You have to show them who you are before you can ask them to bet on who you'll become",
    body: "Your experience growing up as a Black student in America — the challenges you've navigated, the ways your community shaped you, the things you figured out on your own — these are compelling. Don't water them down. You have to show them who you are before you can ask them to bet on who you'll become.",
  },
  {
    title: "Start way earlier than you think",
    body: "The best essays go through 8–10 drafts. Start brainstorming in junior year. Have a rough draft done by July of senior year. Give yourself space to let it breathe and come back to it. Waiting until October of senior year is the single most common mistake we see.",
  },
  {
    title: "Get real feedback, not just praise",
    body: "Ask people to tell you what's unclear, what feels generic, what doesn't sound like you. Praise feels good but it doesn't improve the essay. You want honest, specific notes from people who'll actually tell you the truth.",
  },
];

const appComponents = [
  {
    label: "Common App",
    desc: "The main application platform used by 900+ colleges. You fill it out once and submit to multiple schools. Most of your application lives here — treat it like a professional document, not a school assignment.",
    important: true,
  },
  {
    label: "Personal Essay (650 words)",
    desc: "Your main essay. Submitted through Common App. This is your only chance to speak directly to the admissions committee in your own voice. It's the most important piece of writing you'll do in high school.",
    important: true,
  },
  {
    label: "Supplemental Essays",
    desc: "Additional essays required by specific schools. 'Why [school]?' essays, topic prompts, short answers. Research each school's specific prompts carefully — these matter a lot and generic answers get spotted immediately.",
    important: true,
  },
  {
    label: "Activities List",
    desc: "150 characters per activity to describe what you did, your role, and impact. 10 slots. Treat each like a mini-resume bullet. Every word counts. Order from most to least impressive.",
    important: true,
  },
  {
    label: "Letters of Recommendation",
    desc: "Usually 2 teacher recommendations plus 1 counselor rec. Ask junior year, give teachers full context about your goals and what you want them to highlight. Follow up. A strong rec can change an admissions decision.",
    important: true,
  },
  {
    label: "Transcript",
    desc: "Your grades, course rigor, and GPA. Sent by your school. Make sure your counselor has your correct information and knows which schools you're applying to.",
    important: false,
  },
  {
    label: "Test Scores (SAT/ACT)",
    desc: "Many schools are test-optional. If your scores are strong, submit them. If they're not, check each school's policy carefully. Don't stress about tests more than essays — essays are in your control.",
    important: false,
  },
  {
    label: "CSS Profile",
    desc: "A more detailed financial aid form required by 400+ colleges and scholarship programs. If your target schools require it, submit it immediately after Oct 1. Missing this form costs you real money.",
    important: false,
  },
];

const commonMistakes = [
  "Waiting until October of senior year to start essays",
  "Writing essays that read like a resume, not a person",
  "Using the same essay for every supplemental — they can tell",
  "Not proofreading — typos and errors are jarring to admissions officers",
  "Applying to only reach schools or only safety schools — build a real list",
  "Missing deadlines — even by one day can disqualify you completely",
  "Not confirming that recommenders actually submitted their letters",
  "Forgetting to click 'submit' — a draft that isn't submitted is not an application",
];

export default function ApplicationsPage() {
  return (
    <SectionLayout
      eyebrow="Section 04 — Applications"
      title={`The application,\ndemystified.`}
      subtitle="The process is confusing by design. Here's everything broken down — from the Common App to writing an essay that actually sounds like you and gets you in."
      quote="I received a likely letter from Harvard and got into Yale, Berkeley MET — about 1% acceptance — and others. The formula was the same every time: tell your story, show your work, be specific."
      accentColor="#1A1A2E"
      accentBg="bg-[#1A1A2E]"
      accentText="text-white"
      prevSection={{ href: "/timeline", label: "Timeline" }}
      nextSection={{ href: "/extracurriculars", label: "Extracurriculars" }}
    >
      {/* Intro */}
      <div className="max-w-3xl mb-20">
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-6"
          style={{ fontFamily: "'Libre Bodoni', serif" }}
        >
          What you&apos;re actually submitting
        </h2>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-4">
          The &quot;application&quot; isn&apos;t one thing — it&apos;s a collection of pieces, each with its own strategy. The essay is different from the activities list, which is different from the supplement. Understanding what each piece is trying to communicate is the first step to doing it right.
        </p>
      </div>

      {/* Application components */}
      <div className="mb-20">
        <p className="text-[#1A1A2E] text-xs font-semibold uppercase tracking-widest mb-4">The pieces</p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-10"
          style={{ fontFamily: "'Libre Bodoni', serif" }}
        >
          What goes in the application
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {appComponents.map((comp) => (
            <div
              key={comp.label}
              className={`border rounded-xl p-6 ${comp.important ? "border-[#1A1A2E] bg-white" : "border-[#E5E5E0] bg-[#F9F9F7]"}`}
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-bold text-[#0D0D0D] text-base" style={{ fontFamily: "'Libre Bodoni', serif" }}>
                  {comp.label}
                </h3>
                {comp.important && (
                  <span className="text-xs bg-[#1A1A2E] text-white px-2 py-0.5 rounded-full flex-shrink-0">Key</span>
                )}
              </div>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">{comp.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Essay section */}
      <div className="mb-20">
        <p className="text-[#1A1A2E] text-xs font-semibold uppercase tracking-widest mb-4">The most important part</p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4"
          style={{ fontFamily: "'Libre Bodoni', serif" }}
        >
          How to write an essay that works
        </h2>
        <p className="text-[#6B6B6B] mb-10 max-w-2xl">
          Most students approach the essay wrong — they try to sound impressive instead of real. The essay that gets you in is the one that makes an admissions officer feel like they already know you and genuinely want you there.
        </p>
        <div className="space-y-4">
          {essayTips.map((tip, i) => (
            <div key={tip.title} className="flex gap-5 bg-white border border-[#E5E5E0] rounded-xl p-6">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1A1A2E] text-white flex items-center justify-center text-sm font-bold">
                {i + 1}
              </div>
              <div>
                <h3 className="font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>
                  {tip.title}
                </h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{tip.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Prompt box */}
      <div className="mb-20 bg-[#F0F0F8] border border-[#1A1A2E]/20 rounded-2xl p-8">
        <div className="flex gap-3 mb-4">
          <Lightbulb size={20} className="text-[#1A1A2E] flex-shrink-0 mt-0.5" />
          <p className="text-[#1A1A2E] text-xs font-semibold uppercase tracking-widest">Common App Prompts (2024–25)</p>
        </div>
        <div className="space-y-3">
          {[
            "Some students have a background, identity, interest, or talent that is so meaningful they believe their application would be incomplete without it.",
            "The lessons we take from obstacles we encounter can be fundamental to later success. Recount a challenge, setback, or failure and what you learned.",
            "Reflect on a time when you questioned or challenged a belief or idea. What prompted your thinking? What was the outcome?",
            "Reflect on something that someone has done for you that has made you happy or thankful in a surprising way.",
            "Discuss an accomplishment, event, or realization that sparked a period of personal growth.",
            "Describe a topic, idea, or concept you find so engaging that it makes you lose all track of time.",
            "Share an essay on any topic of your choice.",
          ].map((prompt, i) => (
            <div key={i} className="flex gap-3 text-sm text-[#374151]">
              <span className="text-[#6B6B6B] flex-shrink-0 font-bold">{i + 1}.</span>
              <span>{prompt}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Common mistakes */}
      <div className="bg-[#0D0D0D] rounded-2xl p-8 md:p-12">
        <div className="flex gap-3 mb-6">
          <AlertCircle size={20} className="text-[#C45B3D] flex-shrink-0 mt-0.5" />
          <p className="text-[#C45B3D] text-xs font-semibold uppercase tracking-widest">Avoid these</p>
        </div>
        <h3
          className="text-2xl sm:text-3xl font-bold text-[#FAFAF7] mb-8"
          style={{ fontFamily: "'Libre Bodoni', serif" }}
        >
          The most common application mistakes
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {commonMistakes.map((mistake) => (
            <li key={mistake} className="flex gap-3 text-sm text-[#9CA3AF] p-4 bg-[#111111] rounded-lg">
              <span className="text-[#C45B3D] font-bold flex-shrink-0">✕</span>
              {mistake}
            </li>
          ))}
        </ul>
      </div>
    </SectionLayout>
  );
}
