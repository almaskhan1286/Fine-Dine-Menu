"use client";

import React from 'react';
import { dashSideBarMenus } from '../../constants/index'; // Ensure this path is correct
import Link from 'next/link';

export default function SideBar() {

    const venueId = '123';
    return(
        <div>
            
            {dashSideBarMenus.map(({name, icon, href}) => (
                <Link 
                    key={name}
                    href={href.replace('[venueId]',venueId)}
                    passHref
                >
                    <div className="flex gap-x-2 leading-10 items-center cursor-pointer hover:text-blue-800">
                        <span className='text-lg'>
                            {icon}
                        </span>
                        <span className='font-normal'>
                            {name}
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    )
}
