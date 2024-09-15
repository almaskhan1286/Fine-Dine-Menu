import {
    TbDeviceMobileShare,
    MdKeyboardArrowLeft,
    RxHamburgerMenu,
} from "../../constants/index";

export function HeaderForLogin() {
    return(
        
        // Header view for Login Screen 
        <div className="w-full h-12 bg-[#e6024a] flex items-center gap-x-3 justify-end text-white tex-sm px-3">
            <span className="cursor-pointer"><TbDeviceMobileShare/></span>
            <span className="cursor-pointer">
                Login
            </span>
        </div>
    )
}

export function MainHeader() {
    return(
        
        // Header view for Login Screen 
        <div className="w-full h-12 bg-[#e6024a] flex items-center justify-between px-3 text-white">
            <span className="cursor-pointer"><MdKeyboardArrowLeft/></span>
            <span className="cursor-pointer">Every Food</span>
            <span className="cursor-pointer"><RxHamburgerMenu/></span>
        </div>
    )
}

export function StickyHeader() {
    return(
        
        // Header view for Login Screen 
        <div className="w-full h-12 bg-white flex items-center justify-between px-3 text-white">
            <span>
                <button className="px-5 py-3 active:bg-[#e6024a] active:text-white bg-white text-[#e6024a]">
                    Salads
                </button>
            </span>
            <span></span>
        </div>
    )
}