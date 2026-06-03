"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/book-us.jpg",
    title: "Relax in Our Modern Style\nChalets",
  },
  {
    image: "/images/gallary/2.jpg",
    title: "Relax in Our Modern Style\nChalets",
  },
  {
    image: "/images/gallary/3.jpg",
    title: "Relax in Our Modern Style\nChalets",
  },
];

export default function ChaletSection() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="bg-[#FFFEF8] py-10 md:py-16 lg:py-16">
      <div
        className="
          relative
          w-full
          h-[220px]
          sm:h-[350px]
          md:h-[500px]
          lg:h-[569px]
          overflow-hidden
        "
      >
        {/* Background Image */}
        <Image
          src={slides[current].image}
          alt="Chalet"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10 z-[1]" />

        {/* White Border */}
        <div
          className="
            absolute
            inset-[16px]
            md:inset-[18px]
            border-2
            border-white
            z-[2]
            pointer-events-none
          "
        />

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="
            absolute
            left-[24px]
            sm:left-[30px]
            md:left-[45px]
            lg:left-[65px]
            top-1/2
            -translate-y-1/2
            z-20

            w-6 h-6
            sm:w-8 sm:h-8
            lg:w-12 lg:h-12

            rounded-full
            border
            border-white
            text-white

            flex
            items-center
            justify-center

            hover:bg-white/10
            transition-all
          "
        >
          <ChevronLeft className="w-2 h-2 sm:w-3 sm:h-3 lg:w-5 lg:h-5" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="
            absolute
            right-[24px]
            sm:right-[30px]
            md:right-[45px]
            lg:right-[65px]
            top-1/2
            -translate-y-1/2
            z-20

            w-6 h-6
            sm:w-8 sm:h-8
            lg:w-12 lg:h-12

            rounded-full
            border
            border-white
            text-white

            flex
            items-center
            justify-center

            hover:bg-white/10
            transition-all
          "
        >
          <ChevronRight className="w-2 h-2 sm:w-3 sm:h-3 lg:w-5 lg:h-5" />
        </button>

        {/* Center Heading */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
          <h2
            className="
              font-ogg-regular
              text-white
              text-center
              font-normal

              text-[20px]
              sm:text-[28px]
              md:text-[40px]
              lg:text-[48px]

              leading-[128%]
              tracking-[1px]

              max-w-[280px]
              sm:max-w-[500px]
              lg:max-w-[700px]

              drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]
            "
          >
            {slides[current].title.split("\n").map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
}