import { cn } from "@/lib/utils";

interface GradientTextProps {
  text: string;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
  animate?: boolean;
  direction?: "to-r" | "to-l" | "to-t" | "to-b" | "to-br" | "to-bl" | "to-tr" | "to-tl";
}

const GradientText = ({
  text,
  className = "",
  from = "hsl(var(--primary))",
  via,
  to = "hsl(var(--accent))",
  animate = false,
  direction = "to-r",
}: GradientTextProps) => {
  const gradientDirection = {
    "to-r": "to right",
    "to-l": "to left",
    "to-t": "to top",
    "to-b": "to bottom",
    "to-br": "to bottom right",
    "to-bl": "to bottom left",
    "to-tr": "to top right",
    "to-tl": "to top left",
  }[direction];

  const gradient = via
    ? `linear-gradient(${gradientDirection}, ${from}, ${via}, ${to})`
    : `linear-gradient(${gradientDirection}, ${from}, ${to})`;

  return (
    <span
      className={cn(
        "bg-clip-text text-transparent",
        animate && "animate-gradient-x bg-[length:200%_auto]",
        className
      )}
      style={{
        backgroundImage: gradient,
        WebkitBackgroundClip: "text",
      }}
    >
      {text}
    </span>
  );
};

export default GradientText;
