/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BrowserRouter as Router, Routes, Route, Link, useParams, useLocation } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { 
  ChefHat, 
  Bed, 
  Tv, 
  Briefcase, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle,
  Instagram,
  Facebook,
  ArrowRight,
  Palette,
  Truck,
  Maximize,
  Handshake,
  Gem,
  PencilRuler,
  Send,
  ChevronDown,
  Star,
  ExternalLink,
  User,
  Quote,
  Calendar,
  Clock,
  ChevronRight,
  Search,
  Award,
  Users,
  ShieldCheck
} from "lucide-react";


// --- Components ---

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-header text-white">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 flex-shrink-0 hover:opacity-80 transition-opacity">
          <img 
            src="/logo.png" 
            alt="Santorini Logo" 
            className="w-12 h-12 object-contain rounded-xl"
          />
          <span className="text-xl font-display font-bold tracking-tighter whitespace-nowrap">SANTORINI <span className="text-brand-orange">PROJETADOS</span></span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs font-bold uppercase tracking-widest">
          <Link to="/" className="hover:text-brand-orange transition-colors border-b-2 border-transparent hover:border-brand-orange pb-1">Início</Link>
          <a href="/#sobre" className="hover:text-brand-orange transition-colors border-b-2 border-transparent hover:border-brand-orange pb-1">Sobre Nós</a>
          <a href="/#servicos" className="hover:text-brand-orange transition-colors border-b-2 border-transparent hover:border-brand-orange pb-1">Serviços</a>
          <a href="/#portfolio" className="hover:text-brand-orange transition-colors border-b-2 border-transparent hover:border-brand-orange pb-1">Portfólio</a>
          <Link to="/blog" className="hover:text-brand-orange transition-colors border-b-2 border-transparent hover:border-brand-orange pb-1">Blog</Link>
          <a href="/#faq" className="hover:text-brand-orange transition-colors border-b-2 border-transparent hover:border-brand-orange pb-1">FAQ</a>
          <a href="/#contato" className="hover:text-brand-orange transition-colors border-b-2 border-transparent hover:border-brand-orange pb-1">Contato</a>
        </nav>

        <a href="https://wa.me/5554991291784?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20um%20or%C3%A7amento" target="_blank" rel="noreferrer" className="hidden lg:block btn-primary py-2 px-6 text-xs uppercase tracking-widest flex-shrink-0">
          Solicitar Orçamento
        </a>

        <button className="lg:hidden text-white hover:text-brand-orange transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="w-6 h-0.5 bg-current mb-1.5"></div>
          <div className="w-6 h-0.5 bg-current mb-1.5"></div>
          <div className="w-6 h-0.5 bg-current"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-brand-graphite border-t border-white/10 p-6 flex flex-col gap-4"
        >
          <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:text-brand-orange transition-all duration-300 hover:translate-x-2">Início</Link>
          <a href="/#sobre" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:text-brand-orange transition-all duration-300 hover:translate-x-2">Sobre Nós</a>
          <a href="/#servicos" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:text-brand-orange transition-all duration-300 hover:translate-x-2">Serviços</a>
          <a href="/#portfolio" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:text-brand-orange transition-all duration-300 hover:translate-x-2">Portfólio</a>
          <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:text-brand-orange transition-all duration-300 hover:translate-x-2">Blog</Link>
          <a href="/#faq" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:text-brand-orange transition-all duration-300 hover:translate-x-2">FAQ</a>
          <a href="/#contato" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium hover:text-brand-orange transition-all duration-300 hover:translate-x-2">Contato</a>
        </motion.div>
      )}
    </header>
  );
};

// --- Service Data ---

const servicesData = [
  {
    slug: "cozinhas-planejadas-erechim",
    title: "Cozinhas Planejadas em Erechim",
    description: "Cozinhas sob medida com design moderno, funcionalidade e acabamento premium em Erechim RS.",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1200",
    content: `
      <h2>Cozinhas Planejadas de Alto Padrão em Erechim</h2>
      <p>A cozinha é o coração da casa. Na Santorini Projetados, criamos <strong>cozinhas planejadas em Erechim</strong> que unem estética impecável e funcionalidade inteligente. Utilizamos materiais de alta resistência e ferragens de primeira linha para garantir durabilidade e conforto no seu dia a dia.</p>
      
      <h3>Benefícios de uma Cozinha Sob Medida</h3>
      <ul>
        <li><strong>Aproveitamento Total:</strong> Cada centímetro é utilizado, desde cantos difíceis até espaços aéreos.</li>
        <li><strong>Ergonomia:</strong> Altura de bancadas e disposição de eletrodomésticos pensadas para quem usa o espaço.</li>
        <li><strong>Personalização:</strong> Escolha entre centenas de padrões de MDF, vidros e puxadores.</li>
        <li><strong>Valorização do Imóvel:</strong> Uma cozinha bem projetada aumenta significativamente o valor de revenda da sua casa em Erechim.</li>
      </ul>

      <h3>Diferenciais Santorini</h3>
      <p>Nossas <strong>cozinhas sob medida em Erechim</strong> contam com amortecedores em todas as portas e gavetas, divisores de talheres personalizados e iluminação em LED embutida, proporcionando um ambiente sofisticado e acolhedor.</p>
    `
  },
  {
    slug: "quartos-sob-medida-erechim",
    title: "Quartos Sob Medida em Erechim",
    description: "Dormitórios planejados e closets de alto padrão em Erechim. Conforto e organização para seu descanso.",
    image: "https://images.unsplash.com/photo-1616594197247-b6956629919c?auto=format&fit=crop&q=80&w=1200",
    content: `
      <h2>Quartos e Closets Planejados em Erechim</h2>
      <p>Seu quarto deve ser seu refúgio. Projetamos <strong>quartos sob medida em Erechim</strong> focados no relaxamento e na organização impecável. Seja um dormitório de casal, solteiro ou um closet dos sonhos, a Santorini entrega exclusividade.</p>
      
      <h3>Organização e Estilo</h3>
      <ul>
        <li><strong>Closets Inteligentes:</strong> Divisórias internas configuradas para suas roupas e acessórios.</li>
        <li><strong>Cabeceiras Estofadas:</strong> Integração de marcenaria com tecidos e iluminação.</li>
        <li><strong>Home Office Integrado:</strong> Soluções para trabalhar no conforto do seu quarto.</li>
      </ul>

      <h3>Qualidade Garantida</h3>
      <p>Trabalhamos com as melhores marcas de MDF do mercado, garantindo que seu <strong>móvel planejado em Erechim</strong> não apenas seja bonito, mas também resistente e livre de mofo ou empenamentos.</p>
    `
  },
  {
    slug: "salas-moveis-planejados-erechim",
    title: "Salas e Painéis em Erechim",
    description: "Home theaters e painéis de TV sob medida em Erechim. Design moderno para seu estar.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
    content: `
      <h2>Salas de Estar e Painéis de TV em Erechim</h2>
      <p>A sala é o cartão de visitas da sua casa. Com nossos <strong>móveis planejados para sala em Erechim</strong>, você terá um ambiente digno de revista. Painéis ripados, iluminação indireta e fiação totalmente oculta são nossa especialidade.</p>
      
      <h3>Ambientes Integrados</h3>
      <p>Em apartamentos modernos em Erechim, a integração entre sala e cozinha é comum. Criamos projetos que conversam entre si, mantendo a unidade visual e o fluxo de passagem ideal.</p>
      
      <h3>Tecnologia e Design</h3>
      <ul>
        <li><strong>Painéis com LED:</strong> Criam profundidade e sofisticação.</li>
        <li><strong>Móveis para Equipamentos:</strong> Ventilação adequada para seus aparelhos eletrônicos.</li>
        <li><strong>Prateleiras Flutuantes:</strong> Leveza visual para sua decoração.</li>
      </ul>
    `
  },
  {
    slug: "moveis-corporativos-erechim",
    title: "Móveis Corporativos em Erechim",
    description: "Escritórios e ambientes comerciais planejados em Erechim. Produtividade e imagem profissional.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200",
    content: `
      <h2>Escritórios e Consultórios Planejados em Erechim</h2>
      <p>Sua empresa merece um ambiente que transmita profissionalismo. A Santorini Projetados executa <strong>móveis corporativos em Erechim</strong> com foco em ergonomia e produtividade, sem abrir mão da estética premium.</p>
      
      <h3>Soluções para Negócios</h3>
      <ul>
        <li><strong>Recepções Impactantes:</strong> A primeira impressão é a que fica para seus clientes.</li>
        <li><strong>Estações de Trabalho:</strong> Organização de cabos e espaço otimizado para equipes.</li>
        <li><strong>Salas de Reunião:</strong> Mesas imponentes com conectividade embutida.</li>
      </ul>

      <p>Seja para um pequeno home office ou uma grande sede corporativa em Erechim, temos a solução sob medida para o seu negócio.</p>
    `
  }
];

