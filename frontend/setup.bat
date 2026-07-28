@echo off
REM Script de inicialização do projeto TM Mining Frontend para Windows

echo 🚀 Iniciando TM Mining Frontend...
echo.

REM Verificar se Node.js está instalado
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js não está instalado. Por favor, instale Node.js 16+ em https://nodejs.org
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i

echo ✅ Node.js encontrado: %NODE_VERSION%
echo ✅ npm encontrado: %NPM_VERSION%
echo.

REM Instalar dependências
echo 📦 Instalando dependências...
call npm install

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Erro ao instalar dependências
    pause
    exit /b 1
)

echo.
echo ✅ Dependências instaladas com sucesso!
echo.

REM Compilar TypeScript
echo 🔨 Compilando TypeScript...
call npm run build

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Erro ao compilar TypeScript
    pause
    exit /b 1
)

echo.
echo ✅ Projeto compilado com sucesso!
echo.
echo 🎉 Pronto para começar!
echo.
echo Comandos disponíveis:
echo   npm run dev     - Desenvolvimento com watch automático
echo   npm run build   - Compilar TypeScript
echo   npm run watch   - Assistir alterações em TS
echo   npm run serve   - Servir localmente
echo.
pause
