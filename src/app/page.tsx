import type { Metadata } from "next";
import React from "react";
import Script from 'next/script';
import Image from 'next/image';
import ServicesCard from "./components/ServicesCard";
import ServicesList from "./components/ServicesList";
import PartnessList from "./components/PartnessList";
import { partnessList, servicesCard, servicesList } from "./constants/clientData";
import MapViewWrapper from "./components/MapViewWrapper";

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
          <div className="ms-md-5">
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a
                  href="https://maps.app.goo.gl/D5sBVZNGEtYMfkbS8"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                  className="d-flex align-items-center"
                >
                  <Image src="/images/geo-fence-svgrepo-com.svg" alt="Geo" width={30} height={30} />
                  <p className="mb-0 ms-2">Rua Ferrúcio Augusto Testa, 52, Vila Guilherme - Jaguariúna - SP</p>
                </a>
              </li>
              <li>
                <div className="d-flex align-items-center">
                  <span>🕒 Atendimento: Seg - Sex, 7:30 às 17:30 Sábado das 8:00 às 12:00</span>
                </div>
              </li>
            </ul>
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

      <section className="p-8 text-center hexagon-section">
        {partnessList.map((partness) =>
          <PartnessList key={partness.img} img={partness.img} />
        )}
      </section>

      <section className="p-8 text-center">
        <section className="map-section">
          <h2 className="text-center mb-4">Onde estamos</h2>
          <MapViewWrapper />
        </section>
      </section>

      <footer className="text-white py-4 text-center">
        <div className="circle-logo">
          <Image src={'/images/favicon.png'} alt="" width={300} height={160} />
        </div>
        <h2 className="text-3xl font-bold">Contato</h2>
        <p className="mt-4">Entre em contato conosco:</p>
        <p>Email: calhasfranco.manutencoes@outlook.com.br</p>
        <p>Telefone: (19) 99637-9679</p>
        <p>&copy; 2025 Calhas Franco - Todos os direitos reservados</p>
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
