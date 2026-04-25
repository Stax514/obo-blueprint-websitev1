import SectionLayout from "@/components/SectionLayout";
import { DollarSign, AlertCircle } from "lucide-react";

const fafsaSteps = [
  { step: "1", title: "Create your FSA ID", desc: "Go to studentaid.gov. Both you and a parent need separate FSA IDs. Do this before October 1st — don't let a technicality slow you down." },
  { step: "2", title: "Gather your documents", desc: "Social security numbers, tax returns (yours and parents), W-2s, bank statements, records of other income. Have all of this ready before you sit down to fill it out." },
  { step: "3", title: "Open the FAFSA on Oct 1", desc: "It opens October 1st every year. Submit as early as possible — some financial aid is first-come, first-served. Early submission is one of the easiest wins available to you." },
  { step: "4", title: "List your schools", desc: "You can list up to 20 schools. List every school you're applying to so they each receive your info. Don't finalize your college list before submitting." },
  { step: "5", title: "Submit and confirm", desc: "After submitting, you'll get a confirmation email. Your FAFSA info will go directly to your listed schools. Screenshot the confirmation." },
  { step: "6", title: "Check your Student Aid Report (SAR)", desc: "After submission, review your SAR for any errors. Fix them immediately if something looks wrong — errors delay your aid." },
];

const scholarships = [
  {
    name: "Gates Scholarship",
    amount: "Full ride (tuition, room, board, personal expenses)",
    eligibility: "Black, Hispanic/Latino, American Indian, or Alaska Native. Must be Pell Grant-eligible (based on family income). Minimum 3.3 GPA.",
    deadline: "Typically September",
    url: "thegatesscholarship.org",
  },
  {
    name: "United Negro College Fund (UNCF)",
    amount: "Various — from $500 to full scholarships",
    eligibility: "Primarily for students attending HBCUs. Multiple programs targeting different majors and backgrounds.",
    deadline: "Multiple deadlines throughout the year",
    url: "uncf.org",
  },
  {
    name: "Ron Brown Scholar Program",
    amount: "$10,000/year × 4 years",
    eligibility: "African American high school seniors demonstrating academic excellence, leadership, community service, and financial need.",
    deadline: "Typically January 9",
    url: "ronbrown.org",
  },
  {
    name: "Jackie Robinson Foundation",
    amount: "Up to $30,000 total + leadership development",
    eligibility: "African American students with demonstrated need and leadership potential.",
    deadline: "Typically February",
    url: "jackierobinson.org",
  },
  {
    name: "Thurgood Marshall College Fund",
    amount: "Various — merit and need-based",
    eligibility: "Students attending Historically Black Colleges and Universities or Predominantly Black Institutions.",
    deadline: "Varies by program",
    url: "tmcf.org",
  },
  {
    name: "National Achievement Scholarship (NMSQT)",
    amount: "$2,500 one-time + possible college-sponsored awards",
    eligibility: "High-scoring Black students on the PSAT. Apply during junior year.",
    deadline: "Part of PSAT process junior year",
    url: "nationalmerit.org",
  },
];

const negotiationTips = [
  {
    title: "You can negotiate. Most families don't know this.",
    body: "Financial aid packages are not set in stone. If you receive a better offer from a comparable school, you can write to your preferred school's financial aid office and ask them to match or come closer to the competing offer. This works more often than people realize.",
  },
  {
    title: "Write a professional, specific appeal letter",
    body: "Be specific: explain your financial situation, mention the competing offer by name and dollar amount, and ask politely for reconsideration. Vague appeals get ignored. Include specific numbers and the name of the competing school.",
  },
  {
    title: "Explain changes in your family's financial situation",
    body: "If your family's financial situation changed since submitting FAFSA — job loss, medical bills, a parent losing income — contact the financial aid office immediately. They have discretion to adjust your package based on updated information.",
  },
  {
    title: "The better the school, the more money they often give",
    body: "Harvard, Yale, Princeton, and most elite private schools have massive endowments and strong need-based aid programs. Harvard: free under $85K. Yale: free under $75K. Princeton: free under $100K. The schools that look most expensive on paper are often cheaper than your state school after aid. Don't eliminate elite schools based on sticker price.",
  },
];

