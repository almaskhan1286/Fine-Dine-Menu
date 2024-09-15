import { Checkbox } from "@/components/ui/checkbox"
import { Switch } from "@/components/ui/switch"



export  default function Visibility() {
    return(
        <div>
            
            <div className="flex justify-between items-center text-sm py-8 border-b ">
                <div className="flex flex-col gap-y-3">
                    <h1>Tablet Menu</h1>
                    <div className="flex gap-x-2 items-center text-sm">
                        <span><Checkbox/></span>
                        <span>Enable Ordering</span>
                    </div>
                </div>
                <div><Switch /></div>
            </div>

            <div className="flex justify-between items-center text-sm py-8 border-b ">
                <div className="flex flex-col gap-y-3">
                    <h1>Dine-in QR Menu</h1>
                    <div className="flex gap-x-2 items-center text-sm">
                        <span><Checkbox/></span>
                        <span>Enable Ordering</span>
                    </div>
                </div>
                <div><Switch /></div>
            </div>

            <div className="flex justify-between items-center text-sm py-8 border-b">
                <div className="flex flex-col gap-y-3">
                    <h1>Delivery Menu</h1>
                    <div className="flex gap-x-2 items-center text-sm">
                        <span><Checkbox/></span>
                        <span>Enable Ordering</span>
                    </div>
                </div>
                <div><Switch /></div>
            </div>
            
        </div>
    )
}