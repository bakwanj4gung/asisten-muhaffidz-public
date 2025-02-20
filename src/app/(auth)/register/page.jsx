import Link from 'next/link'
import React from 'react'

export default function Register() {
    return (
        <>
            <h1 className='text-xl font-semibold'>Marhaban!</h1>
            <form className='w-10/12 md:w-3/4 mt-3'>
                <div className='mb-3'>
                    <label htmlFor="name" className='block mb-2 text-base font-semibold text-gray-900 '>Nama</label>
                    <input type="text" id="name" className='p-2.5 rounded-lg bg-slate-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full' placeholder='John Doe'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="email" className='block mb-2 text-base font-semibold text-gray-900 '>Email</label>
                    <input type="email" id="email" className='p-2.5 rounded-lg bg-slate-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full' placeholder='john@example.com'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="password" className='block mb-2 text-base font-semibold text-gray-900 '>Kata sandi</label>
                    <input type="password" id="password" className='p-2.5 rounded-lg bg-slate-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full tracking-wider' placeholder='••••••••' />
                </div>
                <div className='mb-7'>
                    <label htmlFor="password" className='block mb-2 text-base font-semibold text-gray-900 '>Konfirmasi Kata sandi</label>
                    <input type="password" id="password" className='p-2.5 rounded-lg bg-slate-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full' />
                </div>
                <button href="/email-verification" className='bg-primary w-full py-2 text-middleMan rounded-xl font-semibold tracking-wider transition-all duration-300 hover:bg-reversePrimary hover:text-primary hover:border-primary'>Daftar</button>
            </form>
            <p>Sudah punya akun? <Link href="/login" className='font-semibold text-base underline underline-offset-2 transition-all rounded-md px-2 duration-300 hover:no-underline hover:bg-primary hover:text-reversePrimary'>Masuk</Link></p>
        </>
    )
}
