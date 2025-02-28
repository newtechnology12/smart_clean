"use client";
import handleLogout from "@/utlis/handelLogout";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [isOnWhiteBackground, setIsOnWhiteBackground] = useState(true);
  const lastScrollY = useRef(0);
  const scrollThreshold = 50; // Increased distance before showing navbar again

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect scrolling direction
      if (currentScrollY < lastScrollY.current - scrollThreshold || currentScrollY < 50) {
        setIsScrollingUp(true);
      } else if (currentScrollY > lastScrollY.current + 20) {
        setIsScrollingUp(false);
      }

      lastScrollY.current = currentScrollY;

      // Detect background color behind navbar
      const navbarHeight = 70; // Adjust to match navbar height
      const elementBehindNavbar = document.elementFromPoint(window.innerWidth / 2, navbarHeight);
      if (elementBehindNavbar) {
        const backgroundColor = window.getComputedStyle(elementBehindNavbar).backgroundColor;
        setIsOnWhiteBackground(backgroundColor.includes("255, 255, 255"));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`px-[20px] top-0 max-w-[1724px] lg:px-20 p-1 backdrop-blur-sm bg-white/10 flex flex-row items-center justify-between fixed w-full z-50 transition-transform duration-300 ${
          isScrollingUp ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <a href="/" className="rounded-[8px] bg-white px-2 font-[700]">
          <Image
            src={`/image/smartclean.png`}
            width={1000}
            height={1000}
            className="w-[80px]"
            alt="logo"
          />
        </a>
        <div className="flex-row gap-[50px] items-center hidden md:flex">
          <Link
            href="/"
            className={`${isOnWhiteBackground ? "text-primary" : "text-white"} text-[12px] font-[400] hover:scale-110 duration-300`}
          >
            Home
          </Link>
          <Link
            href="/HowItWorks"
            className={`${isOnWhiteBackground ? "text-primary" : "text-white"} text-[12px] font-[400] hover:scale-110 duration-300`}
          >
            How It Works
          </Link>
          <Link
            href="/services"
            className={`${isOnWhiteBackground ? "text-primary" : "text-white"} text-[12px] font-[400] hover:scale-110 duration-300`}
          >
            Services
          </Link>
          <Link
            href="/aboutus"
            className={`${isOnWhiteBackground ? "text-primary" : "text-white"} text-[12px] font-[400] hover:scale-110 duration-300`}
          >
            About Us
          </Link>
        </div>
        <div onClick={() => setIsActive(!isActive)} className="flex md:hidden">
          <span className={`${isOnWhiteBackground ? "text-primary" : "text-white"} text-[30px] cursor-pointer`}>
            {!isActive ? <FaBars /> : <IoClose />}
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`w-full bg-primary overflow-hidden mt-[10vh] ${
          isActive ? "h-screen border-t-[4px]" : "h-[0px] border-t-[0px]"
        } duration-300 transition-all fixed z-30`}
      >
        <div className="flex flex-col gap-[50px] py-5 px-10">
          <Link
            href="/"
            className={`${isOnWhiteBackground ? "text-primary" : "text-white"} text-[12px] font-[400] hover:scale-110 duration-300`}
          >
            Home
          </Link>
          <Link
            href="/HowItWorks"
            className={`${isOnWhiteBackground ? "text-primary" : "text-white"} text-[12px] font-[400] hover:scale-110 duration-300`}
          >
            How It Works
          </Link>
          <Link
            href="/services"
            className={`${isOnWhiteBackground ? "text-primary" : "text-white"} text-[12px] font-[400] hover:scale-110 duration-300`}
          >
            Services
          </Link>
          <Link
            href="/aboutus"
            className={`${isOnWhiteBackground ? "text-primary" : "text-white"} text-[12px] font-[400] hover:scale-110 duration-300`}
          >
            About Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
