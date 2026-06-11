"use client";

import Image from "next/image";



const galleryImages = [   
    { id: 1, src: "/images/gallery/1.jpg", height: "h-[282px]" },
    { id: 2, src: "/images/gallery/2.jpg", height: "h-[318px]" },
    { id: 3, src: "/images/gallery/6.jpg", height: "h-[212px]" },
    { id: 4, src: "/images/gallery/4.jpg", height: "h-[477px]" },
    { id: 5, src: "/images/gallery/5.jpg", height: "h-[212px]" },
    { id: 6, src: "/images/gallery/6.jpg", height: "h-[239px]" },
    { id: 7, src: "/images/gallery/7.jpg", height: "h-[477px]" },
    { id: 8, src: "/images/gallery/8.jpg", height: "h-[477px]" },
    { id: 9, src: "/images/gallery/9.jpg", height: "h-[212px]" },
    { id: 10, src: "/images/gallery/10.jpg", height: "h-[477px]" },
];

const categories = [
    "All",
    "Outdoor / Pergola",
    "Deck & Events",
    "Experiences",
    "Interiors",
    "Pool & Beach",
];

export default function GalleryPage() {
    return (
        <main className="bg-[#FFFEF8] min-h-screen">
            {/* Hero Section - No changes needed here */}
            <section className="px-4 mt-4 overflow-hidden">
                <div className="relative h-[350px] md:h-[420px] overflow-hidden rounded-2xl">
                    <Image
                        src="/images/b0a224ce805c59442793004b3d39bd16a7496666 (1).jpg"
                        alt="Gallery"
                        fill
                        priority
                        className="object-cover object-bottom"
                    />
                    <div className="absolute inset-0 bg-[#00000033]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="font-ogg-regular text-white text-[50px] md:text-[65px] font-[400] text-center">
                            Gallery
                        </h1>
                    </div>
                </div>
            </section>

            {/* Category Slider - FIXED ALIGNMENT */}
            <section className="bg-[#9BB9DA] w-full mt-4 ">
                <div className="max-w-[1400px] mx-auto">
                    
                    <div 
                        className="overflow-x-auto px-4 md:px-10 lg:px-[20px]"
                        style={{ 
                            scrollbarWidth: 'none', 
                            msOverflowStyle: 'none',
                            WebkitOverflowScrolling: 'touch' 
                        }}
                    >
                        <div className="flex w-max gap-3 py-5">
                            {categories.map((item, index) => (
                                <button
                                    key={item}
                                    className={`
                                        whitespace-nowrap 
                                        px-6 
                                        cursor-pointer
                                        py-2.5 
                                        rounded-full 
                                        uppercase 
                                        font-sans                
                                        text-[13px]  
                                        font-[700]              
                                        leading-[19.5px]           
                                        tracking-[0.4px]          
                                        transition-all 
                                        duration-200
                                        ${index === 0
                                            ? "bg-white text-[#66839C]"
                                            : "text-[#FFFEF8B2] hover:bg-white/10 hover:text-white"
                                        }
                                    `}
                                >
                                    {item}
                                </button>
                            ))}
                            {/* Extra spacer for end-padding consistency on mobile */}
                            <div className="w-4 md:hidden" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Grid - Stays the same for masonry effect */}
            <section className="max-w-[1400px] mx-auto px-6 py-8">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
                    {galleryImages.map((image) => (
                        <div
                            key={image.id}
                            className={`relative ${image.height} overflow-hidden rounded-lg break-inside-avoid shadow-sm`}
                        >
                            <Image
                                src={image.src}
                                alt={`Gallery ${image.id}`}
                                fill
                                className="object-cover hover:scale-105 transition duration-500"
                            />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}