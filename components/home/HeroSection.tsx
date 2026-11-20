
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { homeHeroData } from "@/data";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const hero = homeHeroData.slides[0];

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
          src={hero.image}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover object-center md:object-center"
        />
      </div>

      
      <div className="relative z-10 w-full min-h-[650px] lg:min-h-[680px] xl:min-h-[720px] flex items-center lg:items-start">

        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20 py-20 lg:py-24">

          <div className="max-w-[570px]">

      
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex items-center gap-4 mb-7"
            >
              <span className="text-[#d66c7b] text-xs sm:text-sm tracking-[0.3em] font-semibold uppercase">
                {hero.eyebrow}
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
              {hero.title[0]}

              <span className="block text-[#cd6675]">
                {hero.title[1]}
              </span>

              <span className="block">
                {hero.title[2]}
              </span>
            </motion.h1>

      
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
              className="mt-6 max-w-[520px] text-base sm:text-lg md:text-xl leading-[1.55] text-[#686276]"
            >
              {hero.text}
            </motion.p>

          </div>
        </div>
      </div>

      
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#f9e8e8]/40 to-transparent pointer-events-none" />

    </section>
  );
}
