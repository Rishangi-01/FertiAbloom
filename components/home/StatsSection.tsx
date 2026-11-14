
"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  animate,
} from "framer-motion";

import Image from "next/image";
import {
  Baby,
  UsersRound,
  HeartHandshake,
  Trophy,
} from "lucide-react";
import { statsSectionData } from "@/data";

const statIcons: Record<string, typeof Baby> = {
  baby: Baby,
  "users-round": UsersRound,
  "heart-handshake": HeartHandshake,
  trophy: Trophy,
};

function AnimatedCounter({
  value,
  suffix,
  display,
  delay,
}: {
  value: number;
  suffix: string;
  display: string;
  delay: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.7,
  });

  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString("en-IN")
  );

  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;

    if (reduceMotion) {
      count.set(value);
      return;
    }

    const controls = animate(count, value, {
      duration: 2,
      delay,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [isInView, value, delay, count, reduceMotion]);

  return (
    <span
      ref={ref}
      className="inline-flex items-center justify-center"
      aria-label={display}
    >
      <motion.span aria-hidden="true">
        {rounded}
      </motion.span>
      <span aria-hidden="true">{suffix}</span>
    </span>
  );
}

export default function StatsSection() {
  const reduceMotion = useReducedMotion();
  const stats = statsSectionData.items;

  return (
    <section className="relative w-full overflow-hidden bg-[#fffaf9] px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-8">

      {/* Main Statistics Container */}
      <motion.div
        initial={{
          opacity: 0,
          y: reduceMotion ? 0 : 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
        className="relative mx-auto w-full max-w-[1600px] overflow-hidden rounded-[28px] border border-[#f8e8ed] bg-gradient-to-r from-[#fff5f7] via-[#fffafa] to-[#fff4f6] px-4 py-8 shadow-[0_12px_45px_rgba(205,106,135,0.07)] sm:rounded-[35px] sm:px-8 sm:py-10 lg:px-12 lg:py-7 xl:px-16"
      >

        {/* Left Decorative Leaves - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: reduceMotion ? 0 : -30 }}
          whileInView={{ opacity: 0.85, x: 0 }}
          viewport={{ once: true }}
          animate={
            reduceMotion
              ? undefined
              : { y: [0, -8, 0] }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -left-3 bottom-1 z-0 h-32 w-24 sm:h-40 sm:w-32 lg:h-48 lg:w-40"
        >
          <Image
            src={statsSectionData.decorativeImages[0].src}
            alt={statsSectionData.decorativeImages[0].alt}
            fill
            sizes="160px"
            className="object-contain object-left-bottom"
          />
        </motion.div>

        {/* Right Decorative Leaves - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: reduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 0.85, x: 0 }}
          viewport={{ once: true }}
          animate={
            reduceMotion
              ? undefined
              : { y: [0, 8, 0] }
          }
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-3 bottom-1 z-0 h-32 w-24 sm:h-40 sm:w-32 lg:h-48 lg:w-40"
        >
          <Image
            src={statsSectionData.decorativeImages[1].src}
            alt={statsSectionData.decorativeImages[1].alt}
            fill
            sizes="160px"
            className="object-contain object-right-bottom"
          />
        </motion.div>

        {/* Statistics Grid */}
        <div className="relative z-10 grid grid-cols-2 xl:grid-cols-4">

          {stats.map((stat, index) => {
            const Icon = statIcons[stat.icon];
            const numericValue =
              Number(stat.value.replace(/\D/g, "")) *
              (stat.value.includes("K") ? 1000 : 1);
            const suffix = stat.value.replace(/[\dK]/g, "");

            return (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                transition={{
                  duration: 0.7,
                  delay: reduceMotion ? 0 : index * 0.15,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -7,
                        transition: { duration: 0.3 },
                      }
                }
                className={`
                  group relative flex flex-col items-center justify-center
                  px-2 py-7 text-center
                  border-[#f3dce4]
                  ${index < 2 ? "border-b" : ""}
                  ${index % 2 === 0 ? "border-r" : ""}
                  xl:border-b-0
                  ${index !== 3 ? "xl:border-r" : "xl:border-r-0"}
                  xl:px-5 xl:py-0
                `}
              >

                {/* Icon Circle */}
                <div className="mb-3 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#fce6ec] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#f9dce5] group-hover:shadow-[0_8px_25px_rgba(213,91,133,0.14)] sm:mb-4 sm:h-[86px] sm:w-[86px]">

                  <Icon
                    size={42}
                    strokeWidth={1.8}
                    className="text-[#e53b83] transition-transform duration-500 group-hover:rotate-[-8deg] sm:h-12 sm:w-12"
                  />

                </div>

                {/* Animated Number */}
                <h3 className="text-4xl font-extrabold leading-none tracking-[-0.04em] text-[#dc3980] sm:text-5xl lg:text-[54px]">
                  <AnimatedCounter
                    value={numericValue}
                    suffix={suffix}
                    display={stat.value}
                    delay={index * 0.15}
                  />
                </h3>

                {/* Stat Label */}
                <p className="mt-2 text-sm font-semibold text-[#37304a] transition-colors duration-300 group-hover:text-[#d63d7c] sm:mt-3 sm:text-base md:text-lg lg:text-xl">
                  {stat.label}
                </p>

              </motion.div>
            );
          })}

        </div>
      </motion.div>
    </section>
  );
}
