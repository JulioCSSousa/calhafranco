import Image from 'next/image';

interface ServicesListInterface {
  label: string;
}

export default function ServicesList({ label }: ServicesListInterface) {
  return (
    
    <li className="flex items-center ">
      <div >
        <Image src="/images/success-green-check-mark-icon.svg" alt={label} width={30} height={30} />
      </div>
      <div style={{marginLeft: '20px'}}>
        <span style={{marginLeft: '10px'}}>{label}</span>
      </div>
      
    </li>
  );
}
