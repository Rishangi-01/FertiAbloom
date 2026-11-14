
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";
import { navigationData, siteInfoData } from "@/data";

export default function Navbar() {
  const pathname = usePathname();
  const navLinks = navigationData.links.map(({ label, href }) => ({
    name: label,
    href,
  }));
  const appointmentButton = navigationData.button;
  const mobileMenu = siteInfoData.mobileMenu;

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <nav aria-label={navigationData.ariaLabel} className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-0 lg:py-3 sm:px-8 lg:px-12 xl:px-16">

        
        <Link
          href={navigationData.links[0].href}
          className="relative z-50 flex shrink-0 items-center"
          aria-label={`${siteInfoData.name} Home`}
        >
          <Image
            src={siteInfoData.logo}
            alt={siteInfoData.alt}
            width={450}
            height={115}
            priority
            className="h-auto w-[230px] object-contain sm:w-[280px] lg:w-[320px] xl:w-[275px]"
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
                aria-current={isActiveLink(link.href) ? "page" : undefined}
                className={`group relative py-3 text-[17px] font-medium transition-colors duration-300 ${
                  isActiveLink(link.href)
                    ? "text-[#c75d76]"
                    : "text-[#242424] hover:text-[#c75d76]"
                }`}
              >
                {link.name}

                <span
                  className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-[#c75d76] transition-all duration-300 ${
                    isActiveLink(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </motion.div>
          ))}

        
        
          {navLinks.slice(2).map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Link
                href={link.href}
                aria-current={isActiveLink(link.href) ? "page" : undefined}
                className={`group relative py-3 text-[17px] font-medium transition-colors duration-300 ${
                  isActiveLink(link.href)
                    ? "text-[#c75d76]"
                    : "text-[#242424] hover:text-[#c75d76]"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-[#c75d76] transition-all duration-300 ${
                    isActiveLink(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
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
            href={appointmentButton.href}
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-[#c75d76] px-8 py-[17px] text-[16px] font-semibold text-white shadow-[0_5px_15px_rgba(199,93,118,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ad4963] hover:shadow-[0_10px_25px_rgba(199,93,118,0.3)] xl:px-11 xl:text-[18px]"
          >
            <span className="relative z-10">{appointmentButton.label}</span>
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
          aria-label={mobileOpen ? mobileMenu.closeLabel : mobileMenu.openLabel}
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
                      aria-current={isActiveLink(link.href) ? "page" : undefined}
                      className={`block rounded-lg px-4 py-3 text-base font-medium transition-all ${
                        isActiveLink(link.href)
                          ? "bg-[#fff1f4] text-[#c75d76]"
                          : "text-gray-800 hover:bg-[#fff1f4] hover:text-[#c75d76]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

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
                      aria-current={isActiveLink(link.href) ? "page" : undefined}
                      className={`block rounded-lg px-4 py-3 text-base font-medium transition-all ${
                        isActiveLink(link.href)
                          ? "bg-[#fff1f4] text-[#c75d76]"
                          : "text-gray-800 hover:bg-[#fff1f4] hover:text-[#c75d76]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}

      
                <Link
                  href={mobileMenu.appointmentHref}
                  onClick={() => setMobileOpen(false)}
                  className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#c75d76] px-6 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#ad4963]"
                >
                  {mobileMenu.appointmentLabel}
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
