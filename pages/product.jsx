import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ProductSection() {
  return (
    <>
      <motion.div
        className="min-h-[75%] lg:h-full py-8 lg:py-0 lg:pt-8 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        <div className="w-full p-2 md:p-3 lg:p-4 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-700">
            The product
          </h2>
        </div>
        {/* Divider */}
        <div className="w-[80%] md:w-[70%] lg:w-[50%] lg:mr-auto lg:ml-8 h-[1px] bg-gray-300 rounded-lg"></div>

        <div className="w-full lg:w-[80%] p-2 flex flex-col lg:flex-row justify-center items-center">
          <img
            src="https://ik.imagekit.io/bqofr3ncj/tr:w-500/ProductsImage_2023-12-09_20_46/red-running-shoes_oybphn.jpg?updatedAt=1702251633798"
            alt="Image of the platform dashboard"
            width="100"
            height="100"
            className="w-[80%] md:w-[40%] my-4 md:my-8 rounded-lg shadow-lg shadow-gray-400"
          />

          <div className="w-full flex flex-col justify-center items-center">
            {/* Divider */}
            <div className="w-[70%] md:w-[50%] h-2 bg-red-400"></div>

            {/* Why MenuQ */}
            <Accordion
              type="single"
              collapsible
              className="w-[80%] md:w-[60%] my-4 md:my-6 rounded-lg"
            >
              <AccordionItem
                value="item-1"
                className="rounded-lg shadow-md shadow-gray-300"
              >
                <AccordionTrigger className="p-2 lg:text-2xl lg:p-4">
                  Why MenuQ ??
                </AccordionTrigger>
                <AccordionContent>
                  MenuQ empowers restaurant owners and managers with a
                  user-friendly platform to effortlessly create, customize, and
                  manage menus online. By harnessing the power of MenuQ, you can
                  break free from the crushing costs and razor-thin margins that
                  are suffocating the industry. Our innovative solution saves
                  you time, money, and effort while elevating your{" "}
                  {"customers'"} experience to new heights!
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* The environmental impact */}
            <Accordion
              type="single"
              collapsible
              className="w-[80%] md:w-[60%] my-4 md:my-6 rounded-lg"
            >
              <AccordionItem
                value="item-1"
                className="rounded-lg shadow-md shadow-gray-300"
              >
                <AccordionTrigger className="p-2 lg:text-2xl lg:p-4">
                  The environmental impact
                </AccordionTrigger>
                <AccordionContent>
                  By shifting everything online, we empower users to save money
                  and significantly reduce their environmental footprint. Our
                  digital solution streamlines operations, minimizes waste, and
                  helps you contribute to a more sustainable future.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Divider */}
            <div className="w-[70%] md:w-[50%] h-2 bg-red-400"></div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
