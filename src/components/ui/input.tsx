import {cn} from "@/lib/utils";

export function Input({className, ...props}:React.ComponentProps<"input">){
    return (
      <input
      className={cn(
        "min-h-11 w-full rounded-[10px] border border-border bg-background px-3.5 text-[15px] text-foreground",
        "placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        className,
      )}
      {...props}
    />
    )

}