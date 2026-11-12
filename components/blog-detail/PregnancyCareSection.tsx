
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  CalendarDays,
  UserRound,
  Clock3,
  ArrowUpRight,
  MessageCircle,
  ChevronRight,
  Heart,
} from "lucide-react";
import {
  blogData,
  blogDetailsData,
  blogDetailSectionData,
} from "@/data";

const latestPosts = blogData.posts.slice(0, 3);
const comments = blogDetailsData.comments;
const articleSections = blogDetailsData.tips;

export default function PregnancyCareSection() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 35,
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
    <section className="relative w-full overflow-x-clip bg-[#fff9fc] py-12 sm:py-16 lg:py-20">

      {/* BACKGROUND DECORATIONS */}

      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#fce4ef]/60 blur-[100px]" />

      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#fce8f2]/70 blur-[110px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#fff0f6] blur-[100px]" />

      {/* MAIN CONTAINER */}

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 sm:px-8 md:px-10 lg:px-14 xl:px-16">

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.85fr_1fr] lg:gap-10 xl:gap-12">

          {/* ================================= */}
          {/* LEFT SIDE - MAIN ARTICLE */}
          {/* ================================= */}

          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: reduceMotion ? 0 : 0.13,
                },
              },
            }}
            className="min-w-0"
          >

            {/* CATEGORY */}

            <motion.div variants={fadeUp} className="mb-4">

              <span className="inline-flex items-center gap-2 rounded-full border border-[#f6d6e4] bg-[#fdebf3] px-4 py-2 text-xs font-bold tracking-wide text-[#e83d85] sm:text-sm">

                <Heart size={14} />

                {blogDetailsData.eyebrow}

              </span>

            </motion.div>

            {/* ARTICLE TITLE */}

            <motion.h1
              variants={fadeUp}
              className="max-w-[850px] text-3xl font-extrabold leading-[1.2] tracking-[-0.04em] text-[#32164e] sm:text-4xl md:text-[42px] lg:text-[46px]"
            >

              {blogDetailsData.headingFirst}{" "}

              <span className="bg-gradient-to-r from-[#e83d85] to-[#f477a9] bg-clip-text text-transparent">

                {blogDetailsData.headingHighlight}

              </span>

            </motion.h1>

            <motion.div
              variants={fadeUp}
              className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 border-b border-[#f5e3eb] pb-5 text-xs font-medium text-[#898197] sm:text-sm"
            >

              <div className="flex items-center gap-2">

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fdeaf2] text-[#e83d85]">

                  <UserRound size={14} />

                </span>

                By {blogDetailSectionData.author}

              </div>

              <div className="flex items-center gap-2">

                <CalendarDays size={16} className="text-[#e83d85]" />

                {blogDetailsData.dateLabel}

              </div>

              <div className="flex items-center gap-2">

                <Clock3 size={16} className="text-[#e83d85]" />

                {blogDetailsData.readingTime}

              </div>

            </motion.div>

            <motion.div
              variants={fadeUp}
              className="group relative mt-6 aspect-[16/8.5] w-full overflow-hidden rounded-[20px] border border-[#f5e1ea] bg-[#fdeaf2] shadow-[0_12px_35px_rgba(111,56,83,0.08)] sm:rounded-[24px]"
            >

              <Image
                src={blogDetailsData.image.src}
                alt={blogDetailsData.image.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#32164e]/10 to-transparent opacity-60" />

            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-6"
            >

              <p className="text-sm leading-[1.9] text-[#77738a] sm:text-base lg:text-[16px]">

                {blogDetailsData.introduction}

              </p>

            </motion.div>

            <div className="mt-8 space-y-7 sm:mt-10 sm:space-y-9">

              {articleSections.map((item) => (

                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    x: reduceMotion ? 0 : -25,
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
                    duration: reduceMotion ? 0 : 0.65,
                    delay: reduceMotion ? 0 : 0.08,
                  }}
                  className="group relative"
                >

                  <div className="flex items-start gap-3 sm:gap-4">

                    {/* NUMBER */}

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#fa3987] to-[#e72e7e] text-xs font-bold text-white shadow-[0_5px_15px_rgba(231,46,126,0.2)] transition-transform duration-300 group-hover:scale-110 sm:h-10 sm:w-10 sm:text-sm">

                      {item.number}

                    </div>

                    {/* TEXT */}

                    <div className="min-w-0 flex-1">

                      <h2 className="text-lg font-extrabold tracking-tight text-[#32164e] transition-colors duration-300 group-hover:text-[#e83d85] sm:text-xl">

                        {item.title}

                      </h2>

                      {item.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="mt-2 text-sm leading-[1.9] text-[#858197] sm:text-[15px]"
                        >
                          {paragraph}
                        </p>
                      ))}

                    </div>

                  </div>

                </motion.div>

              ))}

            </div>

          </motion.article>

          <aside className="flex min-w-0 flex-col gap-6 lg:sticky lg:top-24">

            {/* LATEST POSTS */}

            <motion.div
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="rounded-[20px] border border-[#f5e0e9] bg-gradient-to-br from-[#fff3f8] to-[#fffafd] p-5 shadow-[0_10px_35px_rgba(111,56,83,0.045)] sm:rounded-[23px] sm:p-6"
            >

              {/* TITLE */}

              <div className="mb-6 flex items-center justify-between">

                <h2 className="text-lg font-extrabold text-[#32164e] sm:text-xl">

                  {blogDetailSectionData.latestTitle}

                </h2>

                <span className="h-1 w-9 rounded-full bg-[#ed3984]" />

              </div>

              {/* POSTS */}

              <div className="space-y-5">

                {latestPosts.map((post, index) => (

                  <motion.div
                    key={post.id}
                    initial={{
                      opacity: 0,
                      x: reduceMotion ? 0 : 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: reduceMotion ? 0 : index * 0.12,
                    }}
                    className="group"
                  >

                    <Link
                      href={post.slug}
                      className="flex items-center gap-3"
                    >

                      {/* THUMBNAIL */}

                      <div className="relative h-[76px] w-[88px] shrink-0 overflow-hidden rounded-xl bg-[#f9e4ed] sm:h-[82px] sm:w-[95px]">

                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="100px"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                      </div>

                      {/* DETAILS */}

                      <div className="min-w-0 flex-1">

                        <div className="mb-1 flex items-center gap-1.5 text-[10px] font-semibold text-[#a19aaa] sm:text-[11px]">

                          <CalendarDays
                            size={11}
                            className="text-[#e83d85]"
                          />

                          {post.date}, {post.year}

                        </div>

                        <h3 className="line-clamp-2 text-xs font-bold leading-[1.5] text-[#32164e] transition-colors duration-300 group-hover:text-[#e83d85] sm:text-[13px]">

                          {post.title}

                        </h3>

                        <div className="mt-1.5 flex items-center gap-1 text-[11px] font-semibold text-[#e83d85]">

                          {blogDetailsData.readArticleLabel}

                          <ArrowUpRight
                            size={12}
                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          />

                        </div>

                      </div>

                    </Link>

                    {index !== latestPosts.length - 1 && (

                      <div className="mt-5 border-b border-[#f2dfe8]" />

                    )}

                  </motion.div>

                ))}

              </div>

              {/* VIEW ALL */}

              <Link
                href={blogData.listingHref}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-[#f3cddd] bg-white py-3 text-sm font-bold text-[#e83d85] transition-all duration-300 hover:border-[#e83d85] hover:bg-[#e83d85] hover:text-white"
              >

                {blogDetailsData.viewAllPostsLabel}

                <ChevronRight size={17} />

              </Link>

            </motion.div>

            {/* RECENT COMMENTS */}

            <motion.div
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: reduceMotion ? 0 : 0.15,
              }}
              className="rounded-[20px] border border-[#f5e0e9] bg-gradient-to-br from-[#fff3f8] to-[#fffafd] p-5 shadow-[0_10px_35px_rgba(111,56,83,0.045)] sm:rounded-[23px] sm:p-6"
            >

              {/* TITLE */}

              <div className="mb-6 flex items-center justify-between">

                <h2 className="text-lg font-extrabold text-[#32164e] sm:text-xl">

                  {blogDetailSectionData.commentsLabel}

                </h2>

                <MessageCircle
                  size={20}
                  className="text-[#ed3984]"
                />

              </div>

              {/* COMMENTS */}

              <div className="space-y-5">

                {comments.map((comment, index) => (

                  <motion.div
                    key={comment.name}
                    initial={{
                      opacity: 0,
                      x: reduceMotion ? 0 : 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: reduceMotion ? 0 : index * 0.1,
                    }}
                    className="group flex items-start gap-3"
                  >

                    {/* AVATAR */}

                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-sm transition-transform duration-300 group-hover:scale-110 sm:h-11 sm:w-11">

                      <Image
                        src={comment.avatar}
                        alt={comment.name}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />

                    </div>

                    {/* COMMENT DETAILS */}

                    <div className="min-w-0 flex-1">

                      <div className="flex flex-wrap items-center justify-between gap-1">

                        <h3 className="text-xs font-bold text-[#32164e] sm:text-sm">

                          {comment.name}

                        </h3>

                        <span className="text-[10px] text-[#aaa2b1]">

                          {comment.time}

                        </span>

                      </div>

                      <p className="mt-1 text-xs leading-[1.65] text-[#898397]">

                        {comment.message}

                      </p>

                    </div>

                  </motion.div>

                ))}

              </div>

              {/* COMMENT BUTTON */}

              <Link
                href="#comments"
                className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#fde6ef] py-3 text-sm font-bold text-[#e83d85] transition-all duration-300 hover:bg-[#e83d85] hover:text-white"
              >

                <MessageCircle size={16} />

                {blogDetailsData.joinConversationLabel}

              </Link>

            </motion.div>

          </aside>

        </div>

      </div>

    </section>
  );
}
