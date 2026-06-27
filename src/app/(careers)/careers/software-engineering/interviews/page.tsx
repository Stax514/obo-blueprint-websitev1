import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle2, Lightbulb } from "lucide-react";

function Callout({ type, children }: { type: "info" | "warn" | "tip"; children: React.ReactNode }) {
  const s = {
    info: { cls: "bg-[#EFF6FF] border-[#1A1A2E]", Icon: CheckCircle2, color: "text-[#1A1A2E]" },
    warn: { cls: "bg-[#FFFBEB] border-[#D97706]",  Icon: AlertTriangle, color: "text-[#D97706]" },
    tip:  { cls: "bg-[#F0FDF4] border-[#059669]",  Icon: Lightbulb,     color: "text-[#059669]" },
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
      <h2 className="text-xl font-extrabold text-[#1A1A2E] whitespace-nowrap">{label}</h2>
      <div className="h-px flex-1 bg-[#E2E8F0]" />
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

const interviewSteps = [
  { label: "Clarify the problem.", desc: "Ask about edge cases, input size, and constraints before writing a single line. The interviewer wants to see you think before you code.", tips: ["'Can the input be empty?' 'Are there duplicates?' 'What's the expected input size?'", "Restating the problem in your own words is a strong signal"] },
  { label: "Talk through your approach first.", desc: "State your plan before you start coding. The interviewer is evaluating how you think — not just what you produce.", tips: ["Mention time and space complexity of your approach", "If you see a brute-force solution, name it, then discuss how to improve it"] },
  { label: "Start with a working solution.", desc: "A working O(n²) solution is better than an incomplete O(n) one. Get something correct on the board, then optimize.", tips: ["Don't freeze trying to find the perfect solution immediately", "Correctness first — optimization second"] },
  { label: "Test your code manually.", desc: "Walk through your code with a sample input before you say you're done. Catch your own bugs.", tips: ["Use a simple example, then test an edge case (empty input, single element, duplicates)"] },
  { label: "Talk when you're stuck.", desc: "If you get stuck, say what you know. 'I know I need to track something here — let me think about what data structure makes sense.' Silence is worse than thinking out loud.", tips: ["Ask for a hint if you're truly stuck — it's better than sitting in silence"] },
];

const behavioral = [
  { q: "Tell me about yourself.", tip: "Structure: where you're from, what you're studying, what you've built or worked on, why you're interested in this company. Keep it under 90 seconds. Practice until it sounds natural, not rehearsed." },
  { q: "Tell me about a challenging project you worked on.", tip: "Use STAR: Situation, Task, Action, Result. Be specific about what you built, what went wrong, and what you did about it. Numbers help — impact matters more than lines of code." },
  { q: "Tell me about a time you had to learn something quickly.", tip: "Tech changes fast. This tests intellectual curiosity and self-direction. Pick something real — a language you learned for a project, a framework you picked up mid-internship." },
  { q: "How do you handle disagreement with a teammate?", tip: "Show that you can advocate for your position with data and reasoning, listen genuinely, and move forward once a decision is made. No stories where you were just right and they were wrong." },
  { q: "Where do you see yourself in 5 years?", tip: "Be directional. Talk about the type of engineer you want to be, the problems you want to work on, the skills you want to build." },
  { q: "Why this company?", tip: "This must be specific. Research the team, the products, the engineering culture. Generic answers don't land. Name a product you use, a team you want to join, a technical challenge the company is working on." },
];

export default function SWEInterviewsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Header */}
      <div className="mb-10">
        <Link href="/careers/software-engineering" className="text-xs font-semibold text-[#6B7280] hover:text-[#1A1A2E] transition-colors">
          ← Software Engineering
        </Link>
        <span className="block text-xs font-semibold uppercase tracking-widest text-[#C45B3D] mt-4 mb-2">Interview Prep</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          Technical Interview Guide.
        </h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
          What to study, in what order, and how to practice so you're ready when it counts.
        </p>
        <Callout type="info">
          The engineers who interview well are not the ones who are smarter — they're the ones who have had more reps. Start practicing early. Every practice session makes the next one easier. By the time your junior year interviews come, these should feel automatic.
        </Callout>
      </div>

      <Divider label="What SWE Interviews Actually Test" />
      <p className="text-sm text-[#6B6B6B] leading-relaxed mb-5">A standard SWE interview has two components: a technical coding screen and a behavioral interview. Some companies include a systems design round.</p>
      <div className="space-y-3">
        {[
          { label: "Technical coding screen", desc: "1–2 LeetCode-style problems solved in 45–60 minutes. You explain your thinking out loud. The interviewer evaluates both correctness and communication." },
          { label: "Behavioral interview", desc: "Structured questions about past experience using the STAR format. Every company does this." },
          { label: "Systems design", desc: "Design a scalable system (e.g., design Twitter, design a URL shortener). More common at junior+ levels. Google and Meta include this even for new grads." },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#F5F5F0] border border-[#E5E5E0] flex items-center justify-center text-xs font-bold text-[#6B6B6B]">
              {i + 1}
            </div>
            <div>
              <p className="font-semibold text-[#0D0D0D] text-sm">{item.label}</p>
              <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Divider label="Data Structures & Algorithms" />
      <p className="text-sm text-[#6B6B6B] mb-6">These are the categories that appear most often in technical interviews. Study them in roughly this order — essentials first, then high priority, then medium. <strong className="text-[#0D0D0D]">Aim for 150+ medium problems by the start of junior year recruiting</strong> — this is the minimum floor, not a stretch goal.</p>

      <div className="space-y-3">
        {dsa.map((item) => (
          <div key={item.topic} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
            <span className={`flex-shrink-0 text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full h-fit mt-0.5 ${
              item.priority === "Essential" ? "text-[#C45B3D] bg-[#FDF3EF]" :
              item.priority === "High" ? "text-[#1A1A2E] bg-[#EEF2FF]" :
              "text-[#6B6B6B] bg-[#F5F5F0]"
            }`}>
              {item.priority}
            </span>
            <div>
              <p className="font-semibold text-[#0D0D0D] text-sm">{item.topic}</p>
              <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Divider label="How to Practice" />
      <div className="bg-[#F5F5F0] border border-[#E5E5E0] rounded-xl p-6 mb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF] mb-3">LeetCode</p>
        <p className="text-sm text-[#6B6B6B] leading-relaxed mb-3">The standard. Start with easy problems to build confidence, move to medium, and work through common patterns — not random problems. Focus on recognizing problem types, not memorizing solutions.</p>
        <p className="text-sm text-[#6B6B6B] leading-relaxed">Study by pattern: sliding window, two pointers, BFS/DFS, dynamic programming, binary search on the answer. When you see a new problem, ask: what pattern does this look like? That's the skill the interview tests.</p>
      </div>
      <div className="bg-[#F5F5F0] border border-[#E5E5E0] rounded-xl p-6 mb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF] mb-3">Mock Interviews</p>
        <p className="text-sm text-[#6B6B6B] leading-relaxed">Solo LeetCode is not enough. Practice explaining your thinking out loud while solving under time pressure. Use Pramp (free peer mock interviews), interviewing.io (practice with real engineers), or sit down with a friend and take turns. Record yourself at least once — watching yourself is uncomfortable and useful.</p>
      </div>

      <Divider label="The Interview Itself" />
      <div className="space-y-3">
        {interviewSteps.map((s, i) => (
          <div key={i} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1A1A2E] flex items-center justify-center text-xs font-bold text-white">
              {i + 1}
            </div>
            <div>
              <p className="font-semibold text-[#0D0D0D] text-sm">{s.label}</p>
              <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{s.desc}</p>
              {s.tips && (
                <ul className="mt-2 space-y-1">
                  {s.tips.map((t, ti) => (
                    <li key={ti} className="flex gap-2 text-xs text-[#9CA3AF]">
                      <span>→</span>{t}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      <Divider label="Systems Design" />
      <p className="text-sm text-[#6B6B6B] leading-relaxed mb-5">For juniors and new grads, systems design rounds test your ability to think about scale and trade-offs — not your ability to design production infrastructure. The questions are open-ended: design a URL shortener, design a messaging app, design a ride-sharing service.</p>
      <div className="space-y-3">
        {[
          { label: "Clarify requirements.", desc: "Functional (what does it do?) and non-functional (how many users? what's the latency requirement?)." },
          { label: "Estimate scale.", desc: "How many requests per second? How much data storage? Back-of-the-envelope math matters." },
          { label: "High-level design.", desc: "Draw the major components — clients, load balancers, servers, databases, caches, CDNs." },
          { label: "Deep dive into one component.", desc: "The interviewer will push you to go deeper somewhere. Know databases (SQL vs NoSQL trade-offs), caching (Redis), and message queues (Kafka)." },
          { label: "Discuss trade-offs.", desc: "Every design decision has trade-offs. Name them. Showing you understand trade-offs is the point." },
        ].map((s, i) => (
          <div key={i} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#F5F5F0] border border-[#E5E5E0] flex items-center justify-center text-xs font-bold text-[#6B6B6B]">
              {i + 1}
            </div>
            <div>
              <p className="font-semibold text-[#0D0D0D] text-sm">{s.label}</p>
              <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <Callout type="tip">
        Resources: <em>System Design Interview</em> by Alex Xu, Grokking the System Design Interview (Educative), and YouTube (ByteByteGo is excellent).
      </Callout>

      <Divider label="Behavioral Interview" />
      <p className="text-sm text-[#6B6B6B] mb-6">Every company does behavioral interviews. Prepare with the same rigor as the technical screen. Use STAR: Situation, Task, Action, Result. Be specific — numbers and outcomes matter.</p>

      <div className="space-y-3">
        {behavioral.map((item, i) => (
          <div key={i} className="border border-[#E5E5E0] rounded-xl p-5 bg-white">
            <div className="bg-[#0F172A] text-white rounded-lg px-4 py-3 mb-4">
              <p className="text-xs text-[#6B6B6B] mb-1">Interview question</p>
              <p className="text-sm font-medium">&ldquo;{item.q}&rdquo;</p>
            </div>
            <p className="text-sm text-[#6B6B6B] leading-relaxed">{item.tip}</p>
          </div>
        ))}
      </div>

      <Divider label="When to Start Preparing" />
      <div className="space-y-3">
        {[
          { label: "Freshman year", desc: "Start LeetCode easy problems. Get comfortable with arrays, strings, and hash maps." },
          { label: "Sophomore year", desc: "Move to medium problems. Do 2–3 problems per week minimum. Start doing mock interviews with friends." },
          { label: "Junior year (before recruiting)", desc: "150+ problems done, patterns internalized, behavioral stories prepared. By September of junior year you should be interviewing-ready." },
        ].map((item, i) => (
          <div key={i} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#1A1A2E] flex items-center justify-center text-xs font-bold text-white">
              {i + 1}
            </div>
            <div>
              <p className="font-semibold text-[#0D0D0D] text-sm">{item.label}</p>
              <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <Callout type="warn">
        The people who interview well are not smarter than you. They started earlier and practiced more. That's it. Start now.
      </Callout>

      <div className="mt-12 flex flex-col sm:flex-row gap-3">
        <Link href="/careers/software-engineering/roadmap" className="inline-flex items-center gap-2 px-5 py-3 bg-[#1A1A2E] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer">
          ← Back to Roadmap
        </Link>
        <Link href="/careers/resources" className="inline-flex items-center gap-2 px-5 py-3 border border-[#E5E5E0] text-[#0D0D0D] text-sm font-semibold rounded-lg hover:border-[#1A1A2E] transition-colors cursor-pointer">
          Resume & Templates <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
