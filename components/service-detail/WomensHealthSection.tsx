
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function WomensHealthSection() {
  const reduceMotion = useReducedMotion();

  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: reduceMotion ? 0 : -45,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.85,
        ease: "easeOut" as const,
      },
    },
  };

  const fadeRight = {
    hidden: {
      opacity: 0,
      x: reduceMotion ? 0 : 45,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut" as const,
        delay: reduceMotion ? 0 : 0.15,
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#fff8f7] px-5 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-12">

      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#f8e3e1]/50 blur-[100px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#f5dedd]/50 blur-[110px]" />

      {/* Main Container */}

      <div className="relative z-10 mx-auto grid max-w-[1650px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">

        {/* ================= LEFT CONTENT ================= */}

        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="order-2 lg:order-1"
        >

          {/* Eyebrow */}

          <div className="mb-5 flex items-center gap-5">

            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#bd7379] sm:text-sm">
              About Service
            </span>

            <span className="h-[2px] w-14 rounded-full bg-[#d99da0]" />

          </div>

          {/* Heading */}

          <h2 className="max-w-[720px] text-[34px] font-extrabold leading-[1.17] tracking-[-0.045em] text-[#29242b] sm:text-[42px] md:text-5xl xl:text-[50px]">

            Comprehensive Care

            <span className="block bg-gradient-to-r from-[#bd626b] to-[#a94d60] bg-clip-text text-transparent">
              for Women’s Health
            </span>

          </h2>

          {/* Description */}

          <div className="mt-6 max-w-[750px] space-y-4 text-[15px] leading-[1.8] text-[#777078] sm:text-base md:text-[17px]">

            <p>
              We offer comprehensive diagnostic and treatment
              facilities using modern technology to address a
              wide range of women's health concerns. Whether
              you need a routine check-up, treatment for
              menstrual irregularities, or specialized care,
              our gynecology services are tailored to your
              individual needs.
            </p>

            <p>
              Our goal is to provide safe, effective and
              holistic care, helping you maintain a healthy
              and confident life at every stage.
            </p>

          </div>

        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}

        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="order-1 lg:order-2"
        >

          <motion.div
            whileHover={
              reduceMotion
                ? undefined
                : {
                    y: -6,
                    transition: {
                      duration: 0.4,
                    },
                  }
            }
            className="group relative w-full"
          >

            {/* Decorative Background */}

            <div className="absolute -inset-2 rounded-[22px] bg-gradient-to-br from-[#f7e4e1] to-[#f9efed] opacity-80 blur-sm transition-all duration-500 group-hover:opacity-100 sm:rounded-[26px]" />

            {/* Image */}

            <div className="relative aspect-[1.78/1] w-full overflow-hidden rounded-[17px] border border-white/80 bg-[#f5e7e5] shadow-[0_15px_45px_rgba(111,68,75,0.10)] sm:rounded-[21px]">

              <Image
                src="/images/home/pcos-management.png"
                alt="Gynecologist explaining women's reproductive health using an anatomical model"
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.045]"
              />

              {/* Subtle Image Overlay */}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#4c2630]/10 via-transparent to-transparent opacity-60" />

            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}
