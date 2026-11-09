/* ── Shared Navbar ── */
const navHTML = `
<nav class="navbar" id="navbar">
  <div class="navbar-inner">
    <a href="../index.html" class="navbar-logo">
      <img src="../images/logo.png" alt="Biotech Minas" class="navbar-logo-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
      <div class="navbar-logo-text" style="display:none">
        <strong>BIOTECH MINAS</strong>
        <span>Agricultura Amigável</span>
      </div>
    </a>

    <div class="navbar-links">
      <a href="../index.html">Home</a>
      <a href="../pages/quem-somos.html">Quem Somos</a>
      <div class="nav-dropdown">
        <a href="../pages/produtos.html">Produtos</a>
        <div class="dropdown-menu">
          <a href="../pages/produtos.html">Todos os Produtos</a>
          <a href="../pages/cultura.html">Cultura</a>
          <a href="../pages/controle-pragas.html">Controle de Pragas</a>
        </div>
      </div>
      <a href="../pages/cultura.html">Cultura</a>
      <a href="../pages/controle-pragas.html">Controle de Pragas</a>
      <a href="../pages/cursos.html">Cursos</a>
      <a href="../pages/blog.html">Blog</a>
      <a href="../pages/fale-conosco.html">Contato</a>
    </div>

    <div class="navbar-cta">
      <a href="../pages/fale-conosco.html" class="btn btn-accent btn-sm">Fale Conosco</a>
    </div>

    <button class="hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<div class="mobile-menu">
  <a href="../index.html"><i data-lucide="home"></i> Home</a>
  <a href="../pages/quem-somos.html"><i data-lucide="users"></i> Quem Somos</a>
  <a href="../pages/produtos.html"><i data-lucide="leaf"></i> Produtos</a>
  <a href="../pages/cultura.html"><i data-lucide="wheat"></i> Cultura</a>
  <a href="../pages/controle-pragas.html"><i data-lucide="bug"></i> Controle de Pragas</a>
  <a href="../pages/cursos.html"><i data-lucide="book-open"></i> Cursos</a>
  <a href="../pages/blog.html"><i data-lucide="newspaper"></i> Blog</a>
  <a href="../pages/fale-conosco.html"><i data-lucide="phone"></i> Fale Conosco</a>
  <a href="../pages/trabalhe-conosco.html"><i data-lucide="briefcase"></i> Trabalhe Conosco</a>
  <a href="../pages/cadastro.html" class="btn btn-accent mt-16" style="justify-content:center;">Cadastrar</a>
</div>
`;

/* ── Shared Footer ── */
const footerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div style="margin-bottom:12px;">
          <strong style="font-size:1.3rem;color:#fff;font-weight:800;letter-spacing:-.01em;">BIOTECH MINAS</strong><br>
          <span style="font-size:.75rem;color:var(--green-300);letter-spacing:.1em;text-transform:uppercase;">Agricultura Amigável</span>
        </div>
        <p>Soluções biológicas inovadoras para uma agricultura mais sustentável, produtiva e livre de resíduos químicos.</p>
        <div class="footer-social">
          <a href="#" title="Instagram"><i data-lucide="instagram"></i></a>
          <a href="#" title="Facebook"><i data-lucide="facebook"></i></a>
          <a href="#" title="WhatsApp"><i data-lucide="message-circle"></i></a>
          <a href="#" title="YouTube"><i data-lucide="youtube"></i></a>
          <a href="#" title="LinkedIn"><i data-lucide="linkedin"></i></a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Navegação</h4>
        <ul>
          <li><a href="../index.html">Home</a></li>
          <li><a href="../pages/quem-somos.html">Quem Somos</a></li>
          <li><a href="../pages/produtos.html">Produtos</a></li>
          <li><a href="../pages/cultura.html">Cultura</a></li>
          <li><a href="../pages/controle-pragas.html">Controle de Pragas</a></li>
          <li><a href="../pages/cursos.html">Cursos</a></li>
          <li><a href="../pages/blog.html">Blog</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Empresa</h4>
        <ul>
          <li><a href="../pages/quem-somos.html">Sobre Nós</a></li>
          <li><a href="../pages/trabalhe-conosco.html">Trabalhe Conosco</a></li>
          <li><a href="../pages/cadastro.html">Área do Cliente</a></li>
          <li><a href="../pages/fale-conosco.html">Fale Conosco</a></li>
          <li><a href="#">Política de Privacidade</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Contato</h4>
        <div class="footer-contact-item">
          <div class="footer-contact-icon"><i data-lucide="map-pin"></i></div>
          <p><strong>Endereço</strong>Avenida Doutor Júlio César, 861 – Bairro: Industrial – Paraopeba – MG – CEP: 35774-000</p>
        </div>
        <div class="footer-contact-item">
          <div class="footer-contact-icon"><i data-lucide="phone"></i></div>
          <p><strong>Telefone</strong>(31) 9.98830-3747 <br> (31) 9.9649-7658 <br> (31) 9.7136-1343</p>
        </div>
        <div class="footer-contact-item">
          <div class="footer-contact-icon"><i data-lucide="mail"></i></div>
          <p><strong>E-mail</strong>biotechminas@gmail.com</p>
        </div>
        <div class="footer-contact-item">
          <div class="footer-contact-icon"><i data-lucide="clock"></i></div>
          <p><strong>Atendimento</strong>Segunda à Quinta: 8h às 18h <br> Sexta: 8h às 17h </p>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© ${new Date().getFullYear()} Biotech Minas. Todos os direitos reservados.</p>
      <div class="footer-bottom-links">
        <a href="#">Privacidade</a>
        <a href="#">Termos de Uso</a>
        <a href="#">Cookies</a>
      </div>
    </div>
  </div>
