'use client';

import * as React from "react";
import Link from "next/link";
import { menuItems } from "../../constants/index"; 
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { ListItemProps } from "@/app/types";

const Header = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {Object.entries(menuItems).map(([mainCategory, subCategories]) => (
          <NavigationMenuItem key={mainCategory}>
            <NavigationMenuTrigger>{mainCategory}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[800px] lg:grid-cols-3">
                {Object.entries(subCategories).map(([subCategory, items]) => (
                  <div key={subCategory}>
                    <div className="font-bold mb-2 text-gray-500">{subCategory}</div>
                    {items.map(({ name, href, icon, description }) => (
                      <ListItem key={name} href={href} title={name} description={description}>
                        <span className="text-red-500 text-xl">{icon}</span>
                      </ListItem>
                    ))}
                  </div>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}

        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  ListItemProps
>(({ className, title, description, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground" +
            (className ? ` ${className}` : "")
          }
          {...props}
        >
          <div className="flex gap-x-3">
            {children}
            <div className="flex flex-col items-start space-y-2">
              <span className="text-sm lg:text-[1rem] font-medium leading-none">{title}</span>
              <span className="text-sm font-normal leading-none text-gray-500">{description}</span>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Header;


