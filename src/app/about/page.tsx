"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SiteHamburger from "@/components/SiteHamburger";

type Acceptance = {
  school: string;
  logo: string;
  badge: "likely" | "scholarship" | "waitlist" | null;
  detail: string;
};

const tsadikuAcceptances: Acceptance[] = [
  { school: "Harvard University", logo: "/logos/harvard.svg", badge: "likely", detail: "Likely Letter for Exceptional Candidacy" },
  { school: "UC Berkeley — MET Program", logo: "/logos/uc-berkeley.svg", badge: "scholarship", detail: "~1% acceptance rate · Regents & Chancellor's Scholarship" },
  { school: "Yale University", logo: "/logos/yale.svg", badge: null, detail: "" },
  { school: "Georgia Tech", logo: "/logos/georgia-tech.svg", badge: "scholarship", detail: "Provost Scholarship" },
  { school: "UCLA", logo: "/logos/ucla.svg", badge: null, detail: "" },
  { school: "UC Davis", logo: "/logos/uc-davis.svg", badge: null, detail: "" },
  { school: "Brown University", logo: "/logos/brown.svg", badge: "waitlist", detail: "Waitlisted" },
  { school: "University of Pennsylvania", logo: "/logos/upenn.svg", badge: "waitlist", detail: "Waitlisted" },
];

const adiyahAcceptances: Acceptance[] = [
  { school: "Yale University", logo: "/logos/yale.svg", badge: "likely", detail: "Likely Letter for Exceptional Candidacy" },
  { school: "Columbia University", logo: "/logos/columbia.svg", badge: "scholarship", detail: "Likely Letter · Kluge Scholarship" },
  { school: "Cornell University", logo: "/logos/cornell.svg", badge: "scholarship", detail: "Likely Letter · Tanner Dean's Scholar" },
  { school: "Amherst College", logo: "/logos/amherst.svg", badge: "likely", detail: "Likely Letter for Exceptional Candidacy" },
  { school: "Harvard University", logo: "/logos/harvard.svg", badge: null, detail: "" },
  { school: "Stanford University", logo: "/logos/stanford.svg", badge: null, detail: "" },
  { school: "UC Berkeley", logo: "/logos/uc-berkeley.svg", badge: null, detail: "" },
  { school: "UCLA", logo: "/logos/ucla.svg", badge: null, detail: "" },
  { school: "University of Pennsylvania", logo: "/logos/upenn.svg", badge: null, detail: "" },
  { school: "USC", logo: "/logos/usc.svg", badge: null, detail: "" },
  { school: "UC Davis", logo: "/logos/uc-davis.svg", badge: null, detail: "" },
];

const badgeStyles: Record<string, string> = {
  likely: "bg-[#F4A825]/15 text-[#C4841A] border border-[#F4A825]/30",
  scholarship: "bg-[#1B4332]/10 text-[#1B4332] border border-[#1B4332]/20",
  waitlist: "bg-[#E5E5E0] text-[#6B6B6B] border border-[#D4D4D0]",
};

const badgeLabel: Record<string, string> = {
  likely: "Likely Letter",
  scholarship: "Scholarship",
  waitlist: "Waitlisted",
};

