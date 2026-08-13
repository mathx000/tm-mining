import React, { useMemo, useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { equipment, formatPrice, normalizeEquipmentCategory } from "../data";
import imgAttachments from "../img/attachments.png";
import imgExcavators from "../img/excavators.png";
import imgFeeders from "../img/feeders.png";
import imgRollerCrusher from "../img/roller-crusher.png";
import imgScreens from "../img/Screens.png";
import imgSpareParts from "../img/spare-parts.png";
import imgTrucks from "../img/trucks.png";
import imgWheelLoaders from "../img/wheel-loaders.png";
import imgBritadorMandibula from "../img/Britador de mandibula.png";
import imgBritadorImpacto from "../img/Britador de impacto.png";
import imgBritadorConico from "../img/Britador cônico.png";
import imgBritadorVsi from "../img/Britador de VSI.png";
import imgMiniEscavadora from "../img/mini escavadeira.png";
import imgPecasDesgaste from "../img/Peças de desgaste (Spare and Wear parts).png";

const getEquipmentSubcategory = (name: string): string => {
  const normalizedName = name
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[-\s]+/g, " ");
  const first = name.trim().split(/\s+/)[0];

  if (
    normalizedName.includes("maxilas") ||
    normalizedName.includes("mandibula")
  ) {
    return "Britador de mandibula";
  }
  if (normalizedName.includes("cone") || normalizedName.includes("conico")) {
    return "Britador cônico";
  }
  if (normalizedName.includes("vsi")) return "Britador de VSI";
  if (normalizedName.includes("impacto")) return "Britador de impacto";
  if (normalizedName.includes("rolo")) return "Britador de rolo";
  if (normalizedName.startsWith("mini escavadora")) return "Mini escavadoras";
  if (first === "Escavadora") return "Escavadoras";
  if (first === "Trituradora") return "Triturador";
  return first;
};

const catalogCategories = [
  { name: "Britador de mandibula", img: imgBritadorMandibula },
  { name: "Britador de impacto", img: imgBritadorImpacto },
  { name: "Britador cônico", img: imgBritadorConico },
  { name: "Britador de VSI", img: imgBritadorVsi },
  { name: "Britador de rolo", img: imgRollerCrusher },
  { name: "Crivos (screens)", img: imgScreens },
  { name: "Alimentadores (feeders)", img: imgFeeders },
  { name: "Peças de desgaste (Spare and Wear parts)", img: imgPecasDesgaste },
  { name: "Acessórios", img: imgAttachments },
  { name: "Camiões", img: imgTrucks },
  { name: "Pá carregadoras", img: imgWheelLoaders },
  { name: "Escavadoras", img: imgExcavators },
  { name: "Mini escavadoras", img: imgMiniEscavadora },
];

// Extra category names from the icon strip in Sobre
const extraCategories = [
  "Britador de mandibula",
  "Britador de impacto",
  "Britador cônico",
  "Britador de VSI",
  "Britador de rolo",
  "Crivos (screens)",
  "Alimentadores (feeders)",
  "Peças de desgaste (Spare and Wear parts)",
  "Acessórios",
  "Camiões",
  "Pá carregadoras",
  "Escavadoras",
  "Mini escavadoras",
];

