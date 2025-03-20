"use client"
import Image from 'next/image';
import React from 'react';


const prev = (button: HTMLElement) => {
    const slider = document.querySelector("#slider");
    const btns= document.querySelectorAll(".controlBtn");
    if (slider) {
        (slider as HTMLElement).style.transform="translateX(0)";
    }
    btns.forEach(btn => {
        btn.classList.remove("bg-gray-300", "text-gray-400");
        btn.classList.add("bg-primary", "text-white");
    });
    button.classList.remove("bg-primary", "text-white");
    button.classList.add("bg-gray-300", "text-gray-400");
}
const next = (button: HTMLElement) => {
    const slider = document.querySelector("#slider");
    const btns= document.querySelectorAll(".controlBtn");
    if (slider) {
        (slider as HTMLElement).style.transform="translateX(-20vw)";
    }
    else{
        console.log("slider not found");
    }
    btns.forEach(btn => {
        btn.classList.remove("bg-gray-300", "text-gray-400");
        btn.classList.add("bg-primary", "text-white");
    });
    button.classList.remove("bg-primary", "text-white");
    button.classList.add("bg-gray-300", "text-gray-400");
}
const HowItWorks = () => {
    return (
        <section className="w-full bg-gray-50 ">
            {/* Hero Banner */}
            <div className="relative bg-primary py-16 overflow-hidden">
                <div className="absolute inset-0 w-full h-full opacity-30">
                    <Image 
                        src="/image/background.svg" 
                        className="w-full h-full object-cover"
                        alt="background pattern" 
                        width={1920} 
                        height={1080}
                        priority 
                    />
                </div>
                <div className="relative max-w-4xl mx-auto text-center px-4 mt-76 sm:px-6 lg:px-8 py-20 pt-32">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        How Smart Clean Works
                    </h1>
                    <p className="text-blue-100 text-lg">
                        Simple <span className="text-secondary">•</span> Efficient <span className="text-secondary">•</span> Transparent
                    </p>
                </div>
            </div>


            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    {/* Step 1 */}
                    <div className="space-y-8">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                                <span className="text-primary text-2xl font-bold">1</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                                Choose Your Service
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-center">
                                Select from a variety of cleaning services tailored to your needs. Whether it's office cleaning, home cleaning, or car cleaning, we've got you covered.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="space-y-8">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-primary/50 rounded-full flex items-center justify-center mb-4">
                                <span className="text-white text-2xl font-bold">2</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                                Schedule Your Cleaning
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-center">
                                Pick a date and time that works best for you. Our flexible scheduling options ensure that you get the service when you need it.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="space-y-8">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                                <span className="text-white text-2xl font-bold">3</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                                Enjoy a Clean Space
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-center">
                                Sit back and relax while our professional cleaners take care of everything. Experience a spotless and healthy environment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* end of step section */}

            

            {/* my custom styles and contents */}
                        
                        {/* tutorial video cards slide section (each card has video thumbnail, title, short desc, link to youtube with that youtube video)*/}

                        <section className="hero-sec py-16 bg-blue-50">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
                                    Watch Us In Action › <span className='text-slate-600 font-mono'>How We Do It?</span>
                                </h2>
                                <div className="relative overflow-x-hidden max-sm:overflow-x-auto">
                                    {/* Slider */}
                                    <div id="slider" className="flex overflow-x-visible space-x-8 pb-4 duration-700">
                                        {/* Card 1 */}
                                        <div className="flex-shrink-0 w-60 max-sm:max-w-full bg-gray-100 rounded-2xl border-2 ring-2 ring-blue-400 border-primary shadow-lg pb-5 p-2">
                                            <iframe className='rounded-xl' width="100%" height="120" src="https://www.youtube.com/embed/UuKn__onO0Q?si=0fGZjYoPq30YeSN2" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                            <h3 className="text-lg font-bold text-primary pt-5 px-5">Welcome to our Cleaning session</h3>
                                            <p className="text-gray-600 p-5 py-3">Watch us cleaning one of rwandan home.</p>
                                            <a href="https://www.youtube.com/watch?v=video1" target="_blank" rel="noopener noreferrer" className="bg-primary text-white py-2 px-4 ml-5 rounded-md">
                                                Watch Now
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </div>
                                        {/* Card 2 */}
                                        <div className="flex-shrink-0 w-60 max-sm:max-w-full bg-gray-100 rounded-2xl border border-slate-300 shadow-lg pb-5 p-2">
                                            <iframe className='rounded-xl' width="100%" height="120" src="https://www.youtube.com/embed/UuKn__onO0Q?si=0fGZjYoPq30YeSN2" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                            <h3 className="text-lg font-semibold text-primary pt-5 px-5">What we clean?</h3>
                                            <p className="text-gray-600 p-5 py-3">watch our team explaining what kind of services we offer.</p>
                                            <a href="https://www.youtube.com/watch?v=video1" target="_blank" rel="noopener noreferrer" className="bg-secondary text-white py-2 px-4 ml-5 rounded-md">
                                                Watch Now
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </div>
                                        {/* Card 3 */}
                                        <div className="flex-shrink-0 w-60 max-sm:max-w-full bg-gray-100 rounded-2xl border border-slate-300 shadow-lg pb-5 p-2">
                                            <iframe className='rounded-xl' width="100%" height="120" src="https://www.youtube.com/embed/WtO1Fc-ldOU?si=6982rw2vuooBHgd4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                            <h3 className="text-lg font-semibold text-primary pt-5 px-5">Tools used</h3>
                                            <p className="text-gray-600 p-5 py-3">What we use to make your house look like a place?</p>
                                            <a href="https://www.youtube.com/watch?v=video1" target="_blank" rel="noopener noreferrer" className="bg-secondary text-white py-2 px-4 ml-5 rounded-md">
                                                Watch Now
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </div>
                                        {/* Card 4 */}
                                        <div className="flex-shrink-0 w-60 bg-gray-100 rounded-2xl border border-slate-300 shadow-lg pb-5 p-2">
                                            <iframe className='rounded-xl' width="100%" height="120" src="https://www.youtube.com/embed/WtO1Fc-ldOU?si=6982rw2vuooBHgd4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                            <h3 className="text-lg font-semibold text-primary pt-5 px-5">How to Hit us up for work?</h3>
                                            <p className="text-gray-600 p-5 py-3">Learn how to request for cleaning service.</p>
                                            <a href="https://www.youtube.com/watch?v=video1" target="_blank" rel="noopener noreferrer" className="bg-secondary text-white py-2 px-4 ml-5 rounded-md">
                                                Watch Now
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </div>
                                        {/* Card 5 */}
                                        <div className="flex-shrink-0 w-60 bg-gray-100 rounded-2xl border border-slate-300 shadow-lg pb-5 p-2">
                                            <iframe className='rounded-xl' width="100%" height="120" src="https://www.youtube.com/embed/WtO1Fc-ldOU?si=6982rw2vuooBHgd4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                            <h3 className="text-lg font-semibold text-primary pt-5 px-5">What are steps to clean house? </h3>
                                            <p className="text-gray-600 p-5 py-3">Want to get a hint from our expertise?</p>
                                            <a href="https://www.youtube.com/watch?v=video1" target="_blank" rel="noopener noreferrer" className="bg-secondary text-white py-2 px-4 ml-5 rounded-md">
                                                Watch Now
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    {/* Slide Controls */}
                                    <div className="flex justify-end space-x-4 mt-8 max-sm:hidden">
                                        <button className="controlBtn duration-300 w-12 h-12 bg-gray-300 rounded-full text-gray-400 focus:outline-none font-bold flex items-center justify-center" onClick={(e) => prev(e.currentTarget as HTMLElement)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                            </svg>
                                        </button>
                                        <button className="controlBtn duration-300 w-12 h-12 bg-primary rounded-full text-white focus:outline-none font-bold flex items-center justify-center" onClick={(e) => next(e.currentTarget as HTMLElement)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                        
                                    </div>
                                </div>
                            </div>
                        </section>
                {/* tools used in claening process */}
                <section className="hero-sec py-16 px-10 bg-slate-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-12">
                            Tools Used in Cleaning Process
                        </h2>
                        <div className="grid lg:grid-cols-3 gap-12 items-start">
                            {/* Tool 1 */}
                            <div className="space-y-8">
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 border-2 border-secondary bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18 3a3 3 0 0 0-3 3v5h-3a3 3 0 0 0-3 3v6h2v-6a1 1 0 0 1 1-1h3v7h-1a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-1v-9a3 3 0 0 0-3-3V6a1 1 0 0 1 2 0v3h2V6a3 3 0 0 0-3-3Z"/>
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                                        Vacuum Cleaner
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed text-center">
                                        Our professional cleaners use high-quality vacuum cleaners to remove dust, dirt, and debris from carpets, floors, and upholstery.
                                    </p>
                                </div>
                            </div>

                            {/* Tool 2 */}
                            <div className="space-y-8">
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 border-2 border-secondary bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20 3H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm0 16H8V5h12Z"/>
                                            <path d="M12 7h6v2h-6V7Zm0 4h6v2h-6v-2Zm0 4h6v2h-6v-2Z"/>
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                                        Microfiber Cloth
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed text-center">
                                        We use microfiber cloths to clean and polish surfaces without leaving streaks or lint behind. They are gentle on delicate surfaces.
                                    </p>
                                </div>
                            </div>

                            {/* Tool 3 */}
                            <div className="space-y-8">
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 border-2 border-secondary bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M6 8a6 6 0 1 1 12 0v2h2v2H4v-2h2V8Zm10 0a4 4 0 1 0-8 0v2h8V8ZM4 14h16l-1.5 7.5a2 2 0 0 1-2 1.5H7.5a2 2 0 0 1-2-1.5L4 14Zm7-8h2v8h-2V6Z"/>
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                                        Mop and Bucket
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed text-center">
                                        Our cleaners use a mop and bucket to clean hard floors and tiles. We use eco-friendly cleaning solutions to ensure a safe and healthy environment.
                                    </p>
                                </div>
                            </div>

                            {/* Tool 4 */}
                            <div className="space-y-8">
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 border-2 border-secondary bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M21.49 2.71a1 1 0 0 0-1.42 0L10 12.79l-2.29-2.29a1 1 0 0 0-1.42 1.42L8.59 14l-6.29 6.29a1 1 0 1 0 1.42 1.42L10 15.41l2.29 2.29a1 1 0 0 0 1.42-1.42L11.41 14l10.08-10.08a1 1 0 0 0 0-1.42Z"/>
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                                        Broom
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed text-center">
                                        We use high-quality brooms to sweep and collect dust and debris from floors, ensuring a clean and tidy space.
                                    </p>
                                </div>
                            </div>

                            {/* Tool 5 */}
                            <div className="space-y-8">
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 border-2 border-secondary bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2a1 1 0 0 0-1 1v2.76a5.5 5.5 0 1 0 2 0V3a1 1 0 0 0-1-1Zm-1.5 6.5a3.5 3.5 0 1 1 3 0v11.5a1 1 0 1 1-2 0V8.5Z"/>
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                                        Duster
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed text-center">
                                        Our team uses dusters to remove dust from surfaces, furniture, and hard-to-reach areas, leaving your space spotless.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end of tools used in cleaning process */}

                {/* guide section */}

                <section className="guide p-16 max-sm:p-10 bg-gradient-to-r from-secondary to-primary m-20 max-sm:m-5 rounded-2xl text-white relative">
                    <div className="absolute inset-0 w-full h-full opacity-30 z-0">
                        <Image 
                            src="/image/background.svg" 
                            className="w-full h-full object-cover"
                            alt="background pattern" 
                            width={1920} 
                            height={1080}
                            priority 
                        />
                    </div>
                    <div className="max-w-7xl mx-auto px-4 lg:px-8 z-10 relative">
                        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                            How to Request Our Cleaning Services
                        </h2>
                        <div className="grid lg:grid-cols-3 gap-12 items-start">
                            {/* Home Cleaning */}
                            <div className="space-y-8">
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 border-2 border-white bg-white/10 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2L2 7v15h20V7L12 2Zm0 2.18L18 7v2H6V7l6-2.82ZM4 9v11h16V9H4Zm8 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
                                        Home Cleaning
                                    </h3>
                                    <p className="text-white leading-relaxed text-center">
                                        Booking our home cleaning service is easy. Simply visit our <a href="/booking?service=1" className="text-white bg-secondary rounded-md px-2 py-0.5">booking page</a>, select your preferred date and time, and our team will take care of the rest.
                                    </p>
                                </div>
                            </div>

                            {/* Hotel Cleaning */}
                            <div className="space-y-8">
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 border-2 border-white bg-white/10 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M4 4h16v2H4V4Zm0 4h16v2H4V8Zm0 4h16v2H4v-2Zm0 4h16v2H4v-2Zm0 4h16v2H4v-2Z"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
                                        Hotel Cleaning
                                    </h3>
                                    <p className="text-white leading-relaxed text-center">
                                        For hotel cleaning services, visit our <a href="/booking?service=6" className="text-white bg-secondary rounded-md px-2 py-0.5">booking page</a>, choose your desired schedule, and our team will ensure your hotel is spotless.
                                    </p>
                                </div>
                            </div>

                            {/* Residential Cleaning */}
                            <div className="space-y-8">
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 border-2 border-white bg-white/10 rounded-full flex items-center justify-center mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M3 3h18v18H3V3Zm2 2v14h14V5H5Zm4 2h2v2H9V7Zm0 4h2v2H9v-2Zm0 4h2v2H9v-2Zm4-8h2v2h-2V7Zm0 4h2v2h-2v-2Zm0 4h2v2h-2v-2Z"/>
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
                                        Residential Cleaning
                                    </h3>
                                    <p className="text-white leading-relaxed text-center">
                                        Need residential cleaning? Visit our <a href="/booking?service=1" className="text-white bg-secondary rounded-md px-2 py-0.5">booking page</a> to schedule a service.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-12">
                            <a href="/services" className="bg-white cursor-pointer text-primary py-3 px-6 max-sm:text-sm max-sm:px-4 rounded-lg text-lg font-semibold">
                                Book Service Now
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16m-6-6l6 6-6 6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>
                <div className="p-2"></div>
            {/* end of custom contents */}
        </section>
    );
};

export default HowItWorks;