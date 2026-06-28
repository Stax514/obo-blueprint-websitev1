import Link from "next/link";
import { ArrowRight, CheckCircle2, HelpCircle } from "lucide-react";

const whatLawyersDo = [
  { title: "Argue in Court", desc: "Trial lawyers represent clients in civil and criminal cases — building arguments, examining witnesses, and presenting evidence to judges and juries." },
  { title: "Draft Legal Documents", desc: "Contracts, wills, briefs, motions. Every legal document requires precision — the wrong word can change an outcome." },
  { title: "Advise Clients", desc: "Lawyers counsel individuals, corporations, and governments on their legal rights, obligations, and risks. The advice shapes major decisions." },
  { title: "Shape Policy and Legislation", desc: "Lawyers write laws, lobby for change, and challenge unjust statutes in court. Civil rights law, environmental law, immigration policy — lawyers built all of it." },
  { title: "Negotiate Deals", desc: "M&A transactions, labor agreements, real estate contracts — corporate lawyers are at the center of how major deals get structured." },
  { title: "Protect Rights", desc: "Public defenders, civil rights attorneys, and legal aid lawyers are the last line of defense for people who can't otherwise access the legal system." },
];

const lawPaths = [
  { name: "BigLaw", desc: "Large corporate law firms (Cravath, Skadden, Davis Polk) that pay starting salaries of $215,000+. High-intensity M&A, securities, and litigation work. Most BigLaw associates come from top-ranked law schools." },
  { name: "Public Interest & Nonprofit Law", desc: "NAACP LDF, ACLU, Innocence Project, Legal Aid Society. Lower pay, high impact. Scholarships like Marshall-Motley exist specifically to make this path financially viable." },
  { name: "Government & Policy", desc: "DOJ, State Attorney General offices, Congress, federal agencies. Lawyers in government draft regulations, enforce laws, and shape public policy." },
  { name: "Federal Clerkships", desc: "Working for a federal judge for 1–2 years after law school. Among the most prestigious credentials in the profession. Highly competitive — strongest candidates from highly ranked law schools." },
  { name: "In-House Counsel", desc: "Working as a staff lawyer inside a corporation, nonprofit, or government agency. More predictable hours than BigLaw with strong compensation at senior levels." },
  { name: "Academia", desc: "Law professors research, write, and teach. Requires strong credentials and typically a clerkship. A smaller but influential path." },
];

const t14Schools = [
  "Yale Law School", "Harvard Law School", "Stanford Law School", "Columbia Law School",
  "University of Chicago Law School", "Penn Carey Law", "NYU School of Law",
  "University of Michigan Law", "University of Virginia School of Law", "Duke Law School",
  "Georgetown Law", "Cornell Law School", "Northwestern Pritzker Law", "UCLA School of Law",
];

const insights = [
  { headline: "Law schools recruit from everywhere — if you build the right story.", body: "Our data includes Harvard Law and Yale Law admits from Howard University, Morehouse College, and Hunter College (a CUNY commuter school). The pattern: strong GPA + high LSAT + pipeline programs + a defined legal niche. The school on your diploma matters far less than what you did while you were there." },
  { headline: "The LSAT is the great equalizer.", body: "A 175 LSAT from Hunter College will get you further than a 160 LSAT from Stanford. Unlike the SAT, the LSAT is a learnable skill — and law schools report only your highest score. This test is your biggest opportunity to compete with anyone, from anywhere." },
  { headline: "Pipeline programs are the most under-used cheat code in pre-law.", body: "TRIALS at Harvard Law, Marshall-Motley Scholars, SEO Law Fellows, UCLA Law Fellows, Luce Scholars — these programs exist specifically to move underrepresented students into top law schools. Every person in our research was connected to at least one. Most students don't know they exist." },
  { headline: "A gap year makes your application stronger, not weaker.", body: "Students in our research spent gap years abroad on Luce Scholars fellowships, in NYC government through the Urban Fellowship, and in nonprofit leadership roles before Harvard Law and Yale Law. Top law schools explicitly value students who have deepened their story before enrolling." },
  { headline: "Niche wins. 'I want to help people' loses.", body: "Law schools aren't looking for general interest in justice. They want students who have thought deeply about a specific problem. Health law. AI and tech law. Criminal justice reform. Immigration. Art law. Your personal statement needs a niche — and your four years of undergrad should build toward it." },
];

