import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutUs = () => {
    return (
        <section className="relative bg-gray-50">
            {/* Main container with proper spacing and overflow control */}
            <div className="container mx-auto min-h-screen overflow-x-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
                    {/* Header Section with improved spacing */}
                    <div className="text-center max-w-3xl mx-auto mb-20 px-4">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Smart Clean Excellence
                        </h1>
                        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                            With over a decade of experience in professional cleaning services, 
                            we combine innovative technology with eco-friendly solutions to deliver 
                            exceptional cleanliness for homes and businesses across the city.
                        </p>
                    </div>

                    {/* Hero Image with proper containment */}
                    <div className="mb-20 px-4">
                        <div className="relative w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                            <Image 
                                src="/image/clean.jfif"
                                fill
                                alt="Professional cleaning services"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                    {/* How We Work Section with better spacing */}
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-20 px-4">
                        <div className="space-y-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                                Our Professional Approach
                            </h2>
                            <p className="text-base md:text-lg text-gray-600">
                                Experience the difference of our systematic cleaning methodology, 
                                backed by trained professionals and state-of-the-art equipment.
                            </p>
                            <Link 
                                href="/#contactus" 
                                className="inline-block bg-primary text-white px-6 py-3 rounded-xl 
                                         text-base md:text-lg font-medium hover:opacity-90 
                                         transition-opacity shadow-md"
                            >
                                Schedule a Cleaning
                            </Link>
                        </div>
                        <div className="space-y-4 mt-6 md:mt-0">
                            {[
                                "Our certified cleaning experts undergo rigorous training in the latest cleaning techniques and safety protocols.",
                                "We customize our services to meet your specific needs, whether it's regular maintenance or deep cleaning.",
                                "Quality control is at the heart of our service, with thorough inspections after each cleaning session."
                            ].map((text, index) => (
                                <p key={index} className="text-base md:text-lg text-gray-600 leading-relaxed">
                                    {text}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Mission Section with improved layout */}
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center px-4">
                        <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg order-2 md:order-1">
                            <Image 
                                src="/image/clean2.jpg"
                                fill
                                alt="Eco-friendly cleaning services"
                                className="object-cover"
                            />
                        </div>
                        <div className="space-y-6 order-1 md:order-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight 
                                         md:text-left text-center">
                                Our Commitment to Excellence
                            </h2>
                            <div className="space-y-4">
                                <p className="text-base md:text-lg text-gray-600 leading-relaxed 
                                            md:text-left text-center">
                                    At Smart Clean, we're committed to creating healthier environments 
                                    through our eco-friendly approach. We use certified green cleaning 
                                    products that are tough on dirt but gentle on the planet.
                                </p>
                                <p className="text-base md:text-lg text-gray-600 leading-relaxed 
                                            md:text-left text-center">
                                    Our specialized solutions include advanced sanitization services 
                                    and customized cleaning plans that fit your schedule and requirements.
                                </p>
                            </div>
                            <div className="md:text-left text-center">
                                <Link 
                                    href="/#services" 
                                    className="inline-block bg-primary text-white px-6 py-3 rounded-xl 
                                             text-base md:text-lg font-medium hover:opacity-90 
                                             transition-opacity shadow-md"
                                >
                                    Explore Our Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs