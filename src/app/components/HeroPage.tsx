import styles from './heroPage.module.scss';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.textContainer}>
        <p className={styles.subtitle}>Previna-se de problemas!</p>
        <h1 className={styles.title}>
          <br /> Calhas Franco
        </h1>
        <p className={styles.description}>
          <strong>Faça seu melhor, mesmo que suas condições não sejam as melhores</strong>
        </p>
        <a href='https://wa.me/5519996379679'><button className={styles.button} >Orçamento sem custo</button></a>
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
