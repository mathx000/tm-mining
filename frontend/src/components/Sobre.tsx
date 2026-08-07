import React from "react";

const values = [
  {
    title: "Inovação",
    description:
      "Procuramos constantemente as melhores soluções tecnológicas para os nossos clientes.",
  },
  {
    title: "Confiabilidade",
    description:
      "Equipamentos robustos e confiáveis que garantem continuidade operacional.",
  },
  {
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
              Experiência, resposta rápida e equipamentos certos para cada
              operação.
            </h2>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#D35400]/15 bg-white p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D35400]">
                Por que escolher a TM Mining?
              </p>
              <h3 className="mt-3 text-2xl font-bold text-[#1a1a1a] sm:text-3xl">
                Uma parceria que combina disponibilidade, suporte e retorno.
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                Trabalhamos para entregar uma proposta completa: linha de
                equipamentos premium, acompanhamento técnico e uma operação
                preparada para responder com confiança às exigências do setor.
              </p>
            </div>

            <div className="rounded-3xl border border-white/20 bg-[#1a1a1a] p-6 shadow-2xl backdrop-blur">
              <ul className="space-y-3 text-sm text-gray-200 sm:text-base">
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
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold">{value.title}</h3>
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
