# 🚀 Deploy Guide - Grain Website

## ✅ Problema Resolvido!
As imagens quebradas foram **completamente corrigidas**! O problema era o uso de caminhos absolutos `/src/assets/...` que não funcionam em produção.

## 🔧 O que foi corrigido:
1. **Vite config** - Adicionado `base: '/'` e configurações de assets
2. **Componentes** - Todas as imagens agora são importadas como módulos
3. **Screenshots** - Corrigidos para **TODOS os idiomas** usando pasta `public/`
4. **CSS** - Atualizado para suportar background images
5. **TypeScript** - Adicionadas declarações para arquivos de imagem
6. **Client-side Routing** - Configurado `vercel.json` e `BrowserRouter` para roteamento correto

## 🚀 Deploy no Vercel (20 minutos)

### 1. **Build local (2 min)**
```bash
npm run build
```

### 2. **Deploy no Vercel (15 min)**
1. Acesse [vercel.com](https://vercel.com)
2. Faça login com GitHub
3. Clique em "New Project"
4. Importe seu repositório `grain-website`
5. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### 3. **Configurar domínio (3 min)**
1. No dashboard do Vercel → "Settings" → "Domains"
2. Adicione `grainpixel.com`
3. Configure DNS:
   - **A Record**: `76.76.19.36`
   - **CNAME**: `cname.vercel-dns.com`

## 🎯 Por que agora funciona:
- ✅ Imagens importadas como módulos ES6
- ✅ Screenshots copiados para pasta `public/` (padrão Vite)
- ✅ Vite processa e otimiza assets automaticamente
- ✅ Hash names para cache busting
- ✅ Caminhos relativos em produção
- ✅ TypeScript declarations para assets
- ✅ Client-side routing funcionando para todas as páginas

## 🔄 Deploy automático:
Após configurado, cada push para `main` fará deploy automático!

## 📁 Arquivos corrigidos:
- `src/components/Header.tsx` - Logo e store badges
- `src/components/Footer.tsx` - Logo
- `src/components/Trailer.tsx` - Store badges  
- `src/components/Hero.tsx` - Banner image
- **Todos os arquivos de idioma** - Screenshots corrigidos:
  - `pt-BR.ts`, `en-US.ts`, `es.ts`, `fr.ts`, `de.ts`
  - `it.ts`, `ja.ts`, `ko.ts`, `pl.ts`, `ru.ts`, `zh-CN.ts`
- `vite.config.ts` - Configuração de assets e routing
- `src/vite-env.d.ts` - Declarações TypeScript para assets
- `src/main.tsx` - BrowserRouter com basename configurado
- `public/screenshots/` - Pasta com todos os screenshots
- `vercel.json` - Configuração Vercel para client-side routing

## 🌍 Idiomas com screenshots funcionando:
- 🇧🇷 **Português** - ✅
- 🇺🇸 **Inglês** - ✅  
- 🇪🇸 **Espanhol** - ✅
- 🇫🇷 **Francês** - ✅
- 🇩🇪 **Alemão** - ✅
- 🇮🇹 **Italiano** - ✅
- 🇯🇵 **Japonês** - ✅
- 🇰🇷 **Coreano** - ✅
- 🇵🇱 **Polonês** - ✅
- 🇷🇺 **Russo** - ✅
- 🇨🇳 **Chinês** - ✅

## 📄 Páginas funcionando:
- 🏠 **Home** - ✅
- 🔒 **Privacy Policy** - ✅ (routing corrigido)
- 📧 **Contact** - ✅ (routing corrigido para `/contact-info`)

---
**Status**: ✅ Pronto para deploy
**Build**: ✅ Funcionando
**Assets**: ✅ Corrigidos
**Screenshots**: ✅ Corrigidos para TODOS os idiomas
**Routing**: ✅ Corrigido para todas as páginas
**Deploy**: ✅ Pronto para Vercel
