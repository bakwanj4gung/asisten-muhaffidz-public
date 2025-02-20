'use client';

import React, { useEffect, useState } from "react"
import Glide from "@glidejs/glide"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import Link from "next/link";


export default function ScheduleChildPage() {
    useEffect(() => {
        const slider = new Glide(".glide-01", {
        type: "carousel",
        focusAt: "center",
        perView: 3,
        gap: 24,
        autoplay: false,
        classNames: {
            nav: {
            active: "[&>*]:bg-wuiSlate-700",
            },
        },
        breakpoints: {
            1024: {
            perView: 2,
            },
            640: {
            perView: 1,
            },
        },
        }).mount()

        return () => {
        slider.destroy()
        }
    }, [])

    return (
        <div className="w-10/12 mx-auto">
            {/*<!-- Component: Carousel with controls inside --> */}
            <div className="glide-01 relative">
                {/*    <!-- Slides --> */}
                <div className="overflow-hidden h-40" data-glide-el="track">
                    <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full h-full overflow-hidden p-0">
                        <li className="group cursor-pointer flex-shrink-0 bg-sky-500 flex items-center justify-center">
                            <button className="group-hover:scale-95 active:scale-[0.94] transition-all duration-300 text-5xl font-semibold text-blue-700">Senin</button>
                        </li>
                        <li className="group cursor-pointer flex-shrink-0 bg-teal-400 flex items-center justify-center">
                            <button className="group-hover:scale-95 active:scale-[0.94] transition-all duration-300 text-5xl font-semibold text-teal-600">Selasa</button>
                        </li>
                        <li className="group cursor-pointer flex-shrink-0 bg-violet-400 flex items-center justify-center">
                            <button className="group-hover:scale-95 active:scale-[0.94] transition-all duration-300 text-5xl font-semibold text-indigo-700">Rabu</button>
                        </li>
                        <li className="group cursor-pointer flex-shrink-0 bg-pink-400 flex items-center justify-center">
                            <button className="group-hover:scale-95 active:scale-[0.94] transition-all duration-300 text-5xl font-semibold text-rose-700">Kamis</button>
                        </li>
                        <li className="group cursor-pointer flex-shrink-0 bg-orange-400 flex items-center justify-center">
                            <button className="group-hover:scale-95 active:scale-[0.94] transition-all duration-300 text-5xl font-semibold text-orange-700">Jum'at</button>
                        </li>
                        <li className="group cursor-pointer flex-shrink-0 bg-zinc-400 flex items-center justify-center">
                            <button className="group-hover:scale-95 active:scale-[0.94] transition-all duration-300 text-5xl font-semibold text-zinc-700">Sabtu</button>
                        </li>
                        <li className="group cursor-pointer flex-shrink-0 bg-white flex items-center justify-center">
                            <button className="group-hover:scale-95 active:scale-[0.94] transition-all duration-300 text-5xl font-semibold text-slate-800">Minggu</button>
                        </li>
                    </ul>
                </div>
                {/*    <!-- Controls --> */}
                <div
                    className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
                    data-glide-el="controls"
                >
                    <button
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-600 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                        data-glide-dir="<"
                        aria-label="prev slide"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} className="h-5 w-5" />
                    </button>
                    <button
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-600 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
                        data-glide-dir=">"
                        aria-label="next slide"
                    >
                        <FontAwesomeIcon icon={faChevronRight} className="h-5 w-5" />
                    </button>
                </div>
            </div>
            {/*<!-- End Carousel with controls inside --> */}
            <ListSchedule />
        </div>
    )
}

