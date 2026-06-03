import Image from "next/image";

const galleryImages = [
    { id: 1, src: "/images/gallery/1.jpg", height: "h-[220px]" },
    { id: 2, src: "/images/gallery/2.jpg", height: "h-[160px]" },
    { id: 3, src: "/images/gallery/3.jpg", height: "h-[320px]" },
    { id: 4, src: "/images/gallery/4.jpg", height: "h-[220px]" },
    { id: 5, src: "/images/gallery/5.jpg", height: "h-[180px]" },
    { id: 6, src: "/images/gallery/6.jpg", height: "h-[260px]" },
    { id: 7, src: "/images/gallery/7.jpg", height: "h-[180px]" },
    { id: 8, src: "/images/gallery/8.jpg", height: "h-[320px]" },
    { id: 9, src: "/images/gallery/9.jpg", height: "h-[260px]" },
    { id: 10, src: "/images/gallery/10.jpg", height: "h-[260px]" },
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
            {/* Hero */}
            <section className="px-4 mt-4">
                <div className="relative h-[350px] md:h-[420px] overflow-hidden rounded-2xl">
                    <Image
                        src="/images/gallery-banner.jpg"
                        alt="Gallery"
                        fill
                        priority
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/20" />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="font-ogg-regular  text-white text-5xl md:text-7xl">
                            Gallery
                        </h1>
                    </div>
                </div>
            </section>



            <section className="bg-[#9BB9DA]">
                <div className="max-w-[1400px] mx-auto px-6 mt-4">
                    <div className="overflow-x-auto scrollbar-hide">
                        <div className="flex w-max gap-3 px-4 py-4">
                            {categories.map((item, index) => (
                                <button
                                    key={item}
                                    className={`
    whitespace-nowrap 
    px-5 
    py-2.5 
    rounded-full 
    uppercase 
    font-semibold 
    font-sans                  /* Agat pure setup mein Manrope global config hai, nahi toh custom class likhein */
    text-[13px]                /* FIXED: Figma Exact 13px font size */
    leading-[19.5px]           /* FIXED: Figma Exact 19.5px line-height */
    tracking-[0.4px]           /* FIXED: Figma Exact 0.4px letter-spacing */
    transition-all 
    duration-200
    ${index === 0
                                            ? "bg-white text-[#7c95b0]"
                                            : "text-white hover:bg-white/10"
                                        }
  `}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="max-w-[1400px] mx-auto px-6 py-8">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
                    {galleryImages.map((image) => (
                        <div
                            key={image.id}
                            className={`relative ${image.height} overflow-hidden rounded-lg break-inside-avoid`}
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