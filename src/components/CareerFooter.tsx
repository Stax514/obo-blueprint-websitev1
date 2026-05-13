import Link from "next/link";

export default function CareerFooter() {
  return (
    <footer className="bg-[#0D0D0D] text-[#FAFAF7] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#F4A825] rounded-sm flex items-center justify-center">
                <span className="text-[#0D0D0D] font-bold text-sm" style={{ fontFamily: "'Libre Bodoni', serif" }}>B</span>
              </div>
              <span className="font-bold text-lg" style={{ fontFamily: "'Libre Bodoni', serif" }}>Blueprint</span>
            </div>
            <p className="text-[#9CA3AF] text-sm leading-relaxed max-w-xs">
              Free guides for breaking into the career you want. No login. No paywall.
            </p>
          </div>

          {/* Career sections */}
          <div>
            <h3 className="text-[#F4A825] text-xs font-semibold uppercase tracking-widest mb-4">Product Management</h3>
            <ul className="space-y-2">
              {[
                ["What is PM?", "/careers/product-management"],
                ["Roadmap", "/careers/roadmap"],
                ["10-Week Prep", "/careers/prep"],
                ["Interview Guide", "/careers/interviews"],
                ["Starter Project", "/careers/starter-project"],
                ["Resources", "/careers/resources"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-[#9CA3AF] hover:text-[#FAFAF7] text-sm transition-colors cursor-pointer">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other tracks */}
          <div>
            <h3 className="text-[#F4A825] text-xs font-semibold uppercase tracking-widest mb-4">Also on Blueprint</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/high-school" className="text-[#9CA3AF] hover:text-[#FAFAF7] text-sm transition-colors cursor-pointer">
                  High School Guide
                </Link>
              </li>
              <li><span className="text-[#4B5563] text-sm">Software Engineering — coming soon</span></li>
              <li><span className="text-[#4B5563] text-sm">Consulting — coming soon</span></li>
              <li><span className="text-[#4B5563] text-sm">Finance & IB — coming soon</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-[#1F1F1F] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-[#6B7280] text-xs">© 2024 Obolu Blueprint. All rights reserved.</p>
          <p className="text-[#6B7280] text-xs italic" style={{ fontFamily: "'Libre Bodoni', serif" }}>
            "Your story is your strategy."
          </p>
        </div>
      </div>
    </footer>
  );
}
