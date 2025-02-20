import Navbar from '@/components/home/Navbar'
import TableSantriMain from '@/components/home/santri/TableSantriMain';
import { Spinner } from 'flowbite-react';
import { Suspense } from 'react';

export default function Santri() {

    return (
        <>
            <Navbar header={'Santri'} home={true} />
            <Suspense 
                fallback={
                    <div className='min-h-screen max-h-fit flex items-center justify-center'>
                        <Spinner aria-label="Extra large spinner example" size="xl" />
                    </div>
                }
            >
                <TableSantriMain />
            </Suspense>
        </>
    ) 
}
