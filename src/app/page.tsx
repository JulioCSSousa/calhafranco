import React from "react";
import Head from "next/head";
import Image from 'next/image';
import HexagonImage from "./components/Hexagon";

export default function Home() {

  return (
    <div>
      <Head>
        <title>Calhas Franco - Qualidade e Segurança</title>
        <title>Calhas Franco - Estruturas Metálicas e Serviços</title>
        <meta name="description" content="Especialistas em calhas, rufos, estruturas metálicas, drywall antichamas, telhados e isolamento térmico." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.calhasfranco.com.br/" />
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
                  <p className="mb-0 ms-2">Rua das Acácias, 123 - Centro, São Paulo - SP</p>
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

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="navbarResponsive" className="collapse navbar-collapse">
            <ul className="navbar-nav d-flex align-items-center gap-4">
              <li className="nav-item">
                <a className="nav-link" href="#about">👨‍💼 Quem somos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">🛠️ Serviços</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">🏗️ Projetos</a>
              </li>
              <li className="nav-item d-flex align-items-center">
                <a className="nav-link d-flex align-items-center" href="https://wa.me/SEUNUMERO" target="_blank">
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
                <a className="nav-link d-flex align-items-center" href="" target="_blank">
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
      <section className="about-section">
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
      <section className="services-section">
        <h2>Nossos Serviços</h2>
        <div className="services-container">

          <div className="service-card">
            <Image src="/images/coifaMetalica.png" alt="Estruturas Metálicas" width={400} height={220} />
            <h3>Estruturas Metálicas</h3>
          </div>

          <div className="service-card">
            <Image src="/images/exagonos-img.png" alt="Calhas e Rufos" width={400} height={220} />
            <h3>Calhas e Rufos</h3>
          </div>

          <div className="service-card">
            <Image src="/images/drywall.png" alt="Drywall Antichamas" width={400} height={220} />
            <h3>Drywall Antichamas</h3>
          </div>

          <div className="service-card">
            <Image src="/images/exaustores.png" alt="Tubulações / Exaustores" width={400} height={220} />
            <h3>Tubulações / Exaustores</h3>
          </div>

          <div className="service-card">
            <Image src="/images/telhasecalhas.png" alt="Telhas e Calhas" width={400} height={220} />
            <h3>Telhas e Calhas</h3>
          </div>

          <div className="service-card">
            <Image src="/images/servicoscalhas.png" alt="Isolamentos Térmicos" width={400} height={220} />
            <h3>Isolamentos Térmicos</h3>
          </div>

        </div>
      </section>

      {/*Services2*/}
      <section className="services-checklist">
        <div className="background-circle">
          <h2>Calhas Franco atua na execução de obras nos mais diversos seguimentos do mercado.</h2>
          <ul>
            <li>
              <div className="mb-4 mb-md-0">
                <Image src="/images/success-green-check-mark-icon.svg" alt="" width={30} height={30} />
              </div>
              <span className="check"></span> Instalação e manutenção de Calhas e Rufos / Industriais e Residenciais
            </li>
            <li>
              <div className="mb-4 mb-md-0">
                <Image src="/images/success-green-check-mark-icon.svg" alt="" width={30} height={30} />
              </div>
              <span className="check"></span> Tubulações, Coifas e Condutores
            </li>
            <li>
              <div className="mb-4 mb-md-0">
                <Image src="/images/success-green-check-mark-icon.svg" alt="" width={30} height={30} />
              </div>
              <span className="check"></span> Instalação de Sistemas de Exaustão
            </li>
            <li>
              <div className="mb-4 mb-md-0">
                <Image src="/images/success-green-check-mark-icon.svg" alt="" width={30} height={30} />
              </div>
              <span className="check"></span> Estruturas Metálicas
            </li>
            <li>
              <div className="mb-4 mb-md-0">
                <Image src="/images/success-green-check-mark-icon.svg" alt="" width={30} height={30} />
              </div>
              <span className="check"></span> Instalação de Drywall / Placas Divisórias
            </li>
            <li>
              <div className="mb-4 mb-md-0">
                <Image src="/images/success-green-check-mark-icon.svg" alt="" width={30} height={30} />
              </div>
              <span className="check"></span> Manutenção Civil / Projetos
            </li>
            <li>
              <div className="mb-4 mb-md-0">
                <Image src="/images/success-green-check-mark-icon.svg" alt="" width={30} height={30} />
              </div>
              <span className="check"></span> Isolamentos Térmicos / Quente / Frio
            </li>
            <li>
              <div className="mb-4 mb-md-0">
                <Image src="/images/success-green-check-mark-icon.svg" alt="" width={30} height={30} />
              </div>
              <span className="check"></span> Impermeabilização de Lajes / Telhados
            </li>
            <li>
              <div className="mb-4 mb-md-0">
                <Image src="/images/success-green-check-mark-icon.svg" alt="" width={30} height={30} />
              </div>
              <span className="check"></span> Laudos Técnicos Cautelar / Industrial / Residencial
            </li>
            <li>
              <div className="mb-4 mb-md-0">
                <Image src="/images/success-green-check-mark-icon.svg" alt="" width={30} height={30} />
              </div>
              <span className="check"></span> Troca de Telhados e Manutenções Gerais
            </li>
          </ul>
        </div>

        {/*Partness*/}
      </section><section className="p-8 text-center hexagon-section">
        <div className="hexagon">
          <HexagonImage src="/images/comp1.png" alt="" />
        </div>
        <div className="hexagon">
          <HexagonImage src="/images/comp2.png" alt="" />
        </div>
        <div className="hexagon">
          <HexagonImage src="/images/comp3.png" alt="" />
        </div>
        <div className="hexagon">
          <HexagonImage src="/images/comp4.png" alt="" />
        </div>
        <div className="hexagon">
          <HexagonImage src="/images/comp5.png" alt="" />
        </div>
        <div className="hexagon">
          <HexagonImage src="/images/comp6.png" alt="" />
        </div>
        <div className="hexagon">
          <HexagonImage src="/images/comp7.png" alt="" />
        </div>
        <div className="hexagon">
          <HexagonImage src="/images/comp8.png" alt="" />
        </div>
        <div className="hexagon">
          <HexagonImage src="/images/comp9.png" alt="" />
        </div>
        <div className="hexagon">
          <HexagonImage src="/images/comp10.png" alt="" />
        </div>
        <div className="hexagon">
          <HexagonImage src="/images/comp11.png" alt="" />
        </div>
        <div className="hexagon">
          <HexagonImage src="/images/comp12.png" alt="" />
        </div>
        <div className="hexagon">
          <HexagonImage src="/images/comp13.png" alt="" />
        </div>
        <div className="hexagon">
          <HexagonImage src="/images/comp14.png" alt="" />
        </div>
      </section>


      <section className="p-8 text-center">
        <h2 className="text-3xl font-bold">Contato</h2>
        <p className="mt-4">Entre em contato conosco:</p>
        <p>Email: reformas.franco@outlook.com.br</p>
        <p>Telefone: (19) 99637-9679</p>
      </section>

      <footer className="bg-blue-600 text-white py-4 text-center">
        <p>&copy; 2025 Calhas Franco - Todos os direitos reservados</p>
      </footer>
    </div>
  );
}
