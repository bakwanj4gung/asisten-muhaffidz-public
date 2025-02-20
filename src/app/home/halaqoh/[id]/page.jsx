import Navbar from '@/components/home/Navbar';
import React, { Suspense } from 'react'
import { Spinner } from 'flowbite-react';
import TableHalaqohDetail from '@/components/home/halaqoh/TableHalaqohDetail';

export default function pageDetailHalaqoh() {

    return (
        <>
            <Navbar header={'Detail Halaqoh'} back={true} />
            <Suspense 
                fallback={
                    <div className='min-h-screen max-h-fit flex items-center justify-center'>
                        <Spinner aria-label="Extra large spinner example" size="xl" />
                    </div>
                }
            >
                <TableHalaqohDetail />
            </Suspense>
        </>
    )
}
