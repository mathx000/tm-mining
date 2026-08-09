import React, { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { equipment, formatPrice } from "../data";
import { buildWhatsAppLink } from "../utils/equipment";

export const ProdutoDetalhe: React.FC = () => {
  const { id } = useParams();
  const product = equipment.find((item) => item.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [id]);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  // Usar array de imagens se disponível, senão usar imagem única
  const galleryImages =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

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

  const relatedEquipment = equipment
    .filter((item) => item.id !== product.id)
    .slice(0, 5);

  return (
    <section className="px-3 py-8 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/#equipamentos"
          className="mb-8 inline-block text-sm font-semibold text-[#D35400] transition hover:text-[#b44500]"
        >
          Voltar para equipamentos
        </Link>

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:gap-8">
          <article className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D35400]">
              {product.category}
            </p>
            <h1 className="mt-3 break-words text-2xl font-black text-[#1a1a1a] sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-base leading-7 text-gray-700">
              {product.description}
            </p>

            <div className="mt-8 space-y-4">
              <figure
                className="relative touch-pan-y"
                onTouchStart={handleImageTouchStart}
                onTouchEnd={handleImageTouchEnd}
              >
                <img
                  src={galleryImages[currentImageIndex]}
                  alt={`${product.imageAlt} - foto ${currentImageIndex + 1}`}
                  className="h-[52vh] min-h-[16rem] w-full max-w-full rounded-2xl border border-gray-200 bg-gray-50 object-contain p-3 sm:h-80 lg:h-96"
                />
                {galleryImages.length > 1 && (
                  <div className="mt-4 flex items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={showPreviousImage}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D35400]/25 bg-white text-[#D35400] shadow-sm transition hover:bg-[#fff2e9] active:scale-95"
                      aria-label="Imagem anterior"
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
                      {currentImageIndex + 1} de {galleryImages.length}
                    </span>
                    <button
                      type="button"
                      onClick={showNextImage}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D35400]/25 bg-white text-[#D35400] shadow-sm transition hover:bg-[#fff2e9] active:scale-95"
                      aria-label="Próxima imagem"
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
                <div className="flex gap-2 overflow-x-auto pb-2">
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
                        alt={`Miniatura ${index + 1}`}
                        className="h-full w-full rounded-md object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <h2 className="mt-10 text-xl font-bold text-[#1a1a1a]">
              Especificações completas
            </h2>
            <ul className="mt-4 divide-y divide-gray-200 rounded-2xl border border-gray-200">
              {product.specifications
                .filter((spec) => spec.key.toLowerCase() !== "machineryline id")
                .map((spec) => (
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

          <div className="h-fit space-y-6 lg:sticky lg:top-24">
            <aside className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
              <p className="text-[11px] uppercase tracking-[0.18em] text-gray-500">
                Valor
              </p>
              <p className="mt-3 inline-flex rounded-full border border-[#D35400]/25 bg-[#fff7eb] px-4 py-1.5 text-base font-semibold text-[#9f3f00]">
                {formatPrice(product.price)}
              </p>
              <p className="mt-4 text-sm text-gray-700">
                Atendimento dedicado para este equipamento, com envio de
                proposta e cronograma de entrega.
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

            <form className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
              <h3 className="text-xl font-bold text-[#2a2a2a] sm:text-2xl">
                Pergunte ao vendedor
              </h3>
              <div className="mt-6 space-y-4">
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-700 outline-none transition focus:border-[#D35400]"
                />
                <input
                  type="text"
                  name="empresa"
                  placeholder="Empresa"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-700 outline-none transition focus:border-[#D35400]"
                />
                <input
                  type="tel"
                  name="telefone"
                  placeholder="Telefone"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-700 outline-none transition focus:border-[#D35400]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base text-gray-700 outline-none transition focus:border-[#D35400]"
                />
                <fieldset className="rounded-lg border border-gray-300 px-3 pb-3 pt-1.5">
                  <legend className="px-1 text-sm font-semibold text-gray-600">
                    Mensagem
                  </legend>
                  <textarea
                    name="mensagem"
                    rows={5}
                    placeholder="Escreva a sua dúvida"
                    className="w-full resize-none border-0 bg-transparent text-sm leading-6 text-gray-600 outline-none"
                  />
                </fieldset>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#D35400] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#b74800]"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>

        <section className="mt-14 rounded-3xl bg-white p-4 sm:rounded-none sm:bg-transparent sm:p-0">
          <h2 className="text-2xl font-bold text-[#0f2f3a] sm:text-3xl">
            Anúncios relacionados
          </h2>
          <div className="mt-6 w-full overflow-x-auto pb-3 sm:px-0">
            <div className="flex items-stretch gap-4 snap-x snap-mandatory">
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
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <p className="line-clamp-2 break-words text-base font-medium leading-6 text-[#12323d] sm:text-lg sm:leading-7">
                      {item.name}
                    </p>
                    <div className="mt-2">
                      <p className="text-[11px] uppercase tracking-[0.16em] text-gray-500">
                        Valor
                      </p>
                      <p className="mt-2 inline-flex rounded-full border border-[#D35400]/25 bg-[#fff7eb] px-3 py-1 text-sm font-semibold text-[#9f3f00]">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    <p className="mt-5 text-sm text-[#3c5b66]">
                      {item.category}
                    </p>
                    <p className="mt-1 text-sm text-[#3c5b66]">
                      {item.deliveryTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
