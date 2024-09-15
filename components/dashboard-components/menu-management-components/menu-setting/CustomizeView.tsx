import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

export default function CustomizeView() {
    return(
        <main className="flex flex-col gap-y-8 w-full mt-8">

            <div className="w-full flex gap-x-24 items-center">
                <div className="text-sm ">Alphabetical Order</div>
                <div className="flex flex-col">
                    <div>
                        <Switch/>
                    </div>
                    <div className="text-xs text-gray-500">
                        This feature sorts the items and sections under the section in alphabetical order.
                    </div>
                </div>
            </div>

            <div className="w-full flex gap-x-24  items-center">
                <div className="text-sm ">Number of Columns</div>
                <div className="flex flex-col gap-y-2">
                    <div className="w-full max-w-sm">
                        
                        <RadioGroup id="number-rating" defaultValue="1" className="flex space-x-1">
                            {[1, 2, 3, 4].map((number) => (
                                <div key={number} className="flex items-center">
                                    <RadioGroupItem
                                        value={number.toString()}
                                        id={`number-${number}`}
                                        className="peer sr-only"
                                    />
                                        <Label
                                        htmlFor={`number-${number}`}
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-900 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-blue-800 peer-data-[state=checked]:text-primary-foreground hover:bg-gray-100 hover:text-blue-800 cursor-pointer"
                                        >
                                        {number}
                                        </Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>
                    <div className="text-xs text-gray-500">
                        You can select how many grids will shown in the menu.
                    </div>
                </div>
            </div>

            <div className="w-full flex gap-x-24  items-center">
                <div className="text-sm ">Grid Title Position</div>
                <div className="flex flex-col gap-y-2">
                    <div className="w-full max-w-sm">
                        <RadioGroup id="position" defaultValue="top" className="flex space-x-2">
                            {['Top', 'Bottom'].map((position) => (
                            <div key={position.toLowerCase()} className="flex items-center">
                                <RadioGroupItem
                                value={position.toLowerCase()}
                                id={`position-${position.toLowerCase()}`}
                                className="peer sr-only"
                                />
                                <Label
                                htmlFor={`position-${position.toLowerCase()}`}
                                className="flex px-3 py-2 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium text-gray-900 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-blue-800 peer-data-[state=checked]:text-primary-foreground hover:bg-gray-100 hover:text-gray-900 cursor-pointer transition-colors"
                                >
                                {position}
                                </Label>
                            </div>
                            ))}
                        </RadioGroup>
                    </div>
                    <div className="text-xs text-gray-500">
                        You can change the title position of inner sections / inner items
                    </div>
                </div>
            </div>

        </main>
    )
}