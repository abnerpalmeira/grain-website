# 🚀 Deploy Guide - Grain Website

## ✅ Problema Resolvido!
As imagens quebradas foram **completamente corrigidas**! O problema era o uso de caminhos absolutos `/src/assets/...` que não funcionam em produção.

## 🔧 O que foi corrigido:
1. **Vite config** - Adicionado `base: './'` e `publicDir: 'src/assets'`
2. **Componentes** - Todas as imagens agora são importadas como módulos
3. **Screenshots** - Corrigidos para usar caminhos relativos `/assets/screenshots/...`
4. **CSS** - Atualizado para suportar background images
5. **TypeScript** - Adicionadas declarações para arquivos de imagem

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
- ✅ Screenshots copiados para pasta pública
- ✅ Vite processa e otimiza assets automaticamente
- ✅ Hash names para cache busting
- ✅ Caminhos relativos em produção
- ✅ TypeScript declarations para assets

## 🔄 Deploy automático:
Após configurado, cada push para `main` fará deploy automático!

## 📁 Arquivos corrigidos:
- `src/components/Header.tsx` - Logo e store badges
- `src/components/Footer.tsx` - Logo
- `src/components/Trailer.tsx` - Store badges  
- `src/components/Hero.tsx` - Banner image
- `src/locales/pt-BR.ts` - Screenshots em português
- `src/locales/en-US.ts` - Screenshots em inglês
- `vite.config.ts` - Configuração de assets e pasta pública
- `src/vite-env.d.ts` - Declarações TypeScript para assets

---
**Status**: ✅ Pronto para deploy
**Build**: ✅ Funcionando
**Assets**: ✅ Corrigidos
**Screenshots**: ✅ Corrigidos
**Deploy**: ✅ Pronto para Vercel
