import React from "react";

export const Contato: React.FC = () => {
  return (
    <section
      id="contacto"
      className="bg-[#1a1a1a] px-3 py-12 sm:px-6 sm:py-20 text-white lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#FFB81C]">
            Entre em contacto
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Estamos prontos para ajudar na sua próxima operação.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-gray-300">
            Diga-nos qual é a sua necessidade e os nossos especialistas irão
            responder com a solução ideal para o seu projeto.
          </p>
          <div className="mt-8 space-y-4 text-sm text-gray-300">
            <div>
              <p className="font-semibold text-white">Miguel Moura Pinto</p>
              <p className="mt-1 flex items-center gap-2">
                <span aria-hidden="true">🇵🇹</span>
                <span>+351 933 852 559</span>
              </p>
              <a
                href="mailto:nordareias@mail.telepac.pt"
                className="mt-1 inline-block text-gray-300 transition hover:text-white"
              >
                nordareias@mail.telepac.pt
              </a>
            </div>
            <div>
              <p className="font-semibold text-white">Tomás Moura Pinto</p>
              <p className="mt-1 flex items-center gap-2">
                <span aria-hidden="true">🇵🇹</span>
                <span>+351 933 079 179</span>
              </p>
              <a
                href="mailto:blocifel@hotmail.com"
                className="mt-1 inline-block text-gray-300 transition hover:text-white"
              >
                blocifel@hotmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
