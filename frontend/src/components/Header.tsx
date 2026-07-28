import React from "react";
import logo from "../logo/logo-removebg.png";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="/#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo TM Mining"
            className="h-16 w-16 flex-shrink-0 object-contain"
          />
          <div>
            <p className="text-lg font-bold">TM Mining</p>
            <p className="text-sm text-gray-600">Internacional</p>
          </div>
        </a>

        <nav className="hidden gap-6 text-sm font-semibold text-gray-700 md:flex">
          <a href="/#home" className="hover:text-[#D35400]">
            Início
          </a>
          <a href="/#equipamentos" className="hover:text-[#D35400]">
            Equipamentos
          </a>
          <a href="/#revenda" className="hover:text-[#D35400]">
            Revenda
          </a>
          <a href="/#servicos" className="hover:text-[#D35400]">
            Serviços
          </a>
          <a href="/#sobre" className="hover:text-[#D35400]">
            Sobre
          </a>
          <a href="/#contacto" className="hover:text-[#D35400]">
            Contacto
          </a>
        </nav>

        <a
          href="https://wa.me/351933852559?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20dos%20equipamentos%20TM%20Mining."
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#D35400] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#c23d0e]"
        >
          Contacto
        </a>
      </div>
    </header>
  );
};
