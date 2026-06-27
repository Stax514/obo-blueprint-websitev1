import Link from "next/link";
import { ArrowRight } from "lucide-react";

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-bold text-[#0D0D0D] mt-10 mb-3" style={{ fontFamily: "'Libre Bodoni', serif" }}>
      {children}
    </h2>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[#374151] text-sm leading-relaxed mb-4">{children}</p>;
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-4 border-[#F4A825] bg-[#FDF8EC] px-4 py-3 rounded-r-lg my-4">
      <p className="text-sm text-[#374151] leading-relaxed">{children}</p>
    </div>
  );
}

const programs = [
  {
    name: "Google STEP Internship",
    when: "Apply Aug–Oct • Freshman & Sophomore",
    who: "Underrepresented students in CS",
    what: "Google's flagship early diversity internship for freshmen and sophomores. Real SWE work, full pay, mentorship from Google engineers. Multiple engineers now at Google full-time got their start through STEP. This is the highest-leverage program on this list.",
    link: "https://buildyourfuture.withgoogle.com/programs/step",
  },
  {
    name: "Microsoft New Technologist Intern",
    when: "Apply Aug–Nov • Freshman",
    who: "Underrepresented students in their first year of college",
    what: "Microsoft's early diversity internship specifically for freshmen. Combines SWE and PM experience. Direct pipeline into Microsoft's broader internship and recruiting funnel.",
    link: "https://careers.microsoft.com/students/us/en/us-new-technologist-program",
  },
  {
    name: "Microsoft Explore Program",
    when: "Apply Aug–Nov • Sophomore",
    who: "Underrepresented students in their second year",
    what: "Microsoft's sophomore program that rotates between SWE and PM. Full-time paid summer internship. One of the most structured early programs in tech.",
    link: "https://careers.microsoft.com/students/us/en/us-exploreprogram",
  },
  {
    name: "Meta University Internship",
    when: "Apply Sep–Dec • Freshman & Sophomore",
    who: "Underrepresented students in 1st or 2nd year",
    what: "Meta's early career program for underrepresented students. Real engineering work in Meta's codebase with structured mentorship. Direct pipeline to Meta SWE internship junior year.",
    link: "https://www.metacareers.com/careerprograms/students",
  },
  {
    name: "Amazon Propel / Amazon Future Engineer",
    when: "Apply Sep–Jan • Freshman & Sophomore",
    who: "Underrepresented STEM students",
    what: "Amazon's early diversity program for CS students. Provides internship experience, mentorship, and access to Amazon's broader recruiting pipeline.",
    link: "https://www.amazonfutureengineer.com",
  },
  {
    name: "MLH Fellowship",
    when: "Apply rolling • Any year",
    who: "Open to all students",
    what: "A remote 12-week fellowship where you contribute to real open source projects under mentorship from senior engineers. Treated like an internship on your resume. Excellent fallback if you can't land a company internship.",
    link: "https://fellowship.mlh.io",
  },
  {
    name: "NSF REU (Research Experience for Undergraduates)",
    when: "Apply Jan–Mar • Any year",
    who: "US citizens and permanent residents",
    what: "Federally funded summer research at a university. Paid. Produces real research output. Highly respected by graduate schools and — increasingly — by tech companies hiring for ML and AI roles.",
    link: "https://www.nsf.gov/crssprgm/reu",
  },
];

const competitions = [
  {
    name: "ICPC (International Collegiate Programming Contest)",
    what: "The most prestigious competitive programming contest in the world. Placing at regionals or advancing to the World Finals is a significant signal for competitive engineering roles at Google and Meta.",
  },
  {
    name: "Google Code Jam / Kick Start",
    what: "Google's own competitive programming competition. Winners get fast-tracked in Google recruiting. Even placing well on Code Jam is a visible credential.",
  },
  {
    name: "Meta Hacker Cup",
    what: "Meta's equivalent of Code Jam. Same principle — strong performance signals directly to Meta recruiting.",
  },
  {
    name: "Hackathons (HackMIT, TreeHacks, HackHarvard, local events)",
    what: "Weekend events where you build a project in 24–48 hours. The project goes on your resume. The network you build is real. Sponsors at major hackathons are actively recruiting participants.",
  },
];

export default function SWEProgramsPage() {
  return (
    <>
      <section className="bg-[#F4A825] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/careers/software-engineering" className="inline-flex items-center gap-1.5 text-sm text-[#0D0D0D]/60 hover:text-[#0D0D0D] transition-colors mb-6 cursor-pointer">
            ← Software Engineering
          </Link>
          <p className="text-[#0D0D0D]/60 text-xs font-semibold uppercase tracking-widest mb-4">Key Programs</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0D0D0D] leading-[1.05] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
            Diversity & Early Programs.
          </h1>
          <p className="text-[#0D0D0D]/70 text-base leading-relaxed max-w-xl">
            The programs built for freshmen and sophomores that open doors most students don't know exist.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        <Note>
          These programs exist specifically because the standard recruiting pipeline doesn't reach everyone equally. They are not easier versions of the real thing — they are real internships with real pay and real pipelines. Apply to all of them. Multiple engineers now at Google, Meta, and Microsoft got their start this way.
        </Note>

        <H2>Early Internship Programs</H2>
        <P>Apply to these in August and September of freshman year. Don't wait until you feel ready. Apply now.</P>

        <div className="space-y-5 mt-6">
          {programs.map((p) => (
            <div key={p.name} className="border border-[#E5E5E0] rounded-2xl p-6 bg-white">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-base font-bold text-[#0D0D0D]" style={{ fontFamily: "'Libre Bodoni', serif" }}>{p.name}</h3>
                  <div className="flex flex-wrap gap-2 mt-1.5">
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-[#1A1A2E] bg-[#EEF2FF] px-2 py-0.5 rounded-full">{p.when}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-[#1B4332] bg-[#D1FAE5] px-2 py-0.5 rounded-full">{p.who}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">{p.what}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1A1A2E] hover:text-[#F4A825] transition-colors"
              >
                Learn more & apply <ArrowRight size={12} />
              </a>
            </div>
          ))}
        </div>

        <H2>Competitions Worth Entering</H2>
        <P>Competitive programming competitions don't just build skills — they produce visible credentials that top companies actively look for.</P>

        <div className="space-y-4 mt-4">
          {competitions.map((c) => (
            <div key={c.name} className="border border-[#E5E5E0] rounded-xl p-5 bg-white">
              <p className="text-sm font-semibold text-[#0D0D0D] mb-1.5">{c.name}</p>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">{c.what}</p>
            </div>
          ))}
        </div>

        <H2>When you can't get the internship you want.</H2>
        <P>Internship recruiting is competitive and sometimes a summer doesn't come together. Here's what to do instead:</P>
        <ul className="list-disc list-inside space-y-2 text-sm text-[#374151] mb-6 ml-2">
          <li><strong>Build a real project.</strong> A polished GitHub project that solves a real problem is worth more than a mediocre internship. Build something with a public URL that you can demo.</li>
          <li><strong>Contribute to open source.</strong> Find a real project on GitHub with 1,000+ stars and submit a pull request that gets merged. This shows you can work in a production codebase.</li>
          <li><strong>Apply to MLH Fellowship.</strong> Major League Hacking runs a remote fellowship where you contribute to open source under mentorship. Treated like an internship on your resume.</li>
          <li><strong>Apply to NSF REU.</strong> Paid summer research at a university. Google and other companies specifically value students who've done research.</li>
          <li><strong>Do freelance work.</strong> Build websites or apps for local businesses or on Upwork. Real clients, real money, real deadlines.</li>
          <li><strong>Use the time for LeetCode.</strong> Use the summer to get very good at algorithms. This directly improves your chances in technical interviews the following year.</li>
        </ul>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link
            href="/careers/software-engineering/roadmap"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#1A1A2E] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer"
          >
            ← Back to Roadmap <ArrowRight size={14} />
          </Link>
          <Link
            href="/careers/software-engineering/clubs"
            className="inline-flex items-center gap-2 px-5 py-3 border border-[#E5E5E0] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:border-[#1A1A2E] transition-colors cursor-pointer"
          >
            Clubs & Activities <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
