"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface TourCardProps {
  image: string;
  title: string;
  feature: string;
  labelType: string;
  labelValue: string;
}

export default function TourCard({
  image,
  title,
  feature,
  labelType,
  labelValue,
}: TourCardProps) {
  return (
    <div
      className="
        w-full
        h-full

        rounded-[18px]
        border border-white/40

        bg-white/5
        backdrop-blur-sm

        p-[14px]

        flex
        flex-col

        shadow-[0_4px_20px_rgba(0,0,0,0.08)]
      "
    >
      {/* Image */}
      <div
        className="
          relative
          w-full
          aspect-[246/218]

          overflow-hidden
          rounded-[8px]
        "
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Title + Arrow */}
      <div className="flex items-start justify-between gap-3 mt-5">
        <h3
          className="
            font-ogg-trial
            text-white

            text-[20px]
            md:text-[22px]
            lg:text-[24px]

            font-medium

            leading-[128%]
            tracking-[1px]

            capitalize

            max-w-[190px]
          "
        >
          {title}
        </h3>

        <button
          className="
            shrink-0

            w-[38px]
            h-[38px]

            rounded-full

            bg-[#C42823]
            hover:bg-[#A91F1C]

            flex
            items-center
            justify-center

            transition-all
          "
        >
          <ArrowRight
            size={16}
            strokeWidth={2.5}
            color="white"
          />
        </button>
      </div>

      {/* Table Area */}
      <div className="mt-auto pt-5">
        <div className="border-t border-white/30" />

        {/* Features Row */}
        <div
          className="
            flex
            justify-between
            items-start

            py-4

            border-b
            border-white/30
          "
        >
          <span
            className="
              font-jeko-bold
              text-white

              text-[14px]

              leading-[128%]
              tracking-[1px]

              capitalize
            "
          >
            Features
          </span>

          <span
            className="
              font-jeko-medium
              text-white

              text-[14px]

              leading-[128%]
              tracking-[1px]

              text-right

              max-w-[145px]

              capitalize
            "
          >
            {feature}
          </span>
        </div>

        {/* Capacity / Units / Occupancy */}
        <div
          className="
            flex
            justify-between
            items-center

            py-4
          "
        >
          <span
            className="
              font-jeko-bold
              text-white

              text-[14px]

              leading-[128%]
              tracking-[1px]

              capitalize
            "
          >
            {labelType}
          </span>

          <span
            className="
              font-jeko-medium
              text-white

              text-[14px]

              leading-[128%]
              tracking-[1px]

              text-right
            "
          >
            {labelValue}
          </span>
        </div>
      </div>
    </div>
  );
}