export const Equipamentos: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [nameFilter, setNameFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("todos");
  const [subcategoryFilter, setSubcategoryFilter] = useState("todos");

  useEffect(() => {
    const cat = searchParams.get("categoria");
    if (cat) {
      setSubcategoryFilter(cat);
      setSearchParams({}, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const categories = useMemo(
    () =>
      Array.from(
        new Set(
          equipment.map((item) => normalizeEquipmentCategory(item.category)),
        ),
      ),
    [],
  );

  const subcategories = useMemo(() => {
    const fromEquipment = equipment.map((item) =>
      getEquipmentSubcategory(item.name),
    );
    const merged = Array.from(new Set([...fromEquipment, ...extraCategories]));
    return merged.sort((a, b) => a.localeCompare(b, "pt"));
  }, []);

  const filteredEquipment = equipment.filter((item) => {
    const normalizedCategory = normalizeEquipmentCategory(item.category);
    const normalizedName = getEquipmentSubcategory(item.name)
      .trim()
      .toLowerCase();
    const normalizedSubcategory = getEquipmentSubcategory(subcategoryFilter)
      .trim()
      .toLowerCase();
    const matchesName = item.name
      .toLowerCase()
      .includes(nameFilter.trim().toLowerCase());
    const matchesCategory =
      categoryFilter === "todos" || normalizedCategory === categoryFilter;
    const matchesSubcategory =
      subcategoryFilter === "todos" ||
      normalizedName === normalizedSubcategory ||
      (normalizedSubcategory === "britador de impacto" &&
        normalizedName === "britador de vsi");

    return matchesName && matchesCategory && matchesSubcategory;
  });

  return (
    <>
      <section
        id="equipamentos"
        className="px-3 py-12 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D35400]">
              Os nossos Equipamentos
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Catálogo com valor, especificações e disponibilidade.
            </h2>
          </div>

          <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {catalogCategories.map((cat) => (
              <button
                key={cat.name}
                type="button"
                onClick={() => {
                  setSubcategoryFilter(cat.name);
                  setCategoryFilter("todos");
                }}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-lg border-0 bg-transparent p-0 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="h-40 w-full shrink-0 overflow-hidden rounded-lg bg-gray-100 sm:h-48 lg:h-56">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="h-full w-full object-contain p-6 transition duration-200 group-hover:scale-105"
                  />
                </div>
                <span className="mt-4 text-center text-xs font-bold uppercase tracking-wide leading-5 text-gray-900 sm:text-sm">
                  {cat.name}
                </span>
              </button>
            ))}
          </div>

          <div className="mb-6 grid gap-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm sm:gap-4 sm:p-4 md:mb-8 md:grid-cols-3">
            <label className="text-sm font-semibold text-[#1a1a1a]">
              Filtro por nome
              <input
                type="text"
                value={nameFilter}
                onChange={(event) => setNameFilter(event.target.value)}
                placeholder="Ex.: Escavadeira"
                className="mt-2 w-full rounded-xl border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 text-sm font-normal text-gray-700 outline-none transition focus:border-[#D35400]"
              />
            </label>

            <label className="text-sm font-semibold text-[#1a1a1a]">
              Filtro por tipo
              <select
                value={categoryFilter}
                onChange={(event) => {
                  setCategoryFilter(event.target.value);
                }}
                className="mt-2 w-full rounded-xl border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 text-sm font-normal text-gray-700 outline-none transition focus:border-[#D35400]"
              >
                <option value="todos">Todos os tipos</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>

            <label className="text-sm font-semibold text-[#1a1a1a]">
              Filtro por categoria
              <select
                value={subcategoryFilter}
                onChange={(event) => setSubcategoryFilter(event.target.value)}
                className="mt-2 w-full rounded-xl border border-gray-300 px-3 py-2 sm:px-4 sm:py-3 text-sm font-normal text-gray-700 outline-none transition focus:border-[#D35400]"
              >
                <option value="todos">Todas as categorias</option>
                {subcategories.map((subcategory) => (
                  <option key={subcategory} value={subcategory}>
                    {subcategory}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredEquipment.map((item) => (
              <article
                key={item.id}
                onClick={() => navigate(`/equipamentos/${item.id}`)}
                className="cursor-pointer overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="h-52 w-full bg-gray-50 object-contain sm:h-56"
                />
                <div className="p-3 sm:p-4 lg:p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full bg-[#FFF3E0] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#D35400]">
                      {normalizeEquipmentCategory(item.category)}
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        item.inStock ? "text-emerald-600" : "text-amber-600"
                      }`}
                    >
                      {item.inStock ? "Disponível" : "Sob encomenda"}
                    </span>
                  </div>
                  <h3 className="break-words text-base font-bold text-[#1a1a1a] sm:text-lg lg:text-xl">
                    {item.name}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-700">
                    {item.specifications.slice(0, 3).map((spec) => (
                      <li key={spec.key}>
                        <span className="font-semibold">{spec.key}:</span>{" "}
                        {spec.value}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">
                        Valor
                      </p>
                      <p className="mt-2 inline-flex rounded-full border border-[#D35400]/25 bg-[#fff7eb] px-3 py-1 text-sm font-semibold text-[#9f3f00]">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 sm:items-end">
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          navigate(`/equipamentos/${item.id}`);
                        }}
                        className="w-full rounded-full bg-[#FFB81C] px-3 py-1.5 sm:px-4 sm:py-2 text-sm font-semibold text-[#1a1a1a] transition hover:bg-[#ffc42e] sm:w-auto"
                      >
                        Especificações
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          {filteredEquipment.length === 0 && (
            <p className="mt-6 rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-4 py-6 text-center text-sm text-gray-600">
              Nenhum equipamento encontrado para os filtros selecionados.
            </p>
          )}
        </div>
      </section>
    </>
  );
};
