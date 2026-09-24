import React from "react";
import { useTranslation } from "react-i18next";
import { PT } from "country-flag-icons/react/3x2";

export const Contato: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contacto"
      className="bg-[#1a1a1a] px-3 py-14 text-white sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FFB81C]">
            {t("contato.label")}
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            {t("contato.title")}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-gray-300">
            {t("contato.description")}
          </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border-l border-[#FFB81C] pl-4">
              <p className="font-semibold text-white">
                {t("contato.contact1Name")}
              </p>
              <a href="tel:+351933852559" className="mt-1 flex items-center gap-2 text-gray-300 transition hover:text-white">
                <PT aria-hidden="true" className="h-3.5 w-5 rounded-sm" />
                <span>{t("contato.contact1Phone")}</span>
              </a>
              <a
                href="mailto:nordareias@mail.telepac.pt"
                className="mt-1 inline-block text-gray-300 transition hover:text-white"
              >
                {t("contato.contact1Email")}
              </a>
            </div>
            <div className="border-l border-[#FFB81C] pl-4">
              <p className="font-semibold text-white">
                {t("contato.contact2Name")}
              </p>
              <a href="tel:+351933079179" className="mt-1 flex items-center gap-2 text-gray-300 transition hover:text-white">
                <PT aria-hidden="true" className="h-3.5 w-5 rounded-sm" />
                <span>{t("contato.contact2Phone")}</span>
              </a>
              <a
                href="mailto:blocifel@hotmail.com"
                className="mt-1 inline-block text-gray-300 transition hover:text-white"
              >
                {t("contato.contact2Email")}
              </a>
            </div>
            <div className="border-l border-[#FFB81C] pl-4">
              <p className="font-semibold text-white">
                {t("contato.contact3Name")}
              </p>
              <a href="tel:+351938181967" className="mt-1 flex items-center gap-2 text-gray-300 transition hover:text-white">
                <PT aria-hidden="true" className="h-3.5 w-5 rounded-sm" />
                <span>{t("contato.contact3Phone")}</span>
              </a>
            </div>
          </div>
          <a
            href="https://wa.me/351938181967?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20equipamentos%20TM%20Mining."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit rounded-md bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1ebe5b]"
          >
            {t("contato.whatsapp")}
          </a>
        </div>
      </div>
    </section>
  );
};
