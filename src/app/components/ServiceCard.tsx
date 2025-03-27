import styles from './ServiceCard.module.scss';

interface ServiceCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
}

export default function ServiceCard({ image, alt, title, description }: ServiceCardProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt={alt} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
}
