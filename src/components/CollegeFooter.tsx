import Link from "next/link";

export default function CollegeFooter() {
  return (
    <footer className="bg-[#0D0D0D] text-[#FAFAF7] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#F4A825] rounded-sm flex items-center justify-center">
                <span className="text-[#0D0D0D] font-bold text-base" style={{ fontFamily: "'Libre Bodoni', serif" }}>O</span>
              </div>
              <span className="font-bold text-lg" style={{ fontFamily: "'Libre Bodoni', serif" }}>Obolu Blueprint</span>
            </div>
            <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-xs">
              The complete guide from high school applications to your first career offer. Written by Tsadiku and Adiyah Obolu. Free, no login, no paywall.
            </p>
          </div>

          <div>
            <h3 className="text-[#F4A825] text-xs font-semibold uppercase tracking-widest mb-4">College Guide</h3>
            <ul className="space-y-2">
              {[
                ["The Guide", "/college/guide"],
                ["Summer Internships", "/college/internships"],
                ["Clubs & Projects", "/college/clubs-and-projects"],
                ["General Tips", "/college/general-tips"],
                ["Resources", "/college/resources"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-[#9CA3AF] hover:text-[#FAFAF7] text-sm transition-colors cursor-pointer">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#F4A825] text-xs font-semibold uppercase tracking-widest mb-4">Also on Blueprint</h3>
            <ul className="space-y-2">
              {[
                ["High School Guide", "/high-school"],
                ["Career Plans", "/careers"],
                ["About Us", "/about"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-[#9CA3AF] hover:text-[#FAFAF7] text-sm transition-colors cursor-pointer">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-[#1F1F1F] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-[#6B7280] text-xs">© 2024 Obolu Blueprint. All rights reserved.</p>
          <p className="text-[#6B7280] text-xs italic" style={{ fontFamily: "'Libre Bodoni', serif" }}>
            "We're here to give you the blueprint we had growing up."
          </p>
        </div>
      </div>
    </footer>
  );
}
