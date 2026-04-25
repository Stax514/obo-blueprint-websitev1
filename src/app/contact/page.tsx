import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

const socials = [
  {
    handle: "@tsadi_",
    platform: "TikTok — Tsadiku's personal",
    desc: "College process, life at Berkeley, and real talk.",
    href: "https://www.tiktok.com/@tsadi_",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
      </svg>
    ),
  },
  {
    handle: "@obolublueprint",
    platform: "TikTok — Obolu Blueprint",
    desc: "College prep content built for Black students.",
    href: "https://www.tiktok.com/@obolublueprint",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
      </svg>
    ),
  },
  {
    handle: "@OboluBlueprint",
    platform: "YouTube",
    desc: "Longer videos on the full college process.",
    href: "https://www.youtube.com/@OboluBlueprint",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
];

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
          Whether it&apos;s your college list, an essay you&apos;re stuck on, financial aid questions, or just figuring out where to start — send us an email. We&apos;re both busy but we&apos;ll do our best to help.
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

        {/* Follow us */}
        <div className="mt-16">
          <p className="text-[#6B6B6B] text-sm font-semibold uppercase tracking-widest mb-6">Follow us — we post our content here</p>
          <div className="space-y-3">
            {socials.map((s) => (
              <Link
                key={s.handle}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white border border-[#E5E5E0] rounded-xl hover:border-[#0D0D0D] transition-colors cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-md bg-[#0D0D0D] flex items-center justify-center text-[#F4A825] flex-shrink-0">
                  {s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-[#0D0D0D] text-sm" style={{ fontFamily: "'Libre Bodoni', serif" }}>{s.handle}</p>
                  <p className="text-[#6B6B6B] text-xs">{s.platform} — {s.desc}</p>
                </div>
                <ArrowRight size={16} className="text-[#6B6B6B] group-hover:text-[#0D0D0D] group-hover:translate-x-1 transition-all flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 space-y-4">
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
