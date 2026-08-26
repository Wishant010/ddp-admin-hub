"use client";

import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import type { Lang } from "@/lib/translations";

interface LanguageToggleProps {
  // "dark" voor op donkere (navy/transparante) achtergronden, "light" voor op wit
  variant?: "light" | "dark";
  className?: string;
}

export function LanguageToggle({ variant = "light", className }: LanguageToggleProps) {
  const { lang, setLang } = useLanguage();

  const options: { value: Lang; label: string }[] = [
    { value: "nl", label: "NL" },
    { value: "en", label: "EN" },
  ];

  return (
    <div
      className={cn(
        "flex items-center rounded-full border p-0.5",
        variant === "dark" ? "border-white/30" : "border-slate-300",
        className
      )}
      role="group"
      aria-label={lang === "nl" ? "Taal kiezen" : "Choose language"}
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => setLang(option.value)}
          aria-pressed={lang === option.value}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-bold tracking-wide transition-all duration-200",
            lang === option.value
              ? "bg-gradient-to-r from-sky-400 to-emerald-400 text-white shadow-sm"
              : variant === "dark"
                ? "text-white/70 hover:text-white"
                : "text-slate-500 hover:text-slate-800"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
