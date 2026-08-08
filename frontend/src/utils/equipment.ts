import type { Equipment } from "../types";

export function buildWhatsAppLink(item: Equipment): string {
  const basicSpecs = item.specifications
    .slice(0, 3)
    .map((spec) => `${spec.key}: ${spec.value}`)
    .join(" | ");

  const imageUrl = new URL(item.image, window.location.origin)
    .toString();
  const message = `Olá, estou interessado em adquirir o equipamento ${item.name}. Especificações principais: ${basicSpecs}. Imagem do produto: ${imageUrl}`;

  return `https://wa.me/351933079179?text=${encodeURIComponent(message)}`;
}
