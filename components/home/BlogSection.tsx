
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    day: "06",
    month: "Aug",
    category: "Pregnancy Care",
    title: "IVF Demystified: From Consultation to Pregnancy",
    description:
      "Understand the complete IVF journey, from your first consultation to achieving a successful pregnancy, with expert guidance.",
    image: "/images/home/blog1.png",
    slug: "/blog/ivf-demystified",
  },
  {
    id: 2,
    day: "05",
    month: "Aug",
    category: "Fertility Tips",
    title: "IVF Made Simple: Guide to Fertility Success",
    description:
      "Explore how IVF works, who it can help, and key tips to improve your chances of success, all in simple terms.",
    image: "/images/home/blog2.png",
    slug: "/blog/ivf-made-simple",
  },
  {
    id: 3,
    day: "04",
    month: "Aug",
    category: "IVF Treatment",
    title: "In Vitro Fertilization: A Comprehensive Introduction",
    description:
      "Learn the basics of IVF, including the process, benefits, success rates, and what to expect during treatment.",
    image: "/images/home/blog3.png",
    slug: "/blog/in-vitro-fertilization",
  },
];

export default function BlogSection() {
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.16,
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
        duration: 0.75,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#fffafa] px-4 py-12 sm:px-6 sm:py-12 lg:px-10 lg:py-12">

      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#fde6ef]/70 blur-[90px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#fde8f1]/80 blur-[100px]" />

      <div className="pointer-events-none absolute left-1/2 top-20 h-40 w-40 -translate-x-1/2 rounded-full bg-[#fff0f5] blur-[65px]" />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 mx-auto max-w-[1650px]">

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
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mx-auto mb-10 max-w-4xl text-center sm:mb-12 lg:mb-14"
        >

          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#f9dce8] bg-[#fdeaf2] px-5 py-2.5 text-sm font-bold text-[#ec4088] shadow-sm sm:text-base">

            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#ec4088]" />

            Our Blog

          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#32164e] sm:text-4xl md:text-5xl lg:text-[56px]">

            Latest Insights &{" "}

            <span className="bg-gradient-to-r from-[#e83d85] to-[#f0529b] bg-clip-text text-transparent">
              Articles
            </span>

          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-[850px] text-sm leading-[1.8] text-[#858197] sm:text-base md:text-lg">

            Stay informed with expert advice, tips, and the latest
            updates on fertility, pregnancy, and women's health
            from our specialists.

          </p>

        </motion.div>

        {/* ================= BLOG CARDS ================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7 xl:gap-8"
        >

          {blogs.map((blog) => (

            <motion.article
              key={blog.id}
              variants={cardVariants}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -8,
                      transition: {
                        duration: 0.3,
                      },
                    }
              }
              className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-[#f6e8ee] bg-white/90 shadow-[0_8px_30px_rgba(89,45,75,0.055)] transition-shadow duration-500 hover:border-[#f2c8da] hover:shadow-[0_20px_50px_rgba(185,83,132,0.13)] sm:rounded-[23px]"
            >

              {/* IMAGE CONTAINER */}
              <Link
                href={blog.slug}
                aria-label={`Read ${blog.title}`}
                className="relative block aspect-[1.85/1] w-full overflow-hidden bg-[#f9eaf0]"
              >

                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#32164e]/20 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

                {/* DATE BADGE */}
                <div className="absolute left-4 top-4 flex min-w-[65px] flex-col items-center justify-center rounded-xl bg-gradient-to-br from-[#fa3987] to-[#e72e7e] px-3 py-2.5 text-center text-white shadow-[0_8px_20px_rgba(231,46,126,0.25)] transition-transform duration-500 group-hover:scale-105 sm:left-5 sm:top-5">

                  <span className="text-2xl font-bold leading-none">
                    {blog.day}
                  </span>

                  <span className="mt-1 text-sm font-medium leading-none">
                    {blog.month}
                  </span>

                </div>

              </Link>

              {/* BLOG CONTENT */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">

                {/* CATEGORY */}
                <div className="mb-4">

                  <span className="inline-flex rounded-full border border-[#f9dce8] bg-[#fdeaf2] px-4 py-1.5 text-xs font-bold text-[#e83d85] transition-all duration-300 group-hover:border-[#e83d85] group-hover:bg-[#e83d85] group-hover:text-white sm:text-sm">
                    {blog.category}
                  </span>

                </div>

                {/* TITLE */}
                <Link href={blog.slug}>
                  <h3 className="text-xl font-bold leading-[1.35] tracking-[-0.025em] text-[#32164e] transition-colors duration-300 group-hover:text-[#e83d85] sm:text-[22px] lg:text-[23px]">

                    {blog.title}

                  </h3>
                </Link>

                {/* DESCRIPTION */}
                <p className="mt-3 flex-1 text-sm leading-[1.75] text-[#858197] sm:text-base">

                  {blog.description}

                </p>

                {/* READ MORE */}
                <Link
                  href={blog.slug}
                  className="mt-5 inline-flex w-fit items-center gap-3 text-sm font-bold text-[#ec3882] transition-all duration-300 hover:gap-5 sm:text-base"
                >

                  <span>Read More</span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fdeaf2] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#ec3882] group-hover:text-white">

                    <ArrowUpRight size={20} strokeWidth={2.5} />

                  </span>

                </Link>

              </div>

            </motion.article>

          ))}

        </motion.div>

        {/* ================= VIEW ALL BUTTON ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: reduceMotion ? 0 : 0.2,
          }}
          className="mt-9 flex justify-center sm:mt-11"
        >

          <Link
            href="/blog"
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#f13c88] to-[#e52f7c] px-8 py-3.5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(232,53,126,0.22)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(232,53,126,0.35)] sm:px-12 sm:py-4 sm:text-base"
          >

            {/* Hover Background */}
            <span className="absolute inset-0 translate-x-[-110%] bg-gradient-to-r from-[#d92b75] to-[#f0529b] transition-transform duration-500 group-hover:translate-x-0" />

            <span className="relative z-10">
              View All Blogs
            </span>

            <ArrowRight
              size={20}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-2"
            />

          </Link>

        </motion.div>

      </div>
    </section>
  );
}
