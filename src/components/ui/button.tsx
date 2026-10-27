import { cn } from "@/lib/utils";

type Variant="primary" | "secondary" | "ghost";
type Size="md" | "icon";

export function buttonStyles({ variant = "secondary", size = "md" }: { variant?: Variant; size?: Size } = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-[10px] text-[15px] font-semibold transition-colors",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50",
    size === "md" && "min-h-11 px-5",
    size === "icon" && "size-11",
    variant === "primary" && "border border-primary bg-primary text-primary-foreground hover:opacity-90",
    variant === "secondary" && "border border-border bg-surface text-foreground hover:bg-primary-soft",
    variant === "ghost" && "text-foreground hover:bg-primary-soft",
  );
}


type ButtonProps = React.ComponentProps<"button"> & { variant?: Variant; size?: Size };

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return <button className={cn(buttonStyles({ variant, size }), className)} {...props} />;
}