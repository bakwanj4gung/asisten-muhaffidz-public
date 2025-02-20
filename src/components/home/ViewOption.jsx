import React from 'react'

export default function ViewOption({children}) {
    return (
        <div className=' bg-slate-700 border-2 border-slate-700 rounded-lg overflow-hidden max-h-fit max-w-fit flex flex-col items-center justify-center'>
            <p className='text-sm font-semibold text-reversePrimary'>View</p>
            <div className='group grid grid-cols-2 border-t-2 bg-reverseSecondary transition-all duration-200 border-slate-700 hover:border-reverseSecondary'>
                {children}
            </div>
        </div>
    )
}
