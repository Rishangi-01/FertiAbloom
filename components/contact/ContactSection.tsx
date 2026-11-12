
"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  UserRound,
  Mail,
  FileText,
  Phone,
  MessageSquare,
  ArrowRight,
  MapPin,
  Heart,
  type LucideIcon,
} from "lucide-react";
import { contactPageData, footerSectionData } from "@/data";

const contactIcons: Record<string, LucideIcon> = {
  phone: Phone,
  mail: Mail,
  "map-pin": MapPin,
};

const contactCardStyles = [
  "bg-[#c86b87] shadow-[#c86b87]/20",
  "bg-[#a5c5b4] shadow-[#a5c5b4]/20",
  "bg-[#c86b87] shadow-[#c86b87]/20",
];

export default function ContactSection() {
  const reduceMotion = useReducedMotion();
  const content = contactPageData;
  const formContent = content.form;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      // Connect your contact API endpoint here.
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(formContent.requestError);
      }

      alert(formContent.successTitle);

      setFormData({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert(
        formContent.errorText
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    });
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
      y: reduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative isolate w-full overflow-hidden bg-[#fffaf9] py-16 sm:py-20 lg:py-24"
    >
      {/* ================= BACKGROUND DECORATIONS ================= */}

      <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#fbe4eb]/60 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#e7f2eb]/70 blur-[110px]" />

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-[#fff0f3] blur-[100px]" />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">

        {/* ================= SECTION HEADING ================= */}

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
          transition={{ duration: 0.8 }}
          className="mx-auto mb-10 max-w-5xl text-center sm:mb-14 lg:mb-16"
        >
          {/* Eyebrow */}

          <div className="mb-4 inline-flex items-center gap-4">

            <span className="h-[2px] w-10 rounded-full bg-[#c86b87] sm:w-14" />

            <span className="text-xs font-extrabold tracking-[0.16em] text-[#bd5b79] sm:text-sm">
              {content.eyebrow}
            </span>

            <span className="h-[2px] w-10 rounded-full bg-[#c86b87] sm:w-14" />

          </div>

          {/* Heading */}

          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#30303d] sm:text-4xl md:text-5xl lg:text-[54px]">

            {content.title[0]}{" "}

            <span className="bg-gradient-to-r from-[#bb617b] via-[#ce758e] to-[#a94f6e] bg-clip-text text-transparent">
              {content.title[1]} {content.highlight}
            </span>

          </h2>

          {/* Description */}

          <p className="mx-auto mt-4 max-w-4xl text-sm leading-relaxed text-[#858493] sm:text-base md:text-lg">

            {content.text}

          </p>

        </motion.div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="grid grid-cols-1 items-center gap-9 lg:grid-cols-[1.12fr_1fr] lg:gap-12 xl:gap-14">

          {/* ====================================== */}
          {/* LEFT SIDE - CONTACT FORM */}
          {/* ====================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: reduceMotion ? 0 : -45,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[22px] border border-white bg-white/90 p-5 shadow-[0_15px_60px_rgba(91,50,70,0.07)] backdrop-blur-xl sm:rounded-[26px] sm:p-8 md:p-9 lg:p-10"
          >

            {/* Decorative Circle */}

            <div className="pointer-events-none absolute right-7 top-7 h-20 w-20 rounded-full bg-[#fcebf1]/70 blur-2xl" />

            {/* FORM HEADING */}

            <div className="relative mb-7">

              <h3 className="text-2xl font-extrabold tracking-tight text-[#30303d] sm:text-3xl md:text-[36px]">

                {content.formTitle}{" "}

                <span className="bg-gradient-to-r from-[#bd647e] to-[#d47d96] bg-clip-text text-transparent">
                  {content.formHighlight}
                </span>

              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[#858493] sm:text-base">

                {content.formText}

              </p>

            </div>

            {/* CONTACT FORM */}

            <form
              onSubmit={handleSubmit}
              className="relative space-y-5"
            >

              {/* INPUT GRID */}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                {/* NAME */}

                <div className="group relative">

                  <label
                    htmlFor="contact-name"
                    className="sr-only"
                  >
                    {formContent.fields.firstName.label}
                  </label>

                  <UserRound
                    size={21}
                    className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#9694a0] transition-colors duration-300 group-focus-within:text-[#c56a85]"
                  />

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={formContent.fields.firstName.placeholder}
                    required
                    autoComplete="name"
                    className="h-[60px] w-full rounded-xl border border-transparent bg-[#f6f6f9] pl-12 pr-4 text-sm text-[#30303d] outline-none transition-all duration-300 placeholder:text-[#9997a5] hover:bg-[#f3f2f7] focus:border-[#d995aa] focus:bg-white focus:shadow-[0_0_0_4px_rgba(197,106,133,0.09)] sm:h-[64px]"
                  />

                </div>

                {/* EMAIL */}

                <div className="group relative">

                  <label
                    htmlFor="contact-email"
                    className="sr-only"
                  >
                    {formContent.fields.email.label}
                  </label>

                  <Mail
                    size={21}
                    className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#9694a0] transition-colors duration-300 group-focus-within:text-[#c56a85]"
                  />

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={formContent.fields.email.placeholder}
                    required
                    autoComplete="email"
                    className="h-[60px] w-full rounded-xl border border-transparent bg-[#f6f6f9] pl-12 pr-4 text-sm text-[#30303d] outline-none transition-all duration-300 placeholder:text-[#9997a5] hover:bg-[#f3f2f7] focus:border-[#d995aa] focus:bg-white focus:shadow-[0_0_0_4px_rgba(197,106,133,0.09)] sm:h-[64px]"
                  />

                </div>

                {/* SUBJECT */}

                <div className="group relative">

                  <label
                    htmlFor="contact-subject"
                    className="sr-only"
                  >
                    {formContent.fields.lastName.label}
                  </label>

                  <FileText
                    size={21}
                    className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#9694a0] transition-colors duration-300 group-focus-within:text-[#c56a85]"
                  />

                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={formContent.fields.lastName.placeholder}
                    required
                    className="h-[60px] w-full rounded-xl border border-transparent bg-[#f6f6f9] pl-12 pr-4 text-sm text-[#30303d] outline-none transition-all duration-300 placeholder:text-[#9997a5] hover:bg-[#f3f2f7] focus:border-[#d995aa] focus:bg-white focus:shadow-[0_0_0_4px_rgba(197,106,133,0.09)] sm:h-[64px]"
                  />

                </div>

                {/* PHONE */}

                <div className="group relative">

                  <label
                    htmlFor="contact-phone"
                    className="sr-only"
                  >
                    {formContent.fields.phone.label}
                  </label>

                  <Phone
                    size={21}
                    className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#9694a0] transition-colors duration-300 group-focus-within:text-[#c56a85]"
                  />

                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={formContent.fields.phone.placeholder}
                    autoComplete="tel"
                    required
                    className="h-[60px] w-full rounded-xl border border-transparent bg-[#f6f6f9] pl-12 pr-4 text-sm text-[#30303d] outline-none transition-all duration-300 placeholder:text-[#9997a5] hover:bg-[#f3f2f7] focus:border-[#d995aa] focus:bg-white focus:shadow-[0_0_0_4px_rgba(197,106,133,0.09)] sm:h-[64px]"
                  />

                </div>

              </div>

              {/* MESSAGE */}

              <div className="group relative">

                <label
                  htmlFor="contact-message"
                  className="sr-only"
                >
                  {formContent.fields.message.label}
                </label>

                <MessageSquare
                  size={21}
                  className="absolute left-4 top-5 text-[#9694a0] transition-colors duration-300 group-focus-within:text-[#c56a85]"
                />

                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={formContent.fields.message.placeholder}
                  rows={6}
                  required
                  className="min-h-[145px] w-full resize-y rounded-xl border border-transparent bg-[#f6f6f9] py-5 pl-12 pr-4 text-sm text-[#30303d] outline-none transition-all duration-300 placeholder:text-[#9997a5] hover:bg-[#f3f2f7] focus:border-[#d995aa] focus:bg-white focus:shadow-[0_0_0_4px_rgba(197,106,133,0.09)] sm:min-h-[160px]"
                />

              </div>

              {/* BUTTONS */}

              <div className="flex flex-wrap items-center gap-3 pt-1 sm:gap-4">

                {/* SEND BUTTON */}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -3, scale: 1.02 }
                  }
                  whileTap={
                    reduceMotion
                      ? undefined
                      : { scale: 0.97 }
                  }
                  className="group relative inline-flex min-h-[58px] min-w-[190px] items-center justify-center gap-4 overflow-hidden rounded-full bg-gradient-to-r from-[#c76b87] to-[#b94f73] px-8 py-4 text-sm font-bold text-white shadow-[0_9px_24px_rgba(190,88,119,0.22)] transition-shadow duration-300 hover:shadow-[0_14px_30px_rgba(190,88,119,0.32)] disabled:cursor-not-allowed disabled:opacity-60 sm:min-w-[220px] sm:text-base"
                >

                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#a94366] to-[#d17b96] transition-transform duration-500 group-hover:translate-x-0" />

                  <span className="relative z-10">
                    {isSubmitting ? formContent.sendingLabel : formContent.submitLabel}
                  </span>

                  <ArrowRight
                    size={20}
                    className="relative z-10 transition-transform duration-300 group-hover:translate-x-2"
                  />

                </motion.button>

                {/* RESET BUTTON */}

                <motion.button
                  type="button"
                  onClick={handleReset}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -3 }
                  }
                  whileTap={
                    reduceMotion
                      ? undefined
                      : { scale: 0.97 }
                  }
                  className="inline-flex min-h-[58px] min-w-[135px] items-center justify-center rounded-full border-2 border-[#b7d0c1] bg-white px-8 py-3.5 text-sm font-semibold text-[#666572] transition-all duration-300 hover:border-[#b7cdbd] hover:bg-[#edf5ef] hover:text-[#6c9b7e] sm:text-base"
                >

                  {formContent.resetLabel}

                </motion.button>

              </div>

            </form>

          </motion.div>

          {/* ====================================== */}
          {/* RIGHT SIDE - CONTACT INFORMATION */}
          {/* ====================================== */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col justify-center"
          >

            {/* RIGHT TOP CONTENT */}

            <motion.div variants={itemVariants} className="mb-7">

              <h3 className="text-3xl font-extrabold leading-tight tracking-tight text-[#30303d] sm:text-4xl md:text-[42px]">

                {content.detailsTitle[0]}{" "}

                <span className="block bg-gradient-to-r from-[#bd647e] to-[#d17b96] bg-clip-text text-transparent">
                  {content.detailsTitle[1]}
                </span>

              </h3>

              <p className="mt-5 max-w-[470px] text-sm leading-[1.85] text-[#858493] sm:text-base">

                {content.detailsText}

              </p>

            </motion.div>

            {/* CONTACT DETAILS + IMAGE */}

            <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-[0.95fr_1.05fr] lg:grid-cols-1 xl:grid-cols-[0.95fr_1.05fr] xl:gap-5">

              {/* CONTACT DETAILS */}

              <div className="order-2 space-y-5 sm:order-1 sm:space-y-6 xl:space-y-7">

                {footerSectionData.contactDetails.map((item, index) => {
                  const Icon = contactIcons[item.icon];

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
                          ? "noopener noreferrer"
                          : undefined
                      }
                      variants={itemVariants}
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              x: 7,
                              transition: { duration: 0.25 },
                            }
                      }
                      className="group flex items-center gap-4"
                    >

                      {/* ICON */}

                      <div
                        className={`flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 group-hover:scale-110                         ${contactCardStyles[index % contactCardStyles.length]} sm:h-[66px] sm:w-[66px]`}
                      >

                        <Icon size={27} strokeWidth={2.3} />

                      </div>

                      {/* DETAILS */}

                      <div className="min-w-0">

                        <h4 className="text-sm font-bold text-[#30303d] transition-colors duration-300 group-hover:text-[#c56a85] sm:text-base">

                          {item.title}

                        </h4>

                        <p className="mt-1 whitespace-pre-line break-words text-sm leading-relaxed text-[#686777] sm:text-base">

                          {item.value}

                        </p>

                      </div>

                    </motion.a>

                  );

                })}

              </div>

              {/* DOCTOR IMAGE */}

              <motion.div
                variants={itemVariants}
                className="group relative order-1 mx-auto w-full max-w-[420px] sm:order-2 xl:order-2"
              >

                {/* GREEN BACKGROUND */}

                <div className="absolute -right-3 -top-3 h-[92%] w-[72%] rounded-[22px] bg-[#b6d2c2] transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 sm:-right-4 sm:-top-4 sm:rounded-[25px]" />

                <div className="absolute -bottom-3 left-4 h-[90%] w-[75%] rounded-[22px] bg-[#f4dce5] transition-transform duration-500 group-hover:-translate-x-1 group-hover:translate-y-1 sm:-bottom-4 sm:rounded-[25px]" />

                {/* IMAGE */}

                <div className="relative aspect-[0.88/1] w-full overflow-hidden rounded-[20px] border-[4px] border-white bg-[#f8e7ee] shadow-[0_15px_40px_rgba(74,50,64,0.12)] sm:rounded-[25px]">

                  <Image
                    src={content.sectionImage}
                    alt={content.sectionImageAlt}
                    fill
                    priority
                    sizes="(max-width: 640px) 90vw, (max-width: 1280px) 40vw, 25vw"
                    className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  />

                  {/* IMAGE OVERLAY */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#6d3e55]/15 via-transparent to-transparent" />

                </div>

                {/* DECORATIVE HEART */}

                <motion.div
                  animate={
                    reduceMotion
                      ? undefined
                      : {
                          y: [0, -8, 0],
                          rotate: [0, 8, 0],
                        }
                  }
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-2 top-2 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg sm:-right-5 sm:-top-5 sm:h-14 sm:w-14"
                >

                  <Heart
                    size={26}
                    className="fill-[#f5dce5] text-[#c76b87]"
                  />

                </motion.div>

              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}