const selfCheck = [
  "Are you genuinely interested in how laws are made, challenged, and enforced — not just outcomes?",
  "Can you maintain a 3.7+ GPA throughout undergrad? Law school admissions is GPA-sensitive.",
  "Are you willing to spend 3 years in law school (plus undergraduate) before your career fully begins?",
  "Have you read about a legal issue — criminal justice, health law, immigration, civil rights — that made you want to do something about it?",
  "Are you prepared to invest serious time in LSAT prep? High scores require months of focused practice.",
  "Do you want a career that involves reading, writing, arguing, and analysis — every day?",
  "Are you comfortable with ambiguity? Law often has no clean right answer.",
  "Can you see yourself in a specific area of law — not just 'law' in general?",
];

const sections = [
  { href: "/careers/law-school/roadmap", label: "Year-by-Year Roadmap", desc: "Freshman through senior year. When to get legal exposure, when to start LSAT prep, and how the application timeline works.", num: "01" },
  { href: "/careers/law-school/programs", label: "Pipeline Programs", desc: "TRIALS at Harvard Law, Marshall-Motley Scholars, SEO Law Fellows, Luce Scholars — every program worth applying to.", num: "02" },
  { href: "/careers/law-school/clubs", label: "Clubs & Activities", desc: "Mock trial, BLSA, Pre-Law Society, research positions — what to join and what to build.", num: "03" },
  { href: "/careers/law-school/lsat", label: "LSAT Prep Guide", desc: "The most important number in your application. How to study, what to target, and how to retake strategically.", num: "04" },
  { href: "/careers/law-school/resources", label: "Resources", desc: "Templates, platforms, and reading for your law school application journey.", num: "05" },
];

