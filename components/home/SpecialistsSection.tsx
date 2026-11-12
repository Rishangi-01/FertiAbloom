
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { teamPageData } from "@/data";

export default function SpecialistsSection() {
  const reduceMotion = useReducedMotion();
  const { homeSection } = teamPageData;
  const specialists = homeSection.members;

  return (
    <section className="relative w-full overflow-hidden bg-[#fffafa] py-16 sm:py-20 lg:py-24">

      
      <div className="pointer-events-none absolute -left-28 -top-28 h-[380px] w-[380px] rounded-full border-[55px] border-[#fce9f1] opacity-70 blur-[1px]" />

      <div className="pointer-events-none absolute -right-28 bottom-[-130px] h-[390px] w-[390px] rounded-full border-[55px] border-[#fce9f1] opacity-70 blur-[1px]" />

      <div className="pointer-events-none absolute right-0 top-1/3 h-48 w-32 rounded-full bg-[#fdebf2] opacity-60 blur-[70px]" />

      
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">

        
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10 text-center sm:mb-14 lg:mb-16"
        >

        
          <div className="mb-4 flex items-center justify-center gap-3 sm:gap-5">

            <span className="h-[2px] w-10 bg-[#ed5b9b] sm:w-16 lg:w-24" />

            <div className="flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.08em] text-[#e6478b] sm:text-lg lg:text-2xl">
              <ShieldCheck
                size={25}
                strokeWidth={2.2}
                className="sm:h-8 sm:w-8"
              />
              <span>{homeSection.eyebrow}</span>
            </div>

            <span className="h-[2px] w-10 bg-[#ed5b9b] sm:w-16 lg:w-24" />

          </div>

        
          <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-[#342044] sm:text-4xl md:text-5xl lg:text-[52px]">
            {homeSection.title}
          </h2>

        
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#77738f] sm:text-base md:text-lg lg:text-xl">
            {homeSection.description}
          </p>

        </motion.div>

        
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7 xl:gap-9">

          {specialists.map((doctor, index) => (

            <motion.div
              key={doctor.name}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 55,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: reduceMotion ? 0 : index * 0.18,
                ease: "easeOut",
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -9,
                      transition: { duration: 0.35 },
                    }
              }
              className="group relative"
            >

              
              <div className="relative rounded-[25px] border border-[#f5e6ef] bg-white p-2.5 shadow-[0_5px_22px_rgba(188,112,152,0.09)] transition-all duration-500 group-hover:border-[#efb9d0] group-hover:shadow-[0_20px_45px_rgba(195,99,143,0.17)] sm:rounded-[30px] sm:p-3">


                <div className="relative aspect-[0.98/1] w-full overflow-hidden rounded-[19px] bg-[#f6edf2] sm:rounded-[23px]">

                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />


                  <div className="absolute inset-0 bg-gradient-to-t from-[#35213f]/10 via-transparent to-transparent opacity-70" />


                  <div className="absolute right-4 top-4 flex h-10 w-10 scale-90 items-center justify-center rounded-full bg-white/85 text-[#e64a8c] opacity-0 shadow-md backdrop-blur-sm transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                    <ShieldCheck size={21} />
                  </div>

                </div>


                <div className="relative z-10 mx-0 -mt-[76px] rounded-[20px] border border-[#f3e6f2] bg-gradient-to-br from-white via-[#fffaff] to-[#f9f1ff] px-3 py-5 text-center shadow-[0_5px_12px_rgba(69,38,91,0.12)] transition-all duration-500 group-hover:border-[#eac5d9] group-hover:shadow-[0_10px_25px_rgba(191,103,148,0.15)] sm:-mt-[82px] sm:rounded-[24px] sm:px-4 sm:py-6">


                  <h3 className="text-xl font-bold tracking-[-0.035em] text-[#342044] transition-colors duration-300 group-hover:text-[#dc4384] sm:text-2xl lg:text-[27px]">
                    {doctor.name}
                  </h3>


                  <p className="mt-2 text-sm font-medium text-[#85809e] transition-colors duration-300 group-hover:text-[#d94d8b] sm:text-base lg:text-lg">
                    {doctor.role}
                  </p>

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "42px" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: reduceMotion ? 0 : 0.5 + index * 0.15,
                    }}
                    className="mx-auto mt-4 h-[3px] rounded-full bg-[#ed5b9b]"
                  />

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
