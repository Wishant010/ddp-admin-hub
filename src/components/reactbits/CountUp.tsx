import { useRef, useEffect, useState } from "react";
import { useInView, motion, useSpring, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

interface CountUpProps {
  to: number;
  from?: number;
  className?: string;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  separator?: string;
  onComplete?: () => void;
}

const CountUp = ({
  to,
  from = 0,
  className = "",
  duration = 2,
  delay = 0,
  suffix = "",
  prefix = "",
  decimals = 0,
  separator = "",
  onComplete,
}: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hasStarted, setHasStarted] = useState(false);

  const motionValue = useMotionValue(from);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });

  useEffect(() => {
    if (isInView && !hasStarted) {
      const timeout = setTimeout(() => {
        setHasStarted(true);
        motionValue.set(to);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, to, motionValue, delay, hasStarted]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const formatted = formatNumber(latest, decimals, separator);
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });

    return unsubscribe;
  }, [springValue, decimals, separator, prefix, suffix]);

  useEffect(() => {
    if (hasStarted) {
      const timeout = setTimeout(() => {
        if (onComplete) onComplete();
      }, duration * 1000);
      return () => clearTimeout(timeout);
    }
  }, [hasStarted, duration, onComplete]);

  const formatNumber = (num: number, dec: number, sep: string): string => {
    const fixed = num.toFixed(dec);
    if (sep) {
      const parts = fixed.split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, sep);
      return parts.join(".");
    }
    return fixed;
  };

  return (
    <motion.span
      ref={ref}
      className={cn("tabular-nums", className)}
    >
      {prefix}{formatNumber(from, decimals, separator)}{suffix}
    </motion.span>
  );
};

export default CountUp;
