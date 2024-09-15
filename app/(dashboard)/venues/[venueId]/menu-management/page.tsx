// import Image from "next/image"
// import { MoreHorizontal, PlusCircle } from "lucide-react"

// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs"

// export default function MenuManagement() {
//   return (
//     <div className="container mx-auto py-10">
//       <Tabs defaultValue="all">
//         <TabsList>
//           <TabsTrigger value="all">All</TabsTrigger>
//           <TabsTrigger value="active">Active</TabsTrigger>
//           <TabsTrigger value="draft">Draft</TabsTrigger>
//           <TabsTrigger value="archived">Archived</TabsTrigger>
//         </TabsList>
//         <TabsContent value="all">
//           <Card>
//             <CardHeader>
//               <div className="flex items-center justify-between">
//                 <div>
//                   <CardTitle>Products</CardTitle>
//                   <CardDescription>
//                     Manage your products and view their sales performance.
//                   </CardDescription>
//                 </div>
//                 <Button size="sm" className="h-8 gap-1">
//                   <PlusCircle className="h-3.5 w-3.5" />
//                   <span className="whitespace-nowrap">Add Product</span>
//                 </Button>
//               </div>
//             </CardHeader>
//             <CardContent>
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead className="w-[100px]">Image</TableHead>
//                     <TableHead>Name</TableHead>
//                     <TableHead>Status</TableHead>
//                     <TableHead>Price</TableHead>
//                     <TableHead>Total Sales</TableHead>
//                     <TableHead>Created at</TableHead>
//                     <TableHead>Actions</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   <TableRow>
//                     <TableCell>
//                       <Image
//                         alt="Product image"
//                         className="aspect-square rounded-md object-cover"
//                         height="64"
//                         src="/placeholder.svg"
//                         width="64"
//                       />
//                     </TableCell>
//                     <TableCell className="font-medium">
//                       Laser Lemonade Machine
//                     </TableCell>
//                     <TableCell>
//                       <Badge variant="outline">Draft</Badge>
//                     </TableCell>
//                     <TableCell>$499.99</TableCell>
//                     <TableCell>25</TableCell>
//                     <TableCell>2023-07-12 10:42 AM</TableCell>
//                     <TableCell>
//                       <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                           <Button size="icon" variant="ghost">
//                             <MoreHorizontal className="h-4 w-4" />
//                             <span className="sr-only">Open menu</span>
//                           </Button>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent align="end">
//                           <DropdownMenuLabel>Actions</DropdownMenuLabel>
//                           <DropdownMenuItem>Edit</DropdownMenuItem>
//                           <DropdownMenuItem>Delete</DropdownMenuItem>
//                         </DropdownMenuContent>
//                       </DropdownMenu>
//                     </TableCell>
//                   </TableRow>
//                   <TableRow>
//                     <TableCell>
//                       <Image
//                         alt="Product image"
//                         className="aspect-square rounded-md object-cover"
//                         height="64"
//                         src="/placeholder.svg"
//                         width="64"
//                       />
//                     </TableCell>
//                     <TableCell className="font-medium">
//                       Hypernova Headphones
//                     </TableCell>
//                     <TableCell>
//                       <Badge variant="outline">Active</Badge>
//                     </TableCell>
//                     <TableCell>$129.99</TableCell>
//                     <TableCell>100</TableCell>
//                     <TableCell>2023-10-18 03:21 PM</TableCell>
//                     <TableCell>
//                       <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                           <Button size="icon" variant="ghost">
//                             <MoreHorizontal className="h-4 w-4" />
//                             <span className="sr-only">Open menu</span>
//                           </Button>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent align="end">
//                           <DropdownMenuLabel>Actions</DropdownMenuLabel>
//                           <DropdownMenuItem>Edit</DropdownMenuItem>
//                           <DropdownMenuItem>Delete</DropdownMenuItem>
//                         </DropdownMenuContent>
//                       </DropdownMenu>
//                     </TableCell>
//                   </TableRow>
//                   {/* Add more TableRow components for additional products */}
//                 </TableBody>
//               </Table>
//             </CardContent>
//             <CardFooter>
//               <div className="text-xs text-muted-foreground">
//                 Showing <strong>1-10</strong> of <strong>32</strong> products
//               </div>
//             </CardFooter>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   )
// }


import { PlusCircle, MenuSquare, Info } from "lucide-react"
import MenuListCard from "@/components/dashboard-components/menu-management-components/MenuListCard"

import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function ProductList() {
  return (
    <div className="container mx-auto bg-white pt-10 pb-2 border-t border-gray-200">
      <div className="mb-6 flex px-5 items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Menu Management</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <MenuSquare className="h-4 w-4" />
            Improve Menu
          </Button>
          <Button className="gap-2 bg-blue-700 hover:bg-blue-800">
            <PlusCircle className="h-4 w-4" />
            Create Menu
          </Button>
        </div>
      </div>
      <div className="mb-6 px-5 flex items-center justify-between">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-[400px] grid-cols-3">
            <TabsTrigger value="all">Menus</TabsTrigger>
            <TabsTrigger value="modifier">Modifiers</TabsTrigger>
            <TabsTrigger value="archive">Archive</TabsTrigger>
          </TabsList>
        </Tabs>
        <Button variant="ghost" className="gap-2">
          <Info className="h-4 w-4" />
          Learn More
        </Button>
      </div>
      {/* <Tabs>
        
      <TabsContent value="all">
        <p className="text-muted-foreground">All products will be listed here.</p>
      </TabsContent>
      <TabsContent value="active">
        <p className="text-muted-foreground">Active products will be listed here.</p>
      </TabsContent>
      <TabsContent value="draft">
        <p className="text-muted-foreground">Draft products will be listed here.</p>
      </TabsContent>
      <TabsContent value="archived">
        <p className="text-muted-foreground">Archived products will be listed here.</p>
      </TabsContent>
      </Tabs> */}

      <MenuListCard/>
    </div>
  )
}



// import { PlusCircle } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs"

// export default function ProductList() {
//   return (
//     <div className="container mx-auto py-10">
//       <div className="mb-6 flex items-center justify-between">
//         <h1 className="text-3xl font-bold tracking-tight">Products</h1>
//         <Button className="gap-2">
//           <PlusCircle className="h-4 w-4" />
//           Add Product
//         </Button>
//       </div>
//       <Tabs defaultValue="all" className="w-full">
//         <TabsList className="grid w-full grid-cols-4">
//           <TabsTrigger value="all">All Products</TabsTrigger>
//           <TabsTrigger value="active">Active</TabsTrigger>
//           <TabsTrigger value="draft">Draft</TabsTrigger>
//           <TabsTrigger value="archived">Archived</TabsTrigger>
//         </TabsList>
//         <TabsContent value="all">
//           <p className="text-muted-foreground">All products will be listed here.</p>
//         </TabsContent>
//         <TabsContent value="active">
//           <p className="text-muted-foreground">Active products will be listed here.</p>
//         </TabsContent>
//         <TabsContent value="draft">
//           <p className="text-muted-foreground">Draft products will be listed here.</p>
//         </TabsContent>
//         <TabsContent value="archived">
//           <p className="text-muted-foreground">Archived products will be listed here.</p>
//         </TabsContent>
//       </Tabs>
//     </div>
//   )
// }