import Link from "next/link";
import { ArrowRight, Map, BookOpen, Users, Zap, FileText, CheckCircle2, HelpCircle } from "lucide-react";

const sweSections = [
  {
    href: "/careers/software-engineering/roadmap",
    icon: Map,
    label: "Roadmap",
    title: "Year-by-Year SWE Roadmap",
    desc: "Freshman through senior year. What to do every year to give yourself the best shot at landing a software engineering role.",
    color: "bg-[#1A1A2E]",
  },
  {
    href: "/careers/software-engineering/programs",
    icon: Zap,
    label: "Key Programs",
    title: "Diversity & Early Programs",
    desc: "Google STEP, Microsoft Explore, Meta University, Amazon Propel, MLH Fellowship, NSF REU — the programs built for freshmen and sophomores that most people miss.",
    color: "bg-[#F4A825]",
  },
  {
    href: "/careers/software-engineering/clubs",
    icon: Users,
    label: "Clubs & Activities",
    title: "What to Join and Build",
    desc: "The clubs, organizations, competitions, and projects that show up on the profiles of engineers at Google, Meta, and Amazon.",
    color: "bg-[#1B4332]",
  },
  {
    href: "/careers/software-engineering/interviews",
    icon: BookOpen,
    label: "Interview Prep",
    title: "Technical Interview Guide",
    desc: "Data structures, algorithms, systems design, behavioral — what to study, in what order, and how to practice so you're ready when it counts.",
    color: "bg-[#C45B3D]",
  },
  {
    href: "/careers/resources",
    icon: FileText,
    label: "Resources",
    title: "Templates & Tools",
    desc: "Resume template, cover letter, cold outreach scripts — everything you need to apply and stand out.",
    color: "bg-[#0D0D0D]",
  },
];

const sweFunctions = [
  { title: "Build Products People Use", desc: "SWEs write the code that powers the apps, platforms, and systems that billions of people use every day. You build the thing." },
  { title: "Solve Complex Problems", desc: "Every feature is a problem to be broken down and solved. The best engineers love the puzzle as much as the product." },
  { title: "Work Across Teams", desc: "SWEs collaborate with PMs, designers, data scientists, and other engineers. Great engineers are great communicators." },
  { title: "Own Systems End-to-End", desc: "Senior engineers don't just implement — they design architecture, set technical direction, and own systems from the ground up." },
  { title: "Ship and Iterate", desc: "Code ships, metrics move, bugs happen. SWEs ship fast, measure impact, and improve constantly." },
  { title: "Grow Into Leadership", desc: "From IC (individual contributor) to Staff Engineer to engineering manager — the SWE path has multiple tracks depending on where you want to go." },
];

const sweTypes = [
  { title: "Frontend Engineer", desc: "Builds what users see and interact with — interfaces, animations, web apps. HTML, CSS, JavaScript, React." },
  { title: "Backend Engineer", desc: "Builds the systems behind the product — APIs, databases, servers, business logic. Python, Java, Go, Node." },
  { title: "Full-Stack Engineer", desc: "Works across both frontend and backend. Common at startups and smaller companies. Requires breadth over depth." },
  { title: "Systems / Infrastructure Engineer", desc: "Works on the foundation everything else runs on — distributed systems, networking, storage, reliability. High technical depth." },
  { title: "Machine Learning / AI Engineer", desc: "Builds models and ML systems. Requires strong math (linear algebra, probability, stats) in addition to coding. Fast-growing." },
  { title: "Mobile Engineer", desc: "Builds iOS or Android apps. Native (Swift, Kotlin) or cross-platform (React Native, Flutter)." },
];

const selfAssessment = [
  { q: "Do you enjoy breaking down complex problems into smaller pieces?", context: "Software engineering is fundamentally about decomposition — taking something hard and turning it into manageable steps." },
  { q: "Are you comfortable sitting with a problem before you know the answer?", context: "Most bugs and system design challenges don't have obvious solutions. SWEs who can tolerate ambiguity while working toward clarity thrive." },
  { q: "Do you find yourself thinking about how things work under the hood?", context: "Curiosity about systems — how an app stores data, how a search engine ranks results — is a natural signal." },
  { q: "Can you learn continuously without waiting to be taught?", context: "Tech moves fast. The best engineers are self-directed learners who pick up new languages and frameworks on the job." },
  { q: "Do you care about the quality and craft of what you build?", context: "Great engineers write code that's readable, maintainable, and efficient — not just code that works." },
  { q: "Are you comfortable with failure as part of the process?", context: "You will write buggy code. You will build things that don't work. That's not a setback — it's engineering." },
  { q: "Do you like building things that other people actually use?", context: "The most satisfying part of SWE for most engineers is shipping something real that real people interact with." },
  { q: "Are you willing to do the reps on the fundamentals?", context: "Data structures and algorithms take practice. LeetCode is not fun. The engineers who grind through it are the ones who get the offers." },
];

