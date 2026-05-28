"use client";

import { useState, useEffect } from "react";
import { Menu, X, Scale } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "¿Notario Público?", href: "#notario" },
  { label: "Servicios", href: "#servicios" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Requisitos", href: "#requisitos" },
  { label: "Municipios", href: "#municipios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#255234] shadow-lg shadow-black/20"
          : "bg-[#255234]/85 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group shrink-0 min-w-0"
            onClick={() => {
              setOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight min-w-0">
              <div className="text-white font-bold text-sm md:text-base tracking-wide font-serif truncate">
                Notaría Pública
              </div>
              <div className="text-white/70 text-xs tracking-widest uppercase truncate">
                No. 2 · Monterrey
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm text-white/80 hover:text-white transition-colors rounded cursor-pointer font-medium tracking-wide whitespace-nowrap"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => handleNavClick("#contacto")}
            className="hidden lg:inline-flex shrink-0 px-5 py-2 rounded-full bg-white text-[#255234] text-sm font-semibold hover:bg-white/90 transition-colors"
          >
            Contáctenos
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="lg:hidden shrink-0 text-white p-2 -mr-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[#255234] max-h-[calc(100dvh-4rem)] overflow-y-auto">
          <nav className="px-4 py-3 pb-6 flex flex-col">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left py-3.5 text-white/85 hover:text-white transition-colors text-base border-b border-white/10 last:border-b-0"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick("#contacto")}
              className="mt-4 w-full py-3 rounded-full bg-white text-[#255234] font-semibold hover:bg-white/90 transition-colors"
            >
              Contáctenos
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
