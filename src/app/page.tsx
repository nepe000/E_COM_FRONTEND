import Hero from "@/component/home/hero";
import SummerSale from "@/component/productlist/summerList";

import TrendingProducts from "@/component/productlist/trendingProducts";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="px-6">
        <SummerSale />

        <TrendingProducts />
      </div>
    </main>
  );
}
