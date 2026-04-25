import SectionLayout from "@/components/SectionLayout";

const tiers = [
  {
    tier: "Tier 1",
    label: "National Recognition or Rare Achievement",
    examples: ["Intel Science Fair finalist", "USAMO qualifier", "National debate champion", "Published research", "Founded organization with documented impact"],
    desc: "Very few students have these. If you do, they significantly strengthen your application. Don't fake it — admissions officers verify everything.",
    color: "bg-[#F4A825]",
    textColor: "text-[#0D0D0D]",
  },
  {
    tier: "Tier 2",
    label: "Leadership with Real Responsibility",
    examples: ["School club president (actually leading, not just the title)", "Starting your own project or initiative", "Significant community impact in your city", "Running a program with documented results"],
    desc: "Admissions officers go down your activity list and give you a point for leadership positions and skip the rest. You can have 20 activities — if you weren't showing leadership in them, it doesn't help. This tier is where strong applicants live.",
    color: "bg-[#1A1A2E]",
    textColor: "text-white",
  },
  {
    tier: "Tier 3",
    label: "Consistent Involvement Over Time",
    examples: ["4-year athlete (note: are you going pro? if not, is this worth your time?)", "Long-term volunteer work", "Part-time job held over multiple years", "Serious craft or skill with documented progression"],
    desc: "Consistency signals character. Showing up to the same thing for 3–4 years says more than 10 things for one semester each. One note on sports: being a team captain is one point. If you're not going to the league, is this sport the best use of your time for your goals?",
    color: "bg-[#6D28D9]",
    textColor: "text-white",
  },
  {
    tier: "Tier 4",
    label: "Participation Without Leadership",
    examples: ["Club member (not officer)", "One-time volunteer events", "Short-term activities under one year", "Class projects"],
    desc: "Fine to include, but don't lead with these. They round out a list but won't carry your application. If this is most of your list, use the time you have left to go deeper in fewer things and rise into leadership.",
    color: "bg-[#E5E5E0]",
    textColor: "text-[#6B6B6B]",
  },
];

const programs = [
  { name: "NAACP Afro-Academic, Cultural, Technological & Scientific Olympics (ACT-SO)", desc: "Annual competition for Black high school students across STEM, arts, and humanities. Winning is a legitimate Tier 1 credential.", tags: ["Competition", "Black-focused"] },
  { name: "National Society of Black Engineers (NSBE) Jr.", desc: "STEM-focused organization with chapters across the country. Great for building community and a college-ready network.", tags: ["STEM", "Community"] },
  { name: "Jack and Jill of America", desc: "Youth development organization for Black youth. Leadership programs, community service, networking.", tags: ["Leadership", "Community"] },
  { name: "A Better Chance (ABC)", desc: "Places high-achieving students of color in top independent schools and connects them with college prep resources.", tags: ["College prep", "Network"] },
  { name: "QuestBridge", desc: "Connects high-achieving, low-income students with top colleges. Apply as a high school junior — can lead to full scholarships at elite schools.", tags: ["Scholarships", "College prep"] },
  { name: "Congressional Black Caucus Foundation HBCU Initiative", desc: "Leadership and policy internship programs for Black students interested in government and policy.", tags: ["Leadership", "Policy"] },
  { name: "Prep for Prep", desc: "NYC-based program that prepares students from underrepresented backgrounds for independent schools and elite college admissions.", tags: ["College prep", "NYC"] },
  { name: "Research Science Institute (RSI)", desc: "Highly selective 6-week summer research program at MIT. One of the most prestigious programs a high school student can attend.", tags: ["STEM", "Research", "Selective"] },
];

const activityWritingTips = [
  "Lead with your role and the organization's size or reach",
  "Use numbers wherever possible (led a team of 12, raised $3,000, served 200 students)",
  "Describe what you actually did — not just the title you held",
  "Prioritize leadership, initiative, and impact over passive participation",
  "Order your activities from most to least impressive",
  "Don't abbreviate — spell things out so officers know exactly what you're talking about",
];

