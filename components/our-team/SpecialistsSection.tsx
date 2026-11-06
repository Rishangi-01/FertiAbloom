
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Baby,
  Dna,
  Stethoscope,
  Microscope,
  ShieldCheck,
} from "lucide-react";

const specialists = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    specialty: "Gynecologist & Obstetrician",
    image: "/images/home/specialist1.png",
    icon: Baby,
  },
  {
    id: 2,
    name: "Dr. Rajesh Mehta",
    specialty: "Fertility Specialist",
    image: "/images/home/specialist2.png",
    icon: Dna,
  },
  {
    id: 3,
    name: "Dr. Neha Kapoor",
    specialty: "IVF & Reproductive Endocrinologist",
    image: "/images/home/specialist3.png",
    icon: Stethoscope,
  },
  {
    id: 4,
    name: "Dr. Amit Verma",
    specialty: "Laparoscopic Surgeon",
    image: "/images/home/specialist4.png",
    icon: Microscope,
  },
  {
    id: 5,
    name: "Dr. Sneha lyer",
    specialty: "Prenatal Care Specialist",
    image: "/images/home/specialist5.png",
    icon: Baby,
  },
  {
    id: 6,
    name: "Dr. Ananya Singh",
    specialty: "Menopause Care Specialist",
    image: "/images/home/specialist6.png",
    icon: Dna,
  },
  {
    id: 7,
    name: "Dr. Karan Malhotra",
    specialty: "Infertility Specialist",
    image: "/images/home/specialist7.png",
    icon: Stethoscope,
  },
  {
    id: 8,
    name: "Dr. Vikram Rao",
    specialty: "Family Planning Specialist",
    image: "/images/home/specialist8.png",
    icon: Microscope,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 55,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function SpecialistsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#fff9fb] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">


      <div className="pointer-events-none absolute -left-32 -top-40 h-96 w-96 rounded-full bg-pink-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-rose-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-[1600px]">


        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 text-center sm:mb-14 lg:mb-16"
        >

          <div className="mb-4 flex items-center justify-center gap-4 sm:gap-5">
            <span className="h-[2px] w-12 bg-[#f45b91] sm:w-20" />

            <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-[#ed4385] sm:text-lg">
              <ShieldCheck size={22} strokeWidth={2.2} />
              Our Specialists
            </span>

            <span className="h-[2px] w-12 bg-[#f45b91] sm:w-20" />
          </div>


          <h2 className="mx-auto max-w-5xl text-3xl font-extrabold leading-tight tracking-tight text-[#28104f] sm:text-4xl md:text-5xl lg:text-[54px]">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-[#e93c83] to-[#f66a9d] bg-clip-text text-transparent">
              Expert Medical Professionals
            </span>
          </h2>


          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[#77758f] sm:text-base md:text-lg md:leading-8">
            Our team of experienced doctors and healthcare specialists
            are dedicated to providing the best care for you and your family.
          </p>
        </motion.div>


        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-4 lg:gap-5 xl:gap-7"
        >
          {specialists.map((doctor) => {
            const Icon = doctor.icon;

            return (
              <motion.div
                key={doctor.id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 20,
                }}
                className="group relative rounded-[25px] border border-[#f8e6ef] bg-white/90 p-2.5 shadow-[0_8px_35px_rgba(211,117,157,0.09)] transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(211,117,157,0.19)] sm:rounded-[28px] sm:p-3"
              >

                <div className="relative aspect-[1/1.02] overflow-hidden rounded-[19px] bg-[#f9eaf1] sm:rounded-[22px]">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                  />


                  <div className="absolute inset-0 bg-gradient-to-t from-[#351044]/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />


                  <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-white/80 text-[#ec4386] shadow-sm backdrop-blur-md transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <ShieldCheck size={18} />
                  </div>
                </div>

                <div className="relative flex min-h-[118px] items-center justify-between gap-2 px-2 py-5 sm:px-1.5 sm:py-5 lg:px-1">
                  <a href="/our-team/team-detail" className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold tracking-tight text-[#29104f] transition-colors duration-300 group-hover:text-[#ed4385] sm:text-xl">
                      {doctor.name}
                    </h3>

                    <p className="mt-2 text-sm font-semibold leading-6 text-[#ed5790] sm:text-[15px]">
                      {doctor.specialty}
                    </p>

                    <div className="mt-3 h-[3px] w-10 rounded-full bg-gradient-to-r from-[#ed4385] to-[#f8a4c1] transition-all duration-500 group-hover:w-20" />
                  </a>


                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.12 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#fff0f6] to-[#fce0ec] text-[#ed4385] transition-colors duration-300 group-hover:from-[#f45b91] group-hover:to-[#e83c80] group-hover:text-white sm:h-[68px] sm:w-[68px]"
                  >
                    <Icon
                      size={31}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
