import Image from 'next/image';

interface ServicesCardInterface {
  label: string; 
  link: string;
}

export default function ServicesCard({ label, link }: ServicesCardInterface) {
  return (
    <div className="service-card">
      <Image src={link} alt={label} width={400} height={100} />
      <h3>{label}</h3>
    </div>
  )
}
