import Image from "next/image";
import Fruit from "../../interfaces/Fruit";

export default function ProductCard({ fruit }: { fruit: Fruit }) {
  return (
    <div
      className="flex flex-col justify-center items-center gap-2 p-2 border bg-white rounded"
    >
      <div className="w-64 h-52 relative rounded overflow-hidden">
        <Image src={fruit.image} alt={fruit.name} fill />
      </div>
      <h2 className="text-2xl font-bold">{fruit.name}</h2>
      <p className="text-sm">${fruit.price}</p>
      <button className="block w-full md:w-1/2 bg-red-600 hover:bg-red-800 py-1 rounded text-white">Buy</button>
    </div>
  );
}
