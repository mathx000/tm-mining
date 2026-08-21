# i18n - Internacionalização do TM Mining

## ✅ Implementado

### Frontend i18n

- **React i18next** integrado com 4 idiomas
- **Idiomas suportados**: Português (PT), Inglês (EN), Francês (FR), Espanhol (ES)
- **Idioma padrão**: Português (PT)
- **Persistência**: Idioma salvo em `localStorage`
- **Componentes atualizados**:
  - `Home.tsx` - usando traduções
  - `Header.tsx` - navegação + language switcher
  - `LanguageSwitcher.tsx` - novo componente para trocar idioma

### Arquivos criados

```
frontend/
├── src/
│   ├── i18n.ts                 # Configuração do i18next
│   ├── locales/
│   │   ├── pt.json            # Português (padrão)
│   │   ├── en.json            # Inglês
│   │   ├── fr.json            # Francês
│   │   └── es.json            # Espanhol
│   └── components/
│       └── LanguageSwitcher.tsx # Seletor de idioma
```

---

## 🎯 Próximas Etapas

### Fase 1: Completar tradução no frontend

- [ ] Atualizar `Equipamentos.tsx` com chaves de tradução
- [ ] Atualizar `Sobre.tsx` com chaves de tradução
- [ ] Atualizar `Servicos.tsx`, `Revendas.tsx`, `Contato.tsx`
- [ ] Atualizar `Footer.tsx` com chaves de tradução
- [ ] Testar todas as páginas em todos os 4 idiomas

### Fase 2: Backend seguro (NodeJS/Express)

```
backend/
├── server.js              # Express server
├── routes/
│   └── translate.js      # Rota /api/translate
├── .env                  # JIGSAWSTACK_API_KEY aqui (NUNCA no frontend)
└── package.json
```

### Fase 3: Integração com JigsawStack

- [ ] Criar endpoint `POST /api/translate`
- [ ] Receber `{ lang, text, context }` do frontend
- [ ] Chamar JigsawStack com API key do `.env`
- [ ] Retornar tradução para o frontend
- [ ] Implementar rate limiting e validação

### Fase 4: Fluxo de tradução automática (opcional)

- [ ] Gerar traduções em build-time ou em pipeline CI/CD
- [ ] Salvar JSONs no repositório
- [ ] Atualizar `locales/*.json` automaticamente via JigsawStack

---

## 📝 Como usar o i18n no código

### Para traduzir textos

```tsx
import { useTranslation } from "react-i18next";

export const MeuComponente: React.FC = () => {
  const { t } = useTranslation();

  return (
    <h1>{t("home.title")}</h1>           // "Tecnologia e potência em cada operação."
    <p>{t("home.description")}</p>        // Descrição traduzida
  );
};
```

### Para trocar idioma

```tsx
const { i18n } = useTranslation();

// Trocar para Inglês
i18n.changeLanguage("en");

// Salvar preferência
localStorage.setItem("language", "en");
```

---

## 🔐 Segurança: API Key do JigsawStack

⚠️ **NUNCA** coloque a API key do JigsawStack no React/Vite.

### ✅ Correto: No backend `.env`

```env
JIGSAWSTACK_API_KEY=sk_...
JIGSAWSTACK_BASE_URL=https://api.jigsawstack.com
```

### ❌ ERRADO: No frontend

```tsx
// NUNCA FAÇA ISSO!
const API_KEY = "sk_..."; // Exposto no browser!
```

---

## 📋 Estrutura das chaves de tradução

Arquivo: `frontend/src/locales/pt.json`

```json
{
  "header": {
    "nav": {
      "home": "Início",
      "equipamentos": "Equipamentos"
    }
  },
  "home": {
    "subtitle": "...",
    "title": "...",
    "description": "..."
  }
}
```

**Padrão de nomeação**:

- `section.subsection.key`
- Exemplo: `header.nav.home`, `equipamentos.filters.byName`

---

## 🚀 Próximas ações recomendadas

1. **Completar tradução de todos os componentes** (Fase 1)
2. **Testar em todos os idiomas**
3. **Criar backend Node/Express** (Fase 2)
4. **Integrar JigsawStack de forma segura** (Fase 3)
5. **Automatizar geração de traduções** (Fase 4 - opcional)

---

## 📚 Referências

- [i18next Documentation](https://www.i18next.com/)
- [React i18next](https://react.i18next.com/)
- [JigsawStack API Docs](https://jigsawstack.com/docs)

---

**Status**: ✅ Frontend i18n implementado e funcionando
**Próximo passo**: Completar tradução de todos os componentes
