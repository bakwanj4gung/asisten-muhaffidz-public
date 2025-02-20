'use client';

import ViewOption from '@/components/home/ViewOption'
import { faChevronRight, faEdit, faFlagCheckered, faGrip, faListUl, faPlus, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Popover } from 'flowbite-react'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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


export default function TableSantriMain() {
    const [viewType, setViewType] = useState('list');
    const router = useRouter();

    const handleListView = () => {
        setViewType('list');
    };

    const handleGridView = () => {
        setViewType('grid');
    };
    return (
        <>
            <div className='px-5 md:px-6 xl:px-11 py-6'>
                <div className='flex items-center justify-between xl:pe-14'>
                    <ViewOption>
                        <Popover
                            trigger='hover'
                            aria-labelledby="popover-list"
                            content={
                                <div className='rounded-xl px-2 py-1 text-xs'>
                                    List
                                </div>
                            }
                        >
                            <button className={`cursor-pointer border-r-2 border-x-slate-700 transition duration-200 hover:text-white hover:bg-slate-700 px-1 h-full ${viewType === 'list' ? 'text-white bg-slate-700' : ''}`} onClick={handleListView}>
                                <FontAwesomeIcon icon={faListUl} size='lg' className='' />
                            </button>
                        </Popover>
                        <Popover
                            trigger='hover'
                            aria-labelledby="popover-grid"
                            content={
                                <div className='rounded-xl px-2 py-1 text-xs'>
                                    Grid
                                </div>
                            }
                        >
                            <button className={`cursor-pointer transition duration-200 hover:text-white hover:bg-slate-700 px-1 h-full ${viewType === 'grid' ? 'text-white bg-slate-700' : ''}`} onClick={handleGridView}>
                                <FontAwesomeIcon icon={faGrip} size='xl' />
                            </button>
                        </Popover>
                    </ViewOption>
                    <div>
                        <Link href={'/home/santri/add-santri'}  className='bg-primary border-2 border-primary text-white px-4 py-2.5 md:py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-150 hover:bg-reversePrimary hover:text-primary'>
                            <FontAwesomeIcon icon={faPlus} className='fas fa-plus text-xl'/>
                            <p className='hidden md:block'>Tambah Santri</p>
                        </Link>
                    </div>
                </div>
                {viewType === 'list' ? <TableSantri /> : <GridSantri />}
            </div>
        </>
    )
}

