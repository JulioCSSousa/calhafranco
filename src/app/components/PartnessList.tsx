import HexagonImage from "./Hexagon";

interface PartnessListInterface {
  img: string;
}

export default function PartnessList({ img }: PartnessListInterface) {
  return (
    <div className="hexagon">
      <HexagonImage src={img} alt={img} />
    </div>
  )
}
