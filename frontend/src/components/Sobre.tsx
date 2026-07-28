import React from "react";
import logo from "../logo/logo-removebg.png";

const values = [
  {
    icon: "💡",
    title: "Inovação",
    description:
      "Procuramos constantemente as melhores soluções tecnológicas para os nossos clientes.",
  },
  {
    icon: "🏆",
    title: "Confiabilidade",
    description:
      "Equipamentos robustos e confiáveis que garantem continuidade operacional.",
  },
  {
    icon: "🌱",
    title: "Sustentabilidade",
    description: "Práticas ambientais responsáveis e soluções mais eficientes.",
  },
];

export const Sobre: React.FC = () => {
  return (
    <section id="sobre" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col items-start gap-5 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D35400]">
              Quem somos
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Valores que sustentam a operação e a relação com os nossos
              clientes.
            </h2>
          </div>
          <img
            src={logo}
            alt="Logo TM Mining"
            className="h-48 w-48 flex-shrink-0 object-contain md:ml-auto"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <div className="text-4xl">{value.icon}</div>
              <h3 className="mt-4 text-xl font-bold">{value.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
