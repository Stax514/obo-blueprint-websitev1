import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      <div className="max-w-2xl">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-12 bg-[#F4A825]"></div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#6B6B6B]">
            Reach out
          </span>
        </div>

        <h1
          className="text-5xl sm:text-6xl font-bold text-[#0D0D0D] leading-tight mb-6"
          style={{ fontFamily: "'Libre Bodoni', serif" }}
        >
          Need help with
          <br />
          <span className="italic text-[#F4A825]">your application?</span>
        </h1>

        <p className="text-[#6B6B6B] text-lg leading-relaxed mb-12">
          Whether it&apos;s your college list, an essay you&apos;re stuck on, financial aid questions, or just figuring out where to start — send us an email. We read everything.
        </p>

        <div className="bg-[#0D0D0D] rounded-2xl p-8 md:p-10 mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[#F4A825] flex items-center justify-center">
              <Mail size={18} className="text-[#0D0D0D]" />
            </div>
            <p className="text-[#9CA3AF] text-sm">Send us a message</p>
          </div>
          <Link
            href="mailto:obolublueprint@gmail.com"
            className="text-2xl sm:text-3xl font-bold text-[#FAFAF7] hover:text-[#F4A825] transition-colors duration-150 cursor-pointer"
            style={{ fontFamily: "'Libre Bodoni', serif" }}
          >
            obolublueprint@gmail.com
          </Link>
          <p className="text-[#6B7280] text-sm mt-4 leading-relaxed">
            Tell us what school you&apos;re applying to, where you&apos;re at in the process, and what you need help with. The more context you give, the more useful we can be.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-[#6B6B6B] text-sm font-semibold uppercase tracking-widest">Good things to reach out about</p>
          {[
            "Your college essay — stuck, need feedback, or don't know what to write about",
            "Building your college list — reach, match, and safety schools",
            "Financial aid — understanding your award letter or appealing for more",
            "Extracurriculars — how to frame what you've done",
            "Any part of the process that feels confusing or overwhelming",
          ].map((item) => (
            <div key={item} className="flex gap-3 items-start">
              <ArrowRight size={14} className="text-[#F4A825] flex-shrink-0 mt-1" />
              <p className="text-[#6B6B6B] text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
