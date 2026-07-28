# Estrutura Completa do Projeto

```
TM Mining Internacional/
└── frontend/
    ├── 📄 index.html                    # Página principal do site
    ├── 📄 package.json                  # Configuração npm e dependências
    ├── 📄 tsconfig.json                 # Configuração TypeScript
    ├── 📄 tailwind.config.js            # Configuração Tailwind CSS
    ├── 📄 setup.bat                     # Script inicialização (Windows)
    ├── 📄 setup.sh                      # Script inicialização (Mac/Linux)
    ├── 📄 .gitignore                    # Arquivos ignorados por Git
    │
    ├── 📋 README.md                     # Documentação principal
    ├── 📋 QUICKSTART.md                 # Guia rápido (LEIA PRIMEIRO!)
    ├── 📋 CUSTOMIZATION.md              # Guia de personalização
    ├── 📋 PROJECT_STRUCTURE.md          # Este arquivo
    │
    ├── 📁 .vscode/
    │   ├── settings.json                # Configurações VS Code
    │   └── extensions.json              # Extensões recomendadas
    │
    ├── 📁 src/
    │   ├── 📄 main.ts                   # Lógica principal (interatividade)
    │   ├── 📄 data.ts                   # Dados de equipamentos e preços
    │   │
    │   └── 📁 types/
    │       └── 📄 index.ts              # Interfaces TypeScript
    │
    ├── 📁 dist/                         # Arquivos compilados (gerado automaticamente)
    │   └── 📄 main.js                   # JavaScript compilado de main.ts
    │
    └── 📁 node_modules/                 # Dependências npm (gerado após npm install)
```

## Arquivo por Arquivo

### 🟠 Configuração do Projeto

| Arquivo              | Propósito                             |
| -------------------- | ------------------------------------- |
| `package.json`       | Dependências e scripts npm            |
| `tsconfig.json`      | Configuração do compilador TypeScript |
| `tailwind.config.js` | Configuração de cores e tema Tailwind |
| `.gitignore`         | Arquivos a ignorar no Git             |

### 🟠 Documentação

| Arquivo                | Conteúdo                                         |
| ---------------------- | ------------------------------------------------ |
| `README.md`            | Documentação completa do projeto                 |
| `QUICKSTART.md`        | Como começar em 5 minutos                        |
| `CUSTOMIZATION.md`     | Como personalizar cores, adicionar produtos, etc |
| `PROJECT_STRUCTURE.md` | Este arquivo - visão geral do projeto            |

### 🟠 Inicialização

| Arquivo     | Uso                                           |
| ----------- | --------------------------------------------- |
| `setup.bat` | Execute no Windows para instalar e compilar   |
| `setup.sh`  | Execute no Mac/Linux para instalar e compilar |

### 🟠 Código-Fonte TypeScript

| Arquivo              | Responsabilidade                                                           |
| -------------------- | -------------------------------------------------------------------------- |
| `src/main.ts`        | **Lógica do site**: renderizar produtos, formulários, interatividade       |
| `src/data.ts`        | **Banco de dados**: lista de equipamentos, preços, especificações          |
| `src/types/index.ts` | **Interfaces**: tipos TypeScript para Equipment, ContactForm, QuoteRequest |

### 🟠 HTML/Frontend

| Arquivo      | Conteúdo                                                                          |
| ------------ | --------------------------------------------------------------------------------- |
| `index.html` | **Página principal**: estrutura HTML, CSS customizado (via CDN Tailwind), scripts |

## Como os Arquivos Interagem

```
index.html (página web)
    ├── Carrega Tailwind CSS (via CDN)
    ├── Carrega Tailwind JS de configuração
    ├── Carrega dist/main.js (compilado do TypeScript)
    │
    └── dist/main.js
        ├── Importa dados de data.ts (equipamentos)
        ├── Importa tipos de types/index.ts
        ├── Renderiza produtos dinamicamente
        ├── Gerencia formulários
        └── Controla interatividade
```

## Fluxo de Desenvolvimento

```
Você edita arquivos
        ↓
TypeScript Watch detecta mudanças
        ↓
Recompila arquivos .ts → .js
        ↓
Live-server recarrega navegador
        ↓
Você vê alterações em tempo real
```

## Scripts Disponíveis

```bash
npm install        # Instalar dependências (execute uma vez)
npm run dev        # Modo desenvolvimento (watch + serve)
npm run build      # Compilar TypeScript uma vez
npm run watch      # Assistir mudanças em .ts (sem servidor)
npm run serve      # Iniciar servidor local (sem compilação)
npm start          # Compilar e servir
```

## O que Editar

### ✏️ Para Adicionar/Editar Produtos

→ Edite `src/data.ts`

### ✏️ Para Alterar Cores

→ Edite `index.html` (linha ~30, seção `:root`)

### ✏️ Para Alterar Textos e Conteúdo

→ Edite `index.html` (procure a seção desejada)

### ✏️ Para Adicionar Funcionalidades

→ Edite `src/main.ts` ou crie novo arquivo em `src/`

### ✏️ Para Alterar Tipos TypeScript

→ Edite `src/types/index.ts`

## Onde Estão as Seções do Site

No `index.html`:

- **Header/Navegação**: Procure por `<!-- Header -->`
- **Hero Section**: Procure por `<!-- Hero Section -->`
- **Produtos**: Procure por `<!-- Products Section -->`
- **Serviços**: Procure por `<!-- Services Section -->`
- **Sobre/Valores**: Procure por `<!-- Company Values Section -->`
- **Contato**: Procure por `<!-- Contact Section -->`
- **Footer**: Procure por `<!-- Footer -->`

## Versões das Tecnologias

- **Node.js**: 16.0.0 ou superior
- **TypeScript**: 5.0.0
- **Tailwind CSS**: 3.3.0 (via CDN no HTML)

## Próximos Passos

1. ✅ Rode `setup.bat` (Windows) ou `bash setup.sh` (Mac/Linux)
2. ✅ Abra http://localhost:8080 no navegador
3. ✅ Veja o site funcionando
4. ✅ Leia `QUICKSTART.md` para aprender a customizar
5. ✅ Edite `src/data.ts` para adicionar seus produtos

---

**Bom desenvolvimento! 🚀**

Para dúvidas sobre um arquivo específico, verifique os comentários dentro dele ou consulte os .md de documentação.
