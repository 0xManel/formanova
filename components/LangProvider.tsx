"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Lang } from "@/lib/translations";

const LangContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: "gl",
  toggle: () => {},
});

export function useLang() {
  return useContext(LangContext);
}

export default function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("gl");

  useEffect(() => {
    const saved = localStorage.getItem("fn-lang") as Lang | null;
    if (saved === "es" || saved === "gl") setLang(saved);
  }, []);

  const toggle = () => {
    const next: Lang = lang === "gl" ? "es" : "gl";
    setLang(next);
    localStorage.setItem("fn-lang", next);
  };

  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}
