'use client';

import { DatePicker } from '@nextui-org/react';
import React from 'react'
import Select from 'react-select';

export default function FormAddDailyProgress() {
    return (
        <>
            <h1 className='px-7 py-4 border-b-2 border-slate-700 bg-slate-300 text-lg lg:text-2xl font-semibold'>Formulir Pencapaian <span className='underline underline-offset-2 decoration-4 decoration-emerald-400'>Harian</span></h1>
            <form className='flex flex-col w-full py-5 px-10'>
                <div className='grid grid-cols-1 xl:grid-cols-7 md:gap-4 w-full xl:mb-4'>
                    <div className='col-span-3'>
                        <label htmlFor='name' className="block mb-2 font-semibold text-sm text-gray-500">Nama <span>*</span></label>
                        <Select id='name' placeholder={'Pilih Santri'}/>
                    </div>
                    <div className='col-span-2 mt-4 xl:mt-0 lg:mt-0'>
                        <label htmlFor='date' className="block mb-2 font-semibold text-sm text-gray-500">Tanggal <span>*</span></label>
                        <DatePicker id='date' variant='faded' />
                    </div>
                    <div className='col-span-2 mt-4 xl:mt-0 lg:mt-0'>
                        <label htmlFor='lulus' className="block mb-2 font-semibold text-sm text-gray-500">Lulus <span>*</span></label>
                        <select defaultValue={''} id='halaqoh' className='p-2.5 rounded-lg bg-slate-50 border-2 border-gray-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full placeholder:text-slate-300'>
                            <option disabled value=""></option>
                            <option value={'Lulus'}>Lulus</option>
                            <option value={'Tidak Lulus'}>Tidak Lulus</option>
                        </select>
                    </div>
                </div>
                <div className='xl:grid grid-cols-2 md:gap-4 w-full xl:mb-4'>
                    <div className='mt-4 xl:mt-0 lg:mt-0 w-full'>
                        <label htmlFor='tasmi' className="block mb-2 font-semibold text-sm text-gray-500">Hafalan <span>*</span></label>
                        <div className='flex flex-nowrap items-center gap-2 w-full'>
                            <div className='w-full'>
                                <input id='tasmi' type='text' placeholder='Al-Baqarah:1' className='rounded-lg bg-slate-50 border-2 border-gray-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full placeholder:text-slate-300'/>
                            </div>
                            <p className='text-3xl'>-</p>
                            <div className='w-full'>
                                <input id='tasmi' type='text' placeholder='Al-Baqarah:30' className='rounded-lg bg-slate-50 border-2 border-gray-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full placeholder:text-slate-300'/>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 xl:mt-0 md:flex flex-nowrap items-center gap-8 xl:gap-4'>
                        <div className='w-full'>
                            <label htmlFor='jumlah_halaman_setoran' className="block mb-3 lg:mb-2 font-semibold text-xs whitespace-nowrap truncate lg:text-sm text-gray-500">Jumlah Halaman Setoran <span>*</span></label>
                            <input id='jumlah_halaman_setoran' placeholder='10' type='number' className='rounded-lg bg-slate-50 border-2 border-gray-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full placeholder:text-slate-300'/>
                        </div>
                        <div className='mt-4 md:mt-0 w-full'>
                            <label htmlFor='murojaah' className="block mb-2 font-semibold text-sm text-gray-500">Murojaah <span>*</span></label>
                            <input id='murojaah' placeholder='Hal. 1-10/Juz 5/Al-Fath' type='text' className='rounded-lg bg-slate-50 border-2 border-gray-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full placeholder:text-slate-300'/>
                        </div>
                    </div>
                </div>
                <div className='mt-4 xl:mt-0'>
                    <div>
                        <label htmlFor='note' className="block mb-2 font-semibold text-sm text-gray-500">Catatan</label>
                        <input id='note' type='text' className='p-2.5 rounded-lg bg-slate-50 border-2 border-gray-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full mb-6'/>
                    </div>
                </div>
                <button type='submit' className='md:w-1/2 xl:w-1/4 bg-primary border-2 border-primary px-5 py-2 text-reversePrimary rounded-xl font-semibold tracking-wider transition-all duration-300 hover:bg-reversePrimary hover:text-primary hover:border-primary'>Simpan</button>
                <p className='text-xs text-gray-500 mt-4'>* Wajib diisi</p>
            </form>
        </>
    )
}
