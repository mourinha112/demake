# 🚀 Guia de Deploy na Vercel

## Método 1: Deploy via GitHub (Recomendado)

### Passo 1: Criar Repositório no GitHub

1. Vá para [github.com](https://github.com) e crie uma nova conta ou faça login
2. Clique em "New repository"
3. Dê um nome (ex: `fornecedores-demake`)
4. Deixe como público ou privado
5. NÃO inicialize com README (já temos um)
6. Clique em "Create repository"

### Passo 2: Conectar seu projeto ao GitHub

Abra o PowerShell na pasta do projeto e execute:

```powershell
git init
git add .
git commit -m "Initial commit - Funil completo Fornecedores Demake"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git push -u origin main
```

### Passo 3: Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "Sign Up" e entre com sua conta do GitHub
3. Clique em "New Project"
4. Selecione o repositório que você acabou de criar
5. A Vercel detectará automaticamente que é Next.js
6. Clique em "Deploy"
7. ✅ Aguarde 1-2 minutos e pronto!

Você receberá um link como: `https://seu-projeto.vercel.app`

---

## Método 2: Deploy via CLI (Mais Rápido)

### Instalar Vercel CLI

```powershell
npm install -g vercel
```

### Fazer Login

```powershell
vercel login
```

### Deploy

```powershell
# Na pasta do projeto
vercel

# Para produção
vercel --prod
```

---

## 🔧 Configurações Importantes

### 1. Adicionar Domínio Personalizado

1. Na dashboard da Vercel, clique em seu projeto
2. Vá em "Settings" > "Domains"
3. Adicione seu domínio personalizado
4. Configure o DNS conforme instruções

### 2. Variáveis de Ambiente

1. Na Vercel, vá em "Settings" > "Environment Variables"
2. Adicione suas variáveis:
   - `NEXT_PUBLIC_API_URL`
   - `STRIPE_SECRET_KEY`
   - etc.

### 3. Analytics

Para adicionar Google Analytics:

1. Edite `app/layout.tsx`
2. Adicione o script do GA no `<head>`

---

## 📊 Depois do Deploy

### Testar o Funil

Teste todas as páginas:
- ✅ `/` - Landing page
- ✅ `/etapa-1` até `/etapa-6` - Quiz
- ✅ `/vsl` - Vídeo
- ✅ `/pv` - Página de vendas

### Configurar Pagamentos

Edite `app/pv/page.tsx` e adicione seu link de checkout:

```tsx
const handleCheckout = () => {
  window.location.href = 'SEU_LINK_HOTMART_OU_KIWIFY'
}
```

### Adicionar Vídeo

Edite `app/vsl/page.tsx` e adicione o embed do seu vídeo do YouTube, Vimeo ou Panda Video.

---

## 🐛 Solução de Problemas

### Erro de Build

Se der erro no build:

```powershell
npm run build
```

Verifique os erros e corrija antes de fazer deploy.

### Erro de Dependências

```powershell
rm -rf node_modules
npm install
```

### Página em Branco

Verifique o console do navegador (F12) para ver erros.

---

## 🎯 Próximos Passos

1. ✅ Deploy feito
2. 📹 Adicione seu vídeo VSL
3. 💳 Configure o gateway de pagamento
4. 📊 Adicione Google Analytics
5. 🎨 Personalize cores e textos
6. 🚀 Comece a divulgar!

---

## 📞 Links Úteis

- Documentação Vercel: https://vercel.com/docs
- Documentação Next.js: https://nextjs.org/docs
- Suporte Vercel: https://vercel.com/support

---

**🎉 Parabéns! Seu funil está no ar!** 🚀