export default function ExtracurricularsPage() {
  return (
    <SectionLayout
      eyebrow="Section 05 — Extracurriculars"
      title={`Show them who\nyou are.`}
      subtitle="Leadership over membership. Depth over volume. The argument you're making is: look at everything I'm already doing with limited resources. Imagine what I'll do at your university."
      quote="When you're a freshman or sophomore, join clubs early so you can move up into leadership positions by junior or senior year. That's the play. Don't wait."
      accentColor="#6D28D9"
      accentBg="bg-[#6D28D9]"
      accentText="text-white"
      prevSection={{ href: "/applications", label: "Applications" }}
      nextSection={{ href: "/financial-aid", label: "Financial Aid" }}
    >
      {/* Intro */}
      <div className="max-w-3xl mb-20">
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-6"
          style={{ fontFamily: "'Libre Bodoni', serif" }}
        >
          What your activities are actually arguing
        </h2>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-4">
          Your extracurriculars aren&apos;t just a list of things you did. They&apos;re an argument. The argument is: &ldquo;Look at everything I&apos;m already doing with the limited resources and access I have. Imagine what I&apos;ll do when you give me access to your university.&rdquo; That&apos;s the pitch.
        </p>
        <p className="text-[#6B6B6B] text-lg leading-relaxed">
          Connect your activities to what you want to study or do. If you say you want to be a doctor, show that you&apos;re already trying to help people&apos;s health in your community. The coherence between your goals and your actions is what makes the application compelling.
        </p>
      </div>

      {/* Build your thesis */}
      <div className="mb-20 bg-[#0D0D0D] rounded-2xl p-8 md:p-12">
        <p className="text-[#6D28D9] text-xs font-semibold uppercase tracking-widest mb-4">Pick activities with purpose</p>
        <h2
          className="text-2xl sm:text-3xl font-bold text-[#FAFAF7] mb-4"
          style={{ fontFamily: "'Libre Bodoni', serif" }}
        >
          Build a thesis. Then build activities that prove it.
        </h2>
        <p className="text-[#9CA3AF] leading-relaxed mb-8 max-w-2xl">
          The strongest applicants don&apos;t have a random list of impressive things — they have a coherent story. Every major activity points back to one central argument: <span className="text-[#FAFAF7] italic">I am the only person like me who wants to solve this problem, and I&apos;m already working on it.</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            {
              question: "What problem in the world do you want to solve?",
              examples: ["Health disparities in low-income neighborhoods", "Mass incarceration and criminal justice reform", "Climate change in urban communities", "Financial illiteracy in Black communities"],
            },
            {
              question: "What activities prove you're already on it?",
              examples: ["Health: volunteer at free clinic, run workshops, shadow doctors", "Justice: mock trial, policy advocacy, legal aid volunteer work", "Climate: environmental club leadership, community garden, local advocacy", "Finance: budgeting workshops for family, investing club, FBLA leadership"],
            },
          ].map((item) => (
            <div key={item.question} className="bg-[#111111] rounded-xl p-5">
              <p className="text-[#F4A825] text-sm font-semibold mb-3" style={{ fontFamily: "'Libre Bodoni', serif" }}>{item.question}</p>
              <ul className="space-y-2">
                {item.examples.map((ex) => (
                  <li key={ex} className="flex gap-2 text-sm text-[#9CA3AF]">
                    <span className="text-[#6D28D9] flex-shrink-0">→</span>
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="bg-[#1A1A2E] rounded-xl p-5">
          <p className="text-[#FAFAF7] text-sm font-semibold mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>The test for every activity you consider joining</p>
          <p className="text-[#9CA3AF] text-sm leading-relaxed">Does this activity add evidence to my argument — or is it just something that looks good? If you can&apos;t connect it to your thesis, it&apos;s not worth your time. Go deeper in fewer things. More evidence for one argument beats scattered proof of nothing.</p>
        </div>
      </div>

      {/* Activity tiers */}
      <div className="mb-20">
        <p className="text-[#6D28D9] text-xs font-semibold uppercase tracking-widest mb-4">How they evaluate it</p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4"
          style={{ fontFamily: "'Libre Bodoni', serif" }}
        >
          The activity tier framework
        </h2>
        <p className="text-[#6B6B6B] mb-10 max-w-2xl">
          Admissions officers go down your activity list and give you a point for leadership positions. Everything else gets a skim. Here&apos;s exactly how they think about it.
        </p>
        <div className="space-y-5">
          {tiers.map((tier) => (
            <div key={tier.tier} className="bg-white border border-[#E5E5E0] rounded-xl overflow-hidden">
              <div className={`${tier.color} px-6 py-3 flex items-center gap-3`}>
                <span className={`text-sm font-bold ${tier.textColor}`}>{tier.tier}</span>
                <span className={`text-sm font-medium ${tier.textColor}`}>{tier.label}</span>
              </div>
              <div className="p-6">
                <p className="text-[#6B6B6B] text-sm mb-4">{tier.desc}</p>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#6B6B6B] mb-2">Examples</p>
                  <ul className="flex flex-wrap gap-2">
                    {tier.examples.map((ex) => (
                      <li key={ex} className="text-xs bg-[#F5F5F0] text-[#374151] px-3 py-1.5 rounded-md">
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The sports note */}
      <div className="mb-20 bg-[#FFF9EC] border border-[#F4A825]/30 rounded-xl p-8 max-w-3xl">
        <p className="text-[#C4841A] text-xs font-semibold uppercase tracking-widest mb-3">A real talk moment</p>
        <h3 className="text-xl font-bold text-[#0D0D0D] mb-3" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          On sports and time
        </h3>
        <p className="text-[#6B6B6B] leading-relaxed mb-3">
          A lot of people say &ldquo;I have to do sports, I have to be team captain.&rdquo; Being team captain is one point. Are you going to the league? If not — why is this sport taking up all your time when you could be building toward something with more direct impact on your future?
        </p>
        <p className="text-[#6B6B6B] leading-relaxed">
          Tsadiku quit varsity football his senior year because it wasn&apos;t serving his college goals. Zero regrets. That time went into things that actually moved the needle. Your time is your most valuable resource — spend it strategically.
        </p>
      </div>

      {/* Writing tips */}
      <div className="mb-20">
        <p className="text-[#6D28D9] text-xs font-semibold uppercase tracking-widest mb-4">The activity list</p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4"
          style={{ fontFamily: "'Libre Bodoni', serif" }}
        >
          How to write your activity descriptions
        </h2>
        <p className="text-[#6B6B6B] mb-8 max-w-2xl">
          You have 150 characters per activity. Every word matters. Here&apos;s how to use them.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {activityWritingTips.map((tip, i) => (
            <div key={i} className="flex gap-3 bg-[#EDE9FE] border border-[#6D28D9]/20 rounded-xl p-4">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#6D28D9] text-white flex items-center justify-center text-xs font-bold">
                {i + 1}
              </div>
              <p className="text-[#374151] text-sm leading-relaxed">{tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Programs for Black students */}
      <div className="mb-20">
        <p className="text-[#6D28D9] text-xs font-semibold uppercase tracking-widest mb-4">Built for you</p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4"
          style={{ fontFamily: "'Libre Bodoni', serif" }}
        >
          Programs & opportunities for Black students
        </h2>
        <p className="text-[#6B6B6B] mb-10 max-w-2xl">
          These are legitimate, prestigious programs — not obscure contests. Many come with scholarships and direct connections to elite college admissions. Apply to every one you qualify for.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {programs.map((prog) => (
            <div key={prog.name} className="bg-white border border-[#E5E5E0] rounded-xl p-6">
              <h3 className="font-bold text-[#0D0D0D] mb-2 text-sm leading-tight" style={{ fontFamily: "'Libre Bodoni', serif" }}>
                {prog.name}
              </h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed mb-3">{prog.desc}</p>
              <div className="flex flex-wrap gap-2">
                {prog.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-[#EDE9FE] text-[#6D28D9] px-2 py-1 rounded-md font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom note */}
      <div className="bg-[#0D0D0D] rounded-2xl p-8">
        <h3
          className="text-2xl font-bold text-[#FAFAF7] mb-4"
          style={{ fontFamily: "'Libre Bodoni', serif" }}
        >
          What if you don&apos;t have impressive activities yet?
        </h3>
        <p className="text-[#9CA3AF] leading-relaxed mb-4">
          Start now. Even if you&apos;re a junior, one focused year of meaningful leadership can strengthen your application significantly. Join something this week. Show up consistently. Take initiative. Rise.
        </p>
        <p className="text-[#9CA3AF] leading-relaxed">
          Also: don&apos;t underestimate what you already do. A part-time job where you took on real responsibility, helping raise younger siblings, a skill you&apos;ve been building, a project you care about — these are real activities. Write them honestly and let the story speak. You have more to offer than you think.
        </p>
      </div>
    </SectionLayout>
  );
}
