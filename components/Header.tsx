"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

          {/* Logo */}
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
                REFORMAS & OBRAS
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
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

          {/* Right side: CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contacto"); }}
              className="hidden lg:inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-light text-black text-sm font-semibold px-5 py-2.5 rounded-sm transition-all duration-200 tracking-wide"
            >
              Solicitar Presupuesto
            </a>

            <button
              className="lg:hidden text-gray-700 hover:text-brand-gold p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Abrir menú"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-white/98 backdrop-blur-md border-t border-gray-200 px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-gray-700 hover:text-brand-gold font-medium text-lg py-2 border-b border-gray-100 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="#contacto"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contacto"); }}
            className="mt-2 inline-flex items-center justify-center bg-brand-gold hover:bg-brand-gold-light text-black font-semibold px-6 py-3 rounded-sm transition-colors text-base tracking-wide"
          >
            Solicitar Presupuesto
          </a>
        </div>
      </div>
    </header>
  );
}
