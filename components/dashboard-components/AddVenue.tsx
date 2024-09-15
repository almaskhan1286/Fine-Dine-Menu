import { CiSearch, TbBuildingStore } from "../../constants/index";
import { AddVenueModal } from './AddVenueModal';

import { Input } from "@/components/ui/input";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export default function AddVenue() {

    return(
        <main className='w-full px-5 py-0 flex items-center align-middle bg-gray-200 aria-expanded:bg-blue-700'>
            
            <Accordion type="single" collapsible spellCheck>
                <AccordionItem value="item-1">
                    <AccordionTrigger className='hover:no-underline'>
                        <div className='flex items-center gap-x-3 w-full md:w-40 lg:w-48 bg-gray-200 hover:no-underline'>
                            <span className='bg-gray-700 rounded-full p-1 text-white'>
                                <TbBuildingStore/>
                            </span>
                            <span>hp</span>
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                    <div>
                        <div className="w-full items-center">
                            <form>
                                <div className="relative">
                                <Input
                                    type="text"
                                    className="w-full appearance-none bg-background pl-4 shadow-none outline-none! h-8 focus:outline-none! active:outline-gray-300!"
                
                                />
                                    <CiSearch className="absolute right-2.5 top-0 h-full w-4 text-muted-foreground border-l  " />
                                </div>
                            </form>
                        </div>
                            <AddVenueModal/>
            
            
                    </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            
        </main>

      
    )
}