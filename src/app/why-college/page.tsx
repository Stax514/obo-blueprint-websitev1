import SectionLayout from "@/components/SectionLayout";
import { TrendingUp, Users, Lightbulb, Shield, CheckCircle } from "lucide-react";

const reasons = [
  {
    icon: TrendingUp,
    title: "The Math Is Not Close",
    body: "Skip college, get a $25K job right out of high school. After taxes, rent, and food, you're saving maybe $10–15K a year — roughly $40–60K in 4 years if you're disciplined. Go to college for free — which is possible — graduate with a $55–60K starting salary (the national average for 2023 grads). In year ONE of working, you've already matched what took 4 years. And that's before summer internships, which at competitive companies can pay $15–25K for the summer alone. The math isn't close.",
    color: "bg-[#F4A825]",
    iconColor: "text-[#0D0D0D]",
  },
  {
    icon: Users,
    title: "The Network Is Real",
    body: "People talk about \"networking\" like it's awkward happy hours. It's not. It's the roommate who becomes your business partner, the professor who refers you for your first job, the classmate who hires you fifteen years later. You can't replicate that anywhere else.",
    color: "bg-[#1A1A2E]",
    iconColor: "text-white",
  },
  {
    icon: Lightbulb,
    title: "Four Years You Can't Buy Anywhere Else",
    body: "College is the most fun you can have from 18 to 22. Parties, study abroad, people your age around you all the time, experiences that don't exist outside of that window. You can still turn up, still travel, still have fun — with real money coming on the other side. That combination doesn't exist on any other path.",
    color: "bg-[#C45B3D]",
    iconColor: "text-white",
  },
  {
    icon: Shield,
    title: "Practice for the Real World",
    body: "School is practice for what you're doing in the real world. The same way you can't make the NBA without practicing, you can't expect to be successful without doing the work. College is where you build the habits, skills, and credentials that protect you when the economy gets ugly — and graduates are significantly less affected when layoffs happen.",
    color: "bg-[#1B4332]",
    iconColor: "text-white",
  },
];

const myths = [
  {
    myth: "\"Rapping and the NBA are better bets.\"",
    truth: "Nothing in life is a guarantee. But people ask for guarantees on college when they never asked for a guarantee on their rap career or their business. About 1 in 3,300 high school basketball players makes an NBA roster — that's roughly 0.03%. College graduates have an 85%+ employment rate. The math is the math. All the other routes are way harder — rapping is harder, getting out the block is harder — and the returns aren't even better.",
  },
  {
    myth: "\"I can't afford it.\"",
    truth: "This is the most common and most solvable misconception. Elite schools with big endowments are often cheaper for low-income students than state schools. Harvard's sticker price is ~$80K/year — but families earning under $85K pay nothing. Yale's threshold is $75K. Princeton's is $100K. Don't eliminate options based on sticker price. We cover all of this in the Financial Aid section.",
  },
  {
    myth: "\"College isn't for people like me.\"",
    truth: "This one matters to address directly. You belong. The best schools in the country are actively looking for students with your story. There aren't that many people with your exact experience and perspective applying. That's leverage — and it's real.",
  },
  {
    myth: "\"Successful people didn't go to college.\"",
    truth: "Those rappers and athletes you look up to? Look at where they send their kids — the Ivies, Berkeley, Stanford. They did the hardest route possible. They're not telling their children to follow their exact path. Skip that step. Be the kid, not the rapper wishing they had another shot.",
  },
];

