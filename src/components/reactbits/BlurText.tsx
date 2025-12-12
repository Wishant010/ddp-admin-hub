import { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  onAnimationComplete?: () => void;
}

const BlurText = ({
  text,
  className = "",
  delay = 100,
  animateBy = "words",
  direction = "top",
  threshold = 0.1,
  onAnimationComplete,
}: BlurTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  const elements = animateBy === "words" ? text.split(" ") : text.split("");

  const yOffset = direction === "top" ? -20 : 20;

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
    }
  }, [isInView, controls, hasAnimated]);

  const handleAnimationComplete = () => {
    if (onAnimationComplete) {
      onAnimationComplete();
    }
  };

  return (
    <div ref={ref} className={cn("flex flex-wrap", className)}>
      {elements.map((element, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(10px)", y: yOffset }}
          animate={controls}
          variants={{
            visible: {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
              transition: {
                duration: 0.5,
                delay: i * (delay / 1000),
                ease: [0.25, 0.1, 0.25, 1],
              },
            },
          }}
          onAnimationComplete={i === elements.length - 1 ? handleAnimationComplete : undefined}
          className="inline-block"
          style={{ marginRight: animateBy === "words" ? "0.3em" : "0" }}
        >
          {element}
        </motion.span>
      ))}
    </div>
  );
};

export default BlurText;
