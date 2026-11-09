# CLAUDE.md — Guia do Projeto Biotech Minas

> **Leia este arquivo inteiro antes de escrever qualquer código.**
> Ele define a essência, a arquitetura e as convenções do site da Biotech Minas.
> Outro desenvolvedor (humano ou Claude) deve ser capaz de continuar o projeto
> mantendo exatamente o mesmo padrão a partir daqui.

---

## 1. O que é este projeto

Site institucional da **Biotech Minas** — empresa de **produtos biológicos e insumos
para o agronegócio**, fundada em 16/10/2019 em Paraopeba (MG).

A empresa atua (e quer se posicionar como referência) em:

- **Agricultura** — nutrição vegetal, fertilizantes, defensivos, biológicos, sementes.
- **Pecuária** — microrganismos eficazes (EM•1®) para granjas de aves/suínos e bem-estar animal.
- **Tratamento de água e efluentes** — equilíbrio microbiológico, redução de odores.
- **Sustentabilidade / manejo biológico** — tecnologias que unem produtividade e preservação.

### A essência (não negociável)

O site existe para comunicar **três mensagens**, nesta ordem de importância:

1. **A marca Biotech Minas é confiável e profissional.** Visual limpo, sério, "verde agro"
   moderno — nunca amador, nunca poluído.
2. **Os produtos são de qualidade e referência de mercado.** A empresa é parceira/revende
   grandes marcas do agro (Roundup, TeeJet, ICL, Santa Clara, etc.) e produtos próprios
   (EM•1®, Arbolina). O portfólio é a prova social — destaque-o.
3. **A empresa resolve os desafios do campo.** O discurso sempre conecta
   *desafio do produtor → solução da Biotech → resultado*.

Ao criar ou alterar qualquer coisa, pergunte-se: *"isto reforça confiança, qualidade e
resultado para o produtor rural?"*. Se não reforça, não entra.

---

## 2. Stack e filosofia técnica

**Site estático puro. Sem build, sem framework, sem dependências de pacote.**

- **HTML5** semântico, um arquivo por página.
- **CSS3** puro, organizado por camadas (ver seção 4). Tokens em `:root`.
- **JavaScript vanilla** (ES6+), sem transpilação. Três arquivos globais.
- **Ícones:** dois sistemas (ver seção 5).
- **Fontes:** Google Fonts — `Inter` (corpo) e `Playfair Display` (display).

### Princípio-mestre: mantenha simples

Este projeto **não tem `package.json`, não tem `node_modules`, não tem bundler**.
Abrir um `.html` no navegador já funciona. **Preserve isso.**

❌ **Não introduza** React/Vue/Tailwind/Vite/Next/npm, pré-processadores (Sass/Less),
ou qualquer passo de build — a menos que o cliente peça explicitamente e entenda o
trade-off. A robustez aqui vem da **simplicidade e consistência**, não de ferramentas.

✅ **Faça:** reutilizar os componentes e tokens existentes, seguir os padrões já estabelecidos,
manter tudo em português (pt-BR).

---

## 3. Estrutura de pastas

```
Biotech-Website/
├── index.html              # Home (única página na raiz)
├── CLAUDE.md               # Este arquivo — memória do projeto
├── README.md               # Onboarding humano
├── .gitattributes          # Normalização de fim de linha (LF)
├── css/
│   ├── global.css          # Tokens, reset, tipografia, botões, cards, utilitários
│   ├── navbar.css          # Barra de navegação + menu mobile
│   ├── footer.css          # Rodapé + botão "voltar ao topo"
│   ├── home.css            # Estilos exclusivos da home (prefixo .home2-*)
│   └── pages.css           # Estilos compartilhados das páginas internas
├── js/
│   ├── icons.js            # Sistema de ícones SVG customizados (data-icon)
│   ├── components.js       # Injeta navbar + footer; religa eventos; carrega Lucide
│   └── main.js             # Scroll reveal, contadores, transição de página, navbar
├── pages/                  # Todas as páginas internas (sempre em /pages/)
│   ├── quem-somos.html
│   ├── produtos.html       # Catálogo completo (grande — ~160 KB)
│   ├── cultura.html
│   ├── controle-pragas.html
│   ├── cursos.html
│   ├── blog.html
│   ├── blog-manejo-sustentavel.html   # Modelo de artigo de blog
│   ├── fale-conosco.html
│   ├── trabalhe-conosco.html
│   └── cadastro.html
└── images/
    ├── logo.png, Capa-*.png, agricultura.jpg, afluentes.jpeg, Pecuaria-1.png
    └── Produtos/           # ⚠️ Capital "P" — ver seção 9 (armadilha conhecida)
        └── *.svg           # ~52 artes de produtos
```

