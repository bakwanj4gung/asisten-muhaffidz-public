'use client';

import { faClock, faFaceSmileBeam } from '@fortawesome/free-regular-svg-icons'
import { faBullseye, faFlagCheckered, faHourglassHalf, faLocationDot, faMars, faPenToSquare, faSchool, faTrash, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function CardProfileSantri() {
    const [openModalDelete, setOpenModalDelete] = useState(false);

    return (
        <div className='bg-reversePrimary h-fit w-full pb-4 rounded-xl'>
            <div className='border-b-2 px-6 border-slate-500 rounded-t-xl py-3 bg-slate-300 flex items-center justify-between'>
                <h1 className='font-semibold text-lg lg:text-xl'>Muhammad Faqih Ali</h1>
                <FontAwesomeIcon icon={faMars} size='lg' />
            </div>
            <div className='flex flex-col lg:flex-row lg:justify-between md:justify-center md:items-center xl:ps-24 pt-3 pb-5 overflow-x-hidden'>
                <div className='flex flex-col justify-center items-center gap-3 mx-auto lg:ms-14 xl:ms-0 xl:me-0'>
                    <Image src="/default.png" width={200} height={200} alt="Profile Santri" className='object-cover h-[200px] w-[200px] border-4 border-primary min-w-44 rounded-full' />
                    <div>
                        <Link href={'/home/santri/1/edit'} title='Edit' className='bg-primary border-2 text-white text-xs lg:text-sm xl:text-base border-primary py-1 px-3 rounded-lg font-semibold tracking-wide transition-all duration-150 hover:bg-reversePrimary hover:text-primary'>
                            <FontAwesomeIcon icon={faPenToSquare} className='me-2'/>
                            <span className=''>Edit Profile</span>
                        </Link>
                        <button onClick={()=>setOpenModalDelete(true)} title='Hapus' className='ms-3 bg-red-500 border-2 text-white text-xs lg:text-sm xl:text-base border-red-500 py-1 px-3 rounded-lg font-semibold transition-all duration-150 hover:bg-reversePrimary hover:text-red-500'>
                            <FontAwesomeIcon icon={faTrash} className=''/>
                        </button>
                    </div>
                    <ModalDelete openModalDelete={openModalDelete} setOpenModalDelete={setOpenModalDelete} />
                </div>
                <div className='max-w-72 lg:max-w-87 xl:max-w-100 overflow-clip text-ellipsis mx-auto lg:m-0 px-3'>
                    <div className='w-fit flex flex-col gap-3 mt-4 cursor-default text-slate-500 text-sm lg:w-11/12 xl:text-base md:ms-auto font-semibold'>
                        <button className='mx-auto text-xs lg:text-sm cursor-pointer bg-primary border-2 text-white border-primary w-fit py-2 px-4 rounded-lg font-semibold tracking-wide transition-all duration-150 hover:bg-reversePrimary hover:text-primary'>
                            <FontAwesomeIcon icon={faClock} className='text-sm me-2'/>
                            <span className=''>Lihat Jadwal Setoran</span>
                        </button> 
                        <div className='md:w-10/12 lg:w-11/12 pe-2 text-ellipsis overflow-hidden max-h-5 xl:max-h-6'>
                            <FontAwesomeIcon icon={faUserGroup} className='me-2' />
                            <span className=''>Nama Halaqoh bgbgbgbgbg bgbgbgbgbgbg bgbgbgbgbbgb</span>
                        </div>
                        <div className='flex items-center justify-between xl:me-20'>
                            <div className='me-10' title='Total hafalan'>
                                <FontAwesomeIcon icon={faFlagCheckered} className='me-2' />
                                <span className=''>604 halaman</span>
                            </div>
                            <div title='Umur'>
                                <FontAwesomeIcon icon={faFaceSmileBeam} className='me-2' />
                                <span>19 Tahun</span>
                            </div>
                        </div>
                        <div className='flex items-center justify-between xl:me-20'>
                            <div className='me-10' title='Target pekan ini'>
                                <FontAwesomeIcon icon={faBullseye} className='me-2' />
                                <span className=''>7 halaman</span>
                            </div>
                            <div title='Progres'>
                                <FontAwesomeIcon icon={faHourglassHalf} className='me-2' />
                                <span>3 halaman</span>
                            </div>
                        </div>
                        <div title='Alamat'>
                            <FontAwesomeIcon icon={faLocationDot} className='me-2' />
                            <span className=''>Bogor, Jawa Barat, Indonesia</span>
                        </div>
                        <div  title='Sekolah'>
                            <FontAwesomeIcon icon={faSchool} className='me-2' />
                            <span className=''>SMK N 5 Kendal</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-reverseSecondary rounded-xl px-3 py-3 mx-5 lg:mx-10 text-center'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odit natus ea ut eligendi sequi. Ducimus omnis quos, blanditiis tempore est recusandae debitis a optio iste unde, ipsa, autem repellat?</p>
            </div>
        </div>
    )
}

const ModalDelete = ({ openModalDelete, setOpenModalDelete }) => {
    return (
        <Modal show={openModalDelete} size="md" popup onClose={() => setOpenModalDelete(false)}>
            <Modal.Header />
            <Modal.Body>
                <form>
                    <h2 className="block mb-24 font-semibold text-xl text-center text-red-600">Yakin ingin menghapus santri ini?</h2>
                    <div className='flex items-center justify-center gap-20'>
                        <button title='!' type='submit' className='bg-red-600 border-2 border-red-600 px-5 py-2 text-reversePrimary rounded-xl font-semibold tracking-wider transition-all duration-300 hover:bg-reversePrimary hover:text-red-500 hover:border-red-500'>Hapus</button>
                        <button onClick={() => setOpenModalDelete(false)} className='bg-primary border-2 border-primary px-5 py-2 text-reversePrimary rounded-xl font-semibold tracking-wider transition-all duration-300 hover:bg-reversePrimary hover:text-primary hover:border-primary'>Kembali</button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    )
}
