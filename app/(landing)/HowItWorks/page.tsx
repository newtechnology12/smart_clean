"use client"
import Image from 'next/image';
import React from 'react';

const HowItWorks = () => {
    return (
        <section className="w-full bg-gray-50 ">
            {/* Hero Banner */}
            <div className="relative bg-primary py-16 overflow-hidden">
                <div className="absolute inset-0 w-full h-full opacity-20">
                    <Image 
                        src="/image/background.svg" 
                        className="w-full h-full object-cover"
                        alt="background pattern" 
                        width={1920} 
                        height={1080}
                        priority 
                    />
                </div>
                <div className="relative max-w-4xl mx-auto text-center px-4 mt-76 sm:px-6 lg:px-8 py-20">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        How It Works
                    </h1>
                    <p className="text-blue-100 text-lg">
                        Simple • Efficient • Transparent
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    {/* Step 1 */}
                    <div className="space-y-8">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                                <span className="text-white text-2xl font-bold">1</span>
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
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
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
        </section>
    );
};

export default HowItWorks;