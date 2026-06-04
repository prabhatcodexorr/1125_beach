"use client";
import Image from "next/image";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function Hero() {
   const [date, setDate] = useState<Date | null>(new Date());

   // अलग से हैंडलर फंक्शन बनाया
   const handleDateChange = (d: Date | null) => {
      setDate(d);
   };
   return (
      // <section className="bg-[#FFFEF8] overflow-hidden w-full pt-4">
      <section className="bg-[#FFFEF8] overflow-hidden w-full md:pt-4">
         {/* <div className="max-w-[1920px] mx-auto px-0 pt-4"> */}
         <div className="max-w-[1920px] mx-auto px-0 md:pt-4">
            {/* Mobile Hero */}

            {/* Mobile Hero */}
            <div
               className="block md:hidden relative h-[720px] overflow-hidden"
            //   style={{
            //     maskImage: "url('/Vector.svg')",
            //     WebkitMaskImage: "url('/Vector.svg')",
            //     maskSize: "100% 100%",
            //     WebkitMaskSize: "100% 100%",
            //     maskRepeat: "no-repeat",
            //     WebkitMaskRepeat: "no-repeat",
            //   }}
            >
               <Image
                  src="/images/hero.jpg"
                  alt="Beach Villa"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
               />

               <div className="absolute inset-0 bg-black/10" />

               {/* <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-6">
                */}
               {/* <div className="absolute inset-0 z-30 flex flex-col items-center justify-end pb-24 text-center px-6"> */}
               <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-6 pt-[180px]">

                  {/* Logo */}
                  <svg
                     width="58"
                     height="72"
                     viewBox="0 0 58 72"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     className="mb-6"
                  >
                     <path d="M11.2569 0V71.4904C9.242 71.6129 6.63761 69.7971 6.63761 69.7971C6.63761 69.7971 -1.76507 44.8382 0.3378 24.2672C2.07113 7.50786 8.79327 1.62118 11.2569 0Z" fill="white" />
                     <path d="M19.2979 66.4666C18.6832 68.5734 18.2793 69.7886 18.2793 69.7886C18.2793 69.7886 15.6451 71.6006 13.6694 71.4927V61.8574L19.2979 66.4666Z" fill="white" />
                     <path d="M19.9898 64.2663L13.6694 59.1227V0C16.1342 1.61099 22.8506 7.51315 24.5848 24.3166C26.0812 38.9095 22.3137 55.6985 19.9898 64.2663Z" fill="white" />
                     <path d="M43.4197 0V71.4904C41.4043 71.6129 38.7992 69.7971 38.7992 69.7971C38.7992 69.7971 30.3591 44.8382 32.5154 24.2672C34.2227 7.50786 40.9555 1.62118 43.4197 0Z" fill="white" />
                     <path d="M52.2644 66.3909C51.6284 68.5735 51.1928 69.8296 51.1928 69.8296C51.1928 69.8296 48.6225 71.5981 46.636 71.4929V61.8574L52.2644 66.3909Z" fill="white" />
                     <path d="M52.9799 63.463L46.636 58.3176V0C49.0678 1.59588 55.8082 7.44266 57.5439 24.0885C59.0506 38.4299 55.3324 54.904 52.9799 63.463Z" fill="white" />
                     <path d="M49.743 62.4714L43.7449 57.5779V57.5234L49.743 62.4714Z" fill="white" />
                  </svg>

                  <h1
                     className="
      font-ogg-trial
      text-white
      text-[42px]
      leading-[46px]
      tracking-[-1px]
      "
                  >
                     Lose Your Shoes.
                     <br />
                     Find Your Soul.
                  </h1>

                  <p
                     className="
      mt-4
      max-w-[320px]
      text-white/95
      text-[14px]
      leading-relaxed
      font-manrope-regular
      "
                  >
                     Experience a sanctuary where the only schedule is the tide and
                     the only dress code is the sand.
                  </p>
                  <form className="mt-6 w-[92%] max-w-[360px] rounded-full bg-white p-[4px] shadow-xl">
                     <div className="flex items-center">

                        <div className="flex-1 px-4">
                           <DatePicker
                              selected={date}
                              onChange={handleDateChange}
                              placeholderText="Select Date"
                              dateFormat="yyyy-MM-dd"
                              className="
          w-full
          bg-transparent
          outline-none
          text-[#7F92AA]
          text-[14px]
          font-semibold
        "
                           />
                        </div>

                        <button
                           type="submit"
                           className="
        h-[48px]
        w-[145px]
        rounded-full
        bg-[#BC2623]
        hover:bg-[#a71f1d]
        text-white
        text-[12px]
        font-bold
        uppercase
        tracking-[1px]
        shrink-0
      "
                        >
                           Book A Chalet
                        </button>

                     </div>
                  </form>

               </div>
            </div>


            {/* Desktop Hero */}
            <div
               className="hidden md:block relative h-[100vh] w-full overflow-hidden"
               style={{
                  maskImage: "url('/Vector.svg')",
                  WebkitMaskImage: "url('/Vector.svg')",
                  maskSize: "100% 100%",
                  WebkitMaskSize: "100% 100%",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
               }}
            >
               <Image
                  src="/images/hero.jpg"
                  alt="Beach Villa Panoramic View"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
               />
               <div className="absolute inset-0 bg-black/10" />
               <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-8">
                  <svg
                     width="58"
                     height="72"
                     viewBox="0 0 58 72"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     className="mx-auto"
                  >
                     <path d="M11.2569 0V71.4904C9.242 71.6129 6.63761 69.7971 6.63761 69.7971C6.63761 69.7971 -1.76507 44.8382 0.3378 24.2672C2.07113 7.50786 8.79327 1.62118 11.2569 0Z" fill="white" />
                     <path d="M19.2979 66.4666C18.6832 68.5734 18.2793 69.7886 18.2793 69.7886C18.2793 69.7886 15.6451 71.6006 13.6694 71.4927V61.8574L19.2979 66.4666Z" fill="white" />
                     <path d="M19.9898 64.2663L13.6694 59.1227V0C16.1342 1.61099 22.8506 7.51315 24.5848 24.3166C26.0812 38.9095 22.3137 55.6985 19.9898 64.2663Z" fill="white" />
                     <path d="M43.4197 0V71.4904C41.4043 71.6129 38.7992 69.7971 38.7992 69.7971C38.7992 69.7971 30.3591 44.8382 32.5154 24.2672C34.2227 7.50786 40.9555 1.62118 43.4197 0Z" fill="white" />
                     <path d="M52.2644 66.3909C51.6284 68.5735 51.1928 69.8296 51.1928 69.8296C51.1928 69.8296 48.6225 71.5981 46.636 71.4929V61.8574L52.2644 66.3909Z" fill="white" />
                     <path d="M52.9799 63.463L46.636 58.3176V0C49.0678 1.59588 55.8082 7.44266 57.5439 24.0885C59.0506 38.4299 55.3324 54.904 52.9799 63.463Z" fill="white" />
                     <path d="M49.743 62.4714L43.7449 57.5779V57.5234L49.743 62.4714Z" fill="white" />
                  </svg>
                  <h1
                     className="
               font-ogg-trial
               text-white
               font-normal
               text-[60px]
               lg:text-[80px]
               leading-[68px]
               lg:leading-[86px]
               tracking-[-2px]
               max-w-[950px]
               drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]
               "
                  >
                     Lose Your Shoes.
                     <br />
                     Find Your Soul.
                  </h1>
                  <p className="mt-5 max-w-[520px] font-manrope-regular text-white/95 text-base font-light tracking-[0.5px] leading-relaxed">
                     Experience a sanctuary where the only schedule is the tide and
                     the only dress code is the sand.
                  </p>
                  <form className="mt-12 w-[680px] h-[62px] rounded-[51px] bg-white p-[4px] shadow-xl">
                     <div className="flex items-center justify-between h-full">
                        <div className="flex-1 pl-8">
                           <DatePicker
                              selected={date}
                              onChange={handleDateChange}
                              placeholderText="Select Date"
                              dateFormat="yyyy-MM-dd"
                              className="
                     w-full
                     bg-transparent
                     outline-none
                     text-[#7F92AA]
                     text-[14px]
                     font-semibold
                     cursor-pointer
                     "
                           />
                        </div>
                        <button
                           type="submit"
                           className="

                     h-[54px]
                     w-[160px]
                     rounded-full
                     bg-[#BC2623]
                     hover:bg-[#a71f1d]
                     text-white
                     font-manrope-regular
                     text-[14px]
                     font-[700]
                     uppercase
                     tracking-[1.5px]
                     transition-all
                     shrink-0
                     "
                        >
                           Book A Chalet
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
}