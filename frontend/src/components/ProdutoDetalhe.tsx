import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { equipment, formatPrice } from "../data";
import { buildWhatsAppLink, getEquipmentImageById } from "../utils/equipment";

export const ProdutoDetalhe: React.FC = () => {
  const { id } = useParams();
  const product = equipment.find((item) => item.id === id);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  const mainImage = getEquipmentImageById(product.id);
  const galleryImages = mainImage ? [mainImage] : [];

  return (
    <section className="px-6 py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/#equipamentos"
          className="mb-8 inline-block text-sm font-semibold text-[#D35400] transition hover:text-[#b44500]"
        >
          Voltar para equipamentos
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D35400]">
              {product.category}
            </p>
            <h1 className="mt-3 text-3xl font-black text-[#1a1a1a] sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-base leading-7 text-gray-700">
              {product.description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {galleryImages.map((image, index) => (
                <figure
                  key={`${product.id}-${index}`}
                  className="sm:col-span-2"
                >
                  <img
                    src={image}
                    alt={`${product.imageAlt} - foto ${index + 1}`}
                    className="h-72 w-full rounded-2xl border border-gray-200 bg-gray-50 object-contain p-3"
                  />
                </figure>
              ))}
            </div>

            <h2 className="mt-10 text-xl font-bold text-[#1a1a1a]">
              Especificações completas
            </h2>
            <ul className="mt-4 divide-y divide-gray-200 rounded-2xl border border-gray-200">
              {product.specifications.map((spec) => (
                <li
                  key={spec.key}
                  className="grid grid-cols-1 gap-1 px-4 py-3 text-sm sm:grid-cols-[1fr_1fr]"
                >
                  <span className="font-semibold text-gray-700">
                    {spec.key}
                  </span>
                  <span className="text-gray-600">{spec.value}</span>
                </li>
              ))}
              <li className="grid grid-cols-1 gap-1 px-4 py-3 text-sm sm:grid-cols-[1fr_1fr]">
                <span className="font-semibold text-gray-700">
                  Disponibilidade
                </span>
                <span className="text-gray-600">
                  {product.inStock ? "Disponível" : "Sob encomenda"}
                </span>
              </li>
              <li className="grid grid-cols-1 gap-1 px-4 py-3 text-sm sm:grid-cols-[1fr_1fr]">
                <span className="font-semibold text-gray-700">
                  Prazo de entrega
                </span>
                <span className="text-gray-600">{product.deliveryTime}</span>
              </li>
            </ul>
          </article>

          <aside className="h-fit rounded-3xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
              Valor
            </p>
            <p className="mt-2 text-4xl font-black text-[#D35400]">
              {formatPrice(product.price)}
            </p>
            <p className="mt-4 text-sm text-gray-700">
              Atendimento dedicado para este equipamento, com envio de proposta
              e cronograma de entrega.
            </p>

            <a
              href={buildWhatsAppLink(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1ebe5b]"
            >
              Tenho Interesse
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};
