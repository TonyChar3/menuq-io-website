import ProductCard from "./components/product-card";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import RevealAnimation from "./animations/RevealAnimation";
import ScrollToTop from "./components/scrolltoTop";

export default function Billing() {
  const [active_billing, setActiveBilling] = useState("monthly");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ScrollToTop />
      <motion.div
        className="md:h-[75%] lg:h-full lg:pb-8 flex flex-col justify-center items-center"
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

        {/* Message to user */}
        <div className="hidden md:flex w-[65%] lg:w-[30%] mb-8 lg:mt-6 flex-row justify-center items-center">
          <i class="bi bi-info-circle text-4xl mr-4 text-red-400"></i>
          <div className="w-6 lg:w-8 h-[95%] bg-red-400 mr-4"></div>
          <p className="lg:text-xl font-light">
            Please note that for large businesses, please contact us to
            negotiate a special package tailored to your specific needs. Our
            team will work with you to create a customized solution that meets
            your unique requirements and helps you achieve your goals.
          </p>
        </div>
      </motion.div>
    </>
  );
}
