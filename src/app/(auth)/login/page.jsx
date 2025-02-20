import Link from 'next/link'
import React from 'react'

export default function Login() {
    return (
        <>
            <h1 className='text-xl font-semibold'>Ahlan wa sahlan!</h1>
            <form className='w-10/12 md:w-3/4 mt-3'>
                <div className='mb-5'>
                    <label htmlFor="email" className='block mb-2 text-base font-semibold text-gray-900 '>Email</label>
                    <input type="email" id="email" className='p-2.5 rounded-lg bg-slate-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full' />
                </div>
                <div className='mb-7'>
                <label htmlFor="password" className='block mb-2 text-base font-semibold text-gray-900 '>Kata sandi</label>
                    <input type="password" id="password" className='p-2.5 rounded-lg bg-slate-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full' />
                </div>
                <div className='flex items-center justify-between mb-10'>
                    <div className='flex items-center gap-2'>
                        <input type="checkbox" id="remember" className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500'/>
                        <label htmlFor="remember" className=' block text-base font-semibold text-gray-900'>Ingat saya!</label>
                    </div>
                    <Link href="/forgot-password" className='font-semibold text-base underline underline-offset-2 transition-all rounded-md px-2 -me-2 duration-300 hover:no-underline hover:bg-yellow-300'>Lupa kata sandi?</Link>
                </div>
                <button type="submit" className='bg-primary w-full py-2 text-middleMan rounded-xl font-semibold tracking-wider transition-all duration-300 hover:bg-reversePrimary hover:text-primary hover:border-primary'>Masuk</button>
            </form>
            <p>Belum punya akun? <Link href="/register" className='font-semibold text-base underline underline-offset-2 transition-all px-2 duration-300 rounded hover:no-underline hover:text-reversePrimary hover:bg-primary'>Daftar</Link></p>
        </>
    )
}
