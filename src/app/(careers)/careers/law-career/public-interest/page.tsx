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

function Divider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 my-10">
      <div className="h-px flex-1 bg-[#E2E8F0]" />
      <h2 className="text-xl font-extrabold text-[#1E3A5F] whitespace-nowrap">{label}</h2>
      <div className="h-px flex-1 bg-[#E2E8F0]" />
    </div>
  );
}

const publicInterestPatterns = [
  {
    pattern: "Start from Day 1 — not as a fallback",
    what: "The students choosing public interest at Harvard Law and Yale Law were top students with BigLaw options who made a deliberate choice. They started building this track from their first semester — joining law school clinics in 1L, applying for public interest grants, and targeting civil rights and legal aid internships. Public interest is a track you build toward, not a path you fall into.",
  },
  {
    pattern: "Law school clinics give you real courtroom experience",
    what: "Law school housing, immigration, and criminal defense clinics let students argue real cases before real courts — as students. Students in our research argued before state supreme courts through their law school's housing clinic. This is what clinical legal education offers that no other law school experience can: real cases, real clients, real courts.",
  },
  {
    pattern: "The HBCU → T14 → public interest pipeline is real",
    what: "Multiple students in our research went from HBCUs and CUNY schools to Yale Law and Harvard Law on civil rights and public interest tracks. The path runs through Marshall-Motley Scholars, TRIALS, and pipeline programs that exist specifically to support this journey. The credential and the mission reinforce each other.",
  },
  {
    pattern: "Community-building is part of the work",
    what: "Students in our research co-founded free legal clinics while still in law school — offering civil legal advice on housing, voting rights, employment, and estate planning to under-resourced communities. Public interest law means building institutions and community infrastructure, not just taking individual cases.",
  },
];

const organizations = [
  { name: "ACLU — American Civil Liberties Union", niche: "Constitutional law, free speech, privacy, criminal justice, reproductive rights", note: "Each state has its own chapter. The national ACLU is in NYC. Competitive at senior levels." },
  { name: "NAACP Legal Defense Fund (LDF)", niche: "Civil rights, voting rights, education equity, criminal justice", note: "One of the most historic civil rights law organizations in the US. Alumni are leaders across public interest law." },
  { name: "Equal Justice Initiative (EJI)", niche: "Criminal justice reform, mass incarceration, racial terror", note: "Founded by Bryan Stevenson (Just Mercy). Based in Montgomery, Alabama. Powerful brand and deeply meaningful work." },
  { name: "Southern Coalition for Social Justice (SCSJ)", niche: "Voting rights, criminal justice, immigration in the South", note: "Smaller and more accessible than national organizations. Focus on the South — voting rights, racial equity litigation." },
  { name: "Legal Aid Society (NYC)", niche: "Criminal defense, civil, family, immigration for low-income New Yorkers", note: "The largest legal services provider in NYC. Criminal defense practice is considered elite and competitive." },
  { name: "Public Defenders", niche: "Criminal defense — representing people who can't afford a lawyer", note: "Every county has a public defender's office. SF Public Defender and Legal Aid Society criminal are considered elite. Real trial experience from day one." },
  { name: "Earthjustice", niche: "Environmental law — litigating against polluters", note: "Competitive at entry level. Best for students with an environmental law niche." },
  { name: "Lambda Legal", niche: "LGBTQ+ rights, HIV/AIDS discrimination", note: "" },
  { name: "National Immigrant Justice Center", niche: "Immigration detention, asylum", note: "" },
];

const fellowships = [
  {
    name: "Skadden Fellowship",
    timeline: "Apply September of 3L year",
    what: "2 years of public interest law work, fully funded. ~28–32 fellowships awarded annually from thousands of applicants. Fellows design their own project serving low-income clients or the public interest. Funded by Skadden, Arps, Slate, Meagher & Flom LLP — one of the most elite BigLaw firms in the country.",
    why: "The most prestigious public interest fellowship in law. Skadden Fellows become some of the most respected public interest lawyers in the country. Every T14 law school celebrates its Skadden Fellows. If public interest is your path, this is the credential to target.",
  },
  {
    name: "Equal Justice Works Fellowship",
    timeline: "Apply fall of 3L year",
    what: "60+ fellowships awarded annually — the largest source of post-graduate public interest law fellowships in the US. Fellows address critical legal needs in criminal justice, housing, immigration, veterans' services, and other areas. Available to students from all law schools.",
    why: "Broader than Skadden — more fellowships, somewhat less competitive. A meaningful credential that funds two years of public interest work at nonprofit organizations across the country.",
  },
  {
    name: "Marshall-Motley Scholars Program (NAACP LDF)",
    timeline: "Apply junior/senior year of undergrad or after graduation",
    what: "Full law school tuition + stipend at a T14 school for students committed to civil rights. Scholars have done summers at the Southern Coalition for Social Justice, NAACP LDF, and civil rights organizations across the South. Confirmed in our research with multiple scholars at Yale Law.",
    why: "Full T14 tuition for civil rights lawyers. Directly fund the credential you need for public interest law and erase the financial barrier of law school debt.",
  },
];

