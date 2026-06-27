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

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-base font-bold text-[#0D0D0D] mt-6 mb-2">
      {children}
    </h3>
  );
}

function CareerCTA() {
  return (
    <div className="mt-12 p-5 rounded-xl border-2 border-[#0D0D0D] bg-white">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#6B6B6B] mb-1">Career-specific plans</p>
      <p className="text-base font-semibold text-[#0D0D0D] mb-1">Know what field you're going into?</p>
      <p className="text-sm text-[#6B6B6B] mb-4">We break down exactly what internships and opportunities to pursue each year based on your career path.</p>
      <Link
        href="/careers"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D0D0D] text-[#FAFAF7] text-sm font-semibold rounded-md hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer"
      >
        Explore career plans
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}

export default function InternshipsPage() {
  return (
    <>
      <section className="bg-[#F4A825] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#0D0D0D]/60 text-xs font-semibold uppercase tracking-widest mb-4">College Guide</p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0D0D0D] leading-[1.05] mb-4"
            style={{ fontFamily: "'Libre Bodoni', serif" }}
          >
            Summer Internships.
          </h1>
          <p className="text-[#0D0D0D]/70 text-base leading-relaxed max-w-xl">
            Applications open earlier than you think. Here's how to stay ahead of them.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        <H2>The pipeline is real.</H2>
        <P>Freshman year internship gets you the sophomore year internship. Sophomore year gets you the junior year internship. The junior year internship gets you the full-time offer. That's how it works in most competitive fields.</P>
        <P>Tsadiku would have done every single one of those internships for free — because the pay was never the point. The point was the next step. By the time you graduate, what you want is a full-time offer already in hand. That happens because of what you did junior year. And junior year happens because of what you did sophomore year. It compounds. The earlier you understand this, the faster you move.</P>

        <H2>What types of opportunities to go after.</H2>
        <P>The right opportunity depends on what you want to do after college. Here's the full picture of what's available:</P>

        <H3>Internships at companies</H3>
        <P>The most direct path if you're going into business, tech, finance, consulting, or any field where companies hire undergrads. Start with what interests you, not what's most prestigious. A startup where you're doing real work beats a Fortune 500 where you're making slides.</P>

        <H3>Startups</H3>
        <P>Underrated. At a startup you'll have more responsibility, more exposure to how the whole business works, and more direct access to the people making decisions. Less brand name, more experience. Early in college, that trade is almost always worth it.</P>

        <H3>Research</H3>
        <P>If you're going into academia, medicine, science, or policy, research experience is what moves you forward. Work in a professor's lab, apply for campus research programs, or find a fellowship. The summer research you do freshman and sophomore year can lead to publications, recommendations, and graduate school applications that are meaningfully stronger.</P>

        <H3>Volunteering and community organizations</H3>
        <P>If you're going into education, social work, nonprofit, government, or public health, this counts. It's not a fallback — it's the relevant experience. Teaching summer school, working at a community health center, interning at a policy organization — those are the credentials in your field.</P>

        <H3>Personal projects</H3>
        <P>If you can't find anything, build something. An app, a website, a business, a research project, a content series — anything that puts you in motion and gives you something to talk about. The students who use an empty summer to build something come back with a story. You are capable of creating your own experience. Don't wait for someone to hand it to you.</P>

        <P>If a summer doesn't come together the way you planned: don't let it be blank. Take a relevant class, build a project, do volunteer work in your field, or find a part-time role. An imperfect summer with something to show is always better than nothing.</P>

        <P>For specific internships and opportunities to pursue based on your career path, go to the <Link href="/careers" className="font-semibold text-[#1A1A2E] underline underline-offset-2 hover:text-[#F4A825] transition-colors">Career Plans</Link> page.</P>

        <H2>How to find them.</H2>
        <P>Google is your friend. Search "[field] + internship + [year] + undergraduate" and you'll find more than you expect. Set alerts. Come back to it regularly.</P>
        <P>Beyond that:</P>
        <ul className="list-disc list-inside space-y-2 text-sm text-[#374151] mb-6 ml-2">
          <li><strong>Handshake</strong> — most universities post internship opportunities here; set up your profile and check it weekly</li>
          <li><strong>LinkedIn</strong> — search for the role you want, filter by "internship," and set job alerts so new postings come to you</li>
          <li><strong>Your career center</strong> — they host career fairs, post employer contacts, and sometimes have relationships with companies that don't recruit publicly</li>
          <li><strong>Your network</strong> — ask upperclassmen, professors, and advisors what past students have done and where</li>
        </ul>

        <H2>Coffee chats and referrals.</H2>
        <P>Here's something most people skip: reach out to people doing the job you want, before you apply.</P>
        <P>Find someone on LinkedIn who went to a similar school, is from a similar background, or is working at a company you're interested in. Send them a message asking for 15–20 minutes to learn about what they do. Keep it short and specific — not "can you help me get a job," but "I'm a sophomore studying X and I'd love to hear how you got into this field."</P>
        <P>Most people say yes. When the conversation is done, ask if they'd be willing to refer you when you apply. A referral does not guarantee you get the interview — but it moves your application out of the pile. In a cycle where you're competing against thousands of applicants, that matters.</P>
        <P>Look for people with similar backgrounds when you can. Those conversations tend to go deeper and the people on the other side often want to help in a way that's harder to replicate cold.</P>
        <P>We have outreach templates on the <Link href="/college/resources" className="font-semibold text-[#1A1A2E] underline underline-offset-2 hover:text-[#F4A825] transition-colors">Resources page</Link> to help you get started.</P>

        <H2>The grind.</H2>
        <P>There is no version of this that isn't a numbers game. Students put in 100+ applications in a single recruiting cycle just to get a handful of interviews. That's not a sign that something is wrong — that's what it takes.</P>
        <P>Apply early, apply broadly, and apply consistently. Set aside time each week during recruiting season to find new postings and submit. Track what you've applied to. Follow up. Don't wait to feel ready — apply while you're figuring it out.</P>

        <H2>When applications open.</H2>
        <P>This is where most people lose before they start. In tech and many corporate fields, applications for the following summer open in <strong>August and September</strong>. Not January. If you find out about an internship in the spring, you've already missed most of the best ones.</P>
        <P>Mark your calendar. The first week of school, start looking.</P>

        <H2>By year — what to focus on.</H2>

        <H3>Freshman year</H3>
        <P>Explore. Apply to anything that interests you and aligns with what you think you want to do. Freshman-specific programs exist — Google STEP, Microsoft Explore, Meta University, Two Sigma Freshman Fellowship, NSF REU, and others. The bar is lower and the experience is real. Take the startup internship, the research position, the nonprofit role. The goal is to start building experience and figure out what you actually like doing. The more aligned you are, the better — but this is still the time to explore.</P>

        <H3>Sophomore year</H3>
        <P>Narrow down. You should have some signal from freshman year about what direction you're heading. Go deeper into that. Apply to more competitive programs. Your freshman year experience is now your credential — use it. This is also the year to sharpen your recruiting skills, because junior year is when it counts.</P>

        <H3>Junior year</H3>
        <P>This is the most important summer of college. If you want a full-time offer before you graduate — which you should — it comes from your junior year internship. The companies that recruit juniors are offering return offers to the ones who perform. You want to walk into senior year with a job lined up. It is one of the best feelings you will have in college, and it starts with what you do this summer. You need to have a direction by now. You can still pivot after, but every degree of uncertainty makes the full-time search harder.</P>

        <H3>Senior year</H3>
        <P>If you have a return offer, you're done — focus on finishing strong and starting well. If you don't, use the summer before senior year to intern somewhere that can convert, or use senior year recruiting to apply for full-time roles directly.</P>

        <CareerCTA />
      </section>
    </>
  );
}
