'use client';

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faHome, faPerson, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import MenuSidenavDetail from './MenuSidenavDetail';


export default function SidenavDetail() {
    return (
        <>
            <nav className="fixed max-h-fit md:h-full overflow-auto w-72 items-start top-0 md:left-0 md:block md:fixed md:top-0 md:bottom-0 flex-col md:flex-nowrap border-r-2 border-middleMan bg-reverseSecondary flex flex-wrap md:items-center justify-between md:w-72 z-10">
                <div className='w-full border-b-2 flex justify-center py-4 max-h-20'>
                    <Link href={'/'}>
                        <Image src={'/logo.svg'} width={150} height={50} alt='logo' priority={true} loading='eager' />
                    </Link>
                </div>
                <div className='w-full text-base font-semibold py-3 xl:py-6 text-accent' >
                    <h2 className='mb-4 ps-5'>List Halaqoh</h2>
                    <div className=''>
                        <Accordion variant='light' defaultExpandedKeys={["1"]}>
                            <AccordionItem classNames={{title: 'ps-5 text-base font-semibold text-primary'}} key='1' aria-label="Accordion 1" title="Nama Halaqoh" indicator={<FontAwesomeIcon icon={faChevronLeft} className='text-primary pe-2' />}>
                                <ul className='text-sm ps-7 flex flex-col justify-start gap-2'>
                                    <MenuSidenavDetail value={'Joko'} href='/santri/1' />
                                    <MenuSidenavDetail value={'Doni'} href='/santri/2' />
                                    <MenuSidenavDetail value={'Slamet'} href='/santri/3' />
                                </ul>
                            </AccordionItem>
                            <AccordionItem classNames={{title: 'ps-5 text-base font-semibold text-primary'}} key='2' aria-label="Accordion 2" title="Nama Halaqoh" indicator={<FontAwesomeIcon icon={faChevronLeft} className='text-primary pe-2' />}>
                                <ul className='text-sm ps-7 flex flex-col justify-start gap-2'>
                                    <MenuSidenavDetail value={'Naruto'} href='/santri/4' />
                                    <MenuSidenavDetail value={'Sasuke'} href='/santri/5' />
                                    <MenuSidenavDetail value={'Nobita'} href='/santri/6' />
                                </ul>
                            </AccordionItem>
                            
                        </Accordion>
                    </div>
                </div>
            </nav>
        </>
    )
}
