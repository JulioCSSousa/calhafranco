import styles from './heroPage.module.scss';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.textContainer}>
      <img src="/images/logo-contraste-removebg-preview.png" alt="Logo" width={300} height={150} />
        <p className={styles.subtitle}>Previna-se de problemas!</p>
        <a href='https://wa.me/5519996379679'><button className={styles.button} >Orçamento sem compromisso</button></a>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="/images/test.jpg"
          alt="Imagem de casa com piscina e logo Inova Calhas"
          className={styles.image}
        />
      </div>
    </section>
  );
}
