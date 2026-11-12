"use client";

import Image from "next/image";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ChevronDown,
  MessageCircleQuestion,
} from "lucide-react";
import { faqSectionData } from "@/data";

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const faqs = faqSectionData.items;

  return (
    <section className="relative w-full overflow-hidden bg-[#fffafa] py-16 sm:py-20 lg:py-24">
      {/* =========================
          BACKGROUND DECORATIONS
      ========================== */}

      <div className="pointer-events-none absolute -left-28 -top-28 h-[430px] w-[430px] rounded-full bg-[#fde8f0] opacity-70 blur-[2px]" />

      <div className="pointer-events-none absolute -right-40 bottom-[-160px] h-[500px] w-[500px] rounded-full bg-[#fdeaf2] opacity-70 blur-[3px]" />

      <motion.div
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -12, 0],
                x: [0, 8, 0],
              }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[8%] top-[12%] h-32 w-32 rounded-full bg-[#f9d6e5]/50 blur-3xl"
      />

      {/* =========================
          MAIN CONTAINER
      ========================== */}

      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 xl:gap-16 px-5 sm:px-8 md:px-10 lg:px-14 xl:px-20">
        {/* =========================
            LEFT IMAGE
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: reduceMotion ? 0 : -50,
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
          className="relative mx-auto w-full max-w-[727px] lg:mx-0 h-full"
        >
          
          <div className="absolute -left-5 -top-6 h-40 w-40 rounded-full bg-[#fbe2ec] opacity-80 blur-2xl sm:-left-8 sm:-top-8 sm:h-52 sm:w-52" />

          
          <motion.div
            animate={
              reduceMotion
                ? undefined
                : {
                    rotate: [0, 3, 0, -3, 0],
                  }
            }
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-4 -top-5 h-32 w-32 rounded-full border-[18px] border-[#fce6ef] opacity-70 sm:-left-7 sm:-top-7 sm:h-48 sm:w-48 sm:border-[25px]"
          />


          <div className="group relative z-10 aspect-[0.98/1] w-full overflow-hidden rounded-[26px] bg-[#f7edf1] shadow-[0_25px_70px_rgba(70,38,65,0.13)] sm:rounded-[32px] lg:rounded-[36px] h-full">
            <Image
              src={faqSectionData.image}
              alt={faqSectionData.imageAlt}
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
            />


            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#382443]/10 via-transparent to-white/5" />
          </div>
        </motion.div>


        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.1,
              },
            },
          }}
          className="w-full"
        >
          {/* FAQ BADGE */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: reduceMotion ? 0 : 20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            className="mb-5"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f8dce8] bg-[#fde9f1] px-4 py-2 text-sm font-bold text-[#e53f83] shadow-[0_5px_20px_rgba(222,67,128,0.07)]">
              <MessageCircleQuestion
                size={18}
                strokeWidth={2.4}
              />

              <span>{faqSectionData.eyebrow}</span>
            </div>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            variants={{
              hidden: {
                opacity: 0,
                y: reduceMotion ? 0 : 25,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            className="max-w-[720px] text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] text-[#32194e] sm:text-5xl md:text-[52px] lg:text-[54px] xl:text-[58px]"
          >
            {faqSectionData.headingFirst}
            <span className="block bg-gradient-to-r from-[#e83b83] to-[#ed4b92] bg-clip-text text-transparent">
              {faqSectionData.headingHighlight}
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            variants={{
              hidden: {
                opacity: 0,
                y: reduceMotion ? 0 : 20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            className="mt-5 max-w-[760px] text-sm leading-[1.7] text-[#777389] sm:text-base md:text-lg"
          >
            {faqSectionData.intro}
          </motion.p>

          {/* =========================
              FAQ LIST
          ========================== */}

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: reduceMotion ? 0 : 25,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            className="mt-7 space-y-2.5 sm:mt-8 sm:space-y-3"
          >
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  layout={!reduceMotion}
                  transition={{
                    layout: {
                      duration: 0.3,
                    },
                  }}
                  className={`overflow-hidden rounded-[17px] border transition-all duration-300 sm:rounded-[20px] ${
                    isOpen
                      ? "border-[#f8d8e5] bg-gradient-to-r from-[#fff0f5] to-[#fff7fa] shadow-[0_10px_30px_rgba(216,82,132,0.07)]"
                      : "border-[#f3e6eb] bg-white/75 hover:border-[#f1cbd9] hover:bg-[#fffafd]"
                  }`}
                >
                  {/* QUESTION BUTTON */}
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex(
                        isOpen ? -1 : index
                      )
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-3 px-4 py-4 text-left sm:gap-4 sm:px-5 sm:py-[17px] md:px-6"
                  >
                    {/* NUMBER */}
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 sm:h-11 sm:w-11 sm:text-base ${
                        isOpen
                          ? "bg-[#fbdbe8] text-[#e53d82] shadow-[0_5px_15px_rgba(223,61,130,0.1)]"
                          : "bg-[#fde8f0] text-[#e94789]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* QUESTION */}
                    <span
                      className={`flex-1 text-sm font-bold leading-snug transition-colors duration-300 sm:text-base md:text-lg ${
                        isOpen
                          ? "text-[#32194e]"
                          : "text-[#38234f]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* ARROW */}
                    <motion.span
                      animate={{
                        rotate: isOpen ? 180 : 0,
                      }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.25,
                      }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                        isOpen
                          ? "text-[#e83d83]"
                          : "text-[#e83d83]"
                      }`}
                    >
                      <ChevronDown
                        size={21}
                        strokeWidth={2.4}
                      />
                    </motion.span>
                  </button>

                  {/* ANSWER */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
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
                          height: {
                            duration: reduceMotion ? 0 : 0.3,
                          },
                          opacity: {
                            duration: reduceMotion ? 0 : 0.2,
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-5 pl-[68px] pr-5 sm:px-5 sm:pb-6 sm:pl-[75px] sm:pr-8 md:pl-[82px]">
                          <p className="max-w-[720px] text-sm leading-[1.7] text-[#7b768c] sm:text-[15px] md:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}