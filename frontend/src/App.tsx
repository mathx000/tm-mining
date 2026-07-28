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
    <div className="min-h-screen bg-[#f5f5f5] text-[#1a1a1a]">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Sobre />
                <Equipamentos />
                <Servicos />
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
    </div>
  );
};

export default App;
