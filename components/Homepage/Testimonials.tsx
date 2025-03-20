"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css";

const Testimonials = () => {
  const testimonials = [
    {
      title: "Yvonne Mbabazi",
      desc: "The residential cleaning service was exceptional! The team was professional, thorough, and left my home spotless. I couldn't be happier with the results and will definitely use their services again."
    },
    {
      title: "Manzi Tinabi",
      desc: "I recently used their move-in cleaning service, and it was fantastic. They made sure every corner of my new home was clean and ready for us to move in. Highly satisfied with their attention to detail."
    },
    {
      title: "Mugisha Deo",
      desc: "Their floor cleaning service is top-notch. My hardwood floors have never looked better. The team was efficient and used high-quality products. I highly recommend their services."
    },
    {
      title: "Kasuki Ltd",
      desc: "We hired them for our office cleaning, and they did an amazing job. The office looks pristine, and the staff is very friendly and professional. We are very satisfied with their service."
    },
    {
      title: "Omosabe Gmbz Corp.",
      desc: "Their deep cleaning service exceeded my expectations. They cleaned areas I didn't even think of, and the whole house feels fresh and clean. I am extremely pleased with their work."
    },
    {
      title: "Kigali Convention Center",
      desc: "We used their event cleaning service, and it was outstanding. They ensured the venue was spotless before and after the event. Their team is reliable and efficient. Highly recommend!"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideChange = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / slidesPerView);

  return (
    <div className="bg-white flex flex-col gap-[40px] relative w-full px-[20px] md:px-10 lg:px-20 py-10 items-center">
      <div className="flex flex-col gap-[10px] items-center">

        <span className="text-[16px] text-secondary">TESTIMONIAL</span>
        <h1 className="text-[28px] text-primary text-center font-[700] max-w-[500px] leading-8">
          Real Stories, Real Impact: Testimonials from the community
        </h1>
      </div>
      <div className="w-full">
        <Swiper
          spaceBetween={10}
          slidesPerView={slidesPerView}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="p-5  bg-gray-50 rounded-lg shadow-lg border">
                <h3 className="font-bold ">{testimonial.title}</h3>
                <span className="text-[12px] text-gray-500">Client</span>
                <p className="text-[12px] text-black font-[400]">{testimonial.desc}</p>
                <span className="text-[12px] text-gray-500 flex justify-end">
                    <div className="flex">
                    {[...Array(3)].map((_, i) => (
                      <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-4 h-4 text-secondary"
                      >
                      <path
                        d="M12 17.25l-3.5 2.25 1-4.25-3.5-3 4.5-.25L12 7.5l1.5 4.5 4.5.25-3.5 3 1 4.25L12 17.25z"
                      />
                      </svg>
                    ))}
                    </div>
                  {index + 1} of {testimonials.length}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-end mt-6">
          {[...Array(totalSlides)].map((_, index) => (
            <div
              key={index}
              className={`h-[6px]  mx-1 cursor-pointer rounded-[4px] ${Math.floor(activeIndex / slidesPerView) === index ? 'bg-black w-16' : 'w-10 bg-gray-300'
                }`}
              onClick={() => handleSlideChange(index * slidesPerView)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;