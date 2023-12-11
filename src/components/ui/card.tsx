import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded border bg-card text-card-foreground shadow relative overflow-hidden",
      className
    )}
    style={{
      background: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid rgba(128, 255, 255, 0.5)',
      backdropFilter: 'blur(5px)',
      boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
    }}
    {...props}
  >
    <div style={{
      position: 'absolute',
      top: '-2px',
      left: '-2px',
      right: '-2px',
      bottom: '-2px',
      background: 'linear-gradient(45deg, oklch(0.19 0.02 263.4), oklch(0.28 0.03 221.01))',
      zIndex: '-1',
      filter: 'blur(5px)',
    }} />
    <div style={{
      position: 'absolute',
      top: '-2px',
      left: '-2px',
      right: '-2px',
      bottom: '-2px',
      background: 'linear-gradient(45deg, #0088ff, #00ff88)',
      zIndex: '-2',
      filter: 'blur(10px)',
    }} />
    <div className="relative h-full overflow-y-auto scrollbar-style">
      {children}
    </div>
  </div>
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { underlineWidth?: string }
>(({ className, children, underlineWidth, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6 relative pb-2", className)}
    {...props}
  >
    {children}
    {underlineWidth && (
      <div className="left-y-1.5" style={{ 
        borderBottom: '.2rem solid hsl(178.5deg 41.24% 61.96%)', 
        position: 'absolute',
        bottom: 0,
        width: underlineWidth
      }} />
    )}
  </div>
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight text-lg text-foreground", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} style={{color: 'oklch(0.58 0.04 227.16)'}} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
