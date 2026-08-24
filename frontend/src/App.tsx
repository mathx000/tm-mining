import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  Header,
  Home,
  Equipamentos,
  Servicos,
  Revendas,
  RevendaDetalhe,
  Sobre,
  Contato,
  Footer,
  ProdutoDetalhe,
} from "./components";

const App: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f5f5] text-[#1a1a1a]">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Sobre />
                <div aria-hidden="true" className="px-6 lg:px-8">
                  <div className="mx-auto max-w-7xl border-t border-[#D35400]/30" />
                </div>
                <Equipamentos />
                <Servicos />
                <div aria-hidden="true" className="px-6 lg:px-8">
                  <div className="mx-auto max-w-7xl border-t border-[#D35400]/30" />
                </div>
                <Revendas />
                <Contato />
              </>
            }
          />
          <Route path="/revendas" element={<RevendaDetalhe />} />
          <Route path="/equipamentos/:id" element={<ProdutoDetalhe />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <a
        href="https://wa.me/351938181967?text=Ol%C3%A1%2C%20estou%20interessado%20nos%20equipamentos%20TM%20Mining%20Internacional."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] p-4 text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition hover:scale-105 hover:bg-[#1ebe5b] sm:bottom-6 sm:right-6"
        aria-label="Contactar por WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="h-6 w-6 fill-current"
          aria-hidden="true"
        >
          <path d="M19.11 17.21c-.29-.14-1.7-.84-1.97-.94-.26-.1-.45-.14-.65.14-.19.29-.74.94-.9 1.13-.17.2-.33.22-.62.08-.29-.14-1.22-.45-2.32-1.45-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.44.12-.58.13-.13.29-.33.43-.49.14-.16.19-.29.29-.48.1-.2.05-.37-.02-.52-.07-.14-.65-1.58-.89-2.16-.23-.56-.47-.49-.65-.5h-.55c-.2 0-.52.07-.79.37-.27.29-1.04 1.01-1.04 2.47s1.07 2.87 1.22 3.07c.14.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.7-.69 1.94-1.35.24-.67.24-1.24.17-1.35-.06-.11-.25-.17-.54-.31z" />
          <path d="M16.01 3.2c-7.04 0-12.75 5.71-12.75 12.75 0 2.24.59 4.43 1.7 6.35L3.2 28.8l6.66-1.75a12.73 12.73 0 0 0 6.15 1.57h.01c7.04 0 12.75-5.72 12.75-12.76 0-3.41-1.33-6.62-3.74-9.03a12.66 12.66 0 0 0-9.02-3.73zm0 23.27h-.01c-1.91 0-3.78-.51-5.42-1.47l-.39-.23-3.95 1.04 1.06-3.85-.25-.4a10.53 10.53 0 0 1-1.62-5.63c0-5.83 4.75-10.58 10.59-10.58 2.82 0 5.47 1.1 7.46 3.1a10.5 10.5 0 0 1 3.1 7.47c0 5.84-4.75 10.59-10.57 10.59z" />
        </svg>
      </a>
    </div>
  );
};

export default App;
