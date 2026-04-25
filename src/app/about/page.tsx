import Link from "next/link";
import { ArrowRight } from "lucide-react";

const tsadikuAcceptances = [
  { school: "Harvard University", notes: "Likely letter", badge: "likely" },
  { school: "UC Berkeley — MET Program", notes: "Regents & Chancellor's Scholar · ~1% acceptance rate", badge: "scholarship" },
  { school: "Yale University", notes: "", badge: null },
  { school: "Georgia Tech", notes: "Provost Scholarship", badge: "scholarship" },
  { school: "UCLA", notes: "", badge: null },
  { school: "UC Davis", notes: "", badge: null },
  { school: "Brown University", notes: "Waitlisted", badge: "waitlist" },
  { school: "University of Pennsylvania", notes: "Waitlisted", badge: "waitlist" },
];

const adiyahAcceptances = [
  { school: "Yale University", notes: "Likely letter", badge: "likely" },
  { school: "Columbia University", notes: "Likely letter · Kluge Scholarship", badge: "scholarship" },
  { school: "Cornell University", notes: "Likely letter · Tanner Dean's Scholar", badge: "scholarship" },
  { school: "Amherst College", notes: "Likely letter", badge: "likely" },
  { school: "Harvard University", notes: "", badge: null },
  { school: "Stanford University", notes: "", badge: null },
  { school: "UC Berkeley", notes: "", badge: null },
  { school: "UCLA", notes: "", badge: null },
  { school: "University of Pennsylvania", notes: "", badge: null },
  { school: "USC", notes: "", badge: null },
  { school: "UC Davis", notes: "", badge: null },
];

const badgeStyles: Record<string, string> = {
  likely: "bg-[#F4A825]/15 text-[#C4841A] border border-[#F4A825]/30",
  scholarship: "bg-[#1B4332]/10 text-[#1B4332] border border-[#1B4332]/20",
  waitlist: "bg-[#E5E5E0] text-[#6B6B6B] border border-[#D4D4D0]",
};

function AcceptanceTable({ acceptances }: { acceptances: typeof tsadikuAcceptances }) {
  return (
    <div className="overflow-hidden rounded-xl border border-[#E5E5E0]">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#F5F5F0] border-b border-[#E5E5E0]">
            <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-widest text-[#6B6B6B]">School</th>
            <th className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-widest text-[#6B6B6B]">Notes</th>
          </tr>
        </thead>
        <tbody>
          {acceptances.map((row, i) => (
            <tr
              key={row.school}
              className={`border-b border-[#E5E5E0] last:border-b-0 ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF7]"}`}
            >
              <td className="px-5 py-4 font-medium text-[#0D0D0D]" style={{ fontFamily: "'Libre Bodoni', serif" }}>
                {row.school}
              </td>
              <td className="px-5 py-4">
                <div className="flex items-center gap-2 flex-wrap">
                  {row.badge && (
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${badgeStyles[row.badge]}`}>
                      {row.badge === "likely" ? "Likely letter" : row.badge === "scholarship" ? "Scholarship" : "Waitlisted"}
                    </span>
                  )}
                  {row.notes && row.badge === null && (
                    <span className="text-[#6B6B6B]">{row.notes}</span>
                  )}
                  {row.notes && row.badge !== null && (
                    <span className="text-[#6B6B6B] text-xs">{row.notes.replace(/^[^·]*· /, "")}</span>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D0D0D] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#6B7280] hover:text-[#9CA3AF] mb-10 transition-colors cursor-pointer"
          >
            ← Back to Blueprint
          </Link>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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

              {/* Tags */}
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
      </section>

      {/* Adiyah profile */}
      <section className="bg-[#1B4332] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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
            href="/why-college"
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 bg-[#0D0D0D] text-[#FAFAF7] font-semibold rounded-md hover:bg-[#1B4332] transition-colors duration-150 cursor-pointer"
          >
            Start with Why College
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
