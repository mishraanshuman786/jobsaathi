import { cn } from "@/lib/utils";

type Tone = "default" | "success" | "warning";

export function Chip({ tone = "default", className, ...props }: React.ComponentProps<"span"> & { tone?: Tone }) {
  return (
    <span
      className={cn(
        "inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold",
        tone === "default" && "bg-primary-soft text-primary",
        tone === "success" && "border border-success text-success",
        tone === "warning" && "border border-warning text-warning",
        className,
      )}
      {...props}
    />
  );
}