
"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  UserRound,
  Mail,
  Phone,
  CalendarDays,
  Clock3,
  Heart,
  MessageSquare,
  ArrowRight,
  Stethoscope,
  ChevronDown,
  UsersRound,
} from "lucide-react";
import { appointmentPageData, enquiryNowData } from "@/data";

type AppointmentForm = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  message: string;
};

const initialForm: AppointmentForm = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  service: "",
  message: "",
};

const featureIcons = [UsersRound, Clock3, Heart];
const featureStyles = [
  "bg-[#c76b83] shadow-[#c76b83]/20",
  "bg-[#a9c6b2] shadow-[#a9c6b2]/20",
  "bg-[#c76b83] shadow-[#c76b83]/20",
];

export default function BookAppointmentSection() {
  const reduceMotion = useReducedMotion();
  const content = appointmentPageData;
  const formContent = enquiryNowData.section.form;
  const features = content.points;
  const times = formContent.fields.time.options;
  const services = formContent.fields.interest.options;

  const [formData, setFormData] =
    useState<AppointmentForm>(initialForm);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFormData(initialForm);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      // Connect your appointment API here.
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(formContent.status.requestError);
      }

      alert(
        formContent.status.success
      );

      setFormData(initialForm);
    } catch (error) {
      console.error("Appointment Error:", error);

      alert(
        formContent.status.error
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.65,
        ease: "easeOut" as const,
      },
    },
  };

  const inputClass =
    "h-[58px] sm:h-[60px] w-full rounded-xl border border-[#e9e9ef] bg-[#f7f7fa] pl-12 pr-4 text-sm font-medium text-[#383746] outline-none transition-all duration-300 placeholder:text-[#9695a2] hover:border-[#e5c5d0] hover:bg-white focus:border-[#c87990] focus:bg-white focus:shadow-[0_0_0_4px_rgba(199,107,131,0.09)]";

  const iconClass =
    "absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#858593] transition-colors duration-300 group-focus-within:text-[#c76b83]";

  return (
    <section
      id="appointment"
      className="relative isolate w-full overflow-hidden bg-[#fffaf8] py-16 sm:py-20 lg:py-24"
    >
      {/* ================= BACKGROUND DECORATIONS ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#fce8ee]/60 blur-[110px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#e8f2eb]/70 blur-[110px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fff0f3]/60 blur-[100px]" />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 mx-auto max-w-[1700px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.08fr_1fr] lg:gap-12 xl:gap-16">

          {/* ================================================= */}
          {/* LEFT SIDE - APPOINTMENT FORM */}
          {/* ================================================= */}

          <div className="w-full">

            {/* SECTION HEADING */}

            <motion.div
              initial={{
                opacity: 0,
                x: reduceMotion ? 0 : -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
              }}
              className="mb-7 sm:mb-8"
            >

              {/* EYEBROW */}

              <div className="mb-4 flex items-center gap-3">

                <span className="h-[2px] w-9 rounded-full bg-[#c76b83] sm:w-10" />

                <span className="text-xs font-extrabold tracking-[0.12em] text-[#bd607b] sm:text-sm">
                  {content.eyebrow}
                </span>

                <span className="h-[2px] w-9 rounded-full bg-[#c76b83] sm:w-10" />

              </div>

              {/* HEADING */}

              <h2 className="max-w-[720px] text-3xl font-extrabold leading-[1.2] tracking-[-0.035em] text-[#30303d] sm:text-4xl md:text-5xl xl:text-[52px]">

                {content.title[0]}

                <br />

                {content.title[1]}{" "}

                <span className="bg-gradient-to-r from-[#bc617b] via-[#ce7a91] to-[#b65372] bg-clip-text text-transparent">
                  {content.highlight}
                </span>

              </h2>

              {/* DESCRIPTION */}

              <p className="mt-4 max-w-[700px] text-sm leading-[1.8] text-[#858493] sm:text-base md:text-lg">

                {content.text}

              </p>

            </motion.div>

            {/* ================= FORM CARD ================= */}

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
                amount: 0.12,
              }}
              transition={{
                duration: 0.8,
                delay: reduceMotion ? 0 : 0.1,
              }}
              className="relative overflow-hidden rounded-[22px] border border-white bg-white/90 p-5 shadow-[0_15px_55px_rgba(80,48,65,0.065)] backdrop-blur-xl sm:rounded-[25px] sm:p-7 md:p-8"
            >

              {/* Decorative Background */}

              <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#fceaf0]/60 blur-3xl" />

              <form
                onSubmit={handleSubmit}
                className="relative z-10"
              >

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.1,
                  }}
                  className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                >

                  {/* NAME */}

                  <motion.div
                    variants={itemVariants}
                    className="group relative"
                  >

                    <label
                      htmlFor="appointment-name"
                      className="sr-only"
                    >
                      {formContent.fields.fullName.label}
                    </label>

                    <UserRound
                      size={21}
                      className={iconClass}
                    />

                    <input
                      id="appointment-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={formContent.fields.fullName.placeholder}
                      autoComplete="name"
                      required
                      className={inputClass}
                    />

                  </motion.div>

                  {/* EMAIL */}

                  <motion.div
                    variants={itemVariants}
                    className="group relative"
                  >

                    <label
                      htmlFor="appointment-email"
                      className="sr-only"
                    >
                      {formContent.fields.email.label}
                    </label>

                    <Mail
                      size={21}
                      className={iconClass}
                    />

                    <input
                      id="appointment-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={formContent.fields.email.placeholder}
                      autoComplete="email"
                      required
                      className={inputClass}
                    />

                  </motion.div>

                  {/* PHONE */}

                  <motion.div
                    variants={itemVariants}
                    className="group relative"
                  >

                    <label
                      htmlFor="appointment-phone"
                      className="sr-only"
                    >
                      {formContent.fields.phone.label}
                    </label>

                    <Phone
                      size={21}
                      className={iconClass}
                    />

                    <input
                      id="appointment-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={formContent.fields.phone.placeholder}
                      autoComplete="tel"
                      required
                      className={inputClass}
                    />

                  </motion.div>

                  {/* DATE */}

                  <motion.div
                    variants={itemVariants}
                    className="group relative"
                  >

                    <label
                      htmlFor="appointment-date"
                      className="sr-only"
                    >
                      {formContent.fields.date.label}
                    </label>

                    <CalendarDays
                      size={21}
                      className={iconClass}
                    />

                    <input
                      id="appointment-date"
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className={`${inputClass} [color-scheme:light]`}
                    />

                  </motion.div>

                  {/* TIME */}

                  <motion.div
                    variants={itemVariants}
                    className="group relative"
                  >

                    <label
                      htmlFor="appointment-time"
                      className="sr-only"
                    >
                      {formContent.fields.time.label}
                    </label>

                    <Clock3
                      size={21}
                      className={iconClass}
                    />

                    <select
                      id="appointment-time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className={`${inputClass} appearance-none pr-10 ${
                        formData.time
                          ? "text-[#383746]"
                          : "text-[#9695a2]"
                      }`}
                    >

                      <option value="" disabled>
                        {formContent.fields.time.placeholder}
                      </option>

                      {times.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}

                    </select>

                    <ChevronDown
                      size={18}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#858593]"
                    />

                  </motion.div>

                  {/* SERVICE */}

                  <motion.div
                    variants={itemVariants}
                    className="group relative"
                  >

                    <label
                      htmlFor="appointment-service"
                      className="sr-only"
                    >
                      {formContent.fields.interest.label}
                    </label>

                    <Stethoscope
                      size={21}
                      className={iconClass}
                    />

                    <select
                      id="appointment-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className={`${inputClass} appearance-none pr-10 ${
                        formData.service
                          ? "text-[#383746]"
                          : "text-[#9695a2]"
                      }`}
                    >

                      <option value="" disabled>
                        {formContent.fields.interest.placeholder}
                      </option>

                      {services.map((service) => (
                        <option
                          key={service}
                          value={service}
                        >
                          {service}
                        </option>
                      ))}

                    </select>

                    <ChevronDown
                      size={18}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#858593]"
                    />

                  </motion.div>

                  {/* MESSAGE */}

                  <motion.div
                    variants={itemVariants}
                    className="group relative sm:col-span-2"
                  >

                    <label
                      htmlFor="appointment-message"
                      className="sr-only"
                    >
                      {formContent.fields.message.label}
                    </label>

                    <MessageSquare
                      size={21}
                      className="absolute left-4 top-5 text-[#858593] transition-colors duration-300 group-focus-within:text-[#c76b83]"
                    />

                    <textarea
                      id="appointment-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={formContent.fields.message.placeholder}
                      rows={4}
                      className="min-h-[110px] w-full resize-y rounded-xl border border-[#e9e9ef] bg-[#f7f7fa] py-5 pl-12 pr-4 text-sm font-medium text-[#383746] outline-none transition-all duration-300 placeholder:text-[#9695a2] hover:border-[#e5c5d0] hover:bg-white focus:border-[#c87990] focus:bg-white focus:shadow-[0_0_0_4px_rgba(199,107,131,0.09)] sm:min-h-[112px]"
                    />

                  </motion.div>

                </motion.div>

                {/* ================= BUTTONS ================= */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: reduceMotion ? 0 : 0.2,
                  }}
                  className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4"
                >

                  {/* BOOK APPOINTMENT */}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -3,
                            scale: 1.02,
                          }
                    }
                    whileTap={
                      reduceMotion
                        ? undefined
                        : {
                            scale: 0.97,
                          }
                    }
                    className="group relative inline-flex min-h-[58px] min-w-[190px] items-center justify-center gap-4 overflow-hidden rounded-full bg-gradient-to-r from-[#c76b83] to-[#b95573] px-7 py-4 text-sm font-bold text-white shadow-[0_10px_25px_rgba(190,88,119,0.22)] transition-shadow duration-300 hover:shadow-[0_15px_35px_rgba(190,88,119,0.32)] disabled:cursor-not-allowed disabled:opacity-60 sm:min-w-[225px] sm:text-base"
                  >

                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#a94366] to-[#d17b96] transition-transform duration-500 group-hover:translate-x-0" />

                    <span className="relative z-10">
                      {isSubmitting
                        ? formContent.submit.submitting
                        : formContent.submit.label}
                    </span>

                    <ArrowRight
                      size={20}
                      className="relative z-10 transition-transform duration-300 group-hover:translate-x-2"
                    />

                  </motion.button>

                  {/* RESET */}

                  <motion.button
                    type="button"
                    onClick={handleReset}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -3,
                          }
                    }
                    whileTap={
                      reduceMotion
                        ? undefined
                        : {
                            scale: 0.97,
                          }
                    }
                    className="inline-flex min-h-[58px] min-w-[125px] items-center justify-center rounded-full border-2 border-[#b7cfbd] bg-white px-8 py-3.5 text-sm font-semibold text-[#777683] transition-all duration-300 hover:border-[#a9c6b2] hover:bg-[#edf5ef] hover:text-[#709b7d] sm:text-base"
                  >

                    {formContent.appointment.resetLabel}

                  </motion.button>

                </motion.div>

              </form>

            </motion.div>

          </div>

          {/* ================================================= */}
          {/* RIGHT SIDE - IMAGE AND FEATURES */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : 45,
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
            }}
            className="relative w-full"
          >

            {/* ================= IMAGE ================= */}

            <div className="group relative mx-auto w-full max-w-[800px]">

              {/* GREEN BACKGROUND */}

              <div className="absolute -right-3 top-5 h-[91%] w-[76%] rounded-[35px] bg-[#b5cfbb] transition-transform duration-700 group-hover:translate-x-1 group-hover:-translate-y-1 sm:-right-5 sm:rounded-[45px] lg:-right-6" />

              <div className="absolute -left-3 bottom-2 h-[88%] w-[75%] rounded-[35px] bg-[#f7e7ec] transition-transform duration-700 group-hover:-translate-x-1 group-hover:translate-y-1 sm:-left-5 sm:rounded-[45px]" />

              {/* DOCTOR IMAGE */}

              <div className="relative aspect-[1.32/1] w-full overflow-hidden rounded-[28px] border-[4px] border-white bg-[#f6e8ec] shadow-[0_18px_50px_rgba(70,48,60,0.12)] sm:rounded-[40px]">

                <Image
                  src={enquiryNowData.section.image.src}
                  alt={enquiryNowData.section.image.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#4d3443]/10 via-transparent to-transparent" />

              </div>

              {/* FLOATING CALENDAR ICON */}

              <motion.div
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        y: [0, -9, 0],
                        rotate: [0, 4, 0],
                      }
                }
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-1 -top-4 z-20 flex h-[75px] w-[75px] items-center justify-center rounded-full bg-gradient-to-br from-[#d17b90] to-[#b95673] text-white shadow-[0_12px_30px_rgba(190,88,119,0.25)] sm:-left-4 sm:-top-5 sm:h-[90px] sm:w-[90px] lg:-left-5 lg:h-[100px] lg:w-[100px]"
              >

                <CalendarDays
                  size={38}
                  strokeWidth={1.8}
                  className="sm:h-11 sm:w-11"
                />

              </motion.div>

            </div>

            {/* ================= FEATURE CARDS ================= */}

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="mt-8 grid grid-cols-1 gap-3 rounded-[24px] border border-white/80 bg-gradient-to-br from-[#fff5f6] to-[#fff1f3] p-4 shadow-[0_10px_35px_rgba(110,60,80,0.04)] sm:grid-cols-3 sm:gap-2 sm:p-5 lg:mt-8 lg:p-5 xl:gap-4 xl:p-6"
            >

              {features.map((feature, index) => {
                const Icon = featureIcons[index % featureIcons.length];

                return (

                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -6,
                            transition: {
                              duration: 0.25,
                            },
                          }
                    }
                    className="group flex flex-row items-center gap-4 rounded-2xl p-3 text-left transition-colors duration-300 hover:bg-white/70 sm:flex-col sm:gap-3 sm:text-center"
                  >

                    {/* ICON */}

                    <div
                      className={`flex h-[55px] w-[55px] shrink-0 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300 group-hover:scale-110 sm:h-[65px] sm:w-[65px] ${featureStyles[index % featureStyles.length]}`}
                    >

                      <Icon
                        size={29}
                        strokeWidth={1.8}
                      />

                    </div>

                    {/* CONTENT */}

                    <div>

                      <h3 className="text-sm font-extrabold text-[#30303d] sm:text-base">
                        {feature.title}
                      </h3>

                      <p className="mt-1 text-xs leading-[1.7] text-[#858493] sm:text-sm">
                        {feature.text.join(" ")}
                      </p>

                    </div>

                  </motion.div>

                );

              })}

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
