import HexagonImage from "./Hexagon";

interface PartnessListInterface {
  title: string;
  img: string;
}

export default function PartnessList({ title, img }: PartnessListInterface) {
  return (
    <div className="hexagon-wrapper">
      <div className="partness-title">
        {title}
      </div>
      <HexagonImage src={img} alt={img} />
    </div>
  );
}
