import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";

function Callout({ type, children }: { type: "info" | "warn"; children: React.ReactNode }) {
  const s = {
    info: { cls: "bg-[#EFF6FF] border-[#1E3A5F]", Icon: CheckCircle2, color: "text-[#1E3A5F]" },
    warn: { cls: "bg-[#FFFBEB] border-[#D97706]", Icon: AlertTriangle, color: "text-[#D97706]" },
  }[type];
  return (
    <div className={`${s.cls} border-l-4 p-4 rounded-r-lg flex gap-3 my-6`}>
      <s.Icon size={15} className={`${s.color} flex-shrink-0 mt-0.5`} />
      <p className="text-sm leading-relaxed text-[#374151]">{children}</p>
    </div>
  );
}

const tier1 = [
  {
    name: "Mock Trial",
    when: "Start freshman year, compete through senior year",
    what: "Teams simulate real courtroom trials — opening statements, witness examination, objections, closing arguments. Competitive teams compete regionally and nationally.",
    why: "Mock trial is the #1 most cited pre-law activity in our entire dataset — cited by Harvard Law graduates as the activity that first introduced them to law. Join immediately, compete seriously, and consider coaching or founding a team if yours doesn't exist.",
    signal: "Very High — shows oral argument ability, analytical thinking, and years of commitment",
  },
  {
    name: "BLSA — Black Law Students Association",
    when: "Join freshman year and take leadership roles by junior year",
    what: "On-campus organization with connections to law school BLSA chapters, civil rights law organizations, scholarship programs, and mentorship networks. National BLSA has direct pipelines to law school admissions.",
    why: "BLSA is where information flows. Scholarship deadlines, pipeline program tips, law school recruiter visits — your BLSA chapter knows before anyone else. Being active in BLSA (not just a member) makes you visible to the people who can help you.",
    signal: "High — leadership especially. Shows commitment to the community you'll serve as a lawyer.",
  },
  {
    name: "Pre-Law Society",
    when: "Join freshman year; take on programming or leadership roles by sophomore year",
    what: "Campus organization that hosts LSAT workshops, law school alumni panels, application strategy sessions, and pipeline program information events.",
    why: "Pre-Law Society is your information hub. Attend the panels, participate in LSAT prep sessions, and build relationships with upperclassmen who are applying. The alumni connections alone can produce recommendation letters and internship leads.",
    signal: "Medium-High — shows sustained commitment to the pre-law path.",
  },
  {
    name: "Debate Team / Competitive Debate",
    when: "Join freshman year if available; competitive seasons run fall and spring",
    what: "Policy debate, Lincoln-Douglas, or parliamentary debate. Teams research, construct arguments, and compete against other schools. Requires rapid evidence analysis and oral argumentation under pressure.",
    why: "Debate teaches the same skills the LSAT tests and law school demands: logical reasoning, evidence analysis, argument construction, and articulate delivery under pressure. Many top law students were competitive debaters.",
    signal: "High — especially combined with mock trial. Shows argument skills are a genuine part of your identity.",
  },
];

const tier2 = [
  {
    name: "Undergraduate Legal Research Assistant",
    what: "Contact professors in your legal niche and ask to research for them. Find a professor whose work intersects with your interest — civil rights law, health law, immigration, tech law — and email them directly.",
    why: "Students in our research did research at university centers focused on civil rights and AI law before Harvard Law. Undergraduate research with a tangible output — a paper, conference presentation, policy brief — is the most underused differentiator in pre-law applications.",
    how: "Email the professor: 'I'm a [year] majoring in [X], deeply interested in [your niche], and I would be grateful for the opportunity to assist your research on [their specific project]. I've read your paper [title] and believe I could contribute meaningfully.' Attach your transcript and a writing sample.",
  },
  {
    name: "Student Government or Class Leadership",
    what: "Run for student body office, class representative, or advocacy committee positions. Engage with university policy, student conduct procedures, or administrative reform.",
    why: "Student government shows you understand institutional power structures — how rules are made, challenged, and enforced. For students interested in policy law, this is highly relevant. Students in our research held student government roles at their undergrad institutions before HLS.",
    how: "Run for an office you actually care about. Pursue a policy reform or advocacy campaign through it. A governance win is more compelling than a title.",
  },
  {
    name: "NAACP Campus Chapter",
    what: "Civil rights advocacy, voter registration, policy campaigns, and community organizing through the oldest civil rights organization in the country.",
    why: "The NAACP is the national network behind voting rights law, civil rights litigation, and community advocacy. Being active in your campus chapter — not just a member — signals your legal niche authentically and connects you to lawyers who do civil rights work.",
    how: "Join and show up. Take on a voter registration drive, a campus policy campaign, or a legal education event. Build something measurable.",
  },
  {
    name: "Legal Aid Clinic Volunteer",
    what: "Many colleges and law schools operate legal aid clinics where undergrads can volunteer — assisting clients, translating, doing intake paperwork, or researching legal questions.",
    why: "Real legal exposure — at a real legal aid clinic — is among the most valuable pre-law credentials you can build. Students in our research did Medical-Legal Partnership internships at legal aid organizations that became defining experiences on their HLS applications.",
    how: "Search '[your city] legal aid volunteer' or ask your Pre-Law Society advisor. If your law school has a clinic, contact them directly. Even two semesters of consistent volunteer work is a meaningful line on your application.",
  },
  {
    name: "Model UN",
    what: "Model United Nations conferences simulate international diplomacy. Delegates represent countries, write resolutions, debate, and negotiate international agreements.",
    why: "For students interested in international law, human rights law, or immigration law, Model UN builds the policy vocabulary and international perspective that makes T14 applications stand out. The Luce Scholar profile connects directly to international engagement.",
    how: "Most large universities have Model UN clubs. Attend conferences, advance to conference leadership (chair, secretary-general), and connect your Model UN experience explicitly to your international law niche in your personal statement.",
  },
];

