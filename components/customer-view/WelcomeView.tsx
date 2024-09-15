import React, { useState } from "react";
import { HeaderForLogin } from "./HeaderMobile";
import SelectMenuModal from "./SelectMenuModal";

import { 
    BsChatLeftText, 
    MdKeyboardArrowRight 
} from "../../constants/index";
import { Dialog } from "@/components/ui/dialog";

export default function WelcomeView() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <div className="w-full h-full flex flex-col justify-between">
            <div>
                <HeaderForLogin />
            </div>

            <div className="flex flex-col gap-y-4 items-center">
                <div className="text-2xl font-semibold text-gray-700">
                    Every Food
                </div>
                <div>
                    <button
                        className="px-24 py-2 rounded-md bg-[#e6024a] text-white"
                        onClick={() => setIsModalVisible(true)}
                    >
                        Go to Menu
                    </button>
                </div>
            </div>

            <div 
                className="border-y border-gray-200 mb-10 flex justify-between mx-3 py-5 items-center text-gray-500"
            >
                <div className="flex gap-x-2 items-center">
                    <span>
                        <BsChatLeftText />
                    </span>
                    <span>Give Feedback</span>
                </div>
                <div>
                    <MdKeyboardArrowRight />
                </div>
            </div>

            {/* Modal Rendering */}
            <Dialog open={isModalVisible} onOpenChange={setIsModalVisible}>
                <SelectMenuModal />
            </Dialog>
        </div>
    );
}
