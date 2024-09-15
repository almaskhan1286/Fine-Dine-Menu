import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { 
    MdKeyboardArrowRight 
} from "../../constants/index";

import Link from "next/link";

export default function SelectMenuModal() {

    const menuId = 123;
    
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    <div className="w-full flex justify-center items-center text-gray-600 text-lg font-normal">
                        Select a Menu
                    </div>
                </DialogTitle>
                <DialogDescription>
                    <div className="mt-10">
                        <Link
                            href={`/every-food/menu/${menuId}`}
                        >
                            <div className="flex items-center justify-between text-gray-700 py-3 border-b border-gray-200 cursor-pointer text-[16px] hover:bg-gray-100">
                                <span>Menu</span>
                                <span><MdKeyboardArrowRight/></span>
                            </div>
                        </Link>
                        
                        <div className="flex items-center justify-between text-gray-700 py-3 cursor-pointer text-[16px] hover:bg-gray-100">
                            <span>Copy of Menu</span>
                            <span><MdKeyboardArrowRight/></span>
                        </div>
                        
                    </div>
                </DialogDescription>
            </DialogHeader>
        </DialogContent>
    );
}
