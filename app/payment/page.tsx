"use client";

import Image from "next/image";
import Link from "next/link";

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-[#FFFEF8] font-sans antialiased text-[#444444] pb-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-6 md:py-8">

        {/* Header (image_fe11e5.png Layout) */}
        <div className="flex items-center justify-between pb-6">
          <Link href="/" className="flex flex-col shrink-0">
            <div className="relative w-[100px] md:w-[120px] h-[50px] md:h-[60px]">
              <Image
                src="/images/BVLogo.png"
                alt="Beach Villa"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          <Link
            href="/"
            className="text-xs md:text-sm font-medium tracking-wide text-gray-800 hover:text-[#b92d2b] transition-colors flex items-center gap-1 font-jako-bold"
          >
            ‹ Go Back
          </Link>
        </div>
        <hr className="border-gray-300 mb-8" />

        {/* Page Title */}
        <div className="text-center py-8 md:py-10">
          <h1 className="font-ogg-regular text-4xl sm:text-5xl md:text-[54px] text-[#6082a4] font-light tracking-wide">
            Complete Your Payment
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-gray-500 max-w-[600px] mx-auto tracking-wide font-jako-bold">
            Securely finalize your reservation for the 5-Bedroom Beach House.
          </p>
        </div>

        {/* Content Layout Grid (Exact Match to Figma Image_fe11e5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-[1160px] mx-auto items-start pt-4">

          {/* LEFT SIDE: Order Summary Card */}
          <div className="bg-white rounded-2xl border border-gray-200/80 p-6 lg:col-span-4 lg:sticky lg:top-6">
            <h3 className="text-[11px] tracking-[1.5px] uppercase font-bold text-gray-700 mb-5 font-jako-bold">
              Order Summary
            </h3>

            <div className="flex gap-4 pb-5">
              <div className="relative w-[75px] h-[75px] rounded-xl overflow-hidden shrink-0 bg-gray-50">
                <Image
                  src="/images/50deabec7df2ce9855d14e5125d8b2a525e84eb8 (1).jpg"
                  alt="Room"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <h4 className="text-sm font-bold text-gray-900 leading-snug font-jako-bold">
                  5-Bedroom Beach House
                </h4>
                <p className="text-xs text-gray-400 mt-1 font-light font-jako-regular">
                  May 28 - May 30, 2026
                </p>
                <p className="text-xs text-gray-400 mt-0.5 font-light font-jako-regular">2 Adults</p>
              </div>
            </div>

            <div className="border-t border-gray-100/70 pt-5 space-y-3.5 text-xs text-gray-500 font-light">
              <div className="flex justify-between">
                <span className="font-jako-regular">$650 x 2 nights</span>
                <span className="font-normal text-gray-800 font-jako-regular" >$1,300.00</span>
              </div>

              <div className="flex justify-between">
                <span className="font-jako-regular">Taxes & Fees</span>
                <span className="font-normal text-gray-800 font-jako-regular">$195.00</span>
              </div>
            </div>

            <div className="border-t border-gray-100 mt-5 pt-5 flex justify-between items-center text-sm font-bold text-gray-900">
              <span className="text-base text-gray-800 font-jako-bold">Total</span>
              <span className="text-base font-jako-bold">$1,495.00</span>
            </div>
          </div>

          {/* RIGHT SIDE: Payment Secure Form Card */}
          <div className="bg-white rounded-2xl border border-gray-200/80 shadow-sm p-6 sm:p-10 lg:col-span-8">

            {/* Secure Badging header */}
            <div className="flex items-center gap-2 text-[#AF2F2C] text-[10px] uppercase font-bold tracking-[2px] mb-6">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
              <span className="font-jako-bold">Secure Checkout</span>
            </div>

            {/* Section 1: Contact Details */}
            <h2 className="text-2xl  text-[#66839C] font-jako-bold font-light mb-6">
              Contact Details
            </h2>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase tracking-wider font-bold font-jako-bold text-gray-400">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="border border-gray-200 focus:border-gray-400 outline-none rounded-xl px-4 py-3 text-sm text-gray-800 bg-[#FFFEF8] transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase tracking-wider font-bold font-jako-bold text-gray-400">Last Name</label>
                  <input
                    type="text"
                    placeholder="Kofi"
                    className="border border-gray-200 focus:border-gray-400 outline-none rounded-xl px-4 py-3 text-sm text-gray-800 bg-[#FFFEF8] transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-wider font-bold font-jako-bold text-gray-400">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="border border-gray-200 focus:border-gray-400 outline-none rounded-xl px-4 py-3 text-sm text-gray-800 bg-[#FFFEF8] transition-all"
                />
              </div>
            </div>

            <div className="border-t border-gray-100 my-8"></div>

            {/* Section 2: Payment Method */}
            <h2 className="text-2xl text-[#517396] font-serif font-light mb-6 font-jako-bold">
              Payment Method
            </h2>

            <div className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] uppercase tracking-wider font-bold font-jako-bold text-gray-400">Card Number</label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    className="border border-gray-200 focus:border-gray-400 outline-none rounded-xl px-4 py-3 text-sm text-gray-800 bg-[#FFFEF8] transition-all w-full pl-10"
                  />
                  <span className="absolute left-4 text-gray-400 text-sm">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_1_3914)">
                        <path d="M16.667 4.16699H3.33366C2.41318 4.16699 1.66699 4.91318 1.66699 5.83366V14.167C1.66699 15.0875 2.41318 15.8337 3.33366 15.8337H16.667C17.5875 15.8337 18.3337 15.0875 18.3337 14.167V5.83366C18.3337 4.91318 17.5875 4.16699 16.667 4.16699Z" stroke="#8C7A7A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1.66699 8.33301H18.3337" stroke="#8C7A7A" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_3914">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase tracking-wider font-bold font-jako-bold text-gray-400">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="border border-gray-200 focus:border-gray-400 outline-none rounded-xl px-4 py-3 text-sm text-gray-800 bg-[#FFFEF8] w-full transition-all"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase tracking-wider font-bold font-jako-bold text-gray-400">CVC</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="border border-gray-200 focus:border-gray-400 outline-none rounded-xl px-4 py-3 text-sm text-gray-800 bg-[#FFFEF8] w-full transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Action Payment Submit Button */}
            <button className="w-full mt-8 bg-[#AF2F2C] hover:bg-[#AF2F2C] text-white font-semibold py-4 rounded-full text-sm tracking-wider uppercase transition-all duration-200 shadow-sm font-jako-bold">
              Pay $1,495.00
            </button>

            {/* Secure Encryption Text */}
            <p className="text-center text-[11px] text-gray-400 mt-5 tracking-wide font-jako-bold flex items-center justify-center gap-1 font-light">
              <span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1_3929)">
                    <path d="M9.5 5.5H2.5C1.94772 5.5 1.5 5.94772 1.5 6.5V10C1.5 10.5523 1.94772 11 2.5 11H9.5C10.0523 11 10.5 10.5523 10.5 10V6.5C10.5 5.94772 10.0523 5.5 9.5 5.5Z" stroke="#8C7A7A" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3.5 5.5V3.5C3.5 2.83696 3.76339 2.20107 4.23223 1.73223C4.70107 1.26339 5.33696 1 6 1C6.66304 1 7.29893 1.26339 7.76777 1.73223C8.23661 2.20107 8.5 2.83696 8.5 3.5V5.5" stroke="#8C7A7A" stroke-linecap="round" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_3929">
                      <rect width="12" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

              </span> Payments are secure and encrypted.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}