
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
} from "motion/react";
import {
  ArrowRight,
  Check,
  ChevronRight,
} from "lucide-react";
import { serviceDetailData } from "@/data";

export default function GynecologyService() {
  const reduceMotion = useReducedMotion();
  const content = serviceDetailData.gynecology;

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-[#fffafa] py-8 sm:py-12 lg:py-12">

      <div className="pointer-events-none absolute -right-40 top-10 -z-0 h-96 w-96 rounded-full bg-[#f8e5e7]/40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-14">


          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : -60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reduceMotion ? 0 : 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative w-full overflow-hidden rounded-2xl sm:rounded-[24px]"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-[1.05/1] xl:aspect-[1.08/1]">
              <Image
                src={content.image}
                alt={content.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
              />
            </div>

            {/* Image overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#351c35]/10 to-transparent opacity-60" />

            {/* Decorative border */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/20 sm:rounded-[24px]" />
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col"
          >

            {/* Breadcrumb */}
            <motion.nav
              variants={fadeUp}
              aria-label={content.breadcrumb.ariaLabel}
              className="mb-9 flex flex-wrap items-center gap-2 text-sm font-medium text-[#777078] sm:mb-10 sm:text-base"
            >
              <Link
                href={content.breadcrumb.homeHref}
                className="transition-colors hover:text-[#bc5b68]"
              >
                {content.breadcrumb.homeLabel}
              </Link>

              <ChevronRight size={17} />

              <Link
                href={content.breadcrumb.servicesHref}
                className="transition-colors hover:text-[#bc5b68]"
              >
                {content.breadcrumb.servicesLabel}
              </Link>

              <ChevronRight size={17} />

              <span className="text-[#bd5c69]">
                {content.breadcrumb.currentLabel}
              </span>
            </motion.nav>

            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              className="mb-4 flex items-center gap-5"
            >
              <span className="text-sm font-bold uppercase tracking-[0.12em] text-[#bd6875] sm:text-base">
                {content.eyebrow}
              </span>

              <span className="h-[2px] w-16 bg-[#d9a0a5] sm:w-[75px]" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-extrabold leading-[1.12] tracking-tight text-[#29232d] sm:text-4xl md:text-5xl xl:text-[56px]"
            >
              {content.title}{" "}
              <span className="text-[#b95260]">
                {content.highlight}
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-6 text-base leading-[1.8] text-[#777078] sm:text-lg lg:mt-7 xl:text-[19px]"
            >
              {content.description}
            </motion.p>

            {/* Services List */}
            <motion.div
              variants={fadeUp}
              className="mt-7 grid grid-cols-1 gap-x-6 gap-y-5 rounded-2xl border border-[#f7e8e9] bg-[#fdf1f1]/80 p-5 sm:grid-cols-2 sm:p-7 lg:mt-8 xl:p-8"
            >
              {content.services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{
                    opacity: 0,
                    x: reduceMotion ? 0 : 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.5,
                    delay: reduceMotion ? 0 : index * 0.08,
                  }}
                  className="group flex items-center gap-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#bd6875] text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#a94d5c]">
                    <Check size={19} strokeWidth={2.5} />
                  </span>

                  <span className="text-sm font-medium leading-relaxed text-[#403849] sm:text-[15px] xl:text-base">
                    {service}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeUp} className="mt-8">
              <Link
                href={content.appointmentButton.href}
                className="group inline-flex min-h-[60px] items-center justify-center gap-5 rounded-full bg-[#bc5c68] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#bc5c68]/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#a94957] hover:shadow-xl hover:shadow-[#bc5c68]/25 sm:px-10 sm:text-lg"
              >
                {content.appointmentButton.label}

                <ArrowRight
                  size={22}
                  className="transition-transform duration-300 group-hover:translate-x-2"
                />
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
