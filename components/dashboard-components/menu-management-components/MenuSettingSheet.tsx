import { Button } from "@/components/ui/button"
import Overview from "./menu-setting/Overview";
import CustomizeView from "./menu-setting/CustomizeView";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { 
    Tabs, 
    TabsContent, 
    TabsList, 
    TabsTrigger 
} from "@/components/ui/tabs"
import Visibility from "./menu-setting/Visibility";
import Availability from "./menu-setting/Availability";



interface MenuSettingProps {
    isOpen: boolean;
    onClose: () => void;
  }

export function MenuSetting({ isOpen, onClose }: MenuSettingProps) {
  return (
        <Sheet open={isOpen} onOpenChange={onClose}>
        
        <SheetContent className="sm:max-w-[425px] md:max-w-[600px] lg:max-w-[650px] w-[90vw] h-full flex flex-col justify-between">

            <div>
                <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                    Make changes to your Menu setting here. Click save when you're done.
                </SheetDescription>
                </SheetHeader>

                <Tabs defaultValue="account" className="w-full mt-2 md:my-5">
                    <TabsList>
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="customize-view">Customize View</TabsTrigger>
                        <TabsTrigger value="visibility">Visibility</TabsTrigger>
                        <TabsTrigger value="availability">Availability</TabsTrigger>
                    </TabsList>
                        <TabsContent value="overview"><Overview/></TabsContent>
                        <TabsContent value="customize-view"><CustomizeView/></TabsContent>
                        <TabsContent value="visibility"><Visibility/></TabsContent>
                        <TabsContent value="availability"><Availability/></TabsContent>
                </Tabs>
            </div>

            <div>
                <SheetFooter>
                <SheetClose asChild>
                    <div className="flex gap-x-3">
                    <Button type="submit" className="bg-blue-700 hover:bg-blue-800">Cancel</Button>
                    <Button type="submit" className="bg-blue-700 hover:bg-blue-800">Save</Button>
                    </div>
                </SheetClose>
                </SheetFooter>
            </div> 

        </SheetContent>
        </Sheet>
  )
}
