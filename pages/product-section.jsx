import ProductCard from "./components/product-card";

export default function ProductSection() {
  return (
    <>
      <div class="w-full py-8 px-1 flex flex-col justify-center items-center">
        <ProductCard />
        <ProductCard />

        {/* Montly / Yearly pricing buttons */}
        <div>
          <button>Monthly billing</button>
          <button>Yearly billing</button>
        </div>
      </div>
    </>
  );
}
