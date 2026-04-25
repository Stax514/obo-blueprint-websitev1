import SectionLayout from "@/components/SectionLayout";

const grades = [
  {
    grade: "9th Grade",
    subtitle: "Build your foundation — and join things early",
    color: "bg-[#FFF9EC] border-[#F4A825]",
    accent: "text-[#C4841A]",
    items: [
      { time: "Fall", task: "Start strong academically — freshman year GPA matters more than people think and it's the easiest time to build momentum." },
      { time: "Year-round", task: "Join 1–2 clubs or activities that genuinely interest you. This is the move: join early so you can move up into leadership positions by junior or senior year. That's the play." },
      { time: "Year-round", task: "Build a relationship with at least one teacher — not for the rec letter yet, just because mentors matter." },
      { time: "Spring", task: "Think about summer now. Summer programs, jobs, volunteer work — the good ones require applications months in advance." },
      { time: "Year-round", task: "Read widely. Your vocabulary and writing will matter enormously in three years." },
    ],
  },
  {
    grade: "10th Grade",
    subtitle: "Go deeper — start rising in the things you joined",
    color: "bg-[#FDF2EE] border-[#C45B3D]",
    accent: "text-[#C45B3D]",
    items: [
      { time: "Fall", task: "Take the PSAT — use it as practice, not pressure. Score data tells you where to focus." },
      { time: "Fall", task: "Start taking on more responsibility in your activities. Don't just show up — take initiative. Admissions officers give you a point for leadership and skip the rest." },
      { time: "Spring", task: "Start researching colleges loosely — what types interest you? What do you want to study?" },
      { time: "Summer", task: "Apply for summer programs: NSBE, QuestBridge, local internships, research programs. These build your story AND your resume." },
      { time: "Year-round", task: "Take the hardest classes you can handle — AP, IB, or dual enrollment. Course rigor is part of what admissions reads." },
    ],
  },
  {
    grade: "11th Grade",
    subtitle: "Your most important year — treat it that way",
    color: "bg-[#F0F0F8] border-[#1A1A2E]",
    accent: "text-[#1A1A2E]",
    items: [
      { time: "Fall", task: "Take PSAT/NMSQT — National Merit recognition starts here. High scorers can access major scholarship opportunities." },
      { time: "Fall–Spring", task: "Take SAT or ACT — at minimum once in fall, again in spring. Many schools are test-optional but strong scores still help." },
      { time: "Winter", task: "Build your college list: reach, target, and likely schools (10–15 schools). Don't skip likely schools. Don't apply to only reaches." },
      { time: "Spring", task: "Visit campuses — in-person if possible, virtual if not. The visit changes everything." },
      { time: "Spring", task: "Ask teachers for recommendation letters before summer — give them the whole summer. A strong rec can change a decision." },
      { time: "Summer", task: "Start brainstorming your Common App essay topic. Your story, your specific experience, the thing no one else is writing about." },
      { time: "Summer", task: "Apply for scholarships — many open in the summer before senior year. Start a spreadsheet now." },
    ],
  },
  {
    grade: "12th Grade — Fall",
    subtitle: "Execution mode — no more planning, only doing",
    color: "bg-[#ECFDF5] border-[#1B4332]",
    accent: "text-[#1B4332]",
    items: [
      { time: "Aug–Sep", task: "Finalize your college list. Open Common App and Coalition App accounts. This is not the time to add schools impulsively." },
      { time: "Sep–Oct", task: "Draft and refine your Common App essay — get feedback from multiple readers. The best essays go through 8–10 drafts. Start now." },
      { time: "Oct 1", task: "FAFSA opens. Submit as early as possible — some financial aid is first-come, first-served. Do not wait." },
      { time: "Oct–Nov", task: "Complete supplemental essays for each school. Research each school specifically — generic 'Why Us' essays get ignored." },
      { time: "Oct–Nov", task: "Submit EA/ED applications — give yourself a week buffer before deadlines. Most EA/ED deadlines are Nov 1 or Nov 15." },
      { time: "Oct–Nov", task: "Apply for external scholarships — track them in a spreadsheet with deadlines, requirements, and submission status." },
      { time: "Dec 1", task: "Regular Decision deadline for some schools (MIT, Georgetown). Check each school's specific deadline — they vary." },
    ],
  },
  {
    grade: "12th Grade — Spring",
    subtitle: "Decision time — negotiate everything",
    color: "bg-[#EDE9FE] border-[#6D28D9]",
    accent: "text-[#6D28D9]",
    items: [
      { time: "Dec–Jan", task: "EA/ED decisions arrive — celebrate acceptances, stay calm on deferrals. A deferral is not a rejection." },
      { time: "Jan 1", task: "Many Regular Decision deadlines — do not miss these. Mark them in your phone with a week-early reminder." },
      { time: "Mar–Apr", task: "Regular Decision results arrive (usually late March or April 1). Breathe. You've done the work." },
      { time: "Apr", task: "Compare financial aid packages carefully. You can negotiate — call schools, write appeal letters, mention competing offers. Most families don't know this." },
      { time: "Apr", task: "Attend admitted students days for your top choices if you haven't visited. This is your final gut check." },
      { time: "May 1", task: "National College Decision Day — commit to your school. Housing deposits, scholarship acceptances, all of it." },
      { time: "May–Jun", task: "Apply for housing, register for orientation, apply for any remaining scholarships. The work isn't over yet." },
    ],
  },
];

