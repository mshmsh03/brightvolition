import * as React from "react"
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

// Variants below are Bright Volition's own button system — the .btn-gold /
// .btn-outline / .btn-outline-navy trio from the pre-Next stylesheet — layered
// onto shadcn's Button shape. The pill radius and the 2px transparent border
// are what make the three read as one family: an outline button and a filled
// one occupy exactly the same box, so a row of mixed buttons stays on a single
// baseline instead of the outlined one sitting 2px taller.
//
// `secondary`/`destructive`/`link` are left as shadcn's generated defaults —
// unused today, kept as standard primitives for future work.
const buttonVariants = cva(
  // Hover is acknowledgement, so it lands in ~180ms; longer reads as the button
  // hesitating. Naming the transitioned properties rather than using
  // transition-all keeps the focus ring from being animated into view.
  //
  // The trailing arrow (a lucide icon passed as a child) steps forward on
  // hover, and mirrors for Arabic and Kurdish so it always points the way the
  // script is read.
  "group/button inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full border-2 border-transparent bg-clip-padding text-[.95rem] font-bold whitespace-nowrap transition-[color,background-color,border-color,box-shadow,transform] duration-[180ms] outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-[18px] [&_svg]:transition-transform [&_svg]:duration-[180ms] [&_svg]:ease-out-expo rtl:[&_svg]:-scale-x-100 hover:[&_svg]:translate-x-1 rtl:hover:[&_svg]:-translate-x-1",
  {
    variants: {
      variant: {
        // Gold on navy is the primary call to action everywhere on the site.
        gold: "bg-gold text-navy hover:-translate-y-0.5 hover:bg-navy hover:text-cream",
        // For use on the navy hero and CTA band — the outline is cream because
        // that is the only thing legible against that background.
        outline: "border-cream text-cream hover:-translate-y-0.5 hover:bg-cream hover:text-navy",
        // The same button on a cream section.
        outlineNavy: "border-navy text-navy hover:bg-navy hover:text-cream",
        navy: "bg-navy text-cream hover:bg-gold hover:text-navy",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "border-none hover:bg-lavender hover:text-navy aria-expanded:bg-lavender aria-expanded:text-navy",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20",
        link: "border-none text-navy underline-offset-4 hover:underline",
      },
      size: {
        default: "h-auto px-7 py-3.5",
        sm: "h-auto px-5 py-2.5 text-[.85rem]",
        icon: "size-10 rounded-full",
        "icon-sm": "size-8 rounded-full",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "gold",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
