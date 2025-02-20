import SidenavDetail from '@/components/home/SidenavDetail'
import { Spinner } from 'flowbite-react'
import React, { Suspense } from 'react'

export default function layoutDetail({children}) {
    return (
        <main className='bg-reverseSecondary w-full min-h-screen max-h-fit'>
            <SidenavDetail />
            <div className='relative md:ml-72 min-h-screen max-h-fit'>
                <div className='min-h-screen max-h-fit'>
                    <Suspense 
                        fallback={
                            <div className='min-h-screen max-h-fit flex items-center justify-center'>
                                <Spinner aria-label="Extra large spinner example" size="xl" />
                            </div>
                        }
                    >
                        {children}
                    </Suspense>
                </div>
            </div>
        </main>
    )
}
