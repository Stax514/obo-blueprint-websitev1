import HsNavbar from "@/components/HsNavbar";
import HsFooter from "@/components/HsFooter";

export default function HighSchoolLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HsNavbar />
      <main className="flex-1">{children}</main>
      <HsFooter />
    </>
  );
}
