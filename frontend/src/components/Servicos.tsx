import React from "react";
import img1 from "../img/1.jpeg";
import img2 from "../img/2.jpeg";
import img3 from "../img/3.jpeg";
import img4 from "../img/4.jpeg";

const services = [
  {
    image: img1,
    imageAlt: "Inspecao tecnica de equipamento em operacao",
    title: "Diagnóstico técnico especializado",
    description:
      "Fazemos avaliação completa de máquinas para aumentar disponibilidade e reduzir paragens inesperadas na operação.",
  },
  {
    image: img2,
    imageAlt: "Painel de monitorizacao de desempenho",
    title: "Monitorização e controlo operacional",
    description:
      "Acompanhamento contínuo dos indicadores de produção para melhorar eficiência, consumo e planeamento de manutenção.",
  },
  {
    image: img3,
    imageAlt: "Equipa tecnica em manutencao de equipamento pesado",
    title: "Manutenção preventiva programada",
    description:
      "Planos de manutenção ajustados ao ciclo de trabalho para prolongar a vida útil dos componentes críticos.",
  },
  {
    image: img4,
    imageAlt: "Gestao de frota e operacoes em ambiente industrial",
    title: "Gestão integrada de frota",
    description:
      "Integramos informação técnica e operacional para apoiar decisões mais rápidas e seguras em campo.",
  },
];

export const Servicos: React.FC = () => {
  return (
    <section id="servicos" className="bg-white px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D35400]">
            Soluções inteligentes
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Serviços e soluções completas para projetos pesados.
          </h2>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="grid overflow-hidden rounded-3xl border border-gray-200 bg-[#f7f7f6] shadow-sm lg:grid-cols-2"
            >
              <div className={`${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="h-72 w-full object-cover lg:h-full"
                />
              </div>

              <div className="flex items-center bg-white p-6 sm:p-8 lg:p-10">
                <div>
                  <h3 className="mt-3 text-2xl font-bold text-[#1a1a1a] sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-gray-700 sm:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
