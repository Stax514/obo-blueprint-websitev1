import Link from "next/link";

const socials = [
  {
    label: "TikTok @tsadi_",
    href: "https://www.tiktok.com/@tsadi_",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
      </svg>
    ),
  },
  {
    label: "TikTok @obolublueprint",
    href: "https://www.tiktok.com/@obolublueprint",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@OboluBlueprint",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-[#FAFAF7] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#F4A825] rounded-sm flex items-center justify-center">
                <span className="text-[#0D0D0D] font-bold text-sm" style={{ fontFamily: "'Libre Bodoni', serif" }}>O</span>
              </div>
              <span className="font-bold text-lg" style={{ fontFamily: "'Libre Bodoni', serif" }}>Obolu Blueprint</span>
            </div>
            <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-xs">
              Built by Tsadiku and Adiyah Obolu — two Black siblings from Sacramento. We had advantages. This site is how we pass them on.
            </p>
          </div>

          {/* Sections */}
          <div>
            <h3 className="text-[#F4A825] text-xs font-semibold uppercase tracking-widest mb-4">Sections</h3>
            <ul className="space-y-2">
              {[
                ["About", "/about"],
                ["Why College", "/why-college"],
                ["Which College", "/which-college"],
                ["Timeline", "/timeline"],
                ["Applications", "/applications"],
                ["Extracurriculars", "/extracurriculars"],
                ["Financial Aid", "/financial-aid"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-[#9CA3AF] hover:text-[#FAFAF7] text-sm transition-colors cursor-pointer">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#F4A825] text-xs font-semibold uppercase tracking-widest mb-4">Connect</h3>
            <p className="text-[#9CA3AF] text-sm mb-3">Questions about your application? Reach out.</p>
            <Link
              href="mailto:obolublueprint@gmail.com"
              className="inline-flex items-center text-sm text-[#FAFAF7] underline underline-offset-4 decoration-[#F4A825] hover:text-[#F4A825] transition-colors cursor-pointer mb-6"
            >
              obolublueprint@gmail.com
            </Link>
            <div className="flex items-center gap-3 mt-4">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-md bg-[#1F1F1F] flex items-center justify-center text-[#9CA3AF] hover:text-[#F4A825] hover:bg-[#2D2D2D] transition-colors cursor-pointer"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1F1F1F] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-[#6B7280] text-xs">
            © 2024 Tsadiku and Adiyah Obolu. All rights reserved.
          </p>
          <p className="text-[#6B7280] text-xs italic" style={{ fontFamily: "'Libre Bodoni', serif" }}>
            "Your story is your strategy."
          </p>
        </div>
      </div>
    </footer>
  );
}
