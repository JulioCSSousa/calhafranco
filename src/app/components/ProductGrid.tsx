import styles from './ProductGrid.module.scss'
import ExpandableCard from './ExpandableCard'

const products = [
  {
    image: '/images/calhasrufos.jpg',
    alt: 'Imagem de calhas',
    title: 'Calhas',
    description: `<p><strong>Calhas, Rufos, Pingadeiras e Condutores</strong></p>

<p><strong>O que são e para que servem?</strong></p>

<p>Calhas, rufos, pingadeiras e condutores são componentes de um sistema de drenagem de água de chuva.</p>

<p><strong>CALHAS:</strong> Coletam a água da chuva que escorre pelo telhado. Direcionam essa água para os condutores verticais e evitam respingos no alicerce da parede.</p>

<p><strong>RUFOS:</strong> São instalados em telhados e paredes, impedindo que a chuva infiltre em telhas, lajes e revestimentos. Eles protegem a estrutura da parede que fica exposta em um telhado ou cobertura.</p>

<p><strong>PINGADEIRAS:</strong> São utilizadas no muro e no acabamento da platibanda. Elas desviam a água da chuva, impedindo que ela escorra pelas paredes. Servem tanto para fins estéticos quanto para impermeabilizar muros, paredões e platibandas de fachada.</p>

<p><strong>CONDUTORES:</strong> Funcionam como complemento das calhas. Eles direcionam adequadamente o fluxo da água para fora da edificação ou para um sistema de coleta, garantindo a drenagem correta.</p>

`

  },
  {
    image: '/images/telhas.jpg',
    alt: 'Imagem de telha metalica',
    title: 'Telhas',
    description: `<p><strong>Telhas Termoacústicas</strong></p>

<p>As telhas termoacústicas, também conhecidas como telhas sanduíche, são utilizadas para proporcionar isolamento térmico e acústico. Elas podem ser aplicadas em telhados, divisórias, fachadas, vedações e fechamentos laterais de galpões.</p>

<p><strong>Vantagens:</strong> Essas telhas proporcionam maior controle da temperatura, ajudam a economizar energia, são leves, duráveis e exigem pouca manutenção. Elas não mofam e não servem de alimento para insetos e microrganismos. Podem ser utilizadas em telhados com pouca inclinação, são fabricadas sob medida e podem ser pintadas com tinta eletrostática.</p>

<p><strong>Composição:</strong> As telhas sanduíche são compostas por duas chapas metálicas com um isolante no meio. Esse isolante pode ser feito de isopor (EPS – poliestireno expandido) ou poliuretano.</p>

<p><strong>Usos:</strong> São indicadas para residências, galpões, lojas e outros tipos de edificações. São ideais para obras que utilizam métodos de construção como pré-moldado, estrutura metálica, steel frame e drywall.</p>
`
  },
  {
    image: '/images/chapasdeaco.jpg',
    alt: 'Chapas de Aço',
    title: 'Chapas de Aço',
    description: `<p><strong>Chapas em Aço:</strong> Galvanizada, Galvalume, Pré-Pintada e com Pintura Eletrostática.</p>

<p><strong>Diferença:</strong> As <strong>galvanizadas</strong> são revestidas apenas com zinco, enquanto as <strong>galvalume</strong> recebem revestimento de zinco, alumínio e silício.</p>

<p><strong>Composição:</strong> As chapas <strong>galvanizadas</strong> são feitas de aço revestido com zinco fundido. Já as chapas <strong>galvalume</strong> são formadas por aço com revestimento de zinco, alumínio e silício.</p>

<p><strong>Vantagens do Galvalume:</strong> São mais resistentes e duráveis, oferecem melhor aderência para tintas e têm alta refletividade térmica, contribuindo para o conforto ambiental.</p>

<p><strong>Processamento:</strong> As chapas <strong>galvalume</strong> passam por um banho metálico composto de zinco, alumínio e silício. As <strong>galvanizadas</strong> passam por tratamento químico com zinco fundido.</p>

<p><strong>Aplicações:</strong> As chapas galvalume são ideais para concertinas e coberturas, pois oferecem longa durabilidade e exigem menos manutenção.</p>

<p><strong>Pré-Pintada:</strong> Esse tipo de chapa é revestido com tinta ainda na forma de bobina, antes da perfilação. A pintura é uniforme, resistente e indicada para obras de alto padrão.</p>

<p><strong>Pintura Eletrostática:</strong> Utiliza eletricidade estática para aplicar tinta na superfície. É resistente à corrosão, abrasão e riscos, sendo uma opção durável, segura e ambientalmente correta.</p>
`
  },
  {
    image: '/images/coifasetub.jpg',
    alt: 'Imagem de calhas',
    title: 'Coifas e Tubulações',
    description: `
    <p><strong>Coifa e Tubulações</strong></p>

<p>As <strong>COIFAS</strong> e <strong>TUBULAÇÕES</strong> são usadas para eliminar odores, vapores, fumaças e gorduras da cozinha, indústria e comércio, além de renovar o ar e isolar tubos.</p>

<p><strong>COIFAS:</strong> São eletrodomésticos que captam o ar viciado e o retiram da cozinha, indústria ou comércio. Evitam que o ambiente fique com cheiro forte e engordurado, além de renovar o ar e facilitar a limpeza. São essenciais para manter o local limpo e preservar móveis, eletrodomésticos e superfícies por mais tempo. Podem ser fabricadas em material galvanizado, galvalume, inox ou alumínio, garantindo resistência e durabilidade.</p>

<p><strong>TUBULAÇÕES:</strong> São utilizadas para conduzir o ar retirado pelas coifas. Também podem ser fabricadas em galvanizado, galvalume, inox ou alumínio, garantindo robustez e longa vida útil. Mesmo com custo inicial mais alto, exigem pouca manutenção. São ideais para conduzir o ar de exaustores ou sistemas de insuflamento. O comprimento, formato e diâmetro dos dutos devem ser calculados com precisão técnica.</p>

<p><strong>COIFAS DE VEDAÇÃO:</strong> São aplicadas para isolar e vedar tubos na passagem de lajes. Garantem a impermeabilização entre andares e um acabamento mais eficiente nas instalações.</p>

  `
  }
]

export default function ProductGrid() {
  return (
    <section className={styles.productGrid}>
      {products.map((product, index) => (
        <div key={index} className={styles.productCardWrapper}>
          <ExpandableCard {...product} />
        </div>
      ))}
    </section>
  )
}
