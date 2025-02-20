'use client';

import Link from 'next/link'
import React from 'react'
import { faArrowLeft, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'

export default function Navbar({header, back=false, home=false, backToSantri=false }) {
    const router = useRouter()
    return (
    <div className='font-semibold min-h-20 border-b-2 flex items-center px-14'>
        <p>{header}</p>
        <div onClick={() => router.back()} className={'group ml-auto flex items-center justify-center h-full gap-3 bg-primary p-3 px-6 text-middleMan rounded-xl font-semibold tracking-wider border-2 border-middleMan transition-all duration-300 hover:bg-reversePrimary hover:text-primary hover:border-primary ' + (back ? 'block' : 'hidden')}>
            <FontAwesomeIcon icon={faArrowLeft} className='group-hover:-translate-x-1 fas fa-arrow-left'/>
            <p className='hidden xl:block'>Kembali</p>
        </div>
        <Link href={'/home'} className={'group flex items-center justify-center gap-3 ml-auto bg-primary p-3 px-6 text-middleMan rounded-xl font-semibold tracking-wider border-2 border-middleMan transition-all duration-300 hover:bg-reversePrimary hover:text-primary hover:border-primary ' + (home ? 'block' : 'hidden')}>
            <FontAwesomeIcon icon={faHome} className='group-hover:scale-105 fas fa-arrow-left'/>
            <p className='hidden xl:block'>Kembali ke Halaman Utama</p>
        </Link>
        <Link href={'/home/santri'} className={'group flex items-center justify-center gap-3 ml-auto bg-primary p-3 px-6 text-middleMan rounded-xl font-semibold tracking-wider border-2 border-middleMan transition-all duration-300 hover:bg-reversePrimary hover:text-primary hover:border-primary ' + (backToSantri ? 'block' : 'hidden')}>
            <FontAwesomeIcon icon={faArrowLeft} className='group-hover:scale-105 fas fa-arrow-left'/>
            <p className='hidden xl:block'>Kembali ke Halaman Santri</p>
        </Link>
    </div>
    )
}