**Regra de ouro dos caminhos:** a home (`index.html`) está na raiz; todas as outras
páginas estão em `pages/`. Portanto, dentro de `pages/*.html` os caminhos sobem um nível
(`../css/`, `../js/`, `../images/`, `../index.html`). A home usa caminhos relativos
diretos (`css/`, `pages/`). O `fixPaths()` em `components.js` ajusta automaticamente os
links da navbar/footer injetados — ver seção 5.

---

## 4. Sistema de design (a "cara" da Biotech)

Tudo vive em `css/global.css`. **Use os tokens; nunca cole valores hex soltos.**

### Cores (tokens `--green-*`, etc.)

- **Verdes** `--green-900` (#0d2b1a, mais escuro) → `--green-50` (#eef8f2, mais claro).
  A cor de marca principal é a família verde. Botões primários = `--green-700`.
- **Lime** `--lime-500/400` — acentos vivos ocasionais.
- **Accent** `--accent` (#e8f55a, amarelo-limão) — CTAs de destaque (`.btn-accent`).
- **Neutros** `--dark-900` a `--gray-100`, `--white`.

### Tipografia

- Corpo: `var(--font-body)` = Inter.
- Display/títulos especiais: `var(--font-display)` = Playfair Display (classe `.display`).
- Títulos de seção: classe `.section-title` (usa `clamp()` para ser responsivo);
  `span` dentro de título fica verde automaticamente.

### Componentes prontos (reutilize-os)

| Componente | Classe(s) | Uso |
|---|---|---|
| Botões | `.btn` + `.btn-primary` / `.btn-accent` / `.btn-outline` / `.btn-white` (+ `.btn-lg` / `.btn-sm`) | Todas as ações |
| Cartão | `.card` | Container elevado com hover |
| Selo | `.badge` + `.badge-green` / `.badge-lime` / `.badge-dark` | Rótulos |
| Caixa de ícone | `.icon-box` + `.icon-box-green` / `-dark` / `-lime` | Ícone em destaque |
| Rótulo de seção | `.section-label` | "sobrelinha" antes do título |
| Divisor | `.divider` | Traço verde curto |
| Grades | `.grid-2` / `.grid-3` / `.grid-4` | Responsivas (colapsam no mobile) |
| Hero interno | `.page-hero` + `.page-hero-breadcrumb` | Topo das páginas internas |

### Espaçamento e layout

- `.container` = largura máx. 1200px com gutter lateral.
- `.section` = 96px vertical (`--sm` = 64, `--lg` = 120).
- Utilitários de margem/gap: `.mt-*`, `.mb-*`, `.gap-*` (8/16/24/32/48).
- Fundos: `.bg-light` (verde bem claro), `.bg-dark`, `.bg-green`.

### Animação de entrada (scroll reveal)

Adicione `data-reveal` a qualquer elemento para ele surgir ao entrar na viewport.
Use `data-delay="1..4"` para escalonar (ex.: título sem delay, grid com `data-delay="1"`).
A lógica está em `main.js` (IntersectionObserver) e o CSS inicial no `<style>` da home.
Em páginas internas o reveal já é coberto pelos estilos/observer globais.

### Breakpoints

- `max-width: 1024px` → grid-4 vira 2 colunas.
- `max-width: 768px` → grids viram 1 coluna; `.section` reduz para 64px.

---

## 5. Arquitetura de JavaScript (importante)

Toda página carrega **os três scripts, nesta ordem**, no fim do `<body>`:

```html
<script src="../js/icons.js"></script>      <!-- (na home: js/icons.js) -->
<script src="../js/components.js"></script>
<script src="../js/main.js"></script>
```

### `components.js` — navbar + footer compartilhados

- Navbar e footer **não são escritos em cada página**. Cada página só tem os âncoras:
  ```html
  <div id="nav-mount"></div>
  ...
  <div id="footer-mount"></div>
  ```
- `components.js` injeta o HTML da navbar/footer nesses pontos no `DOMContentLoaded`.
- **`fixPaths()`** reescreve os links quando a página está na raiz (home), convertendo
  `../index.html`→`index.html`, `../pages/`→`pages/`, `../images/`→`images/`. Por isso
  o HTML-fonte da navbar usa sempre o formato de `/pages/` (`../`).
- **Para mudar o menu, o logo, os links do rodapé ou os contatos → edite `components.js`.**
  Nunca edite navbar/footer página a página.
- Também carrega a biblioteca **Lucide** (via unpkg) e religa os eventos de scroll,
  menu hambúrguer e botão "voltar ao topo".

### `main.js` — comportamentos de página

Scroll reveal, animação de contadores (`[data-target]`), transição suave entre páginas
(fade no clique de links `.html`), navbar com classe `.scrolled`, botão voltar-ao-topo.

> ⚠️ Há **duplicação intencional mas frágil**: `main.js` e `components.js` ambos
> registram listeners de navbar/hambúrguer/back-to-top (porque a navbar é injetada
> depois que `main.js` roda). Ao mexer em comportamento de navegação, verifique **os dois**
> arquivos para não criar listeners duplicados ou divergentes. Ver seção 9.

### Dois sistemas de ícones — saiba qual usar

1. **Lucide** (`<i data-lucide="nome">`): ícones de linha prontos, carregados de CDN.
   Usados na **home** e na navbar/footer. Ex.: `sprout`, `flask-conical`, `droplet`.
2. **Ícones SVG próprios** (`<div data-icon="nome">`): ~20 ilustrações customizadas
   definidas em `icons.js` (`fungi`, `insect`, `plant`, `lab`, `field`, `leaf`, `dna`,
   `handshake`, `certificate`, `magnifier`, `branch`...). Usados nas **páginas internas**.
   Herdam cor/tamanho do elemento pai via `style`.

Regra prática: ícone de UI genérico → Lucide. Ícone temático/ilustrativo do agro → `data-icon`.

---

## 6. Como realizar tarefas comuns (receitas)

### Adicionar uma nova página interna

1. Copie uma página existente como molde (ex.: `pages/quem-somos.html`).
2. Mantenha o `<head>` com os 4 CSS: `global`, `navbar`, `footer`, `pages`.
3. Mantenha `<div id="nav-mount">` no topo e `<div id="footer-mount">` + os 3 scripts no fim.
4. Use `.page-hero` com breadcrumb no topo.
5. Monte o conteúdo com os componentes da seção 4 (`.section`, `.container`, grids, cards).
6. **Adicione o link à navegação em `components.js`** (navbar desktop, dropdown se fizer
   sentido, e menu mobile) e, se institucional, no footer.

### Adicionar / editar um produto

- Produtos vivem em `pages/produtos.html`, agrupados por categoria (`.cat-section[data-cat]`)
  com filtro por botões (`.filter-btn[data-filter]`). Siga o padrão do card `.pcard`:
  imagem (`.pcard-img`), nome, classe/`I.A.`, descrição, benefício principal, ação "Baixar Bula".
- Arte do produto: coloque o SVG em `images/Produtos/` e referencie **com a mesma caixa
  de letras do nome do arquivo** (ver seção 9 — armadilha de case). Para produtos sem arte,
  usa-se um `data-icon` sobre fundo em degradê.
- Atualize o contador `.cat-count` ("N produtos") da categoria.

### Mudar cores / fontes / espaçamentos globais

→ Edite apenas os tokens em `:root` de `css/global.css`. A mudança propaga para o site todo.

### Mudar contatos, redes sociais, telefone, e-mail

→ `components.js` (bloco `footerHTML`). Dados atuais: tel. (31) 9.8830-3747 /
(31) 9.9649-7658, e-mail contato@biotechminas.com.br, WhatsApp 5531988303747.

---

## 7. Conteúdo, tom de voz e idioma

- **Idioma: português do Brasil (pt-BR) em tudo** — conteúdo, comentários e commits.
- **Tom:** técnico, confiável, próximo do produtor rural. Evite jargão vazio e promessas
  exageradas; prefira benefícios concretos ("solo mais saudável", "redução de odores",
  "maior produtividade", "redução de custos").
- **Estrutura narrativa recorrente:** *desafio → solução → resultado* (ver a home).
- Marcas de terceiros (Roundup, TeeJet, ICL, Santa Clara, Econ...) aparecem como **portfólio
  de parceiros** — prova de credibilidade. `EM•1®` e `Arbolina` são destaques próprios/revenda.
- Respeite o símbolo de marca registrada em **EM•1®**.

---

## 8. Como rodar e revisar

Não há servidor nem build. Para visualizar:

- **Mais simples:** abra `index.html` no navegador.
- **Recomendado** (evita problemas de caminho relativo e de case): sirva a pasta por HTTP.
  Qualquer um destes, na raiz do projeto:
  ```bash
  python -m http.server 8000      # depois acesse http://localhost:8000
  # ou
  npx serve .
  ```
  Servir por HTTP reproduz o comportamento de hospedagem real (inclusive a
  sensibilidade a maiúsculas/minúsculas — ver seção 9).

Checklist antes de dar algo por pronto:

- [ ] Abriu a página servida por HTTP (não só por `file://`).
- [ ] Navbar e footer apareceram (scripts carregaram) e os links levam ao lugar certo.
- [ ] Ícones renderizaram (tanto Lucide quanto `data-icon`).
- [ ] Testou responsivo em ~375px, ~768px e desktop.
- [ ] Imagens carregaram **com o case correto** do caminho.
- [ ] Nenhum erro no console.

---

## 9. Armadilhas conhecidas (leia antes de debugar)

1. **Case da pasta de imagens de produtos (corrigido — manter assim).**
   A pasta foi padronizada para **minúsculo: `images/produtos/`**, batendo com as 41
   referências de `pages/produtos.html`. Antes era `images/Produtos/` (P maiúsculo), o
   que funcionava no Windows/macOS mas dava 404 em host Linux case-sensitive
   (GitHub Pages, Netlify, Vercel). **Mantenha tudo minúsculo** e, ao adicionar artes
   novas, use o nome do arquivo exatamente como está no disco (caminho de URL decodifica
   `%XX`, mas `+` é `+` literal — não vira espaço).

2. **Listeners duplicados navbar/menu.** `main.js` e `components.js` registram eventos
   parecidos (a navbar é injetada após `main.js` rodar). Ao alterar navegação, ajuste
   os dois e teste para não duplicar o toggle do menu.

3. **Nomes de arquivos SVG com espaços e caracteres especiais.** Vários produtos têm
   espaços no nome (`GARLON  480.svg`, às vezes com espaço duplo) e são referenciados
   URL-encodados (`%20`, `+`). Confira o nome exato no disco antes de linkar.

4. **Lucide vem de CDN (unpkg).** Sem internet, os ícones Lucide não aparecem (os
   `data-icon` próprios, sim, pois são locais). Considere isso ao avaliar "ícone sumiu".

5. **Transição de página por fade** intercepta cliques em links `.html`. Se um link novo
   não deve disparar o fade (ex.: download, link externo), use `http`/`#`/atributo adequado.

---

## 10. Estado atual e trabalho pendente

**Já pronto:** home no formato novo (hero, por que escolher, desafios, soluções, resultados,
produtos em destaque, portfólio, CTA), Quem Somos com conteúdo real, catálogo de produtos
por categoria, e páginas base (cultura, controle de pragas, cursos, blog, fale-conosco,
trabalhe-conosco, cadastro).

**Pendências típicas a confirmar com o cliente antes de executar:**

- Links de redes sociais no footer estão como `#` (placeholder) — preencher URLs reais.
- "Baixar Bula", "Política de Privacidade", "Termos", "Cookies" apontam para `#` — definir destino.
- Formulários (`fale-conosco`, `trabalhe-conosco`, `cadastro`) — confirmar se há backend/
  integração (e-mail, planilha, WhatsApp) ou se permanecem estáticos.

> Antes de mudanças de maior impacto ou "cara" do site, confirme com o responsável —
> a prioridade é **preservar a essência** descrita na seção 1.

---

## 11. Convenções de Git

- Mensagens de commit em **português**, no imperativo, descrevendo o "o quê" de forma
  objetiva (seguindo o histórico existente: *"Atualiza Quem Somos com conteúdo real..."*).
- Faça commits pequenos e coesos. Não versione `node_modules`, builds ou segredos.
- Trabalhe sempre em entender o contexto antes de alterar arquivos grandes como
  `produtos.html`.

---

_Mantido para que qualquer pessoa — ou qualquer Claude — continue o projeto da Biotech Minas
com a mesma qualidade, robustez e identidade. Se você aprender algo novo e durável sobre o
projeto, **atualize este arquivo**._
