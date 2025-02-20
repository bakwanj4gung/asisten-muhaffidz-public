'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function NavbarLanding() {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    })
    return (
        <>
        <nav className={"fixed border-2 flex w-full items-center justify-between px-9 py-5 md:px-20 " + (isScrolled ? "backdrop-blur-sm bg-white/30" : "bg-gradient-to-r from-reversePrimary to-middleMan")}>
            <div>
                <Link href="#hero">
                    <Image src="/logo.svg" alt="Logo" width={150} height={50} />
                </Link>
            </div>
            <div className='hidden xl:block'>
                <Link href="#about">
                    Apa itu Asisten Tahfidz?
                </Link>
            </div>
            <div>
                <Link href={"/login"} className="bg-primary p-3 px-10 text-middleMan rounded-xl font-semibold tracking-wider border-2 border-middleMan transition-all duration-300 hover:bg-reversePrimary hover:text-primary hover:border-primary">
                    Masuk
                </Link>
            </div>
        </nav>
        </>
    )
}
