"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useLang } from "./LangProvider";
import { t } from "@/lib/translations";
import LangToggle from "./LangToggle";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang } = useLang();
  const tr = t[lang];

  const navLinks = [
    { label: tr.nav.inicio, href: "#inicio" },
    { label: tr.nav.servicios, href: "#servicios" },
    { label: tr.nav.nosotros, href: "#nosotros" },
    { label: tr.nav.contacto, href: "#contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick("#inicio")}>
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-sm p-0.5 shadow-sm">
              <Image src="/logo.png" alt="FormaNova logo" fill className="object-contain" priority />
            </div>
            <div className="flex flex-col">
              <span className="text-base lg:text-lg font-bold tracking-widest uppercase leading-none">
                <span className="text-gray-700">FORMA</span>
                <span className="text-brand-gold">NOVA</span>
              </span>
              <span className="text-[10px] text-gray-500 tracking-widest uppercase">
                OBRAS & REFORMAS
              </span>
            </div>
          </div>

          {/* Lang toggle — center of header */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <LangToggle />
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-gray-600 hover:text-brand-gold transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contacto"); }}
              className="hidden lg:inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-black text-sm font-semibold px-5 py-2.5 rounded-sm transition-all duration-200 tracking-wide"
            >
              {tr.navCta}
            </a>

            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-sm border border-gray-200 bg-white text-gray-700 hover:text-brand-gold hover:border-brand-gold/40 transition-all duration-200"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú"
            >
              <span
                style={{
                  display: "block",
                  transition: "transform 0.25s ease, opacity 0.2s ease",
                  position: "absolute",
                  opacity: menuOpen ? 0 : 1,
                  transform: menuOpen ? "rotate(90deg) scale(0.5)" : "rotate(0deg) scale(1)",
                }}
              >
                <Menu size={20} />
              </span>
              <span
                style={{
                  display: "block",
                  transition: "transform 0.25s ease, opacity 0.2s ease",
                  position: "absolute",
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.5)",
                }}
              >
                <X size={20} />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu — slides down smoothly */}
      <div
        className="lg:hidden absolute left-0 right-0"
        style={{
          top: "100%",
          transition: "opacity 0.25s ease, transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? "translateY(0)" : "translateY(-10px)",
          pointerEvents: menuOpen ? "auto" : "none",
          zIndex: 50,
        }}
      >
        <div className="bg-white border-b border-gray-200 shadow-2xl px-6 py-5 flex flex-col gap-1">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-gray-700 hover:text-brand-gold font-medium text-lg py-3.5 transition-colors duration-150 tracking-wide"
              style={{
                borderBottom: i < navLinks.length - 1 ? "1px solid #f3f4f6" : "none",
              }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="#contacto"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contacto"); }}
            className="mt-3 inline-flex items-center justify-center bg-brand-gold hover:bg-brand-gold-light text-black font-semibold px-6 py-3.5 rounded-sm transition-colors text-base tracking-wide"
          >
            {tr.navCta}
          </a>
        </div>
      </div>
    </header>
  );
}
