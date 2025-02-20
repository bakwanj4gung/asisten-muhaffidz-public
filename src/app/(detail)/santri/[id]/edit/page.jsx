import Navbar from '@/components/home/Navbar'
import FormEditSantri from '@/components/home/santri/FormEditSantri'
import React from 'react'

export default function page() {
    return (
        <>
            <Navbar header={'Edit Profil Santri'} back={true} />
            <FormEditSantri />
        </>
    )
}
