import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";
import { equipment, normalizeEquipmentCategory } from "../data";
import {
  translateDescription,
  translateSpecKey,
  translateSpecValue,
} from "../utils/equipment";
import machinesBackgroundImage from "../img/background/capa2.jpeg";

const typeOptions = [
  "Britagem",
  "Carregadoras",
  "Escavação",
  "Peças e acessórios",
  "Transporte",
];

export const Maquinas: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [nameFilter, setNameFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("todos");
  const [equipmentFilter, setEquipmentFilter] = useState("todos");
  const categoryFilter = searchParams.get("categoria")?.toLowerCase() ?? "";

  const visibleEquipment = useMemo(
    () =>
      equipment.filter((item) => {
        const normalizedName = item.name
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        const normalizedCategory = normalizeEquipmentCategory(item.category);
        const matchesCatalogCategory =
          !categoryFilter ||
          (categoryFilter.includes("mandibula") &&
            (normalizedName.includes("mandibula") ||
              normalizedName.includes("maxilas"))) ||
          (categoryFilter.includes("conico") &&
            normalizedName.includes("cone")) ||
          (categoryFilter.includes("vsi") && normalizedName.includes("vsi")) ||
          (categoryFilter.includes("rolo") &&
            normalizedName.includes("rolo")) ||
          (categoryFilter.includes("escavadora") &&
            normalizedName.includes("escavadora") &&
            !categoryFilter.includes("mini")) ||
          (categoryFilter.includes("mini") && normalizedName.includes("mini"));
        const matchesName = normalizedName.includes(
          nameFilter
            .trim()
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, ""),
        );
        const matchesType =
          typeFilter === "todos" ||
          normalizedCategory === typeFilter ||
          (typeFilter === "Carregadoras" &&
            normalizedCategory === "Escavação") ||
          (typeFilter === "Peças e acessórios" &&
            normalizedName.includes("peça")) ||
          (typeFilter === "Transporte" &&
            (normalizedName.includes("camião") ||
              normalizedName.includes("caminhão")));
        const matchesEquipment =
          equipmentFilter === "todos" || item.id === equipmentFilter;

        return (
          matchesCatalogCategory &&
          matchesName &&
          matchesType &&
          matchesEquipment
        );
      }),
    [categoryFilter, equipmentFilter, nameFilter, typeFilter],
  );

  const equipmentOptions = useMemo(
    () =>
      [...equipment].sort((first, second) =>
        first.name.localeCompare(second.name, "pt"),
      ),
    [],
  );

  const pageText = {
    eyebrow: t("maquinas.eyebrow", { defaultValue: "Catálogo TM Mining" }),
    title: t("maquinas.title", {
      defaultValue: "Máquinas prontas para o próximo desafio.",
    }),
    description: t("maquinas.description", {
      defaultValue:
        "Uma seleção de equipamentos pesados para britagem e escavação, com informação técnica clara e suporte especializado.",
    }),
    count: t("maquinas.count", { defaultValue: "máquinas disponíveis" }),
    view: t("maquinas.view", { defaultValue: "Ver especificações" }),
    all: t("maquinas.all", { defaultValue: "Todas" }),
    availability: t("maquinas.availability", {
      defaultValue: "Disponibilidade imediata e sob consulta",
    }),
    nameFilter: t("maquinas.nameFilter", { defaultValue: "Filtro por nome" }),
    namePlaceholder: t("maquinas.namePlaceholder", {
      defaultValue: "Ex.: Escavadeira",
    }),
    typeFilter: t("maquinas.typeFilter", { defaultValue: "Filtro por tipo" }),
    allTypes: t("maquinas.allTypes", { defaultValue: "Todos os tipos" }),
    equipmentFilter: t("maquinas.equipmentFilter", {
      defaultValue: "Filtro por equipamento",
    }),
    allEquipment: t("maquinas.allEquipment", {
      defaultValue: "Todos os equipamentos",
    }),
    noResults: t("maquinas.noResults", {
      defaultValue: "Nenhuma máquina encontrada com os filtros selecionados.",
    }),
  };

  const typeLabels: Record<string, string> = {
    Britagem: t("maquinas.types.crushing", { defaultValue: "Britagem" }),
    Carregadoras: t("maquinas.types.loaders", { defaultValue: "Carregadoras" }),
    Escavação: t("maquinas.types.excavation", { defaultValue: "Escavação" }),
    "Peças e acessórios": t("maquinas.types.parts", {
      defaultValue: "Peças e acessórios",
    }),
    Transporte: t("maquinas.types.transport", { defaultValue: "Transporte" }),
  };

  return (
    <div className="min-h-[calc(100vh-76px)] bg-[#f5f5f5]">
      <section
        className="relative isolate overflow-hidden bg-[#20252a] bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${machinesBackgroundImage})` }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(32,37,42,0.98)_0%,rgba(32,37,42,0.88)_48%,rgba(211,84,0,0.58)_100%)]" />
        <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full border-[40px] border-[#FFB81C]/15" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.32em] text-[#FFB81C]">
              {pageText.eyebrow}
            </p>
            <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.05] sm:text-6xl">
              {pageText.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg">
              {pageText.description}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-semibold">
              <span className="border-l-2 border-[#FFB81C] pl-3">
                {equipment.length} {pageText.count}
              </span>
              <span className="text-gray-300">{pageText.availability}</span>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <div className="mb-10 flex flex-col justify-between gap-6 border-b border-gray-200 pb-7 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#D35400]">
              {t("maquinas.collection", { defaultValue: "A nossa frota" })}
            </p>
            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
              {t("maquinas.selection", {
                defaultValue: "Equipamentos selecionados",
              })}
            </h2>
          </div>
          <span className="text-sm font-semibold text-gray-500">
            {visibleEquipment.length} {pageText.count}
          </span>
        </div>

        <div className="mb-8 grid gap-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm sm:gap-4 sm:p-4 md:grid-cols-3">
          <label className="text-sm font-semibold text-[#1a1a1a]">
            {pageText.nameFilter}
            <input
              type="text"
              value={nameFilter}
              onChange={(event) => setNameFilter(event.target.value)}
              placeholder={pageText.namePlaceholder}
              className="mt-2 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm font-normal text-gray-700 outline-none transition focus:border-[#D35400] sm:px-4 sm:py-3"
            />
          </label>
          <label className="text-sm font-semibold text-[#1a1a1a]">
            {pageText.typeFilter}
            <select
              value={typeFilter}
              onChange={(event) => setTypeFilter(event.target.value)}
              className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm font-normal text-gray-700 outline-none transition focus:border-[#D35400] sm:px-4 sm:py-3"
            >
              <option value="todos">{pageText.allTypes}</option>
              {typeOptions.map((type) => (
                <option key={type} value={type}>
                  {typeLabels[type]}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm font-semibold text-[#1a1a1a]">
            {pageText.equipmentFilter}
            <select
              value={equipmentFilter}
              onChange={(event) => setEquipmentFilter(event.target.value)}
              className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm font-normal text-gray-700 outline-none transition focus:border-[#D35400] sm:px-4 sm:py-3"
            >
              <option value="todos">{pageText.allEquipment}</option>
              {equipmentOptions.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleEquipment.map((item) => {
            const keySpecifications = item.specifications.slice(0, 3);
            return (
              <article
                key={item.id}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#D35400]/50 hover:shadow-xl"
                onClick={() => navigate(`/equipamentos/${item.id}`)}
              >
                <div className="relative bg-[#eef0f1]">
                  <div className="absolute left-4 top-4 z-10 rounded-md bg-[#D35400] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                    {normalizeEquipmentCategory(item.category)}
                  </div>
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-64 w-full object-contain p-5 transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-wider">
                    <span className="text-gray-500">TM Mining</span>
                    <span
                      className={
                        item.inStock ? "text-emerald-600" : "text-amber-600"
                      }
                    >
                      {item.inStock
                        ? t("equipment.inStock")
                        : t("equipment.onOrder")}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-extrabold leading-tight text-[#1a1a1a]">
                    {item.name}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                    {translateDescription(item.description, item.id, t)}
                  </p>
                  <dl className="mt-5 space-y-2 border-t border-gray-100 pt-4 text-sm text-gray-700">
                    {keySpecifications.map((specification) => (
                      <div key={specification.key} className="flex gap-2">
                        <dt className="font-bold">
                          {translateSpecKey(specification.key, t)}:
                        </dt>
                        <dd>
                          {translateSpecValue(
                            specification.key,
                            specification.value,
                            t,
                            item.id,
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      navigate(`/equipamentos/${item.id}`);
                    }}
                    className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-[#FFB81C] px-4 py-3 text-sm font-extrabold text-[#1a1a1a] transition hover:bg-[#ffc42e]"
                  >
                    {pageText.view}
                    <span
                      aria-hidden="true"
                      className="ml-2 text-lg leading-none"
                    >
                      -&gt;
                    </span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
        {visibleEquipment.length === 0 && (
          <p className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-white px-4 py-8 text-center text-sm text-gray-600">
            {pageText.noResults}
          </p>
        )}
      </main>
    </div>
  );
};
