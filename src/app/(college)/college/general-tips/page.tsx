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

function CareerCTA() {
  return (
    <div className="mt-12 p-5 rounded-xl border-2 border-[#0D0D0D] bg-white">
      <p className="text-xs font-semibold uppercase tracking-widest text-[#6B6B6B] mb-1">Career-specific plans</p>
      <p className="text-base font-semibold text-[#0D0D0D] mb-1">Know what field you're going into?</p>
      <p className="text-sm text-[#6B6B6B] mb-4">We have dedicated 4-year plans for specific careers — exactly what to do each year to get there.</p>
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

export default function GeneralTipsPage() {
  return (
    <>
      <section className="bg-[#C45B3D] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">College Guide</p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FAFAF7] leading-[1.05] mb-4"
            style={{ fontFamily: "'Libre Bodoni', serif" }}
          >
            General Tips.
          </h1>
          <p className="text-white/70 text-base leading-relaxed max-w-xl">
            The things nobody told us until we figured them out.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        <H2>What college is actually for.</H2>
        <P>Have fun. Meet people. Travel if you can. Change your mind about things. That's part of it and it matters.</P>
        <P>But be practical. College is an investment — in time, in money, in four years of your life. And when you leave, you need to eat. You need a roof over your head. That means you need money, and that means you need a job.</P>
        <P>College is about getting a job. Grad school can be the step in between — for some fields it's necessary, for others it's optional — but at the end of that road, there's a career. The sooner you're honest with yourself about that, the better positioned you'll be to actually get there.</P>
        <P>Pick a direction and start moving. It doesn't have to be permanent. The best thing you can do is try something, get experience, and figure out from the inside whether it's right for you. It's better to have a job and realize you want to pivot than to have nothing and still be searching. You can always change course. You cannot get that time back.</P>
        <P>And yes — there's the dent you want to make in the world. The thing you care about, the purpose you're working toward, the problem you want to spend your life solving. That's real and it matters. But it doesn't have to happen right out of college. It can come after you've built stability. It can run alongside your career. It can be the thing you work toward for years before it becomes your full-time life. The people who make the biggest impact usually do it from a position of security, not desperation. Take care of yourself first. Sustain yourself. Then build from there.</P>
        <P>What you pursue is entirely your choice. We're just here to give you the blueprint to do it well.</P>

        <H2>Go to office hours.</H2>
        <P>Professors hold office hours. Almost no one goes. The students who show up consistently are the ones who get recommendations, who get research opportunities, who get connected to things that never get posted publicly.</P>
        <P>You don't need to be struggling to go. Go when you're confused about a concept. Go when you want to understand something more deeply. Go when you want to know what someone in your field actually thinks about where it's headed. One conversation with a professor who knows your name is worth more than any advice you'll read online.</P>

        <H2>Build relationships with people ahead of you.</H2>
        <P>Upperclassmen know things about your major, your campus, and your career path that no advisor or career center has written down. They made the mistakes you haven't made yet. They know which clubs are worth joining, which professors are worth working with, which companies recruit from your school and what they actually want.</P>
        <P>Find the juniors and seniors doing what you want to do. Ask them questions. Most people are willing to help when you ask directly and specifically.</P>

        <H2>Keep a journal.</H2>
        <P>You're going to change significantly between 18 and 22. You're going to have opinions that shift, values that sharpen, decisions you'll want to remember making. Write things down.</P>
        <P>It doesn't need to be daily or organized. Even a running document of things you've figured out, things you're thinking through, or things you want to do before you graduate is enough. You'll be glad you have it.</P>

        <H2>Study abroad if you can.</H2>
        <P>If there is any feasible way to spend a semester or summer in another country, do it. Not because it looks good on a resume — it doesn't matter that much. Because you will not have another window in your life where picking up and living somewhere else costs this little and carries this much opportunity.</P>
        <P>The people you meet, the way your thinking shifts, the confidence you build navigating somewhere unfamiliar — that stays with you. Look into it early. Many programs require planning a year in advance.</P>

        <H2>Lift as you climb.</H2>
        <P>As you gain access to internships, clubs, advisors, and opportunities — bring people with you. Share the job posting. Give the referral. Send the information. Pass on what you learned.</P>
        <P>The most successful people we know are also the most generous with information. Those two things are not in conflict.</P>

        <H2>Take care of your body.</H2>
        <P>Sleep matters. What you eat matters. Whether you're moving your body matters. These aren't secondary — they affect how well you think, how consistently you show up, and how you handle stress.</P>
        <P>The gym is also one of the easiest ways to meet people. Campus gyms have intramural leagues, open courts, group classes. Use them.</P>

        <H2>Know what you're working toward.</H2>
        <P>College gives you freedom in a way that nothing before it did. That freedom is a gift and it can cost you if you're not intentional. You don't need every answer — but you should be actively working to figure out where you're going. The clearer you are, the faster you can move.</P>
        <P>Revisit the <Link href="/college/guide" className="font-semibold text-[#1A1A2E] underline underline-offset-2 hover:text-[#F4A825] transition-colors">Guide</Link> every year. What you need to be doing freshman year is different from what you need to be doing junior year. Stay oriented.</P>

        <CareerCTA />
      </section>
    </>
  );
}
