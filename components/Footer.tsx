import { log } from 'console'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex  justify-center flex-col gap-[10px] w-full bg-primary relative overflow-hidden'>
            <div className='w-full h-full absolute z-10 left-0'>
                <Image src="/image/background.svg" className='w-full h-full object-cover' alt='back' width={1000} height={1000} />
            </div>
            <div className='flex flex-col gap-[20px] relative z-20 py-10 px-[20px] lg:px-20'>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-[20px]'>
                    <a href="#" className='w-full py-[18px] rounded-[20px] bg-bluebutton flex flex-row justify-center items-center gap-[10px]'>
                        <div><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM16 8C20.4 8 24 11.6 24 16C24 20 21.1 23.4 17.1 24V18.3H19L19.4 16H17.2V14.5C17.2 13.9 17.5 13.3 18.5 13.3H19.5V11.3C19.5 11.3 18.6 11.1 17.7 11.1C15.9 11.1 14.7 12.2 14.7 14.2V16H12.7V18.3H14.7V23.9C10.9 23.3 8 20 8 16C8 11.6 11.6 8 16 8Z" fill="white" />
                        </svg>
                        </div>
                        <span className='text-white'>Facebook</span>
                    </a>
                    <a href="#" className='w-full py-[18px] rounded-[20px] bg-bluebutton flex flex-row justify-center items-center gap-[10px]'>
                        <div><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM8.2 13.3V24H11.6V13.3H8.2ZM8 9.9C8 11 8.8 11.8 9.9 11.8C11 11.8 11.8 11 11.8 9.9C11.8 8.8 11 8 9.9 8C8.9 8 8 8.8 8 9.9ZM20.6 24H23.8V17.4C23.8 14.1 21.8 13 19.9 13C18.2 13 17 14.1 16.7 14.8V13.3H13.5V24H16.9V18.3C16.9 16.8 17.9 16 18.9 16C19.9 16 20.6 16.5 20.6 18.2V24Z" fill="white" />
                        </svg>

                        </div>
                        <span className='text-white'>Linkendin</span>
                    </a>
                    <a href="https://www.instagram.com/smartcleans2024?igsh=NmpxcW1jczg3cTg=" className='w-full py-[18px] rounded-[20px] bg-bluebutton flex flex-row justify-center items-center gap-[10px]'>
                        <div><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 18.8C14.5 18.8 13.2 17.6 13.2 16C13.2 14.5 14.4 13.2 16 13.2C17.5 13.2 18.8 14.4 18.8 16C18.8 17.5 17.5 18.8 16 18.8Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4 9.2H12.6C11.8 9.3 11.4 9.4 11.1 9.5C10.7 9.6 10.4 9.8 10.1 10.1C9.86261 10.3374 9.75045 10.5748 9.61489 10.8617C9.57916 10.9373 9.5417 11.0166 9.5 11.1C9.48453 11.1464 9.46667 11.1952 9.44752 11.2475C9.34291 11.5333 9.2 11.9238 9.2 12.6V19.4C9.3 20.2 9.4 20.6 9.5 20.9C9.6 21.3 9.8 21.6 10.1 21.9C10.3374 22.1374 10.5748 22.2495 10.8617 22.3851C10.9374 22.4209 11.0165 22.4583 11.1 22.5C11.1464 22.5155 11.1952 22.5333 11.2475 22.5525C11.5333 22.6571 11.9238 22.8 12.6 22.8H19.4C20.2 22.7 20.6 22.6 20.9 22.5C21.3 22.4 21.6 22.2 21.9 21.9C22.1374 21.6626 22.2495 21.4252 22.3851 21.1383C22.4209 21.0626 22.4583 20.9835 22.5 20.9C22.5155 20.8536 22.5333 20.8048 22.5525 20.7525C22.6571 20.4667 22.8 20.0762 22.8 19.4V12.6C22.7 11.8 22.6 11.4 22.5 11.1C22.4 10.7 22.2 10.4 21.9 10.1C21.6626 9.86261 21.4252 9.75045 21.1383 9.61488C21.0627 9.57918 20.9833 9.54167 20.9 9.5C20.8536 9.48453 20.8048 9.46666 20.7525 9.44752C20.4667 9.3429 20.0762 9.2 19.4 9.2ZM16 11.7C13.6 11.7 11.7 13.6 11.7 16C11.7 18.4 13.6 20.3 16 20.3C18.4 20.3 20.3 18.4 20.3 16C20.3 13.6 18.4 11.7 16 11.7ZM21.4 11.6C21.4 12.1523 20.9523 12.6 20.4 12.6C19.8477 12.6 19.4 12.1523 19.4 11.6C19.4 11.0477 19.8477 10.6 20.4 10.6C20.9523 10.6 21.4 11.0477 21.4 11.6Z" fill="white" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM12.6 7.7H19.4C20.3 7.8 20.9 7.9 21.4 8.1C22 8.4 22.4 8.6 22.9 9.1C23.4 9.6 23.7 10.1 23.9 10.6C24.1 11.1 24.3 11.7 24.3 12.6V19.4C24.2 20.3 24.1 20.9 23.9 21.4C23.6 22 23.4 22.4 22.9 22.9C22.4 23.4 21.9 23.7 21.4 23.9C20.9 24.1 20.3 24.3 19.4 24.3H12.6C11.7 24.2 11.1 24.1 10.6 23.9C10 23.6 9.6 23.4 9.1 22.9C8.6 22.4 8.3 21.9 8.1 21.4C7.9 20.9 7.7 20.3 7.7 19.4V12.6C7.8 11.7 7.9 11.1 8.1 10.6C8.4 10 8.6 9.6 9.1 9.1C9.6 8.6 10.1 8.3 10.6 8.1C11.1 7.9 11.7 7.7 12.6 7.7Z" fill="white" />
                        </svg>

                        </div>
                        <span className='text-white'>Instgram</span>
                    </a>
                    <a href="#" className='w-full py-[18px] rounded-[20px] bg-bluebutton flex flex-row justify-center items-center gap-[10px]'>
                        <div><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16ZM16 8C20.4 8 24 11.6 24 16C24 20 21.1 23.4 17.1 24V18.3H19L19.4 16H17.2V14.5C17.2 13.9 17.5 13.3 18.5 13.3H19.5V11.3C19.5 11.3 18.6 11.1 17.7 11.1C15.9 11.1 14.7 12.2 14.7 14.2V16H12.7V18.3H14.7V23.9C10.9 23.3 8 20 8 16C8 11.6 11.6 8 16 8Z" fill="white" />
                        </svg>
                        </div>
                        <span className='text-white'>Twitter</span>
                    </a>
                </div>

                <div className='grid grid-cols-2 lg:grid-cols-4 gap-[20px] md:gap-[40px]'>
                    <div className='flex flex-col gap-[4px]'>
                        <div className='h-[70px] w-[70px] rounded-[10px] bg-blue-100/70'>
                            <Image src="/image/smartclean.png" className='w-full h-full object-cover' alt='back' width={100} height={10} />
                        </div>
                        <h1 className='text-[16px] text-white font-[600]'>All cleaning services</h1>
                        <span className='text-[14px] text-subtext'>Smart Clean is dedicated to providing top-notch cleaning services tailored to your needs. Our mission is to create cleaner, healthier, and more comfortable spaces for everyone.</span>
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                        <h1 className='text-[16px] text-white font-[600]'>Quick links</h1>
                        <a href="/" className='text-white text-[16px] hover:text-secondary duration-200'>Home</a>
                        <a href="/aboutus" className='text-white text-[16px] hover:text-secondary duration-200'>About Us</a>
                        <a href="/services" className='text-white text-[16px] hover:text-secondary duration-200'>Services</a>
                        <a href="/HowItWorks" className='text-white text-[16px] hover:text-secondary duration-200'>How it works</a>
                        <a href="/booking" className='text-white text-[16px] hover:text-secondary duration-200'>Book Now</a>
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                        <h1 className='text-[16px] text-white font-[600]'>More About Us</h1>
                        <a href="/aboutus" className='text-white text-[16px] hover:text-secondary duration-200'>Who We Are</a>
                        <a href="/HowItWorks" className='text-white text-[16px] hover:text-secondary duration-200'>Our Process</a>
                        <a href="/#faqs" className='text-white text-[16px] hover:text-secondary duration-200'>FAQ</a>
                        <a href="contact" className='text-white text-[16px] hover:text-secondary duration-200'>Contact us</a>
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                        <h1 className='text-[16px] text-white font-[600]'>Get In Touch</h1>
                        <div className=' flex flex-row gap-[10px] items-center'>
                            <div>
                                <p className="text-slate-300 text-sm">We would like to hear more about your building too. Reach out through:</p>
                                <div className="grid grid-cols-1 gap-y-2 py-3">

                                    {/* phone Number */}
                                    <div className="flex items-center justify-start p-3 bg-bluebutton/30 border border-bluebutton rounded-2xl">
                                        
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.353 2.5C18.054 2.911 20.978 5.831 21.393 9.532" stroke="#ffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M14.353 6.04297C16.124 6.38697 17.508 7.77197 17.853 9.54297" stroke="#ffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0315 12.4724C15.0205 16.4604 15.9254 11.8467 18.4653 14.3848C20.9138 16.8328 22.3222 17.3232 19.2188 20.4247C18.8302 20.737 16.3613 24.4943 7.68447 15.8197C-0.993406 7.144 2.76157 4.67244 3.07394 4.28395C6.18377 1.17385 6.66682 2.58938 9.11539 5.03733C11.6541 7.5765 7.04253 8.48441 11.0315 12.4724Z" stroke="#cdcf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div className="flex flex-col ps-2 text-sm">
                                            <div className="font-medium text-white">Phone Number</div>
                                            <div className="text-slate-300">+1 (123) 456-7890</div>
                                        </div>

                                    </div>
                                    {/* Email */}
                                    <div className="flex items-center justify-start p-3 bg-bluebutton/30 border border-bluebutton rounded-2xl">
                                        
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.2677 8.56116L13.0023 11.9954C12.1951 12.6283 11.0635 12.6283 10.2563 11.9954L5.95422 8.56116" stroke="#ffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.88787 3H16.3158C17.6752 3.01525 18.969 3.58993 19.896 4.5902C20.823 5.59048 21.3022 6.92903 21.222 8.29412V14.822C21.3022 16.1871 20.823 17.5256 19.896 18.5259C18.969 19.5262 17.6752 20.1009 16.3158 20.1161H6.88787C3.96796 20.1161 2 17.7407 2 14.822V8.29412C2 5.37545 3.96796 3 6.88787 3Z" stroke="#ccbf" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div className="flex flex-col ps-2 text-sm">
                                            <div className="font-medium text-white">Email</div>
                                            <div className="text-slate-300">smartcleanservices@gmail.com</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer