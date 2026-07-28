import React, { useState } from "react";
import logo from "../logo/logo-removebg.png";

export const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      {/* Top bar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo TM Mining"
            className="h-12 w-12 flex-shrink-0 object-contain sm:h-16 sm:w-16"
          />
          <div>
            <p className="text-base font-bold sm:text-lg">TM Mining</p>
            <p className="text-sm text-gray-600">Internacional</p>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden gap-6 text-sm font-semibold text-gray-700 md:flex">
          <a href="/#home" className="hover:text-[#D35400]">
            Início
          </a>
          <a href="/#sobre" className="hover:text-[#D35400]">
            Sobre
          </a>
          <a href="/#equipamentos" className="hover:text-[#D35400]">
            Equipamentos
          </a>
          <a href="/#servicos" className="hover:text-[#D35400]">
            Serviços
          </a>
          <a href="/#revenda" className="hover:text-[#D35400]">
            Revenda
          </a>
          <a href="/#contacto" className="hover:text-[#D35400]">
            Contacto
          </a>
        </nav>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/351933852559?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20dos%20equipamentos%20TM%20Mining."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-[#D35400] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#c23d0e] md:inline-flex"
        >
          Contacto
        </a>

        {/* Hamburger button (mobile only) */}
        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex flex-col items-center justify-center gap-[5px] rounded-lg p-2 transition hover:bg-gray-100 md:hidden"
        >
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition-transform duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-700 transition-transform duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 pb-5 pt-3 md:hidden">
          <nav className="flex flex-col gap-1 text-sm font-semibold text-gray-700">
            <a
              href="/#home"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 hover:bg-gray-50 hover:text-[#D35400]"
            >
              Início
            </a>
            <a
              href="/#sobre"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 hover:bg-gray-50 hover:text-[#D35400]"
            >
              Sobre
            </a>
            <a
              href="/#equipamentos"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 hover:bg-gray-50 hover:text-[#D35400]"
            >
              Equipamentos
            </a>
            <a
              href="/#servicos"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 hover:bg-gray-50 hover:text-[#D35400]"
            >
              Serviços
            </a>
            <a
              href="/#revenda"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 hover:bg-gray-50 hover:text-[#D35400]"
            >
              Revenda
            </a>
            <a
              href="/#contacto"
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 hover:bg-gray-50 hover:text-[#D35400]"
            >
              Contacto
            </a>
          </nav>
          <div className="mt-4 border-t border-gray-100 pt-4">
            <a
              href="https://wa.me/351933852559?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20dos%20equipamentos%20TM%20Mining."
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="inline-flex w-full items-center justify-center rounded-full bg-[#D35400] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#c23d0e]"
            >
              Contacto via WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