export default function WhyCollegePage() {
  return (
    <SectionLayout
      eyebrow="Section 01 — Why College?"
      title={`The real reason\nit matters.`}
      subtitle="Not the speech they give you at orientation. The actual case — with real numbers — for why college is still one of the best moves you can make."
      quote="I am tired of Black kids only wanting to be rappers and athletes. We have enough. We need doctors, lawyers, scientists, finance people, engineers — and we are more than intelligent enough to get there."
      accentColor="#F4A825"
      accentBg="bg-[#F4A825]"
      accentText="text-[#0D0D0D]"
      nextSection={{ href: "/which-college", label: "Which College?" }}
    >
      {/* Intro */}
      <div className="max-w-3xl mb-20">
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-6"
          style={{ fontFamily: "'Libre Bodoni', serif" }}
        >
          Let&apos;s run the numbers.
        </h2>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-4">
          The college question has gotten complicated. People online are saying degrees are worthless, that you should skip it and start a business, that the exceptions prove the rule. Here&apos;s the truth: the exceptions are not the rule.
        </p>
        <p className="text-[#6B6B6B] text-lg leading-relaxed">
          For you — a Black high school student deciding your next move — here&apos;s what the data actually says, and what we&apos;ve seen with our own eyes.
        </p>
      </div>

      {/* Four reasons */}
      <div className="mb-20">
        <p className="text-[#F4A825] text-xs font-semibold uppercase tracking-widest mb-4">The case for going</p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-10"
          style={{ fontFamily: "'Libre Bodoni', serif" }}
        >
          Four reasons that actually matter
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="bg-white border border-[#E5E5E0] rounded-xl p-8">
                <div className={`w-10 h-10 rounded-md ${reason.color} flex items-center justify-center mb-5`}>
                  <Icon size={18} className={reason.iconColor} />
                </div>
                <h3
                  className="text-xl font-bold text-[#0D0D0D] mb-3"
                  style={{ fontFamily: "'Libre Bodoni', serif" }}
                >
                  {reason.title}
                </h3>
                <p className="text-[#6B6B6B] leading-relaxed text-sm">{reason.body}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Myths */}
      <div className="mb-20 bg-[#0D0D0D] rounded-2xl p-8 md:p-12">
        <p className="text-[#F4A825] text-xs font-semibold uppercase tracking-widest mb-4">Myth-busting</p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#FAFAF7] mb-10"
          style={{ fontFamily: "'Libre Bodoni', serif" }}
        >
          Arguments you&apos;ve heard — answered.
        </h2>
        <div className="space-y-8">
          {myths.map((item) => (
            <div key={item.myth} className="border-b border-[#2D2D2D] pb-8 last:border-b-0 last:pb-0">
              <p
                className="text-[#FAFAF7] font-semibold italic mb-3 text-lg"
                style={{ fontFamily: "'Libre Bodoni', serif" }}
              >
                {item.myth}
              </p>
              <p className="text-[#9CA3AF] leading-relaxed flex gap-3">
                <CheckCircle size={18} className="text-[#F4A825] flex-shrink-0 mt-0.5" />
                <span>{item.truth}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* The bigger picture */}
      <div className="mb-20 max-w-3xl">
        <p className="text-[#F4A825] text-xs font-semibold uppercase tracking-widest mb-4">The bigger picture</p>
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-6"
          style={{ fontFamily: "'Libre Bodoni', serif" }}
        >
          It&apos;s not just about money.
          <span className="italic"> It&apos;s about your 80 years.</span>
        </h2>
        <p className="text-[#6B6B6B] leading-relaxed mb-4">
          The goal is to live a good 80 — not a stressed 25 where you&apos;re looking over your shoulder. You deserve a full life. The freedom to travel, to take care of your family, to build something real, to enjoy your weekends without counting dollars. That&apos;s what the right moves at 17 and 18 make possible.
        </p>
        <p className="text-[#6B6B6B] leading-relaxed mb-4">
          We&apos;re not going to pretend college is a perfectly equal playing field. It isn&apos;t. But we&apos;ve seen what happens on both sides — and the gap in options was never about talent. It was about access to information. That&apos;s why this site exists.
        </p>
        <p className="text-[#6B6B6B] leading-relaxed">
          We cover HBCUs, PWIs, state schools, and everything in between in the next section — Which College — where we break down how to find the right fit for you specifically.
        </p>
      </div>

      {/* Bottom callout */}
      <div className="bg-[#FFF9EC] border border-[#F4A825]/30 rounded-xl p-8">
        <h3
          className="text-2xl font-bold text-[#0D0D0D] mb-3"
          style={{ fontFamily: "'Libre Bodoni', serif" }}
        >
          The bottom line
        </h3>
        <p className="text-[#6B6B6B] leading-relaxed max-w-2xl">
          College isn&apos;t the only path. But for most students, it&apos;s the one with the highest probability of building the life you want. The question isn&apos;t really <em>if</em> — it&apos;s <em>how</em> to do it right, and how to do it for free. That&apos;s what this entire blueprint is about.
        </p>
      </div>
    </SectionLayout>
  );
}
