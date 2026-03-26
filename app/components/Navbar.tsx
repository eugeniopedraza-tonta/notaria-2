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
          ? "bg-[#0f1f3d] shadow-lg shadow-black/20"
          : "bg-[#0f1f3d]/95"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-9 h-9 rounded-full bg-[#b8962e] flex items-center justify-center shrink-0">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <div className="text-white font-bold text-sm md:text-base tracking-wide font-serif">
                Notaría Pública
              </div>
              <div className="text-[#d4af57] text-xs tracking-widest uppercase">
                No. 2 · Monterrey
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm text-white/80 hover:text-[#d4af57] transition-colors rounded cursor-pointer font-medium tracking-wide"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contacto")}
              className="ml-4 px-5 py-2 rounded-full bg-[#b8962e] text-white text-sm font-semibold hover:bg-[#d4af57] transition-colors"
            >
              Contáctenos
            </button>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0f1f3d] border-t border-white/10 px-4 pb-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left py-3 text-white/85 hover:text-[#d4af57] transition-colors text-base border-b border-white/5 last:border-0"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contacto")}
            className="mt-4 w-full py-3 rounded-full bg-[#b8962e] text-white font-semibold hover:bg-[#d4af57] transition-colors"
          >
            Contáctenos
          </button>
        </div>
      )}
    </header>
  );
}
