"use client";

import { useState } from "react";
import Image from "next/image";
import { accommodations } from "@/lib/data/accommodations";
import Link from "next/link";

export default function AccommodationsPage() {
    const [filter, setFilter] = useState("all");

    const filtered =
        filter === "all"
            ? accommodations
            : accommodations.filter(
                (item) => item.category === filter
            );

    return (
        <main className="bg-[#FFFEF8] min-h-screen font-sans antialiased text-[#444444]">
            {/* Hero Section */}
            <section className="px-4 mt-4">
                <div className="relative h-[350px] md:h-[420px] overflow-hidden rounded-2xl max-w-[1340px] mx-auto">
                    <Image
                        src="/images/accommodation-banner.jpg"
                        alt="Gallery"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="font-serif text-white text-5xl md:text-7xl font-ogg-regular text-center font-light tracking-wide">
                            Find Your Perfect
                            <br />
                            Escape
                        </h1>
                    </div>
                </div>
            </section>

            {/* FIGMA FILTER INTERFACE INTEGRATION */}
            <section className="max-w-[1280px] mx-auto px-6 pt-10 pb-2">

                {/* Upper Layer: Dropdown Actions & Status Counter (image_fe7e0a.png) */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200/60 pb-6">
                    <div className="flex flex-wrap items-center gap-3 text-[11px] font-semibold tracking-widest text-[#7c828c]">

                        {/* Filter Indicator Label */}
                        <div className="flex items-center gap-2 pr-2 uppercase text-[#5c626d]">
                            <svg className="w-4 h-4 text-[#8A7E74]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                            </svg>
                            <span className="font-manrope-regular">Filter</span>
                        </div>

                        {/* Any Price Dynamic Action */}
                        <button className="flex items-center justify-between gap-6 px-5 py-2.5 bg-white border border-gray-200 rounded-full hover:border-gray-400 transition-colors uppercase">
                            <span className="font-manrope-regular">Any Price</span>
                            <span className="text-[9px] text-gray-400">▼</span>
                        </button>

                        {/* Occupancy Action Dropdown */}
                        <button className="flex items-center justify-between gap-6 px-5 py-2.5 bg-white border border-gray-200 rounded-full hover:border-gray-400 transition-colors uppercase">
                            <span className="font-manrope-regular">Occupancy</span>
                            <span className="text-[9px] text-gray-400">▼</span>
                        </button>
                    </div>

                    {/* Dynamic count status indicator */}
                    <div className="text-[13px] font-light text-[#8a929d] tracking-normal italic font-manrope-regular sm:text-right">
                        {filtered.length} {filtered.length === 1 ? "sanctuary" : "sanctuaries"}
                    </div>
                </div>



            </section>

            {/* Listings Section */}
            <section className="max-w-[1280px] mx-auto px-6 py-10">
                <div className="space-y-12">
                    {filtered.map((item, index) => (
                        <div
                            key={item.id}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center pt-10 ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                                }`}
                        >
                            {/* Image Showcase Box */}
                            <div className="relative h-[280px] md:h-[420px] rounded-2xl overflow-hidden bg-gray-100">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content Block */}
                            <div>
                                <p className="uppercase tracking-[2px] text-[10px] text-[#AE2020] font-bold font-jako-bold">
                                    {item.subtitle || "Sanctuary Escape"}
                                </p>

                                <h2 className="font-serif text-[42px] md:text-[52px] leading-tight font-ogg-regular text-[#88A6C8] mt-2 font-light">
                                    {item.title}
                                </h2>

                                <p className="text-[#AE2020] text-[24px] mt-2 font-medium font-jako-bold">
                                    Starting from ${item.price} / night
                                </p>

                                <p className="mt-6 text-[#6B6B6B] text-[14px] leading-relaxed max-w-[520px] font-light font-manrope-regular">
                                    {item.description}
                                </p>

                                <div className="flex flex-wrap gap-8 mt-6 text-[#8B8B8B] text-xs font-light tracking-wide">
                                    <span className="flex items-center gap-1.5 font-manrope-regular">
                                        <svg
                                            className="w-5 h-5 text-[#AE2020]"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.75"
                                            viewBox="0 0 24 24"
                                        >
                                            {/* Front Primary Person Header & Torso */}
                                            <circle cx="10" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round" />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2 21v-1.5a4.5 4.5 0 0 1 4.5-4.5h7a4.5 4.5 0 0 1 4.5 4.5V21"
                                            />

                                            {/* Secondary Back Person (Shadow/Double Guest Layout Effect) */}
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M16 3.13a4 4 0 0 1 0 7.75M22 21v-1.5a4.5 4.5 0 0 0-3-4.15"
                                            />
                                        </svg>
                                        Up to {item.guests} guests
                                    </span>
                                    <span className="flex items-center gap-1.5 font-manrope-regular">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.33333 2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V5.33333" stroke="#AE2020" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.9998 5.33333V3.33333C13.9998 2.97971 13.8594 2.64057 13.6093 2.39052C13.3593 2.14048 13.0201 2 12.6665 2H10.6665" stroke="#AE2020" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 10.666V12.666C2 13.0196 2.14048 13.3588 2.39052 13.6088C2.64057 13.8589 2.97971 13.9993 3.33333 13.9993H5.33333" stroke="#AE2020" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.6665 13.9993H12.6665C13.0201 13.9993 13.3593 13.8589 13.6093 13.6088C13.8594 13.3588 13.9998 13.0196 13.9998 12.666V10.666" stroke="#AE2020" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                                        {item.area} sq m</span>
                                </div>

                                <div className="border-t border-gray-200/60 my-6"></div>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {item.features.map((feature: string) => (
                                        <span
                                            key={feature}
                                            className="px-3 py-1.5 rounded-full border border-gray-200/80 font-manrope-regular text-[#66839C] text-xs font-light bg-white/50"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    href={`/accommodations/${item.slug}`}
                                    className="inline-flex bg-[#AE2020] hover:bg-[#AE2020] transition text-white px-8 py-3.5 rounded-full uppercase tracking-[2px] text-[11px] font-semibold shadow-sm"
                                >
                                    View & Book →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}