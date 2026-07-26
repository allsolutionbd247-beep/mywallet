"use client";

import { useState } from "react";

export default function LanguageSection() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  const languages = [
    { name: "English", code: "en", flag: "🇺🇸" },
    { name: "বাংলা", code: "bn", flag: "🇧🇩" },
    { name: "Русский", code: "ru", flag: "🇷🇺" },
    { name: "中文", code: "zh", flag: "🇨🇳" },
    { name: "हिन्दी", code: "hi", flag: "🇮🇳" },
    { name: "العربية", code: "ar", flag: "🇸🇦" },
    { name: "Español", code: "es", flag: "🇪🇸" },
    { name: "Français", code: "fr", flag: "🇫🇷" },
    { name: "Deutsch", code: "de", flag: "🇩🇪" },
  ];

  return (
    <div className="sticky top-0 z-50 w-full flex justify-end px-6 py-3 bg-[#ecfdf5] border-b border-emerald-100">

      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-semibold bg-white hover:bg-gray-50"
        >
          🌐 {language}
          <span>⌄</span>
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.name);
                  setOpen(false);
                }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
              >
                {lang.flag} {lang.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
