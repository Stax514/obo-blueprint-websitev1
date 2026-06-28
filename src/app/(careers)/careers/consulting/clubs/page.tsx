import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";

function Callout({ type, children }: { type: "info" | "warn"; children: React.ReactNode }) {
  const s = {
    info: { cls: "bg-[#F0FDF4] border-[#1B4332]", Icon: CheckCircle2, color: "text-[#1B4332]" },
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
      <h2 className="text-xl font-extrabold text-[#1B4332] whitespace-nowrap">{label}</h2>
      <div className="h-px flex-1 bg-[#E2E8F0]" />
    </div>
  );
}

const clubs = [
  {
    tier: "Tier 1 — Essential",
    color: "text-[#1B4332] bg-[#D1FAE5]",
    items: [
      { name: "Consulting Club", desc: "The single most important club for aspiring consultants. Join in the first week of school. The trajectory from analyst to president over 3–4 years is what MBB wants to see on your resume. BU Consulting Group, Duke Impact Investing Group, Stanford Consulting Club — the name varies but the pattern is universal." },
      { name: "Case Competition Team", desc: "Many consulting clubs field teams for external case competitions. If yours does, apply to compete as early as sophomore year. Winning a national competition is a verifiable credential that works regardless of your school's brand." },
      { name: "Student Government", desc: "Student government leadership appeared repeatedly across MBB profiles — Duke Student Government, Darden Student Association President. It signals cross-functional coordination, stakeholder management, and leadership without authority — all core consulting skills." },
      { name: "Identity & Community Organizations (NSBE, Black Business Student Association, etc.)", desc: "These organizations appeared consistently across profiles and often connect directly to MBB diversity recruiting events. NSBE, Black Business Student Association, Engineers Without Borders — the specific org matters less than the leadership role and the community." },
    ],
  },
  {
    tier: "Tier 2 — High Value",
    color: "text-[#1A1A2E] bg-[#EEF2FF]",
    items: [
      { name: "Impact Investing / Finance Club", desc: "Duke Impact Investing Group appeared on two McKinsey profiles. Finance and investment clubs build quantitative fluency and signal business acumen — both valued in consulting recruiting." },
      { name: "Entrepreneurship Club", desc: "Shows initiative and problem-solving orientation. Especially valuable if you can point to a project that went from idea to execution." },
      { name: "International / Global Affairs Organizations", desc: "International experience and global perspective appeared more on consulting profiles than SWE profiles. Model UN, international policy clubs, and globally-focused organizations align with consulting's emphasis on breadth." },
      { name: "Fellowship Programs (Robertson Scholars, Gates Scholarship, Aga Khan Foundation)", desc: "Competitive national fellowships appeared multiple times in MBB profiles. They signal academic distinction and often provide international or social-sector experience that differentiates consulting candidates." },
    ],
  },
  {
    tier: "Tier 3 — Supplemental",
    color: "text-[#6B6B6B] bg-[#F5F5F0]",
    items: [
      { name: "TA / Course Assistant", desc: "Kelly Shao TAed 4 different courses at BU before her BCG offer. TA experience signals deep understanding, communication ability, and relationship-building with faculty. It shows up consistently across both consulting and SWE profiles." },
      { name: "Honor Societies (Phi Beta Kappa, Beta Gamma Sigma)", desc: "Academic achievement recognition. Worth joining if you qualify. Not a substitute for other signals but adds to an already strong record." },
    ],
  },
];

const experiences = [
  { signal: "High", title: "Consulting club leadership (VP or President)", desc: "The arc from analyst to leadership over 2–3 years is the gold standard. It shows commitment, progression, and the ability to lead a team — all core consulting signals." },
  { signal: "High", title: "Case competition win (especially national or diversity-focused)", desc: "A verifiable, school-agnostic credential. Winning a national competition as a student from a non-target school is one of the strongest differentiators in consulting recruiting." },
  { signal: "High", title: "Sophomore diversity program (BEL, McKinsey Early Insight, Deloitte Discovery)", desc: "A documented pipeline to MBB. Three of the four non-target school MBB consultants in our research used a diversity program as their entry point." },
  { signal: "High", title: "Internship with structured problem-solving (consulting, finance, operations, policy)", desc: "Any role where you're analyzing data and making recommendations. The key is being able to articulate the consulting skills you built — framework, hypothesis, recommendation." },
  { signal: "High", title: "International or social-sector experience", desc: "More valued in consulting than in SWE. Working abroad, research on social issues, nonprofit consulting, or government work appeared on multiple McKinsey profiles. It signals breadth and perspective." },
  { signal: "Medium", title: "Research (especially with a thesis or publication)", desc: "Bella Vandenberg's Vietnam labor research led directly to her honors thesis and differentiated her Bain application. Research that produces a tangible output — a thesis, a paper, a policy brief — is a real signal." },
  { signal: "Medium", title: "Founding something (club, project, initiative)", desc: "Multiple profiles show founding a club or initiative in high school or college. Initiative and entrepreneurial drive are explicitly tested in McKinsey's PEI." },
];

