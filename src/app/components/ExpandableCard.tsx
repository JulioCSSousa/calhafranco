'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './ExpandableCard.module.scss';

interface ExpandableCardProps {
  image: string;
  alt: string;
  title: string;
  description: string; // HTML string
}

export default function ExpandableCard({ image, alt, title, description }: ExpandableCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.card}>
      <Image src={image} alt={alt} width={400} height={220} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>

      <div
        className={`${styles.description} ${expanded ? styles.expanded : ''}`}
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <button className={styles.toggleButton} onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Ver menos' : 'Ver mais'}
      </button>
    </div>
  );
}
