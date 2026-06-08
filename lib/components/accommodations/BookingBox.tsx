"use client";

import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingBox() {
    const [checkIn, setCheckIn] = useState(new Date());

    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const [checkOut, setCheckOut] = useState(tomorrow);
    const [guests, setGuests] = useState("2 Adults");

    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    };

    return (
        <div
            ref={dropdownRef}
            className="grid grid-cols-1 md:grid-cols-3 relative gap-4 md:gap-0 w-full"
        >
            {/* 1. Check In */}
            <div className="pb-4 md:pb-0 md:pr-6 border-b md:border-b-0 md:border-r border-[#D8D0C8] relative w-full flex flex-col justify-between">
                <p className="text-[10px] sm:text-[11px] lg:text-[12px] uppercase tracking-[2px] text-[#A69C94] mb-2 font-jako-regular">
                    Check In
                </p>

                <button
                    onClick={() =>
                        setActiveDropdown(
                            activeDropdown === "checkin" ? null : "checkin"
                        )
                    }
                    className="w-full flex items-center justify-between text-left font-jako-bold text-[14px] font-[400]"
                >
                    <span className="text-[#BC2623] text-[13px] sm:text-[14px]">
                        {formatDate(checkIn)}
                    </span>

                    <svg
                        className={`w-4 h-4 transition-transform duration-200 ml-2 shrink-0 ${activeDropdown === "checkin" ? "rotate-180" : ""
                            }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m6 9 6 6 6-6"
                        />
                    </svg>
                </button>

                {activeDropdown === "checkin" && (
                    <div className="absolute top-full left-0 mt-2 z-[99999] scale-[0.85] md:scale-100 origin-top-left">
                        {/* <DatePicker
                            selected={checkIn}
                            dateFormat="yyyy-MM-dd"
                            onChange={(date: Date | null) => {
                                if (date) {
                                    setCheckIn(date);
                                    setActiveDropdown(null);
                                }
                            }}
                            inline
                        /> */}
                        <DatePicker
                            selected={checkIn}
                            dateFormat="yyyy-MM-dd"
                            filterDate={(d) => {
                                const today = new Date();
                                today.setHours(0, 0, 0, 0);
                                return d >= today;
                            }}
                            disabledKeyboardNavigation
                            onChange={(date: Date | null) => {
                                if (date) {
                                    setCheckIn(date);
                                    if (date >= checkOut) {
                                        const nextDay = new Date(date);
                                        nextDay.setDate(nextDay.getDate() + 1);
                                        setCheckOut(nextDay);
                                    }
                                    setActiveDropdown(null);
                                }
                            }}
                            inline
                        />
                    </div>
                )}
            </div>

            {/* 2. Check Out */}
            <div className="py-4 md:py-0 md:px-[12px] border-b md:border-b-0 md:border-r border-[#D8D0C8] relative w-full flex flex-col justify-between">
                <p className="text-[10px] sm:text-[11px] lg:text-[12px] uppercase tracking-[2px] text-[#A69C94] mb-2 font-jako-regular">
                    Check Out
                </p>

                <button
                    onClick={() =>
                        setActiveDropdown(
                            activeDropdown === "checkout" ? null : "checkout"
                        )
                    }
                    className="w-full flex items-center justify-between text-left font-jako-bold text-[14px] font-[400]"
                >
                    <span className="text-[#BC2623] text-[13px] sm:text-[14px] ">
                        {formatDate(checkOut)}
                    </span>

                    <svg
                        className={`w-4 h-4 transition-transform duration-200 ml-2 shrink-0 ${activeDropdown === "checkout" ? "rotate-180" : ""
                            }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m6 9 6 6 6-6"
                        />
                    </svg>
                </button>

                {activeDropdown === "checkout" && (
                    <div className="absolute top-full left-0 mt-2 z-[99999]">
                        {/* <DatePicker
                            selected={checkOut}
                            minDate={checkIn}
                            dateFormat="yyyy-MM-dd"
                            onChange={(date: Date | null) => {
                                if (date) {
                                    setCheckOut(date);
                                    setActiveDropdown(null);
                                }
                            }}
                            inline
                        /> */}
                        <DatePicker
                            selected={checkOut}
                            dateFormat="yyyy-MM-dd"
                            filterDate={(d) => {
                                const checkInWindow = new Date(checkIn);
                                checkInWindow.setHours(0, 0, 0, 0);
                                return d > checkInWindow;
                            }}
                            disabledKeyboardNavigation
                            onChange={(date: Date | null) => {
                                if (date) {
                                    setCheckOut(date);
                                    setActiveDropdown(null);
                                }
                            }}
                            inline
                        />
                    </div>
                )}
            </div>

            {/* 3. Guests */}
            {/* <div className="pt-4 md:pt-0 md:pl-[28px] md:mr-4 relative w-full flex flex-col justify-between">
                <p className="text-[10px] sm:text-[11px] lg:text-[12px] uppercase tracking-[2px] text-[#A69C94] mb-2 font-jako-regular">
                    Guests
                </p>

                <button
                    onClick={() =>
                        setActiveDropdown(
                            activeDropdown === "guests" ? null : "guests"
                        )
                    }
                    className="w-full flex items-center justify-between text-left font-jako-bold text-[14px] font-[400]"
                >
                    <span className="text-[#BC2623] text-[13px] sm:text-[14px] uppercase">
                        {guests}
                    </span>

                    <svg
                        className={`w-4 h-4 transition-transform duration-200 ml-2 shrink-0 ${activeDropdown === "guests" ? "rotate-180" : ""
                            }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m6 9 6 6 6-6"
                        />
                    </svg>
                </button>

                {activeDropdown === "guests" && (
                    <div className="absolute top-full left-0 mt-2 w-[180px] bg-white rounded-xl shadow-lg border text-[14px] font-[400] font-jako-regular border-[#D8D0C8] z-[99999]">
                        {[
                            "1 Adult",
                            "2 Adults",
                            "3 Adults",
                        ].map((item) => (
                            <button
                                key={item}
                                onClick={() => {
                                    setGuests(item);
                                    setActiveDropdown(null);
                                }}
                                className="block w-full text-left px-4 py-3 hover:bg-gray-50"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                )}
            </div> */}
            <div className="pt-4 md:pt-0 md:pl-[28px] md:mr-4 relative w-full flex flex-col justify-between">
                <p className="text-[10px] sm:text-[11px] lg:text-[12px] uppercase tracking-[2px] text-[#A69C94] mb-2 font-jako-regular">
                    Guests
                </p>

                <button
                    type="button"
                    onClick={() =>
                        setActiveDropdown(
                            activeDropdown === "guests" ? null : "guests"
                        )
                    }
                    className="w-full flex items-center justify-between text-left font-jako-bold text-[14px] font-[400]"
                >
                    <span className="text-[#BC2623] text-[13px] sm:text-[14px] uppercase">
                        {adults} {adults === 1 ? "Adult" : "Adults"}
                        {children > 0 ? `, ${children} ${children === 1 ? "Child" : "Children"}` : ""}
                    </span>

                    <svg
                        className={`w-4 h-4 transition-transform duration-200 ml-2 shrink-0 ${activeDropdown === "guests" ? "rotate-180" : ""
                            }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m6 9 6 6 6-6"
                        />
                    </svg>
                </button>

                {activeDropdown === "guests" && (
                    <div className="absolute top-full left-0 md:left-auto md:right-0 mt-2 w-[260px] bg-white rounded-xl shadow-lg border border-[#D8D0C8] p-4 z-[99999] flex flex-col gap-4">
                        {/* Adults Row */}
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-[14px] font-jako-bold text-[#425a70]">Adults</span>
                                <span className="text-[11px] text-[#A69C94]">Age 13 or above</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    disabled={adults <= 1}
                                    onClick={() => setAdults(adults - 1)}
                                    className="w-8 h-8 rounded-full border border-[#D8D0C8] flex items-center justify-between justify-center text-[#BC2623] hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed font-bold"
                                >
                                    -
                                </button>
                                <span className="text-[14px] font-jako-bold min-w-[16px] text-center text-[#425a70]">
                                    {adults}
                                </span>
                                <button
                                    type="button"
                                    onClick={() => setAdults(adults + 1)}
                                    className="w-8 h-8 rounded-full border border-[#D8D0C8] flex items-center justify-between justify-center text-[#BC2623] hover:bg-gray-50 font-bold"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Children Row */}
                        <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                            <div className="flex flex-col">
                                <span className="text-[14px] font-jako-bold text-[#425a70]">Children</span>
                                <span className="text-[11px] text-[#A69C94]">Ages 2–12</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    disabled={children <= 0}
                                    onClick={() => setChildren(children - 1)}
                                    className="w-8 h-8 rounded-full border border-[#D8D0C8] flex items-center justify-between justify-center text-[#BC2623] hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed font-bold"
                                >
                                    -
                                </button>
                                <span className="text-[14px] font-jako-bold min-w-[16px] text-center text-[#425a70]">
                                    {children}
                                </span>
                                <button
                                    type="button"
                                    onClick={() => setChildren(children + 1)}
                                    className="w-8 h-8 rounded-full border border-[#D8D0C8] flex items-center justify-between justify-center text-[#BC2623] hover:bg-gray-50 font-bold"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Done Button */}
                        <button
                            type="button"
                            onClick={() => setActiveDropdown(null)}
                            className="w-full mt-2 py-2 bg-[#BC2623] text-white text-[12px] font-jako-bold uppercase tracking-[1px] rounded-lg hover:bg-[#a1201e] transition-colors"
                        >
                            Done
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}