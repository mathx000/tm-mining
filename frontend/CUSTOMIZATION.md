# Guia de Personalização - TM Mining Internacional

## Como Adicionar Novos Equipamentos

### 1. Editar o arquivo `src/data.ts`

Encontre o array `equipment` e adicione um novo objeto seguindo este padrão:

```typescript
{
  id: '9',                              // ID único
  name: 'Nome do Equipamento',          // Nome do equipamento
  category: 'Categoria',                // Categoria (ex: Escavadeira, Carregadeira)
  price: 200000,                        // Preço em reais
  currency: 'BRL',                      // Moeda
  image: '🏗️',                         // Emoji do equipamento
  description: 'Descrição breve...',   // Descrição para o card
  specifications: [                     // Array de especificações técnicas
    { key: 'Peso Operacional', value: '25.000 kg' },
    { key: 'Potência', value: '200 HP' },
    { key: 'Combustível', value: 'Diesel' },
    { key: 'Ano de Fabricação', value: '2023' }
  ],
  inStock: true,                        // true = em estoque, false = sob encomenda
  deliveryTime: '30-45 dias'           // Prazo de entrega
}
```

### 2. Compilar as alterações

```bash
npm run build
```

ou use o watch mode:

```bash
npm run watch
```

### 3. Atualizar no navegador

O site será recarregado automaticamente com os novos produtos.

## Personalizar Cores da Marca

### Editar `index.html` (linha ~30)

```css
:root {
  --primary: #d35400; /* Cor principal - laranja */
  --secondary: #ffb81c; /* Cor secundária - amarelo */
  --dark: #1a1a1a; /* Texto escuro */
  --light: #f5f5f5; /* Fundo claro */
  --accent: #1a1d1f; /* Acentos */
}
```

### Editar `tailwind.config.js`

```javascript
colors: {
  primary: '#D35400',      // Customize aqui
  secondary: '#FFB81C',    // Customize aqui
  dark: '#1a1a1a',
  light: '#f5f5f5',
  accent: '#1A1D1F',
}
```

## Alterar Conteúdo de Texto

### Header/Navegação

Edite `index.html` - procure por `<!-- Header -->`

### Home (Hero Section)

Edite `index.html` - procure por `<!-- Hero Section -->`

### Seções de Serviços

Edite `index.html` - procure por `<!-- Services Section -->`

### Valores da Empresa

Edite `index.html` - procure por `<!-- Company Values Section -->`

### Footer

Edite `index.html` - procure por `<!-- Footer -->`

## Adicionar Novas Seções

### Exemplo: Adicionar Seção de Clientes

1. Adicione o HTML em `index.html`:

```html
<section id="clientes" class="container-max py-16">
  <h2 class="section-title">NOSSOS CLIENTES</h2>
  <p class="section-subtitle">Empresas que confiam em nós</p>

  <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
    <!-- Logos dos clientes aqui -->
  </div>
</section>
```

2. Adicione o link na navegação:

```html
<a href="#clientes" class="nav-link text-dark font-medium">Clientes</a>
```

## Configurar Formulários

### Alterar campos do formulário de contato

Edite `index.html` - procure por `<form id="contactForm">`

### Alterar ações de envio

Edite `src/main.ts` - funções `setupContactForm()` e `setupQuoteForm()`

Por padrão, os dados são apenas mostrados no console do navegador. Para enviar para um servidor:

```typescript
// Exemplo: Enviar para API
const response = await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(contactData),
});
```

## Adicionar Funcionalidades com TypeScript

### Criar novo arquivo de módulo

1. Crie `src/utils/calculator.ts`:

```typescript
export function calculateDiscount(price: number, discount: number): number {
  return price * (1 - discount / 100);
}
```

2. Importe em `src/main.ts`:

```typescript
import { calculateDiscount } from "./utils/calculator.js";
```

3. Use no seu código:

```typescript
const finalPrice = calculateDiscount(100000, 10);
```

## Integração com Backend

### Exemplo: API de Contato

Modifique `src/main.ts`:

```typescript
form.addEventListener("submit", async (e: Event) => {
  e.preventDefault();

  const formData = new FormData(form);
  const contactData = Object.fromEntries(formData);

  try {
    const response = await fetch("http://seu-backend.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });

    if (response.ok) {
      alert("Mensagem enviada com sucesso!");
      form.reset();
    } else {
      alert("Erro ao enviar mensagem");
    }
  } catch (error) {
    console.error("Erro:", error);
    alert("Erro de conexão");
  }
});
```

## Debugging

### Ver logs no console

Abra o DevTools do navegador (F12 > Console) para ver os logs TypeScript compilados.

### Gerar source maps

Já está habilitado em `tsconfig.json` com `"sourceMap": true`, permitindo debugar TypeScript original no DevTools.

## Performance

### Otimizar imagens

- Use emojis ou ícones SVG quando possível (já feito)
- Para imagens reais, use formatos modernos (WebP, AVIF)
- Comprima imagens: https://imageoptim.com

### Minificar código de produção

```bash
npm install --save-dev esbuild
npx esbuild src/main.ts --bundle --minify --outfile=dist/main.min.js
```

## Deploy

### GitHub Pages

1. Push para GitHub
2. Configure em Settings > Pages
3. Selecione branch `main` e pasta `frontend`

### Netlify

1. Conecte seu repositório
2. Build command: `npm run build`
3. Publish directory: `./`

### Servidor próprio

Copie os arquivos `index.html` e pasta `dist/` para seu servidor.

---

**Dúvidas?** Consulte a documentação de cada tecnologia:

- [TypeScript](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
