import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { equipment, formatPrice } from "../data";
import { getEquipmentImageById } from "../utils/equipment";

export const Equipamentos: React.FC = () => {
  const navigate = useNavigate();
  const [nameFilter, setNameFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("todos");

  const categories = useMemo(
    () => Array.from(new Set(equipment.map((item) => item.category))),
    [],
  );
  const filteredEquipment = equipment.filter((item) => {
    const matchesName = item.name
      .toLowerCase()
      .includes(nameFilter.trim().toLowerCase());
    const matchesCategory =
      categoryFilter === "todos" || item.category === categoryFilter;

    return matchesName && matchesCategory;
  });

  return (
    <>
      <section id="equipamentos" className="px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D35400]">
              A nossa frota
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Catálogo com valor, especificações e disponibilidade.
            </h2>
          </div>

          <div className="mb-6 grid gap-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-sm sm:gap-4 sm:p-4 md:mb-8 md:grid-cols-2">
            <label className="text-sm font-semibold text-[#1a1a1a]">
              Filtro por nome
              <input
                type="text"
                value={nameFilter}
                onChange={(event) => setNameFilter(event.target.value)}
                placeholder="Ex.: Escavadeira"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm font-normal text-gray-700 outline-none transition focus:border-[#D35400]"
              />
            </label>

            <label className="text-sm font-semibold text-[#1a1a1a]">
              Filtro por tipo
              <select
                value={categoryFilter}
                onChange={(event) => setCategoryFilter(event.target.value)}
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm font-normal text-gray-700 outline-none transition focus:border-[#D35400]"
              >
                <option value="todos">Todos os tipos</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredEquipment.map((item) => (
              <article
                key={item.id}
                onClick={() => navigate(`/equipamentos/${item.id}`)}
                className="cursor-pointer overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <img
                  src={getEquipmentImageById(item.id)}
                  alt={item.imageAlt}
                  className="h-56 w-full bg-gray-50 p-3 object-contain"
                />
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full bg-[#FFF3E0] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#D35400]">
                      {item.category}
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        item.inStock ? "text-emerald-600" : "text-amber-600"
                      }`}
                    >
                      {item.inStock ? "Disponível" : "Sob encomenda"}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1a1a]">
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
                  <div className="mt-6 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">
                        Valor
                      </p>
                      <p className="mt-2 inline-flex rounded-full border border-[#D35400]/25 bg-[#fff7eb] px-3 py-1 text-sm font-semibold text-[#9f3f00]">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <button
                        type="button"
                        onClick={(event) => {
                          event.stopPropagation();
                          navigate(`/equipamentos/${item.id}`);
                        }}
                        className="rounded-full bg-[#FFB81C] px-4 py-2 text-sm font-semibold text-[#1a1a1a] transition hover:bg-[#ffc42e]"
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