const avoid = [
  { title: "Joining every club as a line item.", body: "A list of 15 clubs with no leadership or depth signals a resume-padder, not a future lawyer. Two or three activities done seriously — mock trial for four years, BLSA president, meaningful research — are far more compelling than a 15-line activities list." },
  { title: "Pre-law activities without legal exposure.", body: "Mock trial and debate are valuable precisely because they practice legal skills. Being in a general business club or social organization isn't a pre-law credential — it's background. Stack activities that directly connect to how law is practiced." },
  { title: "Waiting until junior year to join.", body: "Mock trial, BLSA, and Pre-Law Society take time to build within. Leadership positions open up because you were there from the beginning. Start freshman year. Three to four years of continuity reads very differently than a junior year scramble." },
  { title: "Treating research as an optional add-on.", body: "T14 law schools are academic institutions. They value students who have engaged seriously with legal ideas — not just done things that look impressive. An undergraduate research project, even a small one, signals intellectual depth that most applicants don't have." },
];

export default function LawSchoolClubsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-10">
        <Link href="/careers/law-school" className="text-xs font-semibold text-[#6B7280] hover:text-[#1E3A5F] transition-colors">← Law School</Link>
        <span className="block text-xs font-semibold uppercase tracking-widest text-[#1E3A5F] mt-4 mb-2">Clubs & Activities</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          Clubs & Activities.
        </h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-4">
          The activities that actually show up on T14 law school applicant profiles — and what makes them matter.
        </p>
        <Callout type="info">
          The data pattern from Harvard Law, Yale Law, and Columbia Law admits: mock trial started in high school or freshman year, BLSA or Pre-Law Society with leadership, and real legal exposure through research or clinical work. These are not side activities — they are the core of a compelling pre-law application.
        </Callout>
      </div>

      <section className="mb-14">
        <h2 className="text-xl font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>Tier 1 — Start Immediately, Do for 4 Years</h2>
        <p className="text-sm text-[#6B6B6B] mb-6">These are the activities that define a pre-law application. Start freshman year. Build depth and leadership.</p>
        <div className="space-y-4">
          {tier1.map((item) => (
            <div key={item.name} className="border border-[#E5E5E0] rounded-xl bg-white p-5">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-bold text-[#0D0D0D] text-base">{item.name}</h3>
                <span className="text-[10px] font-semibold text-[#1E3A5F] bg-[#EFF6FF] px-2 py-0.5 rounded-full flex-shrink-0">Signal: {item.signal.split("—")[0].trim()}</span>
              </div>
              <p className="text-xs text-[#9CA3AF] mb-2"><span className="font-semibold text-[#6B7280]">When:</span> {item.when}</p>
              <p className="text-sm text-[#6B6B6B] leading-relaxed mb-2">{item.what}</p>
              <p className="text-sm text-[#1E3A5F] font-medium leading-relaxed">{item.why}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <h2 className="text-xl font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>Tier 2 — Build Into Your Application</h2>
        <p className="text-sm text-[#6B6B6B] mb-6">These activities deepen your application when combined with Tier 1. Focus on one or two that connect directly to your legal niche.</p>
        <div className="space-y-4">
          {tier2.map((item) => (
            <div key={item.name} className="border border-[#E5E5E0] rounded-xl bg-white p-5">
              <h3 className="font-bold text-[#0D0D0D] text-base mb-2">{item.name}</h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed mb-2">{item.what}</p>
              <p className="text-sm text-[#1E3A5F] font-medium leading-relaxed mb-2">{item.why}</p>
              <div className="bg-[#FAFAF7] border border-[#E5E5E0] rounded-lg p-3">
                <p className="text-xs font-semibold text-[#6B7280] mb-1">How to get started:</p>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">{item.how}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>What to Avoid</h2>
        <div className="space-y-3">
          {avoid.map((item) => (
            <div key={item.title} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#FEF2F2] flex items-center justify-center">
                <AlertTriangle size={13} className="text-[#DC2626]" />
              </div>
              <div>
                <p className="font-semibold text-[#0D0D0D] text-sm">{item.title}</p>
                <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <Link href="/careers/law-school/programs" className="inline-flex items-center gap-2 px-5 py-3 bg-[#1E3A5F] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer">
          ← Pipeline Programs
        </Link>
        <Link href="/careers/law-school/lsat" className="inline-flex items-center gap-2 px-5 py-3 border border-[#E5E5E0] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:border-[#1E3A5F] transition-colors cursor-pointer">
          LSAT Prep Guide <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
