import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
