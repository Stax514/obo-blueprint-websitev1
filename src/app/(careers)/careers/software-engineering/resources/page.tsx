import Link from "next/link";
import { ExternalLink } from "lucide-react";

const templates = [
  {
    title: "SWE Resume Template",
    desc: "Software engineering resume format with the right sections, project bullet structure, and GitHub/LeetCode placement.",
    href: "https://docs.google.com/document/d/1QAapl2egG76ipJ9Azwjfs5WeHug6GfrNQdCxUYS5A9Y/edit?usp=drive_link",
    color: "bg-[#1A1A2E]",
    label: "Open template",
  },
  {
    title: "Cold Outreach & LinkedIn Templates",
    desc: "Email and LinkedIn messages for reaching out to engineers, recruiters, and diversity program coordinators.",
    href: "https://docs.google.com/document/d/1VJBR_TZ4sQAnk47lE_P6rKRJ22-cgHuge8yWGR8jAzk/edit?usp=drive_link",
    color: "bg-[#059669]",
    label: "Open template",
  },
];

const tools = [
  { name: "LeetCode", desc: "The primary platform for DSA practice. Focus on Easy → Medium → Hard in that order. Track your progress by topic.", href: "https://leetcode.com" },
  { name: "NeetCode.io", desc: "Curated 150-problem list organized by pattern. Start here if LeetCode feels overwhelming.", href: "https://neetcode.io" },
  { name: "Grokking the Coding Interview", desc: "Pattern-based DSA learning. Best for building mental models of sliding window, two pointers, trees, etc.", href: "https://www.designgurus.io/course/grokking-the-coding-interview" },
  { name: "System Design Primer (GitHub)", desc: "Free, comprehensive system design resource. Read this cover to cover before any system design round.", href: "https://github.com/donnemartin/system-design-primer" },
  { name: "Google STEP / SWE Intern Programs", desc: "Official landing pages for Google STEP, Microsoft Explore, Meta University, and other early programs.", href: "https://buildyourfuture.withgoogle.com/programs/step" },
  { name: "NSBE Job Board", desc: "National Society of Black Engineers job board — internships and full-time roles with companies actively recruiting from NSBE.", href: "https://careers.nsbe.org" },
];

const reading = [
  { title: "Cracking the Coding Interview", author: "Gayle Laakmann McDowell", desc: "The definitive SWE interview prep book. Read it. Do the problems." },
  { title: "A Philosophy of Software Design", author: "John Ousterhout", desc: "How to write clean, modular code. Relevant for coding interviews and real engineering roles." },
  { title: "The Pragmatic Programmer", author: "Hunt & Thomas", desc: "Essential reading for understanding how professional software is actually built." },
];

export default function SWEResourcesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-10">
        <Link href="/careers/software-engineering" className="text-xs font-semibold text-[#6B7280] hover:text-[#1A1A2E] transition-colors">← Software Engineering</Link>
        <span className="block text-xs font-semibold uppercase tracking-widest text-[#1A1A2E] mt-4 mb-2">Resources</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          SWE Templates & Tools.
        </h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed">
          Everything you need to apply, prep, and land your first software engineering role.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-sm font-bold text-[#0D0D0D] uppercase tracking-widest mb-4">Templates</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {templates.map((t) => (
            <div key={t.title} className="border border-[#E5E5E0] rounded-xl p-5 bg-white flex flex-col gap-3">
              <div className={`w-8 h-8 rounded-lg ${t.color} flex items-center justify-center`}>
                <span className="text-white text-xs font-bold">T</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[#0D0D0D] text-sm mb-1">{t.title}</p>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">{t.desc}</p>
              </div>
              <a href={t.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1A1A2E] hover:text-[#F4A825] transition-colors">
                {t.label} <ExternalLink size={11} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-sm font-bold text-[#0D0D0D] uppercase tracking-widest mb-4">Platforms & Tools</h2>
        <div className="space-y-3">
          {tools.map((tool) => (
            <div key={tool.name} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
              <div className="flex-1">
                <p className="font-semibold text-[#0D0D0D] text-sm">{tool.name}</p>
                <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{tool.desc}</p>
              </div>
              <a href={tool.href} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 text-[#6B6B6B] hover:text-[#1A1A2E] transition-colors mt-0.5">
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-sm font-bold text-[#0D0D0D] uppercase tracking-widest mb-4">Reading List</h2>
        <div className="space-y-3">
          {reading.map((book) => (
            <div key={book.title} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#EEF2FF] flex items-center justify-center text-xs font-bold text-[#1A1A2E]">B</div>
              <div>
                <p className="font-semibold text-[#0D0D0D] text-sm">{book.title}</p>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-[#9CA3AF] mb-1">{book.author}</p>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">{book.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <Link href="/careers/software-engineering/interviews" className="inline-flex items-center gap-2 px-5 py-3 bg-[#1A1A2E] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer">
          ← Interview Prep
        </Link>
      </div>
    </div>
  );
}
