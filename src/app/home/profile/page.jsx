import Navbar from '@/components/home/Navbar'
import CardProfile from '@/components/home/profille/CardProfile'
import FormEditEmail from '@/components/home/profille/FormEditEmail'
import FormEditPassword from '@/components/home/profille/FormEditPassword'
import FormEditProfile from '@/components/home/profille/FormEditProfile'
import React from 'react'

export default function Profile() {
    return (
        <>
            <Navbar header={'Edit Profil'} back={true}  />
            <div className='minh-screen max-h-fit py-6'>
                <CardProfile />
                <FormEditProfile />
                <FormEditEmail />
                <FormEditPassword />
            </div>
        </>
    )
}
