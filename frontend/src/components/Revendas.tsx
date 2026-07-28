import React from "react";

export const Revendas: React.FC = () => {
  return (
    <section id="revenda" className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[28px] border border-[#D35400]/20 bg-gradient-to-br from-[#FFF4E5] via-[#FFE8C2] to-[#FFFDF8] p-8 shadow-[0_20px_60px_-20px_rgba(211,84,0,0.35)] lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-[#D35400]/20 bg-white/70 px-3 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-[#D35400]">
                Parcerias estratégicas
              </div>
              <h3 className="mt-4 text-2xl font-bold text-[#1f1f1f] sm:text-3xl">
                Torne-se um Revendedor
              </h3>
              <p className="mt-3 text-lg leading-8 text-gray-700">
                Faça parte da nossa rede de parceiros e aumente os seus
                rendimentos. Ao revender os nossos equipamentos, recebe{" "}
                <strong>5% de comissão por cada venda concluída</strong>, com
                total transparência e suporte da nossa equipa.
              </p>
              <a
                href="/revendas"
                className="mt-6 inline-flex items-center rounded-full bg-[#D35400] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b74800]"
              >
                Saiba mais
              </a>
            </div>
            <div className="rounded-2xl border border-[#D35400]/20 bg-white/80 px-6 py-5 text-center shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#D35400]">
                Benefício
              </p>
              <p className="mt-2 text-4xl font-black text-[#1f1f1f]">+5%</p>
              <p className="mt-1 text-sm text-gray-600">comissão por venda</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
