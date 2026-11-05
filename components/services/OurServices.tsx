
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Gynecology Care",
    description:
      "Comprehensive care for women's reproductive health at every stage of life.",
    image: "/images/home/gynecology-care.png",
    link: "/services/service-detail",
  },
  {
    id: 2,
    title: "Fertility Treatment",
    description:
      "Advanced and personalized fertility solutions to help you build your family.",
    image: "/images/home/fertility-treatment.png",
    link: "/services/service-detail",
  },
  {
    id: 3,
    title: "Prenatal Care",
    description:
      "Expert care and monitoring for a safe and healthy pregnancy journey.",
    image: "/images/home/prenatal-care.png",
    link: "/services/service-detail",
  },
  {
    id: 4,
    title: "Family Planning",
    description:
      "Guidance and support to help you plan your family with confidence.",
    image: "/images/home/family-planning.png",
    link: "/services/service-detail",
  },
  {
    id: 5,
    title: "Contraceptive Counseling",
    description:
      "Personalized guidance on safe and effective contraception options.",
    image: "/images/home/contraceptive-counseling.png",
    link: "/services/service-detail",
  },
  {
    id: 6,
    title: "PCOS Management",
    description:
      "Comprehensive care for PCOS with lifestyle, medication and long-term support.",
    image: "/images/home/pcos-management.png",
    link: "/services/service-detail",
  },
  {
    id: 7,
    title: "IVF & IUI Treatment",
    description:
      "Advanced reproductive technologies to turn your parenthood dreams into reality.",
    image: "/images/home/ivf-iui-treatment.png",
    link: "/services/service-detail-treatment",
  },
  {
    id: 8,
    title: "Menopause Care",
    description:
      "Supportive care to manage hormonal changes and maintain a healthy life.",
    image: "/images/home/menopause-care.png",
    link: "/services/service-detail",
  },
];

export default function OurServices() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 45,
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
    <section
      id="services"
      className="relative w-full overflow-hidden bg-[#fff9f7] py-16 sm:py-20 lg:py-24"
    >
      {/* Background Decorative Elements */}
      <div className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-[#f9e5e8]/40 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#f8e5e8]/50 blur-[100px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1700px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center sm:mb-14 lg:mb-16"
        >
          {/* Eyebrow */}
          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-[2px] w-12 sm:w-16 bg-[#ed8da0]" />

            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[#df6680] sm:text-base">
              Our Services
            </span>

            <span className="h-[2px] w-12 sm:w-16 bg-[#ed8da0]" />
          </div>

          {/* Main Heading */}
          <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-[1.2] tracking-[-0.035em] text-[#342b3d] sm:text-4xl md:text-5xl lg:text-[52px]">
            Expert Care for Every Stage

            <span className="mt-1 block text-[#d45f78]">
              of Your Parenthood Journey
            </span>
          </h2>
        </motion.div>

        {/* Services Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 xl:gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={
                reduceMotion
                  ? {}
                  : {
                      y: -10,
                      transition: { duration: 0.3 },
                    }
              }
              className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-white bg-white p-3 shadow-[0_8px_35px_rgba(95,54,66,0.055)] transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(95,54,66,0.13)] sm:rounded-[26px] sm:p-3.5"
            >
              {/* Image Container */}
              <div className="relative aspect-[1.05/0.95] w-full overflow-hidden rounded-[17px] bg-[#f8eeee] sm:aspect-[1.05/0.95]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Image Hover Overlay */}
                <div className="absolute inset-0 bg-[#332331]/0 transition-all duration-500 group-hover:bg-[#332331]/10" />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col px-2 pt-5 pb-3 sm:px-2.5 sm:pt-6">

                {/* Service Title */}
                <h3 className="text-xl font-bold leading-tight tracking-[-0.025em] text-[#342b3d] transition-colors duration-300 group-hover:text-[#d45f78] sm:text-[22px]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-[15px] leading-[1.65] text-[#777181] sm:text-base">
                  {service.description}
                </p>

                {/* View Details Link */}
                <div className="mt-auto pt-5">
                  <Link
                    href={service.link}
                    className="group/link inline-flex items-center gap-3 text-base font-semibold text-[#e35c7e] transition-colors duration-300 hover:text-[#b94c67] sm:text-lg"
                  >
                    <span className="relative">
                      View Details

                      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#d45f78] transition-all duration-300 group-hover/link:w-full" />
                    </span>

                    <ArrowRight
                      size={21}
                      strokeWidth={2.2}
                      className="transition-transform duration-300 group-hover/link:translate-x-2"
                    />
                  </Link>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
