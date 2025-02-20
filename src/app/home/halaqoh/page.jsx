import Navbar from '@/components/home/Navbar';
import { Suspense } from 'react';
import { Spinner } from 'flowbite-react';
import TableHalaqohMain from '@/components/home/halaqoh/TableHalaqohMain';


export default function Halaqoh() {

    return (
    <>
        <Navbar header={'Halaqoh'} home={true} />
        <Suspense 
            fallback={
                <div className='min-h-screen max-h-fit flex items-center justify-center'>
                    <Spinner aria-label="Extra large spinner example" size="xl" />
                </div>
            }
        >
            <TableHalaqohMain />
        </Suspense>
    </>
    )
}
