"use client";

import Image from "next/image";
import FranceFlagImage from "@/public/icons/france.png";
import NetherlandsFlagImage from "@/public/icons/netherlands.png";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const locales = ["nl", "fr"] as const;

const labels: Record<(typeof locales)[number], string> = {
  nl: "NL",
  fr: "FR",
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
    <div className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="
          flex items-center gap-6
          rounded-md 
          bg-[--primary-color]
          px-4 py-3
          text-sm text-white
          transition
          hover:border-white/20
        "
      >
        <span className="flex gap-x-2">
          {currentLocale == "fr" ? (
            <Image src={FranceFlagImage} width={16} alt="France flag" />
          ) : (
            <Image
              src={NetherlandsFlagImage}
              width={16}
              alt="Netherlands flag"
            />
          )}
          {labels[currentLocale]}
        </span>
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
            bg-white
            rounded-md
          "
        >
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleChange(locale)}
              className={`
                w-full px-8 py-3 text-left text-sm
                flex gap-x-2
                transition
                ${
                  locale === currentLocale
                    ? "bg-white/5 text-black"
                    : "text-black/90 hover:bg-white/5"
                }
              `}
            >
              {locale === "fr" ? (
                <Image src={FranceFlagImage} width={16} alt="France flag" />
              ) : (
                <Image
                  src={NetherlandsFlagImage}
                  width={16}
                  alt="Netherlands flag"
                />
              )}
              {labels[locale]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
