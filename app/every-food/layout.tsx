import React from 'react';
import BrandView from '@/components/customer-view/BrandView';

export default function MenuManagementLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-screen h-screen">
        <div className='w-[30%] min-w-[30%] flex-1 flex-shrink-0'>
          
              {children}
           
        </div> 
        <div className='w-[70%] md:flex justify-center align-middle hidden'>
            <BrandView/>
        </div>
    </div>
  );
}
 