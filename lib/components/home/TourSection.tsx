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

  // Mouse Drag functions (for Desktop)
  const onDragStart = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const onDragStop = () => {
    setIsDragging(false);
  };

  const onDragMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    // Multiplied by 1.5 to make dragging feel highly responsive and swift
    const walk = (x - startX) * 1.5; 
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="relative overflow-hidden bg-[#7CA5C8] py-[80px] lg:py-[100px] w-full select-none">
      {/* Background Vectors */}
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
        {/* Header Grid */}
        <div className="max-w-[1553px] mx-auto px-6 md:px-12 lg:px-[77px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-[42px]">
          <div>
            <span className="font-ogg-trial text-white text-[30px] md:text-[32px] lg:text-[36px] leading-[128%] tracking-[1px] font-medium block mb-1">
              Take A
            </span>
            <h2 className="font-ogg-regular text-white text-[80px] sm:text-[80px] lg:text-[96px] leading-[100%] tracking-[1px] font-medium">
              Tour
            </h2>
          </div>

          <div className="flex lg:justify-end w-full">
            <p className="font-jeko-medium font-normal text-white/90 max-w-[520px] text-left lg:text-right text-[20px] md:text-[18px] lg:text-[20px] leading-[120%] tracking-[1px]">
              Our accommodations blend luxury with natural charm, offering a variety of options suited to every traveler&apos;s needs.
            </p>
          </div>
        </div>

        {/* Slider Wrapper */}
        <div className="w-full relative overflow-visible pl-6 sm:pl-12 lg:pl-20">
          <div
            ref={scrollContainerRef}
            onMouseDown={onDragStart}
            onMouseLeave={onDragStop}
            onMouseUp={onDragStop}
            onMouseMove={onDragMove}
            // FIXED: Added native touch-pan-x support with momentum physics, snap-x configuration, and hardware acceleration
            className={`flex gap-[42px] overflow-x-auto pb-6 w-full scroll-smooth snap-x snap-mandatory style-scroll-container ${
              isDragging ? "cursor-grabbing scroll-auto" : "cursor-grab snap-x"
            }`}
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch" // iOS mobile inertial momentum swipe scroll ke liye
            }}
          >
            {tours.map((tour) => (
              <div
                key={tour.id}
                // FIXED: Card wrapper gets snap-start or snap-center alignment so it smoothly drops into place
                className="w-[280px] sm:w-[300px] lg:w-[330px] shrink-0 snap-start snap-always transform will-change-transform"
              >
                <div className="border border-white/30 rounded-[18px] p-[14px] bg-white/[0.06] backdrop-blur-[8px] flex flex-col h-[450px] lg:h-[500px] w-full shadow-sm">
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
                    <div className="grid grid-cols-[80px_1fr] gap-3 py-4 border-t border-white mt-2">
                      <span className="font-jeko-medium font-normal text-white text-[13px] tracking-[0.5px]">
                        Features
                      </span>
                      <span className="font-jeko-medium text-white text-right text-[14px] leading-[128%] tracking-[1px] break-words">
                        {tour.feature}
                      </span>
                    </div>

                    <div className="grid grid-cols-[75px_1fr] gap-3 py-4 border-t border-white">
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

            {/* Spacer at the end */}
            <div className="w-6 sm:w-12 lg:w-20 shrink-0" />
          </div>
        </div>

        {/* Footer Action Button */}
        <div className="text-center mt-12 md:mt-16">
          <button className="w-[218px] h-[52px] rounded-[50px] bg-[#C42924] hover:bg-[#A3201C] text-white text-[14px] font-[700] tracking-[1.2px] uppercase transition-all font-manrope">
            Make A Reservation
          </button>
        </div>
      </div>
    </section>
  );
}