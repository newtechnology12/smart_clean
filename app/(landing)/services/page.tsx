"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

const Services = () => {
    const [currentService] = useState({
        name: "Commercial Office Cleaning",
        description: "Elevate your workplace environment with our professional office cleaning solutions. We combine smart scheduling, advanced cleaning technology, and trained professionals to maintain a pristine, healthy workplace.",
        features: [
            "Smart monitoring system for cleaning task management",
            "Hospital-grade sanitization protocols",
            "Air quality monitoring and improvement services",
            "24/7 emergency cleaning response availability"
        ],
        startingPrice: 100
    })

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleBookNowClick = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <section className="w-full bg-gray-50 mt-12">
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
                <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 mt-78">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Transform Your Space with Smart Cleaning Technology
                    </h1>
                    <p className="text-blue-100 text-lg">
                        Professional • Efficient • Eco-friendly
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left Column - Service Information */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                                {currentService.name}
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                {currentService.description}
                            </p>
                        </div>

                        {/* Features */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Smart Clean Features
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {currentService.features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span className="text-gray-600">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <button 
                                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                                onClick={handleBookNowClick}
                            >
                                Book Now
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Right Column - Images */}
                    <div className="space-y-6">
                        <div className="relative">
                            {/* Price Card */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-10">
                                <div className="bg-white p-4 rounded-2xl shadow-lg">
                                    <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                                        <div className="p-3 bg-primary/10 rounded-xl">
                                            <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2 .9 2 2-.9 2-2 2" />
                                                <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600">Starting From</p>
                                            <p className="text-2xl font-bold text-gray-900">
                                                ${currentService.startingPrice}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Main Images */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="relative aspect-[4/3]">
                                    <Image 
                                        src="/image/carclean.png"
                                        alt="Professional cleaning service"
                                        fill
                                        className="object-cover rounded-2xl"
                                    />
                                </div>
                                <div className="relative aspect-[4/3]">
                                    <Image 
                                        src="/image/homeclean.png"
                                        alt="Home cleaning service"
                                        fill
                                        className="object-cover rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-2xl font-bold mb-4">Book a Service</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                                <input className="w-full px-3 py-2 border rounded-lg" type="text" id="name" name="name" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                                <input className="w-full px-3 py-2 border rounded-lg" type="email" id="email" name="email" required />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="service">Service</label>
                                <select className="w-full px-3 py-2 border rounded-lg" id="service" name="service" required>
                                    <option value="Commercial Office Cleaning">Commercial Office Cleaning</option>
                                    <option value="Home Cleaning">Home Cleaning</option>
                                    <option value="Car Cleaning">Car Cleaning</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="date">Preferred Date</label>
                                <input className="w-full px-3 py-2 border rounded-lg" type="date" id="date" name="date" required />
                            </div>
                            <div className="flex justify-end">
                                <button type="button" className="px-4 py-2 bg-gray-200 rounded-lg mr-2" onClick={handleCloseModal}>Cancel</button>
                                <button type="submit" className="px-4 py-2 bg-primary text-white rounded-lg">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Services