
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, ExternalLink, Navigation } from "lucide-react";
import { contactPageData, footerSectionData } from "@/data";

const address = footerSectionData.contactDetails[2].value;
const locationContent = contactPageData.location;

const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  address
)}&output=embed`;

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  address
)}`;

export default function LocationMapSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative w-full overflow-hidden bg-[#fffafa] py-12 sm:py-16 lg:py-20">

      {/* BACKGROUND DECORATIONS */}

      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#fde6ef]/60 blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#e8f2eb]/60 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-8 lg:px-12">

        {/* MAP CONTAINER */}

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
            ease: "easeOut",
          }}
          className="group relative h-[300px] w-full overflow-hidden rounded-[20px] border border-[#f4e5e9] bg-[#f4f1f0] shadow-[0_15px_50px_rgba(70,45,60,0.10)] sm:h-[430px] sm:rounded-[25px] md:h-[500px] lg:h-[600px] xl:h-[550px]"
        >

          {/* GOOGLE MAP */}

          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{
              border: 0,
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            title={`${locationContent.frameTitle} - ${address}`}
            className="absolute inset-0 h-full w-full"
          />

          {/* TOP LEFT ADDRESS CARD */}

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
            }}
            transition={{
              duration: 0.8,
              delay: reduceMotion ? 0 : 0.3,
            }}
            className="absolute left-3 top-3 z-10 w-[min(340px,calc(100%-24px))] rounded-2xl border border-white/80 bg-white/95 p-4 shadow-[0_8px_30px_rgba(40,40,50,0.13)] backdrop-blur-xl sm:left-6 sm:top-6 sm:p-6"
          >

            {/* ADDRESS */}

            <div className="flex items-start gap-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fceaf0] text-[#c56b86]">

                <MapPin size={21} />

              </div>

              <div>

                <h3 className="text-base font-extrabold text-[#30303d] sm:text-lg">

                  {locationContent.mapCard.title}

                </h3>

                <p className="mt-1 text-sm leading-relaxed text-[#858493] sm:text-base">

                  {address}

                </p>

              </div>

            </div>

            {/* DIRECTIONS BUTTON */}

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#c45e7d] transition-colors duration-300 hover:text-[#a94366] sm:text-base"
            >

              {locationContent.mapCard.directionsLabel}

              <Navigation
                size={17}
                className="transition-transform duration-300 group-hover/link:translate-x-1"
              />

              <ExternalLink size={15} />

            </a>

          </motion.div>

          {/* BOTTOM RIGHT DECORATIVE LABEL */}

          <motion.a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
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
              duration: 0.7,
              delay: reduceMotion ? 0 : 0.4,
            }}
            className="absolute bottom-4 right-4 z-10 hidden items-center gap-2 rounded-full border border-white/80 bg-white/95 px-5 py-3 text-sm font-bold text-[#30303d] shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:text-[#c45e7d] sm:flex"
          >

            <MapPin size={18} className="text-[#c45e7d]" />

            {locationContent.mapCard.mapLinkLabel}

            <ExternalLink size={15} />

          </motion.a>

        </motion.div>

      </div>

    </section>
  );
}
