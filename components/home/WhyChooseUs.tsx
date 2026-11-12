
"use client";

import { useState } from "react";
import Image from "next/image";

import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

import {
  ArrowRight,
  Check,
  ShieldCheck,
} from "lucide-react";
import { whyChooseUsData } from "@/data";

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const reasons = whyChooseUsData.items.slice(0, whyChooseUsData.homeItemCount);
  const treatments = whyChooseUsData.homeTreatments;

  const fadeUp = {
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
    <section
      id="why-choose-us"
      className="relative w-full overflow-hidden bg-[#fff9f8] py-12 sm:py-12 lg:py-12"
    >
      <div className="pointer-events-none absolute -top-20 right-[35%] h-64 w-64 rounded-full bg-[#fce5ed]/60 blur-[80px]" />

      <div className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-[#f9dfe9]/50 blur-[90px]" />

     
      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-12 xl:gap-16 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">

     
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.12,
              },
            },
          }}
          className="flex flex-col"
        >

     
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2.5 rounded-full bg-[#fde5ef] px-4 py-2 text-sm font-semibold text-[#e33f83]">
              <ShieldCheck size={18} />
              <span>{whyChooseUsData.eyebrow}</span>
            </div>
          </motion.div>

     
          <motion.h2
            variants={fadeUp}
            className="mt-7 text-4xl font-bold leading-[1.12] tracking-[-0.045em] text-[#342344] sm:text-5xl lg:text-[52px] xl:text-[60px]"
          >
            {whyChooseUsData.title}

            <span className="block text-[#e83d86]">
              {whyChooseUsData.titleLine2} {whyChooseUsData.highlight}
            </span>
          </motion.h2>

     
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-[620px] text-base leading-[1.7] text-[#777387] sm:text-lg"
          >
            {whyChooseUsData.text}
          </motion.p>

          
          <motion.div
            variants={fadeUp}
            className="mt-7 w-full"
          >
            {reasons.map((reason, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={reason.title.join(" ")}
                  className="border-b border-[#f3dce6]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex(isActive ? -1 : index)
                    }
                    aria-expanded={isActive}
                    className="group flex w-full items-center gap-4 py-4 text-left sm:gap-6 sm:py-5"
                  >

          
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-bold transition-all duration-300 sm:h-[54px] sm:w-[54px] ${
                        isActive
                          ? "bg-[#fbdce9] text-[#e63e83]"
                          : "bg-[#fce8ef] text-[#e64b89]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

          
                    <span
                      className={`flex-1 text-base font-semibold tracking-[-0.02em] transition-colors duration-300 sm:text-lg md:text-xl ${
                        isActive
                          ? "text-[#342344]"
                          : "text-[#42364e] group-hover:text-[#e33f83]"
                      }`}
                    >
                      {reason.title.join(" ")}
                    </span>

          
                    <ArrowRight
                      size={23}
                      className={`shrink-0 transition-all duration-300 ${
                        isActive
                          ? "translate-x-1 text-[#e83d86]"
                          : "text-[#49365b] group-hover:translate-x-1 group-hover:text-[#e83d86]"
                      }`}
                    />
                  </button>

          
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.35,
                          ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pl-16 text-sm leading-[1.75] text-[#858093] sm:pl-[78px] sm:text-base">
                          {reason.text.join(" ")}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

        </motion.div>

     
        <motion.div
          initial={{
            opacity: 0,
            x: reduceMotion ? 0 : 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="relative mx-auto w-full max-w-[850px] lg:mx-0"
        >

     
          <motion.div
            animate={
              reduceMotion
                ? {}
                : {
                    y: [0, -12, 0],
                    rotate: [0, 3, 0],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-4 -top-5 h-48 w-48 rounded-[50px] bg-[#fbe1ed] sm:-right-6 sm:-top-6 sm:h-64 sm:w-64"
          />

          
          <div className="relative z-10 aspect-[1.16/1] w-full overflow-hidden rounded-[26px] bg-[#f8e9ec] shadow-[0_20px_60px_rgba(65,39,60,0.12)] sm:rounded-[32px] lg:rounded-[36px]">

            <Image
              src={whyChooseUsData.image}
              alt={whyChooseUsData.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 850px"
              className="object-cover object-center transition-transform duration-1000 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#37243d]/10 via-transparent to-transparent" />
          </div>

          
          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 35,
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
              duration: 0.8,
              delay: reduceMotion ? 0 : 0.3,
            }}
            className="relative z-20 mx-3 -mt-16 rounded-[22px] border border-white/80 bg-white/95 p-5 shadow-[0_15px_50px_rgba(75,43,65,0.12)] backdrop-blur-xl sm:mx-6 sm:-mt-20 sm:rounded-[28px] sm:p-7 md:mx-8 lg:mx-6 lg:-mt-75 xl:mx-10 xl:p-9"
          >

          
            <h3 className="mb-5 text-xl font-bold leading-tight tracking-[-0.025em] text-[#342344] sm:text-2xl md:text-[27px]">
              {whyChooseUsData.homeTreatmentTitle}
            </h3>

          
            <div className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2 sm:gap-y-5">

              {treatments.map((treatment, index) => (
                <motion.div
                  key={treatment}
                  initial={{
                    opacity: 0,
                    x: reduceMotion ? 0 : -15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: reduceMotion ? 0 : 0.4 + index * 0.08,
                  }}
                  whileHover={
                    reduceMotion
                      ? {}
                      : { x: 4 }
                  }
                  className="group flex items-center gap-3"
                >

          
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#fce1ec] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#f8cbdc]">
                    <Check
                      size={19}
                      strokeWidth={2.8}
                      className="text-[#e83d86]"
                    />
                  </span>

          
                  <span className="text-sm font-medium leading-snug text-[#747184] transition-colors duration-300 group-hover:text-[#e13d82] sm:text-base">
                    {treatment}
                  </span>

                </motion.div>
              ))}

            </div>

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
