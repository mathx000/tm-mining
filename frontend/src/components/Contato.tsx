import React from "react";
import { useTranslation } from "react-i18next";
import { PT } from "country-flag-icons/react/3x2";

export const Contato: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contacto"
      className="bg-[#1a1a1a] px-3 py-12 sm:px-6 sm:py-20 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
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
          <div className="mt-8 space-y-4 text-sm text-gray-300">
            <div>
              <p className="font-semibold text-white">
                {t("contato.contact1Name")}
              </p>
              <p className="mt-1 flex items-center gap-2">
                <PT aria-hidden="true" className="h-3.5 w-5 rounded-sm" />
                <span>{t("contato.contact1Phone")}</span>
              </p>
              <a
                href="mailto:nordareias@mail.telepac.pt"
                className="mt-1 inline-block text-gray-300 transition hover:text-white"
              >
                {t("contato.contact1Email")}
              </a>
            </div>
            <div>
              <p className="font-semibold text-white">
                {t("contato.contact2Name")}
              </p>
              <p className="mt-1 flex items-center gap-2">
                <PT aria-hidden="true" className="h-3.5 w-5 rounded-sm" />
                <span>{t("contato.contact2Phone")}</span>
              </p>
              <a
                href="mailto:blocifel@hotmail.com"
                className="mt-1 inline-block text-gray-300 transition hover:text-white"
              >
                {t("contato.contact2Email")}
              </a>
            </div>
            <div>
              <p className="font-semibold text-white">
                {t("contato.contact3Name")}
              </p>
              <p className="mt-1 flex items-center gap-2">
                <PT aria-hidden="true" className="h-3.5 w-5 rounded-sm" />
                <span>{t("contato.contact3Phone")}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
