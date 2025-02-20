'use client';

import React from 'react'

export default function FormEditProfile() {
    return (
        <div className='bg-white w-11/12 xl:w-8/12 mx-auto my-4 py-4 px-7 rounded-lg'>
            <h1 className='text-xl font-bold px-4 pb-6'>Ubah Data Diri</h1>
            <form action="" className=''>
                <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-7'>
                    <div className='w-full'>
                        <label htmlFor='nama' className="block mb-3 lg:mb-2 font-semibold text-xs whitespace-nowrap truncate lg:text-sm text-gray-500">Nama <span>*</span></label>
                        <input id='nama' placeholder='Muhammad Faqih Ali' type='text' className='rounded-lg bg-slate-50 border-2 border-gray-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full placeholder:text-slate-300'/>
                    </div>
                    <div className='w-full'>
                        <label htmlFor='birth_date' className="block mb-3 lg:mb-2 font-semibold text-xs whitespace-nowrap truncate lg:text-sm text-gray-500">Tanggal Lahir <span>*</span></label>
                        <input id='birth_date' type='date' className='rounded-lg bg-slate-50 border-2 border-gray-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full placeholder:text-slate-300'/>
                    </div>
                    <div className='w-full'>
                        <label htmlFor='gender' className="block mb-3 lg:mb-2 font-semibold text-xs whitespace-nowrap truncate lg:text-sm text-gray-500">Jenis kelamin <span>*</span></label>
                        <select defaultValue={''} id='gender' className='p-2.5 rounded-lg bg-slate-50 border-2 border-gray-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full'>
                            <option disabled value="" className='text-slate-300'>Pilih Jenis Kelamin</option>
                            <option value={'Laki-laki'}>Laki-laki</option>
                            <option value={'Perempuan'}>Perempuan</option>
                        </select>
                    </div>
                    <div className='w-full'>
                        <label htmlFor='note' className="block mb-2 font-semibold text-sm text-gray-500">Bio</label>
                        <input id='note' type='text' className='p-2.5 rounded-lg bg-slate-50 border-2 border-gray-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full mb-6'/>
                    </div>
                </div>
                <button type="submit" className='bg-primary w-full sm:w-2/5 xl:w-3/12 py-2 text-reversePrimary border-2 border-primary rounded-xl font-semibold tracking-wider transition-all duration-300 hover:bg-reversePrimary hover:text-primary'>
                    Simpan
                </button>
            </form>
        </div>
    )
}


