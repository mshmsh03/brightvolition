import * as React from "react"

import { cn } from "@/lib/utils"

// Flat by default (DESIGN.md): no shadow token exists on this project, so the
// card is separated from the page by a 1px lavender border only, at the same
// 14px radius every other card/panel on the site uses.
function Card({ className, ...props }) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-card border border-border p-7 sm:p-9",
        className
      )}
      {...props} />
  );
}

function CardHeader({ className, ...props }) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-1.5", className)}
      {...props} />
  );
}

function CardTitle({ className, ...props }) {
  return (
    <h3
      data-slot="card-title"
      className={cn("text-card-title font-bold", className)}
      {...props} />
  );
}

function CardDescription({ className, ...props }) {
  return (
    <p
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props} />
  );
}

function CardContent({ className, ...props }) {
  return (
    <div data-slot="card-content" className={cn(className)} {...props} />
  );
}

function CardFooter({ className, ...props }) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center", className)}
      {...props} />
  );
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }
