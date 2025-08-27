# Sistema de Localização - Grain Website

Este projeto implementa um sistema completo de localização para o site do Grain Pixel, permitindo suporte a múltiplos idiomas.

## 🚀 Funcionalidades

- **Suporte a múltiplos idiomas**: Português (pt-BR) e Inglês (en-US)
- **Seletor de idioma visual**: Botões com bandeiras para alternar entre idiomas
- **Persistência de preferência**: Lembra a escolha do usuário usando localStorage
- **Tradução automática**: Todos os textos, atributos alt, placeholders e labels são traduzidos
- **Meta tags dinâmicas**: Título e descrição da página são atualizados automaticamente

## 📁 Estrutura dos Arquivos

- `main.html` - Arquivo principal com atributos de localização
- `locales.js` - Sistema de tradução e gerenciamento de idiomas

## 🔧 Como Usar

### 1. Adicionar Novos Textos

Para adicionar um novo texto traduzível, use os atributos `data-i18n`:

```html
<!-- Texto simples -->
<h1 data-i18n="heroTitle">Título do Herói</h1>

<!-- Placeholder -->
<input data-i18n-placeholder="emailPlaceholder" placeholder="seu@email.com">

<!-- Alt text -->
<img data-i18n-alt="imageAlt" alt="Descrição da imagem">

<!-- Aria-label -->
<div data-i18n-aria-label="sectionLabel" aria-label="Rótulo da seção">
```

### 2. Adicionar Novas Traduções

No arquivo `locales.js`, adicione as chaves de tradução:

```javascript
const locales = {
  'pt-BR': {
    // ... outras traduções
    novaChave: 'Texto em português',
  },
  'en-US': {
    // ... outras traduções
    novaChave: 'Text in English',
  }
};
```

### 3. Adicionar Novos Idiomas

Para adicionar um novo idioma (ex: espanhol):

```javascript
const locales = {
  // ... idiomas existentes
  'es-ES': {
    title: 'Grain Pixel — Diversión con Partículas',
    description: 'Grain Pixel es un sandbox de partículas en pixel art...',
    // ... todas as outras traduções
  }
};
```

E adicione o botão no seletor de idioma:

```javascript
createLanguageSwitcher() {
  // ... código existente
  languageSwitcher.innerHTML = `
    <button class="lang-btn" data-locale="pt-BR">🇧🇷</button>
    <button class="lang-btn" data-locale="en-US">🇺🇸</button>
    <button class="lang-btn" data-locale="es-ES">🇪🇸</button>
  `;
}
```

## 🎨 Personalização

### Estilos do Seletor de Idioma

Os estilos do seletor de idioma são definidos dinamicamente no JavaScript. Para personalizar:

```javascript
// Em createLanguageSwitcher()
style.textContent = `
  .language-switcher {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  .lang-btn {
    /* Seus estilos personalizados */
  }
`;
```

### Badge de Wishlist

O texto "Wishlist" é atualizado dinamicamente usando CSS custom properties:

```css
.store-badges .soon::after {
  content: var(--wishlist-text, "Wishlist");
  /* ... outros estilos */
}
```

## 🔄 Como Funciona

1. **Inicialização**: O `LocalizationManager` é criado quando a página carrega
2. **Detecção de idioma**: Verifica se há um idioma salvo no localStorage
3. **Aplicação de traduções**: Atualiza todos os elementos com atributos `data-i18n`
4. **Seletor visual**: Cria botões para alternar entre idiomas
5. **Persistência**: Salva a escolha do usuário para futuras visitas

## 📱 Responsividade

O seletor de idioma é responsivo e se adapta ao layout existente do header. Os estilos são compatíveis com o design system atual do site.

## 🚀 Próximos Passos

- [ ] Adicionar mais idiomas (espanhol, francês, etc.)
- [ ] Implementar detecção automática de idioma do navegador
- [ ] Adicionar animações de transição entre idiomas
- [ ] Implementar fallback para textos não traduzidos
- [ ] Adicionar suporte a RTL (direita para esquerda)

## 🤝 Contribuição

Para contribuir com novas traduções ou melhorias no sistema:

1. Adicione as traduções no arquivo `locales.js`
2. Atualize o HTML com os atributos `data-i18n` apropriados
3. Teste a funcionalidade em diferentes idiomas
4. Mantenha a consistência com o padrão existente

## 📄 Licença

Este sistema de localização é parte do projeto Grain Website e segue as mesmas diretrizes de licenciamento.
