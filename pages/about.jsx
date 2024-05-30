import RevealAnimation from "./animations/RevealAnimation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <motion.div
        className="w-full lg:h-[95%] pt-8 md:pt-10 pb-2 flex flex-col justify-center 2xl:justify-start items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        <h2 className="mr-auto mb-2 mx-4 font-bold text-gray-600 text-4xl md:text-5xl md:mb-4 lg:text-6xl lg:mb-6">
          About MQ.io
        </h2>

        {/* Divider */}
        <div className="w-[90%] lg:w-[50%] lg:mr-auto lg:ml-4 h-[1px] bg-gray-300"></div>

        <div className="lg:flex lg:flex-row lg:justify-center lg:items-center lg:my-6 2xl:my-10">
          {/* Images */}
          <RevealAnimation className="w-full mb-2 mt-6 flex flex-row justify-center items-center">
            <img
              src="https://ik.imagekit.io/bqofr3ncj/tr:w-200/ProductsImage_2023-12-09_20_46/women-sitting-meditating_glxne0.jpg?updatedAt=1702251636725"
              alt="About us image of the team"
              width="100"
              height="100"
              draggable="false"
              className="relative left-[6%] rounded-full w-[30%] h-[30%] 2xl:w-[35%] shadow-lg shadow-gray-500"
            />
            <img
              src="https://ik.imagekit.io/bqofr3ncj/tr:w-200/ProductsImage_2023-12-09_20_46/women-sitting-meditating_glxne0.jpg?updatedAt=1702251636725"
              alt="About us image of the team"
              width="100"
              height="100"
              draggable="false"
              className="relative rounded-full w-[30%] h-[30%] 2xl:w-[35%] shadow-lg shadow-gray-500"
            />
            <img
              src="https://ik.imagekit.io/bqofr3ncj/tr:w-200/ProductsImage_2023-12-09_20_46/women-sitting-meditating_glxne0.jpg?updatedAt=1702251636725"
              alt="About us image of the team"
              width="100"
              height="100"
              draggable="false"
              className="relative right-[5%] rounded-full w-[30%] h-[30%] 2xl:w-[35%] shadow-lg shadow-gray-500"
            />
          </RevealAnimation>

          <div className="w-full p-3">
            <h4 className="my-4 font-bold text-gray-600 text-2xl md:text-3xl 2xl:text-4xl md:w-[80%] md:ml-4 md:my-6 lg:p-3">
              Empowering Restaurants, Enhancing Customer Experience
            </h4>
            <p className="font-light md:w-[80%] md:mx-auto md:text-center lg:mx-0 lg:w-[90%] lg:text-left 2xl:w-[75%] md:text-lg 2xl:text-xl">
              At MenuQ, we believe that every restaurant deserves a digital menu{" "}
              {"that's"} as unique as they are. {"That's"} why we provide a
              customizable solution that fits your brand and style. The
              generated QR code makes it easy for customers to access your menu
              from their smartphones. Our platform is designed to increase
              customer engagement, drive sales and streamline your menu
              management. Whether {"you're"} a small café or a large chain,{" "}
              {"we're"} here to support your growth and success.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-[90%] md:w-[70%] lg:w-[30%] 2xl:w-[20%] md:my-1 lg:my-2 2xl:mt-auto h-[1px] bg-gray-300"></div>

        <div className="w-[80%] md:w-full md:mb-8 2xl:mt-auto flex flex-col md:flex-row justify-center md:justify-around lg:justify-center items-center py-4">
          {/* Image */}
          <RevealAnimation className="lg:hidden flex flex-row justify-center items-center">
            <img
              src="https://ik.imagekit.io/bqofr3ncj/tr:w-500/ProductsImage_2023-12-09_20_46/running-shoes-dark-brown-bg_ew00xu.jpg?updatedAt=1702251631269"
              alt="Second about us image"
              width="100"
              height="100"
              className="w-[90%] md:w-[85%] h-[50%] rounded-xl shadow-lg shadow-gray-400"
            />
          </RevealAnimation>

          <RevealAnimation className="w-full md:w-[80%] my-2 py-4 px-2 md:py-0 md:my-0 md:px-4 flex flex-col lg:justify-center lg:items-center">
            <h3 className="text-gray-700 font-medium md:text-2xl">
              PSsst, want to know more... 👀
            </h3>
            <Link
              href="/contact"
              className="ml-16 w-[60%] lg:w-[30%] 2xl:w-[20%] my-4 md:my-6 p-2 text-center bg-blue-400 text-white md:text-lg 2xl:text-xl font-bold rounded-lg shadow-md shadow-gray-300 active:scale-[0.90] ease transition-all duration-300"
            >
              Get in touch with us
            </Link>
          </RevealAnimation>
        </div>
      </motion.div>
    </>
  );
}
