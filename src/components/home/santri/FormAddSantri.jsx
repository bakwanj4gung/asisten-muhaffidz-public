import React from 'react'

export default function FormAddSantri() {
    return (
        <div className='mx-auto my-10 w-11/12 xl:w-10/12 bg-reversePrimary overflow-hidden shadow-lg pb-6 rounded-xl'>
            <h1 className='text-3xl font-bold mb-6 border-b-2 border-slate-500 bg-slate-200 px-10 py-3'>Tambah Santri Baru</h1>
            <form className='flex flex-col w-full px-10'>
                <div className='grid grid-cols-1 xl:grid-cols-2 md:gap-4 w-full'>
                    <div>
                        <label htmlFor='name' className="block mb-2 font-semibold text-sm text-gray-500">Nama <span>*</span></label>
                        <input id='name' type='text' className='p-2.5 rounded-lg bg-slate-50 border-2 border-gray-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full mb-6'/>
                    </div>
                    <div className='grid md:grid-cols-2 md:gap-3'>
                        <div>
                            <label htmlFor='birth_date' className="block mb-2 font-semibold text-sm text-gray-500">Tanggal Lahir <span>*</span></label>
                            <input id='birth_date' type='date' className='p-2.5 rounded-lg bg-slate-50 border-2 border-gray-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full mb-6'/>
                        </div>
                        <div>
                            <label htmlFor='gender' className="block mb-2 font-semibold text-sm text-gray-500">Jenis Kelamin <span>*</span></label>
                            <select defaultValue={''} id='gender' className='p-2.5 rounded-lg bg-slate-50 border-2 border-gray-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full mb-6'>
                                <option>Laki - Laki</option>
                                <option>Perempuan</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-2 md:gap-4 w-full'>
                    <div className='grid md:grid-cols-2 md:gap-3'>
                        <div>
                            <label htmlFor='halaqoh' className="block mb-2 font-semibold text-sm text-gray-500">Halaqoh</label>
                            <select defaultValue={''} id='halaqoh' className='p-2.5 rounded-lg bg-slate-50 border-2 border-gray-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full mb-6'>
                                <option disabled value="">Pilih Halaqoh</option>
                                <option>1</option>
                                <option>2</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor='image' className="block mb-2 font-semibold text-sm text-gray-500">Foto Santri</label>
                            <input id='image' type='file' className='rounded-lg bg-slate-50 border-2 border-gray-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full mb-6'/>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 md:gap-3'>
                        <div>
                            <label htmlFor='address' className="block mb-2 font-semibold text-sm text-gray-500">Alamat</label>
                            <input id='address' type='text' className='p-2.5 rounded-lg bg-slate-50 border-2 border-gray-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full mb-6'/>
                        </div>
                        <div>
                            <label htmlFor='school' className="block mb-2 font-semibold text-sm text-gray-500">Sekolah</label>
                            <input id='school' type='text' className='p-2.5 rounded-lg bg-slate-50 border-2 border-gray-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full mb-6'/>
                        </div>
                    </div>
                </div>
                <div className='gap-4 w-full'>
                    <div>
                        <label htmlFor='description' className="block mb-2 font-semibold text-sm text-gray-500">Deskripsi</label>
                        <input id='description' type='text' className='p-2.5 rounded-lg bg-slate-50 border-2 border-gray-500 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full mb-6'/>
                    </div>
                </div>
                <button type='submit' className='md:w-1/2 xl:w-1/4 bg-primary border-2 border-primary px-5 py-2 text-middleMan rounded-xl font-semibold tracking-wider transition-all duration-300 hover:bg-reversePrimary hover:text-primary hover:border-primary'>Simpan</button>
                <p className='text-xs text-gray-500 mt-4'>* Wajib diisi</p>
            </form>
        </div>
    )
}
