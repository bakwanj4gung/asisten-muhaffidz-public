import Navbar from '@/components/home/Navbar'
import CardProfileSantri from '@/components/home/santri/CardProfileSantri'
import TableDetailSantri from '@/components/home/santri/TableDetailSantri'
import React from 'react'

export default function pageDetailSantri() {
    return (
        <>
            <Navbar header={'Profile Santri'} backToSantri={true} />
            <div className='w-10/12 md:w-9/12 mx-auto py-10'>
                <CardProfileSantri />
                <TableDetailSantri />
            </div>
        </>
    )
}
