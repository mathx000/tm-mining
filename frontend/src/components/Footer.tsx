import React from "react";
import { useTranslation } from "react-i18next";

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-gray-200 bg-white px-3 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-[#1a1a1a]">{t("footer.title")}</p>
          <p>{t("footer.description")}</p>
        </div>
      </div>
    </footer>
  );
};
