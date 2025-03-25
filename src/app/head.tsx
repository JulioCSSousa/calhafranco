export default function Head() {
    return (
      <>
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
        <script
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
      </>
    );
  }
  