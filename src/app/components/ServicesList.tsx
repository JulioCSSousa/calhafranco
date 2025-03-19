import Image from 'next/image';

interface ServicesListInterface {
  label: string;
}

export default function ServicesList({ label }: ServicesListInterface) {
  return (
    <li>
      <div className="mb-4 mb-md-0">
        <Image src="/images/success-green-check-mark-icon.svg" alt={label} width={30} height={30} />
      </div>
      <span className="check"></span> {label}
    </li>
  )
}
