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

// Maps raw Portuguese spec keys (stored in data.ts) to translation keys under equipment.specKeys
const SPEC_KEY_TRANSLATION_MAP: Record<string, string> = {
  "marca": "brand",
  "modelo": "model",
  "tipo": "type",
  "ano": "year",
  "localização": "location",
  "data de publicação": "publicationDate",
  "data": "date",
  "machineryline id": "machineryId",
  "estado": "condition",
  "serviços adicionais": "additionalServices",
  "cor": "color",
  "informação adicional": "additionalInfo",
  "primeiro registo": "firstRegistration",
  "horas de utilização": "hoursUsed",
  "motor": "engine",
  "potência": "power",
  "inspeção técnica": "technicalInspection",
};

export function translateSpecKey(
  key: string,
  t: (key: string) => string,
): string {
  const translationKey = SPEC_KEY_TRANSLATION_MAP[key.toLowerCase()];
  if (!translationKey) {
    return key;
  }

  const translated = t(`equipment.specKeys.${translationKey}`);
  return translated.startsWith("equipment.specKeys.") ? key : translated;
}

// Maps known raw Portuguese spec values (per spec key) to translation keys
const SPEC_VALUE_TRANSLATION_MAP: Record<string, Record<string, string>> = {
  "estado": {
    "usados": "used",
    "novo": "new",
  },
  "tipo": {
    "britador de cone": "coneCrusherType",
    "britador de mandíbula": "jawCrusherType",
    "escavadora de rastos": "trackExcavatorType",
    "mini-escavadora": "miniExcavatorType",
    "triturador de impacto de eixo vertical": "vsiCrusherType",
    "trituradora de rotor": "rotorCrusherType",
  },
  "serviços adicionais": {
    "serviço de entrega de veículos": "vehicleDeliveryService",
  },
};

export function translateSpecValue(
  key: string,
  value: string,
  t: (key: string) => string,
  productId?: string,
): string {
  const normalizedKey = key.toLowerCase();

  if (normalizedKey === "localização" && /portugal - mangide, 143 km/i.test(value)) {
    const translated = t("equipment.specValues.mangideLocation");
    return translated.startsWith("equipment.specValues.") ? value : translated;
  }

  if (normalizedKey === "informação adicional" && productId) {
    const translated = t(`equipmentContent.${productId}.additionalInfo`);
    return translated.startsWith("equipmentContent.") ? value : translated;
  }

  const valueMap = SPEC_VALUE_TRANSLATION_MAP[normalizedKey];
  if (!valueMap) {
    return value;
  }

  const translationKey = valueMap[value.toLowerCase()];
  if (!translationKey) {
    return value;
  }

  const translated = t(`equipment.specValues.${translationKey}`);
  return translated.startsWith("equipment.specValues.") ? value : translated;
}

// Translates the equipment description, falling back to per-id overrides in equipmentContent
export function translateDescription(
  description: string,
  productId: string,
  t: (key: string) => string,
): string {
  if (description.trim().toLowerCase() === "equipamento disponível") {
    const translated = t("equipment.availableEquipmentDesc");
    return translated.startsWith("equipment.availableEquipmentDesc")
      ? description
      : translated;
  }

  const translated = t(`equipmentContent.${productId}.description`);
  return translated.startsWith("equipmentContent.") ? description : translated;
}

// Maps the fixed set of delivery time messages used across the catalog
const DELIVERY_TIME_TRANSLATION_MAP: Record<string, string> = {
  "disponibilidade imediata": "immediateAvailability",
  "consultar": "inquire",
};

export function translateDeliveryTime(
  value: string,
  t: (key: string) => string,
): string {
  const translationKey = DELIVERY_TIME_TRANSLATION_MAP[value.toLowerCase()];
  if (!translationKey) {
    return value;
  }

  const translated = t(`equipment.deliveryTimes.${translationKey}`);
  return translated.startsWith("equipment.deliveryTimes.") ? value : translated;
}
