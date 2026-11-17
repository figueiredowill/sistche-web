import Image from "next/image";

type ArrowProps = { className?: string };

function ArrowUpRight({ className = "" }: ArrowProps) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 19 19 5M7 5h12v12" />
    </svg>
  );
}

const serviceItems = [
  { number: "01", title: "Sites & Landing Pages", description: "Presenças digitais rápidas, acessíveis e feitas para transformar visitas em oportunidades.", label: "WEB & PERFORMANCE" },
  { number: "02", title: "E-commerce", description: "Experiências de compra que unem tecnologia, usabilidade e evolução do negócio.", label: "COMÉRCIO DIGITAL" },
  { number: "03", title: "Sistemas Web", description: "Plataformas e aplicações sob medida para simplificar processos e impulsionar operações.", label: "PRODUTOS DIGITAIS" },
  { number: "04", title: "Integrações & APIs", description: "Sistemas que conversam entre si. Mais automação, menos retrabalho e dados conectados.", label: "ENGENHARIA" },
];

const processItems = [
  { number: "01", title: "Entender", text: "Começamos pelo seu negócio, seus objetivos e o problema que precisa ser resolvido." },
  { number: "02", title: "Desenhar", text: "Definimos a experiência, a estrutura e o caminho técnico mais adequado." },
  { number: "03", title: "Construir", text: "Desenvolvemos com atenção aos detalhes, desempenho e qualidade de código." },
  { number: "04", title: "Evoluir", text: "Acompanhamos a solução e abrimos espaço para os próximos passos." },
];

function Brand({ className = "" }: { className?: string }) {
  return (
    <Image
      className={className}
      src="/sistche-logo.png"
      alt="Sistchê."
      width={1079}
      height={308}
      priority
    />
  );
}

function ShowcaseEcommerce() {
  return (
    <div className="work-visual work-visual--shop" aria-label="Ilustração de interface para uma loja virtual">
      <div className="preview-toolbar"><span className="preview-dot" /><span className="preview-dot" /><span className="preview-dot" /><span className="preview-toolbar-text">exemplo / e-commerce</span></div>
      <div className="shop-nav"><span>modo<span className="shop-nav-dot">.</span></span><span>coleção&nbsp;&nbsp; sobre&nbsp;&nbsp; carrinho ↗</span></div>
      <div className="shop-content">
        <div className="shop-copy"><span className="mock-kicker">NOVA COLEÇÃO / 2026</span><strong>Design para<br /><em>viver.</em></strong><span className="mock-link">Explorar coleção <ArrowUpRight /></span></div>
        <div className="shop-product"><div className="product-sun" /><div className="product-pedestal" /><div className="product-vase" /><div className="product-vase-neck" /></div>
      </div>
      <span className="mock-overlay">VISUAL ILUSTRATIVO</span>
    </div>
  );
}

function ShowcaseDashboard() {
  return (
    <div className="work-visual work-visual--dashboard" aria-label="Ilustração de dashboard para sistemas web">
      <div className="dash-sidebar"><span className="dash-symbol">s/</span><span>⌗</span><span>◫</span><span>▥</span><span>⚙</span></div>
      <div className="dash-main">
        <div className="dash-head"><span>Visão geral</span><span className="dash-avatar">SC</span></div>
        <div className="dash-subtitle">Um lugar para acompanhar tudo.</div>
        <div className="dash-panels"><div className="dash-stat"><span>RECEITA TOTAL</span><strong>R$ 128.4k</strong><small>↗ +18,6% neste mês</small></div><div className="dash-stat dash-stat--alt"><span>CLIENTES ATIVOS</span><strong>2.480</strong><small>↗ +8,2% neste mês</small></div></div>
        <div className="dash-graph"><span>Visão de desempenho</span><div className="dash-bars">{[34,52,45,66,51,79,68,88,74,94,84,100].map((height, i) => <i key={i} style={{ height: `${height}%` }}/>)}</div></div>
      </div>
      <span className="mock-overlay">VISUAL ILUSTRATIVO</span>
    </div>
  );
}

