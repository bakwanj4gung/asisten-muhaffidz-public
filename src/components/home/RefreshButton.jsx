import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function RefreshButton() {
    return (
        <>
            <button title='Refresh' className='bg-primary border-2 border-primary text-white px-4 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition-all duration-150 hover:bg-reversePrimary hover:text-primary hover:border-primary disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 disabled:border-slate-300 disabled:hover:bg-slate-300'>
                <FontAwesomeIcon icon={faArrowRotateRight} className='fas fa-arrow-rotate-right text-xl'/>
            </button>
        </>
    )
}
