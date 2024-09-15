import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import {
    CiCreditCard2,
    CiViewList,
    AiOutlineAlert,
    PiQrCodeLight,
    PiPersonSimpleRunLight,
    VscGraphLine
} from '../../constants/index';

import Link from "next/link";
  

export default function ReportSummaryCard() {

    const venueId = '123';
    const href = `/venues/${venueId}/reports`;

    return(

        <div className="w-full md:w-1/2">

            <Card>
                <CardHeader className="border-b border-b-gray-200">
                    {/* <CardTitle>Card Title</CardTitle> */}
                    <CardDescription className="flex items-center justify-between font-semibold">
                       
                            <span className="text-lg font-semibold">Today</span>
                            <Link
                                href={href}
                                passHref
                            >
                                <div className="flex gap-x-1 cursor-pointer items-center text-sm font-semibold text-blue-600 hover:text-blue-800">
                                    <span><VscGraphLine/></span>
                                    <span>Report Summary</span>
                                </div>
                            </Link>
                       
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap justify-between">
                        <div className="flex flex-col border-b py-2 w-36">
                            <div className="flex items-center gap-x-1 leading-10 text-sm ">
                                <span><CiCreditCard2/></span>
                                <span>Revenue</span>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-col text-xl font-semibold leading-7">
                                    <span>PKRs.</span>
                                    <span>0.00</span>
                                </div>
                                <div className="flex justify-center items-center">
                                    0.00%
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col border-b py-2 w-36">
                            <div className="flex items-center gap-x-1 leading-10 text-sm">
                                <span><CiViewList/></span>
                                <span>Average OS</span>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-col text-xl font-semibold leading-7">
                                    <span>PKRs.</span>
                                    <span>0.00</span>
                                </div>
                                <div className="flex justify-center items-center">
                                    0.00%
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col border-b py-2 w-36">
                            <div className="flex items-center gap-x-1 leading-10 text-sm">
                                <span><AiOutlineAlert/></span>
                                <span>Orders</span>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-col text-xl font-semibold leading-7">  
                                    <span>0.00</span>
                                </div>
                                <div className="flex justify-center items-center">
                                    0.00%
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col border-b py-2 w-36">
                            <div className="flex items-center gap-x-1 leading-10 text-sm">
                                <span><PiQrCodeLight/></span>
                                <span>Sessions</span>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-col text-xl font-semibold leading-7">
                                    <span>1</span>
                                </div>
                                <div className="flex justify-center items-center">
                                    -87.6%
                                </div>
                            </div>
                        </div>
                        

                        <div className="flex flex-col border-b py-2 w-36">
                            <div className="flex items-center gap-x-1 leading-10 text-sm">
                                <span><PiPersonSimpleRunLight/></span>
                                <span>Visitors</span>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-col text-xl font-semibold leading-7">  
                                    <span>0.00</span>
                                </div>
                                <div className="flex justify-center items-center">
                                    0.00%
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col border-b py-2 w-36">
                            <div className="flex items-center gap-x-1 leading-10 text-sm">
                                <span><CiCreditCard2/></span>
                                <span>Tip</span>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex flex-col text-xl font-semibold leading-7">
                                    <span>PKRs.</span>
                                    <span>0.00</span>
                                </div>
                                <div className="flex justify-center items-center">
                                    0.00%
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </CardContent>
                <CardFooter>
                    {/* <p>Card Footer</p> */}
                </CardFooter>
            </Card>


        </div>
    )
}