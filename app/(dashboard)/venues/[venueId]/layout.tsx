import React from 'react';
import SideBar  from '@/components/dashboard-components/SideBar'
import Header from '@/components/dashboard-components/Header';
import AddVenue from '@/components/dashboard-components/AddVenue';

export default function DashboardLayout({ children }: { children:React.ReactNode }) {
    return(
        <div className='flex w-screen h-screen'>
            <div className='border w-1/5 hidden md:block'>
                <div className='p-5'>
                    <img 
                        src="/fine-logo.png" 
                        alt="Finedine Logo" 
                        className='w-24 max-w-28'
                    />
                </div>
                <div>
                    <AddVenue/>
                </div>
                <div className='pl-5'>
                    <SideBar/>
                </div>
            </div>
            <main className='w-full bg-[#f1f2f6]'>
                <Header/>
                {children}
            </main>
        </div>
    )
}