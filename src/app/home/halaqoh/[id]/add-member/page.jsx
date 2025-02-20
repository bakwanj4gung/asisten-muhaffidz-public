'use client';

import Navbar from '@/components/home/Navbar'
import React, { Suspense } from 'react'
import { Spinner } from 'flowbite-react'
import dynamic from 'next/dynamic';

const TableHalaqohAddMember = dynamic(() => import('@/components/home/halaqoh/TableHalaqohAddMember'), {
    suspense: true
});

export default function pageAddMember() {
    return (
        <>
        <Navbar header={'Tambah Anggota Halaqoh'} back={true} />
        <div className='px-11 py-6'>
            <Suspense 
                fallback={
                    <div className='min-h-screen max-h-fit flex items-center justify-center'>
                        <Spinner aria-label="Extra large spinner example" size="xl" />
                    </div>
                }
            >
                <TableHalaqohAddMember />
            </Suspense>
        </div>
    </>
    )
}
