import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { ShineBorder } from "./shine-border"

export function InteractiveHoverButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "group bg-background relative w-auto cursor-pointer overflow-hidden rounded-full border p-2 px-4 text-center font-semibold",
        className
      )}
      {...props}
    >
      <div className="bg-primary absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 scale-0 rounded-full transition-all duration-300 group-hover:scale-[100.8]"></div>
      
      <div className="relative flex items-center justify-center gap-2 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        <span className="inline-block">
          {children}
        </span>
      </div>

      <div className="text-primary-foreground absolute inset-0 z-10 flex translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight className="h-4 w-4" />
      </div>

      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} borderWidth={1.5} />
    </button>
  )
}
