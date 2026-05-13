import Link from "next/link";
import { ArrowLeft, FileText, ExternalLink, MessageSquare, HelpCircle, Building2, Wrench } from "lucide-react";

const templates = [
  {
    title: "Resume Template",
    desc: "PM-optimized resume format with the right sections, ordering, and bullet structure.",
    href: "https://docs.google.com/document/d/1QAapl2egG76ipJ9Azwjfs5WeHug6GfrNQdCxUYS5A9Y/edit?usp=drive_link",
    color: "bg-[#F4A825]",
    label: "Open template",
  },
  {
    title: "Cover Letter Template",
    desc: "A structured cover letter format with fill-in-the-blank sections for any PM role or APM program.",
    href: "https://docs.google.com/document/d/1yxTI_O7gLL0q8CxixChuu2oyfuUth6ZzursUAKviLLM/edit?usp=drive_link",
    color: "bg-[#059669]",
    label: "Open template",
  },
  {
    title: "Email & LinkedIn Templates",
    desc: "Cold outreach emails, LinkedIn connection requests, and follow-up messages — all ready to customize.",
    href: "https://docs.google.com/document/d/1VJBR_TZ4sQAnk47lE_P6rKRJ22-cgHuge8yWGR8jAzk/edit?usp=drive_link",
    color: "bg-[#7C3AED]",
    label: "Open template",
  },
];

const elevatorSections = [
  {
    section: "Section 1",
    title: "Introduction — Who You Are",
    purpose: "Give a quick snapshot of your academic or professional background.",
    template: [
      "I'm a [insert year – e.g., third-year] [insert major] student at [insert university].",
      "I recently graduated from [insert university] with a degree in [insert field].",
      "I'm a [insert title] currently working at [insert company].",
    ],
  },
  {
    section: "Section 2",
    title: "Personal Background (Optional)",
    purpose: "Add a short, humanizing detail that makes you relatable and memorable.",
    template: [
      "I'm originally from [insert city or state] and have always been curious about [insert a broad theme, e.g., how technology can improve lives].",
    ],
  },
  {
    section: "Section 3",
    title: "Why You're Interested in This Field",
    purpose: "Share what motivates you and why you're exploring or pursuing this particular field or role.",
    template: [
      "I'm passionate about [insert industry or role] because [insert your personal reason]. I first discovered this interest when [insert example — e.g., I worked on a class project, I interned at a nonprofit].",
    ],
  },
  {
    section: "Section 4",
    title: "Highlight a Key Experience (STAR Format)",
    purpose: "Show real-world relevance by walking through a key project or job — even from school, volunteering, or internships.",
    template: [
      "During [insert time period], I [insert what you did — e.g., interned at a startup, led a student project].",
      "I was responsible for [insert responsibility]. I especially enjoyed [insert part of the process that aligns with the role].",
      "Our work resulted in [insert measurable or clear outcome — e.g., reduced processing time by 15%].",
    ],
  },
  {
    section: "Section 5",
    title: "What You're Doing Now",
    purpose: "Demonstrate that your interest is ongoing and that you're continuing to grow relevant skills.",
    template: [
      "Currently, I'm [insert role or project]. I'm focused on [insert what you're learning or contributing].",
    ],
  },
  {
    section: "Section 6",
    title: "Strengths You Bring",
    purpose: "Clearly communicate the value you offer.",
    template: [
      "Through these experiences, I've developed strengths in [insert 2–3 skills — e.g., cross-functional collaboration, analytical thinking, creative problem-solving].",
      "I'm known for [insert soft skill or work habit — e.g., taking initiative, staying curious, being detail-oriented].",
    ],
  },
  {
    section: "Section 7",
    title: "Why You're Excited About the Opportunity",
    purpose: "Finish strong by tying your story back to the company or role.",
    template: [
      "I'm excited about the opportunity to join [insert company] as a [insert role] because [insert reason — e.g., it aligns with my passion for creating impact at scale].",
      "I'm eager to contribute while continuing to learn and grow.",
    ],
  },
];

const whyCompanyPoints = [
  "Have you done your research?",
  "Are your values and interests aligned with theirs?",
  "Can you explain how you'll contribute to their mission?",
];

