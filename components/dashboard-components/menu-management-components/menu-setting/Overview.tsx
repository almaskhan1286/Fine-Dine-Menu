import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"


export default function Overview() {
  return (
        <div className="flex flex-col gap-y-8 py-4">
          <div className="flex flex-col gap-y-3">
            <Label htmlFor="name" className="text-left">
              Name
            </Label>
            <Input id="name" value="Menu" className="col-span-3" required/>
          </div>
          <div className="flex flex-col gap-y-3">
            <Label htmlFor="name" className="text-left">
              Description
            </Label>
            <Textarea placeholder="Menu" id="message" />
          </div>
          <div className="flex flex-col gap-y-3">
            <Label htmlFor="name" className="text-left">
              Note
            </Label>
            <Input id="name" value="Menu" className="col-span-3" required/>
          </div>
        </div>
  )
}
