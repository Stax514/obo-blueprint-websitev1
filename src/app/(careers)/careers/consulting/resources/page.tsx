import Link from "next/link";
import { ExternalLink } from "lucide-react";

const templates = [
  {
    title: "Consulting Resume Template",
    desc: "Consulting-optimized resume format with the right sections, bullet structure, and emphasis on impact and leadership.",
    href: "https://docs.google.com/document/d/1QAapl2egG76ipJ9Azwjfs5WeHug6GfrNQdCxUYS5A9Y/edit?usp=drive_link",
    color: "bg-[#1B4332]",
    label: "Open template",
  },
  {
    title: "Cold Outreach & LinkedIn Templates",
    desc: "Email and LinkedIn messages for reaching out to consultants, recruiters, and diversity program coordinators.",
    href: "https://docs.google.com/document/d/1VJBR_TZ4sQAnk47lE_P6rKRJ22-cgHuge8yWGR8jAzk/edit?usp=drive_link",
    color: "bg-[#059669]",
    label: "Open template",
  },
];

const tools = [
  { name: "Management Consulted", desc: "The best case interview platform. Filter cases by firm and round. Start with video examples before doing live practice.", href: "https://managementconsulted.com" },
  { name: "Wharton Case Book (Free)", desc: "One of the most comprehensive free case books. Hundreds of practice cases across industries and firm types.", href: "https://mcg.wharton.upenn.edu/case-books/" },
  { name: "Darden Case Book (Free)", desc: "UVA Darden's free casebook — widely used in MBB prep. Strong for market sizing and structuring practice.", href: "https://www.darden.virginia.edu/mba/academic-experience/student-life/student-organizations/consulting-club" },
  { name: "Bain Emerging Leaders (BEL)", desc: "Bain's sophomore diversity program. Applications open around February 1.", href: "https://www.bain.com/careers/find-a-role/undergraduate/" },
  { name: "McKinsey Early Programs", desc: "McKinsey's early diversity programs for freshmen and sophomores.", href: "https://www.mckinsey.com/careers/students" },
  { name: "BCG Early Access", desc: "BCG's freshman and sophomore diversity access programs.", href: "https://www.bcg.com/careers/students" },
  { name: "Deloitte Discovery", desc: "Deloitte's early career diversity program — a documented on-ramp to MBB.", href: "https://www.deloitte.com/us/en/pages/careers/topics/students.html" },
];

const reading = [
  { title: "Case in Point", author: "Marc P. Cosentino", desc: "The classic consulting case interview prep book. Widely used for building framework intuition." },
  { title: "The McKinsey Way", author: "Ethan M. Rasiel", desc: "How McKinsey actually works — the problem-solving approach, communication style, and consulting mindset." },
  { title: "Flawless Consulting", author: "Peter Block", desc: "How to build credibility and deliver recommendations that clients actually act on." },
];

export default function ConsultingResourcesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-10">
        <Link href="/careers/consulting" className="text-xs font-semibold text-[#6B7280] hover:text-[#1B4332] transition-colors">← Consulting</Link>
        <span className="block text-xs font-semibold uppercase tracking-widest text-[#1B4332] mt-4 mb-2">Resources</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          Consulting Templates & Tools.
        </h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed">
          Everything you need to apply, prep, and land your first consulting offer.
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
              <a href={t.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B4332] hover:text-[#F4A825] transition-colors">
                {t.label} <ExternalLink size={11} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-sm font-bold text-[#0D0D0D] uppercase tracking-widest mb-4">Platforms & Programs</h2>
        <div className="space-y-3">
          {tools.map((tool) => (
            <div key={tool.name} className="flex gap-4 p-4 border border-[#E5E5E0] rounded-lg bg-white">
              <div className="flex-1">
                <p className="font-semibold text-[#0D0D0D] text-sm">{tool.name}</p>
                <p className="text-sm text-[#6B6B6B] mt-0.5 leading-relaxed">{tool.desc}</p>
              </div>
              <a href={tool.href} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 text-[#6B6B6B] hover:text-[#1B4332] transition-colors mt-0.5">
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
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#D1FAE5] flex items-center justify-center text-xs font-bold text-[#1B4332]">B</div>
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
        <Link href="/careers/consulting/interviews" className="inline-flex items-center gap-2 px-5 py-3 bg-[#1B4332] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer">
          ← Case Interview Guide
        </Link>
      </div>
    </div>
  );
}
