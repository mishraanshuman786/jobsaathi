import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-lg font-bold">
      <span className="size-7 rounded-lg bg-primary" aria-hidden />
      SarkariSaathi
    </Link>
  );
}