const ListSchedule = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <div className="mt-5 w-full xl:w-8/12 mx-auto">
            <button onClick={onOpen} className="cursor-pointer md:flex items-center justify-between px-3 lg:px-5 rounded-full py-3 mb-3 bg-primary w-full transition-all duration-150 hover:scale-[0.99] active:scale-[0.98]">
                <div className="flex items-center gap-2">
                    <Image src={'/default.png'} width={70} height={70} alt={'Profile'} className='rounded-full' />
                    <div>
                        <p className="lg:text-lg font-semibold text-slate-100">Muhammad Faqih Ali</p>
                        <p className="text-sm md:text-left text-slate-200">Umar bin Khattab</p>
                        <p className="md:hidden text-base font-semibold text-slate-100">11.00 - 13.00</p>
                    </div>
                </div>
                <div className="xl:me-5">
                    <p className="hidden md:block text-base lg:text-xl font-semibold text-slate-100">11.00 - 13.00</p>
                </div>
            </button>
            <button onClick={onOpen} className="cursor-pointer md:flex items-center justify-between px-3 lg:px-5 rounded-full py-3 mb-3 bg-primary w-full transition-all duration-150 hover:scale-[0.99] active:scale-[0.98]">
                <div className="flex items-center gap-2">
                    <Image src={'/default.png'} width={70} height={70} alt={'Profile'} className='rounded-full' />
                    <div>
                        <p className="lg:text-lg font-semibold text-slate-100">Muhammad Faqih Ali</p>
                        <p className="text-sm md:text-left text-slate-200">Umar bin Khattab</p>
                        <p className="md:hidden text-base font-semibold text-slate-100">11.00 - 13.00</p>
                    </div>
                </div>
                <div className="xl:me-5">
                    <p className="hidden md:block text-base lg:text-xl font-semibold text-slate-100">11.00 - 13.00</p>
                </div>
            </button>
            <ModalDetail isOpen={isOpen} onOpenChange={onOpenChange} />
        </div>
    )
}

const ModalDetail = ({ isOpen, onOpen, onOpenChange }) => {
    const route = useRouter();
    return (
        <>
            <Modal 
                backdrop="blur" 
                isOpen={isOpen} 
                onOpenChange={onOpenChange}
                size="xl"
            >
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="bg-slate-400 border-b-2 text-xl pe-5">Muhammad Faqih Ali hu jikaej neekmk</ModalHeader>
                        <ModalBody className="pt-5">
                            <div className="grid grid-cols-3 gap-3">
                                <div className="bg-primary tracking-wide text-reversePrimary rounded-xl font-semibold text-sm py-1 flex flex-col items-center justify-center">
                                    <p className="text-lg">Senin</p>
                                    <p>10.00 - 11.00</p>
                                </div>
                                <div className="bg-primary tracking-wide text-reversePrimary rounded-xl font-semibold text-sm py-1 flex flex-col items-center justify-center">
                                    <p className="text-lg">Selasa</p>
                                    <p>10.00 - 11.00</p>
                                </div>
                                <div className="bg-primary tracking-wide text-reversePrimary rounded-xl font-semibold text-sm py-1 flex flex-col items-center justify-center">
                                    <p className="text-lg">Rabu</p>
                                    <p>10.00 - 11.00</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                <div className="bg-primary tracking-wide text-reversePrimary rounded-xl font-semibold text-sm py-1 flex flex-col items-center justify-center">
                                    <p className="text-lg">Kamis</p>
                                    <p>10.00 - 11.00</p>
                                </div>
                                <div className="bg-primary tracking-wide text-reversePrimary rounded-xl font-semibold text-sm py-1 flex flex-col items-center justify-center">
                                    <p className="text-lg">Jum'at</p>
                                    <p>10.00 - 11.00</p>
                                </div>
                                <div className="bg-primary tracking-wide text-reversePrimary rounded-xl font-semibold text-sm py-1 flex flex-col items-center justify-center">
                                    <p className="text-lg">Sabtu</p>
                                    <p>10.00 - 11.00</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                <div></div>
                                <div className="bg-primary tracking-wide text-reversePrimary rounded-xl font-semibold text-sm py-1 flex flex-col items-center justify-center">
                                    <p className="text-lg">Ahad</p>
                                    <p>10.00 - 11.00</p>
                                </div>
                            </div>
                        </ModalBody>
                    <ModalFooter>
                        <Link href={'/home/schedule/edit/1'} className="py-2 px-5 border-2 border-yellow-400 bg-yellow-400 text-reversePrimary font-semibold rounded-xl transition-all duration-300 hover:bg-reversePrimary hover:text-yellow-400">
                            Edit
                        </Link>
                        <button onClick={onClose} className="py-2 px-5 border-2 border-blue-500 bg-blue-500 text-reversePrimary font-semibold rounded-xl transition-all duration-300 hover:bg-reversePrimary hover:text-blue-500">
                            Tutup
                        </button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    )
}