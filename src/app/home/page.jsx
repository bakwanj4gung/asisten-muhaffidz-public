import Navbar from '@/components/home/Navbar'
import React from 'react'

export default function Main() {
    return (
        <>
            <Navbar header={'Halaman Utama'} />
            <div>
                Table list 10 santri hafalan terbanyak
            </div>
            <div>
                Table list Daftar halaqoh
            </div>
            <div>
                Table list Jadwal sesi
            </div>
            <div>
                Table list Pencapaian
            </div>
        </>
    )
}
