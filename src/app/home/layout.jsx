import Sidenav from '@/components/home/Sidenav'
import React, { Suspense } from 'react'

const MemoizedSidenav = React.memo(Sidenav);

export default function layoutHome({children}) {
    return (
        
        <main className='bg-reverseSecondary w-full min-h-screen max-h-fit'>
            <MemoizedSidenav />
            <div className='relative md:ml-72 min-h-screen max-h-fit'>
                <div className='min-h-screen max-h-fit'>
                    <Suspense 
                        fallback={
                            <div className='min-h-screen max-h-fit flex items-center justify-center'>
                                <p className='text-3xl text-slate-800 font-semibold'>LOADING ...</p>
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
