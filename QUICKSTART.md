# ⚡ Quick Start - Comece em 5 Minutos

## 🎯 Passo a Passo Rápido

### 1️⃣ Instalar Node.js (se ainda não tiver)

Baixe e instale: https://nodejs.org/

Versão recomendada: **18.x ou superior**

### 2️⃣ Instalar Dependências

Abra o PowerShell nesta pasta e execute:

```powershell
npm install
```

⏳ Aguarde 1-2 minutos para instalar todas as dependências...

### 3️⃣ Rodar Localmente

```powershell
npm run dev
```

✅ Abra o navegador em: **http://localhost:3000**

### 4️⃣ Testar o Funil

Navegue pelas páginas:

- http://localhost:3000 → Landing page
- http://localhost:3000/etapa-1 → Primeira pergunta
- http://localhost:3000/etapa-2 → Segunda pergunta
- ... e assim por diante até `/pv`

---

## 🚀 Deploy na Vercel

### Opção Fácil - Via Interface

1. Acesse: https://vercel.com/new
2. Conecte com GitHub
3. Selecione este repositório
4. Clique em "Deploy"
5. ✅ Pronto em 2 minutos!

### Opção Rápida - Via CLI

```powershell
# Instalar CLI
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel --prod
```

---

## ✏️ Personalizações Essenciais

### 1. Adicionar Seu Vídeo

Edite: `app/vsl/page.tsx`

Linha ~35, descomente e adicione seu vídeo:

```tsx
<iframe
  src="https://www.youtube.com/embed/SEU_VIDEO_ID"
  ...
></iframe>
```

### 2. Adicionar Link de Checkout

Edite: `app/pv/page.tsx`

Função `handleCheckout()`:

```tsx
const handleCheckout = () => {
  window.location.href = 'https://seu-checkout.com'
}
```

### 3. Mudar Cores

Edite: `tailwind.config.ts`

```ts
colors: {
  primary: '#6366f1',  // 👈 Sua cor aqui
}
```

---

## 📁 Estrutura de Arquivos

```
📦 maquiagme/
├── 📁 app/
│   ├── 📄 page.tsx              ← Landing (etapa-0)
│   ├── 📁 etapa-1/ até etapa-6/ ← Quiz
│   ├── 📁 vsl/                  ← Vídeo
│   └── 📁 pv/                   ← Checkout
├── 📁 components/
│   ├── Header.tsx               ← Logo e saldo
│   └── Layout.tsx               ← Layout geral
└── 📄 package.json              ← Dependências
```

---

## 🛠️ Comandos Úteis

```powershell
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar build local
npm start

# Verificar erros
npm run lint
```

---

## 🎨 Cores do Projeto

- **Primária:** `#6366f1` (Roxo/Azul)
- **Secundária:** `#764ba2` (Roxo Escuro)
- **Sucesso:** `#10b981` (Verde)
- **Alerta:** `#f59e0b` (Laranja)

---

## 📱 Responsivo?

✅ Sim! Funciona em:
- 📱 Mobile (iOS/Android)
- 📱 Tablet
- 💻 Desktop
- 🖥️ TV

---

## ❓ Dúvidas Comuns

### Erro ao instalar

```powershell
npm cache clean --force
npm install
```

### Porta 3000 ocupada

```powershell
npm run dev -- -p 3001
```

### Erro de TypeScript

```powershell
npm run build
```

Corrija os erros apontados.

---

## 📞 Suporte

- 📚 Next.js Docs: https://nextjs.org/docs
- 🚀 Vercel Docs: https://vercel.com/docs
- 💬 Stack Overflow: https://stackoverflow.com/questions/tagged/next.js

---

## ✅ Checklist Final

Antes de publicar:

- [ ] Instalei as dependências (`npm install`)
- [ ] Testei localmente (`npm run dev`)
- [ ] Adicionei meu vídeo em `/vsl`
- [ ] Configurei o link de checkout em `/pv`
- [ ] Testei todas as páginas do funil
- [ ] Fiz o build (`npm run build`)
- [ ] Deploy na Vercel feito
- [ ] Testei o site online
- [ ] Configurei domínio personalizado (opcional)
- [ ] Adicionei Google Analytics (opcional)

---

**🎉 Tudo pronto! Seu funil está pronto para converter! 💰**

Boa sorte com suas vendas! 🚀

