import CareerNavbar from "@/components/CareerNavbar";
import CareerFooter from "@/components/CareerFooter";

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CareerNavbar />
      <main className="flex-1">{children}</main>
      <CareerFooter />
    </>
  );
}
