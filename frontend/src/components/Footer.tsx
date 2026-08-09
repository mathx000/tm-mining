import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 bg-white px-3 py-10 sm:px-6 lg:px-8\">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-[#1a1a1a]">
            TM Mining Internacional
          </p>
          <p>Qualidade, tecnologia e confiabilidade em cada operação.</p>
        </div>
      </div>
    </footer>
  );
};
