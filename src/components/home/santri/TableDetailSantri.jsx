import { Popover } from 'flowbite-react'
import React from 'react'

export default function TableDetailSantri() {
    return (
        <>
            <div className="relative overflow-x-auto shadow-md rounded-t-xl sm:rounded-lg mt-4">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-black uppercase bg-slate-400 tracking-wide">
                        <tr className=' overflow-visible'>
                            <th className="px-6 py-3">
                                Jenis Laporan
                            </th>
                            <th className="px-6 py-3 text-center">
                                Ayat
                            </th>
                            <th className="px-6 py-3 text-center">
                                Waktu
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {progress.map((progress) => (
                            <tr key={progress.id} className="odd:bg-white even:bg-gray-100 border-b transition-all duration-150 overflow-auto hover:bg-slate-200 cursor-pointer hover:text-black">
                                <td className="">
                                    <Popover trigger='hover' placement='top' content={<div className='font-semibold text-slate-500 rounded-xl px-2 py-1 text-xs'>Klik untuk melihat detail</div>}>
                                            <p className='px-6 py-4'>{progress.jenis}</p>
                                    </Popover>
                                </td>
                                <td className="text-center">
                                    <Popover trigger='hover' placement='top' content={<div className='font-semibold text-slate-500 rounded-xl px-2 py-1 text-xs'>Klik untuk melihat detail</div>}>
                                            <p className='px-6 py-4'>{progress.ayat}</p>
                                    </Popover>
                                </td>
                                <td className="text-center">
                                    <Popover trigger='hover' placement='top' content={<div className='font-semibold text-slate-500 rounded-xl px-2 py-1 text-xs'>Klik untuk melihat detail</div>}>
                                        <p className='px-6 py-4'>{progress.waktu}</p>
                                    </Popover>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

const progress = [
    { id: 1, jenis: 'Harian', ayat: 'Al-Baqarah:12 - Al-Baqarah:30', waktu: '12 Juni 2023' },
    { id: 2, jenis: 'Mingguan', ayat: 'Al-Baqarah:1 - Al-Baqarah:30', waktu: 'Pekan 2' },
]
