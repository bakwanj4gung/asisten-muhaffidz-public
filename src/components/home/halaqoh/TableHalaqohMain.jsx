'use client';

import ViewOption from '@/components/home/ViewOption'
import { faChevronRight, faEdit, faGrip, faListUl, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal, Popover } from 'flowbite-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import RefreshButton from '../RefreshButton';

export default function TableHalaqohMain() {
    const [openModalCreate, setOpenModalCreate] = React.useState(false);
    const [viewType, setViewType] = React.useState('list');

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
                    <div>
                        <button onClick={() => setOpenModalCreate(true)} className='bg-primary border-2 border-primary text-white px-4 py-2.5 md:py-2 rounded-lg font-semibold flex items-center gap-2 transition-all duration-150 hover:bg-reversePrimary hover:text-primary'>
                            <FontAwesomeIcon icon={faPlus} className='fas fa-plus text-xl'/>
                            <p className='hidden md:block'>Tambah Halaqoh</p>
                        </button>
                    </div>
                    <Modal show={openModalCreate} size="md" popup onClose={() => setOpenModalCreate(false)}>
                        <Modal.Header className='ps-5'>
                            <p className='text-lg font-semibold text-primary'>Tambah Halaqoh</p>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <label htmlFor='name' className="block mb-2 font-semibold text-sm text-gray-500">Masukkan Nama Halaqoh</label>
                                <input id='name' className='p-2.5 rounded-lg bg-slate-50 border-2 border-gray-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full mb-6'/>
                                <button type='submit' className='bg-primary border-2 border-primary px-5 py-2 text-middleMan rounded-xl font-semibold tracking-wider transition-all duration-300 hover:bg-reversePrimary hover:text-primary hover:border-primary'>Simpan</button>
                            </form>
                        </Modal.Body>
                    </Modal>
                </div>
                {viewType === 'list' ? <TableHalaqoh /> : <GridHalaqoh />}
            </div>
    )
}


const TableHalaqoh = () => {
    const [openModalEdit, setOpenModalEdit] = useState(false);
    return (
        <>
            <div className="relative w-10/12 mx-auto overflow-x-auto shadow-md rounded-t-lg sm:rounded-lg mt-4">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-black uppercase bg-slate-400 tracking-wide">
                        <tr>
                            <th className="px-6 py-3 whitespace-nowrap">
                                Nama Halaqoh
                            </th>
                            <th className="px-6 py-3 whitespace-nowrap">
                                Total Anggota
                            </th>
                            <th className="px-6 py-3 whitespace-nowrap">
                                Detail Anggota
                            </th>
                            <th className="px-6 py-3">
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-white even:bg-gray-100 border-b transition-all duration-150">
                            <th scope="row" className="ps-6 pe-8 py-4 font-medium text-gray-900 whitespace-nowrap max-w-40 truncate">
                                <p>Nama Halaqoh</p>
                            </th>
                            <td className="ps-10 pe-6 py-4">
                                <p>6</p>
                            </td>
                            <td>
                                <Link href={'/home/halaqoh/1'} className='group w-full py-4 px-6'>
                                    <span className='group-hover:underline underline-offset-1 decoration-2'>Lihat Anggota</span>
                                </Link>
                            </td>
                            <td className="px-6 py-4">
                                <button onClick={() => setOpenModalEdit(true)} className="font-medium text-yellow-500 rounded-lg px-2 py-1 transition-all duration-150 hover:bg-yellow-300 hover:text-black" title='Edit'>Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <EditModal show={openModalEdit} size="md" popup onClose={() => setOpenModalEdit(false)} />
            </div>
        </>
    )
}

const GridHalaqoh = () => {
    const [openModalEdit, setOpenModalEdit] = React.useState(false);
    return (
        <>
            <div className="relative mt-4 grid grid-cols-3 gap-10 px-4">
                <EditModal show={openModalEdit} size="md" popup onClose={() => setOpenModalEdit(false)} />
                <div className="max-w-xs flex flex-col bg-white border border-t-4 border-t-secondary shadow-sm rounded-xl h-64 overflow-hidden">
                    <div className="p-4 md:p-5 border-2 h-full relative">
                        <div className='flex items-center justify-between flex-nowrap gap-1'>
                            <h3 className="text-lg font-bold text-gray-800 w-full truncate">
                                Nama Halaqoh jdjjjdjjdk cdjnsdkjnjdnjn
                            </h3>
                            <button onClick={() => setOpenModalEdit(true)} className='text-yellow-500 py-0.5 px-1 rounded-lg transition-all duration-150 hover:bg-yellow-300 hover:text-black' title='Edit'>
                                <FontAwesomeIcon icon={faEdit} />
                            </button>
                        </div>
                        <p className="text-gray-500 text-sm">
                            <span>{santri.length}</span> Santri
                        </p>
                        <div className='mt-3 flex flex-wrap w-full gap-2'>
                            {santri.map((santri, index) => (
                                <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full min-w-16 max-w-32 overflow-hidden truncate text-center">
                                    {santri.nama}
                                </div>
                            ))}
                        </div>
                        <Link href={'#'} className="absolute bottom-5 mt-4 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800">
                            Lebih Lengkap
                            <FontAwesomeIcon icon={faChevronRight} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}


const EditModal = ({show, onClose}) => {
    return (
        <>
            <Modal show={show} size="md" popup onClose={() => onClose(false)}>
                <Modal.Header className='ps-5'>
                    <p className='text-lg font-semibold text-primary'>Edit Nama Halaqoh</p>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <label htmlFor='name-edit' className="block mb-2 font-semibold text-sm text-gray-500">Masukkan Nama Halaqoh Baru</label>
                        <input id='name-edit' className='p-2.5 rounded-lg bg-slate-50 border-2 border-gray-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full mb-6'/>
                        <button type='submit' className='bg-primary border-2 border-primary px-5 py-2 text-middleMan rounded-xl font-semibold tracking-wider transition-all duration-300 hover:bg-reversePrimary hover:text-primary hover:border-primary'>Simpan</button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

const santri = [
    { id: 1, nama: 'Ahmad', totalHafalan: 120 },
    { id: 2, nama: 'Syaifudin', totalHafalan: 190 },
    { id: 3, nama: 'Doni', totalHafalan: 220 },
    { id: 4, nama: 'Joko', totalHafalan: 230 },
    { id: 5, nama: 'Muhammad Faqih Ali', totalHafalan: 240 },
]
