import React from "react";
import { useTranslation } from "react-i18next";

export const Sobre: React.FC = () => {
  const { t } = useTranslation();

  const values = [
    {
      title: t("sobre.values.innovation"),
      description: t("sobre.values.innovationDesc"),
    },
    {
      title: t("sobre.values.reliability"),
      description: t("sobre.values.reliabilityDesc"),
    },
    {
      title: t("sobre.values.sustainability"),
      description: t("sobre.values.sustainabilityDesc"),
    },
  ];

  return (
    <section id="sobre" className="px-3 py-12 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col items-start gap-3 sm:gap-4 md:mb-10 md:gap-5 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D35400]">
              {t("sobre.experienceLabel")}
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl xl:text-[4rem]">
              {t("sobre.title")}
            </h2>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#D35400]/15 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D35400]">
                {t("sobre.label")}
              </p>
              <h3 className="mt-3 text-2xl font-bold text-[#1a1a1a] sm:text-3xl lg:text-[3rem] lg:leading-[1.05]">
                {t("sobre.experienceTitle")}
              </h3>
              <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                {t("sobre.experienceDesc")}
              </p>
            </div>

            <div className="rounded-3xl border border-white/20 bg-[#1a1a1a] p-6 shadow-2xl backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#FFB81C]">
                {t("sobre.groupLabel")}
              </p>
              <p className="mt-3 text-sm leading-7 text-gray-200 sm:text-base">
                {t("sobre.groupDesc1")}
              </p>
              <p className="mt-4 text-sm leading-7 text-gray-400">
                {t("sobre.groupDesc2")}
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
