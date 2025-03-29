import Image from 'next/image';

interface ServicesListInterface {
  label: string;
}

export default function ServicesListPage2({ label }: ServicesListInterface) {
  return (
    <li className="d-flex align-items-start">
  <div className="icon-column">
    <Image
      src="/images/success-green-check-mark-icon.svg"
      alt={label}
      width={24}
      height={24}
    />
  </div>
  <div className="text-column">
    <span className="fw-semibold text-light">{label}</span>
  </div>
</li>

  );
}
