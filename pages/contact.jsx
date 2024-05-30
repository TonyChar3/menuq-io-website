import ErrorMessage from "./components/error-message";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <motion.div
        className="w-full lg:mb-10 lg:pb-10 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        <div className="w-full p-4">
          <h2 className="my-4 ml-2 font-bold text-3xl lg:text-6xl text-gray-600">
            Get in touch
          </h2>

          {/* Divider */}
          <div className="w-[90%] md:w-[40%] h-[1px] bg-gray-300"></div>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center">
          <form
            action=""
            method="post"
            className="w-[90%] md:w-[70%] lg:w-[50%] flex flex-col justify-center items-center"
          >
            <div className="w-full lg:w-[60%] flex flex-col justify-center items-center">
              <label
                htmlFor="user_email_input"
                className="mr-auto mt-4 font-ligh text-sm md:text-md text-gray-500"
              >
                e-mail address
              </label>
              <input
                id="user_email_input"
                type="text"
                placeholder="email@example.com"
                className="w-[85%] mt-2 mb-4 py-2 pl-4 text-md border border-red-400 placeholder:text-gray-300 text-gray-500 focus:border-2 focus:border-red-300 outline-none shadow-md shadow-gray-400 rounded-full"
              />
              <ErrorMessage />
            </div>

            <div className="w-full lg:w-[60%] flex flex-col justify-center items-center">
              <label
                htmlFor="message_input"
                className="mr-auto mt-4 font-ligh text-sm text-gray-500"
              >
                your message
              </label>
              <textarea
                name="message-input"
                id="message_input"
                placeholder="Hello world :)"
                className="w-[90%] h-40 mt-3 mb-4 py-2 pl-4 text-md border border-red-400 placeholder:text-gray-300 text-gray-500 focus:border-2 focus:border-red-300 rounded-lg outline-none resize-none shadow-md shadow-gray-400 overflow-y-auto"
              ></textarea>
              <ErrorMessage />
            </div>

            <button
              type="button"
              className="w-[40%] md:w-[30%] lg:w-[20%] mt-4 p-2 text-white font-bold bg-red-400 rounded-lg active:scale-[0.90] ease transition-all duration-300"
            >
              Send message
            </button>
          </form>

          <div className="w-full lg:w-[50%] py-8 md:py-10 flex flex-row justify-center items-center">
            <i className="bi bi-info-circle hidden lg:block mx-6 text-4xl text-red-300"></i>
            {/* Divider */}
            <div className="w-2 h-20 md:h-[10em] bg-red-300 mr-6"></div>
            <p className="w-[70%] md:w-[55%] text-sm md:text-lg text-gray-800 font-light">
              {"We're"} excited to hear from you and help with any questions or
              concerns. {"We're"} here to help and look forward to connecting
              with you. Your feedback and suggestions are valuable to us, and we
              appreciate your time in contacting us.
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