export default function LawSchoolPage() {
  return (
    <div className="bg-[#FAFAF7]">
      {/* Hero */}
      <div className="bg-[#0D0D0D] text-[#FAFAF7] px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Link href="/careers" className="text-xs font-semibold text-[#6B6B6B] hover:text-[#FAFAF7] transition-colors">← All careers</Link>
          <div className="mt-6 mb-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FAFAF7] bg-[#1E3A5F] px-2 py-0.5 rounded-full">● Law School</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 leading-tight" style={{ fontFamily: "'Libre Bodoni', serif" }}>
            The complete guide to<br />
            <span className="text-[#F4A825] italic">getting into law school.</span>
          </h1>
          <p className="text-[#A0A0A0] text-lg max-w-2xl mb-8">
            From high school mock trial to your acceptance letter — what it actually takes to get into the law school that's right for you.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/careers/law-school/roadmap" className="inline-flex items-center gap-2 px-5 py-3 bg-[#F4A825] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:bg-white transition-colors cursor-pointer">
              Start with the roadmap <ArrowRight size={14} />
            </Link>
            <Link href="/careers/law-school/lsat" className="inline-flex items-center gap-2 px-5 py-3 border border-[#3A3A3A] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:border-[#F4A825] transition-colors cursor-pointer">
              Jump to LSAT prep
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        {/* What is law school */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>What do lawyers do?</h2>
          <p className="text-[#6B6B6B] leading-relaxed mb-4">
            Lawyers use the legal system to solve problems — for individuals, corporations, governments, and communities. Law school gives you the tools: how to read statutes, construct arguments, analyze precedent, and write with precision. Three years of law school will change how you think.
          </p>
          <p className="text-[#6B6B6B] leading-relaxed mb-6">
            What you do with that degree depends entirely on the area of law you choose. The range is wide — from defending people in criminal court, to negotiating billion-dollar mergers, to writing legislation, to challenging unconstitutional policies in federal court.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {whatLawyersDo.map((item) => (
              <div key={item.title} className="flex gap-3 p-4 border border-[#E5E5E0] rounded-xl bg-white">
                <CheckCircle2 size={15} className="text-[#1E3A5F] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#0D0D0D] text-sm">{item.title}</p>
                  <p className="text-xs text-[#6B6B6B] mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Where law school takes you */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>Where law school takes you</h2>
          <p className="text-sm text-[#6B6B6B] mb-6">The paths a law degree opens.</p>
          <div className="space-y-3">
            {lawPaths.map((v) => (
              <div key={v.name} className="p-4 border border-[#E5E5E0] rounded-xl bg-white">
                <p className="font-semibold text-[#0D0D0D] text-sm mb-1">{v.name}</p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What is the T14 */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>What is the T14?</h2>
          <p className="text-[#6B6B6B] leading-relaxed mb-4">
            The T14 refers to the top 14 law schools in the US News rankings — a group that has remained mostly stable for decades. A T14 degree can open doors to BigLaw, federal clerkships, prestigious fellowships, and top government roles. This guide focuses heavily on T14 admissions because that's where most of our research data comes from.
          </p>
          <p className="text-[#6B6B6B] leading-relaxed mb-6">
            That said, any accredited law school can launch a meaningful legal career. Great lawyers come from schools at every level. The principles in this guide — strong GPA, strong LSAT, a defined legal niche, and real legal exposure — will strengthen your application no matter which schools you're targeting.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {t14Schools.map((s) => (
              <div key={s} className="p-2.5 border border-[#E5E5E0] rounded-lg bg-white text-center">
                <p className="text-xs font-medium text-[#0D0D0D] leading-tight">{s}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What the data shows */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>What the data actually shows</h2>
          <p className="text-sm text-[#6B6B6B] mb-6">We read the real profiles of students at Harvard Law, Yale Law, and Columbia Law — accepted from schools just like yours. Here's what we found.</p>
          <div className="space-y-4">
            {insights.map((item, i) => (
              <div key={i} className="bg-white border border-[#E5E5E0] rounded-xl p-5">
                <p className="font-bold text-[#0D0D0D] text-sm mb-2">{item.headline}</p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Self-assessment */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>Is law school right for you?</h2>
          <p className="text-sm text-[#6B6B6B] mb-6">Eight questions worth being honest about.</p>
          <div className="space-y-2">
            {selfCheck.map((q, i) => (
              <div key={i} className="flex gap-3 p-4 border border-[#E5E5E0] rounded-lg bg-white">
                <HelpCircle size={15} className="text-[#1E3A5F] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-[#6B6B6B] leading-relaxed">{q}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats strip */}
        <section className="bg-[#0D0D0D] rounded-2xl p-8 mb-14 grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-2xl font-bold text-[#F4A825]">172+</p>
            <p className="text-xs text-[#A0A0A0] mt-1">LSAT target for top law schools</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#F4A825]">3.7+</p>
            <p className="text-xs text-[#A0A0A0] mt-1">GPA floor for competitive apps</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#F4A825]">4 yrs</p>
            <p className="text-xs text-[#A0A0A0] mt-1">Story built across undergrad</p>
          </div>
        </section>

        {/* Guide sections */}
        <section>
          <h2 className="text-2xl font-bold text-[#0D0D0D] mb-6" style={{ fontFamily: "'Libre Bodoni', serif" }}>What's in this guide</h2>
          <div className="space-y-3">
            {sections.map((s) => (
              <Link key={s.href} href={s.href} className="flex items-center gap-5 p-5 border border-[#E5E5E0] rounded-xl bg-white hover:border-[#1E3A5F] transition-colors group cursor-pointer">
                <span className="text-3xl font-bold text-[#0D0D0D]/8 flex-shrink-0">{s.num}</span>
                <div className="flex-1">
                  <p className="font-semibold text-[#0D0D0D] text-sm group-hover:text-[#1E3A5F] transition-colors">{s.label}</p>
                  <p className="text-xs text-[#6B6B6B] mt-0.5">{s.desc}</p>
                </div>
                <ArrowRight size={16} className="text-[#9CA3AF] group-hover:text-[#1E3A5F] transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
