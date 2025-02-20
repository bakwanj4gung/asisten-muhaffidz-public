'use client';

import React, { Suspense, useEffect, useState } from 'react'
import { faCircleQuestion, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Popover } from 'flowbite-react';
import RefreshButton from '../RefreshButton';
import Link from 'next/link';

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

export default function TableHalaqohAddMember() {
    const [ages, setAges] = useState([]);
    const [isDisable, setIsDisable] = useState(true);
    useEffect(() => {
        async function fetchAges() {
            const ages = santri.map(santri => getAge(santri.lahir));
            setAges(ages);
        }
        fetchAges();
    }, []);

    const handleCheckboxChange = (event) => {
        const checkboxStatuses = Array.from(document.querySelectorAll('[class^="checkbox"]')).map(checkbox => checkbox.checked);
        setIsDisable(!checkboxStatuses.some(status => status));
    };
    return (
        <>
            <div className='flex items-center justify-between xl:pe-14'>
                <RefreshButton />
                <div className='flex items-center gap-4'>
                    <Popover 
                        trigger="hover" 
                        placement='left' 
                        arrow={true} 
                        content={
                            <div className="w-64 text-sm text-gray-500 p-2">
                                <h3 className="font-semibold text-gray-900 mb-2">Panduan</h3>
                                <p className='text-xs'>Pilih santri yang akan anda masukkan sebagai anggota halaqoh ini. Pastikan Anda memilih dengan benar. Setelah itu, klik tombol "Tambah anggota"</p>
                            </div>
                        }
                    >
                        <FontAwesomeIcon icon={faCircleQuestion} className='fas fa-circle-question text-slate-500' size='lg' />
                    </Popover>
                    <button disabled={isDisable} title='Tambah Anggota' className='bg-primary border-2 border-primary text-white px-4 py-2.5 md:py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-150 hover:bg-reversePrimary hover:text-primary hover:border-primary disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 disabled:border-slate-300 disabled:hover:bg-slate-300'>
                        <FontAwesomeIcon icon={faUserPlus} className='fas fa-user-plus text-xl'/>
                        <p className='hidden md:block'>Tambah Anggota</p>
                    </button>
                </div>
            </div>
            <div className="relative overflow-x-auto shadow-md rounded-t-xl sm:rounded-lg mt-4">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-black uppercase bg-slate-400 tracking-wide">
                        <tr>
                            <th className="flex items-center ps-2 py-3">
                            </th>
                            <th className="px-6 py-3">
                                Nama
                            </th>
                            <th className="px-6 py-3">
                                Jenis Kelamin
                            </th>
                            <th className="px-6 py-3">
                                Umur
                            </th>
                            <th className="px-6 py-3">
                                Jumlah Hafalan
                            </th>
                            <th className="px-6 py-3">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {santri.map((santri) => (
                            <tr key={santri.id} className="odd:bg-white even:bg-gray-100 border-b transition-all duration-150 hover:bg-slate-200">
                                <td className="flex items-center ps-2 py-4">
                                    <input onChange={handleCheckboxChange} id={`checkbox-table-search-${santri.id}`} type="checkbox" className="checkbox w-5 h-5 text-lg text-blue-600 border-slate-300 rounded focus:ring-blue-500 focus:ring-2" />
                                </td>
                                <th scope="row" className="font-medium text-gray-900 whitespace-nowrap max-w-40 truncate transition-all duration-200 hover:text-blue-500">
                                    <label htmlFor={`checkbox-table-search-${santri.id}`} className='cursor-pointer h-full block ps-6 pe-8 py-4 '>{santri.nama}</label>
                                </th>
                                <td className="px-6 py-4">
                                    {santri.kelamin}
                                </td>
                                <td className="px-6 py-4">
                                <p><Suspense fallback={<div>Loading...</div>}>{santri.lahir ? ages[santri.id -1] : ''} </Suspense> Tahun</p>
                                </td>
                                <td className="ps-7 py-4">
                                    {santri.totalHafalan} Halaman
                                </td>
                                <td className="px-3 py-4">
                                    <Link href={`/santri/${santri.id}`} className="font-medium transition-all duration-150 hover:underline underline-offset-1 decoration-2 hover:text-black" title={`Lihat Profil ${santri.nama}`}>Lihat Profil</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

const santri = [
    { id: 1, nama: 'Ahmad', totalHafalan: 120, lahir: '2000-12-24', kelamin: 'Laki-Laki', halaqoh: null },
    { id: 2, nama: 'Syaifudin', totalHafalan: 190, lahir: '2001-01-17', kelamin: 'Laki-Laki', halaqoh: null },
    { id: 3, nama: 'Doni', totalHafalan: 220, lahir: '2005-04-17', kelamin: 'Laki-Laki', halaqoh: null },
    { id: 4, nama: 'Joko', totalHafalan: 230, lahir: '2002-04-18', kelamin: 'Laki-Laki', halaqoh: null },
    { id: 5, nama: 'Muhammad Faqih Ali', totalHafalan: 240, lahir: '2001-05-19', kelamin: 'Laki-Laki', halaqoh: null },
]