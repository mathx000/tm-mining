import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "pt", name: "PT", flag: "pt" },
    { code: "en", name: "EN", flag: "gb" },
    { code: "fr", name: "FR", flag: "fr" },
    { code: "es", name: "ES", flag: "es" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) ?? languages[0];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem("language", langCode);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1.5 text-sm font-semibold text-[#D35400] transition hover:bg-gray-200"
      >
        <img
          src={`https://flagcdn.com/24x18/${currentLanguage.flag}.png`}
          alt={currentLanguage.name}
          className="h-3.5 w-5 rounded-sm object-cover"
        />
        <span>{currentLanguage.name}</span>
        <svg
          className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-28 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => handleLanguageChange(lang.code)}
              className={`flex w-full items-center gap-2 px-3 py-2 text-sm font-semibold transition ${
                i18n.language === lang.code
                  ? "bg-[#D35400] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <img
                src={`https://flagcdn.com/24x18/${lang.flag}.png`}
                alt={lang.name}
                className="h-3.5 w-5 rounded-sm object-cover"
              />
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
