# TM Mining International - Frontend

Site moderno de vendas de equipamentos para construção civil e mineração.

## Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **Tailwind CSS** - Framework de estilos
- **TypeScript** - Lógica tipada
- **JavaScript Puro** - Interatividade

## Instalação

### Pré-requisitos

- Node.js 16+ ou superior
- npm ou yarn

### Passos

1. **Instalar dependências**

```bash
npm install
```

2. **Compilar TypeScript**

```bash
npm run build
```

3. **Desenvolvimento com watch**

```bash
npm run watch
```

4. **Servir localmente**

```bash
npm run serve
```

5. **Desenvolvimento completo (build + serve)**

```bash
npm run dev
```

## Estrutura do Projeto

```
frontend/
├── index.html                 # Arquivo principal
├── package.json              # Dependências
├── tsconfig.json             # Configuração TypeScript
├── tailwind.config.js        # Configuração Tailwind
└── src/
    ├── main.ts               # Lógica principal
    ├── data.ts               # Dados de equipamentos
    ├── types/
    │   └── index.ts          # Interfaces TypeScript
    └── utils/                # Funções auxiliares
```

## Funcionalidades

✅ Catálogo de equipamentos com preços e especificações
✅ Responsivo (mobile, tablet, desktop)
✅ Formulário de contato
✅ Solicitação de orçamento
✅ Modal de detalhes do produto
✅ Menu navegação suave
✅ Tema com cores da marca

## Produtos Disponíveis

1. **Escavadeira CAT 320** - R$ 245.000
2. **Carregadeira de Rodas CAT 950** - R$ 180.000
3. **Motoniveladora GD855** - R$ 220.000
4. **Perfuratriz Comacchio T4D** - R$ 350.000
5. **Caminhão Caçamba Volkswagen 24.280** - R$ 195.000
6. **Pá Carregadeira Volvo L60H** - R$ 165.000
7. **Escavadeira Hitachi ZX350** - R$ 280.000
8. **Compressor de Ar Portátil** - R$ 45.000

## Personalização

### Adicionar Novo Equipamento

Edite `src/data.ts`:

```typescript
{
  id: '9',
  name: 'Nome do Equipamento',
  category: 'Categoria',
  price: 200000,
  currency: 'BRL',
  image: '🏗️',
  description: 'Descrição...',
  specifications: [
    { key: 'Chave', value: 'Valor' }
  ],
  inStock: true,
  deliveryTime: '30 dias'
}
```

### Personalizar Cores

Edite `tailwind.config.js`:

```javascript
colors: {
  primary: '#D35400',      // Cor principal (laranja)
  secondary: '#FFB81C',    // Cor secundária (amarelo)
  dark: '#1a1a1a',         // Preto
  light: '#f5f5f5',        // Cinza claro
  accent: '#1A1D1F',       // Cinza escuro
}
```

## Compatibilidade

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers modernos

## Licença

MIT
