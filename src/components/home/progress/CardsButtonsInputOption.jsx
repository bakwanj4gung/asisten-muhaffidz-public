import Link from 'next/link'
import React from 'react'

export default function CardsButtonsInputOption() {
    return (
        <div className='border-b-2 pt-5 xl:py-11 bg-blue-950'>
            <div className='w-9/12 mx-auto'>
                <div className="flex flex-wrap">
                    <Card href="/home/progress/daily" period="Harian" classNamePeroid='group-hover:text-emerald-400'/>
                    <Card href="/home/progress/weekly" period="Mingguan" classNamePeroid='group-hover:text-teal-400'/>
                    <Card href="/home/progress/monthly" period="Bulanan" classNamePeroid='group-hover:text-cyan-400'/>
                </div>
            </div>
        </div>
    )
}

function Card({ href, period="", classNamePeroid="" }) {
    return (
        <div className="w-full lg:w-6/12 xl:w-4/12 px-4 my-1">
            <Link href={href}>
                <div className="relative min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg group trasition-all duration-300 hover:scale-110">
                    <div className="flex flex-wrap p-4">
                        <div className="w-full pr-4 max-w-full uppercase flex-grow flex-1">
                            <h5 className="text-slate-400 tracking-widest text-xxs">
                                Input Pencapaian
                            </h5>
                            <span className={"font-semibold text-xl text-slate-700 transition-all duration-300 delay-150 " + classNamePeroid}>
                                {period}
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
