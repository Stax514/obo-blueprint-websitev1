import SectionLayout from "@/components/SectionLayout";
import { CheckCircle, XCircle } from "lucide-react";

const schoolTypes = [
  {
    type: "HBCUs",
    full: "Historically Black Colleges & Universities",
    description: "Schools founded specifically to educate Black Americans. 107 schools across the country — from Howard and Spelman to Grambling and FAMU. If you want to be surrounded by Black excellence from day one, this is where you start looking.",
    pros: [
      "Community and belonging from day one",
      "Black excellence is the norm, not the exception",
      "Alumni networks that are deeply loyal and connected",
      "Professors who often look like you and mentor aggressively",
      "Leadership opportunities — there's no hiding at an HBCU",
      "Strong financial aid packages, especially at private HBCUs",
    ],
    cons: [
      "Some have smaller alumni giving → fewer resources",
      "Graduate programs are more limited",
      "Less brand-name recognition in some industries (though this is changing)",
    ],
    color: "border-[#C45B3D]",
    accent: "text-[#C45B3D]",
    bg: "bg-[#FDF2EE]",
  },
  {
    type: "PWIs",
    full: "Predominantly White Institutions",
    description: "The majority of US colleges — including every Ivy League school, most flagship state universities, and most private colleges. Tsadiku chose UC Berkeley MET. Adiyah chose Yale. Same family, same upbringing — different perfect fits.",
    pros: [
      "Often larger alumni networks and industry connections",
      "More research funding and facilities",
      "Wider range of majors and specialized programs",
      "Elite name recognition can open doors in certain industries",
      "Exposure to diverse environments and perspectives",
    ],
    cons: [
      "You may be one of very few Black students in your classes",
      "Microaggressions are real and common",
      "Less institutional support built specifically for you",
      "Higher pressure to code-switch",
    ],
    color: "border-[#1A1A2E]",
    accent: "text-[#1A1A2E]",
    bg: "bg-[#F0F0F8]",
  },
  {
    type: "State Schools",
    full: "Public Universities",
    description: "Your state's flagship and regional public universities. Often the most affordable option — especially for in-state students. Large campuses, huge alumni networks, and often underrated programs in specific fields.",
    pros: [
      "In-state tuition is significantly cheaper",
      "Large campuses with massive alumni networks",
      "Lots of clubs, orgs, and communities",
      "Many have strong Honors programs if you want a challenge",
    ],
    cons: [
      "Large class sizes can make you feel invisible",
      "Less personalized attention from professors",
      "Financial aid can be less generous than elite private schools",
    ],
    color: "border-[#1B4332]",
    accent: "text-[#1B4332]",
    bg: "bg-[#ECFDF5]",
  },
  {
    type: "Community College",
    full: "2-Year Transfer Path",
    description: "A real path to a 4-year degree — not a consolation prize. Community college plus transfer can get you to a UC, Cal State, or beyond at a fraction of the cost. Requires planning, but it works.",
    pros: [
      "Lowest cost option by far",
      "Flexible scheduling",
      "Strong transfer agreements with state schools",
      "Time to figure out what you actually want to study",
    ],
    cons: [
      "Transfer process requires planning and discipline — it won't happen automatically",
      "Less of the traditional college experience",
      "Some employers still filter based on undergrad school",
    ],
    color: "border-[#0F766E]",
    accent: "text-[#0F766E]",
    bg: "bg-[#F0FDFB]",
  },
];

const fitFactors = [
  { label: "Academic Fit", desc: "Does the school have a strong program in your specific field of interest? Tsadiku got into Yale and Harvard but chose Berkeley MET because it was the one program built exactly for Product Management — EECS plus Business in one degree. The ranked-lower program was actually the better fit." },
  { label: "Social Fit", desc: "Will you feel at home? Is there a Black student organization, cultural community, spaces where you belong? Visit if you can. You'll feel immediately whether a school is a fit or not." },
  { label: "Financial Fit", desc: "After financial aid, what will this actually cost? The better the school, the more money they often give. Elite schools with big endowments are frequently cheaper for low-income students than state schools." },
  { label: "Career Fit", desc: "Do their alumni work in the industries you care about? Will this school open the specific doors you want opened? Look at where recent graduates actually landed jobs — not just the famous alumni from 30 years ago." },
  { label: "Location Fit", desc: "City vs. college town, climate, proximity to family — these matter more than people admit. Being 2,000 miles from home when something happens is a real thing to factor in." },
];

