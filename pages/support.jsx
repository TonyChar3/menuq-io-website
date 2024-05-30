import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SupportOptionCard from "./components/support-option-card";
import { motion } from "framer-motion";
import RevealAnimation from "./animations/RevealAnimation";

export default function Support() {
  return (
    <>
      <motion.div
        className="w-full py-6 lg:py-8 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1 } }}
      >
        <h2 className="mr-auto ml-2 text-xl md:text-2xl lg:text-4xl md:ml-4 lg:ml-6 lg:my-2 font-bold ">
          How can we help ?
        </h2>

        {/* Divider */}
        <div className="w-[80%] lg:w-[60%] h-[1px] my-2 lg:my-4 bg-gray-300"></div>

        {/* Quick Options */}
        <RevealAnimation className="w-full lg:w-[80%] flex flex-col lg:flex-row justify-center lg:justify-around items-center">
          <SupportOptionCard
            img="https://ik.imagekit.io/bqofr3ncj/tr:w-200/Projects/Re%CC%81seau%20(4).png?updatedAt=1717011136389"
            option="Ask a new question"
            link="/contact"
          />
          <SupportOptionCard
            img="https://ik.imagekit.io/bqofr3ncj/tr:w-200/Projects/Re%CC%81seau%20(5).png?updatedAt=1717011650439"
            option="Subscription"
            link="/billing"
          />
          <SupportOptionCard
            img="https://ik.imagekit.io/bqofr3ncj/tr:w-200/Projects/Re%CC%81seau%20(6).png?updatedAt=1717011750556"
            option="Legal"
            link="/legal"
          />
        </RevealAnimation>

        {/* Divider */}
        <div className="w-[80%] lg:w-[40%] h-[1px] my-2 lg:my-4 bg-gray-300"></div>

        {/* User support */}
        <RevealAnimation className="w-full md:w-[75%] lg:w-[50%] md:my-4 flex flex-col justify-center items-center">
          <div className="w-full px-2 py-1 text-lg lg:text-xl font-bold text-gray-600">
            <h3>User support</h3>
          </div>

          {/* Need help customizing your menu ? */}
          <Accordion
            type="single"
            collapsible
            className="w-[95%] my-2 lg:my-4 lg:w-[80%] rounded-lg"
          >
            <AccordionItem
              value="item-1"
              className="rounded-lg shadow-md shadow-gray-300"
            >
              <AccordionTrigger className="p-2">
                Need help customizing your menu ?
              </AccordionTrigger>
              <AccordionContent>
                If you need help with customizing your menu on MenuQ, please
                feel free to contact us using the contact section on our
                website. We will be more than happy to provide you with the help
                you need quickly.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Can I export my menu data from MenuQ */}
          <Accordion
            type="single"
            collapsible
            className="w-[95%] my-2 lg:my-4 lg:w-[80%] rounded-lg"
          >
            <AccordionItem
              value="item-1"
              className="rounded-lg shadow-md shadow-gray-300"
            >
              <AccordionTrigger className="p-2">
                Can I export my menu data from MenuQ ?
              </AccordionTrigger>
              <AccordionContent>
                Yes, you can export your menu data from MenuQ by logging in and
                going to the {"'Menu'"} section. Click on {"'Export Menu'"} and
                choose the format you prefer (e.g., CSV, PDF, or JSON).
              </AccordionContent>
              <AccordionContent className="font-bold text-red-500">
                NOTE: This only applies to accounts with the{" "}
                {"'Owner subscription'"}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Can I manage multiple restaurant locations with one MenuQ account ? */}
          <Accordion
            type="single"
            collapsible
            className="w-[95%] my-2 lg:my-4 lg:w-[80%] rounded-lg"
          >
            <AccordionItem
              value="item-1"
              className="rounded-lg shadow-md shadow-gray-300"
            >
              <AccordionTrigger className="p-2">
                Multiple restaurant locations with one MenuQ account ?
              </AccordionTrigger>
              <AccordionContent>
                Yes, you can manage multiple restaurant locations with one MenuQ
                account. Simply log in to your account, go to the dashboard, and
                click on {"'New Menu +'"} and go through the whole process
                again. Each menu has its own settings.
              </AccordionContent>
              <AccordionContent className="font-bold text-red-500">
                NOTE: This only applies to accounts with the{" "}
                {"'Owner subscription'"}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </RevealAnimation>

        {/* Divider */}
        <div className="w-[80%] lg:w-[40%] h-[1px] my-2 bg-gray-300"></div>

        {/* Payment support */}
        <RevealAnimation className="w-full md:w-[75%] lg:w-[50%] md:my-4 flex flex-col justify-center items-center">
          <div className="w-full px-2 py-1 text-lg lg:text-xl font-bold text-gray-600">
            <h3>Payment support</h3>
          </div>

          {/* Do I need my card credentials for the 'Basic' subscription */}
          <Accordion
            type="single"
            collapsible
            className="w-[95%] my-2 lg:my-4 lg:w-[80%] rounded-lg"
          >
            <AccordionItem
              value="item-1"
              className="rounded-lg shadow-md shadow-gray-300"
            >
              <AccordionTrigger className="p-2">
                Do I need my card credentials for the {"'Basic'"} subscription?
              </AccordionTrigger>
              <AccordionContent>
                No, new users can only enter their email and create a safe and
                strong password in order to use MenuQ with a Basic subscription.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Do you accept crypto ? */}
          <Accordion
            type="single"
            collapsible
            className="w-[95%] my-2 lg:my-4 lg:w-[80%] rounded-lg"
          >
            <AccordionItem
              value="item-1"
              className="rounded-lg shadow-md shadow-gray-300"
            >
              <AccordionTrigger className="p-2">
                Do you accept crypto ?
              </AccordionTrigger>
              <AccordionContent>
                At the moment, we do not have enough requests to invest time and
                effort into implementing a crypto solution for payments.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Do you accept PayPal ? */}
          <Accordion
            type="single"
            collapsible
            className="w-[95%] my-2 lg:my-4 lg:w-[80%] rounded-lg"
          >
            <AccordionItem
              value="item-1"
              className="rounded-lg shadow-md shadow-gray-300"
            >
              <AccordionTrigger className="p-2">
                Do you accept PayPal ?
              </AccordionTrigger>
              <AccordionContent>
                At the moment, we do not have implemented PayPal.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </RevealAnimation>
      </motion.div>
    </>
  );
}
