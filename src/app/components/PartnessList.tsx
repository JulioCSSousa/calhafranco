import HexagonImage from "./Hexagon";

interface PartnessListInterface {
  img: string;
}

export default function PartnessList({ img }: PartnessListInterface) {
  return (
    <div>
      <HexagonImage src={img} alt={img} />
    </div>
  )
}
