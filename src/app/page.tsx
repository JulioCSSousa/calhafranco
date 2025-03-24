import React from "react";
import Head from "next/head";
import Image from 'next/image';
import ServicesCard from "./components/ServicesCard";
import ServicesList from "./components/ServicesList";
import PartnessList from "./components/PartnessList";
import { partnessList, servicesCard, servicesList } from "./constants/clientData";
import Script from 'next/script';

export default function Home() {

  return (
    <div>
    <Head>
      <title>Calhas Franco - Instalação de Calhas e Serviços Industriais em Jaguariuna</title>
      <meta name="description" content="Especialistas em calhas, rufos, estruturas metálicas, drywall antichamas, telhados e isolamento térmico." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.calhasfranco.com.br/" />
      <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
      <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Dados estruturados para SEO Local */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
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
          "sameAs": [
            "https://www.instagram.com/calhas_franco"
          ]
        })
      }} />
    </Head>

      <header className="py-4 text-white" style={{ background: 'linear-gradient(to right, #004e92, #000428)' }}>
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          {/* Logo */}
          <div className="mb-4 mb-md-0">
            <Image src="/images/logo-contraste-removebg-preview.png" alt="Logo" width={300} height={150} />
          </div>

          {/* Informações */}
          <div className="ms-md-5">
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <div className="d-flex align-items-center">
                  <Image src="/images/geo-fence-svgrepo-com.svg" alt="Geo" width={30} height={30} />
                  <p className="mb-0 ms-2">Rua Ferrúcio Augusto Testa, 52, Vila Guilherme - Jaguariúna - SP</p>
                </div>
              </li>
              <li>
                <div className="d-flex align-items-center">
                  <span>🕒 Atendimento: Seg - Sex, 8h às 18h</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* Navbar */}
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
                  <Image
                    src="/images/instagram-1-svgrepo-com.svg"
                    alt="WhatsApp"
                    width={30}
                    height={30}
                  />
                  <span className="ms-2">Instagram</span>
                </a>
              </li>
              <li className="nav-item d-flex align-items-center">
                <a className="nav-link d-flex align-items-center" href="https://wa.me/5519996379679" target="_blank">
                  <Image
                    src="/images/whatsapp-svgrepo-com.svg"
                    alt="WhatsApp"
                    width={30}
                    height={30}
                  />
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

      {/* About-Us */}
      <section id='quem-somos' className="about-section">
        <div className="top-stripe"></div>

        <div className="about-content">
          <h2 className="section-title">QUEM SOMOS</h2>
          <p>
            A <strong>Calhas Franco</strong> é uma empresa especializada e consolidada na prestação de serviços na área industrial e residencial.
            Com <strong>18 anos de experiência</strong>, garantimos a qualidade e segurança necessárias para sua obra.
          </p>

          <h3 className="section-subtitle">ATUAÇÃO</h3>
          <p>
            Contamos com colaboradores altamente qualificados, equipamentos de corte, dobra e furação, trazendo assim qualidade e segurança para sua obra.
            Oferecemos uma gama de serviços para obras industriais e residenciais.
          </p>
        </div>

        <div className="bottom-stripe"></div>
      </section>

      {/*Services*/}
      <section id="servicos" className="services-section">
        <h2>Nossos Serviços</h2>
        <div className="services-container">
          {servicesCard.map((service) =>
            <ServicesCard key={service.label} label={service.label} link={service.link} />
          )}
        </div>
      </section>

      {/*Services2*/}
      <section id="projetos" className="services-checklist">
        <div className="background-circle">
          <h2>Calhas Franco atua na execução de obras nos mais diversos seguimentos do mercado.</h2>

          <ul>
            {servicesList.map((service) =>
              <ServicesList key={service.label} label={service.label} />
            )}
          </ul>
        </div>

        {/*Partness*/}
      </section><section className="p-8 text-center hexagon-section">
        {partnessList.map((partness) =>
          <PartnessList key={partness.img} img={partness.img} />
        )}
      </section>


      <section className="p-8 text-center">
       
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
    </div>
  );
}
