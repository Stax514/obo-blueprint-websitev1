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
  return <h3 className="text-base font-bold text-[#0D0D0D] mt-6 mb-2">{children}</h3>;
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-l-4 border-[#C45B3D] bg-[#FDF3EF] px-4 py-3 rounded-r-lg my-4">
      <p className="text-sm text-[#374151] leading-relaxed">{children}</p>
    </div>
  );
}

const dsa = [
  { topic: "Arrays & Strings", priority: "Essential", desc: "The most common interview category. Two pointers, sliding window, prefix sums. Know these cold." },
  { topic: "Hash Maps & Hash Sets", priority: "Essential", desc: "Frequency counting, deduplication, lookup in O(1). Used in almost every medium-difficulty problem." },
  { topic: "Linked Lists", priority: "Essential", desc: "Traversal, reversal, cycle detection, merge. Know the slow/fast pointer technique." },
  { topic: "Stacks & Queues", priority: "Essential", desc: "Monotonic stack, BFS queue, parenthesis matching. Common in medium problems." },
  { topic: "Trees & Binary Search Trees", priority: "Essential", desc: "DFS, BFS, in/pre/post order traversal, LCA, path problems. Trees appear constantly." },
  { topic: "Graphs", priority: "Essential", desc: "DFS, BFS, topological sort, union-find. Know how to detect cycles and find shortest paths." },
  { topic: "Binary Search", priority: "Essential", desc: "Not just searching sorted arrays — binary search on the answer. Know both variants." },
  { topic: "Dynamic Programming", priority: "High", desc: "Memoization vs. tabulation. Knapsack, LCS, LIS, grid DP. Takes the most practice — start early." },
  { topic: "Recursion & Backtracking", priority: "High", desc: "Permutations, combinations, subsets, N-Queens. Think in terms of decision trees." },
  { topic: "Heaps / Priority Queues", priority: "High", desc: "Top K elements, merge K sorted lists, median of a stream. Know min-heap and max-heap behavior." },
  { topic: "Tries", priority: "Medium", desc: "Prefix search, word search. Less common but appears at top companies for search-related roles." },
  { topic: "Intervals", priority: "Medium", desc: "Merge intervals, meeting rooms, non-overlapping. Sort then scan." },
];

const behavioral = [
  {
    q: "Tell me about yourself.",
    tip: "Structure: where you're from, what you're studying, what you've built or worked on, why you're interested in this company. Keep it under 90 seconds. Practice until it sounds natural, not rehearsed.",
  },
  {
    q: "Tell me about a challenging project you worked on.",
    tip: "Use STAR: Situation, Task, Action, Result. Be specific about what you built, what went wrong, and what you did about it. Numbers help — users, performance improvements, lines of code are secondary to impact.",
  },
  {
    q: "Tell me about a time you had to learn something quickly.",
    tip: "Tech changes fast. This question tests intellectual curiosity and self-direction. Pick something real — a language you learned for a project, a framework you picked up mid-internship.",
  },
  {
    q: "How do you handle disagreement with a teammate?",
    tip: "SWEs work in teams. Show that you can advocate for your position with data and reasoning, listen genuinely, and move forward once a decision is made. No stories where you were just right and they were wrong.",
  },
  {
    q: "Where do you see yourself in 5 years?",
    tip: "Be honest but be directional. Talk about the type of engineer you want to be, the problems you want to work on, the skills you want to build. Don't say 'PM' in a SWE interview.",
  },
  {
    q: "Why this company?",
    tip: "This must be specific. Research the team, the products, the engineering culture. Generic answers about 'impact' and 'innovation' don't land. Name a product you use, a team you want to join, a technical challenge the company is working on.",
  },
];

