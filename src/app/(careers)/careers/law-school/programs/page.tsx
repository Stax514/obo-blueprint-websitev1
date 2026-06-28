import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const programs = [
  {
    tier: "Tier 1 — T14 Pathway Programs",
    items: [
      {
        name: "TRIALS Program — Harvard Law School",
        open: "Underrepresented juniors and seniors",
        timeline: "Apply winter/spring of junior year; program runs the summer before senior year",
        what: "A summer program at Harvard Law that introduces underrepresented students to law school academics, connects them to HLS admissions, and places them into a pre-law mentorship community. In our research, TRIALS Scholars went on to Yale Law and Harvard Law from public universities including Hunter College / CUNY.",
        why: "This is the most direct pipeline to a T14 law school for underrepresented students. You spend time at Harvard Law. You meet the people who make admissions decisions. You understand what law school actually requires before you apply.",
        href: "https://hls.harvard.edu/about/diversity-and-inclusion/diversity-programs-initiatives/trials-program/",
      },
      {
        name: "Marshall-Motley Scholars Program",
        open: "Undergraduate and post-graduate students committed to civil rights law",
        timeline: "Applications open annually; apply junior or senior year or after graduation",
        what: "Named after Thurgood Marshall and Constance Baker Motley. Full tuition scholarship (and stipend) at a T14 law school for students who commit to civil rights law careers. Multiple scholars in our research used this program to reach Yale Law — from HBCUs and from public universities.",
        why: "Full T14 tuition. Civil rights focus. Named for two of the most important lawyers in American history. If your niche is civil rights law — voting rights, housing, criminal justice, education equity — this program funds your law school career.",
        href: "https://mmscholars.org/",
      },
      {
        name: "SEO Law Fellows",
        open: "Students admitted to accredited law schools",
        timeline: "Apply in senior year or after admission; fellowship runs the summer before 1L",
        what: "A summer program that places pre-law students as paid summer associates at BigLaw firms before their first year of law school. Students in our research used this program at firms like White & Case before starting at T14 law schools.",
        why: "You earn BigLaw-level pay the summer before law school begins. You build relationships at a major firm. You start 1L already knowing what BigLaw practice looks like. Few programs create this combination.",
        href: "https://seofellows.org/",
      },
    ],
  },
  {
    tier: "Tier 2 — Fellowships & International Programs",
    items: [
      {
        name: "Luce Scholars Program",
        open: "US citizens who are college seniors, recent graduates, or early-career professionals; no prior experience in Asia required",
        timeline: "Apply senior year of undergrad; year in Asia typically begins the following summer",
        what: "A year-long placement in Asia (Indonesia, Japan, South Korea, Taiwan, Thailand, Vietnam, and more) in a professional role aligned with your career interests. Students in our research spent their Luce year doing democracy and civil society work in Indonesia before Yale Law School.",
        why: "A year in Asia, in a role that deepens your international perspective, gives any law school application a dimension that almost no other candidate has. T14 law schools value students who have done real work outside of traditional pre-law tracks.",
        href: "https://www.hluce.org/programs/luce-scholars/",
      },
      {
        name: "NAACP LDF Earl Warren Scholarship",
        open: "First-year law students at accredited law schools",
        timeline: "Apply in your first year of law school; scholarship renews",
        what: "A scholarship and mentorship program run by the NAACP Legal Defense Fund for law students committed to civil rights, voting rights, or social justice work. Students in our research used this scholarship at Harvard Law while building civil rights credentials.",
        why: "The NAACP LDF is one of the most important civil rights law organizations in American history. This scholarship is both financial support and a professional network that opens doors in public interest law.",
        href: "https://www.naacpldf.org/law-policy/scholarship/",
      },
      {
        name: "UCLA Law Fellows Program",
        open: "Rising college juniors and seniors interested in law school",
        timeline: "Applications typically open in late winter/early spring for summer",
        what: "A competitive summer fellowship at UCLA School of Law that exposes underrepresented students to law school academics, legal research, and T14 admissions processes. Students in our research used this fellowship as part of a credential stack that led to Harvard Law.",
        why: "If you're in Southern California or interested in UCLA Law, this program gives you direct access to law school faculty, a realistic preview of legal education, and a credential that signals commitment.",
        href: "https://law.ucla.edu/admissions/jd-admissions/fellowships",
      },
      {
        name: "BIICL Fellowship (British Institute of International and Comparative Law)",
        open: "Law students and recent graduates with interest in international law",
        timeline: "Varies; check BIICL website for current openings",
        what: "A research fellowship at the British Institute of International and Comparative Law in London. Students in our research completed a BIICL fellowship before Harvard Law — deepening their international law credentials significantly.",
        why: "For students with a niche in international law, trade law, or human rights law, a BIICL fellowship is a rare and distinctive credential that few US law school applicants have.",
        href: "https://www.biicl.org/",
      },
    ],
  },
  {
    tier: "Tier 3 — Pipeline & Support Programs",
    items: [
      {
        name: "Roosevelt House Law Scholars (Hunter College / CUNY)",
        open: "Hunter College students interested in law and public policy",
        timeline: "Apply as an undergrad; program runs throughout your time at Hunter",
        what: "A selective program at Hunter College's Roosevelt House for students interested in law, government, and public policy. Students in our research were Roosevelt House Fellows before Yale Law.",
        why: "If you're at a CUNY school, this is your T14 gateway. Students in our research went from Hunter College to Yale Law School. Roosevelt House built part of the story that made that possible.",
        href: "https://roosevelthouse.hunter.cuny.edu/",
      },
      {
        name: "Marshall-Brennan Constitutional Literacy Project",
        open: "Law students (typically 1Ls and 2Ls) at partner law schools",
        timeline: "Apply at the start of law school",
        what: "Law students teach constitutional law to high school students in under-resourced schools. A deeply meaningful program that connects legal education to civic impact.",
        why: "Teaching constitutional law to high schoolers while you're in law school deepens your own understanding, builds your public service record, and connects you to students who need exactly what you're providing.",
        href: "https://www.marshallbrennan.org/",
      },
      {
        name: "Advantage Testing Foundation LSAT Preparation",
        open: "High-achieving students from underrepresented backgrounds who demonstrate financial need",
        timeline: "Apply before you begin intensive LSAT prep — early in junior year or summer before junior year",
        what: "Free or subsidized professional LSAT tutoring from Advantage Testing, the most respected private LSAT prep firm in the country. Students in our research used this foundation scholarship as part of their path to Harvard Law.",
        why: "Private LSAT tutoring can cost thousands of dollars. This foundation provides the same quality of preparation to students who can't pay for it. A high LSAT score is your biggest equalizer — this program helps you get there.",
        href: "https://atfoundation.org/",
      },
      {
        name: "Faith & Politics Institute John R. Lewis Fellowship",
        open: "College students and recent graduates with interest in civil rights history and moral leadership",
        timeline: "Applications open annually in the fall/winter",
        what: "A fellowship that takes students on a civil rights pilgrimage through the South alongside members of Congress — learning the history of the civil rights movement in the places where it happened.",
        why: "If your legal niche is civil rights, voting rights, or social justice, the John Lewis Fellowship gives you a historical and moral foundation that very few law school applicants have. It is an unusual credential that reveals depth of commitment.",
        href: "https://www.faithandpolitics.org/civil-rights-pilgrimage/",
      },
    ],
  },
];

