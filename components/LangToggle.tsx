"use client";

import { useLang } from "./LangProvider";

export default function LangToggle() {
  const { lang, toggle } = useLang();
  const isGl = lang === "gl";

  return (
    <div className="flex flex-col items-center gap-1.5 mb-6">
      <p className="text-[10px] text-gray-400 tracking-[0.25em] uppercase font-medium">Idioma</p>
      <button
        onClick={toggle}
        aria-label="Cambiar idioma"
        className="relative flex items-stretch rounded-full border border-brand-gold/40 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:border-brand-gold hover:shadow-md hover:shadow-brand-gold/10"
      >
        <span
          className="relative px-6 py-2 text-xs font-bold tracking-[0.18em] uppercase transition-all duration-300 flex items-center gap-2"
          style={{ color: isGl ? "#111" : "#9CA3AF", background: isGl ? "#C9A84C" : "transparent" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
            <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2z"/>
            <path d="M12 2c-2.76 4.56-2.76 15.44 0 20"/>
            <path d="M12 2c2.76 4.56 2.76 15.44 0 20"/>
            <path d="M2 12h20"/>
          </svg>
          Galego
        </span>
        <span className="self-center w-px h-4 bg-brand-gold/30 flex-shrink-0" />
        <span
          className="relative px-6 py-2 text-xs font-bold tracking-[0.18em] uppercase transition-all duration-300 flex items-center gap-2"
          style={{ color: !isGl ? "#111" : "#9CA3AF", background: !isGl ? "#C9A84C" : "transparent" }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          Castelán
        </span>
      </button>
    </div>
  );
}
