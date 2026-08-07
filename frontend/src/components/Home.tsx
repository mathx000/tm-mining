import React from "react";
import backgroundImage from "../img/capa.jpeg";

export const Home: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-[78vh] bg-cover bg-center bg-no-repeat px-4 py-20 sm:px-6 sm:py-32 lg:min-h-[88vh] lg:px-8 lg:py-40 text-white"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.38)), url(${backgroundImage})`,
      }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-6 sm:gap-8 lg:gap-10 lg:grid-cols-1 lg:justify-items-start">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#FFB81C]">
            Equipamentos pesados para construção e mineração
          </p>
          <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Tecnologia e potência em cada operação.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-200">
            Oferecemos máquinas de alto desempenho, disponibilidade imediata e
            suporte especializado para projetos de grande porte.
          </p>
        </div>
      </div>
    </section>
  );
};
