"use client"
import handleLogout from '@/utlis/handelLogout';
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { RiLogoutCircleLine } from "react-icons/ri";

const Navbar = () => {
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <>
            <div className='px-[20px] top-0 max-w-[1724px] lg:px-20 p-3 bg-primary flex flex-row items-center justify-between fixed w-full z-[300]'>
                <a href="/" className='rounded-[8px] bg-white px-6  text-white font-[700]'>
                    <Image src={`/image/smartclean.png`} width={1000} height={1000} className='w-[80px]' alt='logo' />
                </a>
                <div className={`flex-row gap-[50px] items-center hidden md:flex`}>
                    <Link href="/" className='text-white text-[12px] font-[400] hover:scale-110 duration-300'>Home</Link>
                    <Link href="" className='text-white text-[12px] font-[400] hover:scale-110 duration-300'>How It Works</Link>
                    <Link href="/services" className='text-white text-[12px] font-[400] hover:scale-110 duration-300'>Services</Link>
                    <Link href="/aboutus" className='text-white text-[12px] font-[400] hover:scale-110 duration-300'>About Us</Link>
                </div>
                <div onClick={() => setIsActive(!isActive)} className='flex md:hidden'>


                    <span className='text-white text-[30px] cursor-pointer'>
                        {!isActive && <FaBars />}
                        {isActive && <IoClose />}

                    </span>

                </div>

            </div>
            <div className={`w-full bg-primary overflow-hidden  mt-[10vh] ${isActive ? "h-screen border-t-[4px]" : "h-[0px] border-t-[0px]"} duration-300 transition-all fixed z-30`}>
                <div className={`flex flex-col gap-[50px] py-5 px-10`}>
                    <Link href="/" className='text-white text-[12px] font-[400] hover:scale-110 duration-300'>Home</Link>
                    <Link href="" className='text-white text-[12px] font-[400] hover:scale-110 duration-300'>How It Works</Link>
                    <Link href="/services" className='text-white text-[12px] font-[400] hover:scale-110 duration-300'>Services</Link>
                    <Link href="/aboutus" className='text-white text-[12px] font-[400] hover:scale-110 duration-300'>About Us</Link>
                </div>
            </div>
        </>

    )
}

export default Navbar