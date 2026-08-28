import React from "react";
import { useTranslation } from "react-i18next";
import backgroundImage from "../img/background/capa.jpeg";

export const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-[78vh] bg-cover bg-center bg-no-repeat px-3 py-20 sm:px-6 sm:py-32 lg:min-h-[88vh] lg:px-8 lg:py-40 text-white"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.38)), url(${backgroundImage})`,
      }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-1 lg:justify-items-start">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFB81C]">
            {t("home.title")}
          </p>
          <h1 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">
            {t("home.subtitle")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-200">
            {t("home.description")}
          </p>
        </div>
      </div>
    </section>
  );
};
