'use client';

import React, { useState } from 'react'
import { faMars, faPencil, faUserGraduate, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal, Popover } from 'flowbite-react'
import Image from 'next/image'

export default function CardProfile() {
    return (
        <>
            <div className='w-11/12 xl:w-8/12 mx-auto mb-4 lg:flex items-center bg-white rounded-lg p-2'>
                <div className='w-full lg:w-fit mb-3 lg:mx-10 flex lg:flex-col lg:gap-6 items-center justify-around'>
                    <Image src={'/default.png'} width={130} height={130} alt={'Profile'} className='objrect-cover h-[130px] w-[130px] border-4 border-primary mx-auto rounded-full' />
                    <ButtonChange />
                </div>
                <div className='w-full sm:w-9/12 lg:w-full mx-auto ps-3 lg:ps-0 text-slate-600'>
                    <div className='flex flex-nowrap gap-1'>
                        <h1 className='font-bold whitespace-nowrap truncate pe-1'>Muhammad Faqih Ali</h1>
                        <div>
                            <span>(19)</span> <FontAwesomeIcon icon={faMars} className='text-primary' />
                        </div>
                    </div>
                    <p className='text-xs'>mfaqih.aali@gmail.com</p>
                    <p className='text-sm mt-2'>kolak pisang & burjo enjoyer(expert)</p>
                    <div className='flex justify-around lg:justify-start lg:gap-14 mt-2 md:mt-6 lg:ms-6'>
                        <Popover trigger='click' content={<p className='text-sm font-semibold py-1 px-2'>Total Halaqoh: 5</p>}>
                            <div title='Klik!' className='flex flex-col gap-1 items-center bg-[#FFFAFA] rounded-md pt-2 px-4 shadow'>
                                <FontAwesomeIcon icon={faUserGroup} className='text-primary' />
                                <span className='text-sm font-semibold'>5</span>
                            </div>
                        </Popover>
                        <Popover trigger='click' content={<p className='text-sm font-semibold py-1 px-2'>Total Santri: 20</p>}>
                            <div className='flex flex-col gap-1 items-center bg-[#FFFAFA] rounded-md pt-2 px-4 shadow'>
                                <FontAwesomeIcon icon={faUserGraduate} className='text-primary' />
                                <span className='text-sm font-semibold'>20</span>
                            </div>
                        </Popover>
                        <Popover trigger='click' content={<DetailLaporan />}>
                            <div className='flex flex-col gap-1 items-center bg-[#FFFAFA] rounded-md pt-2 px-4 shadow'>
                                <FontAwesomeIcon icon={faPencil} className='text-primary' />
                                <span className='text-sm font-semibold'>35</span>
                            </div>
                        </Popover>
                    </div>
                </div>
            </div>
        </>
    )
}

const ButtonChange = () => {
    const [openModalEditPhoto, setOpenModalEditPhoto] = useState(false);
    return(
        <div className='w-fit h-fit border-2 border-primary bg-primary text-reversePrimary px-4 py-2 rounded-lg text-sm transition-all duration-150 font-semibold hover:bg-reversePrimary hover:text-primary'>
            <button onClick={() => setOpenModalEditPhoto(true)} className='h-full w-full whitespace-nowrap'>
                Ubah Foto Profil
            </button>
            <ModalEditPhoto show={openModalEditPhoto} size="md" popup onClose={() => setOpenModalEditPhoto(false)} />
        </div>
    )
}

const ModalEditPhoto = ({show, onClose}) => {
    const [file, setFile] = useState();
    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (
        <>
            <Modal show={show} size="md" popup onClose={() => onClose(false)}>
                <Modal.Body>
                    <>
                        <Image src={file} width={176} height={176} className='mt-5 object-cover h-44 w-44 border-4 border-primary mx-auto rounded-full' />
                        <form className="w-9/12 mx-auto mt-3">
                            <input id='image' onChange={handleChange} type='file' accept='image/*' className='w-full rounded-lg bg-slate-50 border-2 border-gray-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block mx-auto'/>
                            <p className="mt-1 text-xs text-gray-500">PNG, JPG atau GIF ().</p>
                            <div className='flex justify-between items-center mt-6 gap-7'>
                                <button type="submit" className='bg-primary w-full sm:w-2/5 xl:w-5/12 py-2 text-reversePrimary border-2 border-primary rounded-xl font-semibold tracking-wider transition-all duration-300 hover:bg-reversePrimary hover:text-primary'>
                                    Simpan
                                </button>
                                <button onClick={() => onClose(true)} className='bg-reversePrimary w-full sm:w-2/5 xl:w-5/12 py-2 text-primary border-2 border-primary rounded-xl font-semibold tracking-wider transition-all duration-300 hover:bg-primary hover:text-reversePrimary'>
                                    Kembali
                                </button>
                            </div>
                        </form>
                    </>
                </Modal.Body>
            </Modal>
        </>
    )
}

const DetailLaporan = () => {
    return(
        <div className='text-sm font-semibold py-1 px-2'>
            <p>Laporan Harian: 30</p>
            <p>Laporan Mingguan: 4</p>
            <p>Laporan Bulanan: 1</p>
        </div>
    )
}
