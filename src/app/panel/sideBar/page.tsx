"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {

    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path: string) => pathname === path;

    return (
        <aside className={`bg-white p-4 fixed top-[68px] z-40 h-full w-64 transition-transform duration-300 ease-in-out flex flex-col lg:gap-y-80 gap-y-48
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>

            <div className="flex flex-col gap-5 justify-center items-center pt-8">

                <Link href="/panel/adminportfolio" onClick={() => setIsOpen(false)}>
                    <button
                        className={`${isActive("/panel/adminportfolio") ? "bg-[#A45D19]" : "bg-[#C4910D]"}
                        text-white py-3 px-14 rounded-xl font-medium text-sm`}
                    >
                        Portfolio
                    </button>
                </Link>

                <Link href="/panel/admingallery" onClick={() => setIsOpen(false)}>
                    <button
                        className={`${isActive("/panel/admingallery") ? "bg-[#A45D19]" : "bg-[#C4910D]"}
                        text-white text-sm py-3 px-14 rounded-xl font-medium`}
                    >
                        Gallery
                    </button>
                </Link>

                <Link href="/panel/admintestimonial" onClick={() => setIsOpen(false)}>
                    <button
                        className={`${isActive("/panel/admintestimonial") ? "bg-[#A45D19]" : "bg-[#C4910D]"}
                        text-white py-3 px-10 rounded-xl font-medium text-sm`}
                    >
                        Testimonial
                    </button>
                </Link>

                <button className="bg-[#C4910D] text-white font-medium text-sm py-3 px-14 rounded-xl lg:hidden">
                    LogOut
                </button>
            </div>

        </aside>
    );
}