const TableSantri = () => {
    const router = useRouter();
    const [ages, setAges] = useState([]);
    useEffect(() => {
        // Buat fungsi async untuk fetch data
        async function fetchAges() {
            // Lakukan map pada array santri untuk mengambil tanggal lahir
            const ages = santri.map(santri => getAge(santri.lahir));
            // Set state dengan hasil umur
            setAges(ages);
        }
        // Panggil fungsi fetchAges
        fetchAges();
    }, []);
    return (
        <>
            <div className="relative overflow-x-auto shadow-md rounded-t-xl sm:rounded-lg mt-4">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-black uppercase bg-slate-400 tracking-wide">
                        <tr>
                            <th className="px-6 py-3 whitespace-nowrap">
                                Nama
                            </th>
                            <th className="px-6 py-3 whitespace-nowrap text-center">
                                Halaqoh
                            </th>
                            <th className="px-6 py-3 whitespace-nowrap text-center">
                                Umur
                            </th>
                            <th className="px-6 py-3 whitespace-nowrap text-center">
                                Jenis Kelamin
                            </th>
                            <th className="px-6 py-3 whitespace-nowrap text-center">
                                Total Hafalan
                            </th>
                            <th className="px-6 py-3 whitespace-nowrap text-center">
                                Rekap Terakhir
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {santri.map((santri) => (
                            <tr key={santri.id} className="odd:bg-white even:bg-gray-100 border-b transition-all duration-150 hover:bg-neutral-300 hover:text-black">
                                <th onClick={() => router.push(`/santri/${santri.id}`)} scope="row" className="cursor-pointer whitespace-nowrap max-w-40 truncate">
                                    <Popover placement='top' trigger='hover' content={<div className='text-xs py-1 px-2 font-semibold'>Klik untuk melihat profil {santri.nama}</div>}>
                                        <p className='ps-6 pe-8 py-4 w-full h-full font-medium text-gray-900'>{santri.nama}</p>
                                    </Popover>
                                </th>
                                <td onClick={() => router.push(`/santri/${santri.id}`)} className="cursor-pointer whitespace-nowrap text-center">
                                    <Popover placement='top' trigger='hover' content={<div className='text-xs py-1 px-2 font-semibold'>Klik untuk melihat profil {santri.nama}</div>}>
                                        <p className='px-6 py-3'>{santri.halaqoh}</p>
                                    </Popover>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <p>{santri.lahir ? ages[santri.id -1] : ''}</p>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <p className="">{santri.kelamin ? santri.kelamin : ''}</p>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <p>{santri.totalHafalan} Halaman</p>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <span className='hover:underline underline-offset-1 decoration-2'>{santri.setoran}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

const GridSantri = () => {
    const [ages, setAges] = useState([]);
    useEffect(() => {
        // Buat fungsi async untuk fetch data
        async function fetchAges() {
            // Lakukan map pada array santri untuk mengambil tanggal lahir
            const ages = santri.map(santri => getAge(santri.lahir));
            // Set state dengan hasil umur
            setAges(ages);
        }
        // Panggil fungsi fetchAges
        fetchAges();
    }, []);
    return (
        <>
            <div className="relative mt-4 flex flex-wrap items-center gap-3 justify-center xl:justify-start xl:grid-cols-3 xl:gap-10 px-4">
                {santri.map((santri) => (
                    <div key={santri.id} className="w-80 flex flex-col bg-white border border-t-4 border-t-secondary shadow-sm rounded-xl h-64 overflow-hidden">
                        <div className="p-4 md:p-5 border-2 h-full relative">
                            <div className='flex justify-between flex-nowrap gap-1'>
                                <Image src={'/default.png' } width={120} height={120} alt={'Profile'} className='object-cover w-[120px] h-[120px] rounded-full' />
                                <button className='text-yellow-500 h-fit py-0.5 px-1 rounded-lg transition-all duration-150 hover:bg-yellow-300 hover:text-black' title='Edit'>
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                            </div>
                            <div className='flex items-center flex-nowrap gap-1 text-lg font-bold text-gray-800'>
                                <h3 className="text-lg font-bold text-gray-800 max-w-full truncate">
                                    {santri.nama}
                                </h3>
                                <p>
                                    ({santri.lahir ? ages[santri.id -1] : ''})
                                </p>
                            </div>
                            <div className="flex items-center flex-nowrap gap-1 cursor-default text-gray-500 text-sm mt-2">
                                <div className="max-w-full truncate" title='halaqoh'>
                                    <FontAwesomeIcon icon={faUserGroup} className='inline mr-1' />
                                    <span>{santri.halaqoh}</span>
                                </div>
                                <div className="min-w-fit ms-auto" title='total hafalan'>
                                    <FontAwesomeIcon icon={faFlagCheckered} className='inline mr-1' />
                                    <span>{santri.totalHafalan}</span> Halaman
                                </div>
                            </div>
                            <Link href={'#'} className="group absolute bottom-5 mt-4 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800">
                                Lihat Profil
                                <FontAwesomeIcon icon={faChevronRight} className='group-hover:translate-x-0.5 transition-all duration-150'/>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

const santri = [
    { id: 1, nama: 'Ahmad', totalHafalan: 120, halaqoh: 'Abu bakar', lahir: '2000-01-01', kelamin: 'Laki-laki', setoran: '2024-01-01' },
    { id: 2, nama: 'Syaifudin', totalHafalan: 190, halaqoh: 'Umar bin Khattab', lahir: '2007-07-21', kelamin: 'Laki-laki', setoran: '2024-01-01' },
    { id: 3, nama: 'Doni', totalHafalan: 220, halaqoh: 'Abu bakar', lahir: '2005-03-30', kelamin: 'Laki-laki', setoran: '2024-01-01' },
    { id: 4, nama: 'Joko', totalHafalan: 230, halaqoh: 'Umar bin Khattab', lahir: '2002-03-01', kelamin: 'Laki-laki', setoran: '2024-01-01' },
    { id: 5, nama: 'Muhammad Faqih Ali nhnhnhn nhnhn ', totalHafalan: 240, halaqoh: 'Abu bakar', lahir: '2000-09-18', kelamin: 'Laki-laki', setoran: '2024-01-01' },
]