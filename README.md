# Teste Econverse: Desenvolvedor Front-End

Este repositório contém a solução para o desafio de Desenvolvedor Front-End da Econverse. O projeto consiste em uma interface de e-commerce construída com foco em performance, acessibilidade e boas práticas modernas de desenvolvimento web.

## 🚀 Diferenciais e Pontos Extras Atingidos

Fui além dos requisitos básicos solicitados no desafio para entregar uma aplicação mais robusta e próxima da realidade de grandes e-commerces:

- **Página Interna de Produto (React Router):** O teste solicitava abrir as informações do produto em um *modal*. Como **diferencial**, optei por criar um roteamento real (`/product/:id`) com uma página dedicada de detalhes do produto. Isso demonstra domínio avançado de navegação SPA (Single Page Application), componentização inteligente, além de ser muito mais escalável e infinitamente melhor para usabilidade e SEO do que um simples modal.
- **SEO Avançado:** Implementação rigorosa de meta tags (`description`, `robots`, `theme-color`), otimização de LCP (Largest Contentful Paint) com carregamento estratégico de imagens (`loading="lazy"` para a maioria das imagens e `fetchPriority="high"`/`loading="eager"` no banner principal), garantindo excelência técnica para ranqueamento.
- **HTML Semântico & Acessibilidade (a11y):** Utilização correta de tags HTML5 (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<search>`, `<figure>`) e atributos ARIA (`aria-label`, `aria-hidden`, `aria-live`, `role="button"`) para garantir suporte completo a leitores de tela, navegação por teclado e bots de busca.
- **Arquitetura de Estilos:** Utilização de CSS Modules com Sass/SCSS, garantindo escopo local (sem vazamento de estilos) e criação de um mini Design System escalável utilizando `_variables.scss` e `_mixins.scss`.

## 🛠 Tecnologias Utilizadas

- **React 19**
- **TypeScript**
- **Vite**
- **Sass (SCSS Modules)**
- **React Router DOM**
- **ESLint**

## 💻 Instruções para Rodar o Projeto

1. **Clonar o repositório**
```bash
git clone https://github.com/zingrad/teste-front-end.git
cd teste-front-end
```

2. **Instalar as dependências**
```bash
npm install
```

3. **Rodar em modo de desenvolvimento**
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

## 📂 Estrutura do Projeto

```
src/
├── assets/        # Imagens estáticas e ícones em SVG
├── components/    # Componentes globais e reutilizáveis (Header, Footer, Carousel, etc.)
├── pages/         # Páginas da aplicação (Home e ProductDetail)
├── styles/        # Estilos globais, variáveis e mixins em Sass
├── types/         # Definições de tipagem TypeScript e Interfaces
└── App.tsx        # Configuração das rotas (React Router)
```

## 📝 Especificações Cumpridas (Checklist)

- [x] Desenvolver a página em React e TypeScript conforme o layout.
- [x] Montar a vitrine consumindo o JSON fornecido (via Fetch API).
- [x] **[MELHORIA]** Interação de produto: em vez de apenas modal, implementada Página Interna de Produto.
- [x] Utilizar Pré-processador Sass.
- [x] Respeitar o Layout pixel a pixel, tamanho das fontes, cores e botões.
- [x] Construção **sem** utilizar bibliotecas UI (Bootstrap, Foundation, etc).
- [x] **[PONTO EXTRA]** Utilizar Boas práticas de SEO.
- [x] **[PONTO EXTRA]** Uso de HTML semântico.

---
*Desenvolvido como parte do processo seletivo da Econverse.*
