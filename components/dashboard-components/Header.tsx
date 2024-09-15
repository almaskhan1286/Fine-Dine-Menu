import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CiSearch, RiAccountPinCircleLine } from "../../constants/index";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  return (
 
    <div className="flex justify-end bg-white w-full px-5 py-2">
        <div className="w-full items-center">
                <form>
                    <div className="relative">
                        <CiSearch className="absolute left-2.5 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                        type="search"
                        placeholder="Search products..."
                        className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/4 lg:w-1/3 outline-none"
                        />
                    </div>
                </form>
        </div>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
                <RiAccountPinCircleLine className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
            </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  );
}
