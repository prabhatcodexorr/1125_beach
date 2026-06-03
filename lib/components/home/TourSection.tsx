"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { tours } from "@/lib/data/tours";

export default function TourSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);

    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;

    setStartX(pageX - scrollContainerRef.current.getBoundingClientRect().left);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const onDragStop = () => {
    setIsDragging(false);
  };

  const onDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;

    if (e.cancelable) e.preventDefault();

    const pageX = "touches" in e ? e.touches[0].pageX : e.pageX;
    const x = pageX - scrollContainerRef.current.getBoundingClientRect().left;

    const distance = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - distance;
  };

  return (
    <section className="relative overflow-hidden bg-[#7CA5C8] py-[80px] lg:py-[100px] w-full select-none">
      <div className="absolute bottom-[-120px] left-[-120px] hidden lg:block w-[245px] h-[704px] pointer-events-none z-0">
        <div className="relative w-full h-full brightness-0 invert">
          <Image
            src="/images/Group 44.png"
            alt="Figma Left Corner Vertical Vector"
            fill
            className="object-contain object-bottom"
            draggable={false}
          />
        </div>
      </div>

      <div className="absolute bottom-[-120px] right-[-120px] hidden lg:block w-[245px] h-[704px] pointer-events-none z-0">
        <div className="relative w-full h-full brightness-0 invert">
          <Image
            src="/images/Group 43.png"
            alt="Figma Right Corner Angled Vector"
            fill
            className="object-contain object-bottom"
            draggable={false}
          />
        </div>
      </div>

      <div className="w-full relative z-10">
        <div className="max-w-[1553px] mx-auto px-6 md:px-12 lg:px-[77px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-[42px]">
          <div>
            <span className="font-ogg-trial text-white text-[28px] md:text-[32px] lg:text-[36px] leading-[128%] tracking-[1px] font-medium block mb-1">
              Take A
            </span>
            <h2 className="font-ogg-regular text-white text-[64px] sm:text-[80px] lg:text-[96px] leading-[100%] tracking-[1px] font-medium">
              Tour
            </h2>
          </div>

          <div className="flex lg:justify-end w-full">
            <p className="font-jeko-medium font-normal text-white/90 max-w-[520px] text-left lg:text-right text-[15px] md:text-[18px] lg:text-[20px] leading-[120%] tracking-[1px]">
              Our accommodations blend luxury with natural charm, offering a variety of options suited to every traveler&apos;s needs.
            </p>
          </div>
        </div>

        <div className="w-full relative overflow-visible pl-6 sm:pl-12 lg:pl-20">
          <div
            ref={scrollContainerRef}
            onMouseLeave={onDragStop}
            onMouseDown={onDragStart}
            onMouseUp={onDragStop}
            onMouseMove={onDragMove}
            onTouchStart={onDragStart}
            onTouchEnd={onDragStop}
            onTouchMove={onDragMove}
            className={`flex gap-[42px] overflow-x-auto scrollbar-none pb-6 w-full touch-pan-y ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {tours.map((tour) => (
              <div
                key={tour.id}
                className="w-[280px] sm:w-[300px] lg:w-[330px] shrink-0"
              >
                <div className="border border-white/30 rounded-[18px] p-[14px] bg-white/[0.06] backdrop-blur-[8px] flex flex-col h-[500px] w-full shadow-sm">
                  <div>
                    <div className="relative aspect-[246/218] w-full overflow-hidden rounded-[8px] pointer-events-none select-none">
                      <Image
                        src={tour.image}
                        alt={tour.title}
                        fill
                        className="object-cover"
                        draggable={false}
                        priority
                      />
                    </div>

                    <div className="flex justify-between items-start gap-3 pt-5 px-1">
                      <h3 className="font-ogg-regular text-white text-[22px] lg:text-[24px] leading-[1.15] font-normal tracking-wide capitalize">
                        {tour.title}
                      </h3>
                      <button
                        className="w-[38px] h-[38px] rounded-full bg-[#C42924] hover:bg-[#A3201C] flex items-center justify-center shrink-0 transition-colors mt-0.5 shadow-sm cursor-pointer"
                        aria-label={`Open details for ${tour.title}`}
                      >
                        <ArrowRight size={18} color="white" strokeWidth={2.5} />
                      </button>
                    </div>
                  </div>

                  <div className="mt-auto px-1">
                    <div className="grid grid-cols-[80px_1fr] gap-3 py-4 border-t border-white  mt-2">
                      <span className="font-jeko-medium font-normal text-white text-[13px] tracking-[0.5px]">
                        Features
                      </span>
                      <span className="font-jeko-medium text-white text-right text-[14px] leading-[128%] tracking-[1px] break-words">
                        {tour.feature}
                      </span>
                    </div>

                    <div className="grid grid-cols-[75px_1fr] gap-3 py-4 border-t  border-white">
                      <span className="font-jeko-medium font-normal text-white text-[13px] tracking-[0.5px]">
                        {tour.labelType || "Units"}
                      </span>
                      <span className="font-jeko-medium text-white text-right text-[14px] leading-[128%] tracking-[1px] break-words">
                        {tour.labelValue || "5"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="w-6 sm:w-12 lg:w-20 shrink-0" />
          </div>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <button className="w-[218px] h-[52px] rounded-[50px] bg-[#C42924] hover:bg-[#A3201C] text-white text-[14px] font-bold tracking-[1.2px] uppercase transition-all">
            Make A Reservation
          </button>
        </div>
      </div>
    </section>
  );
}