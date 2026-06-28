import Link from "next/link";
import { ExternalLink } from "lucide-react";

const templates = [
  {
    title: "Law School Resume Template",
    desc: "One-page law school application resume — chronological format with GPA, activities, legal experience, and honors in the right order.",
    href: "https://docs.google.com/document/d/1QAapl2egG76ipJ9Azwjfs5WeHug6GfrNQdCxUYS5A9Y/edit?usp=drive_link",
    color: "bg-[#1E3A5F]",
    label: "Open template",
  },
  {
    title: "Cold Outreach Templates",
    desc: "Email templates for reaching out to law school students, alumni, and professors — for informational interviews, RA positions, and recommendation letter requests.",
    href: "https://docs.google.com/document/d/1VJBR_TZ4sQAnk47lE_P6rKRJ22-cgHuge8yWGR8jAzk/edit?usp=drive_link",
    color: "bg-[#059669]",
    label: "Open template",
  },
];

const tools = [
  {
    name: "LSAC.org — Official Application Portal",
    desc: "The Law School Admission Council hosts the Credential Assembly Service (CAS), which centralizes all law school applications. You submit once through LSAC and send to multiple schools. Start an account here.",
    href: "https://www.lsac.org/",
  },
  {
    name: "7Sage Applicant Statistics",
    desc: "Real admit/deny outcomes by LSAT and GPA. Search the database to see what scores actually resulted in admission at specific schools — far more useful than published medians.",
    href: "https://7sage.com/law-school-admissions-statistics/",
  },
  {
    name: "Law School Transparency (LST)",
    desc: "Bar passage rates, employment outcomes, and debt data for every ABA-accredited law school. Use this before deciding where to apply.",
    href: "https://www.lawschooltransparency.com/",
  },
  {
    name: "Khan Academy LSAT",
    desc: "Free, official LSAT prep partnered with LSAC. Full practice tests, video explanations, and adaptive learning. The best free resource available.",
    href: "https://www.khanacademy.org/prep/lsat",
  },
  {
    name: "TRIALS Program — Harvard Law",
    desc: "Summer pipeline program at Harvard Law for underrepresented pre-law students. Apply junior year.",
    href: "https://hls.harvard.edu/about/diversity-and-inclusion/diversity-programs-initiatives/trials-program/",
  },
  {
    name: "Marshall-Motley Scholars",
    desc: "Full T14 tuition scholarship for students committed to civil rights law. One of the most powerful financial tools in pre-law.",
    href: "https://mmscholars.org/",
  },
  {
    name: "SEO Law Fellows",
    desc: "Paid summer associate program at BigLaw firms for pre-law students. Apply after admission.",
    href: "https://seofellows.org/",
  },
  {
    name: "Advantage Testing Foundation",
    desc: "Free LSAT tutoring from Advantage Testing for underrepresented students with financial need.",
    href: "https://atfoundation.org/",
  },
];

const reading = [
  { title: "Just Mercy", author: "Bryan Stevenson", desc: "The definitive memoir of public defense and racial justice work. Essential reading for anyone considering civil rights, criminal defense, or public interest law." },
  { title: "The New Jim Crow", author: "Michelle Alexander", desc: "A rigorous analysis of mass incarceration and the criminal justice system as a form of racial control. Will reshape how you think about criminal law and reform." },
  { title: "A Civil Action", author: "Jonathan Harr", desc: "A gripping narrative about environmental litigation. Shows what litigation actually looks like — discovery, negotiation, trial, and settlement — at full length." },
  { title: "The Color of Law", author: "Richard Rothstein", desc: "Documents how federal, state, and local governments explicitly enforced residential segregation through law. Essential background for housing law, civil rights law, and urban policy." },
  { title: "My Own Words", author: "Ruth Bader Ginsburg", desc: "RBG's own writing on gender equality, the law, and her career. A model of what rigorous legal advocacy across decades looks like." },
  { title: "We Were Eight Years in Power", author: "Ta-Nehisi Coates", desc: "Essays on race, politics, and American policy across the Obama years. Connects legal and political structures to lived Black experience." },
];

export default function LawSchoolResourcesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="mb-10">
        <Link href="/careers/law-school" className="text-xs font-semibold text-[#6B7280] hover:text-[#1E3A5F] transition-colors">← Law School</Link>
        <span className="block text-xs font-semibold uppercase tracking-widest text-[#1E3A5F] mt-4 mb-2">Resources</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>
          Law School Templates & Tools.
        </h1>
        <p className="text-[#6B6B6B] text-lg leading-relaxed">
          Everything you need to apply to T14 law schools — templates, platforms, and reading.
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
              <a href={t.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1E3A5F] hover:text-[#F4A825] transition-colors">
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
              <a href={tool.href} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 text-[#6B6B6B] hover:text-[#1E3A5F] transition-colors mt-0.5">
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
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#EFF6FF] flex items-center justify-center text-xs font-bold text-[#1E3A5F]">B</div>
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
        <Link href="/careers/law-school/lsat" className="inline-flex items-center gap-2 px-5 py-3 bg-[#1E3A5F] text-[#FAFAF7] text-sm font-semibold rounded-lg hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer">
          ← LSAT Prep Guide
        </Link>
      </div>
    </div>
  );
}