export default function FinancialAidPage() {
  return (
    <SectionLayout
      eyebrow="Section 06 — Financial Aid"
      title={`Don't let money\nstop you.`}
      subtitle="College can be free. Tsadiku went to UC Berkeley on scholarship. Adiyah goes to Yale on scholarship. Here's exactly how the money works — and how to get it."
      quote="These colleges are actively looking for students from underrepresented communities because there aren't that many people with your exact experience and perspective applying. That's leverage. Use it."
      accentColor="#0F766E"
      accentBg="bg-[#0F766E]"
      accentText="text-white"
      prevSection={{ href: "/extracurriculars", label: "Extracurriculars" }}
    >
      {/* Intro */}
      <div className="max-w-3xl mb-20">
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-6"
          style={{ fontFamily: "'Libre Bodoni', serif" }}
        >
          The money truth
        </h2>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-4">
          Here&apos;s the comparison that matters: if you skip college and get a $25K job right out of high school, after taxes, rent, and food you&apos;re saving maybe $10–15K a year. In 4 years, call it $40–60K if you&apos;re disciplined. If you go to college for free — which is entirely possible — and graduate with a $55–60K starting salary (the national average for 2023 grads), in year ONE of working you&apos;ve already matched that. And that&apos;s before summer internships, which at competitive companies can pay $15–25K for the summer while you&apos;re still in school.
        </p>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-4">
          The math is not close. But only if you know how to access the money that&apos;s available to you.
        </p>
        <p className="text-[#6B6B6B] text-lg leading-relaxed">
          Harvard&apos;s sticker price is ~$80,000/year — but families earning under $85,000 pay nothing. Yale&apos;s threshold is $75,000. Princeton&apos;s is $100,000. MIT&apos;s is $90,000. Every elite school has a different number, but the pattern is the same: the bigger the endowment, the more they give. Understanding the system is how you unlock it.
        </p>
      </div>

      {/* Key terms */}
      <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          { term: "Need-Based Aid", def: "Money given based on your family's financial situation. The less your family earns, the more you get. Grants don't need to be repaid — loans do. Know the difference before you sign anything." },
          { term: "Merit Aid", def: "Money given based on your academic achievements, test scores, or special talents. Doesn't depend on income. Many scholarships are merit-based — and being a strong student from an underrepresented background is significant leverage." },
          { term: "EFC / SAI", def: "Expected Family Contribution (now called Student Aid Index). The number FAFSA calculates your family can pay. Lower = more aid you qualify for. Don't assume your family's number is too high until you actually calculate it." },
        ].map((item) => (
          <div key={item.term} className="bg-[#CCFBF1] border border-[#0F766E]/20 rounded-xl p-6">
            <h3 className="font-bold text-[#0F766E] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>
              {item.term}
            </h3>
            <p className="text-[#374151] text-sm leading-relaxed">{item.def}</p>
          </div>
        ))}
      </div>

      {/* FAFSA Steps */}
      <div className="mb-20">
        <p className="text-[#0F766E] text-xs font-semibold uppercase tracking-widest mb-4">Step by step</p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4"
          style={{ fontFamily: "'Libre Bodoni', serif" }}
        >
          How to complete the FAFSA
        </h2>
        <p className="text-[#6B6B6B] mb-10 max-w-2xl">
          The FAFSA (Free Application for Federal Student Aid) is the form that determines how much federal and state aid you receive. It is mandatory for every school. Submit it as early as October 1st of your senior year — not in January, not in March. October.
        </p>
        <div className="space-y-4">
          {fafsaSteps.map((step) => (
            <div key={step.step} className="flex gap-5 bg-white border border-[#E5E5E0] rounded-xl p-6">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#0F766E] text-white flex items-center justify-center font-bold">
                {step.step}
              </div>
              <div>
                <h3 className="font-bold text-[#0D0D0D] mb-1" style={{ fontFamily: "'Libre Bodoni', serif" }}>
                  {step.title}
                </h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Profile note */}
      <div className="mb-20 bg-[#FFF9EC] border border-[#F4A825]/30 rounded-xl p-8">
        <div className="flex gap-3 mb-3">
          <AlertCircle size={18} className="text-[#C4841A] flex-shrink-0 mt-0.5" />
          <p className="text-[#C4841A] text-xs font-semibold uppercase tracking-widest">Also required by many private schools</p>
        </div>
        <h3 className="text-xl font-bold text-[#0D0D0D] mb-3" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          The CSS Profile
        </h3>
        <p className="text-[#6B6B6B] leading-relaxed">
          Over 400 colleges and scholarship programs require the CSS Profile in addition to FAFSA. It&apos;s more detailed and asks about home equity, assets, and other financial factors. Submit it as early as possible — the CSS Profile deadline is often the same as the application deadline. Check each school&apos;s financial aid page. Missing this form means leaving real money on the table.
        </p>
      </div>

      {/* Scholarships */}
      <div className="mb-20">
        <p className="text-[#0F766E] text-xs font-semibold uppercase tracking-widest mb-4">Money on the table</p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4"
          style={{ fontFamily: "'Libre Bodoni', serif" }}
        >
          Scholarships built for Black students
        </h2>
        <p className="text-[#6B6B6B] mb-10 max-w-2xl">
          These are real, prestigious programs — not obscure contests. Billions of dollars go unclaimed every year because students don&apos;t know these exist or simply don&apos;t apply. Apply to every one you qualify for. The only thing standing between you and this money is the application.
        </p>
        <div className="space-y-5">
          {scholarships.map((s) => (
            <div key={s.name} className="bg-white border border-[#E5E5E0] rounded-xl p-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                <h3 className="font-bold text-[#0D0D0D] text-lg" style={{ fontFamily: "'Libre Bodoni', serif" }}>
                  {s.name}
                </h3>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <DollarSign size={14} className="text-[#0F766E]" />
                  <span className="text-[#0F766E] text-sm font-semibold">{s.amount}</span>
                </div>
              </div>
              <p className="text-[#6B6B6B] text-sm mb-3">{s.eligibility}</p>
              <div className="flex flex-wrap gap-4 text-xs">
                <span className="text-[#374151]"><strong>Deadline:</strong> {s.deadline}</span>
                <span className="text-[#0F766E]">{s.url}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Negotiation */}
      <div className="bg-[#0D0D0D] rounded-2xl p-8 md:p-12">
        <p className="text-teal-400 text-xs font-semibold uppercase tracking-widest mb-4">Most families skip this</p>
        <h3
          className="text-2xl sm:text-3xl font-bold text-[#FAFAF7] mb-8"
          style={{ fontFamily: "'Libre Bodoni', serif" }}
        >
          Negotiating your financial aid package
        </h3>
        <div className="space-y-6">
          {negotiationTips.map((tip) => (
            <div key={tip.title} className="border-b border-[#2D2D2D] pb-6 last:border-b-0 last:pb-0">
              <h4 className="text-[#FAFAF7] font-semibold mb-2 italic" style={{ fontFamily: "'Libre Bodoni', serif" }}>
                {tip.title}
              </h4>
              <p className="text-[#9CA3AF] text-sm leading-relaxed">{tip.body}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
