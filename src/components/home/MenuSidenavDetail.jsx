import { faHome, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function MenuSidenav({value, icon=faUserGraduate , href='#', sideHref=[]}) {
    const pathname = usePathname();
    const isActive = () => {
        // Memeriksa apakah pathname mengandung '/home/santri/'
        if (pathname.startsWith(sideHref[0])) {
            return true;
        }
        // Memeriksa apakah pathname sama dengan href atau terdapat dalam sideHref
        return pathname === href || sideHref.includes(pathname);
    }
    return (
        <>
                <Link 
                    href={href} 
                    className={'transition-all duration-150 hover:text-green-500 ' +
                        (isActive() ? 'text-primary' : 'text-secondary' )
                    }
                >
                    <FontAwesomeIcon icon={icon} className='me-2' />
                    {value}
                </Link>
        </>
    )
}
