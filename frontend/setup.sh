#!/bin/bash
# Script de inicialização do projeto TM Mining Frontend

echo "🚀 Iniciando TM Mining Frontend..."
echo ""

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não está instalado. Por favor, instale Node.js 16+ em https://nodejs.org"
    exit 1
fi

echo "✅ Node.js encontrado: $(node --version)"
echo "✅ npm encontrado: $(npm --version)"
echo ""

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Erro ao instalar dependências"
    exit 1
fi

echo ""
echo "✅ Dependências instaladas com sucesso!"
echo ""

# Compilar TypeScript
echo "🔨 Compilando TypeScript..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Erro ao compilar TypeScript"
    exit 1
fi

echo ""
echo "✅ Projeto compilado com sucesso!"
echo ""
echo "🎉 Pronto para começar!"
echo ""
echo "Comandos disponíveis:"
echo "  npm run dev     - Desenvolvimento com watch automático"
echo "  npm run build   - Compilar TypeScript"
echo "  npm run watch   - Assistir alterações em TS"
echo "  npm run serve   - Servir localmente"
echo ""
