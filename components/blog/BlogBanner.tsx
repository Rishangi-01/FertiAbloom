
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { blogSectionData, navigationData, siteInfoData } from "@/data";

export default function BlogBanner() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      aria-labelledby="blog-heading"
      className="relative isolate flex min-h-[320px] w-full items-center overflow-hidden bg-[#f5eae6] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[500px] xl:min-h-[537px] lg:top-[100px]"
    >
      <motion.div
        initial={{
          scale: shouldReduceMotion ? 1 : 1.12,
        }}
        animate={{ scale: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 -z-20"
      >
        <Image
          src={siteInfoData.bannerImage}
          alt={siteInfoData.bannerImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[65%_center]"
        />
      </motion.div>

      
      <div className="mx-auto w-full max-w-[1600px] py-16 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.18,
              },
            },
          }}
          className="max-w-xl"
        >
          <motion.h1
            id="blog-heading"
            variants={fadeUp}
            className="text-5xl font-extrabold tracking-tight text-[#351c35] sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[80px]"
          >
            {blogSectionData.heroTitle}
          </motion.h1>

          <motion.nav
            aria-label={siteInfoData.breadcrumbLabel}
            variants={fadeUp}
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#c75d7b] px-7 py-4 text-sm font-medium text-white shadow-lg shadow-[#c75d7b]/15 transition-all duration-300 hover:bg-[#ad4565] hover:shadow-xl sm:gap-4 sm:px-8 sm:py-[15px] sm:text-lg"
          >
            <Link
              href={navigationData.links[0].href}
              className="transition-opacity hover:opacity-75"
            >
              {navigationData.links[0].label}
            </Link>

            <ChevronRight
              size={23}
              strokeWidth={2.8}
              aria-hidden="true"
            />

            <span aria-current="page">{blogSectionData.heroTitle}</span>
          </motion.nav>
        </motion.div>
      </div>
    </section>
  );
}
