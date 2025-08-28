# 🚀 Deploy Guide - Grain Website

## ✅ Problema Resolvido!
As imagens quebradas foram corrigidas. O problema era o uso de caminhos absolutos `/src/assets/...` que não funcionam em produção.

## 🔧 O que foi corrigido:
1. **Vite config** - Adicionado `base: './'` e configurações de assets
2. **Componentes** - Todas as imagens agora são importadas como módulos
3. **CSS** - Atualizado para suportar background images
4. **TypeScript** - Adicionadas declarações para arquivos de imagem

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
- ✅ Vite processa e otimiza assets automaticamente
- ✅ Hash names para cache busting
- ✅ Caminhos relativos em produção
- ✅ TypeScript declarations para assets

## 🔄 Deploy automático:
Após configurado, cada push para `main` fará deploy automático!

---
**Status**: ✅ Pronto para deploy
**Build**: ✅ Funcionando
**Assets**: ✅ Corrigidos