export default function WhichCollegePage() {
  return (
    <SectionLayout
      eyebrow="Section 02 — Which College?"
      title={`Find the school\nthat fits you.`}
      subtitle="There isn't one school that's objectively better. What matters is which school is best for your major, your career, your goals. Don't chase prestige. Chase fit."
      quote="Tsadiku got into Yale and Harvard. He chose Berkeley MET. Adiyah chose Yale. Same family, same upbringing — two different perfect fits. That's the whole point."
      accentColor="#C45B3D"
      accentBg="bg-[#C45B3D]"
      accentText="text-white"
      prevSection={{ href: "/why-college", label: "Why College?" }}
      nextSection={{ href: "/timeline", label: "Timeline" }}
    >
      {/* Intro */}
      <div className="max-w-3xl mb-20">
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-6"
          style={{ fontFamily: "'Libre Bodoni', serif" }}
        >
          Rankings won&apos;t tell you what you need to know.
        </h2>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-4">
          The US News rankings are a starting point at best and misleading at worst. Sometimes the program that&apos;s &ldquo;ranked lower&rdquo; is actually the better choice for you because it has exactly what you need. The school that produces the most doctors or engineers in your field matters more than its overall ranking.
        </p>
        <p className="text-[#6B6B6B] text-lg leading-relaxed">
          Here&apos;s the landscape — what each type of school offers, and a real framework for evaluating fit.
        </p>
      </div>

      {/* School types */}
      <div className="mb-20">
        <p className="text-[#C45B3D] text-xs font-semibold uppercase tracking-widest mb-4">The options</p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-10"
          style={{ fontFamily: "'Libre Bodoni', serif" }}
        >
          Four types of schools
        </h2>
        <div className="space-y-6">
          {schoolTypes.map((school) => (
            <div key={school.type} className={`${school.bg} border-2 ${school.color} rounded-xl p-8`}>
              <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                <div>
                  <h3
                    className={`text-2xl font-bold ${school.accent} mb-1`}
                    style={{ fontFamily: "'Libre Bodoni', serif" }}
                  >
                    {school.type}
                  </h3>
                  <p className="text-[#6B6B6B] text-sm">{school.full}</p>
                </div>
              </div>
              <p className="text-[#0D0D0D] mb-6 leading-relaxed">{school.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#1B4332] mb-3">Strengths</p>
                  <ul className="space-y-2">
                    {school.pros.map((pro) => (
                      <li key={pro} className="flex gap-2 text-sm text-[#374151]">
                        <CheckCircle size={16} className="text-[#1B4332] flex-shrink-0 mt-0.5" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#C45B3D] mb-3">Trade-offs</p>
                  <ul className="space-y-2">
                    {school.cons.map((con) => (
                      <li key={con} className="flex gap-2 text-sm text-[#374151]">
                        <XCircle size={16} className="text-[#C45B3D] flex-shrink-0 mt-0.5" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fit framework */}
      <div className="mb-20">
        <p className="text-[#C45B3D] text-xs font-semibold uppercase tracking-widest mb-4">The framework</p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4"
          style={{ fontFamily: "'Libre Bodoni', serif" }}
        >
          How to actually evaluate a school
        </h2>
        <p className="text-[#6B6B6B] mb-10 max-w-2xl">
          Rankings tell you almost nothing useful. Here&apos;s the five-factor framework that actually matters — the same one we used to make our own decisions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {fitFactors.map((factor, i) => (
            <div key={factor.label} className="bg-white border border-[#E5E5E0] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-7 h-7 rounded-full bg-[#C45B3D] flex items-center justify-center text-white text-xs font-bold">
                  {i + 1}
                </div>
                <h3 className="font-bold text-[#0D0D0D]" style={{ fontFamily: "'Libre Bodoni', serif" }}>
                  {factor.label}
                </h3>
              </div>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">{factor.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Visit tip */}
      <div className="bg-[#0D0D0D] rounded-2xl p-8 md:p-12 max-w-3xl">
        <p className="text-[#C45B3D] text-xs font-semibold uppercase tracking-widest mb-4">Pro tip</p>
        <h3
          className="text-2xl sm:text-3xl font-bold text-[#FAFAF7] mb-4"
          style={{ fontFamily: "'Libre Bodoni', serif" }}
        >
          Visit if you possibly can.
        </h3>
        <p className="text-[#9CA3AF] leading-relaxed mb-4">
          Nothing replaces walking on campus. You&apos;ll feel immediately whether a school is a fit or not — something no ranking can tell you. Most schools offer free overnight visits for admitted students. Do not skip them.
        </p>
        <p className="text-[#9CA3AF] leading-relaxed">
          If you can&apos;t visit in person, find students on Instagram or Reddit who actually go there and look at real day-in-the-life content. The official tour shows you the nicest buildings. The student content shows you the real school.
        </p>
      </div>
    </SectionLayout>
  );
}
