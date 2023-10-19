import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

function PopularProducts() {
  return (
    <section id="products" className="max-container max-sm:mt-0">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold max-sm:text-[36px] max-sm:leading-[42px]">
          Unsere <span className="text-coral-red">beliebten</span> Produkte
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Erleben Sie erstklassige Qualität und Stil mit unseren begehrten
          Auswahlmöglichkeiten. Entdecken Sie eine Welt des Komforts, Designs
          und Werts.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
}

export default PopularProducts;
