import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect } from 'react'
import { useInView } from "react-intersection-observer";


export default function AboutLanding() {
    
    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            controls.start({
            x: 0, // Menggeser elemen ke posisi awal (0px ke kiri)
            opacity: 1, // Menampilkan elemen dengan opasitas penuh
            transition: {
                type: "spring", // Jenis animasi
                duration: 2, // Durasi animasi
                bounce: 0.5 // Efek pantulan ketika animasi berhenti
            } 
            });
        } else {
            controls.start({ x: 100, opacity: 0 , transition: { type: "spring", duration: 2, bounce: 0.5 }});
        }
    }, [controls, inView]);
    return (
        <>
            <div id="about" className="max-h-fit flex flex-col items-center py-16 bg-gradient-to-r from-reversePrimary to-secondary">
                <motion.h1 
                    ref={ref}
                    className="font-bold text-2xl"
                    initial={{ x: -100, opacity: 0 }} // Mengatur posisi awal dan opasitas sebelum animasi dimulai
                    animate={controls} // Menghubungkan animasi dengan kontrol
                >
                    Kenapa Asisten Muhaffidz?
                </motion.h1>
                <p className="mt-10">
                Keterangan
                </p>
                <div className="mt-16 px-9 flex flex-col md:flex-row md:px-24 gap-7 md:gap-16 flex-wrap justify-center">
                    <div className="border-2 border-slate-300 rounded-xl flex flex-col items-center justify-center py-16 px-5 min-w-72 max-w-sm">
                        <Image src={"/vercel.svg"} width={75} height={75} alt="gambar kecil" className="mb-5"/>
                        <h2 className="font-bold text-xl mb-5">
                        Pencatatan Setoran
                        </h2>
                        <p className="text-center text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet doloremque iste dolor neque? Quod deserunt quam, quisquam pariatur neque quidem.
                        </p>
                    </div>
                    <div className="border-2 border-slate-300 rounded-xl flex flex-col items-center justify-center py-16 px-5 min-w-72 max-w-sm">
                        <Image src={"/vercel.svg"} width={75} height={75} alt="gambar kecil" className="mb-5"/>
                        <h2 className="font-bold text-xl mb-5">
                        Pencatatan Setoran
                        </h2>
                        <p className="text-center text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet doloremque iste dolor neque? Quod deserunt quam, quisquam pariatur neque quidem.
                        </p>
                    </div>
                    <div className="border-2 border-slate-300 rounded-xl flex flex-col items-center justify-center py-16 px-5 min-w-72 max-w-sm">
                        <Image src={"/vercel.svg"} width={75} height={75} alt="gambar kecil" className="mb-5"/>
                        <h2 className="font-bold text-xl mb-5">
                        Pencatatan Setoran
                        </h2>
                        <p className="text-center text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet doloremque iste dolor neque? Quod deserunt quam, quisquam pariatur neque quidem.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
