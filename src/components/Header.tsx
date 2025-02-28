"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { HiOutlineXMark, HiBars3 } from "react-icons/hi2";
// import { FaFingerprint } from "react-icons/fa";
import Image from "next/image.js";

import Container from "./Container";
import { siteDetails } from "@/data/siteDetails";
import { menuItems } from "@/data/menuItems";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto w-full bg-transparent md:absolute">
      <Container className="!px-0">
        <nav className="mx-auto flex items-center justify-between bg-white px-5 py-2 shadow-md md:bg-transparent md:py-10 md:shadow-none">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              alt="Scufflr logo"
              width={28}
              height={28}
              src={siteDetails.siteLogo}
              className="text-foreground size-7 min-w-fit saturate-0"
            />
            <span className="manrope text-foreground cursor-pointer text-xl font-semibold">
              {siteDetails.siteName}
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden space-x-6 md:flex">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="relative text-black transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-slate-600 after:transition-all after:duration-500 after:content-[''] hover:text-slate-600 hover:after:w-full"
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="https://app.scufflr.com/home"
                target="_blank"
                rel="nofollow noindex"
                className="hover:text-primary rounded-full transition-colors"
              >
                Open App
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="flex size-10 items-center justify-center rounded-full text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiOutlineXMark className="size-6" color="black" aria-hidden="true" />
              ) : (
                <HiBars3 className="size-6" color="black" aria-hidden="true" />
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu with Transition */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div id="mobile-menu" className="bg-white shadow-lg md:hidden">
          <ul className="flex flex-col space-y-4 px-6 pb-6 pt-1">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-foreground hover:text-primary block"
                  onClick={toggleMenu}
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#cta"
                className="bg-primary hover:bg-primary-accent block w-fit rounded-full px-5 py-2 text-black"
                onClick={toggleMenu}
              >
                Find a sparring partner
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
