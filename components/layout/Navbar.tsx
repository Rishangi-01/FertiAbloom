
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Our Team", href: "/our-team" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact-us" },
];

// const services = [
//   { name: "IVF Treatment", href: "/services/ivf" },
//   { name: "IUI Treatment", href: "/services/iui" },
//   { name: "Fertility Treatment", href: "/services/fertility" },
//   { name: "ICSI Treatment", href: "/services/icsi" },
// ];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect
  if (typeof window !== "undefined") {
    window.onscroll = () => {
      setScrolled(window.scrollY > 20);
    };
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-white/95 shadow-[0_5px_30px_rgba(0,0,0,0.07)] backdrop-blur-xl"
          : "bg-white"
      }`}
    >
      <nav className="mx-auto flex max-w-[1920px] items-center justify-between px-5 py-3 sm:px-8 lg:px-12 xl:px-16">

        
        <Link
          href="/"
          className="relative z-50 flex shrink-0 items-center"
          aria-label="FertiaBloom Home"
        >
          <Image
            src="/images/logo.png"
            alt="FertiaBloom - Where Hope Blossoms"
            width={450}
            height={115}
            priority
            className="h-auto w-[230px] object-contain sm:w-[280px] lg:w-[320px] xl:w-[400px]"
          />
        </Link>

        
        <div className="hidden items-center gap-7 lg:flex xl:gap-10">

          {navLinks.slice(0, 2).map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Link
                href={link.href}
                className={`group relative py-3 text-[17px] font-medium transition-colors duration-300 ${
                  link.name === "Home"
                    ? "text-[#c75d76]"
                    : "text-[#242424] hover:text-[#c75d76]"
                }`}
              >
                {link.name}

                <span
                  className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-[#c75d76] transition-all duration-300 ${
                    link.name === "Home"
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </motion.div>
          ))}

        
          {/* <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              aria-expanded={servicesOpen}
              className="group flex items-center gap-2 py-3 text-[17px] font-medium text-[#242424] transition-colors duration-300 hover:text-[#c75d76]"
            >
              Services

              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                  className="absolute left-0 top-full mt-1 w-64 overflow-hidden rounded-xl border border-pink-100 bg-white p-2 shadow-[0_15px_50px_rgba(0,0,0,0.12)]"
                >
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      onClick={() => setServicesOpen(false)}
                      className="group flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-[#fff1f4] hover:pl-6 hover:text-[#c75d76]"
                    >
                      {service.name}
                      <ArrowUpRight
                        size={15}
                        className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                      />
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div> */}

        
          {navLinks.slice(2).map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Link
                href={link.href}
                className="group relative py-3 text-[17px] font-medium text-[#242424] transition-colors duration-300 hover:text-[#c75d76]"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 h-[3px] w-0 rounded-full bg-[#c75d76] transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </div>

        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="hidden shrink-0 items-center border-l border-gray-200 pl-7 lg:flex xl:pl-9"
        >
          <Link
            href="/appointment"
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-[#c75d76] px-8 py-[17px] text-[16px] font-semibold text-white shadow-[0_5px_15px_rgba(199,93,118,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ad4963] hover:shadow-[0_10px_25px_rgba(199,93,118,0.3)] xl:px-11 xl:text-[18px]"
          >
            <span className="relative z-10">Appointment</span>
            <ArrowUpRight
              size={18}
              className="relative z-10 transition-transform duration-300 group-hover:rotate-45"
            />

            <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0" />
          </Link>
        </motion.div>

        
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#fff1f4] text-[#c75d76] transition-colors hover:bg-[#c75d76] hover:text-white lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={mobileOpen ? "close" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 top-[70px] z-30 bg-black/30 backdrop-blur-[2px] lg:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-0 top-full z-40 max-h-[calc(100vh-80px)] w-full overflow-y-auto border-t border-pink-100 bg-white px-6 py-6 shadow-xl lg:hidden"
            >
              <div className="flex flex-col gap-1">

                {navLinks.slice(0, 2).map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.07 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-4 py-3 text-base font-medium text-gray-800 transition-all hover:bg-[#fff1f4] hover:text-[#c75d76]"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

      
                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-gray-800 transition-all hover:bg-[#fff1f4] hover:text-[#c75d76]"
                  >
                    Services
                    <ChevronDown
                      size={19}
                      className={`transition-transform duration-300 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {navLinks.slice(2).map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + index * 0.07 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-lg px-4 py-3 text-base font-medium text-gray-800 transition-all hover:bg-[#fff1f4] hover:text-[#c75d76]"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

      
                <Link
                  href="/appointment"
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#c75d76] px-6 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#ad4963]"
                >
                  Book Appointment
                  <ArrowUpRight size={19} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
