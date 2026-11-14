"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { blogData, blogSectionData } from "@/data";

const blogs = blogData.posts.map((post, index) => {
  const [day, ...month] = post.date.split(" ");

  return {
    ...post,
    id: index + 1,
    day,
    month: month.join(" "),
    imageAlt: post.title,
    description: post.description,
  };
});

const ITEMS_PER_PAGE = 6;

export default function OurBlogSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const reduceMotion = useReducedMotion();

  const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentBlogs = blogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
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

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#fffafa] py-12 sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#fde6ef]/70 blur-[90px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#fde8f1]/80 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-10 md:px-12 lg:px-16 xl:px-20">
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
          className="mx-auto mb-10 max-w-4xl text-center sm:mb-12 lg:mb-14"
        >

          <div className="mb-4 flex items-center justify-center gap-4 sm:gap-5">
            <span className="h-[2px] w-12 bg-[#f45b91] sm:w-20" />

            <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-[#ed4385] sm:text-lg">
              {blogSectionData.eyebrow}
            </span>

            <span className="h-[2px] w-12 bg-[#f45b91] sm:w-20" />
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#32164e] sm:text-4xl md:text-5xl lg:text-[56px]">
            {blogSectionData.title}{" "}
            <span className="bg-gradient-to-r from-[#e83d85] to-[#f0529b] bg-clip-text text-transparent">
              {blogSectionData.highlight}
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-[850px] text-sm leading-[1.8] text-[#858197] sm:text-base md:text-lg">
            {blogSectionData.text}
          </p>
        </motion.div>

        {/* BLOG CARDS */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{
              opacity: 0,
              y: reduceMotion ? 0 : -15,
              transition: { duration: reduceMotion ? 0 : 0.2 },
            }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7 xl:gap-8"
          >
            {currentBlogs.map((blog) => (
              <motion.article
                key={blog.id}
                variants={cardVariants}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -8,
                        transition: { duration: 0.3 },
                      }
                }
                className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-[#f6e8ee] bg-white/90 shadow-[0_8px_30px_rgba(89,45,75,0.055)] transition-all duration-500 hover:border-[#f2c8da] hover:shadow-[0_20px_50px_rgba(185,83,132,0.13)] sm:rounded-[23px]"
              >
                {/* IMAGE */}
                <Link
                  href={blog.slug}
                  aria-label={blogData.readLabelTemplate.replace(
                    "{title}",
                    blog.title,
                  )}
                  className="relative block aspect-[1.85/1] w-full overflow-hidden bg-[#f9eaf0]"
                >
                  <Image
                    src={blog.image}
                    alt={blog.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  />

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

                {/* CONTENT */}
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
                    <span>{blogData.moreDetailsLabel}</span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fdeaf2] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#ec3882] group-hover:text-white">
                      <ArrowUpRight size={20} strokeWidth={2.5} />
                    </span>
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ================= PAGINATION ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-9 flex items-center justify-center gap-2.5 sm:mt-11 sm:gap-3"
        >
          {/* PREVIOUS BUTTON */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label={blogData.previousPageLabel}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fdeaf2] text-[#ec3882] transition-all duration-300 hover:bg-[#ec3882] hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-[#fdeaf2] disabled:hover:text-[#ec3882] sm:h-12 sm:w-12"
          >
            <ChevronLeft size={22} strokeWidth={2.5} />
          </button>

          {/* PAGE NUMBERS */}
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                aria-label={blogData.goToPageLabelTemplate.replace(
                  "{page}",
                  String(page),
                )}
                aria-current={currentPage === page ? "page" : undefined}
                className={`flex h-10 w-10 items-center justify-center rounded-lg border text-sm font-semibold transition-all duration-300 sm:h-12 sm:w-12 sm:text-base ${
                  currentPage === page
                    ? "scale-105 border-[#ed3481] bg-gradient-to-br from-[#fa3987] to-[#e72e7e] text-white shadow-[0_6px_15px_rgba(231,46,126,0.25)]"
                    : "border-[#f5dce7] bg-white/80 text-[#4b4055] hover:border-[#ed3481] hover:bg-[#fdeaf2] hover:text-[#ed3481]"
                }`}
              >
                {page}
              </button>
            ),
          )}

          {/* NEXT BUTTON */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label={blogData.nextPageLabel}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#fdeaf2] text-[#ec3882] transition-all duration-300 hover:bg-[#ec3882] hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-[#fdeaf2] disabled:hover:text-[#ec3882] sm:h-12 sm:w-12"
          >
            <ChevronRight size={22} strokeWidth={2.5} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
