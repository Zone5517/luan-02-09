# Exercício — Seletores CSS, Responsividade e Interatividade com JavaScript

Este projeto foi feito para praticar **seletores CSS**, **responsividade com media queries** e **interatividade com JavaScript**.

---

## 📂 Estrutura de Pastas

/public
├── index.html # Estrutura principal da página
├── css/
│ └── seletores.css # Estilos e responsividade
└── js/
└── app.js # Interatividade (cliques na lista)


---

## 🚀 Parte 1 — Seletores CSS

- Cada `<li>` da lista pede um estilo diferente.
- Os seletores foram escritos em `seletores.css` usando `:first-child`, `:nth-child()` e `text-decoration`.
- Exemplo:
  - 1º item → vermelho
  - 2º item → negrito
  - 3º item → fundo amarelo
  - 4º item → itálico
  - 5º item → sublinhado

---

## 📱 Parte 2 — Responsividade

- O layout principal usa **Flexbox**.
- Em telas maiores, o `<aside>` fica ao lado da `<section class="content">`.
- Em telas **menores que 768px**:
  - O `<aside>` desce para baixo do conteúdo.
  - Passa a ocupar **100% da largura**.
- Implementado com **media query** no final do `seletores.css`.

---

## 🖱️ Parte 3 — Interatividade com JavaScript

- No arquivo `app.js`, foi implementado clique nos itens da lista.
- Funcionalidade:
  1. Remove a classe `.selected` de todos os itens.
  2. Adiciona `.selected` apenas no item clicado.
- Funciona mesmo clicando dentro de `<span>` ou `<strong>` dentro do `<li>`.

---

## 🎨 Estilo `.selected`

Quando um item da lista está selecionado, ele recebe um **fundo azul claro** e cantos arredondados, para destacar visualmente.

---

## ▶️ Como usar

1. Clone o repositório.
2. Abra o arquivo `index.html` no navegador.
3. Teste:
   - A aplicação dos **seletores CSS**.
   - A **responsividade** reduzindo a largura da janela.
   - A **interatividade** clicando nos itens da lista.

---

## 📚 Tecnologias usadas

- **HTML5**
- **CSS3 (Flexbox e Media Queries)**
- **JavaScript Vanilla (DOM e Classes)**

---