import Navbar from '@/components/home/Navbar'
import dynamic from 'next/dynamic';
import React from 'react'

const FormAddMonthlyProgress = dynamic(() => import('@/components/home/progress/FormAddMonthlyProgress'), { ssr: false });


export default function MonthlyProgress() {
    return (
        <>
            <Navbar header={'Pencapaian Bulanan'} back={true} />
            <div className='bg-reversePrimary rounded-xl w-11/12 lg:w-9/12 mt-7 mx-auto overflow-hidden'>
                <FormAddMonthlyProgress />
            </div>
        </>
    )
}
