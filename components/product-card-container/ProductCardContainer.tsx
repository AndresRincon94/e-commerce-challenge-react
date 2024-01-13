import Image from "next/image";
import Fruit from "../../interfaces/Fruit";
import ProductCard from "../product-card/ProductCard";

export default function ProductCardContainer({ fruits }: { fruits: Fruit[] }) {
  return (
    <div className="md:w-[90vw] w-[100vw] flex justify-center gap-4 flex-wrap mt-4">
      {fruits.map((fruit) => (
        <ProductCard key={fruit.id} fruit={fruit} />
      ))}
    </div>
  );
}
