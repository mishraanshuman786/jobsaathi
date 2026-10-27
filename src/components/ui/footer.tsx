import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-surface py-10">
      <Container className="flex flex-col gap-4 text-sm text-muted md:flex-row md:justify-between">
        <p>SarkariSaathi is not a government website. Always check the official notification.</p>
        <div className="flex gap-5">
          <Link href="/pricing" className="hover:text-foreground">Pricing</Link>
          <Link href="/jobs" className="hover:text-foreground">Jobs</Link>
        </div>
      </Container>
    </footer>
  );
}