import type { Metadata } from "next";
import React from "react";
import Script from 'next/script';
import Image from 'next/image';
import ServicesCard from "./components/ServicesCard";
import ServicesList from "./components/ServicesList";
import PartnessList from "./components/PartnessList";
import { partnessList, servicesCard, servicesList } from "./constants/clientData";
import MapViewWrapper from "./components/MapViewWrapper";
import GoogleReviews from "./components/GoogleReviews";

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

      <header className="py-4 text-white" style={{ background: 'linear-gradient(to right, #004e92, #000428)' }}>
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          <div className="mb-4 mb-md-0">
            <Image src="/images/logo-contraste-removebg-preview.png" alt="Logo" width={300} height={150} />
          </div>

        </div>
      </header>

      <nav id="mainNav" className="navbar navbar-expand-lg d-flex">
        <div className="container-fluid justify-content-between align-items-center">
          <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
          </button>
          <div id="navbarResponsive" className="collapse navbar-collapse">
            <ul className="navbar-nav d-flex align-items-center gap-4">
              <li className="nav-item">
                <a className="nav-link" href="#quem-somos">👨‍💼 Quem somos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#servicos">🛠️ Serviços</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projetos">🏗️ Projetos</a>
              </li>
              <li className="nav-item d-flex align-items-center">
                <a className="nav-link d-flex align-items-center" href="https://www.instagram.com/calhas_franco" target="_blank">
                  <Image src="/images/instagram-1-svgrepo-com.svg" alt="Instagram" width={30} height={30} />
                  <span className="ms-2">Instagram</span>
                </a>
              </li>
              <li className="nav-item d-flex align-items-center">
                <a className="nav-link d-flex align-items-center" href="https://www.facebook.com/people/Calhas-Franco/61563856175010" target="_blank">
                  <Image src="/images/icons8-facebook-novo.svg" alt="Facebook" width={30} height={30} />
                  <span className="ms-2">Facebook</span>
                </a>
              </li>
              <li className="nav-item d-flex align-items-center">
                <a className="nav-link d-flex align-items-center" href="https://wa.me/5519996379679" target="_blank">
                  <Image src="/images/whatsapp-svgrepo-com.svg" alt="WhatsApp" width={30} height={30} />
                  <span className="ms-2">Obter Cotação</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="image-container d-none d-md-block" style={{ position: 'relative', width: '100%', height: '400px' }}>
        <Image
          src="/images/condonews-calha-1200x676.jpg"
          alt="WhatsApp"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      <section id='quem-somos' className="about-section">
        <div className="top-stripe"></div>
        <div className="about-content">
          <h2 className="section-title">QUEM SOMOS</h2>
          <p>A <strong>Calhas Franco</strong> é uma empresa especializada e consolidada na prestação de serviços na área industrial e residencial. Com <strong>18 anos de experiência</strong>, garantimos a qualidade e segurança necessárias para sua obra.</p>
          <h3 className="section-subtitle">ATUAÇÃO</h3>
          <p>Contamos com colaboradores altamente qualificados, equipamentos de corte, dobra e furação, trazendo assim qualidade e segurança para sua obra. Oferecemos uma gama de serviços para obras industriais e residenciais.</p>
        </div>
        <div className="bottom-stripe"></div>
      </section>

      <section id="servicos" className="services-section">
        <h2>Nossos Serviços</h2>
        <div className="services-container">
          {servicesCard.map((service) =>
            <ServicesCard key={service.label} label={service.label} link={service.link} />
          )}
        </div>
      </section>

      <section id="projetos" className="services-checklist">
        <div className="background-circle">
          <h2>Calhas Franco atua na execução de obras nos mais diversos seguimentos do mercado.</h2>
          <ul>
            {servicesList.map((service) =>
              <ServicesList key={service.label} label={service.label} />
            )}
          </ul>
        </div>
      </section>
      
      <section className="reviewSection">
        <GoogleReviews />
        
      </section>

      <section className="p-8 text-center hexagon-section">
        {partnessList.map((partness) =>
          <PartnessList key={partness.img} title={partness.title} img={partness.img} />
        )}
      </section>

      <section className="p-8 text-center">
        <h2 className="text-center mb-4">Onde estamos</h2>
        <MapViewWrapper />

        <section className="d-flex justify-content-center row" style={{ color: '#f1c40f' }}>
          <div className="text-center">
            <Image
              src="/images/favicon.png"
              alt="Logo Calhas Franco"
              width={300}
              height={160}
            />
          </div>
          <div>
            <h2>Serviços Especializados</h2>
            <h3>Calhas e Manutenções</h3>
          </div>
        </section>
      </section>

      <footer className="text-white py-5">
        <div className="container">
          <div className="row text-start">
            {/* Coluna 1 - Informações de contato */}
            <div className="col-md-4 mb-4">
              <h5 className="text-uppercase">CALHAS FRANCO</h5>
              <hr className="border-light w-25 mb-2 mt-1" />
              <p className="mb-1">calhasfranco.manutencoes@outlook.com.br</p>
              <p className="mb-1">
                Rua Ferrúcio Augusto Testa, 52<br />
                Vila Guilherme - Jaguariúna - SP
              </p>
              <p className="mb-0">(19) 99637-9679</p>
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
                <li>➜ Chapas de Aço</li>
              </ul>
            </div>

            {/* Coluna 3 - Redes sociais */}
            <div className="col-md-4 mb-4">
              <h5 className="text-uppercase">Acompanhe nossas redes</h5>
              <hr className="border-light w-25 mb-2 mt-1" />
              <div className="d-flex gap-2">
                <a href="https://www.facebook.com/people/Calhas-Franco/61563856175010" className="bg-white text-dark p-2 rounded icon-hover" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://g.co/kgs/2dHRuFS" className="bg-white text-dark p-2 rounded icon-hover" aria-label="Google">
                  <i className="bi bi-google"></i>
                </a>
                <a href="https://www.instagram.com/calhas_franco" className="bg-white text-dark p-2 rounded icon-hover" aria-label="Instagram icon-hover">
                  <i className="bi bi-instagram"></i>
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
