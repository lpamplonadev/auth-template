# Auth Template (Next.js) — Login / Register / Forgot

Template **mobile-first** de autenticação com **Next.js (App Router)**, **Tailwind** e **shadcn/ui**.  
Feito para você começar projetos rápido com UI consistente, validação pronta e estrutura organizada.

> ✅ Ideal para virar produto (Starter/Pro), boilerplate interno ou base de SaaS.

---

## ✨ Features

- ✅ Fluxo completo de auth UI: **Login**, **Cadastro**, **Esqueci a senha**
- ✅ **Validação com Zod** + **react-hook-form**
- ✅ UI com **shadcn/ui** (Card, Button, Input, etc.)
- ✅ **Dark mode** (next-themes) + toggle
- ✅ Server Actions (mock) para simular login/cadastro/reset
- ✅ Código limpo e fácil de estender (auth real, dashboard, onboarding…)

---

## 🌿 Branches

Este repositório tem duas versões do template:

### `main` — Core (cru / minimal)

- Sem dependências extras de animação
- Mais simples, direto ao ponto e com menos “mágica”
- Perfeito como base estável para qualquer projeto

### `pro-motion` — Motion Pack (animações discretas)

- Inclui `tw-animate-css`
- Adiciona animações leves e profissionais (ex: entrada do card, erros)
- Mantém o core intacto, só adiciona polimento visual

> Dica: Para testar uma branch localmente:

```bash
git checkout main
# ou
git checkout pro-motion
npm install
npm run dev
```

---

## 🧰 Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Zod
- react-hook-form
- next-themes (dark mode)
- (pro-motion) tw-animate-css

---

## 🚀 Começando

### 1) Instalar dependências

```bash
npm install
```

### 2) Rodar em desenvolvimento

```bash
npm run dev
```

Abra: `http://localhost:3000`

---

## 🗺️ Rotas

- `/login` — Login
- `/register` — Cadastro
- `/forgot` — Recuperar senha

---

## 🔧 Observações importantes

### Server Actions (mock)

Este template usa actions mock para simular autenticação.  
Você pode substituir por:

- NextAuth
- Lucia
- Supabase Auth
- API própria
- Firebase Auth

As actions ficam em:

```
src/app/actions/auth.ts
```

### Validação

Schemas Zod ficam em:

```
src/lib/validators/auth.ts
```

---

## 📁 Estrutura do projeto

```
src/
  app/
    (auth)/
      layout.tsx
      login/page.tsx
      register/page.tsx
      forgot/page.tsx
    actions/
      auth.ts
    layout.tsx
    page.tsx
    globals.css

  components/
    auth/
      AuthShell.tsx
      LoginForm.tsx
      RegisterForm.tsx
      ForgotForm.tsx
    theme/
      ThemeProvider.tsx
      ThemeToggle.tsx

  lib/
    validators/
      auth.ts
```

---

## 🧪 Qualidade (sugestão)

Se você quiser deixar mais “produto” ainda:

- ESLint + regras de import/ordenação
- Prettier
- Husky + lint-staged
- CI básico no GitHub Actions (lint + build)

---

## 🛣️ Roadmap sugerido (para versão Pro)

- [ ] Dashboard pós-login (sidebar + tabela + filtros)
- [ ] Empty / Loading / Error states padronizados
- [ ] Social login buttons (UI)
- [ ] “Reset password” completo (UI + token flow)
- [ ] Multi-tenant / org switch (UI)
- [ ] Docs melhores + GIF demo no README
- [ ] Página de marketing (landing do template)

---

## 📜 Licença

Defina a licença conforme seu objetivo:

- **MIT** (bom para open-source)
- **Proprietária/Comercial** (bom para vender como template)

> Se você pretende vender, recomendo manter uma versão “lite” MIT e a Pro com licença comercial.

---

## 🙌 Créditos

UI baseada em shadcn/ui e Tailwind.  
Template estruturado para ser simples de usar, fácil de evoluir e pronto para virar um produto.