function ShowcaseWebsite() {
  return (
    <div className="work-visual work-visual--website" aria-label="Ilustração de uma landing page de marca">
      <div className="web-nav"><span>norte<span className="web-nav-dot">.</span></span><span>menu&nbsp; ↗</span></div>
      <div className="web-ring web-ring--one" /><div className="web-ring web-ring--two" />
      <div className="web-headline"><span>UMA NOVA PERSPECTIVA</span><strong>O futuro<br />é agora<span>.</span></strong></div>
      <span className="web-bottom">ESTRATÉGIA. IDEIA. MOVIMENTO.</span>
      <span className="mock-overlay">VISUAL ILUSTRATIVO</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header" id="inicio">
        <div className="container header-inner">
          <a href="#inicio" className="brand-link" aria-label="Sistchê — início"><Brand className="brand-logo" /></a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#solucoes">Soluções</a><a href="#servicos">Serviços</a><a href="#metodo">Nosso jeito</a>
          </nav>
          <a className="contact-top" href="#contato">Vamos conversar <ArrowUpRight /></a>
          <details className="mobile-nav"><summary aria-label="Abrir menu de navegação">Menu <span className="hamburger" /></summary><nav aria-label="Navegação mobile"><a href="#solucoes">Soluções</a><a href="#servicos">Serviços</a><a href="#metodo">Nosso jeito</a><a href="#contato">Contato</a></nav></details>
        </div>
      </header>

      <main>
        <section className="hero section-dark" aria-labelledby="hero-heading">
          <div className="container hero-inner">
            <div className="hero-eyebrow"><span className="status-dot" /> ESTÚDIO DE DESENVOLVIMENTO WEB <span className="hero-eyebrow-end">PELOTAS / BRASIL</span></div>
            <h1 id="hero-heading">Ideias ganham<br /><span className="hero-title-muted">forma.</span> Negócios<br />ganham <span className="hero-title-outline">futuro.</span></h1>
            <div className="hero-description-row"><p>Desenhamos e desenvolvemos experiências digitais que unem estratégia, tecnologia e atenção a cada detalhe.</p><a href="#solucoes" className="circle-link" aria-label="Conhecer nossas soluções"><ArrowUpRight /></a></div>
            <div className="hero-bottom"><span>INDEPENDENTE POR ESSÊNCIA. DIGITAL POR NATUREZA.</span><a href="#solucoes">SCROLL PARA EXPLORAR <span>↓</span></a></div>
          </div>
        </section>

        <div className="expertise-strip" aria-label="Áreas de atuação"><div className="expertise-track"><span>WEB DESIGN</span><b>✳</b><span>DESENVOLVIMENTO</span><b>✳</b><span>E-COMMERCE</span><b>✳</b><span>EXPERIÊNCIAS DIGITAIS</span><b>✳</b><span>SISTEMAS & APIs</span><b>✳</b></div></div>

        <section className="solutions section-light" id="solucoes" aria-labelledby="solutions-heading">
          <div className="container">
            <div className="section-kicker"><span>01 / O QUE CRIAMOS</span><span>SOLUÇÕES QUE FAZEM SENTIDO</span></div>
            <div className="section-intro"><h2 id="solutions-heading">Cada desafio pede<br /><span>uma nova ideia.</span></h2><p>Do primeiro contato ao produto final, desenvolvemos soluções pensadas para a realidade de cada negócio.</p></div>
            <div className="work-grid">
              <article className="work-card work-card--large"><ShowcaseEcommerce /><div className="work-caption"><div><span>01 / COMÉRCIO DIGITAL</span><h3>E-commerce</h3></div><span className="work-arrow" aria-hidden="true"><ArrowUpRight /></span></div></article>
              <article className="work-card"><ShowcaseDashboard /><div className="work-caption"><div><span>02 / TECNOLOGIA SOB MEDIDA</span><h3>Sistemas & plataformas</h3></div><span className="work-arrow" aria-hidden="true"><ArrowUpRight /></span></div></article>
              <article className="work-card"><ShowcaseWebsite /><div className="work-caption"><div><span>03 / PRESENÇA DIGITAL</span><h3>Sites & experiências</h3></div><span className="work-arrow" aria-hidden="true"><ArrowUpRight /></span></div></article>
            </div>
            <p className="illustration-note">* Interfaces conceituais para ilustrar nossos serviços. Não representam trabalhos realizados para clientes.</p>
          </div>
        </section>

        <section className="services section-dark" id="servicos" aria-labelledby="services-heading"><div className="container">
          <div className="section-kicker section-kicker--dark"><span>02 / NOSSA EXPERTISE</span><span>DESIGN ENCONTRA ENGENHARIA</span></div>
          <div className="services-intro"><h2 id="services-heading">Menos complicação.<br /><span>Mais possibilidades.</span></h2><p>Não acreditamos em soluções prontas para desafios diferentes. Combinamos visão de produto e desenvolvimento para construir o que realmente importa.</p></div>
          <div className="services-list">{serviceItems.map(service => <article className="service-row" key={service.number}><span className="service-number">{service.number}</span><div className="service-main"><h3>{service.title}</h3><p>{service.description}</p></div><span className="service-label">{service.label}</span><ArrowUpRight className="service-arrow" /></article>)}</div>
        </div></section>

        <section className="method section-light" id="metodo" aria-labelledby="method-heading"><div className="container">
          <div className="section-kicker"><span>03 / COMO TRABALHAMOS</span><span>CLAREZA EM CADA ETAPA</span></div>
          <div className="method-lead"><h2 id="method-heading">Boas ideias merecem<br /><em>boa execução.</em></h2><p>Um processo direto, colaborativo e transparente — porque tecnologia de verdade nasce de boas conversas.</p></div>
          <div className="method-grid">{processItems.map(step => <article className="method-step" key={step.number}><span>{step.number} / 04</span><div className="method-step-line"/><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
          <div className="technology-note"><span>TECNOLOGIAS QUE FAZEM PARTE DO NOSSO DIA A DIA</span><p>Next.js <i>•</i> React <i>•</i> TypeScript <i>•</i> Node.js <i>•</i> Magento <i>•</i> APIs</p></div>
        </div></section>

        <section className="contact-section section-dark" id="contato" aria-labelledby="contact-heading"><div className="container">
          <div className="section-kicker section-kicker--dark"><span>04 / PRÓXIMO PASSO</span><span>SEU PROJETO COMEÇA AQUI</span></div>
          <div className="contact-content"><h2 id="contact-heading">Tem uma ideia?<br /><span>Vamos fazer</span><br />acontecer<span className="yellow-dot">.</span></h2><div className="contact-bottom"><p>Seja uma nova presença digital ou uma solução mais complexa, o próximo passo começa com uma conversa.</p><a className="contact-button" href="mailto:contato@sistche.com.br?subject=Quero%20conversar%20sobre%20um%20projeto">Falar sobre um projeto <ArrowUpRight /></a></div></div>
        </div></section>
      </main>
      <footer className="site-footer"><div className="container footer-inner"><a href="#inicio" aria-label="Voltar ao início"><Brand className="footer-logo" /></a><span>DESENVOLVIMENTO WEB COM PROPÓSITO.</span><a href="#inicio">VOLTAR AO TOPO ↑</a><small>© {new Date().getFullYear()} SISTCHÊ</small></div></footer>
    </>
  );
}
