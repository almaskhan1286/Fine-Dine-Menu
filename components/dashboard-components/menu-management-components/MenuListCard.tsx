'use client'

import React, { useState } from 'react';
import { MenuSetting } from './MenuSettingSheet';
import {
    PiDotsThreeVerticalLight,
    MdOutlineEditNote,
    CiSettings,
    IoPricetagsOutline,
    PiCopyLight,
    AiOutlineDelete,
    AiOutlineExport,
    MdRotate90DegreesCcw,
    IoMdCopy,
    PiTranslateLight
} from '../../../constants/index';

import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

export default function MenuListCard() {
  const [isMenuSettingOpen, setIsMenuSettingOpen] = useState(false);

  const toggleMenuSetting = () => {
    setIsMenuSettingOpen(!isMenuSettingOpen)
  }



  return (
    <div className="container mx-auto py-10">

      <Card className="mb-6">
        <CardContent className="pr-5 pl-0 py-3">
          <div className="flex">

            <div className="w-[5%] flex items-center justify-center"><Button variant="outline" className="border-none text-4xl text-gray-500"> = </Button></div>

            <div className="w-[60%] ml-2">
              <div className="grid gap-2">
                <div className="text-lg leading-none font-semibold">Menu1</div>
                <div className="text-xs leading-none text-gray-500 text-muted-foreground">Your happy place</div>
                <div className="text-xs leading-none text-gray-500 mt-2">Availability: Always</div>
                <Table>
                  <TableBody className="bg-white flex p-0">
                    
                    <TableRow className="text-xs text-gray-500 p-0 leading-none flex">
                      <TableCell className="font-medium">Item 1</TableCell>
                      <TableCell>$10.99</TableCell>
                      <TableCell>In Stock</TableCell>
                      <TableCell>5 stars</TableCell>
                      <TableCell>Bestseller</TableCell>
                      
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>

            <div className="w-[35%] flex items-center justify-end gap-x-3">
  
                <div className='mr-2'>
                    <Switch/>
                </div>

                <div>
                    <Button
                        aria-haspopup="true"
                        variant="ghost"
                        className='text-sm hover:bg-blue-800 bg-blue-700 hover:text-white flex gap-x-2 text-white py-0'
                    >
                            <span><MdOutlineEditNote/></span>
                            <span>Edit Menu</span>
                    </Button>
                </div>

                <div className='text-2xl ml-2 cursor-pointer' onClick={toggleMenuSetting}>
                    <CiSettings/>
                </div>

                <div> 
                    <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                        aria-haspopup="true"
                        size="icon"
                        variant="ghost"
                        className='font-bold text-2xl hover:bg-white'
                        >
                        <PiDotsThreeVerticalLight/>
                        <span className="sr-only">Toggle menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
   
                        <DropdownMenuItem className='flex gap-x-2'>       
                            <span><IoPricetagsOutline/></span>
                            <span>Price Editor</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className='flex gap-x-2'>       
                            <span><PiTranslateLight/></span>
                            <span>Translate</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className='flex gap-x-2'>       
                            <span><PiCopyLight/></span>
                            <span>Duplicate</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className='flex gap-x-2'>       
                            <span><AiOutlineDelete/></span>
                            <span>Delete</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className='flex gap-x-2'>       
                            <span><AiOutlineExport/></span>
                            <span>Export</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className='flex gap-x-2'>       
                            <span><MdRotate90DegreesCcw/></span>
                            <span>Convert to Section</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className='flex gap-x-2'>       
                            <span><IoMdCopy/></span>
                            <span>Copy to Venue</span>
                        </DropdownMenuItem>
                 
                    </DropdownMenuContent>
                    </DropdownMenu>
                </div>

            </div>

          </div>
        </CardContent>
      </Card>

      {/* Sheet for Menu Settings */}
      <MenuSetting isOpen={isMenuSettingOpen} onClose={toggleMenuSetting} />
    
    </div>
  )
}