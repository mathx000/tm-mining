import React from "react";

const services = [
  {
    icon: "⚙️",
    title: "Automação",
    description:
      "Sistemas de automação avançados para máxima eficiência operacional.",
  },
  {
    icon: "📊",
    title: "Rastreio",
    description:
      "Tecnologia de rastreio em tempo real de todos os equipamentos.",
  },
  {
    icon: "🔧",
    title: "Manutenção",
    description: "Suporte técnico completo e manutenção preventiva regular.",
  },
];

export const Servicos: React.FC = () => {
  return (
    <section id="servicos" className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D35400]">
            Soluções inteligentes
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Serviços e soluções completas para projetos pesados.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-gray-200 bg-[#f5f5f5] p-8"
            >
              <div className="text-4xl">{service.icon}</div>
              <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
