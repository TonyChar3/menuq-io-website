import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import SupportOptionCard from "./components/support-option-card";

export default function Support() {
  return (
    <>
      <div className="w-full py-6 flex flex-col items-center">
        <h2 className="mr-auto ml-2 text-xl font-bold ">How can we help ?</h2>

        {/* Divider */}
        <div className="w-[80%] h-[1px] my-2 bg-gray-300"></div>

        {/* Quick Options */}
        <div className="w-full flex flex-col justify-center items-center">
          <SupportOptionCard
            img="https://ik.imagekit.io/bqofr3ncj/tr:w-200/Projects/Re%CC%81seau%20(4).png?updatedAt=1717011136389"
            option="Ask a new question"
            link="/contact"
          />
          <SupportOptionCard
            img="https://ik.imagekit.io/bqofr3ncj/tr:w-200/Projects/Re%CC%81seau%20(5).png?updatedAt=1717011650439"
            option="Subscription"
            link="/product-section"
          />
          <SupportOptionCard
            img="https://ik.imagekit.io/bqofr3ncj/tr:w-200/Projects/Re%CC%81seau%20(6).png?updatedAt=1717011750556"
            option="Legal"
            link="/"
          />
        </div>

        {/* Divider */}
        <div className="w-[80%] h-[1px] my-2 bg-gray-300"></div>

        {/* FAQ */}
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
