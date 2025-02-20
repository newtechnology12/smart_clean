"use client"
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';

const ServiceDetails = () => {
    const router = useRouter();
    const { name, image } = router.query;

    return (
        <div className='px-[20px] lg:px-20 py-20 bg-white flex flex-col gap-[40px]'>
            <h1 className='text-[30px] text-primary font-[700]'>{name}</h1>
            <div className='w-full h-[50vh] overflow-hidden rounded-[20px] relative flex items-center justify-center'>
                <Image src={image as string} alt={name as string} width={1000} height={1000} className='w-full h-full object-cover' />
            </div>
        </div>
    );
};

export default ServiceDetails;