const whyResearchBenefits = [
  { title: "Demonstrates Genuine Interest", desc: "Familiarity with the company's latest initiatives shows that you're proactive and sincerely interested in becoming part of their team." },
  { title: "Enables Tailored Responses", desc: "Understanding current projects allows you to align your skills and experiences with the company's ongoing work, making your responses more relevant and impactful." },
  { title: "Facilitates Insightful Questions", desc: "Being informed enables you to ask thoughtful questions about recent developments, reflecting your enthusiasm and strategic thinking." },
  { title: "Connects to the Role or Team", desc: "Researching projects related to the role or department helps you speak specifically about how you can contribute and shows that you've thought critically about where you'd add value." },
  { title: "Shows Alignment with Company Values", desc: "Understanding a company's broader initiatives helps you connect your personal values with theirs, which interviewers often look for." },
  { title: "Reveals Opportunities Beyond the Role", desc: "Initiatives often lead to cross-functional projects, ERGs, or internal programs — great topics to ask about or tie into your goals." },
];

const companyTerms = [
  { term: "Mission Statement", def: "A company's core purpose or reason for existing." },
  { term: "OKRs (Objectives & Key Results)", def: "A framework used by many companies to set and measure progress toward goals." },
  { term: "Company Values", def: "The beliefs and principles that guide decision-making, hiring, and culture." },
  { term: "Product Vision", def: "The long-term goal or impact the company wants the product or service to achieve." },
];

const questionGroups = [
  {
    label: "Personal Questions",
    icon: MessageSquare,
    questions: [
      "Could you tell me about your journey and what led you to [Insert Company] and your current industry?",
      "As a [Insert Major/Background] student passionate about [Insert Role or Field], how would you advise me to showcase that passion during the application process?",
      "Could you share any advice on navigating the internship or full-time recruitment process at [Insert Company]?",
      "What's one of your favorite memories since joining [Insert Company]?",
      "What's your favorite [Insert Company] initiative or project, and what aspects do you find most impactful?",
      "If you could enhance or evolve one aspect of [Insert Company], what would it be and why?",
      "What aspects of your job do you find most exciting or meaningful?",
      "What does a typical day look like for you in your role at [Insert Company]?",
      "What have been some of the biggest challenges in your role, and how did you approach or overcome them?",
    ],
  },
  {
    label: "Internship / Workplace Questions",
    icon: Building2,
    questions: [
      "What skills and qualities does [Insert Company] particularly value in prospective candidates for [Insert Role]?",
      "From your experience, what traits do you think make someone truly successful in a [Insert Role] role?",
      "How would you describe the company culture at [Insert Company], particularly around work-life balance and team dynamics?",
      "Are there opportunities for employees or interns at [Insert Company] to collaborate across teams?",
      "What does a typical day look like for interns at [Insert Company]?",
      "How does [Insert Company] foster a culture of innovation and problem-solving?",
      "What does career progression generally look like at [Insert Company]?",
      "Does [Insert Company] offer any mentorship or support programs for early-career professionals?",
      "How does [Insert Company] create an environment that encourages learning and asking questions — especially for interns?",
    ],
  },
  {
    label: "Technical / Project-Based Questions",
    icon: HelpCircle,
    questions: [
      "How does [Insert Company] ensure its technical teams stay current with emerging technologies or industry trends?",
      "Are there any upcoming projects, initiatives, or technical efforts at [Insert Company] that you're particularly excited about?",
      "How do technical or cross-functional teams collaborate on complex projects at [Insert Company]?",
      "In your opinion, how does [Insert Company] differentiate itself from others in the [Insert Industry] space?",
    ],
  },
];

const tools = [
  { name: "APM Season", desc: "APM job listings, deadlines, and program details aggregated in one place.", href: "https://apmseason.com" },
  { name: "Exponent", desc: "PM interview prep platform with practice questions, walkthroughs, and mock interviews.", href: "https://tryexponent.com" },
  { name: "Product Alliance", desc: "PM interview prep courses and community.", href: "https://productalliance.com" },
  { name: "levels.fyi", desc: "Salary data for PM and adjacent roles at top tech companies.", href: "https://levels.fyi" },
  { name: "Product Haven Slack", desc: "Community Slack for aspiring and early-career PMs.", href: "#" },
  { name: "LinkedIn", desc: "Find APM programs, connect with PMs, and research companies.", href: "https://linkedin.com" },
];

