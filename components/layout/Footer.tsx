"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa6";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import { footerSectionData, navigationData, siteInfoData } from "@/data";

const socialIcons: Record<string, typeof FaFacebookF> = {
  facebook: FaFacebookF,
  twitter: FaXTwitter,
  instagram: FaInstagram,
  pinterest: FaPinterestP,
  linkedin: FaLinkedinIn,
};

const contactIcons: Record<string, typeof MapPin> = {
  "map-pin": MapPin,
  phone: Phone,
  mail: Mail,
};

export default function Footer() {
  const reduceMotion = useReducedMotion();
  const quickLinks = footerSectionData.columns[0].links.slice(0, 5);
  const services = footerSectionData.columns[1].links.slice(0, 4);
  const socialLinks = siteInfoData.socials;
  const contactDetails = footerSectionData.contactDetails;

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <footer className="relative w-full overflow-hidden bg-[#fff7fa] px-3 pb-3 pt-5 sm:px-4 sm:pb-4 sm:pt-6">
      <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-[25px] border border-[#f9dce9] bg-gradient-to-br from-
      [#fff4f8] via-[#fff9fb] to-[#fdebf3] shadow-[0_10px_45px_rgba(226,117,159,0.07)] sm:rounded-[35px]">
        <div className="pointer-events-none absolute -left-24 -top-32 h-80 w-80 rounded-full bg-[#f9d8e7]/50 blur-[100px]" />

        <div className="pointer-events-none absolute right-[20%] top-0 h-64 w-64 rounded-full bg-white/80 blur-[90px]" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#f9d8e8]/60 blur-[100px]" />


        <div className="relative z-10 grid grid-cols-1 gap-10 px-6 pb-10 pt-10 sm:px-9 sm:py-12 lg:grid-cols-[1.55fr_0.9fr_0.9fr_1.55fr_0.9fr] 
        lg:gap-7 lg:px-10 lg:py-14 xl:px-16">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative z-20"
          >
            <Link
              href={navigationData.links[0].href}
              className="inline-flex items-center"
            >
              <Image
                src={siteInfoData.logo}
                alt={siteInfoData.alt}
                width={420}
                height={145}
                priority
                className="h-auto w-[260px] object-contain sm:w-[310px] lg:w-full lg:max-w-[370px]"
              />
            </Link>

            <p className="mt-5 max-w-[440px] text-[15px] leading-[1.9] text-[#77778d] sm:text-base">
              {footerSectionData.about}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
              {socialLinks.map((social, index) => {
                const Icon = socialIcons[social.icon];

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: reduceMotion ? 0 : index * 0.1,
                      duration: 0.4,
                    }}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -6,
                            rotate: 8,
                            scale: 1.1,
                          }
                    }
                    whileTap={{ scale: 0.9 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-[#f9dce9] bg-[#fde8f1] text-[#e83d85] shadow-sm transition-colors duration-300 hover:border-[#e83d85] hover:bg-[#e83d85] hover:text-white sm:h-[58px] sm:w-[58px]"
                  >
                    <Icon size={21} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>


          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="relative z-20"
          >
            <h3 className="text-xl font-extrabold tracking-tight text-[#32164e] sm:text-[23px]">
              {footerSectionData.columns[0].title}
            </h3>

            <div className="mt-4 h-[3px] w-10 rounded-full bg-gradient-to-r from-[#ec3882] to-[#fa8db7]" />

            <ul className="mt-6 space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex w-fit items-center gap-3 text-[15px] font-medium text-[#77778d] transition-all duration-300 hover:translate-x-2 hover:text-[#e83d85] sm:text-base"
                  >
                    <ChevronRight
                      size={19}
                      className="shrink-0 text-[#ed4a91] transition-transform duration-300 group-hover:translate-x-1"
                    />

                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>


          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.2 }}
            className="relative z-20"
          >
            <h3 className="text-xl font-extrabold tracking-tight text-[#32164e] sm:text-[23px]">
              {footerSectionData.columns[1].title}
            </h3>

            <div className="mt-4 h-[3px] w-10 rounded-full bg-gradient-to-r from-[#ec3882] to-[#fa8db7]" />

            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="group flex w-fit items-center gap-3 text-[15px] font-medium text-[#77778d] transition-all duration-300 hover:translate-x-2 hover:text-[#e83d85] sm:text-base"
                  >
                    <ChevronRight
                      size={19}
                      className="shrink-0 text-[#ed4a91] transition-transform duration-300 group-hover:translate-x-1"
                    />

                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>


          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.3 }}
            className="relative z-20 lg:pr-2"
          >
            <h3 className="text-xl font-extrabold tracking-tight text-[#32164e] sm:text-[23px]">
              {footerSectionData.contactTitle}
            </h3>

            <div className="mt-4 h-[3px] w-10 rounded-full bg-gradient-to-r from-[#ec3882] to-[#fa8db7]" />

            <div className="mt-7 flex flex-col gap-5">
              {contactDetails.map((contact) => {
                const Icon = contactIcons[contact.icon];

                return (
                  <motion.a
                    key={contact.title}
                    href={contact.href}
                    target={
                      contact.href.startsWith("https://") ? "_blank" : undefined
                    }
                    rel={
                      contact.href.startsWith("https://")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    whileHover={reduceMotion ? undefined : { x: 5 }}
                    className="group flex items-center gap-4"
                  >

                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#f8dce8] bg-[#fde8f1] text-[#e83d85] shadow-sm transition-all duration-300 group-hover:border-[#e83d85] group-hover:bg-[#e83d85] group-hover:text-white sm:h-[56px] sm:w-[56px]">
                      <Icon size={21} strokeWidth={2.2} />
                    </span>

                    {/* Text */}

                    <span className="text-sm font-medium leading-[1.7] text-[#77778d] transition-colors duration-300 group-hover:text-[#e83d85] sm:text-[15px]">
                      {contact.value}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <div className="pointer-events-none absolute bottom-[65px] right-0 z-[1] hidden h-[390px] w-[27%] lg:block xl:h-[420px]">
 
          <div className="absolute -right-20 bottom-0 lg:-bottom-[65px] h-[400px] w-[400px] rounded-full bg-gradient-to-br from-[#fbd5e5] to-[#f9bcd6] 
          opacity-70" />

          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, -12, 0],
                    rotate: [0, 5, 0],
                  }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[55%] top-0 text-[#f5a9ca]/60"
          >
            <svg viewBox="0 0 100 100" fill="none" className="h-24 w-24">
              <path
                d="M50 85 C40 73 9 51 9 30 C9 7 38 2 50 24 C62 2 91 7 91 30 C91 51 60 73 50 85Z"
                stroke="currentColor"
                strokeWidth="4"
              />
            </svg>
          </motion.div>

          <Image
            src={siteInfoData.bgImage}
            alt={siteInfoData.footerImageAlt}
            fill
            sizes="30vw"
            className="relative z-10 object-contain object-right-bottom lg:!top-[65px]"
          />
        </div>
    
        </div>


        


        <div className="relative z-20 border-t border-[#f5d8e5] px-5 py-5 text-center sm:py-6">
    
          <p className="text-sm font-medium text-[#77778d] sm:text-base">
    
            {footerSectionData.copyright}
    
          </p>
    
        </div>
    
      </div>
    
    </footer>
  );
}
