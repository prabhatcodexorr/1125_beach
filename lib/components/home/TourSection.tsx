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
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="relative overflow-hidden bg-[#7CA5C8] py-[80px] lg:py-[100px] w-full select-none">
      {/* Background Vectors - No Change */}
      <div className="absolute bottom-[-10px] left-[-30px] hidden lg:block w-[305px] h-[904px] pointer-events-none z-0">
        <div className="relative w-full h-full brightness-0 invert">
          <Image src="/images/Group 44.png" alt="Vector" fill className="object-contain object-bottom" draggable={false} />
        </div>
      </div>
      <div className="absolute bottom-[-15px] right-[-30px] hidden lg:block w-[305px] h-[904px] pointer-events-none z-0">
        <div className="relative w-full h-full brightness-0 invert">
          <Image src="/images/Group 43.png" alt="Vector" fill className="object-contain object-bottom" draggable={false} />
        </div>
      </div>

      <div className="w-full relative z-10">
        {/* Header Grid - No Change */}
        <div className="max-w-[1553px] mx-auto px-6 md:px-12 lg:px-[77px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-[42px]">
          <div>
            <span className="font-ogg-trial text-white text-[30px] md:text-[32px] lg:text-[36px] leading-[128%] tracking-[1px] font-medium block mb-1">Take A</span>
            <h2 className="font-ogg-regular text-white text-[80px] sm:text-[80px] lg:text-[96px] leading-[100%] tracking-[1px] font-medium">Tour</h2>
          </div>
          <div className="flex lg:justify-end w-full">
            <p className="font-jeko-medium font-normal text-white/90 max-w-[520px] text-left lg:text-right text-[20px] md:text-[18px] lg:text-[20px] leading-[120%] tracking-[1px]">
              Our accommodations blend luxury with natural charm, offering a variety of options suited to every traveler&apos;s needs.
            </p>
          </div>
        </div>

        {/* Slider Wrapper - FIXED: Removed Padding from here */}
        <div className="w-full relative overflow-visible">
          <div
            ref={scrollContainerRef}
            onMouseDown={onDragStart}
            onMouseLeave={onDragStop}
            onMouseUp={onDragStop}
            onMouseMove={onDragMove}
            // FIXED: Added px- (padding) and scroll-pl (scroll-padding-left) inside the scroll container
            className={`flex gap-[42px] overflow-x-auto pb-6 w-full scroll-smooth snap-x snap-mandatory style-scroll-container 
              px-6 md:px-12 lg:px-[77px] scroll-pl-6 md:scroll-pl-12 lg:scroll-pl-[77px] ${isDragging ? "cursor-grabbing scroll-auto" : "cursor-grab snap-x"
              }`}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch"
            }}
          >
            {tours.map((tour) => (
              <div
                key={tour.id}
                className="w-[280px] sm:w-[300px] lg:w-[330px] shrink-0 snap-start snap-always transform will-change-transform"
              >
                {/* Your Card Design - Absolutely NO Change here */}
                <div className="border border-white rounded-[18px] p-[14px] bg-white/[0.06] backdrop-blur-[8px] flex flex-col h-[450px] lg:h-[500px] w-full shadow-sm">
                  <div>
                    <div className="relative aspect-[246/218] w-full overflow-hidden rounded-[8px] pointer-events-none select-none">
                      <Image src={tour.image} alt={tour.title} fill className="object-cover" draggable={false} priority />
                    </div>
                    <div className="flex justify-between items-start gap-3 pt-5 px-1">
                      <h3 className="font-ogg-regular text-white text-[22px] lg:text-[24px] leading-[1.15] font-[500] tracking-wide capitalize pr-2">{tour.title}</h3>
                      <button className="w-[31px] h-[31px] rounded-full bg-[#AE2020] hover:bg-[#AE2020] flex items-center justify-center shrink-0 transition-colors mt-0.5 shadow-sm cursor-pointer">
                     
                        <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.2071 8.07112C16.5976 7.6806 16.5976 7.04743 16.2071 6.65691L9.84315 0.292946C9.45262 -0.0975785 8.81946 -0.0975785 8.42893 0.292946C8.03841 0.68347 8.03841 1.31664 8.42893 1.70716L14.0858 7.36401L8.42893 13.0209C8.03841 13.4114 8.03841 14.0446 8.42893 14.4351C8.81946 14.8256 9.45262 14.8256 9.84315 14.4351L16.2071 8.07112ZM0 7.36401V8.36401H15.5V7.36401V6.36401H0V7.36401Z" fill="#FFFEF8" />
                        </svg>

                      </button>
                      {/* <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="31" height="31" rx="15.5" fill="#AE2020" />
                        <path d="M23.9571 16.2071C24.3476 15.8166 24.3476 15.1834 23.9571 14.7929L17.5931 8.42893C17.2026 8.03841 16.5695 8.03841 16.1789 8.42893C15.7884 8.81946 15.7884 9.45262 16.1789 9.84315L21.8358 15.5L16.1789 21.1569C15.7884 21.5474 15.7884 22.1805 16.1789 22.5711C16.5695 22.9616 17.2026 22.9616 17.5931 22.5711L23.9571 16.2071ZM7.75 15.5V16.5H23.25V15.5V14.5H7.75V15.5Z" fill="#FFFEF8" />
                      </svg> */}

                    </div>
                  </div>
                  <div className="mt-auto px-1">
                    <div className="grid grid-cols-[80px_1fr] gap-3 py-4 border-t border-white mt-2">
                      <span className="font-jeko-medium font-normal text-white text-[13px] tracking-[0.5px]">Features</span>
                      <span className="font-jeko-medium text-white text-right text-[14px] leading-[128%] tracking-[1px] break-words">{tour.feature}</span>
                    </div>
                    <div className="grid grid-cols-[75px_1fr] gap-3 py-4 border-t border-white">
                      <span className="font-jeko-medium font-normal text-white text-[13px] tracking-[0.5px]">{tour.labelType || "Units"}</span>
                      <span className="font-jeko-medium text-white text-right text-[14px] leading-[128%] tracking-[1px] break-words">{tour.labelValue || "5"}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* FIXED: Keeps the ending space consistent */}
            <div className="w-1 shrink-0" />
          </div>
        </div>

        {/* Footer Button - No Change */}
        <div className="text-center mt-12 md:mt-16">
          <button className="w-[218px] h-[52px] rounded-[50px] bg-[#AE2020] hover:bg-[#AE2020] text-white text-[14px] font-[700] tracking-[1.2px] uppercase transition-all font-manrope-regular cursor-pointer ">
            Make A Reservation
          </button>
        </div>
      </div>
    </section>
  );
}