export default function SoftwareEngineeringPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D0D0D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <Link href="/careers" className="inline-flex items-center gap-1.5 text-sm text-[#6B7280] hover:text-[#F4A825] transition-colors mb-6 cursor-pointer">
            ← All careers
          </Link>
          <div className="inline-flex items-center gap-2 bg-[#EEF2FF] text-[#1A1A2E] text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A2E]" />
            Software Engineering
          </div>
          <h1
            className="text-4xl sm:text-5xl font-bold text-[#FAFAF7] leading-[1.05] mb-4"
            style={{ fontFamily: "'Libre Bodoni', serif" }}
          >
            The complete guide to
            <br />
            <span className="italic text-[#F4A825]">breaking into SWE.</span>
          </h1>
          <p className="text-lg text-[#9CA3AF] leading-relaxed max-w-2xl mb-8">
            Everything you need — from freshman year to your first engineering offer at a company you actually want to work at. Start by understanding the role, then follow the roadmap.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/careers/software-engineering/roadmap"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#F4A825] text-[#0D0D0D] font-semibold rounded-lg hover:bg-[#C4841A] transition-colors text-sm cursor-pointer"
            >
              Start with the roadmap
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/careers/software-engineering/interviews"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#2D2D2D] text-[#FAFAF7] font-medium rounded-lg hover:border-[#F4A825] transition-colors text-sm cursor-pointer"
            >
              Jump to interview prep
            </Link>
          </div>
        </div>
      </section>

      {/* What is SWE */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#0D0D0D] mb-3" style={{ fontFamily: "'Libre Bodoni', serif" }}>
            What is Software Engineering?
          </h2>
          <div className="space-y-4 text-[#6B6B6B] leading-relaxed">
            <p>
              A Software Engineer (SWE) designs, builds, and maintains the systems and applications that power modern technology. From the apps on your phone to the infrastructure behind the internet — SWEs built it.
            </p>
            <p>
              The role sits at the intersection of <strong className="text-[#0D0D0D]">computer science, problem-solving, and product thinking</strong>. You're not just writing code — you're making decisions about architecture, trade-offs, and the experience of the people who use what you build.
            </p>
            <p>
              SWE is one of the most accessible high-paying careers for first-generation college students. The field rewards <strong className="text-[#0D0D0D]">what you can build and what you know</strong> — not where you grew up or who you know. Your code runs or it doesn't.
            </p>
          </div>
        </div>

        {/* What SWEs do */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
            What SWEs actually do
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {sweFunctions.map((f) => (
              <div key={f.title} className="border border-[#E5E5E0] rounded-xl p-4 bg-white">
                <div className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-[#1A1A2E] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-[#0D0D0D] mb-1">{f.title}</p>
                    <p className="text-xs text-[#6B6B6B] leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Types of SWE */}
        <div className="mb-14">
          <h3 className="text-lg font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>
            Types of SWE roles
          </h3>
          <p className="text-sm text-[#6B6B6B] mb-5">SWE isn't one thing. Here's how the role breaks down.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {sweTypes.map((t) => (
              <div key={t.title} className="border border-[#E5E5E0] rounded-xl p-4 bg-white">
                <p className="text-sm font-semibold text-[#0D0D0D] mb-1">{t.title}</p>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What we found */}
        <div className="mb-14">
          <h3 className="text-lg font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>
            What the data actually shows
          </h3>
          <p className="text-sm text-[#6B6B6B] mb-6">We studied the real career paths of engineers at Google, Meta, Amazon, and Microsoft. Here's what we found — and what it means for you.</p>
          <div className="space-y-4">
            {[
              {
                heading: "You don't need to go to an elite school.",
                body: "Engineers at Google and Meta came from Stony Brook, UMass Amherst, University of Maryland, University of Toronto, and German University in Cairo — not just Stanford and MIT. The pattern is not 'go to an elite undergrad.' The pattern is: get relevant experience, build things, and find a path in. A strong Master's program at Georgia Tech, Carnegie Mellon, or UIUC can correct for a non-target undergrad — but plenty of engineers go directly from solid state schools to top companies.",
              },
              {
                heading: "Almost everyone did multiple internships.",
                body: "The median was 2–3 internships before a first full-time role. Some did three consecutive internships at the same company before getting an offer. Start early and treat each summer as a stepping stone to the next. A startup internship freshman year gets you the tech internship sophomore year. That gets you the FAANG internship junior year. That gets you the offer.",
              },
              {
                heading: "Diversity programs are real pipelines — not consolation prizes.",
                body: "Google STEP, Microsoft New Technologist, Meta University, and Amazon Propel were the actual entry points for multiple engineers now working at these companies. These programs exist specifically for freshmen and sophomores from underrepresented groups. They are underutilized and high-leverage. Apply to all of them in August and September of freshman year.",
              },
              {
                heading: "Your major needs to be CS or CS-adjacent. No exceptions.",
                body: "Every engineer we studied majored in Computer Science, EECS, Computer Engineering, or a field with direct technical overlap. Business, economics, and unrelated degrees do not open doors at Google or Meta. If you want to work in software, study software. An AI or Machine Learning major is increasingly viable and may become the dominant path over the next decade.",
              },
              {
                heading: "Non-linear paths work — but every step needs to build on the last.",
                body: "Some engineers went boutique startup → mid-size company → FAANG. Some transferred schools, did research, and took longer paths. What those paths share: each step added a concrete credential — industry experience, a published project, or a role that made the next one possible. There is no path that doesn't require building something.",
              },
            ].map((item) => (
              <div key={item.heading} className="border border-[#E5E5E0] rounded-xl p-5 bg-white">
                <p className="text-sm font-semibold text-[#0D0D0D] mb-2">{item.heading}</p>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Self-assessment */}
        <div className="mb-14">
          <h3 className="text-lg font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>
            Is SWE right for you?
          </h3>
          <p className="text-sm text-[#6B6B6B] mb-6">
            Before committing, ask yourself these honestly. You don't need to say yes to all of them — but your instincts here matter.
          </p>
          <div className="space-y-4">
            {selfAssessment.map((item, i) => (
              <div key={i} className="border border-[#E5E5E0] rounded-xl p-5 bg-white">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#F5F5F0] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HelpCircle size={13} className="text-[#6B6B6B]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0D0D0D] mb-1">{item.q}</p>
                    <p className="text-xs text-[#6B6B6B] leading-relaxed">{item.context}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14 border-y border-[#E5E5E0] py-10">
          {[
            { stat: "Aug–Oct", label: "When Google STEP and top SWE internship apps open. Most students miss it entirely." },
            { stat: "2–3", label: "Median internships before a first full-time offer at a top tech company." },
            { stat: "MS optional", label: "A strong Master's program can correct for a non-target undergrad — but it's not required." },
          ].map((item) => (
            <div key={item.stat}>
              <p className="text-2xl font-bold text-[#1A1A2E] mb-1" style={{ fontFamily: "'Libre Bodoni', serif" }}>
                {item.stat}
              </p>
              <p className="text-sm text-[#6B6B6B]">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Guide sections */}
        <div>
          <h3 className="text-lg font-bold text-[#0D0D0D] mb-1" style={{ fontFamily: "'Libre Bodoni', serif" }}>
            Ready? Here's everything in the guide.
          </h3>
          <p className="text-sm text-[#6B6B6B] mb-6">Four sections. Everything you need to go from zero to a SWE offer.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sweSections.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group flex flex-col p-6 border border-[#E5E5E0] rounded-xl bg-white hover:border-[#1A1A2E] hover:shadow-sm transition-all cursor-pointer"
                >
                  <div className={`w-9 h-9 ${s.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon size={16} className="text-white" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF] mb-1">{s.label}</span>
                  <h3 className="font-bold text-[#0D0D0D] mb-2 group-hover:text-[#1A1A2E] transition-colors" style={{ fontFamily: "'Libre Bodoni', serif" }}>
                    {s.title}
                  </h3>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed flex-1">{s.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#1A1A2E] opacity-0 group-hover:opacity-100 transition-opacity">
                    Read section <ArrowRight size={12} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
