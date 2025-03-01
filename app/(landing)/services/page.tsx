"use client"
import Image from 'next/image'
import React, { useState, useEffect, useMemo } from 'react'
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight, Loader } from 'lucide-react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { motion } from 'framer-motion'
import { useServices } from '@/components/provider/ServicesContext'
import { useSearchParams } from 'next/navigation'
import { RiLoader3Line } from 'react-icons/ri'

const Services = () => {
    const services = useServices();
    const searchParams = useSearchParams();
    const [currentService, setCurrentService] = useState(services[0]);
    const [sliderRef, setSliderRef] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        swipe: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    useEffect(() => {
        // Apply param logic: get service from URL and update current service accordingly
        const serviceParam = searchParams.get("service");
        if (serviceParam) {
            const foundService = services.find(
                service => service.id === parseInt(serviceParam, 10)
            );
            if (foundService) {
                setCurrentService(foundService);
            }
        }
    }, [searchParams, services]);

    useEffect(() => {
        // Scroll detection
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleServiceChange = (service) => {
        setIsLoading(true);

        // Simulate loading delay (remove this in production if you don't need it)
        setTimeout(() => {
            setCurrentService(service);
            setIsLoading(false);

            // Scroll to the top of the page, not just the service section
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 800); // Adjust loading time as needed
    };

    // Filter out the current service and randomize the order of other services
    const otherServices = useMemo(() => {
        const filtered = services.filter(service => service.name !== currentService.name);
        return [...filtered].sort(() => Math.random() - 0.5);
    }, [services, currentService]);

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
                {/* Selected Service Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Left Column - Title, Description, and Book Now */}
                    <div className="flex flex-col justify-between h-full">
                        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                            {currentService.name}
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            {currentService.description}
                        </p>
                        <div className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-md mt-4">
                            <p className="text-sm text-gray-600">Starting From</p>
                            <p className="text-2xl font-bold text-gray-900 mb-4">
                                ${currentService.startingPrice}
                            </p>
                            <a href={`/booking?service=${encodeURIComponent(currentService.id)}`}>
                                <button
                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                                >
                                    Book Now
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Image and Features */}
                    <div className="space-y-8">
                        <Image
                            src={currentService.image}
                            alt={currentService.name}
                            width={600}
                            height={400}
                            className="object-cover rounded-xl w-full shadow-lg"
                        />

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-900">
                                {currentService.name} Features
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
                    </div>
                </div>

                {/* Other Popular Options Section */}
                <div className="mt-20 pt-12 border-t border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Other Popular Options
                    </h3>

                    <div className="relative">
                        {isLoading ? (
                            <div className="absolute inset-0 flex items-center justify-center z-10 h-full w-full">
                                <Loader className="w-10 h-10 text-primary animate-spin" />
                            </div>
                        ) : (
                            <Slider ref={slider => setSliderRef(slider)} {...settings}>
                                {otherServices.map((service, index) => (
                                    <motion.div
                                        key={index}
                                        className="px-2"
                                    >
                                        <div className="h-[40vh] overflow-hidden rounded-xl relative flex items-center justify-center cursor-pointer group"
                                            onClick={() => handleServiceChange(service)}>
                                            <div className="w-full h-full overflow-hidden">
                                                <Image
                                                    src={service.image}
                                                    alt={service.name}
                                                    width={1000}
                                                    height={1000}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-90"></div>
                                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                                <h4 className="font-semibold text-lg mb-1">{service.name}</h4>
                                                <p className="text-sm opacity-90">Starting at ${service.startingPrice}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </Slider>
                        )}

                        {/* Custom Carousel Navigation Buttons */}
                        <div className="flex justify-center items-center gap-6 mt-8">
                            <button
                                onClick={() => sliderRef?.slickPrev()}
                                className="p-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={() => sliderRef?.slickNext()}
                                className="p-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
