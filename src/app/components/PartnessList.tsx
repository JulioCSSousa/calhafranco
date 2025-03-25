import HexagonImage from "./Hexagon";

interface PartnessListInterface {
  title: string;
  img: string;
}

export default function PartnessList({ title, img }: PartnessListInterface) {
  return (
    <div>
      <div className="partness-title" style={{color: '#004e92', fontFamily: 'inherit', fontWeight: 'bold' ,fontSize: '20px', marginBottom: '10px'}}>
        {title}
      </div>
      <HexagonImage src={img} alt={img} />
    </div>
  )
}
