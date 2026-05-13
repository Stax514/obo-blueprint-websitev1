import Link from "next/link";

const frameworks = [
  { id: "product-design", label: "Product Design", color: "text-[#F4A825]" },
  { id: "favorite-product", label: "Most/Least Favorite Product", color: "text-[#059669]" },
  { id: "strategy", label: "Strategy", color: "text-[#7C3AED]" },
  { id: "gtm", label: "Go-to-Market (GTM)", color: "text-[#D97706]" },
  { id: "estimation", label: "Estimation", color: "text-[#0891B2]" },
  { id: "ab-testing", label: "A/B Testing", color: "text-[#BE185D]" },
  { id: "metrics", label: "Metrics", color: "text-[#16A34A]" },
  { id: "root-cause", label: "Root Cause Analysis", color: "text-[#EA580C]" },
  { id: "decision-making", label: "Decision-Making", color: "text-[#4F46E5]" },
  { id: "behavioral", label: "Behavioral (STAR)", color: "text-[#0D0D0D]" },
];

function Section({ id, title, color, steps, example }: {
  id: string; title: string; color: string;
  steps: { label: string; desc: string; tips?: string[] }[];
  example: { question: string; steps: { label: string; content: string; bullets?: string[] }[] };
}) {
  return (
    <div id={id} className="year-block mb-16">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px flex-1 bg-[#E2E8F0]" />
        <h2 className={`text-xl font-extrabold ${color} whitespace-nowrap`}>{title}</h2>
        <div className="h-px flex-1 bg-[#E2E8F0]" />
      </div>

      {/* Framework steps */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-[#9CA3AF] mb-4">The Framework</h3>
        <div className="space-y-3">
          {steps.map((s, i) => (
            <div key={i} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#F5F5F0] border border-[#E5E5E0] flex items-center justify-center text-xs font-bold text-[#6B6B6B]">
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
      </div>

      {/* Walkthrough */}
      <div className="bg-[#F5F5F0] border border-[#E5E5E0] rounded-xl p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF] mb-2">Full Walkthrough</p>
        <div className="bg-[#0F172A] text-white rounded-lg px-4 py-3 mb-5">
          <p className="text-xs text-[#6B6B6B] mb-1">Interview question</p>
          <p className="text-sm font-medium">&ldquo;{example.question}&rdquo;</p>
        </div>
        <div className="space-y-4">
          {example.steps.map((s, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-6 text-xs font-bold text-[#9CA3AF] pt-0.5">{i + 1}.</div>
              <div>
                <p className="text-sm font-semibold text-[#0D0D0D] mb-1">{s.label}</p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">{s.content}</p>
                {s.bullets && (
                  <ul className="mt-2 space-y-1">
                    {s.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-2 text-xs text-[#6B6B6B]">
                        <span className="text-[#9CA3AF]">→</span>{b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function InterviewsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Header */}
      <div className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#F4A825]">Interview Guide</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mt-2 mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          PM Interview Frameworks
        </h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-6">
          No matter what question they throw at you, having the right framework equips you with all the tools you need. Learn the frameworks. Internalize them. Then adapt them — don&apos;t copy-paste. Being robotic is worse than going off-script.
        </p>
        <div className="bg-[#FFFBEB] border-l-4 border-[#D97706] p-4 rounded-r-lg text-sm text-[#374151]">
          <strong>Two rules for every PM interview:</strong> (1) Ask for a moment to think before answering — you don&apos;t need to respond immediately. (2) Be yourself — frameworks are tools, not scripts. Your creativity, personal experiences, and genuine thinking are what actually impress interviewers.
        </div>
      </div>

      {/* Jump nav */}
      <div className="mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF] mb-3">Jump to framework</p>
        <div className="flex flex-wrap gap-2">
          {frameworks.map((f) => (
            <a key={f.id} href={`#${f.id}`}
              className="px-3 py-1.5 text-sm font-medium border border-[#E5E5E0] rounded-lg text-[#6B6B6B] hover:border-[#F4A825] hover:text-[#F4A825] transition-colors">
              {f.label}
            </a>
          ))}
        </div>
      </div>

      {/* ── PRODUCT DESIGN ─────────────────────────────────────── */}
      <Section
        id="product-design"
        title="Product Design"
        color="text-[#F4A825]"
        steps={[
          { label: "Clarifying Questions", desc: "Before diving in, clarify the problem space. Ask about the main objective, constraints, user environments, and how the product fits the company's strategy." },
          { label: "Identify Company Objective + Product Goal + Competitors", desc: "What is the company trying to accomplish? What is this product/feature meant to do? Who else is solving a similar problem and how will you differentiate?" },
          { label: "Identify User Groups", desc: "Segment the audience into distinct user types. After identifying multiple groups, pick one or two to prioritize based on alignment with company goals. If the interviewer asks which to focus on, they'll usually turn it back to you — pick the one that delivers the most value." },
          { label: "Select Pain Points", desc: "For your chosen user group, identify the key challenge your product should solve. Focus on one pain point that's important, frequent, and solvable." },
          { label: "Ideate Solutions", desc: "Brainstorm at least 3 different ideas. Think big — unconventional ideas are welcome as long as they connect to the pain point. Each idea should clearly map to the problem." },
          { label: "Discuss Trade-offs and Prioritize", desc: "Pick the best solution and explain why. Weigh factors: alignment with business goal, difficulty to build, potential impact. Show strategic and practical thinking." },
        ]}
        example={{
          question: "How would you design an app for plant owners?",
          steps: [
            { label: "Clarifying Questions", content: "Ask what the main business objective is (improve plant owners' lives? increase sales?), target demographic (beginners, experts, all?), type of plants (houseplants, garden?), and platform (mobile, desktop, both?)." },
            { label: "Company Objective + Product Goal + Competitors", content: "Company objective: create a new revenue stream by tapping into the houseplant trend or build a loyal user base through subscriptions. Product goal: help users track plant care schedules, provide reminders, and offer customized tips. Competitors: Planta and Blossom — identify gaps like lack of community, poor reminder systems, or limited plant species support." },
            { label: "User Groups", content: "Younger plant owners (18-25): busy, smaller spaces, newer to plant care. Older owners (26-50): larger collections, need organization. Elderly (60+): may be forgetful, sentimental plants. Home plant owners: focused on indoor care. Gardeners: outdoor, weather-dependent needs." },
            { label: "Pain Points Selected", content: "Focus on younger plant owners: they don't know the best conditions for their plant (sunlight, water), forget to water or move plants, and often only have 1-2 plants so no routine exists." },
            { label: "Solutions Brainstormed", content: "1) Plant Scanner & Database: scan barcode or look up by name → get personalized care instructions. 2) 'My Plants' section: add plants and receive tailored care reminders. 3) Interactive Plant Care Schedule: dynamic schedules that adjust based on user feedback. 4) Weather Integration for Gardeners: real-time advice based on forecasts." },
            { label: "Prioritize and Recommend", content: "Build Plant Scanner + My Plants section first. These provide the most value across all user groups and directly address the core pain points. Weather integration and dynamic schedules are phase 2. Success metrics: daily active users, plant survival rate user reports, app store ratings.", bullets: ["High priority: Plant Scanner (solves core pain point for all users)", "High priority: My Plants section (keeps users returning)", "Medium: Interactive schedule (adds complexity but valuable)", "Low/medium: Weather integration (niche audience)"] },
          ],
        }}
      />

      {/* ── MOST/LEAST FAVORITE PRODUCT ──────────────────────── */}
      <Section
        id="favorite-product"
        title="Most/Least Favorite Product"
        color="text-[#059669]"
        steps={[
          { label: "Business Objective — Outline + Describe the product", desc: "Briefly explain how you'll structure your answer. Describe what the product is and what it's designed to do. State the broader business objective it supports (growth, retention, revenue)." },
          { label: "User Problems — Decide a user type + Identify issues", desc: "Choose one specific type of user to focus on. Point out 2–3 common pain points they experience when using similar products." },
          { label: "Solutions — How it outperforms + Trade-offs + Improvements", desc: "Show how the product effectively addresses those pain points better than competitors. Acknowledge limitations and suggest realistic improvements." },
          { label: "Summarize", desc: "Wrap up by restating why this product stands out (or falls short) based on user experience and business impact." },
        ]}
        example={{
          question: "What's your most favorite product and why? — Notion",
          steps: [
            { label: "Business Objective", content: "Notion is an all-in-one productivity tool combining note-taking, task management, databases, wikis, and project tracking into a single workspace. Business objective: become the central productivity and knowledge platform for individuals and organizations, driving growth through freemium adoption, workspace expansion, and paid enterprise plans." },
            { label: "User Problems", content: "Focus on students and small teams. Students: scattered notes across platforms, inflexible tools (Word/Google Docs don't allow dynamic org), poor task tracking across separate tools. Teams: knowledge silos (no shared space for decisions and docs), constant context switching between Slack/Trello/Docs, rigid project management tools." },
            { label: "Solutions", content: "Notion solves these by offering a unified, flexible workspace. For students: a centralized hub with linked notes, assignments, and Kanban/calendar views. For teams: shared knowledge base replacing multiple tools, supporting agile workflows better than rigid platforms like Jira." },
            { label: "Trade-offs and Improvements", content: "Limitations: steep learning curve due to blank-slate design, performance lag in large workspaces, limited offline functionality. Improvements: smarter onboarding based on user type (student, manager, writer) with contextual templates; optimize rendering in large team workspaces; invest in robust offline support.", bullets: ["Onboarding: smarter, contextual starter templates", "Performance: optimize rendering and sync in large databases", "Offline mode: confident reliability for mobile and travel users"] },
            { label: "Summarize", content: "Notion's customizability, unification of tools, and user-centric design philosophy make it powerful for both individuals and teams. By improving onboarding, performance, and offline support, Notion can continue scaling as the central tool for productivity, education, and collaboration." },
          ],
        }}
      />

      {/* ── STRATEGY ───────────────────────────────────────────── */}
      <Section
        id="strategy"
        title="Strategy"
        color="text-[#7C3AED]"
        steps={[
          { label: "Clarify the Problem", desc: "Define the problem space and confirm your assumptions. Who are the core users? What business goals are tied to this initiative? How will you know if the strategy is successful?" },
          { label: "Define the Product, Company, or Industry Goals", desc: "Once you understand the challenge, define the most important objectives — user engagement, profitability, market share, retention, or long-term innovation." },
          { label: "Define the Landscape", desc: "Look outward to identify market trends, competitive threats, and technology shifts. What are competitors doing? Are there shifts in user behavior? New technologies disrupting the space?" },
          { label: "Define Guiding Principles", desc: "Before jumping into solutions, establish principles that will guide decision-making — things like 'prioritize user trust' or 'invest in scalable solutions.' These are your rules of the road." },
          { label: "Establish an Option Set", desc: "Brainstorm 3–5 distinct strategic options. Evaluate each based on: alignment with company goals, potential impact, level of risk, resources required, and opportunities for synergy." },
          { label: "Make Your Decision and Argue for It", desc: "Select the most promising option. Justify it using your guiding principles. Cover: scale, impact, cost, risk, likelihood of success, and additional benefits." },
          { label: "Evaluate and Recap", desc: "Talk through pros and cons, how you'd reduce key risks, adjustments with more time/resources, and how your decision positions the company for long-term success." },
        ]}
        example={{
          question: "What's the biggest threat to YouTube over the next 5 years?",
          steps: [
            { label: "Clarify the Problem", content: "Clarify: Are we focused on external or internal threats? Is the threat to revenue, user growth, or engagement? Any particular trends to consider (AI, social media shifts)? Answer: external threats affecting user base and revenue, including AI and emerging platforms." },
            { label: "YouTube's Goals", content: "Maximize user engagement (keep users on platform longer → more ad revenue). Maintain dominance in video content over TikTok, Instagram, and emerging platforms. Drive monetization through ads, premium subscriptions, and creator monetization." },
            { label: "Competitive Landscape", content: "Competitors: TikTok (short-form, younger audiences), Instagram Reels/Snapchat (similar short-form), streaming services (Netflix, Twitch competing for screen time). Technology: AI-driven content creation, VR/AR platforms. Regulatory pressure on content moderation." },
            { label: "Guiding Principles", content: "User engagement is critical — any threat reducing time on platform is a top concern. Revenue impact matters. Long-term dominance — especially attracting younger users — is crucial for the future audience pool and ad revenue." },
            { label: "Option Set", content: "1) Short-form video platforms (TikTok): rapid growth pulling younger audiences away. 2) AI-generated content: could reduce demand for user-generated content. 3) VR/AR platforms: younger audiences may shift to more immersive, interactive platforms. 4) Content moderation/regulations: user dissatisfaction or platform restrictions." },
            { label: "Decision: Short-form platforms (TikTok)", content: "TikTok's rapid growth among younger users is eroding YouTube's dominance. Scale and impact: users spend less time on YouTube when engaging with short-form TikTok content. Likelihood: TikTok's AI-driven recommendation system is superior and addictive. YouTube Shorts hasn't gained the same traction yet." },
            { label: "Evaluate and Recap", content: "Trade-off: YouTube has a stronghold on longer-form, tutorial, and educational content that TikTok doesn't specialize in. Mitigation: double down on improving YouTube Shorts — better UX, enhanced recommendation algorithm, and better creator monetization to keep creators on the platform.", bullets: ["Improve YouTube Shorts to compete directly", "Invest in creator incentives to keep them from migrating", "Enhance recommendation algorithm for short-form content"] },
          ],
        }}
      />

      {/* ── GTM ────────────────────────────────────────────────── */}
      <Section
        id="gtm"
        title="Go-to-Market (GTM) Strategy"
        color="text-[#D97706]"
        steps={[
          { label: "Define the Landscape", desc: "Ask clarifying questions about the product's purpose, how it fits the existing lineup, what's driving the timing, what metrics define success, and what resources are available. Then look at broader market trends and risks." },
          { label: "Identify a GTM Strategy", desc: "Phase 1: Find Your Entry Point — define the initial user segment most likely to adopt early and figure out how to reach them. Phase 2: Drive Adoption and Retention — outline tactics to encourage trial and continued use." },
          { label: "Select a GTM Strategy Type", desc: "Inbound: attract users through valuable content (blogs, tutorials, creator partnerships) — best for long-term trust and organic growth. Sales-driven: use reps or B2B partnerships for high-value customers. Demand Generation: create buzz through marketing campaigns, influencers, or PR events — ideal for consumer-facing launches." },
          { label: "Make Your Decision and Argue for It", desc: "Select the strategy that provides the most impact. Align with business goals, audience behavior, and product strengths." },
          { label: "Evaluate and Recap", desc: "Call out trade-offs, risks, how you'd reduce low adoption, and why your plan sets up long-term success." },
        ]}
        example={{
          question: "How would you launch a new product recommendation carousel for Amazon?",
          steps: [
            { label: "Clarifying Questions", content: "What is the goal? (increase user engagement or boost conversion). How does it fit existing features ('Customers Also Bought', etc.)? Is this category-specific or site-wide? Answer: personalized recommendations using ML, site-wide, goal is to improve UX and boost sales." },
            { label: "GTM Strategy: Phase 1 — User Segment", content: "Target: Amazon Prime members. Reasons: they shop frequently and trust recommendations, cross-category purchases make personalized recs valuable, higher retention rates make them ideal for success evaluation. Reach: email, app notifications, homepage banners targeted at Prime members." },
            { label: "GTM Strategy: Phase 2 — Drive Adoption and Retention", content: "Acquisition: incentivize initial usage with discounts on items purchased through the carousel; personalized onboarding explaining how recommendations work. Retention: continuously optimize with browsing behavior, wishlists, and purchase history; gamification (like/dislike recommendations); Prime-exclusive deals within the carousel." },
            { label: "GTM Type: Demand Generation", content: "Amazon has the reach and resources to execute a large-scale campaign. Personalized shopping experiences have been proven to drive engagement. Demand gen tactics: virtual launch event demonstrating AI/ML capabilities, influencer partnerships with frequent Amazon shoppers, email campaigns highlighting new feature, time-limited launch deals." },
            { label: "Decision and Argument", content: "Demand generation is right because it creates buzz around a consumer-facing feature. Amazon's internal channels (email, homepage, app) make this cost-effective. High impact among Prime members creates positive flywheel. Easily scalable to non-Prime users after initial success." },
            { label: "Evaluate and Recap", content: "Trade-off: Prime-only focus initially may limit exposure to non-Prime users. Mitigation: expand campaign after Prime launch, use insights to improve personalization for broader segments. Long-term success measured through: user engagement lift, conversion rate increase, carousel's contribution to overall revenue.", bullets: ["KPIs: engagement lift, conversion rate, revenue contribution", "After Prime success: expand to all Amazon users", "Use A/B testing on different carousel positions and messaging"] },
          ],
        }}
      />

      {/* ── ESTIMATION ─────────────────────────────────────────── */}
      <Section
        id="estimation"
        title="Estimation"
        color="text-[#0891B2]"
        steps={[
          { label: "Define the Scope", desc: "Ask clarifying questions to remove ambiguity — any specific inclusions/exclusions? Assume real-world averages or ideal conditions? Specific region, time frame, or context?" },
          { label: "Break the Problem Down", desc: "Identify a basic formula or structure that captures the approach. Divide it into smaller, logical components that can each be reasonably estimated." },
          { label: "Estimate Unknowns", desc: "Assign reasonable values to each component using logic, real-world benchmarks, or known references. If a number is hard to estimate directly, break it into simpler pieces. Be transparent in your reasoning — process matters more than precision." },
          { label: "Run the Numbers", desc: "Plug estimates into the equation and compute. Convert units where needed, round complicated numbers, and walk through each step so your logic is easy to follow." },
          { label: "Explain Why You Might Be Wrong", desc: "Acknowledge areas of uncertainty. Which assumptions were solid vs. rough guesses? What data would make this more accurate? Does the final result feel realistic?" },
        ]}
        example={{
          question: "Estimate the number of ride-share rides in San Francisco in one day.",
          steps: [
            { label: "Clarifying Questions", content: "Time of year: average weekday. All ride-share platforms (Uber, Lyft). Individual rides only (no pooled). Within SF city limits only." },
            { label: "Break it Down", content: "Formula: Total rides = (Total SF population) × (% using ride-shares daily) × (average rides per person per day). Components: SF population, percentage who use ride-share on a given day, average number of trips per person." },
            { label: "Estimate Unknowns", content: "SF population: ~875,000. Percentage using ride-share daily: ~10% (considering commuters, tourists, residents who don't own cars). Average rides per person: ~2 (one trip to destination, one back)." },
            { label: "Run the Numbers", content: "Total rides = 875,000 × 10% × 2 = 875,000 × 0.10 × 2 = 175,000 rides per day. Answer: ~175,000 ride-share rides on an average weekday in SF." },
            { label: "Why You Might Be Wrong", content: "Tourists and visitors from outside the city aren't explicitly accounted for — this could increase the number significantly. Ride frequency varies: delivery workers or business travelers might take 4–5 rides/day, not 2. The 10% assumption could fluctuate based on BART/Muni availability or weather. With more time: look at Uber/Lyft reported metrics for SF, factor in tourism data, and account for time-of-day variance." },
          ],
        }}
      />

      {/* ── A/B TESTING ────────────────────────────────────────── */}
      <Section
        id="ab-testing"
        title="A/B Testing"
        color="text-[#BE185D]"
        steps={[
          { label: "Define the Hypothesis", desc: "State clearly what you're trying to prove or disprove. 'If we introduce [X], then users will [do Y].' This grounds the experiment in purpose and ensures a testable outcome." },
          { label: "Outline the Experiment Setup", desc: "What element or feature is being modified? How does the variation differ from the control? Who is the experiment targeting — which user segment, platform, or geography?" },
          { label: "Define Key Metrics", desc: "Identify actionable metrics that reflect changes in user behavior: click-through rates, time on page, feature engagement, conversion rate, drop-off rate. Don't overload — pick the metrics that directly reflect the outcome you care about." },
          { label: "Explain How You'll Interpret Results", desc: "What would success look like? What threshold of improvement justifies rolling out the change? How do you balance short-term gains vs. long-term impact?" },
          { label: "Anticipate Trade-offs and Risks", desc: "Could this change create confusion or frustration for some users? Might it affect load time, distract from other features, or cause unintended behavior? Are there brand, accessibility, or fairness risks?" },
        ]}
        example={{
          question: "What experiments would you run on Google's homepage to increase search queries?",
          steps: [
            { label: "Hypothesis", content: "Users may search more often if the search bar is more prominent or visually engaging. Hypothesis: making the search bar stand out more (visually or interactively) will lead to an increase in search queries." },
            { label: "Experiment Setup", content: "A/B test modifying Google's homepage search bar for a randomized subset of users globally. Variation 1: Highlighted Search Bar — larger, with a noticeable color border (blue or yellow), or animate slightly on hover. Variation 2: Search Prompt — display a suggestion inside the bar (e.g., 'What are you curious about today?') that disappears on click." },
            { label: "Key Metrics", content: "Primary: search query volume (total queries in each variation vs. control). Secondary: CTR on search bar (% of users who interact), time to first query (how long before users start typing), bounce rate (users who leave without interacting)." },
            { label: "Interpret Results", content: "Success: significant increase in search query volume and CTR vs. control. Time to first query gives insight into ease of discovery. Lower bounce rate suggests better homepage engagement. Business impact: more queries → more ad impressions → higher ad revenue." },
            { label: "Trade-offs and Risks", content: "Visual distraction: making the bar too prominent could detract from Google's minimalist aesthetic, which users appreciate. Over-suggestion: too many prompts could cause fatigue or make users feel pushed into queries. False positives: more bar interactions doesn't guarantee quality queries or better search completion. Engineering cost: assessing whether expected query volume increase is worth implementation cost.", bullets: ["Test with a small % of users first before expanding", "Ensure animation doesn't affect page performance or accessibility", "Monitor query quality, not just quantity, as a guardrail metric"] },
          ],
        }}
      />

      {/* ── METRICS ────────────────────────────────────────────── */}
      <Section
        id="metrics"
        title="Metrics"
        color="text-[#16A34A]"
        steps={[
          { label: "Clarify the Scope", desc: "Remove ambiguity — are we evaluating an entire product or one feature? Short-term or long-term success? All users or a specific segment?" },
          { label: "Define the Goals", desc: "What is the core purpose of this product/feature? How does it contribute to the company's broader mission? What outcome are we trying to achieve — growth, retention, revenue, engagement?" },
          { label: "Identify Key User Behaviors", desc: "Map out the user journey. What actions do users need to take for the product to deliver value? Walk through the flow step by step. Where do drop-offs or friction points occur?" },
          { label: "Define Key Metrics", desc: "Types to consider: Engagement (DAUs, MAUs, session length, retention), Conversion (CTR, completion rate, funnel drop-off), Business (revenue, LTV, CAC, gross margin), Quality (bug backlog, NPS, resolution time), Guardrail (churn, unsubscribes, negative feedback).", tips: ["Always include both success indicators AND guardrail metrics", "Guardrails watch for unintended consequences as you optimize"] },
          { label: "Evaluate and Reflect", desc: "Is this metric directly tied to user value or business success? Is it easy to measure and interpret? Where might it fall short or give misleading signals?" },
        ]}
        example={{
          question: "What metrics would you measure as a PM launching a new polls feature on WhatsApp?",
          steps: [
            { label: "Clarify Scope", content: "Feature: adding polls to group chats. Target: all group chat users. Objective: increase engagement and help groups collaborate more efficiently." },
            { label: "Define Goals", content: "Increase engagement: encourage more interactions within group chats by making decision-making easier. User retention: longer, more meaningful interactions should contribute to higher retention. Improve group chat experience: enhance how groups collaborate, making WhatsApp more valuable." },
            { label: "Key User Behaviors", content: "User journey: Open Group Chat → Create Poll → Vote on Poll → Discuss Poll Results → Take action based on results. Track each step for drop-offs and friction." },
            {
              label: "Key Metrics", content: "Product metrics: poll creation rate (% of users who create a poll), poll engagement rate (% of group members who vote), DAU, feature adoption rate (% of group chats that used polls at least once). Business metrics: retention rate, churn rate (guardrail), user LTV. Quality metrics: feature usability feedback, bug backlog. Guardrail metrics: time spent per session (ensure no unnecessary friction), feature-related complaints.", bullets: [
                "North Star: poll engagement rate — are group members actually voting?",
                "Guardrail: time per session — are polls slowing down conversations?",
                "Leading indicator: poll creation rate — are people discovering the feature?",
              ]
            },
            { label: "Evaluate and Reflect", content: "Poll Creation Rate is crucial but doesn't tell us if the feature is used repeatedly (add repeat usage tracking). Engagement Rate shows success but could inflate from novelty — monitor for sustained use over time. DAU tells us overall engagement but not feature-specific growth (combine with feature retention rate). Time Spent: more time isn't always better — could mean feature is cumbersome rather than valuable." },
          ],
        }}
      />

      {/* ── ROOT CAUSE ─────────────────────────────────────────── */}
      <Section
        id="root-cause"
        title="Root Cause Analysis"
        color="text-[#EA580C]"
        steps={[
          { label: "Clarify the Problem and Understand the Context", desc: "Ask clarifying questions: timeframe, affected users, specific platforms, how the problem surfaced (user reports, internal metrics), any known details. Don't solve the wrong problem." },
          { label: "Create Initial Hypotheses", desc: "Brainstorm possible categories of causes without being too specific yet. Common categories: technical bugs, recent product changes, internal process/policy changes, external factors (seasonality, competitors, news events)." },
          { label: "Collect and Analyze Data", desc: "Dig into data to validate or eliminate hypotheses. Slice by region, user type, platform, time period. Look for correlations with product changes, ops changes, or technical issues." },
          { label: "Refine and Reassess Your Hypotheses", desc: "As evidence emerges, re-prioritize your list. Which explanations hold up? Which can you rule out? Is there additional data that would help clarify?" },
          { label: "Identify the Root Cause", desc: "Once you have supporting evidence, identify the most likely root cause. If you've communicated clearly throughout, this step is just summarizing your conclusion." },
          { label: "Recommend Next Steps", desc: "What's the best short-term fix? What long-term solution prevents recurrence? Are there processes or tests that would've caught this earlier?" },
        ]}
        example={{
          question: "You're a PM at Lyft and there's been a 20% increase in ride cancellations. What would you do?",
          steps: [
            { label: "Clarifying Questions", content: "When did the increase begin — sudden spike or gradual trend? Is it consistent across all regions or localized? Have there been recent app or policy changes? What's the current baseline cancellation rate? Any external events (strikes, regulations, weather) that could explain it?" },
            { label: "Initial Hypotheses", content: "Technical issues: a bug or performance problem causing users to cancel more. Product changes: recent app or policy updates negatively affecting user behavior. Operational changes: changes in driver availability or pricing structures. External events: weather, local events, or regulations." },
            { label: "Collect and Analyze Data", content: "Technical data: error logs, crash reports, app performance metrics, any new error rates correlating with cancellations. Product/policy: review recent app updates and user feedback. Operational: driver availability vs. cancellation rate by time/area, recent pricing changes. External: weather data, local news events in high-cancellation areas." },
            { label: "Refine Hypotheses", content: "If technical: check if error timing aligns with cancellation spike. If product changes: does user feedback indicate dissatisfaction with specific new behavior? If operational: does data show mismatch between driver supply and demand in spike areas? If external: does the spike correlate geographically and temporally with weather or local events?" },
            { label: "Root Cause", content: "Assuming data shows correlation between a recent app update and the spike — root cause is likely a bug or UX regression introduced in that update. Alternatively, if data points to pricing changes or driver availability, those could be the cause." },
            { label: "Next Steps", content: "Technical bug: deploy a patch immediately, implement rollback plan if needed, communicate resolution to users. Product change: review user feedback, address issues, consider rolling back or modifying. Operational: optimize driver distribution, revisit pricing. External: provide better communication or updates during similar future events.", bullets: ["Monitor cancellation rate daily post-fix to verify resolution", "Add an alerting system for cancellation rate spikes > X% over baseline", "Implement a pre-launch checklist to catch these issues before they reach production"] },
          ],
        }}
      />

      {/* ── DECISION MAKING ────────────────────────────────────── */}
      <Section
        id="decision-making"
        title="Decision-Making"
        color="text-[#4F46E5]"
        steps={[
          { label: "Clarify the Situation", desc: "Clear up vague terms and metrics. What does this metric mean and how is it measured? What's the baseline? Are there specific user segments or platforms affected? Is the shift temporary or part of a trend?" },
          { label: "Define Your Decision Criteria", desc: "Before weighing options, state what factors should guide your decision: core business/product goals, broader market dynamics, the company's long-term mission, key user needs." },
          { label: "Explore Possible Options", desc: "Propose 3–4 realistic paths forward. For each: upside, downside, risks, technical dependencies, key trade-offs." },
          { label: "Make a Decision and Explain Your Reasoning", desc: "Choose the option that best aligns with your criteria and explain why. Recap: factors you prioritized, why this option fits, how it supports the product or company's success." },
          { label: "Recommend Next Steps and Mitigations", desc: "Acknowledge possible challenges and show how you'd adapt. Consider: compromises that reduce risk, phased or tested rollout, how to monitor success and respond quickly if something goes wrong." },
        ]}
        example={{
          question: "You're a PM at Netflix. A faster UI increases session starts but reduces average session length. Should you roll it out to all users?",
          steps: [
            { label: "Clarify", content: "What's the baseline for session starts and session length? How significant is the increase vs. decrease — does total watch time go up or down? What design changes caused the behavior shift? Is user feedback positive about responsiveness or negative about shortened sessions?" },
            { label: "Decision Criteria", content: "Strategic goal: is Netflix focused on engagement frequency or total time per user? Market dynamics: does a faster UI improve competitiveness vs. TikTok/YouTube Shorts? User needs: does it solve a real pain point (app load time, friction finding content)? Company mission: does it make Netflix more seamless and accessible?" },
            {
              label: "Options", content: "1) Roll out as-is: more session starts → better habit formation. Risk: shorter sessions reduce binge behavior and total watch time. 2) Roll back: preserves session depth and LTV. Risk: sacrifices re-engagement gains. 3) Iterate for balance: preserve speed benefits while introducing cues to encourage longer sessions. Requires extra time and testing. 4) Conduct more research: gather data on whether short sessions reduce long-term retention before deciding.", bullets: [
                "Option 1: good for frequency, risky for depth and LTV",
                "Option 2: safe but sacrifices a potentially real improvement",
                "Option 3: balanced — takes longer but de-risks the rollout",
                "Option 4: delays decision but could reveal critical data",
              ]
            },
            { label: "Decision: Iterate (Option 3)", content: "Faster session starts signal improved app engagement and user satisfaction. But a drop in session length could negatively impact content completion, binge habits, and perceived value — all tied to retention. Before scaling, refine by introducing subtle prompts: auto-previews, 'Continue Watching', personalized rows to encourage deeper viewing without losing speed benefits." },
            { label: "Next Steps", content: "Run A/B tests with hybrid UI versions combining speed improvements and features promoting longer session engagement. Segment by user type to see if short sessions affect light users differently from core subscribers. Track total watch time and completion rates as guardrail metrics alongside session count. Gather qualitative data through in-app surveys to understand why users leave sessions earlier.", bullets: ["Guardrail: ensure total watch time per user doesn't drop", "Phase rollout: start with 5% of users, monitor, then expand", "Set a 30-day evaluation window before making final rollout decision"] },
          ],
        }}
      />

      {/* ── BEHAVIORAL ─────────────────────────────────────────── */}
      <div id="behavioral" className="year-block mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-[#E2E8F0]" />
          <h2 className="text-xl font-extrabold text-[#0D0D0D] whitespace-nowrap">Behavioral (STAR Method)</h2>
          <div className="h-px flex-1 bg-[#E2E8F0]" />
        </div>

        <div className="mb-8">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[#9CA3AF] mb-4">The STAR Framework</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { letter: "S", word: "Situation", desc: "Set the scene. What was the context? What were the stakes?" },
              { letter: "T", word: "Task", desc: "What was your specific responsibility or challenge in that situation?" },
              { letter: "A", word: "Action", desc: "What did you personally do? Use 'I' not 'we'. Be specific and concrete." },
              { letter: "R", word: "Result", desc: "What happened? Quantify if possible. What did you learn?" },
            ].map((s) => (
              <div key={s.letter} className="p-4 border border-[#E5E5E0] rounded-lg bg-white flex gap-4">
                <div className="w-9 h-9 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">{s.letter}</div>
                <div>
                  <p className="font-semibold text-[#0D0D0D] text-sm">{s.word}</p>
                  <p className="text-xs text-[#6B6B6B] mt-0.5 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#F5F5F0] border border-[#E5E5E0] rounded-xl p-6">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[#9CA3AF] mb-4">Common Behavioral Questions for PM Interviews</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Tell me about a time you led a project from start to finish.",
              "Describe a time you had to make a difficult decision with incomplete data.",
              "Tell me about a failure. What did you do about it?",
              "Give an example of when you had to influence a team without direct authority.",
              "Describe a time you had a conflict with a teammate. How did you resolve it?",
              "Tell me about your proudest project or achievement.",
              "When did you have to prioritize competing deadlines? How did you decide?",
              "Tell me about a time you used data to make a decision.",
              "Describe a time you had to push back on a stakeholder or manager.",
              "What's a product you've improved or built, and how did you approach it?",
            ].map((q, i) => (
              <div key={i} className="p-3 bg-white border border-[#E5E5E0] rounded-lg text-sm text-[#374151]">
                &ldquo;{q}&rdquo;
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 bg-[#FFFBEB] border-l-4 border-[#D97706] p-4 rounded-r-lg text-sm text-[#374151]">
          <strong>Tip:</strong> Prepare 5–6 strong STAR stories that can be adapted to multiple questions. A story about a team conflict can also be a story about leadership, communication, or decision-making — depending on how you frame it.
        </div>
      </div>

      {/* Next */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link href="/careers/starter-project" className="group p-5 border border-[#E5E5E0] rounded-xl hover:border-[#F4A825] transition-colors">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF] mb-1">Next</p>
          <p className="font-bold text-[#0D0D0D] group-hover:text-[#F4A825] transition-colors">Build a Starter Project →</p>
          <p className="text-sm text-[#6B6B6B] mt-1">No experience? Build something real.</p>
        </Link>
        <Link href="/resources" className="group p-5 border border-[#E5E5E0] rounded-xl hover:border-[#F4A825] transition-colors">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#9CA3AF] mb-1">Also</p>
          <p className="font-bold text-[#0D0D0D] group-hover:text-[#F4A825] transition-colors">Templates & Resources →</p>
          <p className="text-sm text-[#6B6B6B] mt-1">Resume, cover letter, email templates, and more.</p>
        </Link>
      </div>
    </div>
  );
}
