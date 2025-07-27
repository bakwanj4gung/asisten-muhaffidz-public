'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { faEllipsis, faHome, faPencil, faPhone, faQuestion, faUserGraduate, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import MenuSidenav from './MenuSidenav';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import {NextUIProvider} from "@nextui-org/react";
import { usePathname } from 'next/navigation';


export default function Sidenav() {
    const pathname = usePathname();
    const isProfileActive = pathname.startsWith('/home/profile');

    return (
        <>
            <NextUIProvider>
            <nav className="fixed max-h-fit md:h-full overflow-auto w-72 items-start top-0 md:left-0 md:block md:fixed md:top-0 md:bottom-0 flex-col md:flex-nowrap border-r-2 border-middleMan bg-reverseSecondary flex flex-wrap md:items-center justify-between md:w-72 z-10">
                <div className='w-full border-b-2 flex justify-center py-4 max-h-20'>
                    <Link href={'/'}>
                        <Image src={'/logo.svg'} width={150} height={50} alt='logo' priority={true} />
                    </Link>
                </div>
                <div className='w-full text-base font-semibold py-3 xl:py-6 text-accent'>
                    <h2 className='mb-4 ps-5'>Main menu</h2>
                    <ul className='flex flex-col text-sm'>
                        <MenuSidenav value={'Home'} href='/home' icon={faHome} />
                        <MenuSidenav icon={faUserGroup} value={'Halaqoh'} href='/home/halaqoh' sideHref={['/home/halaqoh/']} />
                        <MenuSidenav icon={faUserGraduate} value={'Santri'} href='/home/santri' sideHref={['/home/santri/']}/>
                        <MenuSidenav icon={faClock} value={'Jadwal Sesi'} href='/home/schedule' sideHref={['/home/schedule/']} />
                        <MenuSidenav icon={faPencil} value={'Pencapaian'} href='/home/progress' sideHref={['/home/progress/']} />
                    </ul>
                </div>
                <div className='w-full text-base font-semibold xl:py-6 text-accent'>
                    <h2 className='mb-4 ps-5'>Help & Support</h2>
                    <ul className='flex flex-col text-sm'>
                        <MenuSidenav icon={faQuestion} value={'Panduan'} classNameMenu='text-lg' />
                        <MenuSidenav icon={faPhone} value={'Contact Person'} />
                    </ul>
                </div>
                <div className='flex-1 h-36 w-full'></div>
                <Popover showArrow placement='top' backdrop={'transparent'} size={'lg'}>
                        <PopoverTrigger>
                            <div className={`group mb-5 w-full xl:absolute md:mt-1 bottom-0 left-0 z-10 flex items-center justify-between px-4 py-3 text-sm transition-all duration-200 cursor-pointer hover:bg-primary ${isProfileActive ? 'bg-secondary' : ''}`}>
                                <Image src={'/profile.png'} width={51} height={51} alt='profile' className='object-cover w-[51px] h-[51px] rounded-full group-hover:border-2 group-hover:border-white'/>
                                <div className='truncate px-1 me-1'>
                                    <p className={`font-semibold group-hover:text-white ${isProfileActive ? 'text-white' : 'text-primary'}`}>Muhammad Faqih Ali</p>
                                    <p className={`text-xs group-hover:text-white ${isProfileActive ? 'text-white' : ' text-slate-500'}`}>mfaqih.aali@gmail.com</p>
                                </div>
                                <FontAwesomeIcon icon={faEllipsis} className={`fas fa-ellipsis text-xl group-hover:text-white ${isProfileActive ? 'text-white' : 'text-primary'}`}/>
                            </div>
                        </PopoverTrigger>
                        <PopoverContent className=" w-60 p-0 py-1 overflow-hidden">
                            <div className="flex flex-col w-full font-semibold text-sm tracking-wide">
                                <Link href={'/home/profile'} className="py-2 ps-4 transition-all duration-150 hover:bg-secondary hover:text-white mb-1">Edit Profile</Link>
                                <Link href={'#'} className="py-2 ps-4 transition-all duration-150 hover:bg-secondary hover:text-red-700">Logout</Link>
                            </div>
                        </PopoverContent>
                </Popover>
            </nav>
            </NextUIProvider>
        </>
    )
}


