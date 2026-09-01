import React, { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { equipment } from "../data";
import { submitToFormspree } from "../utils/formspree";
import { countryOptions } from "../utils/countries";
import img5 from "../img/sce/5.jpeg";
import img6 from "../img/sce/6.jpeg";
import img7 from "../img/sce/7.jpeg";

const REVENDA_FORMSPREE_ENDPOINT = import.meta.env
  .VITE_REVENDA_FORMSPREE_ENDPOINT;

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export const RevendaDetalhe: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [showEquipmentList, setShowEquipmentList] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [selectedEquipmentIds, setSelectedEquipmentIds] = useState<string[]>(
    [],
  );
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);
  const [isCountryMenuOpen, setIsCountryMenuOpen] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const selectedIds = selectedEquipmentIds;
    const selectedNames = selectedIds.map(
      (id) => equipment.find((item) => item.id === id)?.name || id,
    );

    setStatus("submitting");

    if (!REVENDA_FORMSPREE_ENDPOINT) {
      setStatus("error");
      return;
    }

    const result = await submitToFormspree(REVENDA_FORMSPREE_ENDPOINT, {
      nome: String(formData.get("nome") || ""),
      empresa: String(formData.get("empresa") || ""),
      nif: String(formData.get("nif") || ""),
      email: String(formData.get("email") || ""),
      contacto:
        `${String(formData.get("contacto_codigo") || "")} ${String(formData.get("contacto_numero") || "")}`.trim(),
      equipamentos: selectedNames,
      mensagem: String(formData.get("mensagem") || ""),
      _subject: "Nova candidatura de revenda - TM Mining International",
      idioma: i18n.language,
    });

    if (result.ok) {
      setStatus("success");
      setSelectedEquipmentIds([]);
      form.reset();
    } else {
      setStatus("error");
    }
  };

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
                loading="lazy"
                decoding="async"
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
                    loading="lazy"
                    decoding="async"
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

            {status === "success" ? (
              <div
                role="status"
                aria-live="polite"
                className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6 text-center"
              >
                <p className="text-lg font-bold text-green-800">
                  {t("revendaDetalhe.successTitle")}
                </p>
                <p className="mt-2 text-sm text-green-700">
                  {t("revendaDetalhe.successMessage")}
                </p>
              </div>
            ) : (
              <form className="mt-6 grid gap-5" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-gray-700">
                    <span>
                      {t("revendaDetalhe.name")}{" "}
                      <span aria-hidden="true" className="text-[#D35400]">
                        *
                      </span>
                    </span>
                    <input
                      type="text"
                      name="nome"
                      required
                      className="rounded-xl border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 text-sm text-[#1a1a1a] outline-none transition focus:border-[#D35400] focus:ring-2 focus:ring-[#D35400]/20"
                      placeholder={t("revendaDetalhe.namePlaceholder")}
                    />
                  </label>
                  <label className="grid gap-2 text-sm font-semibold text-gray-700">
                    <span>
                      {t("revendaDetalhe.company")}{" "}
                      <span aria-hidden="true" className="text-[#D35400]">
                        *
                      </span>
                    </span>
                    <input
                      type="text"
                      name="empresa"
                      required
                      className="rounded-xl border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 text-sm text-[#1a1a1a] outline-none transition focus:border-[#D35400] focus:ring-2 focus:ring-[#D35400]/20"
                      placeholder={t("revendaDetalhe.companyPlaceholder")}
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-gray-700">
                    <span>
                      {t("revendaDetalhe.taxId")}{" "}
                      <span aria-hidden="true" className="text-[#D35400]">
                        *
                      </span>
                    </span>
                    <input
                      type="text"
                      name="nif"
                      required
                      className="rounded-xl border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 text-sm text-[#1a1a1a] outline-none transition focus:border-[#D35400] focus:ring-2 focus:ring-[#D35400]/20"
                      placeholder={t("revendaDetalhe.taxIdPlaceholder")}
                    />
                  </label>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold text-gray-700">
                    <span>
                      {t("revendaDetalhe.email")}{" "}
                      <span aria-hidden="true" className="text-[#D35400]">
                        *
                      </span>
                    </span>
                    <input
                      type="email"
                      name="email"
                      required
                      className="rounded-xl border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 text-sm text-[#1a1a1a] outline-none transition focus:border-[#D35400] focus:ring-2 focus:ring-[#D35400]/20"
                      placeholder={t("revendaDetalhe.emailPlaceholder")}
                    />
                  </label>
                  <label className="grid min-w-0 gap-2 text-sm font-semibold text-gray-700">
                    <span>
                      {t("revendaDetalhe.contact")}{" "}
                      <span aria-hidden="true" className="text-[#D35400]">
                        *
                      </span>
                    </span>
                    <div className="flex min-w-0 w-full items-center rounded-xl border border-gray-300 bg-white px-3 py-2 sm:px-4 sm:py-3 transition focus-within:border-[#D35400] focus-within:ring-2 focus-within:ring-[#D35400]/20">
                      <input
                        type="hidden"
                        name="contacto_codigo"
                        value={selectedCountry.code}
                        readOnly
                      />
                      <div className="relative shrink-0 border-r border-gray-200 pr-2">
                        <button
                          type="button"
                          aria-expanded={isCountryMenuOpen}
                          aria-haspopup="listbox"
                          onClick={() =>
                            setIsCountryMenuOpen((isOpen) => !isOpen)
                          }
                          className="flex items-center gap-2 bg-transparent text-sm text-[#1a1a1a] outline-none"
                        >
                          <span className="flex h-4 w-6 shrink-0 items-center overflow-hidden">
                            <selectedCountry.Flag />
                          </span>
                          <span>{selectedCountry.code}</span>
                          <span aria-hidden="true" className="ml-1 text-xs">
                            &#9662;
                          </span>
                        </button>
                        {isCountryMenuOpen ? (
                          <div
                            role="listbox"
                            className="absolute left-0 top-full z-20 mt-2 grid min-w-44 gap-1 rounded-lg border border-gray-200 bg-white p-1 shadow-lg"
                          >
                            {countryOptions.map((country) => (
                              <button
                                key={country.code}
                                type="button"
                                role="option"
                                aria-selected={
                                  selectedCountry.code === country.code
                                }
                                onClick={() => {
                                  setSelectedCountry(country);
                                  setIsCountryMenuOpen(false);
                                }}
                                className="flex items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-[#1a1a1a] hover:bg-[#fff7eb]"
                              >
                                <span className="flex h-4 w-6 items-center overflow-hidden">
                                  <country.Flag />
                                </span>
                                <span>{country.name}</span>
                                <span className="ml-auto">{country.code}</span>
                              </button>
                            ))}
                          </div>
                        ) : null}
                      </div>
                      <input
                        type="tel"
                        name="contacto_numero"
                        required
                        placeholder="Número"
                        className="min-w-0 flex-1 bg-transparent pl-3 text-sm text-[#1a1a1a] outline-none"
                      />
                    </div>
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
                            checked={selectedEquipmentIds.includes(item.id)}
                            onChange={(event) => {
                              setSelectedEquipmentIds((currentIds) =>
                                event.target.checked
                                  ? [...currentIds, item.id]
                                  : currentIds.filter((id) => id !== item.id),
                              );
                            }}
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
                    required
                    className="rounded-xl border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 text-sm text-[#1a1a1a] outline-none transition focus:border-[#D35400] focus:ring-2 focus:ring-[#D35400]/20"
                    placeholder={t("revendaDetalhe.messagePlaceholder")}
                  />
                </label>

                {status === "error" ? (
                  <p
                    role="alert"
                    aria-live="assertive"
                    className="text-sm font-semibold text-red-700"
                  >
                    {t("revendaDetalhe.errorMessage")}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center justify-center rounded-full bg-[#D35400] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b74800] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "submitting"
                    ? t("revendaDetalhe.sending")
                    : status === "error"
                      ? t("revendaDetalhe.tryAgain")
                      : t("revendaDetalhe.submit")}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
