
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  User,
  type LucideIcon,
} from "lucide-react";
import { teamPageData } from "@/data";

const profileIcons: Record<string, LucideIcon> = {
  phone: Phone,
  mail: Mail,
  "map-pin": MapPin,
};

export default function DoctorDetails() {
  const reduceMotion = useReducedMotion();
  const profile = teamPageData.profile;

  const reveal = {
    initial: {
      opacity: 0,
      y: reduceMotion ? 0 : 30,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.15,
    },
    transition: {
      duration: reduceMotion ? 0 : 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  };

  return (
    <section className="relative overflow-clip bg-[#fffafa] py-8 sm:py-12 lg:py-16">
      
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-pink-100/40 blur-[100px]" />

      <div className="relative mx-auto max-w-[1600px] px-6 sm:px-10 md:px-12 lg:px-16 xl:px-20">

        <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[minmax(0,1fr)_370px] xl:grid-cols-[minmax(0,1fr)_380px] xl:gap-8 2xl:grid-cols-[minmax(0,1fr)_410px]">


          <div className="min-w-0 space-y-6 sm:space-y-7">

            {/* Doctor Introduction */}
            <div className="grid grid-cols-1 items-center gap-7 md:grid-cols-[minmax(280px,0.78fr)_minmax(0,1fr)] md:gap-8 xl:grid-cols-[420px_minmax(0,1fr)] xl:gap-9">

              {/* Doctor Image */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: reduceMotion ? 0 : -45,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative w-full overflow-hidden rounded-2xl bg-[#f8e8ed]"
              >
                <div className="relative aspect-[1.05/1] w-full overflow-hidden">
                  <Image
                    src={profile.image}
                    alt={profile.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 420px"
                    className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/50" />
              </motion.div>

              {/* Doctor Information */}
              <motion.div
                {...reveal}
                className="flex min-w-0 flex-col"
              >
                {/* Designation */}
                <span className="mb-4 inline-flex w-fit items-center rounded-full bg-[#fdeaf1] px-5 py-2.5 text-sm font-semibold text-[#e43d85] sm:text-base">
                  {profile.role}
                </span>

                {/* Name */}
                <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-[#32134f] sm:text-5xl xl:text-[54px]">
                  {profile.name}
                </h1>

                <p className="mt-2 text-base font-medium text-[#77758a] sm:text-lg">
                  {profile.credentials}
                </p>

                {/* Decorative line */}
                <div className="my-5 h-[3px] w-14 rounded-full bg-[#ee3e89]" />

                {/* Description */}
                <p className="text-[15px] leading-[1.8] text-[#77758a] sm:text-base">
                  {profile.introduction}
                </p>

                {/* Contact Information */}
                <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-3">
                  {profile.contactDetails.map((item, index) => {
                    const Icon = profileIcons[item.icon];

                    return (
                      <motion.a
                        key={item.title}
                        href={item.href}
                        target={
                          item.icon === "map-pin"
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          item.icon === "map-pin"
                            ? "noreferrer"
                            : undefined
                        }
                        initial={{
                          opacity: 0,
                          y: reduceMotion ? 0 : 15,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.5,
                          delay: reduceMotion ? 0 : index * 0.1,
                        }}
                        className="group flex items-center gap-3 sm:items-start sm:gap-2 lg:gap-3"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fdeaf1] text-[#ec408a] transition-all duration-300 group-hover:bg-[#ec408a] group-hover:text-white">
                          <Icon size={21} strokeWidth={2.2} />
                        </span>

                        <span className="min-w-0 pt-1">
                          <span className="block text-sm font-bold text-[#32134f]">
                            {item.title}
                          </span>
                          <span className="mt-1 block break-words text-xs leading-relaxed text-[#858295] sm:text-[11px] xl:text-xs">
                            {item.value}
                          </span>
                        </span>
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* =================================
                ABOUT DOCTOR
            ================================== */}
            <motion.div
              {...reveal}
              className="rounded-2xl border border-white bg-white p-6 shadow-[0_8px_35px_rgba(60,30,70,0.035)] sm:p-8"
            >
              <SectionHeading>{profile.aboutHeading}</SectionHeading>

              <p className="mt-5 text-[15px] leading-[1.85] text-[#77758a] sm:text-base">
                {profile.aboutText}
              </p>
            </motion.div>

            {/* =================================
                EDUCATION
            ================================== */}
            <motion.div
              {...reveal}
              className="rounded-2xl border border-white bg-white p-6 shadow-[0_8px_35px_rgba(60,30,70,0.035)] sm:p-8"
            >
              <SectionHeading>{profile.educationHeading}</SectionHeading>

              <div className="mt-6 divide-y divide-[#f8dce8] rounded-2xl bg-[#fff5f9] px-4 sm:px-5">
                {profile.education.map((item, index) => (
                  <motion.div
                    key={item.degree}
                    initial={{
                      opacity: 0,
                      x: reduceMotion ? 0 : -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.5,
                      delay: reduceMotion ? 0 : index * 0.12,
                    }}
                    className="flex items-center gap-4 py-5 sm:gap-6"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#fde3ef] text-[#ed3f8b] sm:h-16 sm:w-16">
                      <GraduationCap size={30} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-bold text-[#32134f] sm:text-lg">
                        {item.degree}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#858295] sm:text-base">
                        {item.institute}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

          <aside className="min-w-0 lg:sticky lg:top-6 lg:h-fit lg:self-start">

            <div className="space-y-6">

              {/* Appointment Form */}
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
                  duration: reduceMotion ? 0 : 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-2xl border border-[#fbe4ef] bg-gradient-to-br from-[#fff0f6] to-[#fdeaf2] p-6 shadow-[0_10px_40px_rgba(226,70,135,0.06)] sm:p-7"
              >
                <h2 className="text-2xl font-extrabold tracking-tight text-[#32134f] sm:text-[27px]">
                  {profile.appointmentHeading}
                </h2>

                <div className="mt-4 h-[3px] w-14 rounded-full bg-[#ee3e89]" />

                {/* Appointment Form */}
                <form
                  action="/api/appointments"
                  method="POST"
                  className="mt-6 space-y-3.5"
                >
                  {/* Name */}
                  <div className="relative">
                    <User
                      size={21}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ed3f8b]"
                    />
                    <input
                      type="text"
                      name="name"
                      placeholder={profile.form.namePlaceholder}
                      aria-label={profile.form.namePlaceholder}
                      autoComplete="name"
                      required
                      className="h-[54px] w-full rounded-xl border border-white bg-white px-4 pl-12 text-sm text-[#32134f] outline-none transition-all placeholder:text-[#9995a5] focus:border-[#ed3f8b] focus:ring-4 focus:ring-[#ed3f8b]/10"
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <Phone
                      size={21}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ed3f8b]"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder={profile.form.phonePlaceholder}
                      aria-label={profile.form.phonePlaceholder}
                      autoComplete="tel"
                      required
                      className="h-[54px] w-full rounded-xl border border-white bg-white px-4 pl-12 text-sm text-[#32134f] outline-none transition-all placeholder:text-[#9995a5] focus:border-[#ed3f8b] focus:ring-4 focus:ring-[#ed3f8b]/10"
                    />
                  </div>

                  {/* Date */}
                  <div className="relative">
                    <CalendarDays
                      size={21}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#ed3f8b]"
                    />
                    <input
                      type="date"
                      name="date"
                      aria-label={profile.form.dateLabel}
                      required
                      className="h-[54px] w-full rounded-xl border border-white bg-white px-4 pl-12 text-sm text-[#77758a] outline-none transition-all focus:border-[#ed3f8b] focus:ring-4 focus:ring-[#ed3f8b]/10"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group mt-2 flex min-h-[57px] w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#ee4089] to-[#d92f79] px-5 py-4 text-sm font-bold text-white shadow-lg shadow-[#e83d87]/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#e83d87]/30 active:translate-y-0 sm:text-base"
                  >
                    {profile.form.submitLabel}

                    <ArrowRight
                      size={20}
                      className="transition-transform duration-300 group-hover:translate-x-2"
                    />
                  </button>
                </form>
              </motion.div>

              {/* Specialization */}
              <motion.div
                {...reveal}
                className="rounded-2xl border border-white bg-white p-6 shadow-[0_8px_35px_rgba(60,30,70,0.045)] sm:p-7"
              >
                <SectionHeading>
                  {profile.specializationsHeading}
                </SectionHeading>

                <div className="mt-6 space-y-4">
                  {profile.specializations.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{
                        opacity: 0,
                        x: reduceMotion ? 0 : 12,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.4,
                        delay: reduceMotion ? 0 : index * 0.06,
                      }}
                      className="group flex items-center gap-3"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#fde6f0] text-[#ec408a] transition-all duration-300 group-hover:bg-[#ec408a] group-hover:text-white">
                        <Check size={16} strokeWidth={3} />
                      </span>

                      <span className="text-sm leading-relaxed text-[#77758a] transition-colors group-hover:text-[#32134f] sm:text-[15px]">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            </div>
          </aside>

        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl font-extrabold tracking-tight text-[#32134f] sm:text-2xl">
        {children}
      </h2>

      <div className="mt-3 h-[3px] w-14 rounded-full bg-[#ee3e89]" />
    </div>
  );
}
