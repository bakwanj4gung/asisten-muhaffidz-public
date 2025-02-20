import Navbar from '@/components/home/Navbar'
import FormAddSantri from '@/components/home/santri/FormAddSantri'
import { Spinner } from 'flowbite-react'
import React, { Suspense } from 'react'

export default function pageAddSantri() {
    return (
        <>
            <Navbar header={'Tambah Santri Baru'} back={true} />
            <Suspense 
                fallback={
                    <div className='min-h-screen max-h-fit flex items-center justify-center'>
                        <Spinner aria-label="Extra large spinner example" size="xl" />
                    </div>
                }
            >
                <FormAddSantri />
            </Suspense> 
        </>
    )
}
