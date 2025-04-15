'use client'

import { useState } from 'react'
import styles from './PartnessProducts.module.scss'
import Image from 'next/image'

const products = [
  { image: '/images/partnessProd/pp1.jpg', alt: 'Imagem de calhas'},
  { image: '/images/partnessProd/pp2.jpg', alt: 'Imagem de telha metálica'},
  { image: '/images/partnessProd/pp3.jpg', alt: 'Chapas de Aço'},
  { image: '/images/partnessProd/pp4.jpg', alt: 'Imagem de coifas'},
  { image: '/images/partnessProd/pp5.jpg', alt: 'Imagem de coifas'},
  { image: '/images/partnessProd/pp6.jpg', alt: 'Imagem de coifas'},
]

export default function PartnessProducts() {
  const [modalImage, setModalImage] = useState<string | null>(null)

  return (
    <>
      <section className={styles.productGrid}>
        {products.map((product, index) => (
          <div
            key={index}
            className={styles.productCardWrapper}
            onClick={() => setModalImage(product.image)}
          >
            <Image
              src={product.image}
              alt={product.alt}
              width={300}
              height={400}
              className={styles.productImage}
            />
          </div>
        ))}
      </section>

      {modalImage && (
        <div className={styles.modalOverlay} onClick={() => setModalImage(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setModalImage(null)}>
              &times;
            </button>
            <img src={modalImage} alt="Imagem em destaque" />
          </div>
        </div>
      )}
    </>
  )
}
