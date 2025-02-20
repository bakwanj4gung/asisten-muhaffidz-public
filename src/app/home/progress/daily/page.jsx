import Navbar from '@/components/home/Navbar'
import FormAddDailyProgress from '@/components/home/progress/FormAddDailyProgress'
import React from 'react'

export default function DailyProgress() {
    return (
        <>
            <Navbar header={'Pencapaian Harian'} back={true} />
            <div className='bg-reversePrimary rounded-xl w-11/12 lg:w-9/12 mt-7 mx-auto overflow-hidden'>
                <FormAddDailyProgress />
            </div>
        </>
    )
}
