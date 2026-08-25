"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  textAlign?: React.CSSProperties["textAlign"];
  onAnimationComplete?: () => void;
  gradientWords?: string[];
  gradientClass?: string;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  delay = 30,
  duration = 0.8,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  tag = "p",
  textAlign = "left",
  onAnimationComplete,
  gradientWords = [],
  gradientClass = "bg-gradient-to-r from-sky-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  // Split text into words and characters
  const splitIntoElements = () => {
    const words = text.split(" ");

    return words.map((word, wordIndex) => {
      const isGradientWord = gradientWords.includes(word);
      const wordClass = isGradientWord ? gradientClass : "";

      if (splitType === "words") {
        return (
          <React.Fragment key={wordIndex}>
            <span
              className={`split-word inline ${wordClass}`}
              style={{ opacity: 0 }}
            >
              {word}
            </span>
            {wordIndex < words.length - 1 && " "}
          </React.Fragment>
        );
      }

      // Split into chars
      const chars = word.split("").map((char, charIndex) => (
        <span
          key={`${wordIndex}-${charIndex}`}
          className={`split-char inline-block ${wordClass}`}
          style={{
            opacity: 0,
            lineHeight: "1.3",
            paddingBottom: "0.1em",
          }}
        >
          {char}
        </span>
      ));

      return (
        <React.Fragment key={wordIndex}>
          <span className="inline" style={{ whiteSpace: "nowrap" }}>
            {chars}
          </span>
          {wordIndex < words.length - 1 && (
            <span className="split-char inline-block" style={{ opacity: 0 }}>
              &nbsp;
            </span>
          )}
        </React.Fragment>
      );
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(".split-char, .split-word");

    gsap.fromTo(
      elements,
      { ...from },
      {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        onComplete: onAnimationComplete,
      }
    );
  }, [isVisible, delay, duration, ease, from, to, onAnimationComplete]);

  const content = splitIntoElements();

  const TagComponent = tag;

  return (
    <div ref={containerRef} style={{ overflow: "visible", paddingBottom: "0.15em" }}>
      <TagComponent
        style={{
          textAlign,
          overflow: "visible",
          lineHeight: 1.25,
        }}
        className={className}
      >
        {content}
      </TagComponent>
    </div>
  );
};

export default SplitText;
