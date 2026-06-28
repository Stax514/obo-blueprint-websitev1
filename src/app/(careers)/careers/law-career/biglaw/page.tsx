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

function Step({ num, label, children }: { num: number; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1E3A5F] flex items-center justify-center text-xs font-bold text-white">{num}</div>
      <div>
        <p className="font-semibold text-[#0D0D0D] text-sm">{label}</p>
        <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

const practices = [
  { name: "M&A (Mergers & Acquisitions)", desc: "Represent buyers and sellers in corporate transactions — due diligence, deal documents, negotiations, closings. The heaviest hours in BigLaw, but the most deal exposure." },
  { name: "Capital Markets", desc: "Take companies public (IPOs), structure debt offerings, work with investment banks on securities issuances. Highly technical, finance-law overlap." },
  { name: "Private Equity", desc: "Represent PE funds buying and selling portfolio companies. Heavy overlap with M&A. Clients are sophisticated — expect to work at their pace." },
  { name: "Litigation", desc: "Represent companies in court — depositions, motions, trial prep, sometimes actual trials. More variety than transactional work. Long timelines." },
  { name: "White Collar", desc: "Criminal defense for corporations and executives — SEC investigations, DOJ enforcement, fraud cases. High-stakes, high-pressure, often involves parallel criminal and civil proceedings." },
  { name: "Intellectual Property", desc: "Patent litigation, trademark disputes, licensing agreements. Tech and pharma firms use this heavily. Science or engineering background is a plus for patent work." },
  { name: "Employment", desc: "Represent employers in discrimination lawsuits, union negotiations, wrongful termination. More predictable than M&A or litigation — good for people who want regular hours inside BigLaw." },
  { name: "Real Estate", desc: "Commercial property transactions, financing, development deals. Transactional in nature — closings, contracts, lending agreements." },
];

const ociSteps = [
  { label: "Before 2L year — August", body: "Submit OCI applications through your law school's recruiting portal: resume, cover letter, transcript, writing sample. This deadline hits before 2L classes start. If you're going BigLaw, have everything ready before you leave for your 2L summer." },
  { label: "2L week 3–4 — OCI week", body: "20-minute screening interviews with BigLaw recruiters on campus. This is the single most important recruiting moment of law school. Be prepared with your firm-specific interest, practice group preference, and a clear answer on why you're choosing corporate law." },
  { label: "September–October — Callbacks", body: "Top candidates are invited to full-day callback interviews at the firm's offices — 5–8 rounds of 30-minute interviews with partners and senior associates. Callbacks are about personality, communication, and fit more than legal knowledge." },
  { label: "October–November — Offers", body: "Firms extend 2L summer associate offers. You have until offer deadline to decide. Consider: practice area, city, firm culture, and where you want to be in 5 years." },
  { label: "2L Summer — Summer Associate Program", body: "10–12 weeks at the firm. Attend client meetings, work on real matters, attend social events. Virtually everyone who performs gets a return offer. Your goal is to get that offer." },
  { label: "After Graduation — First-Year Associate", body: "You join as a first-year associate. Choose your practice group (usually confirmed before starting). The learning curve is steep and the hours are real — but so is the paycheck and the skill-building." },
];

const associateTrack = [
  { years: "Year 1–2", title: "Junior Associate", pay: "$215K–$235K", what: "Legal research, document review, learning the work, building client relationships under supervision" },
  { years: "Year 3–4", title: "Mid-level Associate", pay: "$270K–$365K", what: "Running deals and cases, managing junior associates, more direct client contact" },
  { years: "Year 5–7", title: "Senior Associate", pay: "$390K–$435K", what: "Leading matters, originating business, up-or-out pressure begins" },
  { years: "Year 8+", title: "Partner (if made)", pay: "$1M–$5M+", what: "Equity owner, business development, mentoring — the destination for ~5–10% of associates" },
  { years: "Year 3–7", title: "Exit to In-House", pay: "$200K–$500K+", what: "The path most associates take — to corporate in-house roles at companies they worked with as BigLaw lawyers" },
];

const lookFor = [
  { label: "Law Review membership", body: "Top 1L grades earn a Law Review spot through write-on competition. Law Review is the single strongest BigLaw signal — it tells firms you can write, edit, and produce under deadline." },
  { label: "GPA — top 10–25% at T14, top 5–10% at non-T14", body: "BigLaw firms screen by grade rank before OCI. Students from non-T14 schools in our research landed at elite firms like Sullivan & Cromwell — summa cum laude and Law Review. The bar is higher at non-T14 schools, but the door is open." },
  { label: "Practice group fit", body: "Walk into every OCI and callback with a real answer on which practice group you want and why. Generic 'I want to do corporate law' answers don't land. 'I want to work on cross-border M&A because...' does." },
  { label: "Communication and presence", body: "Callbacks are about personality and fit as much as credentials. BigLaw partners are choosing someone they'll work with at 11pm during a deal closing. Be sharp, be genuine, and show you've done your homework on the firm." },
  { label: "1L diversity programs", body: "A small number of elite firms (Cravath, Sullivan & Cromwell, Davis Polk) run 1L Scholar programs for diverse candidates. Extremely competitive — but if you get one, it gives you a full-cycle summer associate experience a year early and a likely return offer into 2L OCI." },
];

const avoid = [
  { title: "Waiting until 2L to start thinking about OCI.", body: "OCI applications are due in August — before 2L classes start. If you realize this in September of 2L year, you've already missed the window. Start preparing in 1L spring." },
  { title: "Applying to every firm without a practice group preference.", body: "Firms ask which group you want. 'I'm open to anything' is a red flag — it signals you haven't thought seriously about the work. Pick one or two practice areas, research them, and make a real case for why." },
  { title: "Treating the summer associate program as a job.", body: "The 2L summer associate program is a 10-week audition for a full-time offer. Firms are evaluating whether they want to work with you for years. Be enthusiastic, be proactive, produce excellent work, and be pleasant to be around." },
  { title: "Assuming you need a T14 to get BigLaw.", body: "Students in our research landed at elite firms like Sullivan & Cromwell from non-T14 schools. The path is narrower but real — you need top grades, Law Review, and a compelling interview. Don't count yourself out based on school name." },
];

export default function BigLawPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-10">
        <Link href="/careers/law-career" className="text-xs font-semibold text-[#6B7280] hover:text-[#1E3A5F] transition-colors">← Getting a Law Job</Link>
        <span className="block text-xs font-semibold uppercase tracking-widest text-[#1E3A5F] mt-4 mb-2">BigLaw</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          BigLaw.
        </h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-4">
          The 100 largest law firms in the US — Cravath, Skadden, Sullivan & Cromwell, Latham, Kirkland & Ellis, Davis Polk. The highest starting salary in law. The most demanding hours in law. And the credential that opens every other door.
        </p>
        <Callout type="warn">
          BigLaw associates work 2,000–2,200+ billable hours per year. To hit 2,000 billable hours, you work roughly 2,500–2,800 actual hours — approximately 50–55 hours per week, with spikes during deal closings that hit 80+. The pay is real. So are the hours. Go in knowing both.
        </Callout>
      </div>

      <section className="mb-14">
        <h2 className="text-2xl font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>What BigLaw lawyers actually do</h2>
        <p className="text-sm text-[#6B6B6B] mb-6">BigLaw work is highly specialized. Associates pick a practice group and stay in it. Here are the main groups and what the work actually looks like.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {practices.map((p) => (
            <div key={p.name} className="flex gap-3 p-4 border border-[#E5E5E0] rounded-xl bg-white">
              <CheckCircle2 size={14} className="text-[#1E3A5F] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#0D0D0D] text-sm">{p.name}</p>
                <p className="text-xs text-[#6B6B6B] mt-0.5 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider label="The OCI System — How BigLaw Hiring Works" />
      <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">BigLaw has a structured recruiting system unlike any other job market. OCI (On-Campus Interviews) is the primary funnel for associate hiring — and it happens on a timeline most incoming law students don't know about until it's too late.</p>
      <div className="space-y-3 mb-8">
        {ociSteps.map((s, i) => (
          <Step key={i} num={i + 1} label={s.label}>{s.body}</Step>
        ))}
      </div>
      <Callout type="info">
        The standard BigLaw pipeline: OCI offer → 2L summer associate → full-time offer → first-year associate. Our research confirmed this pattern repeatedly. Students from non-T14 schools who earned top grades and made Law Review were successfully recruited by elite BigLaw firms through OCI.
      </Callout>

      <Divider label="What BigLaw Looks For" />
      <div className="space-y-3 mb-8">
        {lookFor.map((item, i) => (
          <div key={i} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#EFF6FF] flex items-center justify-center text-xs font-bold text-[#1E3A5F]">{i + 1}</div>
            <div>
              <p className="font-semibold text-[#0D0D0D] text-sm">{item.label}</p>
              <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{item.body}</p>
            </div>
          </div>
        ))}
      </div>

      <Divider label="The Associate Career Track" />
      <div className="space-y-2 mb-10">
        {associateTrack.map((row) => (
          <div key={row.title} className="flex gap-3 p-4 border border-[#E5E5E0] rounded-lg bg-white flex-wrap">
            <span className="text-xs font-semibold text-[#1E3A5F] w-20 flex-shrink-0 mt-0.5">{row.years}</span>
            <span className="text-sm font-semibold text-[#0D0D0D] w-36 flex-shrink-0">{row.title}</span>
            <span className="text-xs text-[#9CA3AF] w-28 flex-shrink-0 mt-0.5">{row.pay}</span>
            <span className="text-sm text-[#6B6B6B] flex-1">{row.what}</span>
          </div>
        ))}
      </div>
      <Callout type="info">
        Most associates leave BigLaw within 5 years — not because they failed, but because they achieved what they came for (pay off loans, build skills, gain the credential) and move on to in-house roles, government, or their own practice. BigLaw is a launching pad, not a life sentence.
      </Callout>

      <Divider label="What to Avoid" />
      <div className="space-y-3 mb-12">
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

      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/careers/law-career" className="inline-flex items-center gap-2 px-5 py-3 bg-[#1E3A5F] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer">
          ← The 5 Paths
        </Link>
        <Link href="/careers/law-career/clerkships" className="inline-flex items-center gap-2 px-5 py-3 border border-[#E5E5E0] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:border-[#1E3A5F] transition-colors cursor-pointer">
          Clerkships <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
