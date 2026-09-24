import React from "react";
import { useTranslation } from "react-i18next";

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-gray-200 bg-white px-3 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 text-sm text-gray-600 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-extrabold text-[#1a1a1a]">{t("footer.title")}</p>
          <p className="mt-1 max-w-sm leading-6">{t("footer.description")}</p>
        </div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2 font-semibold text-gray-700">
          <a href="/#home" className="transition hover:text-[#D35400]">{t("header.nav.home")}</a>
          <a href="/#equipamentos" className="transition hover:text-[#D35400]">{t("header.nav.equipamentos")}</a>
          <a href="/#servicos" className="transition hover:text-[#D35400]">{t("header.nav.servicos")}</a>
          <a href="/#contacto" className="transition hover:text-[#D35400]">{t("header.nav.contato")}</a>
        </nav>
      </div>
      <div className="mx-auto mt-8 max-w-7xl border-t border-gray-100 pt-4 text-xs text-gray-500">
        {t("footer.copyright")}
      </div>
    </footer>
  );
};
