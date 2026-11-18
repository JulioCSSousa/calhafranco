import type { Metadata } from "next";
import React from "react";
import Script from 'next/script';
import Image from 'next/image';
import ServicesCard from "./components/ServicesCard";
import ServicesListPage2 from "./components/ServicesListPage2";
import PartnessList from "./components/PartnessList";
import { partnessList, servicesCard, servicesList } from "./constants/clientData";
import MapViewWrapper from "./components/MapViewWrapper";
import SloganPage from "./components/HeroPage";
import ProductGrid from "./components/ProductGrid";
import GoogleReviewCarousel from "./components/GoogleReviewCarousel";
import WorkImagesCarousel from "./components/WorkImagesCarousel";
import PartnessProducts from "./components/PartnessPrducts";

export const metadata: Metadata = {
  title: "Calhas Franco - Instalação de Calhas e Serviços Industriais em Jaguariúna",
  description: "Calhas Franco em Jaguariúna - Especialistas em calhas, rufos, estruturas metálicas, drywall antichamas, telhados e isolamento térmico. Atendimento rápido e sob medida!",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.calhasfranco.com.br/",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png"
  },
};

export default function Home() {
  return (
    <div>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
      <Script
        id="local-business-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Calhas Franco",
            "image": "https://www.calhasfranco.com.br/images/favicon.png",
            "url": "https://www.calhasfranco.com.br",
            "telephone": "+55 19 99637-9679",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua Ferrúcio Augusto Testa, 52",
              "addressLocality": "Jaguariúna",
              "addressRegion": "SP",
              "postalCode": "13914-010",
              "addressCountry": "BR"
            },
            "openingHours": "Mo-Fr 07:30-17:30",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -22.6985,
              "longitude": -46.9912
            },
            "priceRange": "$$",
            "sameAs": ["https://www.instagram.com/calhas_franco"]
          }),
        }}
      />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#" aria-label="Calhas Franco - início">
            <Image src="/images/logo-contraste-removebg-preview.png" alt="Calhas Franco" width={300} height={150} priority />
          </a>
          <div className="header-actions">
            <div className="header-contact">
              <span>Atendimento rápido</span>
              <strong>(19) 99637-9679</strong>
            </div>
            <a className="header-cta" href="https://wa.me/5519996379679" target="_blank" rel="noopener noreferrer">
              Solicitar orçamento
            </a>
          </div>
        </div>
      </header>

      <nav id="mainNav" className="navbar navbar-expand-lg main-nav" >
        <div className="container nav-inner">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" style={{ filter: 'invert(0)' }}></span>
          </button>
          <div id="navbarResponsive" className="collapse navbar-collapse">
            <ul className="navbar-nav nav-links">
              <li className="nav-item">
                <a className="nav-link" href="#about-us">Quem somos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Serviços</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services2">Projetos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#products">Produtos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#partnessProducts">Produtos Sela Brasil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#partness">Parceiros</a>
              </li>


              <li className="nav-item d-flex align-items-center">
                <a className="nav-link d-flex align-items-center" href="https://www.instagram.com/calhas_franco" target="_blank" >
                  <Image src="/images/instagram-1-svgrepo-com.svg" alt="Instagram" width={30} height={30} />
                </a>
              </li>
              <li className="nav-item d-flex align-items-center">
                <a className="nav-link d-flex align-items-center" href="https://www.facebook.com/people/Calhas-Franco/61563856175010" target="_blank">
                  <Image src="/images/icons8-facebook-novo.svg" alt="Facebook" width={30} height={30} />
                </a>
              </li>
              <li className="nav-item d-flex align-items-center">
                <a className="nav-link d-flex align-items-center" href="https://wa.me/5519996379679" target="_blank">
                  <Image src="/images/whatsapp-svgrepo-com.svg" alt="WhatsApp" width={30} height={30} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id='about-us' className="about-section">
        <div className="about-content">
          <div className="section-heading">
            <span className="eyebrow">Conheça a empresa</span>
            <h2>Quem somos</h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p>A <strong>Calhas Franco</strong> é especializada na prestação de serviços para obras industriais e residenciais. Com <strong>18 anos de experiência</strong>, entregamos soluções com qualidade, segurança e acabamento profissional.</p>
            </div>
            <div className="about-copy">
              <h3>Atuação</h3>
              <p>Contamos com equipe qualificada e equipamentos de corte, dobra e furação para atender cada projeto com precisão.</p>
            </div>
          </div>
          <div className="about-stats">
            <div><strong>18</strong><span>anos de experiência</span></div>
            <div><strong>01</strong><span>parceria com Sela Brasil</span></div>
            <div><strong>100%</strong><span>foco em qualidade</span></div>
          </div>
        </div>
      </section>
      <SloganPage />
      <section className="portfolio-section">
        <div className="section-heading centered">
          <span className="eyebrow">Portfólio</span>
          <h2>Projetos realizados</h2>
        </div>
        <WorkImagesCarousel />
      </section>
      <section id="services" className="services-section py-5">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">O que fazemos</span>
            <h2>Nossos Serviços</h2>
          </div>
          <div className="row g-4 justify-content-center">
            {servicesCard.map((service) => (
              <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center" key={service.label}>
                <ServicesCard label={service.label} link={service.link} />
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="services2" className="segments-section text-light py-5">
        <div className="container">
          <div className="section-heading centered light">
            <span className="eyebrow">Atuação completa</span>
            <h2>Soluções para diferentes segmentos</h2>
          </div>
          <ul className="segments-list list-unstyled">
            {servicesList.map((service) => (
              <ServicesListPage2 key={service.label} label={service.label} />
            ))}
          </ul>
        </div>
      </section>


      <section className="product-grid" id="products">
        <div className="section-heading centered">
          <span className="eyebrow">Catálogo</span>
          <h2>Nossos Produtos</h2>
        </div>
        <div>
          <ProductGrid />
        </div>
      </section>
      <section className="product-grid partner-products" id="partnessProducts">
        <div className="section-heading centered">
          <span className="eyebrow">Parceria Sela Brasil</span>
          <h2>Produtos em destaque</h2>
        </div>
        <div>
          <PartnessProducts />
        </div>
      </section>
      <section id="partness" className="partners-section">
        <div className="section-heading centered">
          <span className="eyebrow">Quem confia</span>
          <h2>Nossos Parceiros</h2>
        </div>
        <div className="p-8 text-center hexagon-section">
          {partnessList.map((partness) =>
            <PartnessList key={partness.img} title={partness.title} img={partness.img} />
          )}
        </div>

      </section>
      <section className="reviews-section">
        <div className="section-heading centered">
          <span className="eyebrow">Avaliações</span>
          <h2>O que nossos clientes dizem</h2>
        </div>
        <GoogleReviewCarousel />

        <div className="reviews-cta">
          <a href="https://g.co/kgs/TbjKWpX" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary">
            Ver todos Comentários
            </button>
          </a>
        </div>
      </section>

      <section className="location-section p-8 text-center">
        <div className="section-heading centered">
          <span className="eyebrow">Visite-nos</span>
          <h2>Onde estamos</h2>
        </div>
        <MapViewWrapper />
      </section>

      <footer className="text-white py-5">
        <div className="container">
          <div className="row text-start">
            {/* Coluna 1 - Informações de contato */}
            <div className="col-md-4 mb-4">
              <h5 className="text-uppercase">CALHAS FRANCO</h5>
              <hr className="border-light w-25 mb-2 mt-1" />
              <h5><strong>Contato</strong></h5>
              <p className="mb-1">calhasfranco.manutencoes@outlook.com.br</p>
              <div className="d-flex gap-2">
                <a className="nav-link d-flex align-items-center" href="https://wa.me/5519996379679" target="_blank">
                  <Image src="/images/whatsapp-svgrepo-com.svg" alt="WhatsApp" width={20} height={20} />
                </a>
                <p className="mb-0">(19) 99637-9679</p>
              </div>
              <hr className="border-light w-25 mb-2 mt-1" />
              <h5><strong>Vendas</strong></h5>
              <p className="mb-1">vendas@calhasfranco.com.br</p>
              <h5><strong>Comercial</strong></h5>
              <p className="mb-1">comercial@calhasfranco.com.br</p>
              <hr className="border-light w-25 mb-2 mt-1" />
              <p className="mb-1">
                Rua Ferrúcio Augusto Testa, 52<br />
                Vila Guilherme - Jaguariúna - SP
              </p>
            </div>

            {/* Coluna 2 - Produtos */}
            <div className="col-md-4 mb-4">
              <h5 className="text-uppercase">Produtos</h5>
              <hr className="border-light w-25 mb-2 mt-1" />
              <ul className="list-unstyled">
                <li>➜ Calhas</li>
                <li>➜ Rufos</li>
                <li>➜ Telhas</li>
                <li>➜ Tubulações</li>
                <li>➜ Coifas</li>
                <li>➜ P.U Selas Brasil</li>
              </ul>
            </div>

            {/* Coluna 3 - Redes sociais */}
            <div className="col-md-4 mb-4">
              <h5 className="text-uppercase">Acompanhe nossas redes</h5>
              <hr className="border-light w-25 mb-2 mt-1" />
              <div className="d-flex gap-3">
                <a href="https://www.facebook.com/people/Calhas-Franco/61563856175010" className="text-white" aria-label="Facebook">
                  <i className="bi bi-facebook fs-4"></i>
                </a>
                <a href="https://g.co/kgs/2dHRuFS" className="text-white" aria-label="Google">
                  <i className="bi bi-google fs-4"></i>
                </a>
                <a href="https://www.instagram.com/calhas_franco" className="text-white" aria-label="Instagram">
                  <i className="bi bi-instagram fs-4"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a
        href="https://wa.me/5519996379679"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <Image
          src="/images/whatsapp-svgrepo-com.svg"
          alt="WhatsApp"
          width={50}
          height={50}
        />
      </a>
    </div>
  );
}
