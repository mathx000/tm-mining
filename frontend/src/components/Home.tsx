import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../img/background/capa.jpeg";
import resellersBackgroundImage from "../img/background/capa3.jpeg";

const slides = [
  {
    image: backgroundImage,
    eyebrow: "home.title",
    title: "home.subtitle",
    description: "home.description",
    primaryLabel: "home.ctaEquipment",
    primaryAction: "equipment",
    secondaryLabel: "home.ctaContact",
    secondaryHref:
      "https://wa.me/351933079179?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20dos%20equipamentos%20TM%20Mining.",
    trustLine: "home.trustLine",
  },
  {
    image: resellersBackgroundImage,
    eyebrow: "home.resellersEyebrow",
    title: "home.resellersTitle",
    description: "home.resellersDescription",
    primaryLabel: "home.resellersCta",
    primaryAction: "resellers",
    secondaryLabel: "home.ctaContact",
    secondaryHref:
      "https://wa.me/351933079179?text=Ol%C3%A1%2C%20gostaria%20de%20ser%20revendedor%20TM%20Mining.",
    trustLine: "home.resellersTrustLine",
  },
] as const;

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, 7000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const currentSlide = slides[activeSlide];

  const showPreviousSlide = () => {
    setActiveSlide((currentSlide) =>
      currentSlide === 0 ? slides.length - 1 : currentSlide - 1,
    );
  };

  const showNextSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
  };

  return (
    <section
      id="home"
      className="relative min-h-[78vh] overflow-hidden px-3 py-20 text-white sm:px-6 sm:py-32 lg:min-h-[82vh] lg:px-8 lg:py-36"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === activeSlide
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(14, 14, 14, 0.84) 0%, rgba(14, 14, 14, 0.58) 52%, rgba(14, 14, 14, 0.2) 100%), url(${slide.image})`,
          }}
          aria-hidden={index !== activeSlide}
        />
      ))}

      <div className="relative z-10 mx-auto flex min-h-[calc(78vh-10rem)] max-w-7xl items-center lg:min-h-[calc(82vh-11rem)]">
        <div className="max-w-3xl" aria-live="polite">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#FFB81C] sm:text-sm">
            {t(currentSlide.eyebrow, {
              defaultValue:
                activeSlide === 0 ? "Tecnologia e potência" : "Rede TM Mining",
            })}
          </p>
          <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
            {t(currentSlide.title, {
              defaultValue:
                activeSlide === 0
                  ? "Equipamentos pesados para construção e mineração"
                  : "Cresça com uma marca feita para operações exigentes",
            })}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-200 sm:text-lg">
            {t(currentSlide.description, {
              defaultValue:
                activeSlide === 0
                  ? "Oferecemos máquinas de alto desempenho com disponibilidade imediata e suporte especializado para projetos de grande porte."
                  : "Torne-se um parceiro TM Mining e ofereça aos seus clientes equipamentos, experiência e acompanhamento em cada projeto.",
            })}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() =>
                navigate(
                  currentSlide.primaryAction === "resellers"
                    ? "/revendas"
                    : "/#equipamentos",
                )
              }
              className="rounded-md bg-[#FFB81C] px-6 py-3 text-sm font-bold text-[#1a1a1a] shadow-lg shadow-black/20 transition hover:bg-[#ffc42e]"
            >
              {t(currentSlide.primaryLabel, {
                defaultValue:
                  activeSlide === 0 ? "Ver equipamentos" : "Ser revendedor",
              })}
            </button>
            <a
              href={currentSlide.secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white/60 bg-white/10 px-6 py-3 text-center text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#1a1a1a]"
            >
              {t(currentSlide.secondaryLabel)}
            </a>
          </div>
          <p className="mt-8 border-l-2 border-[#FFB81C] pl-3 text-sm font-semibold text-gray-200">
            {t(currentSlide.trustLine, {
              defaultValue:
                activeSlide === 0
                  ? "Britagem, escavação e transporte para operações exigentes."
                  : "Uma parceria sólida para levar mais capacidade ao mercado.",
            })}
          </p>
        </div>
      </div>

      <button
        type="button"
        aria-label="Slide anterior"
        onClick={showPreviousSlide}
        className="group absolute left-3 top-1/2 z-20 inline-flex h-14 w-10 -translate-y-1/2 items-center justify-center sm:left-6"
      >
        <span
          aria-hidden="true"
          className="h-4 w-4 rotate-45 border-b-2 border-l-2 border-white transition group-hover:border-[#FFB81C]"
        />
      </button>
      <button
        type="button"
        aria-label="Próximo slide"
        onClick={showNextSlide}
        className="group absolute right-3 top-1/2 z-20 inline-flex h-14 w-10 -translate-y-1/2 items-center justify-center sm:right-6"
      >
        <span
          aria-hidden="true"
          className="h-4 w-4 -rotate-45 border-r-2 border-b-2 border-white transition group-hover:border-[#FFB81C]"
        />
      </button>

      <div className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Ir para o slide ${index + 1}`}
            aria-current={index === activeSlide}
            onClick={() => setActiveSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === activeSlide
                ? "w-10 bg-[#FFB81C]"
                : "w-2 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};
