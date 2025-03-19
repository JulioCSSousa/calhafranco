import Image from "next/image";
import "./Hexagon.scss";

export default function HexagonImage({ src, alt }) {
  return (
    <div className="hexagon">
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );
}
