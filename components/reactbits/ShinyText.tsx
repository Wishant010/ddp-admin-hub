"use client";

import { cn } from "@/lib/utils";

interface ShinyTextProps {
  text: string;
  className?: string;
  shimmerWidth?: number;
  speed?: number;
  disabled?: boolean;
}

const ShinyText = ({
  text,
  className = "",
  shimmerWidth = 100,
  speed = 3,
  disabled = false,
}: ShinyTextProps) => {
  return (
    <span
      className={cn(
        "relative inline-block bg-clip-text text-transparent",
        disabled ? "" : "animate-shimmer-text",
        className
      )}
      style={{
        backgroundSize: `${shimmerWidth}% 100%`,
        backgroundImage: disabled
          ? "linear-gradient(to right, currentColor, currentColor)"
          : `linear-gradient(
              120deg,
              hsl(var(--foreground)) 40%,
              hsl(var(--primary)) 50%,
              hsl(var(--foreground)) 60%
            )`,
        animationDuration: `${speed}s`,
        WebkitBackgroundClip: "text",
      }}
    >
      {text}
    </span>
  );
};

export default ShinyText;