const fallbacks = [
  { title: "Legal Aid Internships", body: "Philadelphia Legal Assistance, Legal Aid Society of New York, Bay Area Legal Aid, your city's public defender office. These organizations are where future civil rights and public interest lawyers start. Students in our research did Medical-Legal Partnership internships at legal aid organizations before HLS." },
  { title: "Capitol Hill and State Legislature Internships", body: "Interning in a legislative office — Senate, House, or state — shows you understand how law is made, not just argued. Students in our research did Senate Judiciary Committee internships as undergrads. Legislative internships are undervalued as pre-law credentials." },
  { title: "Research Assistant Positions at Law School Clinics", body: "Contact professors in your legal niche and ask to RA for them. Students in our research did research at university centers focused on civil rights and AI law before Harvard Law. A research output — a paper, policy brief, or presentation — is a powerful differentiator." },
  { title: "Pre-Law Society and BLSA at Your School", body: "Your on-campus pre-law community is where pipeline program information flows. BLSA chapters often have direct connections to law school recruiters and scholarship programs. Be active, not passive, in these communities." },
];

export default function LawSchoolProgramsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-10">
        <Link href="/careers/law-school" className="text-xs font-semibold text-[#6B7280] hover:text-[#1E3A5F] transition-colors">← Law School</Link>
        <span className="block text-xs font-semibold uppercase tracking-widest text-[#1E3A5F] mt-4 mb-2">Programs</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          Pipeline Programs.
        </h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-4">
          These programs exist specifically to move underrepresented students into T14 law schools. Every person in our research was connected to at least one. Most students don't know they exist.
        </p>
        <div className="bg-[#EFF6FF] border-l-4 border-[#1E3A5F] p-4 rounded-r-lg">
          <p className="text-sm text-[#374151] leading-relaxed">
            Our data: Harvard Law School admits from Howard University, Morehouse College, and Hunter College (CUNY). Yale Law School admits from Morehouse and Hunter College. The commonalities across every admit: pipeline programs + LSAT prep + legal niche. These programs are a key part of that formula.
          </p>
        </div>
      </div>

      {programs.map((tier) => (
        <section key={tier.tier} className="mb-14">
          <h2 className="text-xl font-bold text-[#0D0D0D] mb-6" style={{ fontFamily: "'Libre Bodoni', serif" }}>{tier.tier}</h2>
          <div className="space-y-5">
            {tier.items.map((prog) => (
              <div key={prog.name} className="border border-[#E5E5E0] rounded-xl bg-white p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-bold text-[#0D0D0D] text-base leading-tight">{prog.name}</h3>
                  <a href={prog.href} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 text-[#1E3A5F] hover:text-[#F4A825] transition-colors">
                    <ExternalLink size={15} />
                  </a>
                </div>
                <div className="space-y-2 mb-3">
                  <p className="text-xs text-[#9CA3AF]"><span className="font-semibold text-[#6B7280]">Who can apply:</span> {prog.open}</p>
                  <p className="text-xs text-[#9CA3AF]"><span className="font-semibold text-[#6B7280]">Timeline:</span> {prog.timeline}</p>
                </div>
                <p className="text-sm text-[#6B6B6B] leading-relaxed mb-2">{prog.what}</p>
                <p className="text-sm text-[#1E3A5F] font-medium leading-relaxed">{prog.why}</p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="mb-12">
        <h2 className="text-xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>If you don't get in — build exposure directly</h2>
        <p className="text-sm text-[#6B6B6B] mb-5">Pipeline programs are competitive. Most applicants don't get in. Here's what to do instead:</p>
        <div className="space-y-3">
          {fallbacks.map((f) => (
            <div key={f.title} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#EFF6FF] flex items-center justify-center text-xs font-bold text-[#1E3A5F]">→</div>
              <div>
                <p className="font-semibold text-[#0D0D0D] text-sm">{f.title}</p>
                <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Link href="/careers/law-school/roadmap" className="inline-flex items-center gap-2 px-5 py-3 bg-[#1E3A5F] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer">
          ← Roadmap
        </Link>
        <Link href="/careers/law-school/clubs" className="inline-flex items-center gap-2 px-5 py-3 border border-[#E5E5E0] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:border-[#1E3A5F] transition-colors cursor-pointer">
          Clubs & Activities <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
