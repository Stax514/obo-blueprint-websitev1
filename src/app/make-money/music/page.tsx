import Link from "next/link";
import { CheckCircle2, AlertTriangle } from "lucide-react";

function Callout({ type, children }: { type: "info" | "warn"; children: React.ReactNode }) {
  const s = {
    info: { cls: "bg-[#ECFDF5] border-[#065F46]", Icon: CheckCircle2, color: "text-[#065F46]" },
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
      <h2 className="text-xl font-extrabold text-[#065F46] whitespace-nowrap">{label}</h2>
      <div className="h-px flex-1 bg-[#E2E8F0]" />
    </div>
  );
}

const streamingFacts = [
  { stat: "$0.003–$0.005", label: "per stream on Spotify / Apple Music (2024–2026 industry standard)" },
  { stat: "~12–15M streams", label: "needed per year to earn $50,000 from streaming alone" },
  { stat: "0.4%", label: "of artists on streaming platforms achieve 1 million streams per month" },
  { stat: "10–16%", label: "of sales revenue a new artist typically receives — after the label recoups all costs" },
  { stat: "90%", label: "of musicians don't make a full-time living from music" },
];

const labelReality = [
  { title: "Studio costs come out of your pocket first", body: "Before signing a label deal, artists pay out of pocket. Professional studio time runs $200–$500/day. Recording an album properly can cost $5,000–$50,000 before any label money appears. Most artists spend years self-funding this." },
  { title: "A label deal is not immediate wealth", body: "Record labels typically offer artists only 10–16% of sales revenue — and the label recoups all recording, marketing, music video, and promotion costs from that 10–16% before the artist sees a single dollar. Many signed artists earn nothing from royalties for years while the label recoups." },
  { title: "The math of streaming is brutal", body: "Spotify and Apple Music pay approximately $0.003–$0.005 per stream. To earn $50,000 from streaming alone, an artist needs roughly 12–15 million streams in a year. Only 0.4% of artists on streaming platforms achieve 1 million streams per month." },
];

const vsNBA = [
  { factor: "Can you do both (music + career)?", music: "Yes — 43% of working musicians have full-time jobs", sports: "Almost impossible — requires 6–8 hrs/day physical training" },
  { factor: "Does preparation/strategy help your odds?", music: "More — quality, branding, and networking matter", sports: "Minimal — talent is the gate" },
  { factor: "Do you need to go all-in before you know?", music: "No — you can build a following while in school", sports: "Yes — missing years of school and career building" },
  { factor: "Does it require sacrificing your degree?", music: "No", sports: "Often yes" },
];

const recommendedModel = [
  { num: "1", title: "Pursue a high-income career first", body: "Law, finance, tech, medicine — something that gives you financial stability and the ability to invest in your music without desperation." },
  { num: "2", title: "Build music simultaneously", body: "Weekends, evenings, summers. Many successful artists built their catalog while in school or working full-time. The two tracks don't have to compete." },
  { num: "3", title: "Use career income to fund music", body: "You can afford better equipment, studio time, and music videos without being forced to take a bad deal. Financial security gives you creative control." },
  { num: "4", title: "Negotiate from strength", body: "Artists who don't need a label deal get better terms than those who are broke and desperate. A career gives you leverage in any negotiation." },
  { num: "5", title: "Let music become the primary income if it blows up", body: "The career is a safety net, not a sacrifice. If your music takes off, you leave the job. If it doesn't, you never gave up your financial foundation." },
];

