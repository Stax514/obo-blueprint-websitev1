import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";

const tracks = [
  {
    name: "BigLaw",
    href: "/careers/law-career/biglaw",
    pay: "$215K–$250K + bonus",
    balance: "Demanding (2,000+ hrs/yr)",
    best: "High pay, M&A/corporate law, high-stakes litigation, maximum optionality",
    num: "01",
  },
  {
    name: "Judicial Clerkship",
    href: "/careers/law-career/clerkships",
    pay: "$60K–$80K (1–2 yr term)",
    balance: "Excellent hours, intense writing",
    best: "Prestige, SCOTUS pipeline, academia, legal writing mastery",
    num: "02",
  },
  {
    name: "Government & DOJ",
    href: "/careers/law-career/government",
    pay: "$75K–$180K",
    balance: "Good (public sector hours)",
    best: "Real courtroom time, criminal law, regulatory enforcement, public service",
    num: "03",
  },
  {
    name: "Public Interest",
    href: "/careers/law-career/public-interest",
    pay: "$50K–$85K + loan forgiveness",
    balance: "Sustainable, mission-driven",
    best: "Civil rights, criminal justice, social justice, housing, immigration",
    num: "04",
  },
  {
    name: "In-House Counsel",
    href: "/careers/law-career/in-house",
    pay: "$200K–$500K+ (with equity)",
    balance: "Good-to-excellent",
    best: "Work-life balance, tech/finance/healthcare, business partner role",
    num: "05",
  },
];

const selfCheck = [
  { q: "Do you want maximum starting pay and the ability to pay off loans in 2–3 years?", track: "→ BigLaw" },
  { q: "Are you intellectually passionate about the law itself — constitutional questions, statutory interpretation?", track: "→ Clerkship" },
  { q: "Do you want real courtroom experience from day one — trying cases, not just researching them?", track: "→ Government / AUSA" },
  { q: "Did you come to law school to address a specific injustice — civil rights, housing, immigration, criminal justice?", track: "→ Public Interest" },
  { q: "Do you want the lifestyle of a professional job (9–6ish) with strong pay at a company you care about?", track: "→ In-House" },
  { q: "Do you want the most prestigious credential in the legal profession — and everything it opens?", track: "→ Clerkship" },
  { q: "Are you drawn to a specific industry — tech, finance, healthcare — and want to understand it from the inside?", track: "→ In-House" },
  { q: "Do you care deeply about managing law school debt? Public interest + PSLF may be the most financially rational path.", track: "→ Government or Public Interest" },
];


export default function LawCareerPage() {
  return (
    <div className="bg-[#FAFAF7]">
      <div className="bg-[#0D0D0D] text-[#FAFAF7] px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Link href="/careers/lawyer" className="text-xs font-semibold text-[#6B6B6B] hover:text-[#FAFAF7] transition-colors">← Lawyer</Link>
          <div className="mt-6 mb-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FAFAF7] bg-[#1E3A5F] px-2 py-0.5 rounded-full">● Getting a Law Job</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 leading-tight" style={{ fontFamily: "'Libre Bodoni', serif" }}>
            Five paths after law school.<br />
            <span className="text-[#F4A825] italic">Choose yours before you start.</span>
          </h1>
          <p className="text-[#A0A0A0] text-lg max-w-2xl mb-8">
            Most people think "lawyer" is one job. It's not. There are five distinct career tracks after law school — each with completely different day-to-day work, recruiting timelines, salaries, and preparation. The track you want determines what you do in 1L summer.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/careers/law-career/biglaw" className="inline-flex items-center gap-2 px-5 py-3 bg-[#F4A825] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:bg-white transition-colors cursor-pointer">
              Explore BigLaw <ArrowRight size={14} />
            </Link>
            <Link href="/careers/law-career/public-interest" className="inline-flex items-center gap-2 px-5 py-3 border border-[#3A3A3A] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:border-[#F4A825] transition-colors cursor-pointer">
              Public Interest
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>The 5 Career Tracks</h2>
          <p className="text-sm text-[#6B6B6B] mb-6">Each one is a completely different career. Pick the right track, then build toward it from Day 1.</p>
          <div className="space-y-3">
            {tracks.map((t) => (
              <Link key={t.href} href={t.href} className="flex items-center gap-5 p-5 border border-[#E5E5E0] rounded-xl bg-white hover:border-[#1E3A5F] transition-colors group cursor-pointer">
                <span className="text-3xl font-bold text-[#0D0D0D]/8 flex-shrink-0" style={{ fontFamily: "'Libre Bodoni', serif" }}>{t.num}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <p className="font-bold text-[#0D0D0D] text-sm group-hover:text-[#1E3A5F] transition-colors">{t.name}</p>
                    <span className="text-[10px] font-semibold text-[#1E3A5F] bg-[#EFF6FF] px-2 py-0.5 rounded">{t.pay}</span>
                  </div>
                  <p className="text-xs text-[#9CA3AF] mb-0.5"><span className="font-semibold text-[#6B7280]">Hours:</span> {t.balance}</p>
                  <p className="text-xs text-[#6B6B6B]"><span className="font-semibold text-[#6B7280]">Best for:</span> {t.best}</p>
                </div>
                <ArrowRight size={16} className="text-[#9CA3AF] group-hover:text-[#1E3A5F] transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>Which track is right for you?</h2>
          <p className="text-sm text-[#6B6B6B] mb-6">Eight questions to help you figure out where you fit.</p>
          <div className="space-y-2">
            {selfCheck.map((item, i) => (
              <div key={i} className="flex gap-3 p-4 border border-[#E5E5E0] rounded-lg bg-white">
                <HelpCircle size={15} className="text-[#1E3A5F] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-[#6B6B6B] leading-relaxed">{item.q}</p>
                  <p className="text-xs font-semibold text-[#1E3A5F] mt-1">{item.track}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-[#EFF6FF] border-l-4 border-[#1E3A5F] rounded-r-lg">
            <p className="text-sm text-[#374151] leading-relaxed">You are not locked in. The most common path in law: BigLaw for 2–5 years → government or in-house. Many BigLaw associates become AUSAs. Many public interest lawyers did a few years at a firm first. Choose deliberately — but know the tracks are more porous than they appear.</p>
          </div>
        </section>

        <section className="bg-[#0D0D0D] rounded-2xl p-8 mb-14 grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-2xl font-bold text-[#F4A825]">$215K</p>
            <p className="text-xs text-[#A0A0A0] mt-1">BigLaw 1st-year base salary</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#F4A825]">10 yrs</p>
            <p className="text-xs text-[#A0A0A0] mt-1">Until PSLF loan forgiveness kicks in</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#F4A825]">Aug</p>
            <p className="text-xs text-[#A0A0A0] mt-1">When 2L OCI applications are due — before class starts</p>
          </div>
        </section>


      </div>
    </div>
  );
}
