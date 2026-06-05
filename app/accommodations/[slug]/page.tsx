import Image from "next/image";
import { notFound } from "next/navigation";
import { accommodations } from "@/lib/data/accommodations";
import BookingBox from "@/lib/components/accommodations/BookingBox";


export default async function AccommodationDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const room = accommodations.find(
        (item) => item.slug === slug
    );

    if (!room) notFound();

    return (
        <main className="bg-[#FFFEF8] min-h-screen">

            <section className="px-4 mt-4 relative ">
                <div className="relative h-[420px] md:h-[520px] overflow-hidden rounded-[24px]">
                    <Image
                        src="/images/accommodation-banner.jpg"
                        alt="Gallery"
                        fill
                        priority
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/40" />

                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="font-serif text-white text-[45px] md:text-[65px] font-[400] font-ogg-regular text-center tracking-wide leading-none">
                            Book Your Stay
                        </h1>
                    </div>
                </div>
            </section>


            <section className="max-w-[1140px] mx-auto relative z-30 px-6 mt-6 sm:-mt-[70px] md:-mt-[85px] mb-4 sm:mb-0 hidden lg:block">

                <div className="grid grid-cols-2 gap-2.5 sm:flex sm:items-end sm:gap-2.5">
                    <button className="bg-[#AF2F2C] text-[#FAF0E2] px-3 sm:px-7 py-4 sm:pt-5 sm:pb-4 lg:text-[16px] text-[12px] tracking-wider uppercase font-bold rounded-xl sm:rounded-b-none sm:rounded-t-xl shrink-0 h-[54px] sm:h-[58px] transition-all duration-150 font-jeko-black w-full sm:w-auto cursor-pointer">
                        5-Bedroom Beach House
                    </button>
                    <button className="bg-[#E5D7D7] hover:bg-[#dbd2c8] text-[#8C7A7A] px-3 sm:px-6 py-4 sm:py-3.5 text-[12px] lg:text-[16px] tracking-wider uppercase font-bold rounded-xl sm:rounded-b-none sm:rounded-t-xl shrink-0 font-jeko-black h-[54px] sm:h-[48px] transition-all duration-150 w-full sm:w-auto cursor-pointer">
                        Deluxe Room
                    </button>
                    <button className="bg-[#E5D7D7] hover:bg-[#dbd2c8] text-[#8C7A7A] px-3 sm:px-6 py-4 sm:py-3.5 text-[12px] lg:text-[16px] tracking-wider uppercase font-bold rounded-xl sm:rounded-b-none sm:rounded-t-xl shrink-0 font-jeko-black h-[54px] sm:h-[48px] transition-all duration-150 w-full sm:w-auto cursor-pointer">
                        Standard Room
                    </button>
                    <button className="bg-[#E5D7D7] hover:bg-[#dbd2c8] text-[#8C7A7A] px-3 sm:px-6 py-4 sm:py-3.5 text-[12px] lg:text-[16px] tracking-wider uppercase  rounded-xl sm:rounded-b-none sm:rounded-t-xl shrink-0 font-jeko-black h-[54px] sm:h-[48px] transition-all duration-150 w-full sm:w-auto cursor-pointer">
                        Chalets
                    </button>
                </div>
            </section>

            {/* Main Details Showcase Card */}
            <section className="max-w-[1140px] mx-auto relative z-20 px-6 pb-20 hidden lg:block">

                <div className="bg-white rounded-3xl sm:rounded-t-none sm:rounded-tr-3xl sm:rounded-b-3xl shadow-xl border border-[#ebe5dd] p-6 md:p-10">
                    <div className="grid lg:grid-cols-12 gap-10 items-start">

                        {/* LEFT COLUMN: Gallery & Price Showcase */}
                        <div className="w-full lg:col-span-5 shrink-0">
                            <div className="relative rounded-2xl overflow-hidden bg-[#f9f8f6]">
                                <div className="absolute top-4 left-4 z-10 bg-[#C22D28] text-white px-4 py-2 rounded-xl text-base font-semibold shadow-md">
                                    ${room.price || "650"}<span className="text-xs font-jeko-black font-normal opacity-90 ml-0.5">/night</span>
                                </div>

                                <div className="relative h-[360px] md:h-[440px]">
                                    <Image
                                        src={room.image}
                                        alt={room.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>


                            <div className="grid grid-cols-3 gap-3 mt-4">
                                <div className="relative h-[65px] rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition">
                                    <Image src={room.image} alt="" fill className="object-cover" />
                                </div>

                                <div className="relative h-[65px] rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition">
                                    <Image src={room.image} alt="" fill className="object-cover" />
                                </div>


                                <div className="relative h-[65px] rounded-xl overflow-hidden cursor-pointer group transition">

                                    <Image src={room.image} alt="Gallery" fill className="object-cover" />


                                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/75 flex items-center justify-center transition-colors duration-200">
                                        <span className="text-white text-[11px] tracking-widest uppercase font-medium">
                                            Gallery
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Description & SVG Icons Integration */}
                        <div className="w-full lg:col-span-7 flex flex-col justify-between min-h-[440px] pt-2">
                            <div>
                                <h2 className="font-ogg-regular text-[#7CA5C8] text-[38px] font-[500] lg:text-[38px] leading-tight ">
                                    {room.title || "The Villa"}
                                </h2>

                                <p className="mt-4 text-[#242424] text-[16px] font-[400] leading-relaxed max-w-[540px] font-jako-regular">
                                    {room.description || "Experience a sanctuary where the only schedule is the tide and the only dress code is the sand. Immerse yourself in uncompromising comfort meets brutalist architecture."}
                                </p>

                                {/* Features Grid */}
                                <div className="grid grid-cols-2 gap-y-5 gap-x-8 mt-10 text-[13px] text-[#444]">
                                    {/* Hot & Cold Shower */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A3.75 3.75 0 0 0 2.25 7.5v10.5a1.5 1.5 0 0 0 1.5 1.5H18a1.5 1.5 0 0 0 1.5-1.5V7.5A3.75 3.75 0 0 0 15.75 3.75h-1.5m-6.75 0v3.75m6.75-3.75v3.75M5.25 7.5h13.5M7.5 11.25h.008v.008H7.5v-.008Zm3.75 0h.008v.008h-.008v-.008Zm3.75 0h.008v.008H15v-.008Zm-7.5 3.75h.008v.008H7.5v-.008Zm3.75 0h.008v.008h-.008v-.008Zm3.75 0h.008v.008H15v-.008Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Hot & Cold Shower</span>
                                    </div>

                                    {/* Air Conditioning */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75A1.875 1.875 0 0 1 20.25 6.375v1.5a1.875 1.875 0 0 1-1.875 1.875H5.625A1.875 1.875 0 0 1 3.75 7.875v-1.5A1.875 1.875 0 0 1 5.625 4.5Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Air Conditioning</span>
                                    </div>

                                    {/* High-Speed WiFi */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856a9.75 9.75 0 0 1 13.788 0M1.924 8.674a14.25 14.25 0 0 1 20.152 0M12 19.25h.008v.008H12v-.008Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">High-Speed WiFi</span>
                                    </div>

                                    {/* Equipped Kitchenette */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Equipped Kitchenette</span>
                                    </div>

                                    {/* Mini Fridge */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75h-9A2.25 2.25 0 0 0 5.25 6v12a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25Zm-6.75 4.5h.008v.008h-.008V8.25Zm0 4.5h.008v.008h-.008v-.008Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Mini Fridge</span>
                                    </div>

                                    {/* Flat Screen TV */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-9-3v3m6-3v3M3.75 3.75h16.5A1.5 1.5 0 0 1 21.75 5.25v10.5a1.5 1.5 0 0 1-1.5 1.5H3.75A1.5 1.5 0 0 1 2.25 15.75V5.25A1.5 1.5 0 0 1 3.75 3.75Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Flat Screen TV</span>
                                    </div>

                                    {/* On-Request Laundry */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#AF2F2C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.50 6h15m-15 12h15" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">On-Request Laundry</span>
                                    </div>

                                    {/* Butler Service */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#AF2F2C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Butler Service</span>
                                    </div>
                                </div>
                            </div>

                            {/* Booking Box */}
                            <div className="w-full max-w-[513px] min-h-[188px] bg-[#FFFEF8] border border-[#E7DDD4] rounded-[12px] p-[24px] mt-10">
                                {/* <div className="grid grid-cols-3">
                                   
                                    <div className="pr-2 sm:pr-6 border-r border-[#D8D0C8]">
                                        <p className="text-[10px] sm:text-[11px] lg:text-[12px] font-[400] uppercase tracking-[1px] sm:tracking-[2px] text-[#A69C94] mb-2 font-jako-regular">
                                            Check In
                                        </p>
                                        <div className="flex items-center justify-between gap-1">
                                            <span className="text-[#BC2623] text-[13px] sm:text-[14px] lg:text-[14px] font-medium tracking-[0.5px] sm:tracking-[1px]">
                                                2026-05-28
                                            </span>
                                            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                                            </svg>
                                        </div>
                                    </div>

                                   
                                    <div className="px-2 sm:px-6 border-r border-[#D8D0C8]">
                                        <p className="text-[10px] sm:text-[11px] lg:text-[12px] font-[400] uppercase tracking-[1px] sm:tracking-[2px] text-[#A69C94] mb-2 font-jako-regular">
                                            Check Out
                                        </p>
                                        <div className="flex items-center justify-between gap-1">
                                            <span className="text-[#BC2623] text-[13px] sm:text-[14px] lg:text-[14px] font-medium tracking-[0.5px] sm:tracking-[1px]">
                                                2026-05-28
                                            </span>
                                            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                                            </svg>
                                        </div>
                                    </div>

                                   
                                    <div className="pl-2 sm:pl-6">
                                       <p className="text-[10px] sm:text-[11px] lg:text-[12px] font-[400] uppercase tracking-[1px] sm:tracking-[2px] text-[#A69C94] mb-2 font-jako-regular">
                                            Guests
                                        </p>
                                        <div className="flex items-center justify-between gap-1">
                                            <span className="text-[#BC2623] text-[13px] sm:text-[14px] lg:text-[14px] font-medium tracking-[0.5px] sm:tracking-[1px] uppercase">
                                                2 Adults
                                            </span>
                                            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                                            </svg>
                                        </div>
                                    </div>
                                </div> */}
                                <BookingBox />

                                <div className="mt-9 flex justify-center sm:block">
                                    <button className="w-full max-w-[304px] h-[62px] rounded-full border border-[#BC2623] bg-[#BC2623] text-white uppercase text-[14px] font-[400] font-jako-bold tracking-[1.5px] shadow-[0_10px_25px_rgba(0,0,0,0.18)] transition-all duration-300 hover:bg-[#A92320] **:">
                                        Complete Reservation
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>


            <section className="max-w-[1140px] mx-auto relative z-30 px-6 mt-6   sm:-mt-[70px] md:-mt-[85px] mb-4 sm:mb-0 lg:hidden">

                <div className="grid grid-cols-2 gap-2.5 sm:flex sm:items-end sm:gap-2.5">
                    <button className="bg-[#AF2F2C] text-[#FAF0E2] px-3 sm:px-7 py-4 sm:pt-5 sm:pb-4 lg:text-[16px] text-[12px] tracking-wider uppercase font-bold rounded-xl sm:rounded-b-none sm:rounded-t-xl shrink-0 h-[54px] sm:h-[58px] transition-all duration-150 font-jeko-black w-full sm:w-auto cursor-pointer">
                        5-Bedroom Beach House
                    </button>

                </div>
            </section>

            {/* Main Details Showcase Card */}
            <section className="lg:hidden max-w-[1140px] mx-auto relative z-20 px-6 pb-20">

                <div className="bg-white rounded-3xl sm:rounded-t-none sm:rounded-tr-3xl sm:rounded-b-3xl shadow-xl border border-[#ebe5dd] p-6 md:p-10">
                    <div className="grid lg:grid-cols-12 gap-10 items-start">

                        {/* LEFT COLUMN: Gallery & Price Showcase */}
                        <div className="w-full lg:col-span-5 shrink-0">
                            <div className="relative rounded-2xl overflow-hidden bg-[#f9f8f6]">
                                <div className="absolute top-4 left-4 z-10 bg-[#C22D28] text-white px-4 py-2 rounded-xl text-base font-semibold shadow-md">
                                    ${room.price || "650"}<span className="text-xs font-jeko-black font-normal opacity-90 ml-0.5">/night</span>
                                </div>

                                <div className="relative h-[360px] md:h-[440px]">
                                    <Image
                                        src={room.image}
                                        alt={room.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>


                            <div className="grid grid-cols-3 gap-3 mt-4">
                                <div className="relative h-[65px] rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition">
                                    <Image src={room.image} alt="" fill className="object-cover" />
                                </div>

                                <div className="relative h-[65px] rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition">
                                    <Image src={room.image} alt="" fill className="object-cover" />
                                </div>


                                <div className="relative h-[65px] rounded-xl overflow-hidden cursor-pointer group transition">

                                    <Image src={room.image} alt="Gallery" fill className="object-cover" />


                                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/75 flex items-center justify-center transition-colors duration-200">
                                        <span className="text-white text-[11px] tracking-widest uppercase font-medium">
                                            Gallery
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Description & SVG Icons Integration */}
                        <div className="w-full lg:col-span-7 flex flex-col justify-between min-h-[440px] pt-2">
                            <div>
                                <h2 className="font-ogg-regular text-[#7CA5C8] text-[38px] font-[500] lg:text-[38px] leading-tight ">
                                    {room.title || "The Villa"}
                                </h2>

                                <p className="mt-4 text-[#242424] text-[16px] font-[400] leading-relaxed max-w-[540px] font-jako-regular">
                                    {room.description || "Experience a sanctuary where the only schedule is the tide and the only dress code is the sand. Immerse yourself in uncompromising comfort meets brutalist architecture."}
                                </p>

                                {/* Features Grid */}
                                <div className="grid grid-cols-2 gap-y-5 gap-x-8 mt-10 text-[13px] text-[#444]">
                                    {/* Hot & Cold Shower */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A3.75 3.75 0 0 0 2.25 7.5v10.5a1.5 1.5 0 0 0 1.5 1.5H18a1.5 1.5 0 0 0 1.5-1.5V7.5A3.75 3.75 0 0 0 15.75 3.75h-1.5m-6.75 0v3.75m6.75-3.75v3.75M5.25 7.5h13.5M7.5 11.25h.008v.008H7.5v-.008Zm3.75 0h.008v.008h-.008v-.008Zm3.75 0h.008v.008H15v-.008Zm-7.5 3.75h.008v.008H7.5v-.008Zm3.75 0h.008v.008h-.008v-.008Zm3.75 0h.008v.008H15v-.008Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Hot & Cold Shower</span>
                                    </div>

                                    {/* Air Conditioning */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75A1.875 1.875 0 0 1 20.25 6.375v1.5a1.875 1.875 0 0 1-1.875 1.875H5.625A1.875 1.875 0 0 1 3.75 7.875v-1.5A1.875 1.875 0 0 1 5.625 4.5Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Air Conditioning</span>
                                    </div>

                                    {/* High-Speed WiFi */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856a9.75 9.75 0 0 1 13.788 0M1.924 8.674a14.25 14.25 0 0 1 20.152 0M12 19.25h.008v.008H12v-.008Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">High-Speed WiFi</span>
                                    </div>

                                    {/* Equipped Kitchenette */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Equipped Kitchenette</span>
                                    </div>

                                    {/* Mini Fridge */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75h-9A2.25 2.25 0 0 0 5.25 6v12a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25Zm-6.75 4.5h.008v.008h-.008V8.25Zm0 4.5h.008v.008h-.008v-.008Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Mini Fridge</span>
                                    </div>

                                    {/* Flat Screen TV */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-9-3v3m6-3v3M3.75 3.75h16.5A1.5 1.5 0 0 1 21.75 5.25v10.5a1.5 1.5 0 0 1-1.5 1.5H3.75A1.5 1.5 0 0 1 2.25 15.75V5.25A1.5 1.5 0 0 1 3.75 3.75Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Flat Screen TV</span>
                                    </div>

                                    {/* On-Request Laundry */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#AF2F2C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.50 6h15m-15 12h15" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">On-Request Laundry</span>
                                    </div>

                                    {/* Butler Service */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#AF2F2C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Butler Service</span>
                                    </div>
                                </div>
                            </div>

                            {/* Booking Box */}
                            <div className="w-full max-w-[513px] min-h-[188px] bg-[#FFFEF8] border border-[#E7DDD4] rounded-[12px] p-[24px] mt-10">
                                {/* <div className="grid grid-cols-3">
                                   
                                    <div className="pr-2 sm:pr-6 border-r border-[#D8D0C8]">
                                        <p className="text-[10px] sm:text-[11px] lg:text-[12px] font-[400] uppercase tracking-[1px] sm:tracking-[2px] text-[#A69C94] mb-2 font-jako-regular">
                                            Check In
                                        </p>
                                        <div className="flex items-center justify-between gap-1">
                                            <span className="text-[#BC2623] text-[13px] sm:text-[14px] lg:text-[14px] font-medium tracking-[0.5px] sm:tracking-[1px]">
                                                2026-05-28
                                            </span>
                                            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                                            </svg>
                                        </div>
                                    </div>

                                   
                                    <div className="px-2 sm:px-6 border-r border-[#D8D0C8]">
                                        <p className="text-[10px] sm:text-[11px] lg:text-[12px] font-[400] uppercase tracking-[1px] sm:tracking-[2px] text-[#A69C94] mb-2 font-jako-regular">
                                            Check Out
                                        </p>
                                        <div className="flex items-center justify-between gap-1">
                                            <span className="text-[#BC2623] text-[13px] sm:text-[14px] lg:text-[14px] font-medium tracking-[0.5px] sm:tracking-[1px]">
                                                2026-05-28
                                            </span>
                                            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                                            </svg>
                                        </div>
                                    </div>

                                   
                                    <div className="pl-2 sm:pl-6">
                                       <p className="text-[10px] sm:text-[11px] lg:text-[12px] font-[400] uppercase tracking-[1px] sm:tracking-[2px] text-[#A69C94] mb-2 font-jako-regular">
                                            Guests
                                        </p>
                                        <div className="flex items-center justify-between gap-1">
                                            <span className="text-[#BC2623] text-[13px] sm:text-[14px] lg:text-[14px] font-medium tracking-[0.5px] sm:tracking-[1px] uppercase">
                                                2 Adults
                                            </span>
                                            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                                            </svg>
                                        </div>
                                    </div>
                                </div> */}
                                <BookingBox />

                                <div className="mt-9 flex justify-center sm:block">
                                    <button className="w-full max-w-[304px] h-[62px] rounded-full border border-[#BC2623] bg-[#BC2623] text-white uppercase text-[14px] font-[400] tracking-[1.5px] shadow-[0_10px_25px_rgba(0,0,0,0.18)] transition-all duration-300 hover:bg-[#A92320]">
                                        Complete Reservation
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section className="max-w-[1140px] mx-auto relative z-30 px-6  sm:-mt-[70px] md:-mt-[85px] mb-4 sm:mb-0 lg:hidden">

                <div className="grid grid-cols-2 gap-2.5 sm:flex sm:items-end sm:gap-2.5">
                    <button className="bg-[#AF2F2C] text-[#FAF0E2] px-3 sm:px-7 py-4 sm:pt-5 sm:pb-4 lg:text-[16px] text-[12px] tracking-wider uppercase font-bold rounded-xl sm:rounded-b-none sm:rounded-t-xl shrink-0 h-[54px] sm:h-[58px] transition-all duration-150 font-jeko-black w-full sm:w-auto cursor-pointer">
                        Deluxe Room
                    </button>

                </div>
            </section>
            {/* Main Details Showcase Card */}
            <section className="lg:hidden max-w-[1140px] mx-auto relative z-20 px-6 pb-20">

                <div className="bg-white rounded-3xl sm:rounded-t-none sm:rounded-tr-3xl sm:rounded-b-3xl shadow-xl border border-[#ebe5dd] p-6 md:p-10">
                    <div className="grid lg:grid-cols-12 gap-10 items-start">

                        {/* LEFT COLUMN: Gallery & Price Showcase */}
                        <div className="w-full lg:col-span-5 shrink-0">
                            <div className="relative rounded-2xl overflow-hidden bg-[#f9f8f6]">
                                <div className="absolute top-4 left-4 z-10 bg-[#C22D28] text-white px-4 py-2 rounded-xl text-base font-semibold shadow-md">
                                    ${room.price || "650"}<span className="text-xs font-jeko-black font-normal opacity-90 ml-0.5">/night</span>
                                </div>

                                <div className="relative h-[360px] md:h-[440px]">
                                    <Image
                                        src={room.image}
                                        alt={room.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>


                            <div className="grid grid-cols-3 gap-3 mt-4">
                                <div className="relative h-[65px] rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition">
                                    <Image src={room.image} alt="" fill className="object-cover" />
                                </div>

                                <div className="relative h-[65px] rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition">
                                    <Image src={room.image} alt="" fill className="object-cover" />
                                </div>


                                <div className="relative h-[65px] rounded-xl overflow-hidden cursor-pointer group transition">

                                    <Image src={room.image} alt="Gallery" fill className="object-cover" />


                                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/75 flex items-center justify-center transition-colors duration-200">
                                        <span className="text-white text-[11px] tracking-widest uppercase font-medium">
                                            Gallery
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Description & SVG Icons Integration */}
                        <div className="w-full lg:col-span-7 flex flex-col justify-between min-h-[440px] pt-2">
                            <div>
                                <h2 className="font-ogg-regular text-[#7CA5C8] text-[38px] font-[500] lg:text-[38px] leading-tight ">
                                    {room.title || "The Villa"}
                                </h2>

                                <p className="mt-4 text-[#242424] text-[16px] font-[400] leading-relaxed max-w-[540px] font-jako-regular">
                                    {room.description || "Experience a sanctuary where the only schedule is the tide and the only dress code is the sand. Immerse yourself in uncompromising comfort meets brutalist architecture."}
                                </p>

                                {/* Features Grid */}
                                <div className="grid grid-cols-2 gap-y-5 gap-x-8 mt-10 text-[13px] text-[#444]">
                                    {/* Hot & Cold Shower */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A3.75 3.75 0 0 0 2.25 7.5v10.5a1.5 1.5 0 0 0 1.5 1.5H18a1.5 1.5 0 0 0 1.5-1.5V7.5A3.75 3.75 0 0 0 15.75 3.75h-1.5m-6.75 0v3.75m6.75-3.75v3.75M5.25 7.5h13.5M7.5 11.25h.008v.008H7.5v-.008Zm3.75 0h.008v.008h-.008v-.008Zm3.75 0h.008v.008H15v-.008Zm-7.5 3.75h.008v.008H7.5v-.008Zm3.75 0h.008v.008h-.008v-.008Zm3.75 0h.008v.008H15v-.008Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Hot & Cold Shower</span>
                                    </div>

                                    {/* Air Conditioning */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75A1.875 1.875 0 0 1 20.25 6.375v1.5a1.875 1.875 0 0 1-1.875 1.875H5.625A1.875 1.875 0 0 1 3.75 7.875v-1.5A1.875 1.875 0 0 1 5.625 4.5Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Air Conditioning</span>
                                    </div>

                                    {/* High-Speed WiFi */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856a9.75 9.75 0 0 1 13.788 0M1.924 8.674a14.25 14.25 0 0 1 20.152 0M12 19.25h.008v.008H12v-.008Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">High-Speed WiFi</span>
                                    </div>

                                    {/* Equipped Kitchenette */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Equipped Kitchenette</span>
                                    </div>

                                    {/* Mini Fridge */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75h-9A2.25 2.25 0 0 0 5.25 6v12a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25Zm-6.75 4.5h.008v.008h-.008V8.25Zm0 4.5h.008v.008h-.008v-.008Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Mini Fridge</span>
                                    </div>

                                    {/* Flat Screen TV */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-9-3v3m6-3v3M3.75 3.75h16.5A1.5 1.5 0 0 1 21.75 5.25v10.5a1.5 1.5 0 0 1-1.5 1.5H3.75A1.5 1.5 0 0 1 2.25 15.75V5.25A1.5 1.5 0 0 1 3.75 3.75Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Flat Screen TV</span>
                                    </div>

                                    {/* On-Request Laundry */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#AF2F2C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.50 6h15m-15 12h15" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">On-Request Laundry</span>
                                    </div>

                                    {/* Butler Service */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#AF2F2C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Butler Service</span>
                                    </div>
                                </div>
                            </div>

                            {/* Booking Box */}
                            <div className="w-full max-w-[513px] min-h-[188px] bg-[#FFFEF8] border border-[#E7DDD4] rounded-[12px] p-[24px] mt-10">
                              
                                <BookingBox />

                                <div className="mt-9 flex justify-center sm:block">
                                    <button className="w-full max-w-[304px] h-[62px] rounded-full border border-[#BC2623] bg-[#BC2623] text-white uppercase text-[14px] font-[400] tracking-[1.5px] shadow-[0_10px_25px_rgba(0,0,0,0.18)] transition-all duration-300 hover:bg-[#A92320]">
                                        Complete Reservation
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            <section className="max-w-[1140px] mx-auto relative z-30 px-6  sm:-mt-[70px] md:-mt-[85px] mb-4 sm:mb-0 lg:hidden">

                <div className="grid grid-cols-2 gap-2.5 sm:flex sm:items-end sm:gap-2.5">
                    <button className="bg-[#AF2F2C] text-[#FAF0E2] px-3 sm:px-7 py-4 sm:pt-5 sm:pb-4 lg:text-[16px] text-[12px] tracking-wider uppercase font-bold rounded-xl sm:rounded-b-none sm:rounded-t-xl shrink-0 h-[54px] sm:h-[58px] transition-all duration-150 font-jeko-black w-full sm:w-auto cursor-pointer">
                        Standard Room
                    </button>

                </div>
            </section>
            {/* Main Details Showcase Card */}
            <section className="lg:hidden max-w-[1140px] mx-auto relative z-20 px-6 pb-20">
                <div className="bg-white rounded-3xl sm:rounded-t-none sm:rounded-tr-3xl sm:rounded-b-3xl shadow-xl border border-[#ebe5dd] p-6 md:p-10">
                    <div className="grid lg:grid-cols-12 gap-10 items-start">

                        {/* LEFT COLUMN: Gallery & Price Showcase */}
                        <div className="w-full lg:col-span-5 shrink-0">
                            <div className="relative rounded-2xl overflow-hidden bg-[#f9f8f6]">
                                <div className="absolute top-4 left-4 z-10 bg-[#C22D28] text-white px-4 py-2 rounded-xl text-base font-semibold shadow-md">
                                    ${room.price || "650"}<span className="text-xs font-jeko-black font-normal opacity-90 ml-0.5">/night</span>
                                </div>

                                <div className="relative h-[360px] md:h-[440px]">
                                    <Image
                                        src={room.image}
                                        alt={room.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>


                            <div className="grid grid-cols-3 gap-3 mt-4">
                                <div className="relative h-[65px] rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition">
                                    <Image src={room.image} alt="" fill className="object-cover" />
                                </div>

                                <div className="relative h-[65px] rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition">
                                    <Image src={room.image} alt="" fill className="object-cover" />
                                </div>


                                <div className="relative h-[65px] rounded-xl overflow-hidden cursor-pointer group transition">

                                    <Image src={room.image} alt="Gallery" fill className="object-cover" />


                                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/75 flex items-center justify-center transition-colors duration-200">
                                        <span className="text-white text-[11px] tracking-widest uppercase font-medium">
                                            Gallery
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Description & SVG Icons Integration */}
                        <div className="w-full lg:col-span-7 flex flex-col justify-between min-h-[440px] pt-2">
                            <div>
                                <h2 className="font-ogg-regular text-[#7CA5C8] text-[38px] font-[500] lg:text-[38px] leading-tight ">
                                    {room.title || "The Villa"}
                                </h2>

                                <p className="mt-4 text-[#242424] text-[16px] font-[400] leading-relaxed max-w-[540px] font-jako-regular">
                                    {room.description || "Experience a sanctuary where the only schedule is the tide and the only dress code is the sand. Immerse yourself in uncompromising comfort meets brutalist architecture."}
                                </p>

                                {/* Features Grid */}
                                <div className="grid grid-cols-2 gap-y-5 gap-x-8 mt-10 text-[13px] text-[#444]">
                                    {/* Hot & Cold Shower */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A3.75 3.75 0 0 0 2.25 7.5v10.5a1.5 1.5 0 0 0 1.5 1.5H18a1.5 1.5 0 0 0 1.5-1.5V7.5A3.75 3.75 0 0 0 15.75 3.75h-1.5m-6.75 0v3.75m6.75-3.75v3.75M5.25 7.5h13.5M7.5 11.25h.008v.008H7.5v-.008Zm3.75 0h.008v.008h-.008v-.008Zm3.75 0h.008v.008H15v-.008Zm-7.5 3.75h.008v.008H7.5v-.008Zm3.75 0h.008v.008h-.008v-.008Zm3.75 0h.008v.008H15v-.008Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Hot & Cold Shower</span>
                                    </div>

                                    {/* Air Conditioning */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75A1.875 1.875 0 0 1 20.25 6.375v1.5a1.875 1.875 0 0 1-1.875 1.875H5.625A1.875 1.875 0 0 1 3.75 7.875v-1.5A1.875 1.875 0 0 1 5.625 4.5Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Air Conditioning</span>
                                    </div>

                                    {/* High-Speed WiFi */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856a9.75 9.75 0 0 1 13.788 0M1.924 8.674a14.25 14.25 0 0 1 20.152 0M12 19.25h.008v.008H12v-.008Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">High-Speed WiFi</span>
                                    </div>

                                    {/* Equipped Kitchenette */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Equipped Kitchenette</span>
                                    </div>

                                    {/* Mini Fridge */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75h-9A2.25 2.25 0 0 0 5.25 6v12a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25Zm-6.75 4.5h.008v.008h-.008V8.25Zm0 4.5h.008v.008h-.008v-.008Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Mini Fridge</span>
                                    </div>

                                    {/* Flat Screen TV */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-9-3v3m6-3v3M3.75 3.75h16.5A1.5 1.5 0 0 1 21.75 5.25v10.5a1.5 1.5 0 0 1-1.5 1.5H3.75A1.5 1.5 0 0 1 2.25 15.75V5.25A1.5 1.5 0 0 1 3.75 3.75Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Flat Screen TV</span>
                                    </div>

                                    {/* On-Request Laundry */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#AF2F2C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.50 6h15m-15 12h15" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">On-Request Laundry</span>
                                    </div>

                                    {/* Butler Service */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#AF2F2C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Butler Service</span>
                                    </div>
                                </div>
                            </div>

                            {/* Booking Box */}
                            <div className="w-full max-w-[513px] min-h-[188px] bg-[#FFFEF8] border border-[#E7DDD4] rounded-[12px] p-[24px] mt-10">
                                {/* <div className="grid grid-cols-3">
                                   
                                    <div className="pr-2 sm:pr-6 border-r border-[#D8D0C8]">
                                        <p className="text-[10px] sm:text-[11px] lg:text-[12px] font-[400] uppercase tracking-[1px] sm:tracking-[2px] text-[#A69C94] mb-2 font-jako-regular">
                                            Check In
                                        </p>
                                        <div className="flex items-center justify-between gap-1">
                                            <span className="text-[#BC2623] text-[13px] sm:text-[14px] lg:text-[14px] font-medium tracking-[0.5px] sm:tracking-[1px]">
                                                2026-05-28
                                            </span>
                                            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                                            </svg>
                                        </div>
                                    </div>

                                   
                                    <div className="px-2 sm:px-6 border-r border-[#D8D0C8]">
                                        <p className="text-[10px] sm:text-[11px] lg:text-[12px] font-[400] uppercase tracking-[1px] sm:tracking-[2px] text-[#A69C94] mb-2 font-jako-regular">
                                            Check Out
                                        </p>
                                        <div className="flex items-center justify-between gap-1">
                                            <span className="text-[#BC2623] text-[13px] sm:text-[14px] lg:text-[14px] font-medium tracking-[0.5px] sm:tracking-[1px]">
                                                2026-05-28
                                            </span>
                                            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                                            </svg>
                                        </div>
                                    </div>

                                   
                                    <div className="pl-2 sm:pl-6">
                                       <p className="text-[10px] sm:text-[11px] lg:text-[12px] font-[400] uppercase tracking-[1px] sm:tracking-[2px] text-[#A69C94] mb-2 font-jako-regular">
                                            Guests
                                        </p>
                                        <div className="flex items-center justify-between gap-1">
                                            <span className="text-[#BC2623] text-[13px] sm:text-[14px] lg:text-[14px] font-medium tracking-[0.5px] sm:tracking-[1px] uppercase">
                                                2 Adults
                                            </span>
                                            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                                            </svg>
                                        </div>
                                    </div>
                                </div> */}
                                <BookingBox />

                                <div className="mt-9 flex justify-center sm:block">
                                    <button className="w-full max-w-[304px] h-[62px] rounded-full border border-[#BC2623] bg-[#BC2623] text-white uppercase text-[14px] font-[400] tracking-[1.5px] shadow-[0_10px_25px_rgba(0,0,0,0.18)] transition-all duration-300 hover:bg-[#A92320]">
                                        Complete Reservation
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>


            <section className="max-w-[1140px] mx-auto relative z-30 px-6  sm:-mt-[70px] md:-mt-[85px] mb-4 sm:mb-0 lg:hidden">

                <div className="grid grid-cols-2 gap-2.5 sm:flex sm:items-end sm:gap-2.5">
                    <button className="bg-[#AF2F2C] text-[#FAF0E2] px-3 sm:px-7 py-4 sm:pt-5 sm:pb-4 lg:text-[16px] text-[12px] tracking-wider uppercase font-bold rounded-xl sm:rounded-b-none sm:rounded-t-xl shrink-0 h-[54px] sm:h-[58px] transition-all duration-150 font-jeko-black w-full sm:w-auto cursor-pointer">
                        Chalets
                    </button>

                </div>
            </section>

            {/* Main Details Showcase Card */}
            <section className="lg:hidden max-w-[1140px] mx-auto relative z-20 px-6 pb-20">

                <div className="bg-white rounded-3xl sm:rounded-t-none sm:rounded-tr-3xl sm:rounded-b-3xl shadow-xl border border-[#ebe5dd] p-6 md:p-10">
                    <div className="grid lg:grid-cols-12 gap-10 items-start">

                        {/* LEFT COLUMN: Gallery & Price Showcase */}
                        <div className="w-full lg:col-span-5 shrink-0">
                            <div className="relative rounded-2xl overflow-hidden bg-[#f9f8f6]">
                                <div className="absolute top-4 left-4 z-10 bg-[#C22D28] text-white px-4 py-2 rounded-xl text-base font-semibold shadow-md">
                                    ${room.price || "650"}<span className="text-xs font-jeko-black font-normal opacity-90 ml-0.5">/night</span>
                                </div>

                                <div className="relative h-[360px] md:h-[440px]">
                                    <Image
                                        src={room.image}
                                        alt={room.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>


                            <div className="grid grid-cols-3 gap-3 mt-4">
                                <div className="relative h-[65px] rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition">
                                    <Image src={room.image} alt="" fill className="object-cover" />
                                </div>

                                <div className="relative h-[65px] rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition">
                                    <Image src={room.image} alt="" fill className="object-cover" />
                                </div>


                                <div className="relative h-[65px] rounded-xl overflow-hidden cursor-pointer group transition">

                                    <Image src={room.image} alt="Gallery" fill className="object-cover" />


                                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/75 flex items-center justify-center transition-colors duration-200">
                                        <span className="text-white text-[11px] tracking-widest uppercase font-medium">
                                            Gallery
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Description & SVG Icons Integration */}
                        <div className="w-full lg:col-span-7 flex flex-col justify-between min-h-[440px] pt-2">
                            <div>
                                <h2 className="font-ogg-regular text-[#7CA5C8] text-[38px] font-[500] lg:text-[38px] leading-tight ">
                                    {room.title || "The Villa"}
                                </h2>

                                <p className="mt-4 text-[#242424] text-[16px] font-[400] leading-relaxed max-w-[540px] font-jako-regular">
                                    {room.description || "Experience a sanctuary where the only schedule is the tide and the only dress code is the sand. Immerse yourself in uncompromising comfort meets brutalist architecture."}
                                </p>

                                {/* Features Grid */}
                                <div className="grid grid-cols-2 gap-y-5 gap-x-8 mt-10 text-[13px] text-[#444]">
                                    {/* Hot & Cold Shower */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A3.75 3.75 0 0 0 2.25 7.5v10.5a1.5 1.5 0 0 0 1.5 1.5H18a1.5 1.5 0 0 0 1.5-1.5V7.5A3.75 3.75 0 0 0 15.75 3.75h-1.5m-6.75 0v3.75m6.75-3.75v3.75M5.25 7.5h13.5M7.5 11.25h.008v.008H7.5v-.008Zm3.75 0h.008v.008h-.008v-.008Zm3.75 0h.008v.008H15v-.008Zm-7.5 3.75h.008v.008H7.5v-.008Zm3.75 0h.008v.008h-.008v-.008Zm3.75 0h.008v.008H15v-.008Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Hot & Cold Shower</span>
                                    </div>

                                    {/* Air Conditioning */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75A1.875 1.875 0 0 1 20.25 6.375v1.5a1.875 1.875 0 0 1-1.875 1.875H5.625A1.875 1.875 0 0 1 3.75 7.875v-1.5A1.875 1.875 0 0 1 5.625 4.5Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Air Conditioning</span>
                                    </div>

                                    {/* High-Speed WiFi */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856a9.75 9.75 0 0 1 13.788 0M1.924 8.674a14.25 14.25 0 0 1 20.152 0M12 19.25h.008v.008H12v-.008Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">High-Speed WiFi</span>
                                    </div>

                                    {/* Equipped Kitchenette */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Equipped Kitchenette</span>
                                    </div>

                                    {/* Mini Fridge */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75h-9A2.25 2.25 0 0 0 5.25 6v12a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25Zm-6.75 4.5h.008v.008h-.008V8.25Zm0 4.5h.008v.008h-.008v-.008Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Mini Fridge</span>
                                    </div>

                                    {/* Flat Screen TV */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#C22D28]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-9-3v3m6-3v3M3.75 3.75h16.5A1.5 1.5 0 0 1 21.75 5.25v10.5a1.5 1.5 0 0 1-1.5 1.5H3.75A1.5 1.5 0 0 1 2.25 15.75V5.25A1.5 1.5 0 0 1 3.75 3.75Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Flat Screen TV</span>
                                    </div>

                                    {/* On-Request Laundry */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#AF2F2C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.50 6h15m-15 12h15" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">On-Request Laundry</span>
                                    </div>

                                    {/* Butler Service */}
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#AF2F2C]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                        <span className="font-jako-medium text-[14px] font-[400]">Butler Service</span>
                                    </div>
                                </div>
                            </div>

                            {/* Booking Box */}
                            <div className="w-full max-w-[513px] min-h-[188px] bg-[#FFFEF8] border border-[#E7DDD4] rounded-[12px] p-[24px] mt-10">
                                {/* <div className="grid grid-cols-3">
                                   
                                    <div className="pr-2 sm:pr-6 border-r border-[#D8D0C8]">
                                        <p className="text-[10px] sm:text-[11px] lg:text-[12px] font-[400] uppercase tracking-[1px] sm:tracking-[2px] text-[#A69C94] mb-2 font-jako-regular">
                                            Check In
                                        </p>
                                        <div className="flex items-center justify-between gap-1">
                                            <span className="text-[#BC2623] text-[13px] sm:text-[14px] lg:text-[14px] font-medium tracking-[0.5px] sm:tracking-[1px]">
                                                2026-05-28
                                            </span>
                                            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                                            </svg>
                                        </div>
                                    </div>

                                   
                                    <div className="px-2 sm:px-6 border-r border-[#D8D0C8]">
                                        <p className="text-[10px] sm:text-[11px] lg:text-[12px] font-[400] uppercase tracking-[1px] sm:tracking-[2px] text-[#A69C94] mb-2 font-jako-regular">
                                            Check Out
                                        </p>
                                        <div className="flex items-center justify-between gap-1">
                                            <span className="text-[#BC2623] text-[13px] sm:text-[14px] lg:text-[14px] font-medium tracking-[0.5px] sm:tracking-[1px]">
                                                2026-05-28
                                            </span>
                                            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                                            </svg>
                                        </div>
                                    </div>

                                   
                                    <div className="pl-2 sm:pl-6">
                                       <p className="text-[10px] sm:text-[11px] lg:text-[12px] font-[400] uppercase tracking-[1px] sm:tracking-[2px] text-[#A69C94] mb-2 font-jako-regular">
                                            Guests
                                        </p>
                                        <div className="flex items-center justify-between gap-1">
                                            <span className="text-[#BC2623] text-[13px] sm:text-[14px] lg:text-[14px] font-medium tracking-[0.5px] sm:tracking-[1px] uppercase">
                                                2 Adults
                                            </span>
                                            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
                                            </svg>
                                        </div>
                                    </div>
                                </div> */}
                                <BookingBox />

                                <div className="mt-9 flex justify-center sm:block">
                                    <button className="w-full max-w-[304px] h-[62px] rounded-full border border-[#BC2623] bg-[#BC2623] text-white uppercase text-[14px] font-[400] tracking-[1.5px] shadow-[0_10px_25px_rgba(0,0,0,0.18)] transition-all duration-300 hover:bg-[#A92320]">
                                        Complete Reservation
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}