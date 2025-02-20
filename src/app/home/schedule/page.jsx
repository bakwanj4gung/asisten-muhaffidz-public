import Navbar from '@/components/home/Navbar'
import ScheduleChildPage from '@/components/home/schedule/SheduleChildPage'
import React from 'react'

export default function Schedule() {
    return (
        <>
            <Navbar header={'Jadwal Sesi'} home={true} />
            
            <div className=''>
                <ScheduleChildPage />
            </div>
        </>
    )
}
