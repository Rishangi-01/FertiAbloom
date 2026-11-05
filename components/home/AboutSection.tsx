
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

const features = [
  {
    title: "Personalized Fertility Treatment",
    color: "pink",
  },
  {
    title: "Advanced IVF & IUI Support",
    color: "pink",
  },
  {
    title: "Comprehensive Women's Care",
    color: "pink",
  },
  {
    title: "Experienced Specialists",
    color: "green",
  },
  {
    title: "Compassionate & Supportive Care",
    color: "green",
  },
  {
    title: "Modern & Advanced Technology",
    color: "green",
  },
];

export default function AboutSection() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#fffaf8] py-16 sm:py-20 lg:py-24"
    >
      {/* Background Decorative Shapes */}
      <div className="absolute -left-32 bottom-0 h-[350px] w-[350px] rounded-full border-[35px] border-[#fae8e8]/50 pointer-events-none" />

      <div className="absolute right-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-[#f9eeee]/40 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-12 px-5 sm:px-8 md:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 lg:px-14 xl:gap-16 xl:px-20">

        {/* LEFT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: reduceMotion ? 0 : -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[680px] lg:mx-0"
        >
          {/* Green Top Left Decorative Corner */}
          <motion.div
            animate={
              reduceMotion
                ? {}
                : { y: [0, -8, 0] }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-3 -top-5 z-0 h-24 w-32 rounded-tl-[65px] border-l-[18px] border-t-[18px] border-[#9db99e] sm:-left-5 sm:-top-6 sm:h-32 sm:w-40"
          />

          {/* Main Image */}
          <div className="relative z-10 aspect-[1.08/1] w-full overflow-hidden rounded-[30px] border-[5px] border-white shadow-[0_15px_50px_rgba(79,53,58,0.10)] sm:rounded-[38px] lg:rounded-[42px]">

            <Image
              src="/images/home/about-fertility.png"
              alt="Fertility specialist caring for an expecting mother"
              fill
              priority={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 680px"
              className="object-cover object-center transition-transform duration-1000 hover:scale-105"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#38252a]/10 via-transparent to-transparent" />
          </div>

          {/* Pink Bottom Right Decorative Corner */}
          <motion.div
            animate={
              reduceMotion
                ? {}
                : { y: [0, 8, 0] }
            }
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-5 -right-3 z-0 h-28 w-36 rounded-br-[65px] border-b-[18px] border-r-[18px] border-[#d66b7c] sm:-bottom-6 sm:-right-5 sm:h-36 sm:w-44"
          />
        </motion.div>

        {/* RIGHT CONTENT SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="relative z-10 flex flex-col"
        >

          {/* Section Label */}
          <motion.div
            variants={fadeUp}
            className="mb-5 flex items-center gap-4"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d46a7a]">
              About Us
            </span>

            <span className="h-[2px] w-16 bg-[#e7a5ac]" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold leading-[1.15] tracking-[-0.04em] text-[#332d3b] sm:text-4xl md:text-[42px] xl:text-[48px]"
          >
            Compassionate Care
            <br className="hidden xl:block" />{" "}
            for Your{" "}
            <span className="text-[#cc6475]">
              Parenthood Journey
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-6 text-base leading-[1.8] text-[#77727a] sm:text-lg"
          >
            At FertiAbloom, we are dedicated to providing
            personalized fertility care with advanced treatments
            and a supportive environment. Our experienced
            specialists guide you at every step with care,
            compassion and the latest medical technology to help
            you achieve your dream of a happy family.
          </motion.p>

          
          <motion.div
            variants={stagger}
            className="mt-8 grid grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-3"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                whileHover={
                  reduceMotion
                    ? {}
                    : { x: 5 }
                }
                className="group flex items-center gap-3"
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white shadow-sm transition-transform duration-300 group-hover:scale-110 ${
                    feature.color === "pink"
                      ? "bg-[#d46a7a]"
                      : "bg-[#9db99e]"
                  }`}
                >
                  <Check size={17} strokeWidth={3} />
                </span>

                <span className="text-sm font-medium leading-snug text-[#494353] sm:text-base lg:text-[15px] xl:text-base">
                  {feature.title}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-4 rounded-full bg-[#d36373] px-9 py-5 text-base font-semibold text-white shadow-[0_10px_30px_rgba(211,99,115,0.20)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#bd5365] hover:shadow-[0_15px_35px_rgba(211,99,115,0.30)]"
            >
              <span>Appointment</span>

              <ArrowRight
                size={21}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
