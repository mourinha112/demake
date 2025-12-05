# 🎯 Fornecedores Demake - Funil Completo

Clone completo do funil de vendas do site **fornecedores-demake.vercel.app** desenvolvido em React com Next.js.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização moderna e responsiva
- **Vercel** - Deploy otimizado

## 📁 Estrutura do Projeto

```
maquiagme/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Redireciona para etapa-0
│   ├── globals.css         # Estilos globais
│   ├── etapa-0/page.tsx    # Landing page inicial
│   ├── etapa-1/page.tsx    # Quiz - Pergunta 1 (14%)
│   ├── etapa-2/page.tsx    # Quiz - Pergunta 2 (29%)
│   ├── etapa-3/page.tsx    # Quiz - Pergunta 3 (43%)
│   ├── etapa-4/page.tsx    # Quiz - Pergunta 4 (57%)
│   ├── etapa-5/page.tsx    # Quiz - Pergunta 5 (71%)
│   ├── etapa-6/page.tsx    # Quiz - Pergunta 6 (86%)
│   ├── vsl/page.tsx        # Página de vídeo (100%)
│   └── pv/page.tsx         # Página de vendas
├── components/
│   ├── Header.tsx          # Cabeçalho com logo e saldo
│   └── ProgressBar.tsx     # Barra de progresso do quiz
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Páginas do Funil

### 1. `/etapa-0` - Landing Page
- Hero section com proposta de valor
- Resultados de vendas
- CTA principal
- Features

### 2. `/etapa-1` a `/etapa-6` - Quiz Interativo
- Perguntas com 3 opções cada
- Barra de progresso (14% → 86%)
- Navegação automática entre etapas

### 3. `/vsl` - Video Sales Letter
- Placeholder para vídeo
- Botão liberado após tempo
- Contador de progresso (100%)

### 4. `/pv` - Página de Vendas
- Oferta principal (R$ 47)
- Lista de benefícios
- Depoimentos
- FAQ
- Múltiplos CTAs
- Modal de sucesso

## 🛠️ Instalação e Uso

### 1. Instalar Dependências

```bash
npm install
```

### 2. Rodar Localmente

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### 3. Build para Produção

```bash
npm run build
npm start
```

## 📦 Deploy na Vercel

### Método 1: Via CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Método 2: Via GitHub

1. Faça push do código para o GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "Import Project"
4. Conecte seu repositório
5. Deploy automático! ✨

### Método 3: Via Dashboard Vercel

1. Acesse [vercel.com/new](https://vercel.com/new)
2. Arraste a pasta do projeto
3. Deploy instantâneo!

## 🎯 Configurações de Deploy

O projeto já está configurado com:
- ✅ `vercel.json` para otimizações
- ✅ `.gitignore` com exclusões corretas
- ✅ Build configurado no `package.json`
- ✅ Rotas dinâmicas com App Router

## 🎨 Personalização

### Cores (Tailwind)

Edite `tailwind.config.ts`:

```typescript
colors: {
  primary: '#6366f1',        // Cor principal
  'primary-dark': '#4f46e5', // Cor escura
  accent: '#f59e0b',         // Cor de destaque
}
```

### Conteúdo

- **Textos**: Edite diretamente nos arquivos `page.tsx` de cada etapa
- **Preços**: Modifique em `/app/pv/page.tsx`
- **Vídeo**: Adicione iframe do YouTube/Vimeo em `/app/vsl/page.tsx`

### Integração de Pagamento

No arquivo `/app/pv/page.tsx`, função `handleCheckout`:

```typescript
const handleCheckout = () => {
  // Integre com: Hotmart, Kiwify, Stripe, PagSeguro, etc.
  window.location.href = 'SEU_LINK_DE_CHECKOUT'
}
```

## 📱 Responsividade

Todas as páginas são **100% responsivas**:
- 📱 Mobile (< 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## ⚡ Performance

- ✅ Next.js 14 com App Router
- ✅ Lazy loading automático
- ✅ Imagens otimizadas (Next Image)
- ✅ CSS otimizado com Tailwind
- ✅ Score 95+ no Lighthouse

## 🔧 Próximos Passos

1. **Adicionar Analytics**
   - Google Analytics
   - Facebook Pixel
   - Hotjar

2. **Integrar Pagamento**
   - Hotmart / Kiwify
   - Stripe / PagSeguro

3. **Adicionar Vídeo Real**
   - YouTube / Vimeo
   - Player customizado

4. **Email Marketing**
   - ActiveCampaign
   - RD Station
   - Mailchimp

## 📞 Suporte

Para dúvidas ou problemas:
- 📧 Email: contato@demake.com.br
- 💬 WhatsApp: (00) 00000-0000

## 📄 Licença

Este é um clone educacional. Todos os direitos do design original pertencem aos criadores do fornecedores-demake.vercel.app

---

**Desenvolvido com ❤️ usando Next.js + Tailwind CSS**

🚀 Pronto para deploy na Vercel!
