# Biotech Minas — Site Institucional

Site institucional da **Biotech Minas**, empresa de produtos biológicos e insumos para o
agronegócio (agricultura, pecuária, tratamento de água/efluentes e sustentabilidade).

> 📌 **Para desenvolver ou dar continuidade ao projeto, leia primeiro o [`CLAUDE.md`](./CLAUDE.md).**
> Ele é a fonte de verdade sobre a essência, a arquitetura e as convenções do site —
> tanto para desenvolvedores quanto para assistentes de IA (Claude Code).

---

## Tecnologia

Site **estático**, sem build e sem dependências de pacote: HTML5 + CSS3 + JavaScript vanilla.
Basta um navegador. Não há `package.json`, bundler ou framework — e essa simplicidade é
proposital (ver `CLAUDE.md`, seção 2).

## Como rodar localmente

Abrir `index.html` no navegador já funciona. Recomendado, porém, servir por HTTP
(reproduz o comportamento real de hospedagem, inclusive sensibilidade a maiúsculas/minúsculas):

```bash
python -m http.server 8000     # http://localhost:8000
# ou
npx serve .
```

## Estrutura

```
index.html          Home
css/                global.css (tokens/design system), navbar, footer, home, pages
js/                 icons.js (ícones SVG próprios), components.js (navbar+footer), main.js
pages/              Páginas internas (produtos, quem-somos, blog, contato, etc.)
images/             Imagens e artes (ver nota de case em CLAUDE.md §9)
CLAUDE.md           Guia completo do projeto — LEIA ISTO
```

## Pontos de atenção rápidos

- **Navbar, footer e contatos** são editados em `js/components.js` (não página a página).
- **Cores, fontes e espaçamentos** são tokens em `css/global.css` (`:root`).
- **Caminhos de imagem são case-sensitive** em hospedagem Linux — mantenha tudo minúsculo (ex.: `images/produtos/`). Ver `CLAUDE.md`, seção 9.1.

## Contato da empresa

Biotech Minas — Minas Gerais, Brasil · contato@biotechminas.com.br ·
(31) 9.8830-3747 / (31) 9.9649-7658
