import Link from "next/link";
import { Container } from "@/components/ui/container";
import { buttonStyles } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface">
      <Container className="flex h-16 items-center gap-7">
        <Logo />
        <NavLinks />
        <div className="ml-auto flex items-center gap-3">
          <ThemeToggle />
          <Link href="/login" className={buttonStyles({ variant: "ghost" })}>Sign in</Link>
          <Link href="/signup" className={buttonStyles({ variant: "primary" })}>Get started</Link>
        </div>
      </Container>
    </header>
  );
}