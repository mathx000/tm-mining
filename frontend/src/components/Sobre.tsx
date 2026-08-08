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
    <section id="sobre" className="px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col items-start gap-3 sm:gap-4 md:mb-10 md:gap-5 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D35400]">
              Quem somos
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Mais de vinte anos de experiência nos setores de mineração e
              construção.
            </h2>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#D35400]/15 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D35400]">
                Sobre nós
              </p>
              <h3 className="mt-3 text-2xl font-bold text-[#1a1a1a] sm:text-3xl">
                A TM Mining International
              </h3>
              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                A TM Mining International dedica-se ao comércio internacional de
                maquinaria industrial para pedreiras, disponibilizando
                equipamentos de escavação, britagem e crivagem a operadores em
                toda a Europa. Atuamos como elo entre fabricantes e vendedores
                de equipamento usado e novo e as empresas que deles necessitam,
                promovendo a circulação de máquinas entre mercados e
                consolidando relações comerciais duradouras com clientes e
                parceiros internacionais.
              </p>
            </div>

            <div className="rounded-3xl border border-white/20 bg-[#1a1a1a] p-6 shadow-2xl backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FFB81C]">
                Grupo Seixas Pinto
              </p>
              <p className="mt-3 text-sm leading-7 text-gray-200 sm:text-base">
                Integramos o Grupo Seixas Pinto, com mais de duas décadas de
                atividade nos setores da mineração e da construção em Portugal e
                em Angola. O Grupo detém e opera mais de dez pedreiras,
                complementadas por empresas próprias de construção civil, o que
                nos confere um conhecimento aprofundado e transversal de toda a
                cadeia de valor — da extração à máquina.
              </p>
              <p className="mt-4 text-sm leading-7 text-gray-400">
                É esta experiência de terreno, acumulada ao longo de mais de
                vinte anos, que aplicamos na comercialização de milhares de
                equipamentos junto de produtores em todo o mundo.
              </p>
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