function AcceptanceTable({ acceptances }: { acceptances: Acceptance[] }) {
  return (
    <div className="rounded-xl border border-[#E5E5E0] overflow-hidden">
      {acceptances.map((row, i) => (
        <div
          key={row.school}
          className={`flex items-center gap-4 px-4 py-3 border-b border-[#E5E5E0] last:border-b-0 ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF7]"}`}
        >
          <div className="w-8 h-8 flex-shrink-0 rounded-md bg-white border border-[#E5E5E0] flex items-center justify-center p-1">
            <img src={row.logo} alt={row.school} className="w-full h-full object-contain" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-[#0D0D0D] leading-tight" style={{ fontFamily: "'Libre Bodoni', serif" }}>
              {row.school}
            </p>
            {(row.badge || row.detail) && (
              <div className="flex items-center gap-2 mt-1 flex-wrap">
                {row.badge && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${badgeStyles[row.badge]}`}>
                    {badgeLabel[row.badge]}
                  </span>
                )}
                {row.detail && (
                  <span className="text-xs text-[#6B6B6B]">{row.detail}</span>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function AboutNavbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF7]/95 backdrop-blur-sm border-b border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-7 h-7 bg-[#0D0D0D] rounded-sm flex items-center justify-center">
              <span className="text-[#F4A825] font-bold text-sm" style={{ fontFamily: "'Libre Bodoni', serif" }}>O</span>
            </div>
            <span className="font-bold text-[#0D0D0D] text-base tracking-tight" style={{ fontFamily: "'Libre Bodoni', serif" }}>
              Obolu Blueprint
            </span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/high-school/contact"
              className="hidden sm:inline-flex items-center px-4 py-1.5 bg-[#0D0D0D] text-[#FAFAF7] text-sm font-medium rounded-md hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors duration-150 cursor-pointer"
            >
              Get Help
            </Link>
            <SiteHamburger />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function AboutPage() {
  return (
    <>
      <AboutNavbar />

      {/* Hero */}
      <section className="bg-[#0D0D0D] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#F4A825] text-xs font-semibold uppercase tracking-widest mb-4">About</p>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#FAFAF7] leading-[1.05] mb-6"
              style={{ fontFamily: "'Libre Bodoni', serif" }}
            >
              We had
              <br />
              <span className="italic text-[#F4A825]">advantages.</span>
            </h1>
            <p className="text-[#9CA3AF] text-lg sm:text-xl leading-relaxed max-w-2xl">
              We know it. And this entire site exists because of it — to pass on everything our access gave us to students who didn&apos;t have that same head start.
            </p>
          </div>
        </div>
      </section>

      {/* The honest context */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#F4A825] text-xs font-semibold uppercase tracking-widest mb-4">The context</p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-6"
              style={{ fontFamily: "'Libre Bodoni', serif" }}
            >
              Let&apos;s be honest
              <br />
              <span className="italic">about where we came from.</span>
            </h2>
            <div className="space-y-5 text-[#6B6B6B] leading-relaxed">
              <p>
                Our mom has a PhD in Education and Equity from Harvard. Our dad has a PhD in Theoretical Physics from UC Davis. We grew up in a household where academic excellence was the water we swam in. That matters — and we&apos;re not going to pretend it doesn&apos;t.
              </p>
              <p>
                Growing up with two parents who understood systems of education, who went to top schools, who knew how the game was played — that&apos;s a real advantage. When Tsadiku was six years old, he sat in Harvard Yard watching our mom receive her doctorate. Most kids his age had never seen a college campus.
              </p>
              <p>
                We also went to Inderkum High School — a public school in Sacramento that the state named the most racially diverse in California. Our hallways looked like our city. Our classmates faced real barriers — to opportunity, to resources, to information. And we watched students who were just as smart as us fall through cracks that better preparation would have helped them avoid.
              </p>
              <p className="font-medium text-[#0D0D0D]">
                That gap — between what we had access to and what our peers had access to — is why this site exists. The college system rewards people who know how to navigate it. We learned how. Now we&apos;re writing it all down.
              </p>
            </div>
          </div>

          {/* Pull quote */}
          <div className="lg:pt-14">
            <div className="bg-[#F4A825] rounded-2xl p-8 mb-6">
              <blockquote
                className="text-2xl font-bold text-[#0D0D0D] leading-snug mb-4"
                style={{ fontFamily: "'Libre Bodoni', serif" }}
              >
                &ldquo;We&apos;re not here to inspire you. We&apos;re here to give you the actual information.&rdquo;
              </blockquote>
              <p className="text-[#0D0D0D]/70 text-sm">— Tsadiku & Adiyah Obolu</p>
            </div>
            <div className="bg-white border border-[#E5E5E0] rounded-2xl p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#6B6B6B] mb-4">Our parents</p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-2 flex-shrink-0 bg-[#1B4332] rounded-full self-stretch min-h-[3rem]"></div>
                  <div>
                    <p className="font-semibold text-[#0D0D0D] text-sm mb-1">Mom</p>
                    <p className="text-[#6B6B6B] text-sm">PhD in Education and Equity, Harvard University. She understood the levers of academic systems from the inside. That knowledge shaped us.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 flex-shrink-0 bg-[#1A1A2E] rounded-full self-stretch min-h-[3rem]"></div>
                  <div>
                    <p className="font-semibold text-[#0D0D0D] text-sm mb-1">Dad</p>
                    <p className="text-[#6B6B6B] text-sm">PhD in Theoretical Physics, UC Davis. He showed us what rigorous, original thinking looks like — and that Black men belong in elite academic spaces.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tsadiku profile */}
      <section className="bg-[#1A1A2E] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">
            <div className="hidden lg:block flex-shrink-0">
              <img
                src="/tsadiku.JPEG"
                alt="Tsadiku Obolu"
                className="w-full rounded-2xl object-cover aspect-[3/4]"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-[#6B7280] text-xs font-semibold uppercase tracking-widest mb-4">Co-Founder</p>
                <h2
                  className="text-4xl sm:text-5xl font-bold text-[#FAFAF7] mb-2"
                  style={{ fontFamily: "'Libre Bodoni', serif" }}
                >
                  Tsadiku Obolu
                </h2>
                <p className="text-[#F4A825] text-sm font-medium mb-8 italic" style={{ fontFamily: "'Libre Bodoni', serif" }}>
                  Product Manager, Google · New York
                </p>
                <div className="space-y-5 text-[#9CA3AF] leading-relaxed mb-10">
                  <p>
                    Tsadiku graduated from UC Berkeley&apos;s Management, Entrepreneurship & Technology (MET) program — a dual degree in EECS and Business Administration with roughly a 1% acceptance rate. He was a Regents and Chancellor&apos;s Scholar, UC Berkeley&apos;s highest honors.
                  </p>
                  <p>
                    Before Berkeley, Tsadiku was the kind of student who turned every environment into an opportunity. At Inderkum High School, he grew the Black Student Union from 3 members to 150, organized a school-wide teach-in after Stephon Clark was killed by Sacramento police, and served as Chief of Staff for the College and Career Readiness program — fundraising over $40K for fellow students. He also ran a snack business that grew to employ two people and clear $800/month.
                  </p>
                  <p>
                    He received a likely letter from Harvard. He chose Berkeley&apos;s MET program because the combination of engineering and business was, in his words, exactly what he needed to build the things he wanted to build. He now works as a Product Manager at Google.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["UC Berkeley MET '24", "Google PM", "Regents Scholar", "BSU President", "SMASH Valedictorian"].map((tag) => (
                    <span key={tag} className="text-xs bg-[#FAFAF7]/10 text-[#FAFAF7] border border-[#FAFAF7]/10 px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[#6B7280] text-xs font-semibold uppercase tracking-widest mb-5">Acceptance results</p>
                <AcceptanceTable acceptances={tsadikuAcceptances} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adiyah profile */}
      <section className="bg-[#1B4332] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">
            <div className="hidden lg:block flex-shrink-0">
              <img
                src="/adiyah.JPG.jpg"
                alt="Adiyah Obolu"
                className="w-full rounded-2xl object-cover aspect-[3/4]"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-[#6B7280] text-xs font-semibold uppercase tracking-widest mb-4">Co-Founder</p>
                <h2
                  className="text-4xl sm:text-5xl font-bold text-[#FAFAF7] mb-2"
                  style={{ fontFamily: "'Libre Bodoni', serif" }}
                >
                  Adiyah Obolu
                </h2>
                <p className="text-[#F4A825] text-sm font-medium mb-8 italic" style={{ fontFamily: "'Libre Bodoni', serif" }}>
                  Sophomore, Yale University
                </p>
                <div className="space-y-5 text-[#9CA3AF] leading-relaxed mb-10">
                  <p>
                    Adiyah is a sophomore at Yale majoring in Ethnicity, Race, and Migration with a Certificate in Education Studies. She&apos;s also the Creative Director for Yale&apos;s oldest spoken word group, and works at Yale&apos;s Afro-American Cultural Center on the Intercultural Social Justice team.
                  </p>
                  <p>
                    In high school, Adiyah didn&apos;t just participate in systems — she rewrote them. As BSU President, she spearheaded a district-wide Student Bill of Rights that resulted in ethnic studies becoming a required course, cultural awareness training for all teachers, and a Youth Advisory Committee for the school district. She ran a podcast called <em>Our Justice Journey</em> that amassed 5,000+ views and featured luminaries in education equity.
                  </p>
                  <p>
                    She received likely letters from Yale, Columbia, Cornell, and Amherst — and scholarship offers from all three. She chose Yale. She now mentors youth in New Haven and continues the same work she started at Inderkum High School, just from a different zip code.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Yale '27", "Ethnicity Race & Migration", "Creative Director", "BSU President", "Student Body President"].map((tag) => (
                    <span key={tag} className="text-xs bg-[#FAFAF7]/10 text-[#FAFAF7] border border-[#FAFAF7]/10 px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-[#6B7280] text-xs font-semibold uppercase tracking-widest mb-5">Acceptance results</p>
                <AcceptanceTable acceptances={adiyahAcceptances} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-[#F4A825] text-xs font-semibold uppercase tracking-widest mb-4">The mission</p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-[#0D0D0D] mb-8"
            style={{ fontFamily: "'Libre Bodoni', serif" }}
          >
            Why this exists.
          </h2>
          <div className="space-y-5 text-[#6B6B6B] leading-relaxed text-lg">
            <p>
              A lot of college prep content exists. Most of it was written for students who already have access — students at private schools with full-time college counselors, students whose parents went to these schools, students who grew up surrounded by people who could answer every question along the way.
            </p>
            <p>
              We went to a public school in Sacramento. We had educated parents, yes — but we also had classmates who didn&apos;t. And we watched smart, capable students miss opportunities not because they weren&apos;t good enough, but because nobody told them what they needed to know.
            </p>
            <p>
              This blueprint is our attempt to level the information gap. Not to sugarcoat the process. Not to pretend it&apos;s a perfect meritocracy. But to give every student who reads this the same honest, informed, tactical understanding of the college system that we had — and that made a real difference.
            </p>
            <p className="font-semibold text-[#0D0D0D]">
              Your story is your strategy. We&apos;re just here to help you tell it right.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F4A825] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-3"
              style={{ fontFamily: "'Libre Bodoni', serif" }}
            >
              Ready to start?
            </h2>
            <p className="text-[#0D0D0D]/70 max-w-xl">
              Work through the six sections — or go straight to the section that&apos;s most relevant to where you are right now.
            </p>
          </div>
          <Link
            href="/high-school"
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-[#0D0D0D] text-[#FAFAF7] font-semibold rounded-md hover:bg-[#1B4332] transition-colors duration-150 cursor-pointer"
          >
            Enter the Blueprint
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
