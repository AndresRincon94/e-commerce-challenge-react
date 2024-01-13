import { getFruits } from '../../services/shop.service';
import ProductCardContainer from '../../components/product-card-container/ProductCardContainer';

export default async function ShopPage() {
  const fruits = await getFruits();
  return (
    <main className="flex min-h-[88vh] w-[100vw] justify-center gap-3 flex-wrap bg-gray-200">
      <ProductCardContainer fruits={fruits} />
    </main>
  )
}