const ServicePage = () => {
  const { slug } = useParams();
  const service = servicesData.find(s => s.slug === slug);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  if (!service) return <div className="pt-32 text-center">Serviço não encontrado.</div>;

  return (
    <div className="pt-20">
      <Helmet>
        <title>{service.title} | Santorini Projetados</title>
        <meta name="description" content={service.description} />
      </Helmet>

      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-4"
          >
            {service.title}
          </motion.h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">{service.description}</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: service.content }}></div>
          
          <div className="mt-16 p-10 bg-gray-50 rounded-3xl border border-gray-100 text-center">
            <h3 className="text-2xl font-bold mb-4 text-brand-graphite">Pronto para transformar seu espaço?</h3>
            <p className="text-brand-gray mb-8">Solicite um orçamento sem compromisso para seu projeto de <strong>móveis planejados em Erechim</strong>.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/5554991291784" target="_blank" rel="noreferrer" className="btn-primary">
                Falar no WhatsApp
              </a>
              <Link to="/#contato" className="btn-secondary">
                Enviar Mensagem
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Social Proof Component ---

// --- Blog Data ---

const blogPosts = [
  {
    slug: "como-cuidar-de-moveis-de-mdf",
    title: "Como cuidar de móveis de MDF e aumentar sua durabilidade",
    description: "Dicas essenciais para manter seus móveis planejados sempre novos e resistentes ao tempo em Erechim.",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=800",
    alt: "Limpeza de móveis de MDF em Erechim",
    date: "06 Abr 2026",
    readTime: "5 min",
    metaTitle: "Como Cuidar de Móveis de MDF | Santorini Projetados Erechim",
    metaDesc: "Descubra como aumentar a durabilidade dos seus móveis de MDF com dicas de limpeza e conservação da Santorini Projetados em Erechim.",
    content: (
      <div className="space-y-8 text-brand-graphite leading-relaxed">
        <p className="text-xl text-brand-gray italic border-l-4 border-brand-orange pl-6 py-2">Ter móveis planejados em Erechim é um investimento que valoriza seu imóvel, mas para que eles durem décadas, o cuidado correto com o MDF é fundamental.</p>
        
        <h2 className="text-3xl font-bold mt-12 mb-6">1. Limpeza Diária: O Segredo da Conservação</h2>
        <p>A limpeza do MDF não exige produtos caros. Na verdade, o excesso de química pode danificar o acabamento premium que a Santorini Projetados entrega em seus projetos.</p>
        <ul className="list-disc pl-6 space-y-3">
          <li>Use um pano de microfibra levemente umedecido.</li>
          <li>Sabão neutro é o único detergente recomendado.</li>
          <li>Sempre passe um pano seco após a limpeza para evitar manchas.</li>
        </ul>

        <h2 className="text-3xl font-bold mt-12 mb-6">2. Cuidado com a Umidade em Erechim</h2>
        <p>Nossa região pode apresentar variações de umidade. Em cozinhas e banheiros, a atenção deve ser redobrada.</p>
        <p>Seque imediatamente qualquer respingo de água nas bordas dos móveis, pois é por ali que a umidade pode penetrar e estufar o material.</p>

        <h2 className="text-3xl font-bold mt-12 mb-6">3. Evite o Sol Direto nos Móveis Sob Medida</h2>
        <p>A radiação UV pode alterar a cor do acabamento ao longo dos anos. Use cortinas ou películas nos vidros para proteger seu investimento.</p>

        <div className="my-12 p-8 bg-brand-orange/5 border-l-4 border-brand-orange rounded-r-3xl">
          <h3 className="text-brand-orange font-bold text-xl mb-4">Dica de Ouro da Santorini:</h3>
          <p>Nunca utilize esponjas de aço, solventes ou produtos à base de cloro. Eles removem a camada de proteção do MDF e tiram o brilho original.</p>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
        <p>Cuidar dos seus móveis planejados é simples, mas exige constância. Com essas dicas, sua casa em Erechim continuará linda por muito mais tempo.</p>
        
        <div className="mt-16 p-10 bg-brand-graphite text-white rounded-3xl text-center">
          <h3 className="text-3xl font-bold mb-6">Pronto para transformar seu ambiente?</h3>
          <p className="mb-8 text-brand-gray">A Santorini Projetados é referência em móveis sob medida de alto padrão em Erechim.</p>
          <a href="/#contato" className="btn-primary inline-block">Solicite seu orçamento agora</a>
        </div>
      </div>
    )
  },
  {
    slug: "5-vantagens-moveis-planejados-erechim",
    title: "5 vantagens dos móveis planejados para sua casa em Erechim",
    description: "Saiba por que investir em móveis sob medida é a melhor escolha para quem busca conforto e valorização.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800",
    alt: "Vantagens de móveis planejados em Erechim",
    date: "04 Abr 2026",
    readTime: "4 min",
    metaTitle: "Vantagens dos Móveis Planejados em Erechim | Santorini",
    metaDesc: "Confira as 5 principais vantagens de escolher móveis planejados para sua residência ou escritório em Erechim e região.",
    content: (
      <div className="space-y-8 text-brand-graphite leading-relaxed">
        <p className="text-xl text-brand-gray italic border-l-4 border-brand-orange pl-6 py-2">Se você está construindo ou reformando em Erechim, já deve ter se perguntado: vale a pena investir em móveis planejados?</p>
        
        <h2 className="text-3xl font-bold mt-12 mb-6">1. Aproveitamento Total do Espaço</h2>
        <p>Diferente dos móveis modulados, os planejados são feitos milimetricamente para o seu ambiente. Isso é essencial para apartamentos modernos em Erechim onde cada centímetro conta.</p>

        <h2 className="text-3xl font-bold mt-12 mb-6">2. Personalização Exclusiva</h2>
        <p>Na Santorini Projetados, você escolhe desde o tipo de corrediça até o acabamento interno das gavetas. Seu móvel será único.</p>

        <h2 className="text-3xl font-bold mt-12 mb-6">3. Durabilidade Superior</h2>
        <p>Utilizamos materiais de alta qualidade e ferragens premium que garantem que seus móveis suportem o uso diário por muitos anos.</p>

        <h2 className="text-3xl font-bold mt-12 mb-6">4. Valorização do Imóvel</h2>
        <p>Um imóvel com móveis planejados de qualidade tem um valor de mercado significativamente maior em Erechim.</p>

        <h2 className="text-3xl font-bold mt-12 mb-6">5. Organização Inteligente</h2>
        <p>Projetamos divisórias e acessórios que facilitam a sua rotina, mantendo tudo no seu devido lugar.</p>

        <div className="mt-16 p-10 bg-brand-graphite text-white rounded-3xl text-center">
          <h3 className="text-3xl font-bold mb-6">Quer um projeto exclusivo?</h3>
          <p className="mb-8 text-brand-gray">Fale com nossos especialistas em Erechim.</p>
          <a href="/#contato" className="btn-primary inline-block">Solicite seu orçamento</a>
        </div>
      </div>
    )
  },
  {
    slug: "moveis-sob-medida-vale-a-pena",
    title: "Móveis sob medida: vale a pena investir?",
    description: "Analisamos o custo-benefício dos móveis planejados em comparação com móveis prontos de loja.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    alt: "Custo-benefício de móveis sob medida em Erechim",
    date: "02 Abr 2026",
    readTime: "6 min",
    metaTitle: "Móveis Sob Medida Vale a Pena? | Santorini Projetados",
    metaDesc: "Descubra se vale a pena investir em móveis sob medida em Erechim. Analisamos durabilidade, design e custo-benefício.",
    content: (
      <div className="space-y-8 text-brand-graphite leading-relaxed">
        <p className="text-xl text-brand-gray italic border-l-4 border-brand-orange pl-6 py-2">Muitas pessoas em Erechim hesitam na hora de escolher entre móveis de loja e sob medida devido ao preço inicial. Mas qual o real custo-benefício?</p>
        
        <h2 className="text-3xl font-bold mt-12 mb-6">Investimento vs. Gasto</h2>
        <p>Móveis de loja costumam ter uma vida útil curta. Em poucos anos, você precisará trocá-los. Já os móveis da Santorini Projetados são feitos para durar a vida toda.</p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Design que se adapta a você</h2>
        <p>Móveis prontos exigem que você se adapte a eles. Móveis sob medida se adaptam à sua altura, sua rotina e seu estilo de vida em Erechim.</p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Conclusão</h2>
        <p>Sim, vale muito a pena. O valor investido retorna em forma de conforto, beleza e durabilidade.</p>
        
        <div className="mt-16 p-10 bg-brand-graphite text-white rounded-3xl text-center">
          <h3 className="text-3xl font-bold mb-6">Transforme seu sonho em realidade</h3>
          <a href="/#contato" className="btn-primary inline-block">Solicite orçamento em Erechim</a>
        </div>
      </div>
    )
  },
  {
    slug: "como-escolher-moveis-cozinha",
    title: "Como escolher móveis planejados ideais para sua cozinha",
    description: "Dicas práticas para planejar a cozinha dos seus sonhos com funcionalidade e elegância.",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=800",
    alt: "Cozinha planejada em Erechim Santorini",
    date: "30 Mar 2026",
    readTime: "5 min",
    metaTitle: "Como Escolher Cozinha Planejada | Santorini Erechim",
    metaDesc: "Guia completo para escolher os móveis planejados para sua cozinha em Erechim. Design, materiais e ergonomia.",
    content: (
      <div className="space-y-8 text-brand-graphite leading-relaxed">
        <h2 className="text-3xl font-bold mt-12 mb-6">Ergonomia em Primeiro Lugar</h2>
        <p>A cozinha é o coração da casa. Em Erechim, valorizamos muito os momentos em família ao redor da mesa. Por isso, a circulação deve ser fluida.</p>
        <h2 className="text-3xl font-bold mt-12 mb-6">Materiais Resistentes</h2>
        <p>Cozinhas exigem materiais que suportem calor e umidade. Na Santorini, usamos o que há de melhor no mercado.</p>
        <div className="mt-16 p-10 bg-brand-graphite text-white rounded-3xl text-center">
          <h3 className="text-3xl font-bold mb-6">Sua cozinha nova começa aqui</h3>
          <a href="/#contato" className="btn-primary inline-block">Falar com Projetista</a>
        </div>
      </div>
    )
  },
  {
    slug: "tendencias-moveis-planejados-2025",
    title: "Tendências de móveis planejados para 2025",
    description: "Fique por dentro das cores, materiais e designs que estarão em alta no próximo ano.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    alt: "Tendências de design de interiores 2025 Erechim",
    date: "28 Mar 2026",
    readTime: "4 min",
    metaTitle: "Tendências Móveis Planejados 2025 | Santorini Projetados",
    metaDesc: "Conheça as principais tendências de design e móveis planejados para 2025. Cores, texturas e tecnologia para sua casa em Erechim.",
    content: (
      <div className="space-y-8 text-brand-graphite leading-relaxed">
        <h2 className="text-3xl font-bold mt-12 mb-6">Minimalismo Quente</h2>
        <p>Cores neutras combinadas com texturas de madeira natural serão o destaque em Erechim em 2025.</p>
        <h2 className="text-3xl font-bold mt-12 mb-6">Tecnologia Integrada</h2>
        <p>Carregadores por indução embutidos e iluminação LED inteligente são indispensáveis nos novos projetos da Santorini.</p>
        <div className="mt-16 p-10 bg-brand-graphite text-white rounded-3xl text-center">
          <h3 className="text-3xl font-bold mb-6">Seu projeto atualizado</h3>
          <a href="/#contato" className="btn-primary inline-block">Solicitar Orçamento</a>
        </div>
      </div>
    )
  },
  {
    slug: "por-que-escolher-santorini-projetados-erechim",
    title: "Por que escolher a Santorini Projetados em Erechim?",
    description: "Conheça nossa história, nossos valores e o que nos torna referência em móveis sob medida.",
    image: "/blog1.webp",
    alt: "Equipe Santorini Projetados Erechim",
    date: "25 Mar 2026",
    readTime: "3 min",
    metaTitle: "Por Que Escolher a Santorini? | Móveis Planejados Erechim",
    metaDesc: "Descubra os diferenciais da Santorini Projetados em Erechim. Qualidade, compromisso e design de alto padrão para seu ambiente.",
    content: (
      <div className="space-y-8 text-brand-graphite leading-relaxed">
        <h2 className="text-3xl font-bold mt-12 mb-6">Compromisso com a Qualidade</h2>
        <p>Em Erechim, nosso nome é sinônimo de confiança. Cada projeto é tratado como único, com atenção total aos detalhes.</p>
        <h2 className="text-3xl font-bold mt-12 mb-6">Pós-Venda Diferenciado</h2>
        <p>Nossa relação com o cliente não termina na entrega. Estamos sempre à disposição para garantir sua satisfação total.</p>
        <div className="mt-16 p-10 bg-brand-graphite text-white rounded-3xl text-center">
          <h3 className="text-3xl font-bold mb-6">Venha nos visitar</h3>
          <a href="/#contato" className="btn-primary inline-block">Agendar Visita</a>
        </div>
      </div>
    )
  }
];

// --- Blog Components ---

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block"
          >
            Blog & Inspiração
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-brand-graphite mb-6"
          >
            Conteúdos e Dicas sobre Móveis Planejados
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-brand-gray max-w-2xl mx-auto text-lg"
          >
            Dicas, inspirações e informações para quem deseja transformar seu ambiente com móveis sob medida em Erechim e região.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post, i) => (
            <motion.div 
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.alt} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-brand-graphite">
                  Dicas
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[10px] text-brand-gray font-bold uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-graphite mb-4 group-hover:text-brand-orange transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed mb-8 line-clamp-2">
                  {post.description}
                </p>
                <div className="mt-auto">
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="inline-flex items-center gap-2 text-brand-orange font-bold text-xs uppercase tracking-widest group/btn"
                  >
                    Ler mais <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link to="/blog" className="btn-secondary inline-flex items-center gap-2">
            Ver todos os conteúdos <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

const BlogListPage = () => {
  return (
    <div className="pt-32 pb-20 px-6 bg-gray-50 min-h-screen">
      <Helmet>
        <title>Blog | Santorini Projetados Erechim - Dicas e Inspirações</title>
        <meta name="description" content="Acompanhe nosso blog e fique por dentro das tendências de móveis planejados, dicas de decoração e conservação em Erechim." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-gray hover:text-brand-orange transition-colors text-sm font-bold uppercase tracking-widest mb-8">
            <ArrowRight size={16} className="rotate-180" /> Voltar para o início
          </Link>
          <h1 className="text-5xl font-display font-bold text-brand-graphite mb-4">Blog Santorini</h1>
          <p className="text-brand-gray text-lg">Inspirações e dicas para o seu ambiente em Erechim.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, i) => (
            <motion.div 
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.alt} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[10px] text-brand-gray font-bold uppercase tracking-widest mb-4">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-brand-graphite mb-4 group-hover:text-brand-orange transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed mb-8 line-clamp-2">
                  {post.description}
                </p>
                <Link 
                  to={`/blog/${post.slug}`} 
                  className="mt-auto inline-flex items-center gap-2 text-brand-orange font-bold text-xs uppercase tracking-widest group/btn"
                >
                  Ler mais <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) return <div className="pt-40 text-center">Post não encontrado.</div>;

  return (
    <div className="pt-32 pb-20 px-6 bg-white min-h-screen">
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDesc} />
      </Helmet>
      
      <div className="max-w-4xl mx-auto">
        <Link to="/blog" className="inline-flex items-center gap-2 text-brand-gray hover:text-brand-orange transition-colors text-sm font-bold uppercase tracking-widest mb-12">
          <ArrowRight size={16} className="rotate-180" /> Todos os artigos
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-4 text-[10px] text-brand-orange font-bold uppercase tracking-widest mb-6">
            <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-brand-graphite leading-tight mb-8">
            {post.title}
          </h1>
          <div className="rounded-[3rem] overflow-hidden h-[400px] md:h-[500px] mb-12">
            <img src={post.image} alt={post.alt} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="blog-content">
          {post.content}
        </div>

        <div className="mt-20 pt-12 border-t border-gray-100">
          <h4 className="text-xl font-bold mb-8">Leia também:</h4>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.filter(p => p.slug !== slug).slice(0, 2).map(p => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group flex gap-4 items-center">
                <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                  <img src={p.image} alt={p.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <h5 className="font-bold text-brand-graphite group-hover:text-brand-orange transition-colors line-clamp-2">{p.title}</h5>
                  <span className="text-[10px] text-brand-gray font-bold uppercase tracking-widest mt-2 block">Ler artigo</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Home = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Santorini Móveis Projetados",
    "image": "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=800",
    "@id": "https://santoriniprojetados.com.br",
    "url": "https://santoriniprojetados.com.br",
    "telephone": "+54991291784",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Lázaro Dante Rubbo, 741",
      "addressLocality": "Erechim",
      "addressRegion": "RS",
      "postalCode": "99704-632",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -27.6325702,
      "longitude": -52.244103
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    }
  };

  return (
    <main>
      <Helmet>
        <title>Móveis Planejados em Erechim | Alto Padrão | Santorini Projetados</title>
        <meta name="description" content="Projetos de móveis planejados em Erechim com design moderno, alta qualidade e acabamento premium. Móveis sob medida em Erechim RS. Solicite seu orçamento." />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      <Hero />
      <SocialProof />
      <AboutSection />
      <Services />
      <Differentials />
      <Process />
      <Portfolio />
      <InstagramFeed />
      <Testimonials />
      <FAQ />
      <MapSection />
      <Contact />
      <FinalCTA />
    </main>
  );
};
const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden text-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1920" 
          alt="Cozinha Planejada em Erechim Santorini Projetados" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white bg-black/40 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10"
        >
          <span className="text-brand-orange font-bold tracking-[0.1em] uppercase text-[10px] md:text-xs mb-4 block">
            Móveis planejados em Erechim | Santorini Projetados
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            Móveis planejados <span className="font-handwriting text-brand-orange block md:inline-block mt-2 md:mt-0">sob medida</span> em Erechim para transformar seu espaço
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
            Projetos de <strong>móveis planejados em Erechim</strong> com design moderno, alta qualidade e acabamento premium. Agenda limitada para novos projetos este mês.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contato" className="btn-primary">Solicitar orçamento</a>
            <a href="https://wa.me/5554991291784" target="_blank" rel="noreferrer" className="btn-secondary">
              Falar no WhatsApp
            </a>
          </div>
          <p className="mt-6 text-[10px] uppercase tracking-widest text-white/40 font-bold">
            Especialista em móveis sob medida Erechim e região
          </p>
        </motion.div>
      </div>
      
      <div className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-50 flex flex-col items-end gap-3 sm:gap-4">
        <motion.a 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          href="https://www.facebook.com/santoriniprojetados/?locale=pt_BR" 
          target="_blank" 
          rel="noreferrer" 
          className="bg-[#1877F2] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full flex items-center gap-2 sm:gap-3 shadow-2xl font-bold text-xs sm:text-sm"
        >
          <Facebook size={18} className="sm:w-6 sm:h-6" fill="currentColor" />
          <span>Veja nosso trabalho</span>
        </motion.a>
        <motion.a 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          href="https://wa.me/5554991291784?text=Olá,%20vim%20pelo%20site%20e%20gostaria%20de%20um%20orçamento" 
          target="_blank" 
          rel="noreferrer" 
          className="bg-[#25D366] text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full flex items-center gap-2 sm:gap-3 shadow-2xl font-bold text-xs sm:text-sm"
        >
          <MessageCircle size={18} className="sm:w-6 sm:h-6" fill="currentColor" />
          <span>Solicitar orçamento</span>
        </motion.a>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const stats = [
    { label: "Projetos Entregues", value: "500+", icon: <CheckCircle2 size={20} /> },
    { label: "Anos de Experiência", value: "15+", icon: <Award size={20} /> },
    { label: "Clientes Satisfeitos", value: "98%", icon: <Users size={20} /> },
    { label: "Garantia de Fábrica", value: "5 Anos", icon: <ShieldCheck size={20} /> },
  ];

  return (
    <section className="bg-brand-graphite py-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-brand-orange mb-3 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-brand-gray text-[10px] uppercase tracking-[0.2em] font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



const Services = () => {
  const services = [
    {
      title: "Cozinhas Planejadas",
      slug: "cozinhas-planejadas-erechim",
      desc: "Cozinhas sob medida em Erechim com design moderno e funcionalidade inteligente.",
      icon: <ChefHat size={32} />,
      benefits: [
        "Aproveitamento inteligente do espaço",
        "Design moderno e personalizado",
        "Materiais de alta qualidade",
        "Acabamento impecável"
      ]
    },
    {
      title: "Quartos Sob Medida",
      slug: "quartos-sob-medida-erechim",
      desc: "Dormitórios e closets planejados em Erechim para máximo conforto e organização.",
      icon: <Bed size={32} />,
      benefits: [
        "Guarda-roupas planejados",
        "Soluções para espaços pequenos",
        "Personalização completa",
        "Melhor organização"
      ]
    },
    {
      title: "Salas e Painéis",
      slug: "salas-moveis-planejados-erechim",
      desc: "Home theaters e painéis de TV em Erechim com design sofisticado e exclusivo.",
      icon: <Tv size={32} />,
      benefits: [
        "Painéis de TV sob medida",
        "Móveis decorativos",
        "Integração com o ambiente",
        "Acabamento sofisticado"
      ]
    },
    {
      title: "Móveis Corporativos",
      slug: "moveis-corporativos-erechim",
      desc: "Escritórios e ambientes comerciais em Erechim focados em produtividade e imagem.",
      icon: <Briefcase size={32} />,
      benefits: [
        "Escritórios planejados",
        "Organização e ergonomia",
        "Design profissional",
        "Otimização de espaço"
      ]
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-gray-50 text-brand-graphite">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Nossas Soluções</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-brand-graphite">
            Móveis Planejados de Alto Padrão em Erechim
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto text-lg">
            Especialistas em transformar ambientes com <strong>móveis sob medida em Erechim</strong> que unem sofisticação, tecnologia e funcionalidade.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
            className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 transition-all duration-500 group flex flex-col h-full"
          >
            <div className="text-brand-orange mb-6 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-brand-graphite group-hover:text-brand-orange transition-colors">
              {service.title}
            </h3>
            <p className="text-brand-gray text-sm leading-relaxed mb-6">
              {service.desc}
            </p>
            <ul className="mt-auto space-y-3 mb-8">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-brand-gray">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                  {benefit}
                </li>
              ))}
            </ul>
            <Link 
              to={`/servicos/${service.slug}`} 
              className="inline-flex items-center gap-2 text-brand-orange font-bold text-xs uppercase tracking-widest group/btn"
            >
              Ver Detalhes <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Atendimento Inicial",
      desc: "Entendemos suas necessidades e desejos para criar a base do projeto perfeito."
    },
    {
      num: "02",
      title: "Desenvolvimento do Projeto",
      desc: "Nossos designers criam uma proposta 3D exclusiva com foco em ergonomia e estilo."
    },
    {
      num: "03",
      title: "Produção dos Móveis",
      desc: "Fabricação própria com tecnologia de ponta e materiais de altíssima qualidade."
    },
    {
      num: "04",
      title: "Instalação Final",
      desc: "Montagem profissional e cuidadosa para garantir que tudo fique exatamente como planejado."
    }
  ];

  return (
    <section className="section-padding bg-black">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Passo a Passo</span>
        <h2 className="text-4xl font-display font-bold">Como transformamos seu espaço</h2>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 relative">
        <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-white/10 -z-0"></div>
        {steps.map((step, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="text-center relative z-10"
          >
            <div className="w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-8 text-2xl font-bold shadow-xl shadow-brand-orange/20">
              {step.num}
            </div>
            <h4 className="text-xl font-bold mb-4">{step.title}</h4>
            <p className="text-brand-gray text-sm leading-relaxed px-4">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Juliana Mendes",
      city: "Erechim",
      text: "Fiz minha cozinha planejada com a Santorini e o resultado ficou impecável. O acabamento premium realmente faz a diferença. Atendimento excelente em Erechim!",
      stars: 5,
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Ricardo Oliveira",
      city: "Erechim",
      text: "Atendimento excelente e acabamento impecável. Fizemos todo o escritório corporativo e a ergonomia ficou perfeita. Recomendo para quem busca móveis sob medida em Erechim.",
      stars: 5,
      img: "/cliente.webp"
    },
    {
      name: "Ana Paula Santos",
      city: "Erechim",
      text: "Atenderam muito bem aqui na região. O projeto do nosso quarto ficou exatamente como sonhamos. A equipe de montagem é muito caprichosa e organizada.",
      stars: 5,
      img: "/cliente2.webp"
    }
  ];

  return (
    <section id="depoimentos" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Prova Social</span>
          <h2 className="text-4xl font-display font-bold text-brand-graphite">O que nossos clientes dizem</h2>
          <p className="text-brand-gray mt-4">Experiências reais de quem escolheu a melhor marcenaria em Erechim.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col h-full"
            >
              <div className="flex gap-1 text-brand-orange mb-6">
                {[...Array(review.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <Quote className="text-brand-orange/20 mb-4" size={40} />
              <p className="text-brand-graphite italic mb-8 leading-relaxed flex-grow">"{review.text}"</p>
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-50">
                <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <span className="font-bold text-brand-graphite block">{review.name}</span>
                  <span className="text-[10px] text-brand-gray uppercase tracking-widest font-bold">{review.city}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-4 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm max-w-xl mx-auto">
          <div className="text-center">
            <span className="font-bold text-brand-graphite">Avaliações no Google</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-bold text-brand-graphite">4.9</span>
            <div className="flex gap-1 text-brand-orange">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
            </div>
          </div>
          <p className="text-brand-gray text-sm">Baseado em mais de 120 avaliações de clientes locais em Erechim.</p>
        </div>
      </div>
    </section>
  );
};

const InstagramFeed = () => {
  const posts = [
    "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400",
    "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=400"
  ];

  return (
    <section className="section-padding bg-brand-graphite">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-display font-bold">Acompanhe no Instagram</h2>
            <p className="text-brand-gray">Veja nossos projetos reais de <strong>móveis planejados em Erechim</strong>.</p>
          </div>
          <a href="https://instagram.com/santoriniprojetados" target="_blank" rel="noreferrer" className="btn-secondary flex items-center gap-2">
            <Instagram size={20} /> @santoriniprojetados
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {posts.map((post, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="aspect-square rounded-xl overflow-hidden relative group"
            >
              <img src={post} alt="Instagram Post" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white" size={32} />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="https://instagram.com/santoriniprojetados" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-brand-orange font-bold hover:gap-4 transition-all">
            Ver mais projetos no Instagram <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  return (
    <section id="localizacao" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Localização em Erechim</span>
            <h2 className="text-4xl font-display font-bold text-brand-graphite mb-6">Visite a nossa fábrica</h2>
            <p className="text-brand-gray text-lg mb-8 leading-relaxed">
              Visite a nossa fábrica em Erechim e conheça de perto a qualidade dos nossos móveis planejados. Estamos prontos para transformar seu ambiente com móveis sob medida em Erechim RS.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-orange/10 p-3 rounded-xl">
                  <MapPin className="text-brand-orange" size={24} />
                </div>
                <div>
                  <p className="font-bold text-brand-graphite">Endereço</p>
                  <p className="text-brand-gray">R. Lázaro Dante Rubbo, 741 - Copas Verdes, Erechim - RS, 99704-632</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-brand-orange/10 p-3 rounded-xl">
                  <Phone className="text-brand-orange" size={24} />
                </div>
                <div>
                  <p className="font-bold text-brand-graphite">Telefone</p>
                  <p className="text-brand-gray">(54) 99129-1784</p>
                </div>
              </div>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.google.com/maps/place/Santorini+Móveis+Projetados/@-27.6409742,-52.2838727,14z/data=!4m10!1m2!2m1!1smoveis+projetados+erechim!3m6!1s0x94e3136fdd56c8fd:0xb49e61927e6c4b22!8m2!3d-27.6325702!4d-52.244103!15sChltb3ZlaXMgcHJvamV0YWRvcyBlcmVjaGltkgEPZnVybml0dXJlX21ha2Vy4AEA!16s%2Fg%2F11h5kz4h87?entry=ttu" 
                target="_blank" 
                rel="noreferrer" 
                className="btn-primary inline-flex items-center gap-2 justify-center"
              >
                Abrir no Google Maps <ExternalLink size={18} />
              </a>
            </div>
            
            {/* SEO Keywords for Local Search */}
            <div className="mt-8 pt-8 border-t border-gray-100">
              <p className="text-[10px] text-brand-gray font-bold uppercase tracking-widest">
                Referência em móveis planejados em Erechim • móveis sob medida em Erechim RS
              </p>
            </div>
          </div>
          <div className="h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.561570744926!2d-52.24629168494065!3d-27.63257018282245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e3136fdd56c8fd%3A0xb49e61927e6c4b22!2sSantorini%20M%C3%B3veis%20Projetados!5e0!3m2!1spt-BR!2sbr!4v1712380000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Santorini Móveis Projetados Erechim"
              className="grayscale group-hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("residenciais");

  const projectsData = {
    residenciais: [
      { title: "Living Integrado", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800" },
      { title: "Cozinha Gourmet", img: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=800" },
      { title: "Dormitório Master", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800" },
      { title: "Home Office", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800" },
      { title: "Suíte Premium", img: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=800" },
      { title: "Espaço Gourmet", img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800" }
    ],
    empresariais: [
      { title: "Escritório Executivo", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" },
      { title: "Sala de Reunião", img: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=800" },
      { title: "Recepção Moderna", img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800" },
      { title: "Coworking Space", img: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=800" },
      { title: "Consultório Médico", img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" },
      { title: "Nossa Fábrica", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" }
    ]
  };

  const displayedProjects = activeTab === "todos" 
    ? [...projectsData.residenciais, ...projectsData.empresariais]
    : projectsData[activeTab as keyof typeof projectsData];

  return (
    <section id="portfolio" className="section-padding bg-brand-graphite">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
        <div>
          <h2 className="text-4xl font-display font-bold mb-4">Nosso Portfólio</h2>
          <p className="text-brand-gray">Uma seleção de projetos realizados para clientes exigentes.</p>
        </div>
        
        <div className="flex bg-black/30 p-1 rounded-full border border-white/5">
          <button 
            onClick={() => setActiveTab("todos")}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === "todos" ? "bg-brand-orange text-white" : "text-brand-gray hover:text-white"}`}
          >
            Todos
          </button>
          <button 
            onClick={() => setActiveTab("residenciais")}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === "residenciais" ? "bg-brand-orange text-white" : "text-brand-gray hover:text-white"}`}
          >
            Residenciais
          </button>
          <button 
            onClick={() => setActiveTab("empresariais")}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeTab === "empresariais" ? "bg-brand-orange text-white" : "text-brand-gray hover:text-white"}`}
          >
            Empresariais
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <motion.div 
                key={`${activeTab}-${project.title}-${index}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                  <h4 className="text-white font-bold text-xl">{project.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const Differentials = () => {
  const differentials = [
    {
      title: "Projetos 100% Personalizados",
      desc: "Cada ambiente em Erechim é planejado de forma única, respeitando seu estilo e necessidades específicas.",
      icon: <PencilRuler size={32} />
    },
    {
      title: "Aproveitamento Inteligente",
      desc: "Soluções de marcenaria em Erechim pensadas para utilizar cada centímetro com máxima eficiência.",
      icon: <Maximize size={32} />
    },
    {
      title: "Acabamento Premium",
      desc: "Materiais selecionados e atenção aos mínimos detalhes para móveis de alto padrão em Erechim.",
      icon: <Gem size={32} />
    },
    {
      title: "Atendimento Exclusivo",
      desc: "Acompanhamento próximo em todas as etapas, do primeiro traço à instalação final em sua casa.",
      icon: <Handshake size={32} />
    },
    {
      title: "Design e Funcionalidade",
      desc: "Ambientes que unem a estética moderna estilo Apple com a praticidade necessária no dia a dia.",
      icon: <Palette size={32} />
    },
    {
      title: "Execução Própria",
      desc: "Cuidamos de todo o processo fabril para garantir o padrão de qualidade Santorini em Erechim.",
      icon: <Truck size={32} />
    }
  ];

  return (
    <section id="diferenciais" className="section-padding bg-white text-brand-graphite">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand-orange font-bold tracking-widest uppercase text-xs mb-4 block">Por que a Santorini?</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-brand-graphite">
            A Melhor Escolha em Móveis Planejados em Erechim
          </h2>
          <p className="text-brand-gray max-w-2xl mx-auto text-lg">
            Combinamos tradição em marcenaria com tecnologia de ponta para entregar o melhor em <strong>móveis sob medida no RS</strong>.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {differentials.map((diff, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
            className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 transition-all duration-300 group"
          >
            <div className="text-brand-orange mb-6 group-hover:scale-110 transition-transform duration-300">
              {diff.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-brand-graphite">{diff.title}</h3>
            <p className="text-brand-gray text-sm leading-relaxed">{diff.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-brand-graphite font-medium mb-8 text-xl">
            Pronto para transformar seu sonho em realidade?
          </p>
          <a href="#contato" className="btn-primary inline-flex items-center gap-3">
            Solicitar Orçamento Gratuito <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const questions = [
    {
      q: "Qual o prazo de entrega dos móveis planejados em Erechim?",
      a: "Nosso prazo médio de entrega é de 30 a 45 dias úteis após a aprovação final do projeto executivo. Priorizamos a agilidade sem abrir mão do acabamento impecável que a Santorini oferece em Erechim."
    },
    {
      q: "Vocês fazem projetos de móveis sob medida para toda a região?",
      a: "Sim! Atendemos Erechim e diversas cidades da região norte do RS. Nossa equipe técnica realiza a medição e instalação com o mesmo padrão de excelência em todas as localidades."
    },
    {
      q: "Quais materiais são utilizados nos móveis da Santorini?",
      a: "Trabalhamos exclusivamente com MDF de alta densidade, ferragens com amortecimento de marcas premium e acabamentos que seguem as últimas tendências de design de interiores."
    },
    {
      q: "Como solicitar um orçamento de móveis planejados em Erechim?",
      a: "É simples! Você pode clicar em qualquer botão de 'Solicitar Orçamento' no site, preencher o formulário ou nos chamar diretamente no WhatsApp. Agendamos uma visita técnica ou reunião em nossa fábrica."
    },
    {
      q: "A Santorini oferece garantia nos móveis projetados?",
      a: "Sim, oferecemos 5 anos de garantia de fábrica contra defeitos de fabricação, reafirmando nosso compromisso com a durabilidade e satisfação dos nossos clientes em Erechim."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-brand-orange font-bold tracking-[0.2em] text-xs uppercase block mb-4">Suporte</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-brand-graphite">Dúvidas Frequentes</h2>
          <p className="text-brand-gray text-lg">Tire suas dúvidas sobre nossos móveis planejados, prazos, projetos e atendimento.</p>
        </motion.div>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {questions.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-md"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full p-6 text-left flex justify-between items-center group"
            >
              <span className="font-bold text-brand-graphite text-lg pr-8">{item.q}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-brand-orange flex-shrink-0"
              >
                <ChevronDown size={24} />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-brand-gray leading-relaxed">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-brand-graphite font-medium mb-6">Ainda ficou com dúvidas?</p>
          <a 
            href="https://wa.me/5554991291784" 
            target="_blank" 
            rel="noreferrer" 
            className="btn-primary inline-flex items-center gap-3"
          >
            <MessageCircle size={20} /> Falar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contato" className="section-padding bg-brand-graphite">
      <div className="max-w-5xl mx-auto bg-white/5 rounded-3xl p-12 border border-white/10 flex flex-col lg:flex-row gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <h2 className="text-3xl font-display font-bold mb-4">Solicite seu orçamento gratuito</h2>
          <p className="text-brand-gray mb-10">Móveis sob medida que transformam seu espaço. Preencha os dados e entraremos em contato para agendar sua consultoria de design sem compromisso.</p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-brand-orange" size={20} />
              <span className="text-sm text-brand-gray">comercial@santoriniprojetados.com.br</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-brand-orange" size={20} />
              <span className="text-sm text-brand-gray">(54) 99129-1784</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-brand-orange" size={20} />
              <span className="text-sm text-brand-gray">R. Lázaro Dante Rubbo, 741 - Copas Verdes, Erechim - RS, 99704-632</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-widest text-brand-gray ml-1">Nome Completo</label>
              <input type="text" placeholder="Como podemos te chamar?" className="w-full bg-black/40 border border-white/10 rounded-xl p-4 outline-none focus:border-brand-orange transition-colors" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-widest text-brand-gray ml-1">E-mail</label>
              <input type="email" placeholder="seu@email.com" className="w-full bg-black/40 border border-white/10 rounded-xl p-4 outline-none focus:border-brand-orange transition-colors" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-widest text-brand-gray ml-1">WhatsApp</label>
              <input type="text" placeholder="(54) 99999-9999" className="w-full bg-black/40 border border-white/10 rounded-xl p-4 outline-none focus:border-brand-orange transition-colors" />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-widest text-brand-gray ml-1">Seu Projeto</label>
              <textarea placeholder="Fale um pouco sobre o ambiente que deseja transformar" rows={4} className="w-full bg-black/40 border border-white/10 rounded-xl p-4 outline-none focus:border-brand-orange transition-colors"></textarea>
            </div>
            <button type="submit" className="w-full btn-primary py-4 uppercase tracking-widest text-sm font-bold mt-4">Enviar Solicitação</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="section-padding bg-black text-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920" 
          alt="Móveis Planejados Erechim" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
            Transforme seu ambiente com a <span className="text-brand-orange">Santorini Projetados</span>
          </h2>
          <p className="text-brand-gray mb-12 text-xl max-w-2xl mx-auto leading-relaxed">
            Seja para sua casa ou empresa em Erechim, entregamos a sofisticação e o acabamento premium que você merece.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://wa.me/5554991291784" 
              target="_blank" 
              rel="noreferrer" 
              className="btn-primary flex items-center gap-3 justify-center text-lg px-10 py-5"
            >
              <MessageCircle size={24} /> Solicitar Orçamento Gratuito
            </a>
          </div>
          <p className="mt-8 text-brand-gray text-sm font-bold uppercase tracking-widest">
            Atendimento exclusivo em Erechim e Região
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <img 
              src="/logo.png" 
              alt="Santorini Logo" 
              className="w-12 h-12 rounded-md object-cover border border-white/10"
            />
            <span className="text-2xl font-display font-bold tracking-tighter block whitespace-nowrap">
              SANTORINI <span className="text-brand-orange">PROJETADOS</span>
            </span>
          </div>
          <p className="text-brand-gray text-sm leading-relaxed">
            Referência em <strong>móveis planejados em Erechim</strong> e região. Mobiliário sob medida de alto padrão com design sofisticado e execução impecável.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com/santoriniprojetados" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange transition-all">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com/santoriniprojetados" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange transition-all">
              <Facebook size={20} />
            </a>
          </div>
        </div>
        
        <div>
          <h5 className="font-bold mb-8 uppercase tracking-[0.2em] text-xs text-brand-orange">Navegação</h5>
          <ul className="space-y-4 text-brand-gray text-sm font-medium">
            <li><Link to="/" className="hover:text-white transition-colors">Início</Link></li>
            <li><a href="/#sobre" className="hover:text-white transition-colors">Sobre a Empresa</a></li>
            <li><a href="/#servicos" className="hover:text-white transition-colors">Nossos Serviços</a></li>
            <li><a href="/#portfolio" className="hover:text-white transition-colors">Portfólio</a></li>
            <li><Link to="/blog" className="hover:text-white transition-colors">Blog & Dicas</Link></li>
            <li><a href="/#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-8 uppercase tracking-[0.2em] text-xs text-brand-orange">Contato</h5>
          <ul className="space-y-6 text-brand-gray text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-orange shrink-0" />
              <span>R. Lázaro Dante Rubbo, 741<br />Copas Verdes, Erechim - RS</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-orange shrink-0" />
              <span>(54) 99129-1784</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-orange shrink-0" />
              <span>contato@santoriniprojetados.com.br</span>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-bold mb-8 uppercase tracking-[0.2em] text-xs text-brand-orange">Newsletter</h5>
          <p className="text-brand-gray text-sm mb-6">Receba tendências de design e inspirações para sua casa.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none w-full focus:border-brand-orange transition-all" 
            />
            <button className="bg-brand-orange p-3 rounded-xl hover:bg-opacity-80 transition-all shadow-lg shadow-brand-orange/20">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-brand-gray tracking-[0.2em] uppercase font-bold">
        <p>© 2026 SANTORINI PROJETADOS. TODOS OS DIREITOS RESERVADOS.</p>
        <div className="flex gap-8">
          <Link to="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
          <Link to="/termos-de-uso" className="hover:text-white transition-colors">Termos de Uso</Link>
        </div>
      </div>
    </footer>
  );
};

// --- Legal Pages ---

const LegalPageLayout = ({ title, children }: { title: string, children: React.ReactNode }) => {
  return (
    <div className="pt-32 pb-20 px-6 bg-white text-brand-graphite min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-12 text-brand-graphite border-b pb-8 border-gray-100">
            {title}
          </h1>
          <div className="text-brand-gray leading-relaxed space-y-8 text-justify">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <div id="sobre" className="bg-white">
      {/* História Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-graphite mb-8">Sobre a Santorini Projetados</h2>
            <div className="space-y-6 text-brand-gray text-lg leading-relaxed">
              <p className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-4">Mais de uma década de excelência em móveis planejados em Erechim</p>
              <p>
                Desde 2008, a <strong>Santorini Projetados</strong> transforma ambientes com marcenaria de alto padrão. O que nasceu como um atelier sob medida evoluiu para uma das principais referências em <strong>móveis planejados em Erechim</strong> e no norte do RS.
              </p>
              <p>
                Unimos tecnologia de ponta ao cuidado artesanal para entregar projetos personalizados que equilibram funcionalidade, estética e durabilidade. Seja em cozinhas, salas ou espaços corporativos, garantimos precisão absoluta em cada detalhe.
              </p>
              <p>
                Mais do que mobiliário, oferecemos soluções completas em <strong>móveis sob medida em Erechim</strong>, criando ambientes únicos que valorizam cada metro quadrado do seu espaço.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="/historia.webp" 
              alt="História Santorini Projetados Erechim" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Posicionamento Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-graphite mb-8">Referência em Alto Padrão</h2>
            <p className="text-xl text-brand-gray leading-relaxed mb-12">
              Somos especialistas em <strong>móveis planejados em Erechim</strong>, focados em entregar um atendimento personalizado que entende a fundo o estilo de vida de cada cliente. Nossa <strong>marcenaria planejada Erechim</strong> utiliza materiais premium e ferragens de marcas mundialmente reconhecidas, garantindo que seus <strong>móveis sob medida Erechim</strong> tenham um acabamento impecável e durabilidade superior.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="text-brand-orange text-3xl font-bold mb-2">15+</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-brand-gray">Anos de Mercado</div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="text-brand-orange text-3xl font-bold mb-2">500+</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-brand-gray">Projetos Entregues</div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="text-brand-orange text-3xl font-bold mb-2">100%</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-brand-gray">Personalizado</div>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="text-brand-orange text-3xl font-bold mb-2">5 Anos</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-brand-gray">De Garantia</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              className="p-10 bg-brand-graphite text-white rounded-[2.5rem] border border-white/5 hover:border-brand-orange/30 transition-colors duration-300 cursor-default shadow-xl hover:shadow-brand-orange/10"
            >
              <h3 className="text-2xl font-bold text-brand-orange mb-6 uppercase tracking-widest text-sm">Missão</h3>
              <p className="text-brand-gray leading-relaxed">
                Entregar móveis planejados que transformam espaços com qualidade, funcionalidade e sofisticação, superando as expectativas de nossos clientes em Erechim.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-10 bg-brand-graphite text-white rounded-[2.5rem] border border-white/5 hover:border-brand-orange/30 transition-colors duration-300 cursor-default shadow-xl hover:shadow-brand-orange/10"
            >
              <h3 className="text-2xl font-bold text-brand-orange mb-6 uppercase tracking-widest text-sm">Visão</h3>
              <p className="text-brand-gray leading-relaxed">
                Ser a principal referência em móveis planejados em Erechim e região, reconhecida pela excelência no design e na execução de projetos de alto padrão.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 bg-brand-graphite text-white rounded-[2.5rem] border border-white/5 hover:border-brand-orange/30 transition-colors duration-300 cursor-default shadow-xl hover:shadow-brand-orange/10"
            >
              <h3 className="text-2xl font-bold text-brand-orange mb-6 uppercase tracking-widest text-sm">Valores</h3>
              <ul className="space-y-4 text-brand-gray">
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-brand-orange" /> Qualidade</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-brand-orange" /> Compromisso</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-brand-orange" /> Transparência</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-brand-orange" /> Atendimento próximo</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-brand-orange" /> Excelência nos detalhes</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

const PrivacyPolicyPage = () => {
  return (
    <LegalPageLayout title="Política de Privacidade">
      <Helmet>
        <title>Política de Privacidade | Santorini Projetados - Móveis Planejados em Erechim</title>
        <meta name="description" content="Conheça a política de privacidade detalhada da Santorini Projetados. Saiba como tratamos seus dados ao buscar móveis planejados em Erechim e região." />
      </Helmet>
      
      <section>
        <h2 className="text-2xl font-display font-bold text-brand-graphite mb-4">1. Introdução e Compromisso com a Transparência</h2>
        <p>
          A <strong>Santorini Projetados</strong>, estabelecida como uma das principais referências em <strong>móveis planejados em Erechim</strong> e em todo o estado do Rio Grande do Sul, apresenta esta Política de Privacidade com o intuito de demonstrar seu compromisso com a segurança e a proteção das informações de seus clientes, parceiros e visitantes. Entendemos que a busca por <strong>móveis sob medida Erechim</strong> envolve não apenas a entrega de um produto físico de alta qualidade, mas também a construção de uma relação de confiança que começa no primeiro contato digital.
        </p>
        <p>
          Como uma <strong>empresa de móveis planejados em Erechim</strong> que utiliza tecnologias avançadas de design e gestão, reconhecemos a importância da privacidade na era digital. Esta política foi elaborada em estrita conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018) e visa esclarecer, de forma didática e transparente, como os dados pessoais são coletados, processados, armazenados e protegidos em nossa plataforma. Ao utilizar nossos serviços de <strong>marcenaria planejada Erechim</strong>, você declara estar ciente das práticas aqui descritas.
        </p>
        <p>
          Nossa trajetória em Erechim é marcada pela ética e pelo respeito ao consumidor. Acreditamos que a transparência no tratamento de dados é um pilar fundamental para quem busca <strong>móveis de alto padrão Erechim</strong>. Por isso, dedicamos este espaço para detalhar cada etapa do ciclo de vida dos dados em nossa organização, garantindo que você tenha total controle sobre suas informações enquanto planeja o ambiente dos seus sonhos com a Santorini Projetados.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-display font-bold text-brand-graphite mb-4">2. Coleta de Dados Pessoais: O que Coletamos e Por Quê</h2>
        <p>
          Para oferecer a excelência que caracteriza nossos <strong>móveis planejados RS</strong>, a coleta de certas informações é indispensável. Dividimos essa coleta em categorias para que você compreenda exatamente o que está sendo processado.
        </p>
        <h3 className="text-xl font-bold text-brand-graphite mb-2">2.1. Informações de Identificação e Contato</h3>
        <p>
          Quando você interage conosco através de formulários de orçamento para <strong>móveis sob medida Erechim</strong>, coletamos:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Nome Completo:</strong> Para que nosso atendimento em Erechim seja pessoal e profissional.</li>
          <li><strong>Endereço de E-mail:</strong> Principal canal para envio de projetos 3D, orçamentos detalhados de <strong>marcenaria planejada Erechim</strong> e contratos.</li>
          <li><strong>Número de Telefone/WhatsApp:</strong> Essencial para agilidade no agendamento de medições técnicas e suporte imediato durante a montagem dos seus <strong>móveis de alto padrão Erechim</strong>.</li>
          <li><strong>Endereço Residencial ou Comercial:</strong> Necessário para que nossa equipe técnica possa realizar a medição <i>in loco</i> e, posteriormente, a entrega e montagem do mobiliário.</li>
        </ul>
        <h3 className="text-xl font-bold text-brand-graphite mb-2">2.2. Dados de Preferências e Projetos</h3>
        <p>
          Para que possamos ser a melhor <strong>empresa de móveis planejados em Erechim</strong> para o seu caso específico, também podemos solicitar:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Tipo de Ambiente:</strong> Se você busca soluções para cozinhas, dormitórios, banheiros ou escritórios corporativos.</li>
          <li><strong>Estilo de Design:</strong> Suas preferências estéticas (moderno, clássico, minimalista) para que nossos projetistas em Erechim criem algo verdadeiramente único.</li>
          <li><strong>Necessidades Funcionais:</strong> Informações sobre como você utiliza o espaço, garantindo que os <strong>móveis planejados em Erechim</strong> sejam práticos e ergonômicos.</li>
        </ul>
        <h3 className="text-xl font-bold text-brand-graphite mb-2">2.3. Dados de Navegação e Tecnologia</h3>
        <p>
          Ao acessar nosso portal de <strong>móveis planejados RS</strong>, coletamos automaticamente:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Endereço IP e Geolocalização Aproximada:</strong> Para entender de onde vem o interesse por nossos serviços em Erechim e região.</li>
          <li><strong>Dados do Dispositivo:</strong> Modelo do aparelho, sistema operacional e navegador utilizado.</li>
          <li><strong>Comportamento de Navegação:</strong> Páginas visualizadas, tempo de permanência e links clicados, ajudando-nos a otimizar a experiência de quem busca <strong>móveis sob medida Erechim</strong>.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-display font-bold text-brand-graphite mb-4">3. Finalidades do Tratamento de Dados</h2>
        <p>
          A Santorini Projetados não coleta dados sem um propósito claro e legítimo. Cada informação processada visa aprimorar a entrega de nossos <strong>móveis de alto padrão Erechim</strong>. As finalidades principais são:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Personalização de Projetos:</strong> Transformar seus dados em ambientes funcionais e esteticamente impecáveis através de nossa <strong>marcenaria planejada Erechim</strong>.</li>
          <li><strong>Comunicação Comercial:</strong> Enviar atualizações sobre o status do seu pedido, desde a fabricação até a instalação final em Erechim.</li>
          <li><strong>Marketing e Promoções:</strong> Com seu consentimento, enviar e-mails sobre novas coleções, tendências de design e ofertas exclusivas de <strong>móveis planejados em Erechim</strong>.</li>
          <li><strong>Segurança e Prevenção a Fraudes:</strong> Garantir que as interações em nosso site sejam seguras para todos os usuários.</li>
          <li><strong>Cumprimento de Obrigações Legais:</strong> Emissão de notas fiscais, gestão de garantias de 5 anos e conformidade com normas tributárias e civis.</li>
          <li><strong>Pesquisas de Satisfação:</strong> Ouvir sua opinião após a montagem dos seus <strong>móveis sob medida Erechim</strong> para mantermos nosso padrão de excelência.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-display font-bold text-brand-graphite mb-4">4. Gestão de Cookies e Tecnologias de Rastreamento</h2>
        <p>
          Os cookies são fundamentais para que nosso site de <strong>móveis planejados em Erechim</strong> funcione de maneira inteligente. Eles nos permitem lembrar suas preferências e oferecer conteúdos mais relevantes.
        </p>
        <p>
          <strong>Tipos de Cookies que utilizamos:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Cookies de Sessão:</strong> Temporários, expiram quando você fecha o navegador.</li>
          <li><strong>Cookies Persistentes:</strong> Permanecem no seu dispositivo para que possamos reconhecê-lo em sua próxima visita em busca de <strong>móveis sob medida Erechim</strong>.</li>
          <li><strong>Cookies de Terceiros:</strong> Como os do Google Analytics, que nos fornecem métricas valiosas sobre o desempenho do nosso site de <strong>marcenaria planejada Erechim</strong>.</li>
        </ul>
        <p>
          Você pode gerenciar ou desativar os cookies através das configurações do seu navegador. Note que a desativação de certos cookies pode limitar sua experiência ao navegar por nossos projetos de <strong>móveis de alto padrão Erechim</strong>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-display font-bold text-brand-graphite mb-4">5. Compartilhamento Seguro de Informações</h2>
        <p>
          A Santorini Projetados preza pela confidencialidade. Jamais venderemos seus dados para terceiros. O compartilhamento ocorre apenas com parceiros estratégicos que nos ajudam a entregar o melhor em <strong>móveis planejados RS</strong>:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Empresas de Logística e Transporte:</strong> Para garantir que seus <strong>móveis sob medida Erechim</strong> cheguem ao destino com segurança e pontualidade.</li>
          <li><strong>Provedores de Infraestrutura Tecnológica:</strong> Serviços de hospedagem e armazenamento em nuvem que garantem a disponibilidade do nosso site de <strong>marcenaria planejada Erechim</strong>.</li>
          <li><strong>Ferramentas de Marketing:</strong> Plataformas de envio de e-mail marketing e gestão de relacionamento com o cliente (CRM).</li>
          <li><strong>Autoridades Governamentais:</strong> Quando houver requisição legal ou necessidade de defesa em processos judiciais.</li>
        </ul>
        <p>
          Todos os nossos parceiros são selecionados sob rigorosos critérios de conformidade com a LGPD, garantindo que seus dados de <strong>móveis de alto padrão Erechim</strong> recebam o mesmo nível de proteção que oferecemos internamente.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-display font-bold text-brand-graphite mb-4">6. Segurança da Informação: Como Protegemos Você</h2>
        <p>
          Como uma <strong>empresa de móveis planejados em Erechim</strong> que investe em tecnologia, aplicamos as melhores práticas de segurança do mercado para proteger seus dados. Isso inclui:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Criptografia de Dados:</strong> Proteção das informações durante a transmissão entre seu dispositivo e nossos servidores.</li>
          <li><strong>Controle de Acesso Rigoroso:</strong> Apenas colaboradores autorizados da Santorini Projetados em Erechim têm acesso aos seus dados pessoais, e apenas para as finalidades descritas nesta política.</li>
          <li><strong>Monitoramento Contínuo:</strong> Auditorias regulares em nossos sistemas para identificar e mitigar potenciais vulnerabilidades.</li>
          <li><strong>Treinamento da Equipe:</strong> Capacitamos nossos profissionais de <strong>marcenaria planejada Erechim</strong> sobre a importância da privacidade e proteção de dados.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-display font-bold text-brand-graphite mb-4">7. Seus Direitos como Titular de Dados (LGPD)</h2>
        <p>
          A LGPD confere a você, cliente interessado em <strong>móveis planejados em Erechim</strong>, total controle sobre seus dados. Você pode, a qualquer momento, solicitar:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Acesso aos Dados:</strong> Saber quais informações temos sobre você.</li>
          <li><strong>Correção de Inconsistências:</strong> Atualizar seu endereço ou telefone em Erechim.</li>
          <li><strong>Anonimização ou Bloqueio:</strong> Caso considere que algum dado está sendo tratado de forma desnecessária.</li>
          <li><strong>Portabilidade:</strong> Levar seus dados para outra <strong>empresa de móveis planejados em Erechim</strong>, se desejar.</li>
          <li><strong>Eliminação de Dados:</strong> Solicitar a exclusão de informações coletadas via consentimento, ressalvadas as obrigações legais de guarda (como dados fiscais de <strong>móveis sob medida Erechim</strong>).</li>
        </ul>
        <p>
          Para exercer esses direitos, basta entrar em contato através do e-mail <strong>contato@santoriniprojetados.com.br</strong>. Nossa equipe em Erechim processará sua solicitação no prazo legal.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-display font-bold text-brand-graphite mb-4">8. Retenção e Exclusão de Dados</h2>
        <p>
          Armazenamos seus dados pessoais pelo período necessário para atingir as finalidades descritas nesta política. Se você contratou nossos serviços de <strong>móveis de alto padrão Erechim</strong>, manteremos seus dados durante todo o período de vigência da garantia de 5 anos, para assegurar que possamos prestar a assistência técnica necessária.
        </p>
        <p>
          Dados coletados para fins de marketing serão mantidos até que você solicite o descadastramento ou revogue seu consentimento. Após o término do período de retenção, os dados serão excluídos de forma segura ou anonimizados para fins estatísticos sobre o mercado de <strong>móveis planejados RS</strong>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-display font-bold text-brand-graphite mb-4">9. Proteção de Dados de Menores</h2>
        <p>
          Nossos serviços de <strong>móveis planejados em Erechim</strong> são direcionados a adultos capazes de contratar. Não coletamos intencionalmente dados de menores de 18 anos. Caso identifiquemos que dados de uma criança ou adolescente foram coletados sem o consentimento dos pais ou responsáveis, tomaremos as medidas imediatas para a exclusão dessas informações de nossos bancos de dados de <strong>marcenaria planejada Erechim</strong>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-display font-bold text-brand-graphite mb-4">10. Transferência Internacional de Dados</h2>
        <p>
          Embora a Santorini Projetados opere fisicamente em Erechim - RS, utilizamos serviços de tecnologia (como servidores de e-mail e armazenamento em nuvem) que podem estar localizados fora do Brasil. Nessas situações, garantimos que tais transferências ocorram apenas para países que possuam legislação de proteção de dados compatível com a brasileira ou através de cláusulas contratuais que assegurem a proteção dos seus dados de <strong>móveis sob medida Erechim</strong>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-display font-bold text-brand-graphite mb-4">11. Alterações e Atualizações</h2>
        <p>
          Esta Política de Privacidade pode ser atualizada a qualquer momento para refletir mudanças em nossos processos internos ou novas exigências legais. A data da última atualização será sempre exibida ao final do documento. Recomendamos que você visite esta página periodicamente para se manter atualizado sobre como a Santorini Projetados protege sua privacidade ao buscar <strong>móveis de alto padrão Erechim</strong>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-display font-bold text-brand-graphite mb-4">12. Contato e Encarregado de Dados (DPO)</h2>
        <p>
          Para qualquer questão relacionada à sua privacidade e proteção de dados em nossa <strong>empresa de móveis planejados em Erechim</strong>, entre em contato com nosso Encarregado de Proteção de Dados:
        </p>
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mt-6">
          <p className="font-bold text-brand-graphite mb-2">Santorini Projetados - Atendimento Erechim</p>
          <p><strong>E-mail:</strong> contato@santoriniprojetados.com.br</p>
          <p><strong>WhatsApp:</strong> (54) 99129-1784</p>
          <p><strong>Endereço:</strong> R. Lázaro Dante Rubbo, 741 - Copas Verdes, Erechim - RS</p>
        </div>
        <p className="mt-8 text-sm text-brand-gray italic">
          Esta política foi atualizada pela última vez em 06 de Abril de 2026 e reflete nosso compromisso contínuo com a transparência e a excelência em <strong>móveis planejados em Erechim</strong>.
        </p>
      </section>
    </LegalPageLayout>
  );
};

const TermsOfUsePage = () => {
  return (
    <LegalPageLayout title="Termos de Uso">
      <Helmet>
        <title>Termos de Uso | Santorini Projetados - Móveis Planejados em Erechim</title>
        <meta name="description" content="Leia os termos de uso detalhados da Santorini Projetados. Regras, condições e compromissos para quem busca móveis planejados em Erechim de alto padrão." />
      </Helmet>

      <section>
        <h2 className="text-2xl font-display font-bold text-brand-graphite mb-4">1. Aceitação e Abrangência dos Termos</h2>
        <p>
          Seja bem-vindo ao portal oficial da <strong>Santorini Projetados</strong>. Ao acessar, navegar ou utilizar qualquer funcionalidade deste site, você declara ter lido, compreendido e concordado integralmente com estes Termos de Uso. Este documento estabelece as regras fundamentais para a interação entre a Santorini Projetados, sua <strong>empresa de móveis planejados em Erechim</strong> de referência, e você, nosso usuário e potencial cliente.
        </p>
        <p>
          Estes termos aplicam-se a todos os visitantes, usuários e outros que acessam o serviço em busca de informações sobre <strong>móveis sob medida Erechim</strong>. Caso você não concorde com qualquer disposição aqui contida, solicitamos que interrompa imediatamente o uso do site. A continuidade da navegação implica na aceitação tácita e irrevogável de todas as condições estabelecidas pela Santorini Projetados para o mercado de <strong>marcenaria planejada Erechim</strong>.
        </p>
        <p>
          A Santorini Projetados reserva-se o direito de modificar estes termos a qualquer momento, visando adequá-los a novas realidades do mercado de <strong>móveis de alto padrão Erechim</strong> ou a alterações legislativas. É sua responsabilidade revisar este documento periodicamente para se manter informado sobre suas obrigações e direitos.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-display font-bold text-brand-graphite mb-4">2. Descrição Detalhada dos Serviços e Produtos</h2>
        <p>
          A Santorini Projetados atua no segmento de luxo e personalização, oferecendo soluções completas em <strong>móveis planejados em Erechim</strong>. Nosso site funciona como uma vitrine tecnológica de nossa expertise, abrangendo:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Design de Interiores e Projetos 3D:</strong> Desenvolvimento de conceitos visuais realistas para ambientes residenciais e corporativos em Erechim.</li>
          <li><strong>Fabricação de Móveis Sob Medida:</strong> Produção industrial com acabamento artesanal, utilizando materiais de primeira linha para garantir <strong>móveis de alto padrão Erechim</strong>.</li>
          <li><strong>Consultoria em Ambientes:</strong> Orientação técnica sobre aproveitamento de espaço, ergonomia e tendências de decoração para quem busca <strong>marcenaria planejada Erechim</strong>.</li>
          <li><strong>Logística e Instalação:</strong> Gestão de todo o processo de entrega e montagem final dos <strong>móveis planejados RS</strong>, garantindo o cumprimento dos prazos acordados.</li>
        </ul>
        <p>
          É importante ressaltar que as imagens de projetos exibidas no site são ilustrativas e representam a capacidade técnica da nossa <strong>empresa de móveis planejados em Erechim</strong>. Cada projeto real é único e adaptado às dimensões e necessidades específicas do cliente.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-display font-bold text-brand-graphite mb-4">3. Obrigações e Responsabilidades do Usuário</h2>
        <p>
          Ao utilizar nossa plataforma de <strong>móveis planejados em Erechim</strong>, você se compromete a:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Fornecer Informações Verídicas:</strong> Garantir que todos os dados inseridos em formulários de orçamento para <strong>móveis sob medida Erechim</strong> sejam precisos e atualizados.</li>
          <li><strong>Uso Ético do Conteúdo:</strong> Não utilizar nossas imagens de projetos ou textos informativos para fins comerciais próprios ou de terceiros sem autorização expressa.</li>
          <li><strong>Respeito à Segurança:</strong> Não tentar burlar sistemas de segurança, injetar códigos maliciosos ou realizar qualquer ação que comprometa a integridade do site da Santorini Projetados.</li>
          <li><strong>Comunicação Respeitosa:</strong> Manter um tom profissional e respeitoso em todas as interações via chat ou WhatsApp com nossa equipe de <strong>marcenaria planejada Erechim</strong>.</li>
        </ul>
        <p>
          O descumprimento de qualquer uma dessas obrigações poderá resultar na suspensão imediata do seu acesso e na adoção de medidas legais cabíveis pela nossa <strong>empresa de móveis planejados em Erechim</strong>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-display font-bold text-brand-graphite mb-4">4. Propriedade Intelectual e Direitos Autorais</h2>
        <p>
          Todo o conteúdo disponível no site da Santorini Projetados — incluindo textos, logotipos, designs de <strong>móveis de alto padrão Erechim</strong>, fotografias de obras concluídas, vídeos e códigos-fonte — é protegido por leis de direitos autorais e propriedade industrial.
        </p>
        <p>
          A marca "Santorini Projetados" e seus elementos visuais são ativos valiosos de nossa <strong>empresa de móveis planejados em Erechim</strong>. É estritamente proibido:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Copiar, reproduzir ou distribuir projetos de <strong>marcenaria planejada Erechim</strong> sem consentimento prévio.</li>
          <li>Remover avisos de direitos autorais ou marcas d'água de nossas imagens.</li>
          <li>Utilizar técnicas de <i>framing</i> ou <i>mirroring</i> para exibir nosso conteúdo em outros domínios de <strong>móveis planejados RS</strong>.</li>
        </ul>
        <p>
          Caso você deseje compartilhar nossos projetos em redes sociais, deverá sempre citar a Santorini Projetados como a autora e detentora dos direitos sobre os <strong>móveis sob medida Erechim</strong> apresentados.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-display font-bold text-brand-graphite mb-4">5. Processo de Orçamento e Contratação</h2>
        <p>
          A solicitação de orçamento através do site é o primeiro passo para transformar seu lar com <strong>móveis planejados em Erechim</strong>. Este processo segue as seguintes regras:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Caráter Informativo:</strong> Os valores iniciais fornecidos são estimativas. O preço final de um projeto de <strong>móveis de alto padrão Erechim</strong> só é definido após a medição técnica e escolha de materiais.</li>
          <li><strong>Visita Técnica:</strong> A Santorini Projetados reserva-se o direito de cobrar taxas de deslocamento para visitas fora da zona urbana de Erechim, o que será comunicado previamente.</li>
          <li><strong>Formalização:</strong> A contratação efetiva dos serviços de <strong>marcenaria planejada Erechim</strong> só ocorre mediante a assinatura de contrato físico ou digital específico, que prevalecerá sobre estes Termos de Uso em caso de conflito.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-display font-bold text-brand-graphite mb-4">6. Limitação de Responsabilidade e Garantias</h2>
        <p>
          A Santorini Projetados empenha-se em manter a plataforma livre de erros, mas não garante que o site funcionará ininterruptamente ou que estará livre de vírus. Como uma <strong>empresa de móveis planejados em Erechim</strong> transparente, informamos que:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Não nos responsabilizamos por danos decorrentes de falhas na conexão de internet do usuário ao navegar por nossos <strong>móveis sob medida Erechim</strong>.</li>
          <li>As cores dos materiais exibidas nas telas podem sofrer variações em relação ao produto físico devido às configurações de cada monitor. Recomendamos sempre a visualização de amostras físicas em nossa sede em Erechim.</li>
          <li>A Santorini Projetados não se responsabiliza por conteúdos de sites de terceiros linkados em nosso portal de <strong>móveis planejados RS</strong>.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-display font-bold text-brand-graphite mb-4">7. Indenização</h2>
        <p>
          Você concorda em indenizar e isentar a Santorini Projetados, seus diretores, funcionários e parceiros de Erechim de qualquer reclamação, perda, responsabilidade ou despesa (incluindo honorários advocatícios) decorrente do seu uso indevido do site ou da violação destes Termos de Uso ao buscar informações sobre <strong>marcenaria planejada Erechim</strong>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-display font-bold text-brand-graphite mb-4">8. Links Externos e Parcerias</h2>
        <p>
          Nosso site pode indicar fornecedores de eletrodomésticos, pedras ou decorações que complementam nossos <strong>móveis de alto padrão Erechim</strong>. Essas indicações não implicam em responsabilidade solidária. A relação comercial entre o usuário e esses terceiros é independente da Santorini Projetados, mesmo que originada de um link em nosso portal de <strong>móveis planejados em Erechim</strong>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-display font-bold text-brand-graphite mb-4">9. Rescisão e Suspensão de Acesso</h2>
        <p>
          A Santorini Projetados poderá, a seu exclusivo critério e sem aviso prévio, suspender ou encerrar seu acesso ao site caso identifique condutas fraudulentas ou violações graves a estes termos. Isso não prejudica a continuidade de contratos de <strong>móveis sob medida Erechim</strong> já assinados, que seguem suas próprias cláusulas de rescisão.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-display font-bold text-brand-graphite mb-4">10. Disposições Gerais</h2>
        <p>
          <strong>Independência das Cláusulas:</strong> Se qualquer parte destes termos for considerada inválida por um tribunal em Erechim, as demais disposições permanecerão em pleno vigor.
        </p>
        <p>
          <strong>Tolerância:</strong> A omissão da Santorini Projetados em exigir o cumprimento de qualquer cláusula não constitui renúncia ao direito de fazê-lo futuramente.
        </p>
        <p>
          <strong>Acordo Integral:</strong> Estes Termos de Uso constituem o entendimento completo entre as partes no que tange ao uso do site de <strong>móveis planejados RS</strong>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-display font-bold text-brand-graphite mb-4">11. Lei Aplicável e Jurisdição</h2>
        <p>
          Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Fica eleito o Foro da Comarca de Erechim - RS como o único competente para dirimir quaisquer questões oriundas deste documento, com renúncia expressa a qualquer outro, por mais privilegiado que seja. Esta escolha de foro é fundamental para a segurança jurídica de nossa <strong>empresa de móveis planejados em Erechim</strong> e de nossos clientes.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-display font-bold text-brand-graphite mb-4">12. Atendimento ao Cliente e Dados da Empresa</h2>
        <p>
          Para dúvidas sobre estes termos ou sobre nossos serviços de <strong>móveis sob medida Erechim</strong>, utilize nossos canais oficiais:
        </p>
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 mt-6">
          <p className="font-bold text-brand-graphite mb-2">Santorini Projetados - Excelência em Erechim</p>
          <p><strong>Razão Social:</strong> Santorini Móveis Projetados Ltda</p>
          <p><strong>Endereço:</strong> R. Lázaro Dante Rubbo, 741 - Copas Verdes, Erechim - RS, 99704-632</p>
          <p><strong>Telefone/WhatsApp:</strong> (54) 99129-1784</p>
          <p><strong>E-mail:</strong> contato@santoriniprojetados.com.br</p>
        </div>
        <p className="mt-8 text-sm text-brand-gray italic">
          Estes termos foram atualizados em 06 de Abril de 2026.
        </p>
      </section>
    </LegalPageLayout>
  );
};

// --- Main App ---

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="antialiased selection:bg-brand-orange selection:text-white">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/servicos/:slug" element={<ServicePage />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
            <Route path="/termos-de-uso" element={<TermsOfUsePage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}
