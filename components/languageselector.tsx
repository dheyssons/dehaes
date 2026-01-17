"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const locales = ["en", "nl", "fr"] as const;

const labels: Record<(typeof locales)[number], string> = {
  en: "English",
  nl: "Nederlands",
  fr: "Français",
};

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const currentLocale = pathname.split("/")[1] as (typeof locales)[number];
  const restOfPath = pathname.split("/").slice(2).join("/");

  const handleChange = (newLocale: string) => {
    const newPath = `/${newLocale}/${restOfPath}`;
    router.push(newPath);
    setOpen(false);
  };

  return (
    <div className="relative w-56">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="
          flex items-center gap-6
          rounded-md border border-white/10
          bg-[--primary-color]
          px-4 py-3
          text-sm text-white
          shadow-inner
          transition
          hover:border-white/20
        "
      >
        <span>{labels[currentLocale]}</span>
        <FaChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute z-50 mt-2 w-full
            overflow-hidden-md
            border border-white/10
            bg-[--primary-color]
            shadow-xl
          "
        >
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleChange(locale)}
              className={`
                w-full px-4 py-3 text-left text-sm
                transition
                ${
                  locale === currentLocale
                    ? "bg-white/5 text-white"
                    : "text-white/90 hover:bg-white/5"
                }
              `}
            >
              {labels[locale]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
