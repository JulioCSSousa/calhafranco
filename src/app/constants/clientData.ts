interface servicesCardInterface {
  label: string;
  link: string;
}

interface servicesListInterface {
  label: string;
}

interface partnessList {
  img: string;
}

export const servicesCard: servicesCardInterface[] = [
  { label: "Instalação de cobertura metálica industrial pela Calhas Franco", link: "/images/coifaMetalica.png" },
  { label: "Instalação de Calhas Rufos industrial pela Calhas Franco", link: "/images/exagonos-img.png" },
  { label: "Instalação de Drywall Antichamas industrial pela Calhas Franco", link: "/images/drywall.png" },
  { label: "Instalação de Tubulações e Exaustores industrial pela Calhas Franco", link: "/images/exaustores.png" },
  { label: "Instalação de Telhas e Calhas pela Calhas Franco", link: "/images/telhasecalhas.png" },
  { label: "Instalação de Isolamentos Térmicos pela Calhas Franco", link: "/images/servicoscalhas.png" },
]

export const servicesList: servicesListInterface[] = [
  { label: "Instalação e manutenção de Calhas / Rufos" },
  { label: "Tubulações, Coifas e Condutores" },
  { label: "Instalação de Sistemas de Exaustão" },
  { label: "Estruturas Metálicas" },
  { label: "Instalação de Drywall / Placas" },
  { label: "Manutenção Civil / Projetos" },
  { label: "Isolamentos Térmicos / Quente / Frio" },
  { label: "Impermeabilização de Lajes / Telhados" },
  { label: "Laudos Técnicos Cautelar " },
  { label: "Troca de Telhados e Manutenções Gerais" },
]

export const partnessList = [
  { title: "Condomínio Villa Guedes",
    img: "/images/comp1.png" },
  { title: "Hotel Leon Park",
    img: "/images/comp2.png" },
  { title: "Empresa BASF",
    img: "/images/comp3.png" },
  { title: "Parque Empresarial",
    img: "/images/comp4.png" },
  { title: "Veilling Holambra",
    img: "/images/comp5.png" },
  { title: "Condomínio Tamboré",
    img: "/images/comp6.png" },
  { title: "Cond. Lago da Barra",
    img: "/images/comp7.png" },
  { title: "Nicole Calçados",
    img: "/images/comp8.png" },
  { title: "Empresa Sky",
    img: "/images/comp9.png" },
  { title: "Matiz Hotel",
    img: "/images/comp10.png" },
  { title: "Lojão das Fábricas",
    img: "/images/comp11.png" },
  { title: "Swiss Pasrk",
    img: "/images/comp12.png" },
  { title: "Empresa Arcor",
    img: "/images/comp13.png" },
  { title: "Empresa P&G",
    img: "/images/comp14.png" },
  
]
