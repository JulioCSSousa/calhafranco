import Image from 'next/image';

interface ServicesListInterface {
  label: string;
}

export default function ServicesList({ label }: ServicesListInterface) {
  return (
    <li className="flex items-center gap-2 md:gap-4">
      <div style={{marginLeft: '-40px'}}>
        <Image src="/images/success-green-check-mark-icon.svg" alt={label} width={30} height={30} />
      </div>
      <span>{label}</span>
    </li>
  );
}
