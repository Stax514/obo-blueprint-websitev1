import Link from "next/link";

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
            <p className="text-[#9CA3AF] text-sm mb-3">Have questions? We answer every email.</p>
            <Link
              href="mailto:tsadiku514@gmail.com"
              className="inline-flex items-center text-sm text-[#FAFAF7] underline underline-offset-4 decoration-[#F4A825] hover:text-[#F4A825] transition-colors cursor-pointer"
            >
              tsadiku514@gmail.com
            </Link>
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
