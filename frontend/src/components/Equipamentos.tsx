import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import imgAttachments from "../img/categories/attachments.png";
import imgExcavators from "../img/categories/excavators.png";
import imgFeeders from "../img/categories/feeders.png";
import imgRollerCrusher from "../img/categories/roller-crusher.png";
import imgScreens from "../img/categories/Screens.png";
import imgTrucks from "../img/categories/trucks.png";
import imgWheelLoaders from "../img/categories/wheel-loaders.png";
import imgBritadorImpacto from "../img/categories/britadorvsi.png";
import imgBritadorConico from "../img/categories/britadorconico.png";
import imgBritadorMandibula from "../img/categories/britadordemandibula.png";
import imgMiniEscavadora from "../img/categories/mini escavadeira.png";
import imgPecasDesgaste from "../img/categories/Peças de desgaste (Spare and Wear parts).png";

const catalogCategories = [
  {
    key: "jawCrusher",
    name: "Britador de mandibula",
    img: imgBritadorMandibula,
  },
  { key: "coneCrusher", name: "Britador conico", img: imgBritadorConico },
  { key: "vsiCrusher", name: "Britador VSI", img: imgBritadorImpacto },
  { key: "rollerCrusher", name: "Britador rolo", img: imgRollerCrusher },
  { key: "screens", name: "Crivos", img: imgScreens },
  { key: "feeders", name: "Alimentadores (feeders)", img: imgFeeders },
  {
    key: "spareParts",
    name: "Peças de desgaste (Spare and Wear parts)",
    img: imgPecasDesgaste,
  },
  { key: "accessories", name: "Acessórios", img: imgAttachments },
  { key: "trucks", name: "Camiões", img: imgTrucks },
  { key: "wheelLoaders", name: "Pá carregadoras", img: imgWheelLoaders },
  { key: "excavators", name: "Escavadoras", img: imgExcavators },
  { key: "miniExcavators", name: "Mini escavadoras", img: imgMiniEscavadora },
];

export const Equipamentos: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <section
        id="equipamentos"
        className="px-3 py-12 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D35400]">
              {t("equipamentos.label")}
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              {t("equipamentos.title")}
            </h2>
          </div>

          <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {catalogCategories.map((cat) => (
              <button
                key={cat.name}
                type="button"
                onClick={() =>
                  navigate(
                    `/maquinas?categoria=${encodeURIComponent(cat.name)}`,
                  )
                }
                className="group flex cursor-pointer flex-col overflow-hidden rounded-lg border-0 bg-transparent p-0 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-lg bg-gray-100 sm:h-48 lg:h-56">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain p-6 transition duration-200 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition duration-200 group-hover:opacity-100 group-active:opacity-100">
                    <span className="rounded-full bg-[#FFB81C] px-6 py-2 text-sm font-semibold text-[#1a1a1a]">
                      {t("equipamentos.viewProducts", {
                        defaultValue: "Ver produtos",
                      })}
                    </span>
                  </div>
                </div>
                <span className="mt-4 text-center text-xs font-bold uppercase tracking-wide leading-5 text-gray-900 sm:text-sm">
                  {t(`equipamentos.categories.${cat.key}`, {
                    defaultValue: cat.name,
                  })}
                </span>
              </button>
            ))}
          </div>
          <div className="relative isolate mt-2 overflow-hidden rounded-2xl bg-[#20252a] px-6 py-8 text-center shadow-lg sm:px-10 sm:py-10">
            <div className="absolute -right-16 -top-20 -z-10 h-48 w-48 rounded-full border-[28px] border-[#FFB81C]/20" />
            <div className="absolute bottom-0 left-0 h-1 w-28 bg-[#FFB81C]" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#FFB81C]">
              {t("equipamentos.stockEyebrow", {
                defaultValue: "Catálogo TM Mining",
              })}
            </p>
            <p className="mt-3 text-lg font-semibold text-white sm:text-xl">
              {t("equipamentos.stockDescription", {
                defaultValue: "Venha conferir o nosso estoque",
              })}
            </p>
            <a
              href="/maquinas"
              className="mt-6 inline-flex items-center rounded-md bg-[#FFB81C] px-8 py-3 text-sm font-bold uppercase tracking-wide text-[#1a1a1a] shadow-md transition hover:-translate-y-0.5 hover:bg-[#ffc42e] hover:shadow-lg"
            >
              {t("equipamentos.viewAll", { defaultValue: "View All" })}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
