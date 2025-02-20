import Link from 'next/link'
import React from 'react'

export default function EmailVerification() {
    return (
        <>
            <form className='w-10/12 md:w-3/4 mt-3'>
                <div className='mb-5'>
                    <label htmlFor="email-verification" className='block mb-2 text-base font-semibold text-gray-900 '>Verifikasi Email</label>
                    <input type="text" id="email-verification" className='p-2.5 rounded-lg bg-slate-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full' />
                </div>
                <button type="submit" className='bg-primary w-full py-2 text-middleMan rounded-xl font-semibold tracking-wider transition-all duration-300 hover:bg-reversePrimary hover:text-primary hover:border-primary'>Verifikasi</button>
            </form>
            <p>Belum memdapatkan email? <Link href="/register" className='font-semibold text-base underline underline-offset-2 transition-all duration-100 hover:no-underline hover:text-primary'>Kirim ulang</Link> 10</p>
        </>
    )
}
