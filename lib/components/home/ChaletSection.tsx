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
    image: "/images/gallery/2.jpg",
    title: "Relax in Our Modern Style\nChalets",
  },
  {
    image: "/images/gallery/3.jpg",
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
          h-[270px]
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
        {/* <button
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
        </button> */}
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

    w-[32px]
    h-[32px]

    sm:w-[40px]
    sm:h-[40px]

    lg:w-[48px]
    lg:h-[48px]

    flex
    items-center
    justify-center

    transition-all
  "
>
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
  >
    <mask
      id="mask0_prev"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="48"
      height="48"
    >
      <rect
        width="48"
        height="48"
        transform="matrix(-1 0 0 1 48 0)"
        fill="#D9D9D9"
      />
    </mask>

    <g mask="url(#mask0_prev)">
      <path
        d="M21.319 24L27.723 30.404L26.1425 32.0345L18.1075 24L26.1425 15.9655L27.723 17.596L21.319 24ZM23.9965 43C26.6245 43 29.0947 42.5013 31.407 41.504C33.7193 40.5067 35.7307 39.1448 37.441 37.4185C39.1513 35.6922 40.5055 33.6765 41.5035 31.3715C42.5012 29.0668 43 26.6108 43 24.0035C43 21.3755 42.5013 18.9053 41.504 16.593C40.5067 14.2807 39.1532 12.2693 37.4435 10.559C35.7338 8.84867 33.7233 7.4945 31.412 6.4965C29.1007 5.49883 26.6312 5 24.0035 5C21.3755 5 18.9137 5.49867 16.618 6.496C14.3223 7.49333 12.311 8.84683 10.584 10.5565C8.857 12.2662 7.4945 14.2767 6.4965 16.588C5.49883 18.8993 5 21.3688 5 23.9965C5 26.6038 5.49866 29.0605 6.496 31.3665C7.49333 33.6725 8.85517 35.689 10.5815 37.416C12.3078 39.143 14.3183 40.5055 16.613 41.5035C18.9077 42.5012 21.3688 43 23.9965 43ZM24 40.7305C19.364 40.7305 15.4165 39.1012 12.1575 35.8425C8.89883 32.5835 7.2695 28.636 7.2695 24C7.2695 19.3437 8.89883 15.3912 12.1575 12.1425C15.4165 8.89383 19.364 7.2695 24 7.2695C28.6563 7.2695 32.6088 8.89383 35.8575 12.1425C39.1062 15.3912 40.7305 19.3437 40.7305 24C40.7305 28.636 39.1062 32.5835 35.8575 35.8425C32.6088 39.1012 28.6563 40.7305 24 40.7305Z"
        fill="white"
      />
    </g>
  </svg>
</button>

        {/* Right Arrow */}
        {/* <button
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
        </button> */}
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

    w-[32px]
    h-[32px]

    sm:w-[40px]
    sm:h-[40px]

    lg:w-[48px]
    lg:h-[48px]

    flex
    items-center
    justify-center

    transition-all
  "
        >
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <mask
              id="mask0_next"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="48"
              height="48"
            >
              <rect width="48" height="48" fill="#D9D9D9" />
            </mask>

            <g mask="url(#mask0_next)">
              <path
                d="M26.681 24L20.277 30.404L21.8575 32.0345L29.8925 24L21.8575 15.9655L20.277 17.596L26.681 24ZM24.0035 43C21.3755 43 18.9053 42.5013 16.593 41.504C14.2807 40.5067 12.2693 39.1448 10.559 37.4185C8.84867 35.6922 7.4945 33.6765 6.4965 31.3715C5.49883 29.0668 5 26.6108 5 24.0035C5 21.3755 5.49867 18.9053 6.496 16.593C7.49333 14.2807 8.84683 12.2693 10.5565 10.559C12.2662 8.84867 14.2767 7.4945 16.588 6.4965C18.8993 5.49883 21.3688 5 23.9965 5C26.6245 5 29.0863 5.49867 31.382 6.496C33.6777 7.49333 35.689 8.84683 37.416 10.5565C39.143 12.2662 40.5055 14.2767 41.5035 16.588C42.5012 18.8993 43 21.3688 43 23.9965C43 26.6038 42.5013 29.0605 41.504 31.3665C40.5067 33.6725 39.1448 35.689 37.4185 37.416C35.6922 39.143 33.6817 40.5055 31.387 41.5035C29.0923 42.5012 26.6312 43 24.0035 43ZM24 40.7305C28.636 40.7305 32.5835 39.1012 35.8425 35.8425C39.1012 32.5835 40.7305 28.636 40.7305 24C40.7305 19.3437 39.1012 15.3912 35.8425 12.1425C32.5835 8.89383 28.636 7.2695 24 7.2695C19.3437 7.2695 15.3912 8.89383 12.1425 12.1425C8.89383 15.3912 7.2695 19.3437 7.2695 24C7.2695 28.636 8.89383 32.5835 12.1425 35.8425C15.3912 39.1012 19.3437 40.7305 24 40.7305Z"
                fill="white"
              />
            </g>
          </svg>
        </button>

        {/* Center Heading */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
          <h2
            className="
              font-ogg-regular
              text-white
              text-center
              font-normal

              text-[23px]
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