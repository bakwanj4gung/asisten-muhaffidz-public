import Navbar from '@/components/home/Navbar'
import CardsButtonsInputOption from '@/components/home/progress/CardsButtonsInputOption'
import TableAllProgress from '@/components/home/progress/TableAllProgress'
import React from 'react'

export default function Progress() {
    return (
        <>
            <Navbar header={'Pencapaian'} home={true} />
            <CardsButtonsInputOption />
            <div className='w-8/12 py-9 h-fit mx-auto overflow-hidden'>
                <TableAllProgress />
            </div>
        </>
    )
}