export default function SWEInterviewsPage() {
  return (
    <>
      <section className="bg-[#C45B3D] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/careers/software-engineering" className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors mb-6 cursor-pointer">
            ← Software Engineering
          </Link>
          <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">Interview Prep</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#FAFAF7] leading-[1.05] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
            Technical Interview Guide.
          </h1>
          <p className="text-white/70 text-base leading-relaxed max-w-xl">
            What to study, in what order, and how to practice so you're ready when it counts.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

        <Note>
          The engineers who interview well are not the ones who are smarter — they're the ones who have had more reps. Start practicing early. Every practice session makes the next one easier. By the time your junior year interviews come, these should feel automatic.
        </Note>

        <H2>What SWE interviews actually test</H2>
        <P>A standard SWE interview at a top tech company has two components: a technical coding screen and a behavioral interview. Some companies also include a systems design round for more senior candidates — increasingly relevant even for new grads at companies like Google and Meta.</P>

        <ul className="list-disc list-inside space-y-2 text-sm text-[#374151] mb-6 ml-2">
          <li><strong>Technical coding screen</strong> — 1–2 LeetCode-style problems solved in 45–60 minutes. You explain your thinking out loud. The interviewer is evaluating both correctness and communication.</li>
          <li><strong>Behavioral interview</strong> — structured questions about past experience using the STAR format. Every company does this.</li>
          <li><strong>Systems design</strong> — design a scalable system (e.g., design Twitter, design a URL shortener). More common at junior+ levels. Google and Meta include this even for new grads.</li>
        </ul>

        <H2>Data Structures & Algorithms — What to Study</H2>
        <P>These are the categories that appear most often in technical interviews. Study them in roughly this order — essentials first, then high priority, then medium.</P>

        <div className="space-y-3 mt-4">
          {dsa.map((item) => (
            <div key={item.topic} className="border border-[#E5E5E0] rounded-xl p-4 bg-white">
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-sm font-semibold text-[#0D0D0D]">{item.topic}</p>
                <span className={`text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${
                  item.priority === "Essential"
                    ? "text-[#C45B3D] bg-[#FDF3EF]"
                    : item.priority === "High"
                    ? "text-[#1A1A2E] bg-[#EEF2FF]"
                    : "text-[#6B6B6B] bg-[#F5F5F0]"
                }`}>
                  {item.priority}
                </span>
              </div>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <H2>How to practice</H2>

        <H3>LeetCode</H3>
        <P>The standard. Start with easy problems to build confidence, move to medium, and work through common patterns — not random problems. <strong>Aim for 150+ medium problems by the start of junior year recruiting</strong> — this is the minimum floor, not a stretch goal. Focus on recognizing problem types, not memorizing solutions.</P>
        <P>Study by pattern: sliding window, two pointers, BFS/DFS, dynamic programming, binary search on the answer. When you see a new problem, ask: what pattern does this look like? That's the skill the interview tests.</P>

        <H3>Mock interviews</H3>
        <P>Solo LeetCode is not enough. You need to practice explaining your thinking out loud while solving under time pressure. Use Pramp (free peer mock interviews), interviewing.io (practice with real engineers), or sit down with a friend and take turns interviewing each other. Record yourself at least once — watching yourself on video is uncomfortable and useful.</P>

        <H3>The interview itself</H3>
        <ul className="list-disc list-inside space-y-2 text-sm text-[#374151] mb-6 ml-2">
          <li>Clarify the problem before you start coding. Ask about edge cases, input size, constraints.</li>
          <li>Talk through your approach before you write a line. The interviewer wants to see how you think.</li>
          <li>Start with a brute-force solution if you need to. Then optimize. A working O(n²) solution is better than an incomplete O(n) one.</li>
          <li>Test your code with an example before you say you're done. Walk through it manually.</li>
          <li>If you get stuck, say what you know: "I know I need to track something here — let me think about what data structure makes sense." Silence is worse than thinking out loud.</li>
        </ul>

        <H2>Systems Design</H2>
        <P>For juniors and new grads, systems design rounds test your ability to think about scale and trade-offs — not your ability to design production infrastructure. The questions are open-ended: design a URL shortener, design a messaging app, design a ride-sharing service.</P>

        <H3>Framework</H3>
        <ul className="list-disc list-inside space-y-2 text-sm text-[#374151] mb-6 ml-2">
          <li><strong>Clarify requirements.</strong> Functional (what does it do?) and non-functional (how many users? what's the latency requirement?).</li>
          <li><strong>Estimate scale.</strong> How many requests per second? How much data storage? Back-of-the-envelope math matters.</li>
          <li><strong>High-level design.</strong> Draw the major components — clients, load balancers, servers, databases, caches, CDNs.</li>
          <li><strong>Deep dive into one component.</strong> The interviewer will push you to go deeper somewhere. Know databases (SQL vs NoSQL trade-offs), caching (Redis), and message queues (Kafka).</li>
          <li><strong>Discuss trade-offs.</strong> Every design decision has trade-offs. Name them. Showing you understand trade-offs is the point.</li>
        </ul>
        <P>Resources: <em>System Design Interview</em> by Alex Xu, Grokking the System Design Interview (Educative), and YouTube (ByteByteGo is excellent).</P>

        <H2>Behavioral Interview</H2>
        <P>Every company does behavioral interviews. Prepare for these with the same rigor as the technical screen. Use the STAR format: Situation, Task, Action, Result. Be specific. Numbers and outcomes matter.</P>

        <div className="space-y-4 mt-4">
          {behavioral.map((item) => (
            <div key={item.q} className="border border-[#E5E5E0] rounded-xl p-5 bg-white">
              <p className="text-sm font-semibold text-[#0D0D0D] mb-2">{item.q}</p>
              <p className="text-xs text-[#6B6B6B] leading-relaxed">{item.tip}</p>
            </div>
          ))}
        </div>

        <H2>When to start preparing</H2>
        <P>Freshman year: start LeetCode easy problems. Get comfortable with arrays, strings, and hash maps.</P>
        <P>Sophomore year: move to medium problems. Do 2–3 problems per week minimum. Start doing mock interviews with friends.</P>
        <P>Junior year (before recruiting): 150+ problems done, patterns internalized, behavioral stories prepared. By September of junior year you should be interviewing-ready.</P>

        <Note>
          The people who interview well are not smarter than you. They started earlier and practiced more. That's it. Start now.
        </Note>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link
            href="/careers/software-engineering/roadmap"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#C45B3D] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer"
          >
            ← Back to Roadmap <ArrowRight size={14} />
          </Link>
          <Link
            href="/careers/resources"
            className="inline-flex items-center gap-2 px-5 py-3 border border-[#E5E5E0] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:border-[#C45B3D] transition-colors cursor-pointer"
          >
            Resume & Templates <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
