
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Adjust the import path as needed
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

export default function CollapsibleCard() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the open state
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full text-white rounded-xl bg-[#262626]">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger
            className="hover:no-underline flex items-center justify-between text-[#262626]"
            onClick={handleToggle}
          >
            <div className="w-full h-8 text-start items-center flex px-4 text-white">
              <h3>DISCOVER ALL FEATURES FOR A BETTER EXPERIENCE</h3>
            </div>
            <div className="text-xl text-white">
              {isOpen ? <IoEyeOffOutline /> : <IoEyeOutline />}
            </div>
          </AccordionTrigger>
          <AccordionContent
            className={`p-4 transition-all duration-300 ease-in-out ${
              isOpen ? 'max-h-[100px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
