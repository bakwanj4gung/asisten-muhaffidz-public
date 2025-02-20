import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function layoutAuth({children}) {
    return (
        <>
            <main className='min-h-screen max-h-fit py-10 xl:py-0 bg-primary flex items-center justify-center'>
                <div className='w-11/12 md:w-2/3 xl:w-4/12 bg-reversePrimary/[50%] py-10 flex flex-col items-center justify-center rounded-xl gap-5'>
                    <Link href={"/"}>
                        <Image src={"/logo.svg"} width={150} height={150} alt="logo" />
                    </Link>
                        {children}
                </div>
            </main>
        </>
    )
}
