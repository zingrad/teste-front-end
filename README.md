# econverse-test

Projeto de teste desenvolvido em **React** usando **Vite** e **Sass**.  
O objetivo do teste foi criar uma interface de e-commerce, com exibição de produtos e funcionalidade de modal para detalhes de produto.

---

## Como rodar localmente

1. **Clonar o repositório**
```bash
git clone https://github.com/zingrad/teste-front-end.git
cd econverse-test
```

2. **Instalar dependências**
```bash
npm install
```

3. **Rodar em modo de desenvolvimento**
```bash
npm run dev
```
---

## Estrutura do projeto

```
src/
├── assets/        # Imagens e ícones
├── components/    # Componentes reutilizáveis (carousel, contador, etc.)
├── pages/         # Páginas do projeto (atualmente apenas HomePage)
├── styles/        # Arquivos Sass globais
├── types/         # Tipagens TypeScript
└── App.tsx        # Componente principal
```

---

## Funcionalidades implementadas

- **Carrossel de produtos** com responsividade para desktop, tablet e mobile.
- **Modal de produto** com contador de quantidade e cálculo automático do preço total ao adicionar mais unidades.
- **Cálculo de preço e parcelas** formatado para padrão brasileiro.
- **Estilização com Sass**, mantendo organização e reutilização de estilos.

---

## Observações importantes

- Inicialmente, considerei usar **React Router** para criar páginas de produto único, mas optei por **manter tudo em estado e modais**, já que os produtos não possuem IDs únicos.  
  Isso evita complexidade desnecessária e mantém a navegação funcional dentro da HomePage.
- A estrutura `pages/` foi mantida pensando em futuras expansões, caso seja necessário criar mais páginas.

---

## Tecnologias utilizadas

- **React**
- **Vite**
- **Sass**
- **TypeScript**

