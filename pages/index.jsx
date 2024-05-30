import { motion } from "framer-motion";
import RevealAnimation from "./animations/RevealAnimation";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <motion.header
        className="relative h-full w-full flex flex-col justify-center items-center bg-blend-multiply bg-gray-400 bg-mobile-home lg:bg-desktop-home bg-cover bg-center bg-no-repeat"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        <RevealAnimation>
          <h2
            className="mb-4 font-bold text-center text-white text-6xl md:text-8xl md:mb-6"
            style={{ textShadow: "1px 1px 6px black" }}
          >
            Save paper. Money. Time.
          </h2>
          <p
            className="text-center text-white font-bold text-xl md:text-2xl"
            style={{ textShadow: "1px 1px 6px black" }}
          >
            Create and style your own online menu.
          </p>
        </RevealAnimation>
        <Link
          href="http://localhost:3001"
          className="my-8 p-2 lg:p-3 text-white text-center text-xl md:text-3xl md:p-3 font-bold rounded-lg shadow-gray-500 shadow-white bg-blue-400"
        >
          Build Now
        </Link>
      </motion.header>

      <main className="w-full my-2 py-8 flex flex-col justify-center items-center">
        <RevealAnimation className="w-full lg:w-[90%] my-8 md:my-10 lg:my-16 flex flex-col justify-center items-center">
          <div className="w-[60%] md:w-[40%] lg:w-[25%] h-1 bg-gray-200 rounded-lg"></div>
          <RevealAnimation className="w-full lg:py-6 flex flex-col lg:flex-row justify-center lg:justify-around items-center">
            <div className="my-2 w-[90%] lg:w-[30%] flex flex-col lg:flex-row justify-center items-center">
              <div className="hidden lg:block w-3 h-60 mr-6 bg-red-300"></div>
              <p className="text-center lg:text-left text-xl md:text-3xl md:w-[75%] md:my-4 lg:text-5xl text-gray-800 font-bold">
                Easily create, customize, and publish your own online menu in
                just a few clicks.
              </p>
            </div>
            <img
              src="https://ik.imagekit.io/bqofr3ncj/ProductsImage_2023-12-09_20_46/man-doing-yoga_jvpprt.jpg?updatedAt=1702251631671"
              alt="Image showing the dashboard of the app"
              width="300"
              height="300"
              className="m-6 w-[70%] md:w-[55%] lg:w-[30%] rounded-lg shadow-lg shadow-gray-600"
            />
          </RevealAnimation>
          <div className="w-[60%] md:w-[40%] lg:w-[25%] h-1 bg-gray-200 rounded-lg"></div>
        </RevealAnimation>

        <RevealAnimation className="w-full py-2 md:py-4 lg:py-2 flex flex-row justify-center items-center">
          <img
            src="https://ik.imagekit.io/bqofr3ncj/tr:w-300/Projects/Re%CC%81seau%20(7).png?updatedAt=1717072173769"
            alt="Fork and knife logo"
            width="100"
            height="100"
            className="md:w-[20%] lg:w-[10%]"
          />
        </RevealAnimation>

        <RevealAnimation className="w-full lg:w-[90%] my-8 md:my-10 lg:my-16 flex flex-col justify-center items-center">
          <div className="w-[60%] md:w-[40%] lg:w-[25%] h-1 bg-gray-200 rounded-lg"></div>
          <RevealAnimation className="w-full lg:py-6 flex flex-col lg:flex-row justify-center lg:justify-around items-center">
            <img
              src="https://ik.imagekit.io/bqofr3ncj/ProductsImage_2023-12-09_20_46/man-doing-yoga_jvpprt.jpg?updatedAt=1702251631671"
              alt="Image showing the dashboard of the app"
              width="300"
              height="300"
              className="order-2 lg:order-1 m-6 w-[70%] md:w-[55%] lg:w-[30%] rounded-lg shadow-lg shadow-gray-600"
            />
            <div className="order-1 my-2 lg:order-2 w-[90%] lg:w-[30%] flex flex-col lg:flex-row justify-center items-center">
              <div className="hidden lg:block w-3 h-60 mr-6 bg-red-300"></div>
              <p className="text-center lg:text-left text-xl md:text-3xl md:w-[75%] md:my-4 lg:text-5xl text-gray-800 font-bold">
                Share your menu with customers via a QR code and watch your
                business grow...
              </p>
            </div>
          </RevealAnimation>
          <div className="w-[60%] md:w-[40%] lg:w-[25%] h-1 bg-gray-200 rounded-lg"></div>
        </RevealAnimation>
      </main>
    </>
  );
}
