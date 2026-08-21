import React from "react";
import { useTranslation } from "react-i18next";
import img1 from "../img/1.jpeg";
import img2 from "../img/2.jpeg";
import img3 from "../img/3.jpeg";
import img4 from "../img/4.jpeg";

export const Servicos: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      image: img1,
      imageAlt: "Inspecao tecnica de equipamento em operacao",
      title: t("servicos.service1Title"),
      description: t("servicos.service1Desc"),
    },
    {
      image: img2,
      imageAlt: "Painel de monitorizacao de desempenho",
      title: t("servicos.service2Title"),
      description: t("servicos.service2Desc"),
    },
    {
      image: img3,
      imageAlt: "Equipa tecnica em manutencao de equipamento pesado",
      title: t("servicos.service3Title"),
      description: t("servicos.service3Desc"),
    },
    {
      image: img4,
      imageAlt: "Gestao de frota e operacoes em ambiente industrial",
      title: t("servicos.service4Title"),
      description: t("servicos.service4Desc"),
    },
  ];

  return (
    <section
      id="servicos"
      className="bg-white px-3 py-12 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D35400]">
            {t("servicos.label")}
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            {t("servicos.title")}
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
