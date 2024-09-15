import { MenuCategory } from "@/app/types";

import { LuQrCode } from "react-icons/lu";
import { BsTablet, BsSignpost2 } from "react-icons/bs";
import { IoBagHandleOutline, IoChatbubblesOutline } from "react-icons/io5";
import { MdOutlinePayments, MdOutlineEventNote, MdOutlineFeedback } from "react-icons/md";
import { PiNoteThin } from "react-icons/pi";
import { RiAccountCircleLine } from "react-icons/ri";
import { TbBrandGoogleAnalytics } from "react-icons/tb";

// Dashboard Sidebar Menu Icons...
import { AiOutlineDashboard } from "react-icons/ai";
import { VscGraphLine } from "react-icons/vsc";
import { PiDotsNine } from "react-icons/pi";
import { AiOutlineAlert } from "react-icons/ai";
import { PiCalendarCheckLight } from "react-icons/pi";
import { PiHeartLight } from "react-icons/pi";
import { RiRestaurantLine } from "react-icons/ri";
import { LiaRocketchat } from "react-icons/lia";
import { PiTranslateLight } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";

// Dashboard Report Summary Cards Icons...
import { CiCreditCard2 } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
import { PiQrCodeLight } from "react-icons/pi";
import { PiPersonSimpleRunLight } from "react-icons/pi";


// Dashboard Header Icons...
import { CiSearch } from "react-icons/ci";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { TbBuildingStore } from "react-icons/tb";

// Dahboard Menu-management list card Icons...
import { PiDotsThreeVerticalLight } from "react-icons/pi";
import { MdOutlineEditNote } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";
import { PiCopyLight } from "react-icons/pi";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineExport } from "react-icons/ai";
import { MdRotate90DegreesCcw } from "react-icons/md";
import { IoMdCopy } from "react-icons/io";


// Customer View Icons...
import { TbDeviceMobileShare } from "react-icons/tb";
import { BsChatLeftText } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineFilterList } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";





// ...................................................................................... //

// Export Dashboard Header Icons Export...
export {
  CiSearch,
  RiAccountPinCircleLine,
  TbBuildingStore,
};

// Export Dashboard Report Summary Card Icons...
export {
  VscGraphLine,
  CiCreditCard2,
  CiViewList,
  PiQrCodeLight,
  PiPersonSimpleRunLight,
  AiOutlineAlert
}

// Export Dashboard Menu management list card Icons...
export {
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
}

// Export Customer-View WelcomeView Icons....
export {
  TbDeviceMobileShare,
  BsChatLeftText,
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdKeyboardArrowDown,
  MdOutlineFilterList,
  PiHeartLight,
  RxHamburgerMenu
}

// Main navigation menus...

export const menuItems: MenuCategory = {
  Solutions: {
    'Order & Pay': [
      { name: 'Dine-In QR Menu', href: '/solutions/order-and-pay/dine-in-qr-menu', icon: <LuQrCode />,
      description:'The fatest way to create your menu, create order and take payment' },
      { name: 'Dine-In Tablet Menu', href: '/solutions/order-and-pay/dine-in-tablet-menu', icon: <BsTablet />,
      description:'All-in-one tablet menu solution that offer unique visuals and various orders and payment methods' },
      { name: 'Delivery & Pick-Up Menu', href: '/solutions/order-and-pay/delivery-and-pick-up-menu', icon: <IoBagHandleOutline />,
      description:"Maximize your restaurent's ordering revenue by AI-driven dine-in pickup, and delivery solution" },
      { name: 'Fast Checkout', href: '/solutions/order-and-pay/fast-checkout', icon: <MdOutlinePayments />,
      description:'Experience new standard of payment methods with finedine.' },
      { name: 'Order & Pay', href: '/solutions/order-and-pay/order-and-pay', icon: <PiNoteThin />,
      description:'Transform single QR into a powerhouse of order and payment efficiency' },
      { name: 'POS & Lite', href: '/solutions/order-and-pay/pos-lite', icon: <BsSignpost2 />,
      description:'Turn your mobile devices into modern POS devices -minus the price' },
    ],
    'Customer Engagement': [
      { name: 'Reservations', href: '/solutions/customer-engagement/online-restaurant-reservation', icon: <MdOutlineEventNote />,
      description:'An online reservation system that put you in control' },
      { name: 'CRM', href: '/solutions/customer-engagement/finedine-restaurant-crm-system', icon: <RiAccountCircleLine />,
      description:'Collect, Store and Segment Customer with ease' },
      { name: 'Campaigns', href: '/solutions/customer-engagement/dining-campaign-management', icon: <IoChatbubblesOutline />,
      description:'Swift and simple Campaign management for converting deals' },
    ],
    'Operations': [
      { name: 'Data & Analytics', href: '/solutions/operations/finedine-restaurant-data-analytics', icon: <TbBrandGoogleAnalytics />,
      description:'Explore finedine advanced restaurent data analytics' },
      { name: 'Feedback', href: '/solutions/operations/feedback-collection', icon: <MdOutlineFeedback />,
      description:'Feedback collection and management made easy' },
    ],
  },
 
};


// Menus for the side-bar...
export interface SideBarMenu {
  name: string;
  href: string;
  icon: React.ReactNode;
}


export const dashSideBarMenus: SideBarMenu[] = [
  { name: 'Dashboard', href: '/venues/[venueId]/dashboard', icon:<AiOutlineDashboard/>},
  { name: 'Reports', href: '/venues/[venueId]/reports', icon:<VscGraphLine/>},
  { name: 'Recommendations', href: '/venues/[venueId]/recommendations', icon:<PiDotsNine/>},
  { name: 'Orders', href: '/venues/[venueId]/orders', icon:<AiOutlineAlert/>},
  { name: 'Reservations', href: '/venues/[venueId]/reservations', icon:<PiCalendarCheckLight/>},
  { name: 'Engagement', href: '/venues/[venueId]/engagement', icon:<PiHeartLight/>},
  { name: 'Menu Management', href: '/venues/[venueId]/menu-management', icon:<RiRestaurantLine/>},
  { name: 'Feedbacks', href: '/venues/[venueId]/feedbacks', icon:<LiaRocketchat/>},
  { name: 'Translation Center', href: '/venues/[venueId]/translation-center', icon:<PiTranslateLight/>},
  { name: 'Settings', href: '/venues/[venueId]/settings', icon:<CiSettings/>},
]
