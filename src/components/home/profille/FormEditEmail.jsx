import React from 'react'

export default function FormEditEmail() {
    return (
        <div className='bg-white w-11/12 xl:w-8/12 mx-auto my-4 py-4 px-7 rounded-lg'>
            <h1 className='text-xl font-bold px-4 pb-6'>Ubah Email</h1>
            <form action="" className=''>
                    <div className='w-full mb-6'>
                        <label htmlFor='email' className="block mb-3 lg:mb-2 font-semibold text-xs whitespace-nowrap truncate lg:text-sm text-gray-500">Email <span>*</span></label>
                        <input id='email' placeholder='john@example.com' type='email' className='rounded-lg bg-slate-50 border-2 border-gray-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full placeholder:text-slate-300'/>
                    </div>
                    <button type="submit" className='bg-primary w-full sm:w-2/5 xl:w-3/12 py-2 text-reversePrimary border-2 border-primary rounded-xl font-semibold tracking-wider transition-all duration-300 hover:bg-reversePrimary hover:text-primary'>
                        Simpan
                    </button>
            </form>
        </div>
    )
}

// Tambah Modal konfimasi perbarui email. ketika sudah yakin, redirect ke halaman verifikasi.