const roadmap = [
  { when: "1L fall", what: "Join the Public Interest Law Organization (PILO) — the student-run group that raises money for summer grants. Most law schools have one." },
  { when: "1L winter", what: "Apply for law school's public interest summer grants. Your school may fund you to intern at a nonprofit that summer — even at organizations that don't pay." },
  { when: "1L summer", what: "Intern at legal aid, public defender, ACLU chapter, or civil rights nonprofit. This is the summer that signals your track to law school admissions committees and future employers." },
  { when: "2L fall", what: "Apply for Skadden Fellowship (September deadline), Equal Justice Works, and Marshall-Motley. Join your law school clinic — housing, immigration, civil rights, environmental. Do Law Review." },
  { when: "2L summer", what: "Intern at top public interest organizations — LDF, EJI, ACLU National, major legal aid organizations. This is the most important public interest summer." },
  { when: "3L", what: "Apply for Skadden Fellowship (September deadline). Apply for staff attorney positions. Pursue DOJ Honors Program if government/public interest overlap appeals to you." },
  { when: "After graduation", what: "Fellowship → staff attorney → senior staff attorney → managing attorney → director. Or Skadden/EJW fellowship → independent project → movement leadership." },
];

export default function PublicInterestPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-10">
        <Link href="/careers/law-career" className="text-xs font-semibold text-[#6B7280] hover:text-[#1E3A5F] transition-colors">← Getting a Law Job</Link>
        <span className="block text-xs font-semibold uppercase tracking-widest text-[#1E3A5F] mt-4 mb-2">Public Interest</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          Public Interest Law.
        </h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-4">
          Public defenders, civil rights litigators, legal aid attorneys, and nonprofit advocacy lawyers. The track for people who became lawyers to change specific things in the world — not law in general, but a particular injustice they can name.
        </p>
        <Callout type="warn">
          Public interest is not a fallback. The students choosing this track at Harvard Law and Yale Law were top students with BigLaw options who made a deliberate choice. They started building it from Day 1 — clinics in 1L, public interest organizations, civil rights fellowships. If this is your path, treat it like any other high-stakes career track. Start early.
        </Callout>
      </div>

      <section className="mb-14">
        <h2 className="text-2xl font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>What the data shows</h2>
        <p className="text-sm text-[#6B6B6B] mb-6">Patterns from Black students in law school pursuing public interest tracks.</p>
        <div className="space-y-4">
          {publicInterestPatterns.map((p) => (
            <div key={p.pattern} className="border border-[#E5E5E0] rounded-xl bg-white p-5">
              <p className="font-bold text-[#0D0D0D] text-sm mb-2">{p.pattern}</p>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">{p.what}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider label="Fellowship Programs" />
      <p className="text-sm text-[#6B6B6B] mb-6">Fellowships are how most public interest lawyers fund their first years of work. Apply for these before you graduate.</p>
      <div className="space-y-5 mb-8">
        {fellowships.map((f) => (
          <div key={f.name} className="border border-[#E5E5E0] rounded-xl bg-white p-6">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-[#0D0D0D] text-base">{f.name}</h3>
              <span className="text-[10px] font-semibold text-[#6B7280] bg-[#F3F4F6] px-2 py-0.5 rounded flex-shrink-0">{f.timeline}</span>
            </div>
            <p className="text-sm text-[#6B6B6B] leading-relaxed mb-3">{f.what}</p>
            <p className="text-sm text-[#1E3A5F] font-medium leading-relaxed">{f.why}</p>
          </div>
        ))}
      </div>
      <Callout type="info">
        Public Service Loan Forgiveness (PSLF): Government and 501(c)(3) nonprofit lawyers qualify for PSLF. After 10 years of income-driven loan repayments, remaining federal loans are forgiven. With law school debt often exceeding $200,000 and public interest salaries starting at $50K–$85K, PSLF is what makes this track financially viable for most people.
      </Callout>

      <Divider label="Where to Work" />
      <div className="space-y-3 mb-8">
        {organizations.map((org) => (
          <div key={org.name} className="p-4 border border-[#E5E5E0] rounded-lg bg-white">
            <div className="flex items-start justify-between gap-3 mb-1">
              <p className="font-semibold text-[#0D0D0D] text-sm">{org.name}</p>
            </div>
            <p className="text-xs text-[#6B6B6B] mb-1"><span className="font-semibold text-[#374151]">Focus:</span> {org.niche}</p>
            {org.note && <p className="text-xs text-[#9CA3AF] italic">{org.note}</p>}
          </div>
        ))}
      </div>

      <Divider label="The Law School to Public Interest Roadmap" />
      <div className="space-y-2 mb-12">
        {roadmap.map((row) => (
          <div key={row.when} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
            <span className="text-xs font-semibold text-[#1E3A5F] w-24 flex-shrink-0 mt-0.5">{row.when}</span>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">{row.what}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/careers/law-career/government" className="inline-flex items-center gap-2 px-5 py-3 bg-[#1E3A5F] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer">
          ← Government
        </Link>
        <Link href="/careers/law-career/in-house" className="inline-flex items-center gap-2 px-5 py-3 border border-[#E5E5E0] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:border-[#1E3A5F] transition-colors cursor-pointer">
          In-House <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
