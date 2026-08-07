import React from "react";
import img8 from "../img/8.jpeg";

export const Revendas: React.FC = () => {
  return (
    <section id="revenda" className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[32px] border border-[#D35400]/20 bg-gradient-to-br from-[#FFF4E5] via-[#FFE8C2] to-[#FFFDF8] shadow-[0_20px_60px_-20px_rgba(211,84,0,0.35)]">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <div className="inline-flex w-fit items-center rounded-full border border-[#D35400]/20 bg-white/70 px-3 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-[#D35400]">
                Parcerias estratégicas
              </div>
              <h3 className="mt-4 text-2xl font-bold text-[#1f1f1f] sm:text-3xl">
                Torne-se um Revendedor
              </h3>
              <p className="mt-3 max-w-xl text-lg leading-8 text-gray-700">
                Faça parte da nossa rede de parceiros e aumente os seus
                rendimentos. Ao revender os nossos equipamentos, recebe{" "}
                <strong>5% de comissão por cada venda concluída</strong>, com
                total transparência e suporte da nossa equipa.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="rounded-2xl border border-[#D35400]/20 bg-white/80 px-4 py-3 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D35400]">
                    Benefício
                  </p>
                  <p className="mt-1 text-2xl font-black text-[#1f1f1f]">+5%</p>
                </div>
                <div className="rounded-2xl border border-[#D35400]/20 bg-white/80 px-4 py-3 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D35400]">
                    Suporte
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-700">
                    Comercial e técnico
                  </p>
                </div>
              </div>

              <a
                href="/revendas"
                className="mt-6 inline-flex w-fit items-center rounded-full bg-[#D35400] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b74800]"
              >
                Saiba mais
              </a>
            </div>

            <div className="relative h-64 overflow-hidden bg-gray-200 lg:h-auto">
              <img
                src={img8}
                alt="Espaço de parceria e negócio"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
