import Link from "next/link";
import { ArrowRight, FileText, Mail, MessageSquare, Briefcase } from "lucide-react";

const resources = [
  {
    icon: FileText,
    title: "Resume Template",
    description: "A clean, professional resume formatted for college students. Start by filling it in with everything you did in high school — clubs, awards, leadership, programs, any work experience. As you build experience in college you'll replace things, but starting with a solid foundation puts you ahead. Keep it updated every semester.",
    href: "https://docs.google.com/document/d/1QAapl2egG76ipJ9Azwjfs5WeHug6GfrNQdCxUYS5A9Y/edit?usp=drive_link",
    cta: "Get the Resume Template",
  },
  {
    icon: Briefcase,
    title: "Cover Letter Template",
    description: "A framework for writing cover letters that are specific, direct, and worth reading. Not a generic fill-in-the-blank — a structure that walks you through how to write one tailored to the role you're applying for.",
    href: "https://docs.google.com/document/d/1yxTI_O7gLL0q8CxixChuu2oyfuUth6ZzursUAKviLLM/edit?usp=drive_link",
    cta: "Get the Cover Letter Template",
  },
  {
    icon: Mail,
    title: "Cold Outreach Scripts",
    description: "Templates for reaching out cold — coffee chat requests, follow-ups after events, LinkedIn messages to people at companies you want to work at. Cold outreach works when it's done right. These show you how.",
    href: "https://docs.google.com/document/d/1VJBR_TZ4sQAnk47lE_P6rKRJ22-cgHuge8yWGR8jAzk/edit?usp=drive_link",
    cta: "Get the Outreach Scripts",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-[#0D0D0D] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">College Guide</p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#FAFAF7] leading-[1.05] mb-4"
            style={{ fontFamily: "'Libre Bodoni', serif" }}
          >
            Resources.
          </h1>
          <p className="text-white/60 text-base leading-relaxed max-w-xl">
            Templates and tools. Free, no login, no paywall.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <p className="text-[#374151] text-sm leading-relaxed mb-10">
          Everything we reference across this guide is here. Click the link, go to <strong>File → Make a Copy</strong>, save it to your Google Drive, and make it yours.
        </p>

        <div className="space-y-6">
          {resources.map((r) => {
            const Icon = r.icon;
            return (
              <div key={r.title} className="border border-[#E5E5E0] rounded-2xl p-6 bg-white">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#0D0D0D] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#F4A825]" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-base font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>
                      {r.title}
                    </h2>
                    <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">{r.description}</p>
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D0D0D] text-[#FAFAF7] text-sm font-semibold rounded-md hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer"
                    >
                      {r.cta}
                      <ArrowRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interview prep */}
        <div className="mt-6 border border-[#E5E5E0] rounded-2xl p-6 bg-white">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-[#0D0D0D] rounded-lg flex items-center justify-center flex-shrink-0">
              <MessageSquare size={18} className="text-[#F4A825]" />
            </div>
            <div className="flex-1">
              <h2 className="text-base font-bold text-[#0D0D0D] mb-2" style={{ fontFamily: "'Libre Bodoni', serif" }}>
                Interview Prep
              </h2>
              <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
                Every field interviews differently. The questions, the format, the level of technical depth — it all depends on where you're going. Head to the Career Plans page and find the path you're on. Each one covers exactly what to expect and how to prepare.
              </p>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D0D0D] text-[#FAFAF7] text-sm font-semibold rounded-md hover:bg-[#F4A825] hover:text-[#0D0D0D] transition-colors cursor-pointer"
              >
                Go to Career Plans
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>

        <p className="text-[#9CA3AF] text-xs mt-10 italic">
          All templates are Google Docs. File → Make a Copy → save to your Drive. That's it.
        </p>
      </section>
    </>
  );
}
