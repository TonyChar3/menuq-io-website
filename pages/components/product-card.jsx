import { useEffect, useState } from "react";
import RevealAnimation from "../animations/RevealAnimation";

export default function ProductCard({
  title,
  popular,
  billing,
  features,
  price,
}) {
  const [sub_price, setSubPrice] = useState(price);

  useEffect(() => {
    if (billing == "yearly") {
      if (price > 0.0) {
        setSubPrice(price * 12 - 40.0);
      }
    } else if (billing == "monthly") {
      setSubPrice(price);
    }
  }, [billing, price]);

  return (
    <>
      <RevealAnimation className="w-[78%] md:w-[45%] lg:w-[30%] my-2 px-4 py-6 flex flex-col justify-center items-center shadow-xl shadow-gray-300">
        <div className="relative w-full">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p
            className={`p-1 text-sm ${
              popular
                ? "absolute top-0 left-[38%] lg:left-[35%] z-[-10]"
                : "hidden"
            } bg-green-200 rounded-lg font-light text-gray-600`}
          >
            hot 🔥
          </p>
        </div>

        <div className="w-[80%] my-4 flex flex-row justify-start items-center">
          <p className="text-3xl mr-3 font-medium">$ {sub_price}</p>
          <div className="font-light text-xs text-gray-500">
            <p>per user</p>
            <p>per {billing == "monthly" ? "month" : "year"}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-[80%] h-[1px] my-2 bg-gray-200"></div>

        <div className="w-full my-4">
          <h3 className="font-light text-gray-800">Features</h3>
          <ul className="w-full my-2 flex flex-col justify-center items-center">
            <li className="p-2 flex flex-row justify-center items-center break-words wrap-word">
              <i class="bi bi-check-circle mr-4 text-lg text-green-500"></i>
              <span className="font-medium text-lg text-gray-600">
                so called feature
              </span>
            </li>
            <li className="p-2 flex flex-row justify-center items-center break-words wrap-word">
              <i class="bi bi-check-circle mr-4 text-lg text-green-500"></i>
              <span className="font-medium text-lg text-gray-600">
                so called feature
              </span>
            </li>
            <li className="p-2 flex flex-row justify-center items-center break-words wrap-word">
              <i class="bi bi-check-circle mr-4 text-lg text-green-500"></i>
              <span className="font-medium text-lg text-gray-600">
                so called feature
              </span>
            </li>
            <li className="p-2 flex flex-row justify-center items-center break-words wrap-word">
              <i class="bi bi-check-circle mr-4 text-lg text-green-500"></i>
              <span className="font-medium text-lg text-gray-600">
                so called feature
              </span>
            </li>
          </ul>
        </div>

        <button className="w-full mt-2 p-2 font-bold text-white bg-black active:scale-[0.90] transition-all ease duration-300">
          Choose {title}
        </button>
      </RevealAnimation>
    </>
  );
}