</footer>

<button class="back-top" aria-label="Voltar ao topo" style="position:fixed;bottom:28px;right:28px;width:44px;height:44px;border-radius:50%;background:var(--green-700);color:#fff;border:none;cursor:pointer;font-size:1.1rem;box-shadow:0 4px 16px rgba(0,0,0,.2);opacity:0;transform:translateY(10px);transition:all .3s ease;z-index:900;" class="back-top">↑</button>
`;

/* ── Lucide icon loader ── */
function initLucide() {
  if (typeof lucide !== 'undefined') { lucide.createIcons(); return; }
  const s = document.createElement('script');
  s.src = 'https://unpkg.com/lucide@latest/dist/umd/lucide.min.js';
  s.onload = () => lucide.createIcons();
  document.head.appendChild(s);
}

/* ── Root-relative path fixer ── */
function fixPaths(html) {
  const isRoot = !window.location.pathname.includes('/pages/');
  return isRoot ? html.replace(/\.\.\/index\.html/g, 'index.html').replace(/\.\.\/pages\//g, 'pages/').replace(/\.\.\/images\//g, 'images/') : html;
}

/* ── Inject ── */
document.addEventListener('DOMContentLoaded', () => {
  const navMount = document.getElementById('nav-mount');
  const footerMount = document.getElementById('footer-mount');
  if (navMount)    navMount.innerHTML    = fixPaths(navHTML);
  if (footerMount) footerMount.innerHTML = fixPaths(footerHTML);

  /* Lucide icon CSS */
  const lucideStyle = document.createElement('style');
  lucideStyle.textContent = `
    .lucide{display:inline-block;width:1em;height:1em;vertical-align:-.125em;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;fill:none;}
    .mobile-menu a{display:flex;align-items:center;gap:10px;}
    .mobile-menu a .lucide{width:18px;height:18px;flex-shrink:0;opacity:.85;}
    .footer-contact-icon .lucide{width:16px;height:16px;}
    .footer-social .lucide{width:18px;height:18px;}
    .icon-box .lucide{width:1.1em;height:1.1em;}
    .share-btn .lucide{width:15px;height:15px;}
    .article-meta-item .lucide{width:14px;height:14px;opacity:.7;}
    .article-cta-contact .lucide{width:14px;height:14px;}
    .course-detail-item .lucide{width:14px;height:14px;opacity:.75;}
    .blog-meta .lucide{width:13px;height:13px;opacity:.7;}
  `;
  document.head.appendChild(lucideStyle);

  /* re-run main.js logic after injection */
  const navbar    = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const backTop   = document.querySelector('.back-top');

  window.addEventListener('scroll', () => {
    navbar?.classList.toggle('scrolled', window.scrollY > 40);
    backTop?.style && (backTop.style.opacity = window.scrollY > 400 ? '1' : '0');
    backTop?.style && (backTop.style.transform = window.scrollY > 400 ? 'translateY(0)' : 'translateY(10px)');
  });

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu?.classList.toggle('open');
    document.body.style.overflow = mobileMenu?.classList.contains('open') ? 'hidden' : '';
  });

  mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  initLucide();

  /* active link */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-links a, .mobile-menu a').forEach(link => {
    if (link.getAttribute('href')?.includes(currentPage)) link.classList.add('active');
  });
});
