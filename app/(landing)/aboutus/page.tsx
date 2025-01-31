import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutUs = () => {
    return (
        <div className='w-full flex flex-col gap-[40px]  bg-[#fbfbfb] px-[10px] md:px-[50px] lg:px-[100px] py-40 items-center'>
            <div className='flex flex-col gap-[10px] items-center'>
                <h1 className='text-[32px] font-[600]'>Our Company</h1>
                <span className='text-[14px] text-center md:text-start text-[#5F5F5F]'>
                    We are a team of experienced professionals who are dedicated to providing the best possible service to our clients.
                </span>
            </div>
            <div className='w-full h-[60vh] md:px-20'>
                <Image src={`/image/clean.jfif`} width={1000} height={1000} alt='' className='w-full h-full rounded-[12px] object-cover' />
            </div>
            <div className='w-full flex flex-col md:flex-row gap-[30px] py-20 items-center justify-center'>
                <div className=' w-full md:w-1/2 flex flex-col gap-[10px]'>
                    <h1 className='text-[32px] font-[600]'>How We Work With Our Clients</h1>

                    <Link href={`/#contactus`} className='text-[14px] py-4 w-[200px] bg-primary items-center justify-center flex text-white rounded-[12px]'>
                        <span>
                            Contact Us
                        </span>
                    </Link>
                </div>
                <div className='w-full md:w-1/2 flex flex-col gap-[10px]'>
                    <span className='text-[14px] text-center md:text-start text-[#5F5F5F]'>
                        We are a team of experienced professionals who are dedicated to providing the best possible service to our clients.
                    </span>
                    <span className='text-[14px] text-center md:text-start text-[#5F5F5F]'>

                        We are a team of experienced professionals who are dedicated to providing the best possible service to our clients.
                    </span>
                    <span className='text-[14px] text-center md:text-start text-[#5F5F5F]'>
                        We are a team of experienced professionals who are dedicated to providing the best possible service to our clients.
                    </span>
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-[30px] w-full items-center'>
                <div className='w-full md:w-1/2 flex flex-col gap-[10px]'>
                    <Image src={`/image/clean2.jpg`} width={1000} height={1000} alt='' className='w-full h-full rounded-[12px] object-cover' />
                </div>
                <div className='w-full md:w-1/2 flex flex-col gap-[10px]'>
                    <h1 className='text-[32px] font-[600] text-center md:text-start'>Our Mission  </h1>
                    <span className='text-[14px] text-[#5F5F5F] text-center md:text-start'>
                        We are a team of experienced professionals who are dedicated to providing the best possible service to our clients.
                        We are a team of experienced professionals who are dedicated to providing the best possible service to our clients.
                        We are a team of experienced professionals who are dedicated to providing the best possible service to our clients.
                    </span>
                    <Link href={`/#services`} className='mx-auto md:mx-0 text-[14px] py-4 w-[200px] bg-primary items-center justify-center flex text-white rounded-[12px]'>
                        View Services
                    </Link>
                </div>



            </div>



        </div>
    )
}

export default AboutUs