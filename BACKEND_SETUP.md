# Backend Seguro para TM Mining - Estrutura Recomendada

## 📁 Estrutura Base

```
backend/
├── .env                    # API keys e secrets (NUNCA commitar!)
├── .env.example            # Template para .env (commitar)
├── .gitignore              # Ignora .env
├── package.json
├── server.js               # Entry point
├── routes/
│   ├── translate.js        # POST /api/translate (JigsawStack)
│   └── health.js           # GET /api/health
├── middleware/
│   ├── auth.js             # Autenticação simples
│   └── rateLimit.js        # Rate limiting
└── utils/
    └── jigsawstack.js      # Client do JigsawStack
```

---

## 🔧 Instalação Inicial

```bash
# No diretório backend/
npm init -y
npm install express dotenv axios cors
npm install --save-dev nodemon
```

---

## 📝 package.json

```json
{
  "name": "tm-mining-backend",
  "version": "1.0.0",
  "description": "Backend seguro para TM Mining",
  "main": "server.js",
  "scripts": {
    "dev": "nodemon server.js",
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.0",
    "dotenv": "^16.0.0",
    "axios": "^1.0.0",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^2.0.0"
  }
}
```

---

## 🔐 .env (NUNCA commitar!)

```env
# Server
PORT=3001
NODE_ENV=development

# JigsawStack
JIGSAWSTACK_API_KEY=sk_live_your_api_key_here
JIGSAWSTACK_BASE_URL=https://api.jigsawstack.com

# CORS
CORS_ORIGIN=http://localhost:5173,https://tmmining.pt

# Rate Limiting
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX_REQUESTS=100
```

---

## 📄 .env.example (Commitar este)

```env
# Server
PORT=3001
NODE_ENV=development

# JigsawStack
JIGSAWSTACK_API_KEY=your_key_here
JIGSAWSTACK_BASE_URL=https://api.jigsawstack.com

# CORS
CORS_ORIGIN=http://localhost:5173

# Rate Limiting
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX_REQUESTS=100
```

---

## 🚀 server.js

```javascript
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const translateRoutes = require("./routes/translate");
const healthRoutes = require("./routes/health");
const rateLimit = require("./middleware/rateLimit");

const app = express();

// Middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "*",
    credentials: true,
  }),
);
app.use(express.json());
app.use(rateLimit);

// Routes
app.use("/api/translate", translateRoutes);
app.use("/api/health", healthRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    error: "Internal server error",
    message: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
```

---

## 🌐 routes/translate.js

```javascript
const express = require("express");
const router = express.Router();
const axios = require("axios");

// Rota segura de tradução
router.post("/", async (req, res) => {
  try {
    const { text, lang } = req.body;

    // Validação
    if (!text || !lang) {
      return res.status(400).json({
        error: "Missing required fields: text, lang",
      });
    }

    if (!["pt", "en", "fr", "es"].includes(lang)) {
      return res.status(400).json({
        error: "Invalid language. Supported: pt, en, fr, es",
      });
    }

    // Chama JigsawStack de forma segura (API key nunca é exposta)
    const response = await axios.post(
      `${process.env.JIGSAWSTACK_BASE_URL}/api/translate`,
      {
        text,
        target_language: lang,
        source_language: "pt",
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.JIGSAWSTACK_API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );

    res.json({
      success: true,
      translated_text: response.data.translated_text,
      language: lang,
    });
  } catch (error) {
    console.error("Translation error:", error);
    res.status(500).json({
      error: "Translation failed",
      message:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

module.exports = router;
```

---

## 🏥 routes/health.js

```javascript
const express = require("express");
const router = express.Router();

// Health check
router.get("/", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  });
});

module.exports = router;
```

---

## 🛡️ middleware/rateLimit.js

```javascript
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW) * 60 * 1000, // minutos
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS), // max requests
  message: "Muitas requisições. Tente novamente mais tarde.",
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = limiter;
```

---

## 🌐 Integração no Frontend

Frontend React chama o backend:

```tsx
import { useTranslation } from "react-i18next";

export const useTranslateBackend = () => {
  const { i18n } = useTranslation();

  const translateWithJigsawStack = async (text: string, targetLang: string) => {
    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text,
          lang: targetLang,
        }),
      });

      if (!response.ok) throw new Error("Translation failed");

      const data = await response.json();
      return data.translated_text;
    } catch (error) {
      console.error("Error translating:", error);
      return text; // Fallback
    }
  };

  return { translateWithJigsawStack };
};
```

---

## 🚀 Iniciar Backend

```bash
# Desenvolvimento
npm run dev

# Produção
npm start
```

---

## ✅ Checklist de Segurança

- [ ] `.env` está em `.gitignore`
- [ ] `.env.example` foi commitado (sem secrets)
- [ ] API key do JigsawStack está APENAS em `.env`
- [ ] CORS está configurado corretamente
- [ ] Rate limiting está ativo
- [ ] Validação de entrada em todas as rotas
- [ ] Errors não expõem secrets em produção

---

## 🔗 Deploy

### Vercel Functions (Recomendado)

```javascript
// api/translate.js (Vercel serverless)
export default async (req, res) => {
  if (req.method !== "POST") return res.status(405).end();

  const { text, lang } = req.body;
  // ... lógica de tradução
};
```

### Netlify Functions

Mesma ideia, arquivos em `netlify/functions/`

### Railway, Render, Heroku

Deploy tradicional com banco de dados

---

## 📞 Próximas Etapas

1. Criar diretório `backend/`
2. Estruturar arquivos conforme acima
3. Testar `/api/translate` localmente
4. Integrar com frontend React
5. Deploy em produção

---

**Segurança**: 🟢 API key nunca é exposta ao cliente
**Performance**: 🟢 Rate limiting + validação
**Escalabilidade**: 🟢 Pronto para serverless/container
