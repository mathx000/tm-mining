import React from "react";
import { useTranslation } from "react-i18next";
import img8 from "../img/sce/8.jpeg";

export const Revendas: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="revenda"
      className="bg-white px-3 py-12 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[32px] border border-[#D35400]/20 bg-gradient-to-br from-[#FFF4E5] via-[#FFE8C2] to-[#FFFDF8] shadow-[0_20px_60px_-20px_rgba(211,84,0,0.35)]">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
              <div className="inline-flex w-fit items-center rounded-full border border-[#D35400]/20 bg-white/70 px-3 py-1 text-sm font-semibold uppercase tracking-[0.25em] text-[#D35400]">
                {t("revendas.label")}
              </div>
              <h3 className="mt-4 text-2xl font-bold text-[#1f1f1f] sm:text-3xl">
                {t("revendas.title")}
              </h3>
              <p className="mt-3 max-w-xl text-lg leading-8 text-gray-700">
                {t("revendas.description")}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="rounded-2xl border border-[#D35400]/20 bg-white/80 px-4 py-3 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D35400]">
                    {t("revendas.benefit")}
                  </p>
                  <p className="mt-1 text-2xl font-black text-[#1f1f1f]">
                    {t("revendas.benefitValue")}
                  </p>
                </div>
                <div className="rounded-2xl border border-[#D35400]/20 bg-white/80 px-4 py-3 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D35400]">
                    {t("revendas.support")}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-700">
                    {t("revendas.supportValue")}
                  </p>
                </div>
              </div>

              <a
                href="/revendas"
                className="mt-6 inline-flex w-fit items-center rounded-full bg-[#D35400] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b74800]"
              >
                {t("revendas.learnMore")}
              </a>
            </div>

            <div className="relative h-48 overflow-hidden bg-gray-200 sm:h-64 lg:h-auto">
              <img
                src={img8}
                alt="Espaço de parceria e negócio"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
