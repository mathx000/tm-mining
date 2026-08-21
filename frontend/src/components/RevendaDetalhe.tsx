import React, { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { equipment } from "../data";
import img5 from "../img/5.jpeg";
import img6 from "../img/6.jpeg";
import img7 from "../img/7.jpeg";

export const RevendaDetalhe: React.FC = () => {
  const { t } = useTranslation();
  const [showEquipmentList, setShowEquipmentList] = useState(false);

  const highlights = [
    {
      image: img6,
      title: t("revendaDetalhe.highlight1Title"),
      description: t("revendaDetalhe.highlight1Desc"),
    },
    {
      image: img7,
      title: t("revendaDetalhe.highlight2Title"),
      description: t("revendaDetalhe.highlight2Desc"),
    },
  ];

  return (
    <section className="relative bg-[#f7f7f5] px-3 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(211,84,0,0.16),_transparent_55%),radial-gradient(circle_at_bottom_left,_rgba(255,184,28,0.2),_transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <article className="grid overflow-hidden rounded-3xl border border-[#1a1a1a]/10 bg-white shadow-[0_20px_60px_-30px_rgba(26,26,26,0.35)] lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-6 sm:p-8 lg:p-10">
                <p className="inline-flex items-center rounded-full border border-[#D35400]/20 bg-[#fff3e1] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#D35400]">
                  {t("revendaDetalhe.partnershipProgram")}
                </p>
                <h1 className="mt-5 text-2xl font-black leading-tight text-[#1a1a1a] sm:text-3xl lg:text-4xl">
                  {t("revendaDetalhe.title")}
                </h1>
                <p className="mt-5 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
                  <Trans
                    i18nKey="revendaDetalhe.description"
                    values={{
                      highlight: t("revendaDetalhe.descriptionHighlight"),
                    }}
                    components={{ 1: <strong /> }}
                  />
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-[#D35400]/20 bg-[#fff7eb] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D35400]">
                      {t("revendaDetalhe.commission")}
                    </p>
                    <p className="mt-2 text-3xl font-black text-[#1a1a1a]">
                      5%
                    </p>
                  </div>
                  <div className="rounded-2xl border border-[#d9d9d6] bg-[#fafafa] p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b7280]">
                      {t("revendaDetalhe.support")}
                    </p>
                    <p className="mt-2 text-base font-semibold text-[#1a1a1a]">
                      {t("revendaDetalhe.supportValue")}
                    </p>
                  </div>
                </div>
              </div>

              <img
                src={img5}
                alt="Parceiro comercial em reunião de revenda"
                className="h-72 w-full object-cover lg:h-full"
              />
            </article>

            <div className="grid gap-5 sm:grid-cols-2">
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-2xl border border-[#d9d9d6] bg-white shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-36 w-full object-cover"
                  />
                  <div className="p-3 sm:p-4 lg:p-5">
                    <h3 className="text-base font-bold text-[#1a1a1a]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[#1a1a1a]/10 bg-white p-3 shadow-[0_20px_60px_-30px_rgba(26,26,26,0.35)] sm:p-6 lg:p-8">
            <h2 className="text-2xl font-bold text-[#1a1a1a]">
              {t("revendaDetalhe.formTitle")}
            </h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              {t("revendaDetalhe.formDesc")}
            </p>

            <form
              className="mt-6 grid gap-5"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-gray-700">
                  {t("revendaDetalhe.name")}
                  <input
                    type="text"
                    name="nome"
                    className="rounded-xl border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 text-sm text-[#1a1a1a] outline-none transition focus:border-[#D35400] focus:ring-2 focus:ring-[#D35400]/20"
                    placeholder={t("revendaDetalhe.namePlaceholder")}
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-gray-700">
                  {t("revendaDetalhe.company")}
                  <input
                    type="text"
                    name="empresa"
                    className="rounded-xl border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 text-sm text-[#1a1a1a] outline-none transition focus:border-[#D35400] focus:ring-2 focus:ring-[#D35400]/20"
                    placeholder={t("revendaDetalhe.companyPlaceholder")}
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-gray-700">
                  {t("revendaDetalhe.taxId")}
                  <input
                    type="text"
                    name="nif"
                    className="rounded-xl border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 text-sm text-[#1a1a1a] outline-none transition focus:border-[#D35400] focus:ring-2 focus:ring-[#D35400]/20"
                    placeholder={t("revendaDetalhe.taxIdPlaceholder")}
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-gray-700">
                  {t("revendaDetalhe.email")}
                  <input
                    type="email"
                    name="email"
                    className="rounded-xl border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 text-sm text-[#1a1a1a] outline-none transition focus:border-[#D35400] focus:ring-2 focus:ring-[#D35400]/20"
                    placeholder={t("revendaDetalhe.emailPlaceholder")}
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-gray-700">
                  {t("revendaDetalhe.contact")}
                  <input
                    type="tel"
                    name="contacto"
                    className="rounded-xl border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 text-sm text-[#1a1a1a] outline-none transition focus:border-[#D35400] focus:ring-2 focus:ring-[#D35400]/20"
                    placeholder="+351"
                  />
                </label>
              </div>

              <fieldset className="grid gap-3 rounded-2xl border border-gray-300 bg-[#fcfcfb] p-4">
                <legend className="px-1 text-sm font-semibold text-gray-700">
                  {t("revendaDetalhe.equipment")}
                </legend>
                <p className="text-xs text-gray-500">
                  {t("revendaDetalhe.equipmentHelp")}
                </p>
                <button
                  type="button"
                  onClick={() => setShowEquipmentList((prev) => !prev)}
                  aria-expanded={showEquipmentList}
                  className="inline-flex w-fit items-center rounded-full border border-[#D35400]/30 bg-white px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-semibold text-[#D35400] transition hover:border-[#D35400] hover:bg-[#fff7eb]"
                >
                  {showEquipmentList
                    ? t("revendaDetalhe.hideEquipment")
                    : t("revendaDetalhe.showEquipment")}
                </button>
                {showEquipmentList ? (
                  <div className="grid gap-2 sm:grid-cols-2">
                    {equipment.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 transition hover:border-[#D35400]/40"
                      >
                        <input
                          type="checkbox"
                          name="equipamentos"
                          value={item.id}
                          className="h-4 w-4 rounded border-gray-300 text-[#D35400] focus:ring-[#D35400]/30"
                        />
                        <span>{item.name}</span>
                      </label>
                    ))}
                  </div>
                ) : null}
              </fieldset>

              <label className="grid gap-2 text-sm font-semibold text-gray-700">
                {t("revendaDetalhe.message")}
                <textarea
                  name="mensagem"
                  rows={5}
                  className="rounded-xl border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 text-sm text-[#1a1a1a] outline-none transition focus:border-[#D35400] focus:ring-2 focus:ring-[#D35400]/20"
                  placeholder={t("revendaDetalhe.messagePlaceholder")}
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-[#D35400] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b74800]"
              >
                {t("revendaDetalhe.submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