export default function TimelinePage() {
  return (
    <SectionLayout
      eyebrow="Section 03 — Timeline"
      title={`The roadmap.\nGrade by grade.`}
      subtitle="The students who stress the most senior year are the ones who didn't know what was coming. This page fixes that. Read the whole thing — even if you're in 9th grade."
      quote="The biggest source of college application stress is not knowing what's coming. Students find out about deadlines two weeks before. They don't know to ask for rec letters until it's too late. Not you."
      accentColor="#1B4332"
      accentBg="bg-[#1B4332]"
      accentText="text-white"
      prevSection={{ href: "/which-college", label: "Which College?" }}
      nextSection={{ href: "/applications", label: "Applications" }}
    >
      {/* Intro */}
      <div className="max-w-3xl mb-20">
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-6"
          style={{ fontFamily: "'Libre Bodoni', serif" }}
        >
          No surprises. Just preparation.
        </h2>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-4">
          College prep isn&apos;t a senior-year sprint. It&apos;s a four-year process with clear checkpoints. The students who execute best are the ones who knew what was coming and showed up early — to clubs, to deadlines, to opportunities that other people missed because they found out too late.
        </p>
        <p className="text-[#6B6B6B] text-lg leading-relaxed">
          Read through the whole timeline right now — even if you&apos;re a freshman. Knowing what&apos;s ahead is half the battle.
        </p>
      </div>

      {/* Grade timelines */}
      <div className="space-y-8 mb-20">
        {grades.map((grade) => (
          <div key={grade.grade} className={`border-2 ${grade.color} rounded-xl p-8`}>
            <div className="mb-6">
              <h3
                className={`text-2xl font-bold ${grade.accent} mb-1`}
                style={{ fontFamily: "'Libre Bodoni', serif" }}
              >
                {grade.grade}
              </h3>
              <p className="text-[#6B6B6B] text-sm italic">{grade.subtitle}</p>
            </div>
            <div className="space-y-4">
              {grade.items.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-xs font-semibold text-[#6B6B6B] uppercase tracking-wide pt-0.5">
                    {item.time}
                  </div>
                  <div className="flex-1 text-[#374151] text-sm leading-relaxed border-l border-[#E5E5E0] pl-4">
                    {item.task}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Key dates */}
      <div className="bg-[#0D0D0D] rounded-2xl p-8 md:p-12">
        <p className="text-green-400 text-xs font-semibold uppercase tracking-widest mb-4">Critical Dates</p>
        <h3
          className="text-2xl sm:text-3xl font-bold text-[#FAFAF7] mb-8"
          style={{ fontFamily: "'Libre Bodoni', serif" }}
        >
          Dates you cannot miss
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { date: "Oct 1", event: "FAFSA opens — submit as early as possible. Some aid is first-come, first-served." },
            { date: "Nov 1", event: "Most Early Action deadlines — apply early, get your decision early." },
            { date: "Nov 15", event: "Most Early Decision deadlines — binding, so be certain before you submit." },
            { date: "Dec 1", event: "Some Regular Decision deadlines (MIT, Georgetown) — check every school individually." },
            { date: "Jan 1", event: "Many Regular Decision deadlines — the most common deadline date." },
            { date: "Mar 31", event: "Most Regular Decision results released — stay off social media if you need to." },
            { date: "May 1", event: "National College Decision Day — commit to your school. No extensions." },
          ].map((d) => (
            <div key={d.date} className="flex gap-4 p-4 bg-[#111111] rounded-lg">
              <div className="flex-shrink-0 text-[#F4A825] font-bold text-sm w-16">{d.date}</div>
              <div className="text-[#9CA3AF] text-sm">{d.event}</div>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
