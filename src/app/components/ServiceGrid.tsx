import styles from './ServiceGrid.module.scss'
import ServiceCard from './ServiceCard'

const services = [
  {
    image: '/images/calhas-e-rufos.jpg',
    alt: 'Imagem de calhas',
    title: 'Calhas e Rufos',
    description: 'Utilizados para proteger a estrutura e evitar problemas como <strong>alagamentos</strong>, <strong>rachaduras</strong> e <strong>corrosão</strong>.'
  },
  {
    image: '/images/telhametalica.png',
    alt: 'Imagem de telha metalica',
    title: 'Telhas Metálicas',
    description: 'Utilizadas para <strong>cobrir</strong>, <strong>fechar</strong> construções, como galpões, residências, salões de festas, eventos e também E também: <strong>Telhas Termoacústicas sanduíche, semi sanduíche, Galvanizada, Galvalume com pintura eletrostática na cor.</strong>'
  },
  {
    image: '/images/chapasdeaco.jpg',
    alt: 'Chapas de Aço',
    title: 'Chapas de Aço',
    description: 'Realizamos a venda de chapas do tipo: <strong>galvanizada, pré-pintada branca e preta, alúminio e galvalume.</strong>'
  },
  {
    image: '/images/tubocoifas.jpg',
    alt: 'Imagem de calhas',
    title: 'Coifas e Dutos',
    description: 'Indispensáveis para <strong>ventilação</strong> e <strong>exaustão</strong> eficientes em cozinhas e ambientes industriais.'
  },
]

export default function ServiceGrid() {
  return (
    <section className={styles.serviceGrid}>
      {services.map((service, index) => (
        <div key={index} className={styles.serviceCardWrapper}>
          <ServiceCard {...service} />
        </div>
      ))}
    </section>
  )
}
