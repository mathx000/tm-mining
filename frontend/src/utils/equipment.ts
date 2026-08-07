import type { Equipment } from "../types";
import escavadeiraImg from "../img/escavadeira.jpg";
import primarioImg from "../img/primario.png";
import criboImg from "../img/cribo.jpg";
import moinhoImg from "../img/moinho.jpg";
import hp300Img from "../img/hp300.jpg";

export const equipmentImageMap: Record<string, string> = {
  "1": escavadeiraImg,
  "2": primarioImg,
  "3": criboImg,
  "4": moinhoImg,
  "5": escavadeiraImg,
  "6": primarioImg,
  "7": criboImg,
  "8": moinhoImg,
  "9": hp300Img,
};

export function getEquipmentImageById(id: string): string {
  return equipmentImageMap[id] ?? "";
}

export function buildWhatsAppLink(item: Equipment): string {
  const basicSpecs = item.specifications
    .slice(0, 3)
    .map((spec) => `${spec.key}: ${spec.value}`)
    .join(" | ");

  const imageUrl = new URL(getEquipmentImageById(item.id), window.location.origin)
    .toString();
  const message = `Olá, estou interessado em adquirir o equipamento ${item.name}. Especificações principais: ${basicSpecs}. Imagem do produto: ${imageUrl}`;

  return `https://wa.me/351933079179?text=${encodeURIComponent(message)}`;
}
