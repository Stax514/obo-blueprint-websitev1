import CollegeNavbar from "@/components/CollegeNavbar";
import CollegeFooter from "@/components/CollegeFooter";

export default function CollegeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CollegeNavbar />
      <main className="flex-1">{children}</main>
      <CollegeFooter />
    </>
  );
}
