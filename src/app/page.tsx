import type { Metadata } from "next";
import React from "react";

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
    <div style={styles.body}>
      <div>
        <img
          src="images/ChatGPT_Image_May_2__2025__07_57_16_PM-removebg-preview.png"
          alt="Fora do ar"
          style={styles.image}
        />
        <h1 style={styles.title}>Página Temporariamente Fora do Ar</h1>
        <p style={styles.text}>
          Estamos passando por uma manutenção para melhorar sua experiência.
          <br />
          Por favor, volte em breve.
        </p>
      </div>
    </div>
  );
}

const styles = {
  body: {
    minHeight: '100vh',
    background: 'linear-gradient(145deg, #e0e0e0, #ffffff)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  container: {
    maxWidth: '600px',
    backgroundColor: '#fff',
    padding: '40px 20px',
    borderRadius: '20px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    textAlign: 'center',
  },
  image: {
    maxWidth: '200px',
    marginBottom: '20px',
  },
  title: {
    fontSize: '2rem',
    color: '#d32f2f',
    marginBottom: '10px',
  },
  text: {
    fontSize: '1.1rem',
    color: '#555',
    lineHeight: '1.6',
  },
}