export default function ConsultingClubsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-10">
        <Link href="/careers/consulting" className="text-xs font-semibold text-[#6B7280] hover:text-[#1B4332] transition-colors">← Consulting</Link>
        <span className="block text-xs font-semibold uppercase tracking-widest text-[#0D0D0D] mt-4 mb-2">Clubs & Activities</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          What to Join and Build.
        </h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
          The clubs, credentials, and experiences that show up on the profiles of consultants at McKinsey, BCG, and Bain.
        </p>
        <Callout type="info">
          The consulting club pattern is near-universal. Kelly Shao spent 3 years in BU Consulting Group — analyst to President — before her BCG offer. Shrey and Emilio both listed Duke Impact Investing Group. Alahji listed Stanford Consulting Club. Join early and rise.
        </Callout>
      </div>

      <Divider label="Recommended Major" />
      <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
        Consulting majors are more diverse than most people assume. Public Policy + CS, Engineering, Economics + Astrophysics, Industrial & Labor Relations, and Marketing + Information Systems all appear across MBB profiles.
      </p>
      <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
        The common thread is not the major — it's <strong className="text-[#0D0D0D]">quantitative aptitude and structured thinking</strong>. If you can work with numbers and break down problems clearly, your major is secondary to your other signals.
      </p>
      <Callout type="warn">
        Pure arts or humanities majors without a quantitative component did not appear in our research. If your major is non-quantitative, supplement it with economics courses, data analytics, or a minor that demonstrates analytical ability.
      </Callout>

      <Divider label="Clubs — What to Join" />
      <div className="space-y-8">
        {clubs.map((tier) => (
          <div key={tier.tier}>
            <span className={`inline-block text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full mb-4 ${tier.color}`}>{tier.tier}</span>
            <div className="space-y-3">
              {tier.items.map((item) => (
                <div key={item.name} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
                  <CheckCircle2 size={15} className="text-[#1B4332] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0D0D0D] text-sm">{item.name}</p>
                    <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Divider label="Experiences & Credentials — What to Build" />
      <p className="text-sm text-[#6B6B6B] mb-6">Beyond clubs, these are the experiences that appeared most consistently across MBB profiles.</p>
      <div className="space-y-3">
        {experiences.map((e) => (
          <div key={e.title} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
            <span className={`flex-shrink-0 text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full h-fit mt-0.5 ${
              e.signal === "High" ? "text-[#1B4332] bg-[#D1FAE5]" : "text-[#6B6B6B] bg-[#F5F5F0]"
            }`}>
              {e.signal}
            </span>
            <div>
              <p className="font-semibold text-[#0D0D0D] text-sm">{e.title}</p>
              <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{e.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Divider label="What to Avoid" />
      <div className="space-y-3">
        {[
          { title: "Joining consulting clubs without rising to leadership.", body: "Being a member for 3 years is a weak signal. The arc from analyst to president or VP is what differentiated multiple profiles in our research. Rise or move on." },
          { title: "Collecting credentials without depth.", body: "Consulting clubs, honor societies, three other orgs, two internships — if none of them show real contribution, the list doesn't help. Depth in fewer things beats breadth without impact." },
          { title: "Skipping international or social-sector experience.", body: "This matters more in consulting than in any other field we studied. Even one international experience — a research trip, a semester abroad, a fellowship — adds a dimension to your story that most candidates don't have." },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
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

      <div className="mt-12 flex flex-col sm:flex-row gap-3">
        <Link href="/careers/consulting/programs" className="inline-flex items-center gap-2 px-5 py-3 bg-[#1B4332] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer">
          ← Key Programs
        </Link>
        <Link href="/careers/consulting/interviews" className="inline-flex items-center gap-2 px-5 py-3 border border-[#E5E5E0] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:border-[#1B4332] transition-colors cursor-pointer">
          Case Interview Guide <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
