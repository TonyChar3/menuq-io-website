import ProductCard from "./components/product-card";
import { useState } from "react";
import { motion } from "framer-motion";
import RevealAnimation from "./animations/RevealAnimation";

export default function ProductSection() {
  const [active_billing, setActiveBilling] = useState("monthly");
  return (
    <>
      <motion.div
        className="md:h-[75%] lg:h-full flex flex-col justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        {/* Montly / Yearly pricing buttons */}
        <RevealAnimation className="w-[70%] md:w-[40%] lg:w-[20%] mt-4 md:mt-0 md:mb-4 mx-auto p-1 md:p-2 flex flex-row justify-around items-center shadow-md shadow-gray-300 rounded-lg">
          <button
            onClick={() => setActiveBilling("monthly")}
            className={`p-2 rounded-lg active:scale-[0.90] transition-all ease duration-300 ${
              active_billing == "monthly"
                ? "bg-gray-300 shadow-md shadow-gray-200 font-bold text-gray-600"
                : "font-light text-gray-500"
            }`}
          >
            Monthly billing
          </button>
          <button
            onClick={() => setActiveBilling("yearly")}
            className={`p-2 rounded-lg active:scale-[0.90] transition-all ease duration-300 ${
              active_billing == "yearly"
                ? "bg-gray-300 shadow-md shadow-gray-200 font-bold text-gray-600"
                : "font-light text-gray-500"
            }`}
          >
            Yearly billing
          </button>
        </RevealAnimation>

        <div class="w-full lg:w-[80%] pt-2 pb-8 px-1 flex flex-col md:flex-row justify-center md:justify-around items-center">
          <ProductCard
            title="Basic"
            popular={false}
            price={0.0}
            billing={active_billing}
          />
          <ProductCard
            title="Owner"
            popular={true}
            price={10.0}
            billing={active_billing}
          />
        </div>
      </motion.div>
    </>
  );
}
