"use client"

import { MainHeader, StickyHeader } from "@/components/customer-view/HeaderMobile"
import MenuCard from "@/components/customer-view/MenuCard";
import { MdKeyboardArrowDown, CiSearch, MdOutlineFilterList } from "../../../../constants/index";
import { Input } from "@/components/ui/input";


import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"

export default function Menu() {
    return(
        <div className="w-full h-screen border border-red-700">
             <MainHeader/>

            
        
         
            <div className="flex flex-col justify-center items-center my-5">
                <div className="cursor-pointer flex gap-x-1 text-gray-700 items-center">
                    <span>Menu</span>
                    <span><MdKeyboardArrowDown/></span>
                </div>
                <span className="text-gray-600 text-xs">Menu</span>
            </div> 
            
            <div className="flex gap-x-3 items-center justify-center w-full my-4">
                <div className="relative">
                            <CiSearch className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                            type="search"
                            placeholder="search menus..."
                            className="w-[80vw] rounded-full appearance-none bg-background pl-8 shadow-none outline-none"
                            />
                </div>
                <div className="text-2xl text-gray-800">
                    <MdOutlineFilterList/>
                </div>

             </div>

            <div className="bg-[#f7f7f7] py-2">
                <MenuCard/>
            </div>
           
          
        </div>
    )
}