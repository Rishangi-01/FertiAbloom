
"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Star,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Neha Sharma",
    role: "IVF Patient",
    avatar: "/images/profile/avatar5.webp",
    rating: 5,
    quote:
      "The entire team was extremely supportive and guided us through every step of our IVF journey. We are now blessed with our baby, and we are forever grateful!",
  },
  {
    id: 2,
    name: "michael Verma",
    role: "Fertility Treatment Patient",
    avatar: "/images/profile/avatar2.webp",
    rating: 5,
    quote:
      "From our very first consultation, we felt comfortable and supported. The doctors explained every step with so much care and patience. We are truly thankful our journey.",
  },
  {
    id: 3,
    name: "Ananya Mehta",
    role: "IVF Patient",
    avatar: "/images/profile/avatar4.webp",
    rating: 5,
    quote:
      "The doctors and staff were incredibly kind and professional. Every appointment gave us confidence and hope. We appreciate the personalized care and dedication that made our experience so special.",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const reduceMotion = useReducedMotion();

  const activeTestimonial = testimonials[activeIndex];

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  // Automatic slider
  useEffect(() => {
    if (isPaused || reduceMotion) return;

    const interval = setInterval(nextSlide, 5500);

    return () => clearInterval(interval);
  }, [nextSlide, isPaused, reduceMotion]);

  const slideVariants = {
    initial: {
      opacity: 0,
      y: reduceMotion ? 0 : 20,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: reduceMotion ? 0 : -15,
    },
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-[#fffafa] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#fde5ef]/70 blur-[80px]" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[#fde7f0]/80 blur-[90px]" />

      <div className="pointer-events-none absolute right-[20%] top-[-100px] h-72 w-72 rounded-full border-[35px] border-[#fdebf2]/60" />

      {/* Main Container */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1650px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 xl:gap-14">

        {/* ================= LEFT CONTENT ================= */}

        <motion.div
          initial={{ opacity: 0, x: reduceMotion ? 0 : -45 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#f9dce8] bg-[#fdeaf2] px-5 py-2.5 text-sm font-bold text-[#e83e85] shadow-sm sm:text-base">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#ed3d88]" />
            Testimonial
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] text-[#32164e] sm:text-5xl md:text-6xl lg:text-[58px] xl:text-[64px]">
            Real Stories,
            <span className="block bg-gradient-to-r from-[#e83d85] to-[#f0529b] bg-clip-text text-transparent">
              Real Hope
            </span>
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-[700px] text-sm leading-[1.8] text-[#77758e] sm:text-base md:text-lg">
            Hear from our patients who have experienced compassionate
            care and successful outcomes with our fertility treatments.
          </p>

          {/* Testimonial Card */}
          <div className="mt-8 rounded-[25px] border border-white/90 bg-white/65 p-5 shadow-[0_15px_50px_rgba(100,52,90,0.06)] backdrop-blur-xl sm:mt-9 sm:rounded-[30px] sm:p-7 md:p-8">

            {/* Quote Icon */}
            <Quote
              size={48}
              strokeWidth={3}
              className="mb-2 rotate-180 fill-[#ec4389] text-[#ec4389] sm:h-14 sm:w-14"
            />

            {/* Animated Testimonial */}
            <div className="min-h-[130px] sm:min-h-[130px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeTestimonial.id}
                  variants={slideVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{
                    duration: reduceMotion ? 0 : 0.4,
                    ease: "easeInOut",
                  }}
                >
                  <p className="text-base leading-[1.8] text-[#68677f] sm:text-lg md:text-xl">
                    {activeTestimonial.quote}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Divider */}
            <div className="my-5 h-px w-full bg-gradient-to-r from-[#f7d9e6] via-[#f3d4e2] to-transparent sm:my-6" />

            {/* Patient Details */}
            <div className="flex flex-wrap items-center justify-between gap-5">

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeTestimonial.id}
                  initial={{ opacity: 0, x: reduceMotion ? 0 : -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: reduceMotion ? 0 : 15 }}
                  transition={{ duration: reduceMotion ? 0 : 0.3 }}
                  className="flex items-center gap-4"
                >
                  <div className="relative h-[65px] w-[65px] shrink-0 overflow-hidden rounded-full border-[3px] border-[#f9dce8] shadow-md sm:h-[76px] sm:w-[76px]">
                    <Image
                      src={activeTestimonial.avatar}
                      alt={activeTestimonial.name}
                      fill
                      sizes="76px"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#351c50] sm:text-xl">
                      {activeTestimonial.name}
                    </h3>
                    <p className="mt-1 text-sm text-[#9290a4] sm:text-base">
                      {activeTestimonial.role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f9dce8] bg-[#fff0f6] text-[#e83d85] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e83d85] hover:text-white hover:shadow-lg active:scale-95"
                >
                  <ArrowLeft size={22} />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f9dce8] bg-[#fff0f6] text-[#e83d85] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e83d85] hover:text-white hover:shadow-lg active:scale-95"
                >
                  <ArrowRight size={22} />
                </button>
              </div>
            </div>
          </div>

          {/* Slider Dots */}
          <div className="mt-7 flex items-center justify-center gap-3 lg:justify-center">
            {testimonials.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => setActiveIndex(index)}
                className={`h-3.5 rounded-full transition-all duration-500 ${
                  activeIndex === index
                    ? "w-8 bg-[#ed3e89] shadow-[0_3px_12px_rgba(237,62,137,0.3)]"
                    : "w-3.5 bg-[#f9d5e4] hover:bg-[#ec8ab2]"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}

        <motion.div
          initial={{ opacity: 0, x: reduceMotion ? 0 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[760px] lg:mx-0"
        >
          {/* Decorative Background Circle */}
          <div className="absolute -right-10 -top-12 h-60 w-60 rounded-full bg-[#fde5ef]/80 blur-[2px] sm:-right-14 sm:-top-16 sm:h-80 sm:w-80" />

          {/* Main Image */}
          <div className="group relative aspect-[0.98/1] w-full overflow-hidden rounded-[27px] bg-[#f9eaf0] shadow-[0_25px_70px_rgba(68,35,67,0.12)] sm:rounded-[35px] lg:rounded-[38px]">

            <Image
              src="/images/home/testimonial-main.png"
              alt="Happy parents holding their newborn baby"
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#301c3c]/10 via-transparent to-white/5" />
          </div>

          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: reduceMotion ? 0 : 0.5,
            }}
            animate={
              reduceMotion
                ? undefined
                : {
                    y: [0, -9, 0],
                  }
            }
            className="absolute -right-2 top-1/2 z-20 w-[125px] -translate-y-1/2 rounded-[22px] border border-white/90 bg-white/90 px-3 py-5 text-center shadow-[0_15px_45px_rgba(65,35,70,0.13)] backdrop-blur-xl sm:-right-7 sm:w-[155px] sm:rounded-[25px] sm:px-5 sm:py-7 lg:-right-8 xl:w-[165px]"
          >
            <h3 className="text-4xl font-extrabold tracking-tight text-[#ed4088] sm:text-5xl">
              4.8
            </h3>

            {/* Stars */}
            <div className="mt-2 flex justify-center gap-0.5">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  strokeWidth={1.5}
                  className="fill-[#ed4088] text-[#ed4088] sm:h-[19px] sm:w-[19px]"
                />
              ))}
            </div>

            <div className="my-4 h-px w-full bg-[#f7dce7]" />

            <p className="text-xs leading-[1.7] text-[#77748d] sm:text-sm">
              From 3K+
              <br />
              Patients
              <br />
              Reviewed by
              <br />
              Google
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
