import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LawyerHubPage() {
  return (
    <div className="bg-[#FAFAF7]">
      {/* Hero */}
      <div className="bg-[#0D0D0D] text-[#FAFAF7] px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <Link href="/careers" className="text-xs font-semibold text-[#6B6B6B] hover:text-[#FAFAF7] transition-colors">← All careers</Link>
          <div className="mt-6 mb-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FAFAF7] bg-[#1E3A5F] px-2 py-0.5 rounded-full">● Lawyer</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 leading-tight" style={{ fontFamily: "'Libre Bodoni', serif" }}>
            The complete guide to<br />
            <span className="text-[#F4A825] italic">becoming a lawyer.</span>
          </h1>
          <p className="text-[#A0A0A0] text-lg max-w-2xl">
            Two guides. One path. Getting into law school — and what to do once you're there.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Getting into Law School */}
          <Link
            href="/careers/law-school"
            className="group flex flex-col p-8 border-2 border-[#0D0D0D] rounded-2xl bg-white hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <div className="text-5xl font-bold text-[#1E3A5F]/10 mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>01</div>
            <h2 className="text-xl font-bold text-[#0D0D0D] mb-2 group-hover:text-[#1E3A5F] transition-colors" style={{ fontFamily: "'Libre Bodoni', serif" }}>
              Getting into Law School
            </h2>
            <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4 flex-1">
              Everything from high school mock trial to your acceptance letter. Year-by-year roadmap, pipeline programs, LSAT prep, clubs, and resources.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Roadmap", "Pipeline Programs", "Mock Trial", "LSAT Prep", "Resources"].map((tag) => (
                <span key={tag} className="text-xs font-medium text-[#1E3A5F] bg-[#EFF6FF] px-2.5 py-1 rounded-full border border-[#1E3A5F]/20">
                  {tag}
                </span>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1E3A5F] text-white text-sm font-semibold rounded-lg group-hover:bg-[#F4A825] group-hover:text-[#0D0D0D] transition-colors">
              Start here <ArrowRight size={14} />
            </div>
          </Link>

          {/* Getting a Law Job */}
          <Link
            href="/careers/law-career"
            className="group flex flex-col p-8 border-2 border-[#0D0D0D] rounded-2xl bg-white hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <div className="text-5xl font-bold text-[#1E3A5F]/10 mb-4" style={{ fontFamily: "'Libre Bodoni', serif" }}>02</div>
            <h2 className="text-xl font-bold text-[#0D0D0D] mb-2 group-hover:text-[#1E3A5F] transition-colors" style={{ fontFamily: "'Libre Bodoni', serif" }}>
              Getting a Law Job
            </h2>
            <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4 flex-1">
              The 5 career tracks after law school — BigLaw, judicial clerkships, government, public interest, and in-house. What to do in 1L, 2L, and 3L year to land the job you want.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["BigLaw", "Clerkships", "Government", "Public Interest", "In-House"].map((tag) => (
                <span key={tag} className="text-xs font-medium text-[#1E3A5F] bg-[#EFF6FF] px-2.5 py-1 rounded-full border border-[#1E3A5F]/20">
                  {tag}
                </span>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D0D0D] text-white text-sm font-semibold rounded-lg group-hover:bg-[#F4A825] group-hover:text-[#0D0D0D] transition-colors">
              Explore tracks <ArrowRight size={14} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