export default function MusicPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-10">
        <Link href="/make-money" className="text-xs font-semibold text-[#6B7280] hover:text-[#065F46] transition-colors">← Make Money</Link>
        <span className="block text-xs font-semibold uppercase tracking-widest text-[#065F46] mt-4 mb-2">Music</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          Music is different from sports.<br />This distinction matters.
        </h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-4">
          Unlike NBA/NFL, music doesn't require you to go all-in before you know if it works. 43% of working musicians have full-time jobs. The data strongly supports a combined model — not an either/or decision.
        </p>
        <Callout type="info">
          The recommended model: pursue a high-income career AND build music at the same time. The career funds your music, gives you negotiating leverage, and serves as a safety net. Music is additive — not a sacrifice.
        </Callout>
      </div>

      <section className="mb-14">
        <h2 className="text-2xl font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>The streaming math</h2>
        <p className="text-sm text-[#6B6B6B] mb-6">The numbers most people don't know when they plan a music career.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
          {streamingFacts.map((f, i) => (
            <div key={i} className={`p-4 border border-[#E5E5E0] rounded-xl bg-white ${i === 4 ? "sm:col-span-2" : ""}`}>
              <p className="text-2xl font-bold text-[#DC2626] mb-1" style={{ fontFamily: "'Libre Bodoni', serif" }}>{f.stat}</p>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">{f.label}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#9CA3AF]">Sources: Spotify/Apple Music pay rates (2024–2026 industry standard); Musician's Union survey; streaming figure from academic study cited by Mixmag.</p>
      </section>

      <Divider label="The Label Deal Reality" />
      <div className="space-y-3 mb-8">
        {labelReality.map((item, i) => (
          <div key={i} className="p-5 border border-[#E5E5E0] rounded-xl bg-white">
            <p className="font-semibold text-[#0D0D0D] text-sm mb-2">{item.title}</p>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>

      <Divider label="Music vs. Sports — Why They're Not the Same" />
      <p className="text-sm text-[#6B6B6B] mb-6">Music can be built alongside a career. Sports almost never can.</p>
      <div className="overflow-x-auto rounded-xl border border-[#E5E5E0] mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#F9FAFB] border-b border-[#E5E5E0]">
              <th className="text-left px-4 py-3 text-xs font-semibold text-[#374151] uppercase tracking-wider">Factor</th>
              <th className="text-center px-4 py-3 text-xs font-semibold text-[#374151] uppercase tracking-wider">Music</th>
              <th className="text-center px-4 py-3 text-xs font-semibold text-[#374151] uppercase tracking-wider">NBA / NFL</th>
            </tr>
          </thead>
          <tbody>
            {vsNBA.map((row, i) => (
              <tr key={i} className="border-b border-[#E5E5E0] last:border-b-0 bg-white">
                <td className="px-4 py-3 font-medium text-[#0D0D0D] text-xs">{row.factor}</td>
                <td className="px-4 py-3 text-center text-xs text-[#065F46] font-medium">{row.music}</td>
                <td className="px-4 py-3 text-center text-xs text-[#DC2626] font-medium">{row.sports}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Divider label="The Model That Works" />
      <p className="text-sm text-[#6B6B6B] mb-6">The data supports this approach. Artists who combined a real career with music used their income to fund better production, avoid bad label deals, and build leverage.</p>
      <div className="space-y-3 mb-8">
        {recommendedModel.map((step) => (
          <div key={step.num} className="flex gap-4 p-5 border border-[#E5E5E0] rounded-xl bg-white">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#ECFDF5] flex items-center justify-center text-xs font-bold text-[#065F46]">{step.num}</div>
            <div>
              <p className="font-semibold text-[#0D0D0D] text-sm mb-1">{step.title}</p>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">{step.body}</p>
            </div>
          </div>
        ))}
      </div>

      <Callout type="info">
        Artists who combined a real career with music could afford better equipment, studio time, and music videos without being desperate for any deal that came along. Financial security from a career isn't a compromise — it's leverage.
      </Callout>

      <div className="flex flex-col sm:flex-row gap-3 mt-8">
        <Link href="/make-money/sports" className="inline-flex items-center gap-2 px-5 py-3 bg-[#065F46] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#4ADE80] hover:text-[#0D0D0D] transition-colors cursor-pointer">
          ← Sports
        </Link>
        <Link href="/make-money/tiers" className="inline-flex items-center gap-2 px-5 py-3 border border-[#E5E5E0] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:border-[#065F46] transition-colors cursor-pointer">
          ← The Tiers
        </Link>
      </div>
    </div>
  );
}
