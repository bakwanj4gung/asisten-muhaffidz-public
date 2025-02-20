import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function MenuSidenav({value, icon=faHome , href='#', sideHref=[], classNameMenu=''}) {
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
                    className={'ps-7 py-2.5 w-full transition-all duration-150 ' +
                        (isActive() ? 'bg-secondary hover:bg-secondary text-white' : 'hover:text-white hover:bg-primary' )
                    }
                >
                    <FontAwesomeIcon icon={icon} className={'me-2 stroke-2 ' + classNameMenu} />
                    {value}
                </Link>
        </>
    )
}
