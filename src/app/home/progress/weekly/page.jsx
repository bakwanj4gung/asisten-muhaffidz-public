import Navbar from '@/components/home/Navbar'
import FormAddWeeklyProgress from '@/components/home/progress/FormAddWeeklyProgress'
import React from 'react'

export default function WeeklyProgress() {
    return (
        <>
            <Navbar header={'Pencapaian Mingguan'} back={true} />
            <div className='bg-reversePrimary rounded-xl w-11/12 lg:w-9/12 mt-7 mx-auto overflow-hidden'>
                <FormAddWeeklyProgress />
            </div>
        </>
    )
}
