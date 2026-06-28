import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle2, Lightbulb } from "lucide-react";

function Callout({ type, children }: { type: "info" | "warn" | "tip"; children: React.ReactNode }) {
  const s = {
    info: { cls: "bg-[#F0FDF4] border-[#1B4332]", Icon: CheckCircle2, color: "text-[#1B4332]" },
    warn: { cls: "bg-[#FFFBEB] border-[#D97706]", Icon: AlertTriangle, color: "text-[#D97706]" },
    tip:  { cls: "bg-[#EFF6FF] border-[#1A1A2E]", Icon: Lightbulb,    color: "text-[#1A1A2E]" },
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

function Step({ num, title, body, bullets }: { num: string; title: string; body: string; bullets?: string[] }) {
  return (
    <div className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1B4332] flex items-center justify-center text-xs font-bold text-white">{num}</div>
      <div>
        <p className="font-semibold text-[#0D0D0D] text-sm">{title}</p>
        <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{body}</p>
        {bullets && (
          <ul className="mt-2 space-y-1">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-2 text-xs text-[#9CA3AF]"><span>→</span>{b}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function ConsultingRoadmapPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-10">
        <Link href="/careers/consulting" className="text-xs font-semibold text-[#6B7280] hover:text-[#1B4332] transition-colors">← Consulting</Link>
        <span className="block text-xs font-semibold uppercase tracking-widest text-[#1B4332] mt-4 mb-2">Consulting Roadmap</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>Year-by-Year Consulting Roadmap.</h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">Freshman through senior year. What to do, when to do it, and what's at stake.</p>
        <Callout type="info">
          In consulting, every full-time offer in our research came from one path: junior year internship → return offer → done. Nobody cold-applied to full-time MBB roles after graduating. Everything you do before junior year is building toward that one summer.
        </Callout>
      </div>

      <Divider label="High School — Build the Foundation" />
      <p className="text-sm text-[#6B6B6B] leading-relaxed mb-5">The consultants we studied had high school profiles that reflected breadth, leadership, and structured thinking — not just strong grades.</p>
      <div className="space-y-3">
        <Step num="1" title="Excel academically across subjects." body="Academic excellence signals quantitative aptitude and work ethic. Consulting skews toward students with strong overall records — not just one subject." bullets={["National Merit, Phi Beta Kappa, Summa Cum Laude — these appear repeatedly", "Strong math and writing skills both matter. Consulting needs both."]} />
        <Step num="2" title="Lead something and build something." body="Multiple profiles show founding clubs or leading teams in high school. The habit of initiative — not just participation — is what stands out." bullets={["FIRST Robotics, Student Council, NHS leadership, founding a club", "Even starting something small matters if you can articulate what you built"]} />
        <Step num="3" title="Develop structured problem-solving early." body="Chess, debate, math competitions, robotics — these develop the pattern-recognition and structured thinking that consulting directly tests." />
      </div>

      <Divider label="Freshman Year — Get in Position Early" />
      <Callout type="warn">
        MBB sophomore diversity programs open applications as early as February of freshman year. If you wait until sophomore year to start, you've already missed the window for some programs.
      </Callout>
      <div className="space-y-3">
        <Step
          num="1"
          title="Apply to sophomore diversity programs — starting freshman fall."
          body="Bain Emerging Leaders opens around February 1 for sophomores. McKinsey Early Insight and BCG Early Access target freshmen and sophomores. These are your highest-leverage actions right now."
          bullets={["See the full list on the Programs page", "Three of the four non-target school MBB consultants in our research used a diversity program as their entry point"]}
        />
        <Step
          num="2"
          title="Join your school's consulting club immediately."
          body="The consulting club pattern is near-universal across MBB profiles. Join in the first weeks of school. The students who become club president by junior year started freshman year."
          bullets={["BU Consulting Group, Duke Impact Investing Group, Stanford Consulting Club — the name varies by school", "Start as an analyst, rise to leadership — this trajectory is what the resume shows"]}
        />
        <Step
          num="3"
          title="Start building your case instinct."
          body="You don't need to do full case interviews freshman year. But start reading business news, thinking about why companies succeed or fail, and developing the habit of structured thinking."
          bullets={["Read one business case study per week", "The Economist, WSJ, HBR — build the vocabulary early"]}
        />
        <Step
          num="4"
          title="Pursue any professional internship you can get."
          body="A finance, operations, nonprofit, or corporate internship freshman summer is fine. The goal is to have something real to talk about before your first case interview."
        />
      </div>

      <Divider label="Sophomore Year — Build the Record" />
      <p className="text-sm text-[#6B6B6B] leading-relaxed mb-5">Sophomore year is when the record you'll bring into junior recruiting starts to take shape. Every activity, internship, and credential from this year shows up in your MBB application.</p>
      <div className="space-y-3">
        <Step
          num="1"
          title="Do a sophomore diversity program if you can get one."
          body="Deloitte Discovery, Bain Emerging Leaders, and McKinsey programs that run sophomore year are direct pipelines. Lydia Melka-White's path: Deloitte early diversity program → Bain offer. The relationship between these programs and MBB offers is documented."
        />
        <Step
          num="2"
          title="Start casing — for real, this year."
          body="Junior year MBB recruiting starts in August. That means your case prep needs to be serious by the end of sophomore year — not just begun. Start with video examples, then move to partner practice."
          bullets={["Management Consulted platform — filter by firm and round", "Free casebooks: Wharton, Ross, Darden case books are publicly available", "Find a casing partner — the relationship compounds over months of prep"]}
        />
        <Step
          num="3"
          title="Enter a case competition."
          body="Case competitions are the single highest-leverage activity for non-target students. Winning one is a verifiable credential that compensates for a weaker school brand. Look for national and diversity-specific competitions."
          bullets={["National Diversity Case Competition (open to all schools)", "Deloitte Case Competition, Darden Case Competition, MIT Sloan Case Competition"]}
        />
        <Step
          num="4"
          title="Rise in your consulting club."
          body="By the end of sophomore year you should be taking on more responsibility — project leadership, client work, committee roles. The trajectory from analyst to leader is what MBB wants to see."
        />
        <Step
          num="5"
          title="Network early and deliberately."
          body="Attend office events, company exploration weekenders, and informational sessions. Build real relationships with consultants before you need referrals. Multiple MBB profiles credited specific consultants who helped them through recruiting."
          bullets={["Coffee chats with consultants at firms you want to join", "Follow up — the relationship matters beyond the single conversation"]}
        />
      </div>

      <Divider label="Junior Year — The Make-or-Break Summer" />
      <Callout type="warn">
        MBB recruiting is notoriously early. Applications open in August and September — in some cases before junior year even starts. If you haven't done case prep and lined up your network by October, you are behind.
      </Callout>
      <div className="space-y-3">
        <Step
          num="1"
          title="Applications open in August. Apply immediately."
          body="McKinsey, BCG, and Bain begin accepting applications for the following summer's internship in August and September of junior year. Have your resume polished and your referrals lined up before school starts."
        />
        <Step
          num="2"
          title="Case prep target: 50+ cases, 100+ for competitive candidates."
          body="Quality over quantity — get real feedback on every case. Lydia's timeline: 6 weeks of intensive casing, Management Consulted platform, video examples first then live partner practice. That was on top of a foundation built sophomore year."
          bullets={["Round 1: 2 case interviews + PEI (Personal Experience Interview)", "Round 2 (Final): 3–4 case interviews in one day with partners and senior leaders", "See the full Case Interview Guide for what to study"]}
        />
        <Step
          num="3"
          title="Activate your network for referrals."
          body="The coffee chats and relationships from sophomore year matter now. Reach out to your contacts when applications open. A referral from someone inside the firm meaningfully improves your odds of getting a first-round interview."
        />
        <Step
          num="4"
          title="Prepare your Personal Experience Interview (PEI)."
          body="Every MBB interview includes a behavioral component. McKinsey's PEI focuses on leadership, personal impact, and entrepreneurial drive. Prepare 3–4 strong stories using the STAR format."
          bullets={["Identify your best leadership story, your most impactful moment, a time you drove results against the odds", "Practice telling each story in under 2 minutes — specific, concrete, compelling"]}
        />
      </div>
      <Callout type="tip">
        If junior summer doesn't go to MBB: Deloitte, Accenture, Oliver Wyman, LEK, or Kearney are strong. The Deloitte → McKinsey path is documented in our research. Every step builds the next one.
      </Callout>

      <Divider label="Senior Year — Execute" />
      <div className="space-y-3">
        <Step num="1" title="If you got a return offer: evaluate carefully." body="Which practice area? Which office? McKinsey NYC vs. SF vs. DC have different project profiles and cultures. The first team shapes your trajectory. Evaluate deliberately before you sign." />
        <Step num="2" title="If you didn't get a return offer: Tier 2 → MBB lateral is real." body="Deloitte, Accenture, Oliver Wyman, and L.E.K. are strong landing spots. Multiple consultants in our research went Big 4 or boutique first, then moved to MBB. The path is longer but it works." />
        <Step num="3" title="MBA as a full reset." body="If undergrad consulting recruiting didn't go to MBB, a top MBA (HBS, Wharton, Booth, Kellogg, Columbia) resets your access entirely. The Consortium Fellowship is specifically designed for underrepresented students pursuing MBA → consulting and is worth researching early." />
      </div>

      <Divider label="What to Avoid" />
      <div className="space-y-3">
        {[
          { title: "Starting case prep in January of junior year.", body: "Too late for most people. MBB applications close in October–November. You need 50–100 cases under your belt before your first interview. That requires starting sophomore year." },
          { title: "Only applying to MBB.", body: "Cast a wide net. Deloitte, Accenture, Oliver Wyman, LEK, and Kearney are strong and have real alumni networks. The lateral to MBB after 2 years at a top boutique is a documented path." },
          { title: "Joining consulting clubs without rising to leadership.", body: "Being a member for 3 years without a leadership role is a weak signal. The arc from analyst to president or VP is what differentiated multiple profiles in our research." },
          { title: "Networking transactionally.", body: "Consultants remember who reached out genuinely and who emailed only when they needed something. Build relationships before you need referrals. The follow-up after a coffee chat matters as much as the conversation." },
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
          Key Programs & Competitions <ArrowRight size={14} />
        </Link>
        <Link href="/careers/consulting/interviews" className="inline-flex items-center gap-2 px-5 py-3 border border-[#E5E5E0] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:border-[#1B4332] transition-colors cursor-pointer">
          Case Interview Guide <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
