"use client";

import { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function BookingBox() {
    const [checkIn, setCheckIn] = useState(new Date());

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
        // <div
        //     ref={dropdownRef}
        //     className="grid grid-cols-3 relative"
        // >
        <div
    ref={dropdownRef}
    className="grid grid-cols-1 md:grid-cols-3 relative gap-4 md:gap-0"
>
            {/* Check In */}
            {/* <div className="pr-2 sm:pr-6 border-r border-[#D8D0C8] relative"> */}
            <div className="pb-4 md:pb-0 md:pr-6 border-b md:border-b-0 md:border-r border-[#D8D0C8] relative">
                <p className="text-[10px] sm:text-[11px] lg:text-[12px] uppercase tracking-[2px] text-[#A69C94] mb-2 font-jako-regular">
                    Check In
                </p>

                <button
                    onClick={() =>
                        setActiveDropdown(
                            activeDropdown === "checkin" ? null : "checkin"
                        )
                    }
                    className="w-full flex items-center justify-between"
                >
                    <span className="text-[#BC2623] text-[13px] sm:text-[14px]">
                        {formatDate(checkIn)}
                    </span>

                    <svg
                        className={`w-4 h-4 transition ${activeDropdown === "checkin" ? "rotate-180" : ""
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
                    // <div className="absolute top-full left-0 mt-2 z-50">
                    <div className="absolute top-full left-0 mt-2 z-50 scale-[0.85] md:scale-100 origin-top-left">
                        <DatePicker
                            selected={checkIn}
                            dateFormat="yyyy-MM-dd"
                            onChange={(date: Date | null) => {
                                if (date) {
                                    setCheckIn(date);
                                    setActiveDropdown(null);
                                }
                            }}
                            inline
                        />
                    </div>
                )}
            </div>

            {/* Check Out */}
            {/* <div className="px-2 sm:px-6 border-r border-[#D8D0C8] relative"> */}
            <div className="py-4 md:py-0 md:px-6 border-b md:border-b-0 md:border-r border-[#D8D0C8] relative">
                <p className="text-[10px] sm:text-[11px] lg:text-[12px] uppercase tracking-[2px] text-[#A69C94] mb-2 font-jako-regular">
                    Check Out
                </p>

                <button
                    onClick={() =>
                        setActiveDropdown(
                            activeDropdown === "checkout" ? null : "checkout"
                        )
                    }
                    className="w-full flex items-center justify-between"
                >
                    <span className="text-[#BC2623] text-[13px] sm:text-[14px]">
                        {formatDate(checkOut)}
                    </span>

                    <svg
                        className={`w-4 h-4 transition ${activeDropdown === "checkout" ? "rotate-180" : ""
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
                    <div className="absolute top-full left-0 mt-2 z-50">
                        <DatePicker
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
                        />
                    </div>
                )}
            </div>

            {/* Guests */}
            {/* <div className="pl-2 sm:pl-6 relative"> */}
            <div className="pt-4 md:pt-0 md:pl-6 relative">
                <p className="text-[10px] sm:text-[11px] lg:text-[12px] uppercase tracking-[2px] text-[#A69C94] mb-2 font-jako-regular">
                    Guests
                </p>

                <button
                    onClick={() =>
                        setActiveDropdown(
                            activeDropdown === "guests" ? null : "guests"
                        )
                    }
                    className="w-full flex items-center justify-between"
                >
                    <span className="text-[#BC2623] text-[13px] sm:text-[14px] uppercase">
                        {guests}
                    </span>

                    <svg
                        className={`w-4 h-4 transition ${activeDropdown === "guests" ? "rotate-180" : ""
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
                    <div className="absolute top-full left-0 mt-2 w-[180px] bg-white rounded-xl shadow-lg border text-[14px] font-[400] font-jako-regular border-[#D8D0C8] z-50">
                        {[
                            "1 Adult",
                            "2 Adults",
                            "3 Adults",
                            "4 Adults",
                            "5+ Adults",
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
            </div>
        </div>
    );
}