import Image from 'next/image'
import Link from 'next/link'
import { Noto_Sans_Arabic } from "next/font/google";
import React from 'react'

const notoSansArabic = Noto_Sans_Arabic({
    subsets: ["arabic"],
    weight: ["600"],
})


export default function HeroLanding() {
    return (
        <>
            <div id="hero" className="flex items-center justify-between gap-5 min-h-screen overflow-hidden px-9 xl:ps-20 md:pe-0 bg-gradient-to-tl from-reversePrimary to-middleMan">
                <div className=" w-full xl:w-1/2 mt-14 mb-14 xl:pe-3">
                <h1 className={"text-heroMain font-bold mb-5 mt-20 text-center xl:text-left" + " " + notoSansArabic.className}>
                    خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
                </h1>
                <h2 className="mb-10 font-semibold tracking-wide">
                    “Sebaik-baik kalian adalah orang yang belajar Al-Qur`an dan mengajarkannya.”
                </h2>
                <p className="mb-10 xl:mb-24">
                    Mengajar dan mempelajari Al-Qur'an adalah tindakan yang penuh berkah. Di Asisten Muhaffidz, kami memahami pentingnya mempermudah proses ini. Itulah mengapa kami mempersembahkan platform pencatatan hafalan Al-Qur'an daring, Asisten Muhaffidz.                </p>
                <div>
                    <Link href={"/register"} className="bg-middleMan p-3 px-10 text-primary rounded-xl font-semibold tracking-wider border-2 border-primary transition-all duration-300 hover:bg-primary hover:text-white">
                    Daftar
                    </Link>
                </div>
                </div>
                <div className="hidden xl:block">
                <Image src={"/hero_quran.png"} width={768} height={768} alt="hero" className=""/>
                </div>
            </div>
        </>
    )
}
