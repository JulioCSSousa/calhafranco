import styles from './heroPage.module.scss';
export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.textContainer}>
        <img
          src="/images/logo-contraste-removebg-preview.png"
          alt="Logo"
          width={300}
          height={150}
        />
        <p className={styles.subtitle}>Previna-se de problemas!</p>
        <a href="https://wa.me/5519996379679">
          <button className={styles.button}>Orçamento sem compromisso</button>
        </a>
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.videoWrapper}>
          <video controls muted loop playsInline className={styles.video}>
            <source src="/videos/video-intro.mp4" type="video/mp4" />
            Seu navegador não suporta vídeo.
          </video>
        </div>
      </div>
    </section>
  );
}
