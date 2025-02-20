import Navbar from '@/components/home/Navbar'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Spinner } from 'flowbite-react'
import React, { Suspense } from 'react'

export default function pageEditSchedule() {
    return (
        <>
        <Navbar header={'Edit Jadwal nama santri'} back={true} />
        <Suspense 
            fallback={
                <div className='min-h-screen max-h-fit flex items-center justify-center'>
                    <Spinner aria-label="Extra large spinner example" size="xl" />
                </div>
            }
        >
            <div className='mt-10 w-8/12 rounded-xl mx-auto overflow-hidden bg-reversePrimary'>
                <h1 className='text-xl font-semibold p-3 bg-slate-400 border-b-2 border-slate-700'>Nama Santri</h1>
                <form action="" className='py-5 px-4'>
                    <div className="flex flex-wrap justify-center xl:grid grid-cols-3 gap-3 md:gap-6 w-full xl:w-fit mx-auto">
                        <div className="bg-primary max-w-[220px] tracking-wide text-reversePrimary rounded-xl font-semibold text-sm py-1 md:py-3 px-3 flex flex-col items-center justify-center">
                            <div className="text-lg w-full flex items-center justify-end mb-2">
                                <p className='w-full text-center ps-3'>Senin</p>
                                <label htmlFor="clock1" className='px-1 rounded-lg transition-all duration-200 active:scale-90 hover:bg-yellow-300 hover:text-black'>
                                    <FontAwesomeIcon icon={faPenToSquare} size='sm' className='' />
                                </label>
                            </div>
                            <input id="clock1" defaultValue={'10.00 - 11.00'} type="text" className="peer py-0 text-center block w-full bg-transparent border-y-transparent border-x-transparent text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-2 focus:border-b-reversePrimary focus:ring-0 placeholder:text-reversePrimary" placeholder="Masukkan waktu" />
                        </div>
                        <div className="bg-primary max-w-[220px] tracking-wide text-reversePrimary rounded-xl font-semibold text-sm py-1 md:py-3 px-3 flex flex-col items-center justify-center">
                            <div className="text-lg w-full flex items-center justify-end mb-2">
                                <p className='w-full text-center ps-3'>Senin</p>
                                <label htmlFor="clock2" className='px-1 rounded-lg transition-all duration-200 active:scale-90 hover:bg-yellow-300 hover:text-black'>
                                    <FontAwesomeIcon icon={faPenToSquare} size='sm' className='' />
                                </label>
                            </div>
                            <input id="clock2" defaultValue={'10.00 - 11.00'} type="text" className="peer py-0 text-center block w-full bg-transparent border-y-transparent border-x-transparent text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-2 focus:border-b-reversePrimary focus:ring-0 placeholder:text-reversePrimary" placeholder="Masukkan waktu" />
                        </div>
                        <div className="bg-primary max-w-[220px] tracking-wide text-reversePrimary rounded-xl font-semibold text-sm py-1 md:py-3 px-3 flex flex-col items-center justify-center">
                            <div className="text-lg w-full flex items-center justify-end mb-2">
                                <p className='w-full text-center ps-3'>Senin</p>
                                <label htmlFor="clock3" className='px-1 rounded-lg transition-all duration-200 active:scale-90 hover:bg-yellow-300 hover:text-black'>
                                    <FontAwesomeIcon icon={faPenToSquare} size='sm' className='' />
                                </label>
                            </div>
                            <input id="clock3" defaultValue={'10.00 - 11.00'} type="text" className="peer py-0 text-center block w-full bg-transparent border-y-transparent border-x-transparent text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-2 focus:border-b-reversePrimary focus:ring-0 placeholder:text-reversePrimary" placeholder="Masukkan waktu" />
                        </div>
                        <div className="bg-primary max-w-[220px] tracking-wide text-reversePrimary rounded-xl font-semibold text-sm py-1 md:py-3 px-3 flex flex-col items-center justify-center">
                            <div className="text-lg w-full flex items-center justify-end mb-2">
                                <p className='w-full text-center ps-3'>Kamis</p>
                                <label htmlFor="clock4" className='px-1 rounded-lg transition-all duration-200 active:scale-90 hover:bg-yellow-300 hover:text-black'>
                                    <FontAwesomeIcon icon={faPenToSquare} size='sm' className='' />
                                </label>
                            </div>
                            <input id="clock4" defaultValue={'10.00 - 11.00'} type="text" className="peer py-0 text-center block w-full bg-transparent border-y-transparent border-x-transparent text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-2 focus:border-b-reversePrimary focus:ring-0 placeholder:text-reversePrimary" placeholder="Masukkan waktu" />
                        </div>
                        <div className="bg-primary max-w-[220px] tracking-wide text-reversePrimary rounded-xl font-semibold text-sm py-1 md:py-3 px-3 flex flex-col items-center justify-center">
                            <div className="text-lg w-full flex items-center justify-end mb-2">
                                <p className='w-full text-center ps-3'>Jum'at</p>
                                <label htmlFor="clock5" className='px-1 rounded-lg transition-all duration-200 active:scale-90 hover:bg-yellow-300 hover:text-black'>
                                    <FontAwesomeIcon icon={faPenToSquare} size='sm' className='' />
                                </label>
                            </div>
                            <input id="clock5" defaultValue={'10.00 - 11.00'} type="text" className="peer py-0 text-center block w-full bg-transparent border-y-transparent border-x-transparent text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-2 focus:border-b-reversePrimary focus:ring-0 placeholder:text-reversePrimary" placeholder="Masukkan waktu" />
                        </div>
                        <div className="bg-primary max-w-[220px] tracking-wide text-reversePrimary rounded-xl font-semibold text-sm py-1 md:py-3 px-3 flex flex-col items-center justify-center">
                            <div className="text-lg w-full flex items-center justify-end mb-2">
                                <p className='w-full text-center ps-3'>Sabtu</p>
                                <label htmlFor="clock6" className='px-1 rounded-lg transition-all duration-200 active:scale-90 hover:bg-yellow-300 hover:text-black'>
                                    <FontAwesomeIcon icon={faPenToSquare} size='sm' className='' />
                                </label>
                            </div>
                            <input id="clock6" defaultValue={'10.00 - 11.00'} type="text" className="peer py-0 text-center block w-full bg-transparent border-y-transparent border-x-transparent text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-2 focus:border-b-reversePrimary focus:ring-0 placeholder:text-reversePrimary" placeholder="Masukkan waktu" />
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center xl:grid grid-cols-3 gap-3 md:gap-6 w-full xl:w-fit mx-auto mt-3 md:mt-6">
                        <div className='hidden xl:block'></div>
                        <div className="bg-primary max-w-[220px] tracking-wide text-reversePrimary rounded-xl font-semibold text-sm py-1 md:py-3 px-3 flex flex-col items-center justify-center">
                            <div className="text-lg w-full flex items-center justify-end mb-2">
                                <p className='w-full text-center ps-3'>Minggu</p>
                                <label htmlFor="clock7" className='px-1 rounded-lg transition-all duration-200 active:scale-90 hover:bg-yellow-300 hover:text-black'>
                                    <FontAwesomeIcon icon={faPenToSquare} size='sm' className='' />
                                </label>
                            </div>
                            <input id="clock7" defaultValue={'10.00 - 11.00'} type="text" className="peer py-0 text-center block w-full bg-transparent border-y-transparent border-x-transparent text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-2 focus:border-b-reversePrimary focus:ring-0 placeholder:text-reversePrimary" placeholder="Masukkan waktu" />
                        </div>
                    </div>
                    <div className=" mt-7 ms-auto w-fit me-3">
                        <button className='bg-blue-500 text-slate-100 border-2 border-blue-500 px-5 py-2 rounded-xl transition-all duration-250 hover:bg-reversePrimary hover:text-primary'>Simpan</button>
                    </div>
                </form>
            </div>
        </Suspense>
        </>
    )
}
