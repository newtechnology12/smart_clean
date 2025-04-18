import Image from 'next/image'
import React from 'react'
import { array } from 'yup'

const CompanyDetails = () => {
    return (
        <div className='px-[10px] my-32 md:px-[100px] lg:px-[200px] flex flex-col gap-[20px] py-20 bg-[#FAFAFA]'>
            {/* Header Section */}
            <div className='flex flex-row gap-[10px] items-center'>
                <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 11.9998H20" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M8.99997 17C8.99997 17 4.00002 13.3176 4 12C3.99999 10.6824 9 7 9 7" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <span className='text-[18px] font-[700] text-black'>Welcome to Smart Clean</span>
            </div>

            {/* Hero Section */}
            <div className='w-full h-[40vh] relative'>
                <Image src={`/image/homeclean1.jpeg`} layout="fill" className='object-cover rounded-2xl' alt='Smart Clean Hero' />
                <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white rounded-2xl'>
                    <h1 className='text-[32px] font-bold'>Professional Cleaning Services</h1>
                    <p className='text-[16px] mt-2'>We specialize in cleaning houses, apartments, hotels, offices, and more.</p>
                    <a href="/aboutus" className='mt-4 bg-slate-100 text-slate-800 px-[20px] py-[10px] rounded-xl text-sm font-semibold'>Read More About Us</a>
                </div>
            </div>

            {/* About Section */}
            <div className='flex flex-col gap-[20px] bg-white p-[30px] rounded-2xl bg-bluebutton/20'>
                <h2 className='text-[24px] font-bold text-black'>About Us</h2>
                <p className='text-[16px] text-[#6b6b6b]'>
                    At Smart Clean, we are committed to providing top-notch cleaning services tailored to your needs. Our team of professionals ensures your space is spotless, hygienic, and welcoming.
                </p>
                <p className='text-[16px] text-[#6b6b6b]'>
                    Whether it's your home, office, or hotel, we bring the sparkle back to your space with eco-friendly products and cutting-edge cleaning techniques.
                </p>
                <div className="">
                <a href="/aboutus" className='mt-4 bg-bluebutton text-slate-100 px-[20px] py-[10px] rounded-xl text-sm font-semibold'>Read More About Us</a>
                </div>
            </div>

            {/* Services Section */}
            <div className='flex flex-col gap-[20px] py-10'>
                <h2 className='text-[24px] font-bold text-black'>Our Services</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-[20px]'>
                    {['House Cleaning', 'Office Cleaning', 'Hotel Cleaning', 'Apartment Cleaning'].map((service, index) => (
                        <div key={index} className='flex flex-col items-center bg-white rounded-[20px] shadow-md bg-slate-100'>
                            <Image src={`/image/homeclean1.jpeg`} width={100} height={100} className='rounded-xl object-cover h-64 w-full bg-slate-200' alt={service} />
                            <h3 className='text-[16px] font-bold p-5'>{service}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Team Section */}
            <div className='flex flex-col gap-[20px] bg-white p-[30px] rounded-[20px] shadow-md py-5'>
                <h2 className='text-[24px] font-bold text-black'>Meet Our Team</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-[20px]'>
                    {[{name: "Mr John Bekan", title: "CEO"}, {name: "Megan Smith", title: "HR Manager"}, {name: "Willy Mollen", title: "Operation Officer"}, {name: "Jeane Dollie", title: "Expert Cleaner"}].map((emp, index) => (
                        <div key={index} className='flex flex-col items-center justify-center'>
                            <Image src={`/image/user${index + 1}.jpg`} width={100} height={100} className='rounded-full object-cover bg-black h-40 w-40' alt={`Team Member ${index + 1}`} />
                            <h3 className='text-[16px] font-bold mt-4'>{emp.name}</h3>
                            <p className='text-[14px] text-[#6b6b6b]'>{emp.title}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Testimonials Section */}
            <div className='flex flex-col gap-[20px] py-10'>
                <h2 className='text-[24px] font-bold text-black'>What Our Clients Say</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[20px]'>
                    {[
                        {
                            feedback: "Smart Clean made my home spotless! Their team was professional and efficient.",
                            client: "Sarah Johnson, New York"
                        },
                        {
                            feedback: "I was amazed by the thoroughness of their cleaning service. Highly recommend!",
                            client: "Michael Brown, California"
                        }
                    ].map((testimonial, index) => (
                        <div key={index} className='bg-white p-[20px] rounded-[20px] shadow-md'>
                            <p className='text-xl text-slate-600 font-light italic'>
                                <q>{testimonial.feedback}</q>
                            </p>
                            <h4 className='text-sm text-yellow-600 font-medium mt-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 inline-block mr-2 text-yellow-600" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                                    <circle cx="12" cy="12" r="4" fill="currentColor" />
                                </svg>
                                {testimonial.client}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className='flex flex-col items-center justify-center gap-y-3 bg-[#13829F] text-white p-[30px] rounded-[20px]'>
                <h2 className='text-[24px] font-bold'>Ready to Experience the Best Cleaning Service?</h2>
                <p className='text-[16px] mt-2'>Contact us today to book your service or chat with our team for more details.</p>
                <div className='flex flex-row gap-[20px] mt-4'>
                    <button className='bg-white text-[#13829F] px-[20px] py-[10px] rounded-xl font-bold'>Chat with Us</button>
                    <button className='bg-[#0f5c6f] px-[20px] py-[10px] rounded-xl font-bold'>Book Service</button>
                </div>
            </div>
        </div>
    )
}

export default CompanyDetails