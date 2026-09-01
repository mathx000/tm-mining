import React, { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { equipment, formatPrice, normalizeEquipmentCategory } from "../data";
import { submitToFormspree } from "../utils/formspree";
import { countryOptions } from "../utils/countries";
import {
  buildWhatsAppLink,
  translateDeliveryTime,
  translateDescription,
  translateSpecKey,
  translateSpecValue,
} from "../utils/equipment";

const PRODUTO_FORMSPREE_ENDPOINT = import.meta.env
  .VITE_PRODUTO_FORMSPREE_ENDPOINT;

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export const ProdutoDetalhe: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [formStatus, setFormStatus] = useState<SubmitStatus>("idle");
  const { id } = useParams();
  const product = equipment.find((item) => item.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0]);
  const [isCountryMenuOpen, setIsCountryMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [id]);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    setFormStatus("submitting");

    if (!PRODUTO_FORMSPREE_ENDPOINT) {
      setFormStatus("error");
      return;
    }

    const result = await submitToFormspree(PRODUTO_FORMSPREE_ENDPOINT, {
      nome: String(formData.get("nome") || ""),
      empresa: String(formData.get("empresa") || ""),
      telefone:
        `${String(formData.get("telefone_codigo") || "")} ${String(formData.get("telefone_numero") || "")}`.trim(),
      email: String(formData.get("email") || ""),
      mensagem: String(formData.get("mensagem") || ""),
      _subject: "Novo interesse em equipamento - TM Mining Internacional",
      idioma: i18n.language,
      produto_id: product.id,
      produto_nome: product.name,
      produto_categoria: product.category,
      rota_origem: location.pathname,
    });

    if (result.ok) {
      setFormStatus("success");
      form.reset();
    } else {
      setFormStatus("error");
    }
  };

  // Usar array de imagens se disponível, senão usar imagem única
  const galleryImages =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  useEffect(() => {
    if (!isLightboxOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      }

      if (event.key === "ArrowLeft") {
        setCurrentImageIndex((prev) =>
          prev === 0 ? galleryImages.length - 1 : prev - 1,
        );
      }

      if (event.key === "ArrowRight") {
        setCurrentImageIndex((prev) =>
          prev === galleryImages.length - 1 ? 0 : prev + 1,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, galleryImages.length]);

  const showPreviousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  };

  const showNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1,
    );
  };

  const handleImageTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    setTouchStartX(event.changedTouches[0].clientX);
  };

  const handleImageTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    if (touchStartX === null) {
      return;
    }

    const deltaX = event.changedTouches[0].clientX - touchStartX;
    const swipeThreshold = 45;

    if (Math.abs(deltaX) < swipeThreshold) {
      setTouchStartX(null);
      return;
    }

    if (deltaX < 0) {
      showNextImage();
    } else {
      showPreviousImage();
    }

    setTouchStartX(null);
  };

  const handleLightboxPointerDown = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setTouchStartX(event.clientX);
  };

  const handleLightboxPointerUp = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (touchStartX === null) {
      return;
    }

    const deltaX = event.clientX - touchStartX;
    const swipeThreshold = 45;

    if (Math.abs(deltaX) < swipeThreshold) {
      setTouchStartX(null);
      return;
    }

    if (deltaX < 0) {
      showNextImage();
    } else {
      showPreviousImage();
    }

    setTouchStartX(null);
  };

  const relatedEquipment = equipment
    .filter((item) => item.id !== product.id)
    .slice(0, 5);

  return (
    <>
      <section className="px-3 py-8 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/#equipamentos"
            className="mb-8 inline-block text-sm font-semibold text-[#D35400] transition hover:text-[#b44500]"
          >
            {t("produtoDetalhe.backToEquipment")}
          </Link>

          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:gap-8">
            <article className="min-w-0 rounded-3xl border border-gray-200 bg-white p-3 shadow-sm sm:p-4 lg:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D35400]">
                {product.category}
              </p>
              <h1 className="mt-3 break-words text-xl font-black text-[#1a1a1a] sm:text-3xl lg:text-4xl">
                {product.name}
              </h1>
              <p className="mt-4 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
                {translateDescription(product.description, product.id, t)}
              </p>

              <div className="mt-8 space-y-4">
                <figure
                  className="relative touch-pan-y"
                  onTouchStart={handleImageTouchStart}
                  onTouchEnd={handleImageTouchEnd}
                >
                  <button
                    type="button"
                    onClick={() => setIsLightboxOpen(true)}
                    className="block w-full cursor-zoom-in"
                    aria-label={t("produtoDetalhe.expandImage")}
                  >
                    <img
                      src={galleryImages[currentImageIndex]}
                      alt={`${product.imageAlt} - foto ${currentImageIndex + 1}`}
                      decoding="async"
                      className="h-[40vh] min-h-[12rem] w-full max-w-full rounded-2xl border border-gray-200 bg-gray-50 object-contain sm:h-72 lg:h-96"
                    />
                  </button>
                  {galleryImages.length > 1 && (
                    <div className="mt-4 flex items-center justify-center gap-4">
                      <button
                        type="button"
                        onClick={showPreviousImage}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D35400]/25 bg-white text-[#D35400] shadow-sm transition hover:bg-[#fff2e9] active:scale-95"
                        aria-label={t("produtoDetalhe.previousImage")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.25"
                          className="h-5 w-5"
                          aria-hidden="true"
                        >
                          <path d="m15 18-6-6 6-6" />
                        </svg>
                      </button>
                      <span className="min-w-[84px] text-center text-sm font-semibold text-gray-600">
                        {currentImageIndex + 1} {t("produtoDetalhe.imageOf")}{" "}
                        {galleryImages.length}
                      </span>
                      <button
                        type="button"
                        onClick={showNextImage}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D35400]/25 bg-white text-[#D35400] shadow-sm transition hover:bg-[#fff2e9] active:scale-95"
                        aria-label={t("produtoDetalhe.nextImage")}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.25"
                          className="h-5 w-5"
                          aria-hidden="true"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </button>
                    </div>
                  )}
                </figure>

                {galleryImages.length > 1 && (
                  <div className="overflow-x-auto pb-2">
                    <div className="flex w-max gap-2 pr-1">
                      {galleryImages.map((image, index) => (
                        <button
                          key={`thumb-${index}`}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`h-16 w-16 flex-shrink-0 rounded-lg border-2 transition ${
                            currentImageIndex === index
                              ? "border-[#D35400]"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${t("produtoDetalhe.thumbnail")} ${index + 1}`}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full rounded-md object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <h2 className="mt-10 text-xl font-bold text-[#1a1a1a]">
                {t("produtoDetalhe.fullSpecifications")}
              </h2>
              <ul className="mt-4 divide-y divide-gray-200 rounded-2xl border border-gray-200">
                {product.specifications
                  .filter(
                    (spec) => spec.key.toLowerCase() !== "machineryline id",
                  )
                  .map((spec) => (
                    <li
                      key={spec.key}
                      className="grid grid-cols-1 gap-1 px-3 py-3 text-sm sm:grid-cols-[1fr_1fr] sm:px-4"
                    >
                      <span className="font-semibold text-gray-700">
                        {translateSpecKey(spec.key, t)}
                      </span>
                      <span className="text-gray-600">
                        {translateSpecValue(
                          spec.key,
                          spec.value,
                          t,
                          product.id,
                        )}
                      </span>
                    </li>
                  ))}
                <li className="grid grid-cols-1 gap-1 px-3 py-3 text-sm sm:grid-cols-[1fr_1fr] sm:px-4">
                  <span className="font-semibold text-gray-700">
                    {t("produtoDetalhe.availability")}
                  </span>
                  <span className="text-gray-600">
                    {product.inStock
                      ? t("equipment.inStock")
                      : t("equipment.onOrder")}
                  </span>
                </li>
                <li className="grid grid-cols-1 gap-1 px-3 py-3 text-sm sm:grid-cols-[1fr_1fr] sm:px-4">
                  <span className="font-semibold text-gray-700">
                    {t("produtoDetalhe.deliveryTime")}
                  </span>
                  <span className="text-gray-600">
                    {translateDeliveryTime(product.deliveryTime, t)}
                  </span>
                </li>
              </ul>
            </article>

            <div className="min-w-0 h-fit space-y-6 lg:sticky lg:top-24">
              <aside className="rounded-3xl border border-gray-200 bg-white p-3 shadow-sm sm:p-4 lg:p-6">
                <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500">
                  {t("produtoDetalhe.price")}
                </p>
                <p className="mt-3 inline-flex rounded-full border border-[#D35400]/25 bg-[#fff7eb] px-4 py-1.5 text-base font-semibold text-[#9f3f00]">
                  {t("equipment.inquire")}
                </p>
                <p className="mt-4 text-sm text-gray-700">
                  {t("produtoDetalhe.dedicatedSupport")}
                </p>

                <a
                  href={buildWhatsAppLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-3 py-3 sm:px-4 text-sm font-semibold text-white transition hover:bg-[#1ebe5b]"
                >
                  {t("produtoDetalhe.iAmInterested")}
                </a>
              </aside>

              <form
                className="rounded-3xl border border-gray-200 bg-white p-3 shadow-sm sm:p-4 lg:p-6"
                onSubmit={handleFormSubmit}
              >
                <h3 className="text-xl font-bold text-[#2a2a2a] sm:text-2xl">
                  {t("produtoDetalhe.askSeller")}
                </h3>
                {formStatus === "success" ? (
                  <div
                    role="status"
                    aria-live="polite"
                    className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6 text-center"
                  >
                    <p className="text-lg font-bold text-green-800">
                      {t("produtoDetalhe.successTitle")}
                    </p>
                    <p className="mt-2 text-sm text-green-700">
                      {t("produtoDetalhe.successMessage")}
                    </p>
                  </div>
                ) : (
                  <div className="mt-6 space-y-4">
                    <input
                      type="text"
                      name="nome"
                      required
                      aria-label={t("produtoDetalhe.namePlaceholder")}
                      placeholder={t("produtoDetalhe.namePlaceholder")}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-700 outline-none transition focus:border-[#D35400]"
                    />
                    <input
                      type="text"
                      name="empresa"
                      aria-label={t("produtoDetalhe.companyPlaceholder")}
                      placeholder={t("produtoDetalhe.companyPlaceholder")}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-700 outline-none transition focus:border-[#D35400]"
                    />
                    <div className="flex min-w-0 w-full items-center rounded-lg border border-gray-300 bg-white px-3 py-2 sm:px-4 sm:py-3 transition focus-within:border-[#D35400] focus-within:ring-1 focus-within:ring-[#D35400]">
                      <input
                        type="hidden"
                        name="telefone_codigo"
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
                          className="flex items-center gap-2 bg-transparent text-sm text-gray-700 outline-none sm:text-base"
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
                                className="flex items-center gap-2 rounded-md px-2 py-2 text-left text-sm text-gray-700 hover:bg-[#fff7eb]"
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
                        name="telefone_numero"
                        required
                        aria-label={t("produtoDetalhe.phonePlaceholder")}
                        placeholder={t("produtoDetalhe.phonePlaceholder")}
                        className="min-w-0 flex-1 bg-transparent pl-3 text-sm text-gray-700 outline-none sm:text-base"
                      />
                    </div>
                    <input
                      type="email"
                      name="email"
                      required
                      aria-label={t("produtoDetalhe.emailPlaceholder")}
                      placeholder={t("produtoDetalhe.emailPlaceholder")}
                      className="w-full rounded-lg border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base text-gray-700 outline-none transition focus:border-[#D35400]"
                    />
                    <fieldset className="rounded-lg border border-gray-300 px-3 pb-3 pt-1.5">
                      <legend className="px-1 text-sm font-semibold text-gray-600">
                        {t("produtoDetalhe.message")}
                      </legend>
                      <textarea
                        name="mensagem"
                        rows={5}
                        required
                        placeholder={t("produtoDetalhe.messagePlaceholder")}
                        className="w-full resize-none border-0 bg-transparent text-sm leading-6 text-gray-600 outline-none"
                      />
                    </fieldset>
                    {formStatus === "error" ? (
                      <p
                        role="alert"
                        aria-live="assertive"
                        className="text-sm font-semibold text-red-700"
                      >
                        {t("produtoDetalhe.errorMessage")}
                      </p>
                    ) : null}
                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className="inline-flex w-full items-center justify-center rounded-full bg-[#D35400] px-3 py-2 sm:px-4 sm:py-3 text-sm font-semibold text-white transition hover:bg-[#b74800] disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {formStatus === "submitting"
                        ? t("produtoDetalhe.sending")
                        : formStatus === "error"
                          ? t("produtoDetalhe.tryAgain")
                          : t("produtoDetalhe.send")}
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>

          <section className="mt-14 sm:rounded-none sm:bg-transparent">
            <h2 className="px-3 text-2xl font-bold text-[#0f2f3a] sm:px-0 sm:text-3xl">
              {t("produtoDetalhe.relatedListings")}
            </h2>
            <div className="mt-6 w-full overflow-x-auto">
              <div className="flex items-stretch gap-3 px-3 pb-2 sm:px-0 sm:gap-4 snap-x snap-mandatory">
                {relatedEquipment.map((item) => (
                  <Link
                    key={item.id}
                    to={`/equipamentos/${item.id}`}
                    className="min-w-[88%] max-w-[88%] shrink-0 snap-center overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:min-w-[48%] sm:max-w-none sm:snap-start lg:min-w-[31%] xl:min-w-[24%]"
                  >
                    <div className="h-44 w-full bg-white p-3 sm:bg-[#eef2f4]">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="p-4 sm:p-5">
                      <p className="line-clamp-2 break-words text-base font-medium leading-6 text-[#12323d] sm:text-lg sm:leading-7">
                        {item.name}
                      </p>
                      <div className="mt-2">
                        <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">
                          {t("produtoDetalhe.price")}
                        </p>
                        <p className="mt-2 inline-flex rounded-full border border-[#D35400]/25 bg-[#fff7eb] px-3 py-1 text-sm font-semibold text-[#9f3f00]">
                          {t("equipment.inquire")}
                        </p>
                      </div>
                      <p className="mt-5 text-sm text-[#3c5b66]">
                        {normalizeEquipmentCategory(item.category)}
                      </p>
                      <p className="mt-1 text-sm text-[#3c5b66]">
                        {translateDeliveryTime(item.deliveryTime, t)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[70] bg-black/90 px-3 py-6 sm:px-6"
          role="dialog"
          aria-modal="true"
          aria-label={t("produtoDetalhe.expandedImageView")}
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="mx-auto flex h-full w-full max-w-6xl flex-col"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold text-white/85">
                {currentImageIndex + 1} {t("produtoDetalhe.imageOf")}{" "}
                {galleryImages.length}
              </p>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/35 text-white transition hover:bg-white/10"
                aria-label={t("produtoDetalhe.closeImage")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center">
              <div
                className="flex h-full w-full items-center justify-center touch-pan-y"
                onTouchStart={handleImageTouchStart}
                onTouchEnd={handleImageTouchEnd}
                onPointerDown={handleLightboxPointerDown}
                onPointerUp={handleLightboxPointerUp}
              >
                <img
                  src={galleryImages[currentImageIndex]}
                  alt={`${product.imageAlt} - foto ${currentImageIndex + 1} ampliada`}
                  className="max-h-full w-auto max-w-full rounded-2xl object-contain"
                />
              </div>

              {galleryImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    className="absolute left-0 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/35 text-white transition hover:bg-black/55"
                    aria-label={t("produtoDetalhe.previousImage")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.25"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={showNextImage}
                    className="absolute right-0 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/35 text-white transition hover:bg-black/55"
                    aria-label={t("produtoDetalhe.nextImage")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.25"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
