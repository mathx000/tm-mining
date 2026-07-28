# 🚀 Quick Start - TM Mining Internacional

## 5 Minutos para Começar

### Windows

1. Abra o terminal na pasta `frontend`
2. Execute: `setup.bat`
3. Pronto! Site estará rodando em `http://localhost:8080`

### Mac/Linux

1. Abra o terminal na pasta `frontend`
2. Execute: `bash setup.sh`
3. Pronto! Site estará rodando em `http://localhost:8080`

---

## Modo Desenvolvimento

Para editar arquivos com auto-reload:

```bash
npm run dev
```

- TypeScript será compilado automaticamente
- Navegador recarrega automaticamente

---

## Estrutura dos Arquivos

```
📁 frontend/
├── 📄 index.html          ← Arquivo principal do site
├── 📄 package.json        ← Dependências e scripts
├── 📁 src/
│   ├── 📄 main.ts         ← Lógica do site
│   ├── 📄 data.ts         ← Produtos e preços
│   └── 📁 types/
│       └── 📄 index.ts    ← Tipos TypeScript
├── 📁 dist/               ← Arquivos compilados (gerado)
└── 📁 .vscode/            ← Configurações VS Code
```

---

## Como Adicionar Produtos

1. Abra `src/data.ts`
2. Encontre o array `equipment`
3. Copie um produto existente
4. Altere os dados:
   - `id`: Número único (ex: '9')
   - `name`: Nome do equipamento
   - `price`: Preço em reais
   - `specifications`: Características técnicas
5. Salve e o site atualizará automaticamente

**Exemplo:**

```typescript
{
  id: '9',
  name: 'Meu Novo Equipamento',
  category: 'Escavadeira',
  price: 300000,
  currency: 'BRL',
  image: '🏗️',
  description: 'Descrição aqui...',
  specifications: [
    { key: 'Peso', value: '30.000 kg' },
    { key: 'Potência', value: '250 HP' }
  ],
  inStock: true,
  deliveryTime: '30 dias'
}
```

---

## Personalizar Cores

Edite `index.html` na seção `:root`:

```css
:root {
  --primary: #d35400; /* Laranja - mudar aqui */
  --secondary: #ffb81c; /* Amarelo - mudar aqui */
  --dark: #1a1a1a;
  --light: #f5f5f5;
}
```

---

## Comandos Úteis

```bash
npm run dev      # Desenvolvimento com auto-reload
npm run build    # Compilar TypeScript
npm run watch    # Monitorar mudanças em TS
npm run serve    # Iniciar servidor local
```

---

## Checklist de Customização

- [ ] Adicionar/editar produtos em `src/data.ts`
- [ ] Alterar cores em `index.html` (:root)
- [ ] Editar textos do site em `index.html`
- [ ] Adicionar logo real (substituir emoji)
- [ ] Configurar email para formulários
- [ ] Testar em dispositivos diferentes
- [ ] Deploy para hosting

---

## Próximos Passos

1. **Ver Documentação Completa**: `README.md`
2. **Personalizar Avançado**: `CUSTOMIZATION.md`
3. **Deploy**: Consulte `CUSTOMIZATION.md` > Deploy

---

## Suporte

- Documentação: Veja `README.md` e `CUSTOMIZATION.md`
- TypeScript: https://www.typescriptlang.org/
- Tailwind: https://tailwindcss.com/
- HTML: https://developer.mozilla.org/

---

**Bom desenvolvimento! 🎉**
