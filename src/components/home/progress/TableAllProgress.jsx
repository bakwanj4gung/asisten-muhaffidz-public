'use client';

import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React  from 'react'
import Select from 'react-select'

const options = [
    { value: 'Harian', label: 'Harian' },
    { value: 'Mingguan', label: 'Mingguan' },
    { value: 'Bulanan', label: 'Bulanan' }
]

export default function TableAllProgress() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <>
            <div className='bg-white rounded-lg px-7 w-full py-2 mb-4'>
                <div className='font-semibold text-xl flex flex-wrap items-center gap-2 whitespace-nowrap'>
                    Hasil Pencapaian 
                    <Select options={options} className='w-2/5 lg:w-1/3' />
                </div>
            </div>
            <div className="relative shadow-md w-full overflow-x-auto rounded-t-xl sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-black uppercase bg-slate-400 tracking-wide">
                        <tr>
                            <th className="px-6 py-3">
                                Nama
                            </th>
                            <th className="ps-8 pe-6 py-3">
                                Halaqoh
                            </th>
                            <th className="px-6 py-3 text-center">
                                Jenis Pencapaian
                            </th>
                            <th className="px-6 py-3 text-center">
                                Ayat Terakhir
                            </th>
                            <th className="px-6 py-3 text-center">
                                Waktu
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {santri.map((santri) => (
                            <tr key={santri.id} onClick={onOpen} title='Klik untuk melihat detail' className="cursor-pointer odd:bg-white even:bg-gray-100 border-b transition-all duration-150 hover:bg-neutral-300 hover:text-black">
                                <th scope="row" className="whitespace-nowrap max-w-40 truncate">
                                    <p className='ps-6 pe-8 py-4 w-full h-full font-medium text-gray-900'>{santri.nama}</p>
                                </th>
                                <td className="whitespace-nowrap">
                                    <p className='px-6 py-4'>{santri.halaqoh}</p>
                                </td>
                                <td className="px-6 py-4 text-center whitespace-nowrap">
                                    <p className="hidden xl:block">{santri.kelamin ? santri.kelamin : ''}</p>
                                    <p className="xl:hidden">{santri.kelamin ? santri.kelamin.charAt(0).toUpperCase() : ''}</p>                                </td>
                                <td className="px-6 py-4 text-center whitespace-nowrap">
                                    <p>{santri.totalHafalan} Halaman</p>
                                </td>
                                <td className="px-6 py-4 text-center whitespace-nowrap">
                                    <p className=''>{santri.setoran}</p>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <ModalDetailBulanan isOpen={isOpen} onOpenChange={onOpenChange} />
            </div>
        </>
    )
}

const ModalDetailHarian = ({ isOpen, onOpen, onOpenChange }) => {
    const route = useRouter();
    return (
        <>
            <Modal
                backdrop="blur" 
                isOpen={isOpen} 
                onOpenChange={onOpenChange}
                size="md"
                placement='center'
            >
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="bg-slate-400 border-b-2 text-xl pe-7">Muhammad Faqih Ali</ModalHeader>
                        <ModalBody className="">
                            <div className='text-xs flex items-center justify-between'>
                                <p>Dibuat pada: 21 Juni 2023</p>
                                <p className='text-end'>Terakhir diubah pada: 21 Juni 2023</p>
                            </div>
                            <div className='font-semibold text-slate-500 text-xs sm:text-base'>
                                <p>Jenis Pencapaian: <span className="text-blue-500">Harian</span></p>
                                <p>Tanggal: 20 Juni 2023</p>
                                <p>Ayat yang disetorkan: <span className="text-blue-500">Ali Imron:40 - Ali Imron:70</span></p>
                                <p>Total halaman: <span className="text-blue-500">2</span> halaman</p>
                                <p>Murojaah: <span className="text-blue-500">Juz 30</span></p>
                                <p>Lulus: <span className='text-green-500'>Lulus</span></p>
                                <p>Catatan: Sudah bagus</p>
                            </div>
                        </ModalBody>
                    <ModalFooter className="text-xs sm:text-base">
                        <Link href={'#'} className="py-2 px-5 border-2 border-yellow-400 bg-yellow-400 text-reversePrimary font-semibold rounded-xl transition-all duration-300 hover:bg-reversePrimary hover:text-yellow-400">
                            Edit
                        </Link>
                        <Link href={'#'} className="py-2 px-5 border-2 border-red-500 bg-red-500 text-reversePrimary font-semibold rounded-xl transition-all duration-300 hover:bg-reversePrimary hover:text-red-500">
                            Hapus
                        </Link>
                        <button onClick={onClose} className="py-2 px-5 border-2 border-blue-500 bg-blue-500 text-reversePrimary font-semibold rounded-xl transition-all duration-300 hover:bg-reversePrimary hover:text-blue-500">
                            Tutup
                        </button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    )
}

const ModalDetailMingguan = ({ isOpen, onOpen, onOpenChange }) => {
    const route = useRouter();
    return (
        <>
            <Modal
                backdrop="blur" 
                isOpen={isOpen} 
                onOpenChange={onOpenChange}
                size="md"
                placement='center'
            >
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="bg-slate-400 border-b-2 text-xl pe-7">Muhammad Faqih Ali</ModalHeader>
                        <ModalBody className="">
                            <div className='text-xs flex items-center justify-between'>
                                <p>Dibuat pada: 21 Juni 2023</p>
                                <p className='text-end'>Terakhir diubah pada: 21 Juni 2023</p>
                            </div>
                            <div className='font-semibold text-slate-500 text-xs sm:text-base'>
                                <p>Jenis Pencapaian: <span className="text-blue-500">Mingguan</span></p>
                                <p>Periode: <span className="text-blue-500">13 June 2023 - 20 June 2023</span></p>
                                <p>Pekan ke: <span className="text-blue-500">Ketiga</span></p>
                                <p>Ayat yang disetorkan: <span className="text-blue-500">Ali Imron:1 - Ali Imron:70</span></p>
                                <p>Total setoran: <span className="text-blue-500">5</span> halaman</p>
                                <p>Total murojaah: <span className="text-blue-500">50</span> lembar</p>
                                <p>Catatan: Sudah bagus</p>
                            </div>
                        </ModalBody>
                    <ModalFooter className="text-xs sm:text-base">
                        <Link href={'#'} className="py-2 px-5 border-2 border-yellow-400 bg-yellow-400 text-reversePrimary font-semibold rounded-xl transition-all duration-300 hover:bg-reversePrimary hover:text-yellow-400">
                            Edit
                        </Link>
                        <Link href={'#'} className="py-2 px-5 border-2 border-red-500 bg-red-500 text-reversePrimary font-semibold rounded-xl transition-all duration-300 hover:bg-reversePrimary hover:text-red-500">
                            Hapus
                        </Link>
                        <button onClick={onClose} className="py-2 px-5 border-2 border-blue-500 bg-blue-500 text-reversePrimary font-semibold rounded-xl transition-all duration-300 hover:bg-reversePrimary hover:text-blue-500">
                            Tutup
                        </button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    )
}

const ModalDetailBulanan = ({ isOpen, onOpen, onOpenChange }) => {
    const route = useRouter();
    return (
        <>
            <Modal
                backdrop="blur" 
                isOpen={isOpen} 
                onOpenChange={onOpenChange}
                size="md"
                placement='center'
            >
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="bg-slate-400 border-b-2 text-xl pe-7">Muhammad Faqih Ali</ModalHeader>
                        <ModalBody className="">
                            <div className='text-xs flex items-center justify-between'>
                                <p>Dibuat pada: 21 Juni 2023</p>
                                <p className='text-end'>Terakhir diubah pada: 21 Juni 2023</p>
                            </div>
                            <div className='font-semibold text-slate-500 text-xs sm:text-base'>
                                <p>Jenis Pencapaian: <span className="text-blue-500">Mingguan</span></p>
                                <p>Periode: <span className="text-blue-500">Juni 2024</span></p>
                                <p>Ayat yang disetorkan: <span className="text-blue-500">Al-Baqarah:90 - Ali Imron:70</span></p>
                                <p>Total setoran: <span className="text-blue-500">10</span> halaman</p>
                                <p>Total murojaah: <span className="text-blue-500">60</span> lembar</p>
                                <p>Catatan: Sudah bagus</p>
                            </div>
                        </ModalBody>
                    <ModalFooter className="text-xs sm:text-base">
                        <Link href={'#'} className="py-2 px-5 border-2 border-yellow-400 bg-yellow-400 text-reversePrimary font-semibold rounded-xl transition-all duration-300 hover:bg-reversePrimary hover:text-yellow-400">
                            Edit
                        </Link>
                        <Link href={'#'} className="py-2 px-5 border-2 border-red-500 bg-red-500 text-reversePrimary font-semibold rounded-xl transition-all duration-300 hover:bg-reversePrimary hover:text-red-500">
                            Hapus
                        </Link>
                        <button onClick={onClose} className="py-2 px-5 border-2 border-blue-500 bg-blue-500 text-reversePrimary font-semibold rounded-xl transition-all duration-300 hover:bg-reversePrimary hover:text-blue-500">
                            Tutup
                        </button>
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
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
