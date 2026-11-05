
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative w-full min-h-[650px] lg:min-h-[680px] xl:min-h-[720px] overflow-hidden bg-[#fff8f6] lg:top-[100px]">


      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/home/family-hero.png"
          alt="Mother lovingly holding her baby"
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover object-center md:object-center"
        />
      </div>

      
      <div className="relative z-10 w-full min-h-[650px] lg:min-h-[680px] xl:min-h-[720px] flex items-center">

        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-20">

          <div className="max-w-[570px]">

      
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-4 mb-7"
            >
              <span className="text-[#d66c7b] text-xs sm:text-sm tracking-[0.3em] font-semibold uppercase">
                IVF & Fertility Care
              </span>

              <span className="w-14 sm:w-16 h-[1px] bg-[#d66c7b]" />
            </motion.div>

      
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.15 }}
              className="text-[42px] sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[68px] leading-[1.06] tracking-[-0.045em] font-bold text-[#332d38]"
            >
              Your Journey

              <span className="block text-[#cd6675]">
                to Parenthood
              </span>

              <span className="block">
                Starts Here
              </span>
            </motion.h1>

      
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="mt-6 max-w-[520px] text-base sm:text-lg md:text-xl leading-[1.55] text-[#686276]"
            >
              Expert fertility care, advanced treatments and
              compassionate support to help you achieve your
              dream of a happy family.
            </motion.p>

      
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.45 }}
              className="mt-7"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 rounded-full bg-[#d36373] px-8 py-4 text-base sm:text-lg font-semibold text-white shadow-[0_10px_30px_rgba(211,99,115,0.20)] transition-all duration-300 hover:bg-[#bd5365] hover:shadow-[0_15px_35px_rgba(211,99,115,0.35)] hover:-translate-y-1"
              >
                <span>Appointment</span>

                <ArrowRight
                  size={21}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />
              </Link>
            </motion.div>

          </div>
        </div>
      </div>

      
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#f9e8e8]/40 to-transparent pointer-events-none" />

    </section>
  );
}
