import Image from "next/image";
import "./Hexagon.scss";

interface HexagonImageProps {
  src: string;
  alt: string;
}

export default function HexagonImage({ src, alt }: HexagonImageProps) {
  return (
    <div className="hexagon">
      <Image src={src} alt={alt} layout="fill" />
    </div>
  );
}
