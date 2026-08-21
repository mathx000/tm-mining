# Guia de Deploy - TM Mining International (Hostinger)

## ✅ Status Atual

- ✅ Frontend 100% traduzido (PT, EN, FR, ES)
- ✅ Desktop e Mobile suportados
- ✅ Language Switcher funcional
- ✅ Build pronto para produção

---

## 📋 Checklist Pré-Deploy

- [ ] Testar site em 4 idiomas no navegador
- [ ] Testar Language Switcher em mobile/desktop
- [ ] Verificar se cookies de idioma estão salvando
- [ ] Testar filtros em todos os idiomas
- [ ] Verificar imagens carregam corretamente
- [ ] Testar links de contato/WhatsApp

---

## 🚀 Deploy na Hostinger (Passo a Passo)

### Etapa 1: Preparar o Build para Produção

```bash
# No diretório frontend/
npm run build
```

Isso gera uma pasta `dist/` com os arquivos otimizados.

**O que você vai ver:**

- `dist/index.html` - Arquivo principal
- `dist/assets/` - JavaScript, CSS, imagens otimizadas

---

### Etapa 2: Conectar ao Hostinger via FTP

#### Opção A: FTP Desktop (Recomendado para Hostinger)

1. **Baixar Filezilla** (gratuito):
   - [Filezilla Download](https://filezilla-project.org/)

2. **Configurar Conexão FTP**:
   - Abrir Hostinger → Minha Conta → Hospedagem
   - Copiar credenciais FTP:
     - **Host**: `ftp.seu-dominio.com` (ou IP da Hostinger)
     - **Usuário**: seu FTP user
     - **Senha**: sua senha FTP
     - **Porta**: 21

3. **No Filezilla**:
   - `Arquivo > Gerenciador de Sites`
   - Nova site → Preencher dados FTP
   - Conectar

4. **Upload dos arquivos**:
   - Localizar pasta `dist/` no seu PC (lado esquerdo)
   - Criar pasta `public_html/` se não existir no servidor
   - Arrastar todos os arquivos de `dist/` para `public_html/`

---

#### Opção B: Hostinger Painel de Controle

1. **Acessar Painel Hostinger**:
   - Ir para Hospedagem > Gerenciador de Arquivos

2. **Fazer upload**:
   - Criar pasta `public_html/`
   - Upload dos arquivos de `dist/`

---

### Etapa 3: Configurar .htaccess (IMPORTANTE!)

Criar arquivo `.htaccess` em `public_html/` com o seguinte conteúdo:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Redirecionar para index.html para rotas React
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Cache e compressão
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Compressão GZIP
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

**Instruções**:

1. Criar arquivo de texto (Notepad)
2. Copiar conteúdo acima
3. Salvar como `.htaccess` (com ponto no início!)
4. Upload para `public_html/`

---

### Etapa 4: Configurar Domínio (Hostinger)

1. **Painel Hostinger → Meu Domínio**
2. **Apontamento de Domínio**:
   - Verificar se domínio está apontando para IP da Hostinger
   - Geralmente já vem pré-configurado

3. **Esperar Propagação** (5 min - 24h)

---

### Etapa 5: Testar Site em Produção

```
https://seu-dominio.com
```

**Verificar**:

- [ ] Site carrega sem erros
- [ ] CSS está carregando (sem quebra de layout)
- [ ] Images aparecem
- [ ] JavaScript funciona
- [ ] Language Switcher troca idioma
- [ ] Filtros funcionam
- [ ] Links internos funcionam

---

## 🔧 Troubleshooting

### "Arquivo não encontrado" ou erro 404

**Causa**: `.htaccess` não está configurado corretamente

**Solução**:

1. Verificar se `.htaccess` está em `public_html/`
2. Verificar se o arquivo começa com `.` (ponto)
3. Tentar fazer novo upload do `.htaccess`

### "Layout quebrado" ou CSS não carrega

**Causa**: Caminhos de assets errados

**Solução**:

1. Verificar no navegador (F12 → Console)
2. Ver se arquivos CSS estão em `dist/assets/`
3. Tentar limpar cache do navegador (Ctrl+Shift+Delete)

### Idioma não muda

**Causa**: localStorage com cache do navegador

**Solução**:

1. Limpar cookies/cache do site
2. Testar em abas anônimas

### Filezilla não conecta

**Verificar**:

- [ ] Credenciais FTP corretas
- [ ] Firewall bloqueando porta 21
- [ ] Hostinger ativou acesso FTP (Painel → Conta)

---

## 📊 Otimizações para Produção

### Build já contém:

- ✅ Compressão automática (Vite)
- ✅ Minificação de código
- ✅ Tree-shaking (remove código não usado)
- ✅ Code splitting automático
- ✅ Cache-busting (versioning de arquivos)

### Adicionar em .htaccess:

- ✅ GZIP compression
- ✅ Cache de longa duração para assets
- ✅ Rewrite para rotas React

---

## 🎯 Performance (Hostinger)

Esperar:

- Time to First Byte: < 1s
- First Contentful Paint: < 2s
- Largest Contentful Paint: < 3s

**Se lento**:

1. Hostinger Painel → Otimizações
2. Ativar compressão GZIP
3. Ativar cache automático
4. Ativar CDN (se disponível)

---

## 🔐 Segurança

- ✅ HTTPS automático (Hostinger fornece Let's Encrypt)
- ✅ Não há exposição de API keys (tudo em localStorage)
- ✅ Sem servidor backend (por enquanto)

**Próxima fase**:

- Adicionar backend seguro para JigsawStack
- Mover chaves para variáveis de ambiente do servidor

---

## 📱 Verificar Mobile

```bash
# Localmente
npm run build
npm run preview

# Acessar http://localhost:4173 de outros dispositivos
```

**Testar em**:

- iPhone Safari
- Android Chrome
- Tablets

---

## 🔄 Atualizar Site após Deploy

Quando fizer mudanças:

```bash
# Desenvolver
npm run dev

# Preparar novo build
npm run build

# Upload apenas os arquivos novos de dist/ via FTP
```

Ou automatizar com:

- GitHub Actions + FTP Deploy
- Netlify (alternativa fácil)
- Vercel (mais fácil ainda)

---

## 📞 Suporte Hostinger

- Chat ao vivo: Painel → Suporte
- Email: support@hostinger.com
- Knowledge Base: hostinger.com/help

---

## ✅ Checklist Final

- [ ] npm run build executado com sucesso
- [ ] Pasta dist/ criada
- [ ] .htaccess criado e configurado
- [ ] Arquivos de dist/ fazem upload para public_html/
- [ ] Domínio apontando corretamente
- [ ] Site acessa via https://seu-dominio.com
- [ ] Todos os idiomas funcionam
- [ ] Mobile responsivo
- [ ] Cache funcionando

---

## 🎉 Pronto para Produção!

Seu site TM Mining está 100% traduzido e otimizado para Hostinger.

**Próximas etapas opcionais**:

1. Implementar backend Node/Express
2. Conectar JigsawStack para tradução automática
3. Adicionar Analytics (Google Analytics)
4. Implementar Sitemaps para SEO

---

**Data de Deploy**: ****\_\_\_****
**Domínio**: ****\_\_\_****
**Status**: ****\_\_\_****