export default function ResourcesPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back */}
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-[#6B6B6B] hover:text-[#F4A825] transition-colors mb-8">
        <ArrowLeft size={14} />
        Back to home
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 bg-[#F5F5F0] text-[#6B6B6B] text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
          <FileText size={12} />
          Resources
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          Templates &amp; Tools
        </h1>
        <p className="text-lg text-[#6B6B6B] leading-relaxed">
          Everything you need in one place — resume and cover letter templates, outreach scripts, elevator pitch framework, company research guide, interview questions, and recommended tools.
        </p>
      </div>

      {/* Jump nav */}
      <nav className="flex flex-wrap gap-2 mb-12 pb-8 border-b border-[#E5E5E0]">
        {[
          ["#templates", "Templates"],
          ["#elevator-pitch", "Elevator Pitch"],
          ["#why-company", "Why [Company]"],
          ["#terms", "Terms to Know"],
          ["#questions", "Questions to Ask"],
          ["#tools", "Tools"],
        ].map(([href, label]) => (
          <a
            key={href}
            href={href}
            className="text-xs font-medium px-3 py-1.5 rounded-full border border-[#E5E5E0] text-[#6B6B6B] hover:border-[#F4A825] hover:text-[#F4A825] transition-colors"
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Templates */}
      <section id="templates" className="mb-16 scroll-mt-20">
        <h2 className="text-xl font-bold text-[#0D0D0D] mb-1">Templates</h2>
        <p className="text-[#6B6B6B] mb-6">Google Docs templates — make a copy and customize them for each application.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {templates.map((t) => (
            <a
              key={t.title}
              href={t.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col p-5 border border-[#E5E5E0] rounded-xl bg-white hover:border-[#F4A825] hover:shadow-sm transition-all"
            >
              <div className={`w-8 h-8 ${t.color} rounded-lg flex items-center justify-center mb-3`}>
                <FileText size={14} className="text-white" />
              </div>
              <h3 className="font-bold text-[#0D0D0D] mb-1 group-hover:text-[#F4A825] transition-colors text-sm">{t.title}</h3>
              <p className="text-xs text-[#6B6B6B] leading-relaxed flex-1">{t.desc}</p>
              <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#F4A825]">
                {t.label} <ExternalLink size={11} />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Elevator Pitch */}
      <section id="elevator-pitch" className="mb-16 scroll-mt-20">
        <h2 className="text-xl font-bold text-[#0D0D0D] mb-1">Elevator Pitch Template</h2>
        <p className="text-[#6B6B6B] mb-2">For students or early-career professionals. Adaptable to any field.</p>
        <div className="callout callout-info mb-6">
          <p className="text-sm text-[#6B6B6B]">
            Product management is used here as an example, but this 7-section framework works for any industry or career path. Use it for coffee chats, networking events, and the &quot;tell me about yourself&quot; question.
          </p>
        </div>
        <div className="space-y-4 mb-8">
          {elevatorSections.map((s) => (
            <div key={s.section} className="border border-[#E5E5E0] rounded-xl p-5 bg-white">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold text-[#9CA3AF] uppercase tracking-widest">{s.section}</span>
              </div>
              <h3 className="font-bold text-[#0D0D0D] mb-1">{s.title}</h3>
              <p className="text-xs text-[#6B6B6B] italic mb-3">{s.purpose}</p>
              <div className="space-y-2">
                {s.template.map((line, i) => (
                  <p key={i} className="text-sm text-[#475569] bg-[#F5F5F0] rounded-lg px-3 py-2 leading-relaxed">
                    &ldquo;{line}&rdquo;
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Assembled template */}
        <div className="bg-[#0F172A] rounded-xl p-6">
          <h3 className="font-bold text-white mb-3">Full Fill-in-the-Blank Pitch</h3>
          <div className="text-sm text-[#9CA3AF] leading-relaxed space-y-3">
            <p>
              I&apos;m a [insert year or role] [insert major or profession] at [insert university or company]. I&apos;m originally from [insert place], and I&apos;ve always been interested in [insert curiosity or topic].
            </p>
            <p>
              I&apos;m passionate about [insert field or industry] because [insert reason]. I discovered this interest when [insert relevant experience or realization].
            </p>
            <p>
              During [insert time period], I [insert what you did], where I [insert specific task or responsibility]. I especially enjoyed [insert part of the process], and our work led to [insert result or impact].
            </p>
            <p>
              Right now, I&apos;m [insert current activity], focused on [insert skill or goal].
            </p>
            <p>
              I&apos;m particularly interested in [this role / this team / this organization] because [specific reason tied to the role&apos;s responsibilities, mission, or challenges]. I bring strengths in [2–3 hard or strategic skills], and I&apos;m known for [key interpersonal or leadership skill]. I&apos;m excited about the opportunity to [how you&apos;d contribute] while continuing to grow in [area of development].
            </p>
          </div>
        </div>
      </section>

      {/* Why Company */}
      <section id="why-company" className="mb-16 scroll-mt-20">
        <h2 className="text-xl font-bold text-[#0D0D0D] mb-1">Why [Insert Company Name]?</h2>
        <p className="text-[#6B6B6B] mb-4">
          Interviewers want to know why you care about their company, not just the role. They&apos;re looking to see:
        </p>
        <ul className="space-y-1.5 mb-6">
          {whyCompanyPoints.map((p, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[#6B6B6B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4A825] flex-shrink-0 mt-1.5" />
              {p}
            </li>
          ))}
        </ul>

        {/* Sample answer */}
        <div className="border border-[#E5E5E0] rounded-xl p-5 bg-white mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF] mb-2">Generalized Sample Answer</p>
          <p className="text-sm text-[#475569] italic leading-relaxed">
            &ldquo;I&apos;m especially excited about [Insert Company Name] because of how you use technology to create real-world impact at scale. Your mission to [Insert Company Mission] deeply resonates with me, and I see strong alignment between your goals and my background in [Insert Your Skill Areas]. Through my experience working on [Insert Relevant Experience], I&apos;ve learned how to turn complex challenges into clear, user-first solutions. I&apos;m eager to bring those skills to a team like yours, where innovation, collaboration, and impact are at the core of the work.&rdquo;
          </p>
        </div>

        <p className="text-sm font-semibold text-[#0D0D0D] mb-3">Why you should research company projects and initiatives:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {whyResearchBenefits.map((b, i) => (
            <div key={i} className="border border-[#E5E5E0] rounded-lg p-4 bg-white">
              <p className="text-xs font-semibold text-[#0D0D0D] mb-1">{b.title}</p>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Terms to Know */}
      <section id="terms" className="mb-16 scroll-mt-20">
        <h2 className="text-xl font-bold text-[#0D0D0D] mb-1">Company & Role Terms to Know</h2>
        <p className="text-[#6B6B6B] mb-2">
          Understanding common terms helps you speak the same language as your interviewer — whether you&apos;re applying for product, engineering, design, operations, or strategy roles.
        </p>
        <div className="callout callout-tip mb-6">
          <p className="text-sm text-[#6B6B6B]">
            <strong>Role-specific terms:</strong> Research the key tools, documents, methods, and metrics used in the role you&apos;re applying for (e.g., Figma for design, SQL for data, PRDs for product, Git for engineering). Look at job descriptions, LinkedIn profiles, or online tutorials to identify what people in that role use day-to-day.
          </p>
        </div>
        <div className="border border-[#E5E5E0] rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#F5F5F0] border-b border-[#E5E5E0]">
                <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-widest text-[#9CA3AF] w-1/3">Term</th>
                <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-widest text-[#9CA3AF]">What It Means</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0]">
              {companyTerms.map((t) => (
                <tr key={t.term}>
                  <td className="px-4 py-3 font-medium text-[#0D0D0D]">{t.term}</td>
                  <td className="px-4 py-3 text-[#6B6B6B]">{t.def}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Questions to Ask */}
      <section id="questions" className="mb-16 scroll-mt-20">
        <h2 className="text-xl font-bold text-[#0D0D0D] mb-1">Questions to Ask</h2>
        <p className="text-[#6B6B6B] mb-2">
          You won&apos;t have time to ask everything — pick 4–5 questions you&apos;re genuinely curious about and that feel most relevant to your goals. Asking thoughtful, tailored questions shows you&apos;ve done your research and helps build real connections.
        </p>
        <div className="callout callout-info mb-6">
          <p className="text-sm text-[#6B6B6B]">Prioritize questions that help you learn more about the role, the team, and the culture. Asking thoughtful questions not only shows preparation — it also demonstrates that you&apos;re serious about the opportunity.</p>
        </div>
        <div className="space-y-6">
          {questionGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div key={group.label}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-[#F5F5F0] rounded-md flex items-center justify-center">
                    <Icon size={12} className="text-[#6B6B6B]" />
                  </div>
                  <h3 className="font-semibold text-[#0D0D0D]">{group.label}</h3>
                </div>
                <ul className="space-y-2">
                  {group.questions.map((q, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#6B6B6B]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1] flex-shrink-0 mt-1.5" />
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tools */}
      <section id="tools" className="mb-4 scroll-mt-20">
        <h2 className="text-xl font-bold text-[#0D0D0D] mb-1">Recommended Tools & Platforms</h2>
        <p className="text-[#6B6B6B] mb-6">Useful resources for APM recruiting, prep, and research.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {tools.map((t) => (
            <a
              key={t.name}
              href={t.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 p-4 border border-[#E5E5E0] rounded-xl bg-white hover:border-[#F4A825] hover:shadow-sm transition-all"
            >
              <div className="w-7 h-7 bg-[#FDF8EC] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <Wrench size={12} className="text-[#F4A825]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#0D0D0D] group-hover:text-[#F4A825] transition-colors mb-0.5">{t.name}</p>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">{t.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
