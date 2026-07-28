import React from "react";
import backgroundImage from "../img/background.png";

export const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="bg-cover bg-center bg-no-repeat px-6 py-24 text-white lg:px-8"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
      }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFB81C]">
            Equipamentos pesados para construção e mineração
          </p>
          <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Tecnologia e potência em cada operação.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-200">
            Oferecemos máquinas de alto desempenho, disponibilidade imediata e
            suporte especializado para projetos de grande porte.
          </p>
        </div>

        <div className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur">
          <h2 className="text-2xl font-bold">Por que escolher a TM Mining?</h2>
          <ul className="mt-6 space-y-3 text-sm text-gray-200">
            <li>• Linha completa de equipamentos premium</li>
            <li>• Atendimento técnico especializado</li>
            <li>• Entrega com prazo claro e transparente</li>
            <li>• Soluções para mineração, britagem e transporte</li>
            <li className="text-[#FFB81C]">
              • Revenda de equipamentos com comissão
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
