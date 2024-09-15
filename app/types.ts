import React from 'react';

// Add types for the Sub-menu items for Header 
export interface SubMenuItems {
    name: string;
    href: string;
    description: string;
    icon: React.ReactNode;
}

// This is key value pairs or object that define the entire structural type of the menus and submenus according to the category viz...
export interface MenuCategory {
    [key: string]: {
        [subCategory: string]: SubMenuItems[];
    }
}

// Define types for ListItem props
export interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
    title: string;
    description: string;
    children: React.ReactNode;
    className?: string;
}

export interface SideBarMenu {
    name: string;
    href: string;
    icon: React.ReactNode;
}

