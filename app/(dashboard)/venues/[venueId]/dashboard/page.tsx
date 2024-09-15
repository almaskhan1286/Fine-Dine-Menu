'use client';

import  CollapsibleCard  from '@/components/dashboard-components/CollapsibleCard';
import ReportSummaryCard from '@/components/dashboard-components/ReportSummaryCard';

export default function Dashboard() {
    return(
        <div className='w-full md:w-3/4 px-5 py-5'>
           
                <CollapsibleCard/>
                    <div className="flex flex-wrap md:flex-nowrap gap-x-5 my-5">
                        <ReportSummaryCard/>
                        <ReportSummaryCard/>
                    </div>
            </div>
    )
}