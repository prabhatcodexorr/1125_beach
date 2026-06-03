"use client";

import { ArrowRight } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="relative">
      <div
        className="relative min-h-[280px] sm:h-[340px] md:h-[380px] flex items-center justify-center bg-cover bg-center py-12 sm:py-0"
        style={{
          backgroundImage: "url('/images/newsletter-bg.jpg')",
        }}
      >
        {/* Premium Dark Soft Overlay */}
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex justify-center">
          <div className="text-center w-full max-w-[640px]">

            {/* Heading - Scaled properly for touch devices */}
            <h2
              className="
    font-ogg-trial
    text-white

    text-[30px]
    sm:text-[40px]
    lg:text-[48px]

    font-medium

    leading-[128%]
    tracking-[1px]

    text-center
  "
            >
              Join Our Mailing List
            </h2>
            {/* Description Subtitle */}
            <p
              className="
    font-jeko-regular
    text-white

    text-[14px]
    md:text-[15px]
    lg:text-[16px]

    leading-[128%]
    tracking-[1px]

    text-center

    max-w-[560px]
    mx-auto

    mt-3
    lg:mt-4
  "
            >
              Sign Up For Our Newsletter To Be The First To Hear About Our
              News And Happenings Around The World.
            </p>

            {/* Email Subscription Bar Form */}
            <form
              className="mt-8 flex justify-center"
              onSubmit={(e) => e.preventDefault()}
            >
              <div
                className="
      w-full
      max-w-[507px]

      h-[62px]
      md:h-[70px]
      lg:h-[77px]

      bg-white

      rounded-[45px]

      flex
      items-center

      pl-6
      pr-2

      shadow-xl
    "
              >
                <input
                  type="email"
                  placeholder="Email Address"
                  className="
        flex-1

        bg-transparent
        outline-none

        font-jeko-regular

        text-[14px]
        md:text-[15px]
        lg:text-[16px]

        text-[#8DA0B8]

        placeholder:text-[#A3B2C5]
      "
                />

                <button
                  type="submit"
                  className="
        w-[48px]
        h-[48px]

        md:w-[58px]
        md:h-[58px]

        lg:w-[61px]
        lg:h-[61px]

        rounded-full

        bg-[#BC2623]
        hover:bg-[#A71F1D]

        flex
        items-center
        justify-center

        transition-all
      "
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}