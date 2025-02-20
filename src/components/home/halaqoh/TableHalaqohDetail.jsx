'use client';

import ViewOption from '@/components/home/ViewOption';
import {  faChevronRight, faGrip, faListUl, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Modal, Popover } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import RefreshButton from '../RefreshButton';
import { useRouter } from 'next/navigation';

export default function TableHalaqohDetail() {
    const [openModalDelete, setOpenModalDelete] = useState(false);

    const [viewType, setViewType] = useState('list');

    const handleListView = () => {
        setViewType('list');
    };

    const handleGridView = () => {
        setViewType('grid');
    };
    return (
        <div className='px-11 py-6'>
            <div className='flex items-center justify-between xl:pe-14'>
                <div className='flex items-center justify-start gap-10 xl:gap-20'>
                    <ViewOption>
                        <Popover
                            trigger='hover'
                            aria-labelledby="default-popover"
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
                            aria-labelledby="default-popover"
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
                    <RefreshButton />
                </div>
                <div className='flex items-center justify-end gap-5 xl:gap-20'>
                    <Link title='Tambah Anggota' href={'/home/halaqoh/1/add-member'} className='bg-primary border-2 border-primary text-white px-4 py-2.5 xl:py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-150 hover:bg-reversePrimary hover:text-primary hover:border-primary'>
                        <FontAwesomeIcon icon={faUserPlus} className='fas fa-user-plus text-lg'/>
                        <p className='hidden xl:block'>Tambah Anggota</p>
                    </Link>
                    <button title='Hapus Halaqoh' onClick={() => setOpenModalDelete(true)} className='bg-primary border-2 border-primary text-white px-4 py-2.5 xl:py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-150 hover:bg-reversePrimary hover:text-red-500 hover:border-red-500'>
                        <FontAwesomeIcon icon={faTrash} className='fas fa-trash text-lg'/>
                        <p className='hidden xl:block'>Hapus Halaqoh Ini</p>
                    </button>
                </div>
            </div>
            <Modal show={openModalDelete} size="md" popup onClose={() => setOpenModalDelete(false)}>
                <Modal.Header />
                <Modal.Body>
                    <form>
                        <h2 className="block mb-24 font-semibold text-xl text-center text-red-600">Yakin ingin menghapus halaqoh ini?</h2>
                        <div className='flex items-center justify-center gap-20'>
                            <button title='!' type='submit' className='bg-red-600 border-2 border-red-600 px-5 py-2 text-middleMan rounded-xl font-semibold tracking-wider transition-all duration-300 hover:bg-reversePrimary hover:text-red-500 hover:border-red-500'>Hapus</button>
                            <button onClick={() => setOpenModalDelete(false)} className='bg-primary border-2 border-primary px-5 py-2 text-middleMan rounded-xl font-semibold tracking-wider transition-all duration-300 hover:bg-reversePrimary hover:text-primary hover:border-primary'>Kembali</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
            {viewType === 'list' ? <TableSantri /> : <GridSantri />}
        </div>
    )
}

const TableSantri = () => {
    const route = useRouter();
    return (
        <>
            <div className="relative w-10/12 mx-auto overflow-x-auto shadow-md rounded-t-xl sm:rounded-lg mt-4">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-black uppercase bg-slate-400 tracking-wide">
                        <tr>
                            <th className="px-6 py-3 whitespace-nowrap">
                                Nama
                            </th>
                            <th className="px-6 py-3 whitespace-nowrap">
                                Total Hafalan
                            </th>
                            <th className="px-6 py-3 text-center whitespace-nowrap">
                                Catatan Terakhir
                            </th>
                            <th className="py-3">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {santri.map((santri, index) => (
                            <tr key={santri.id} className="odd:bg-white even:bg-gray-100 border-b transition-all duration-150 ">
                                <th scope="row" className="ps-6 pe-8 py-4 font-medium text-gray-900 whitespace-nowrap max-w-40 truncate">
                                    {santri.nama}
                                </th>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {santri.totalHafalan} Halaman
                                </td>
                                <td className="px-7 py-4 text-center whitespace-nowrap">
                                    <span className=''>24-12-2024</span>
                                </td>
                                <td className="text-center whitespace-nowrap pe-3">
                                    <Link href={`/santri/${santri.id}`} className="text-center py-3 font-medium transition-all duration-150 hover:underline underline-offset-1 decoration-2 hover:text-black" title={`Lihat profil ${santri.nama}`}>Lihat Profil Santri</Link>
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
    return (
        <>
            <div className="relative mt-4 flex flex-wrap items-center justify-center xl:grid grid-cols-3 gap-10 px-4">
                {santri.map((santri, index) => (
                    <div className="max-w-xs min-w-64 flex flex-col bg-white border border-t-4 border-t-secondary shadow-sm rounded-xl h-64 overflow-hidden">
                        <div className="p-4 md:p-5 border-2 h-full relative">
                            <h3 className="text-lg font-bold text-gray-800 w-full truncate">
                                {santri.nama}
                            </h3>
                            <p className="text-gray-500 text-sm">
                                <span>{santri.totalHafalan}</span> Halaman
                            </p>
                            <div className='mt-3 flex flex-wrap w-full gap-2'>
                                <Image src="/profile.png" alt="Logo" width={130} height={130} className='object-cover w-[130px] h-[130px] rounded-full ms-auto -mt-4 me-4' />
                            </div>
                            <Link href={`/santri/${santri.id}`} className="absolute bottom-5 mt-4 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800">
                                Lebih Lengkap
                                <FontAwesomeIcon icon={faChevronRight} />
                            </Link>
                        </div>
                    </div>
                ))}
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