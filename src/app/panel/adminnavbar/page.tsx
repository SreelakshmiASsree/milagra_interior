"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/images/milagra.png";
import { FiMenu, FiX } from "react-icons/fi";
export default function Adminnavbar() {
     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
     const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className="fixed top-0 left-0 w-full z-50 ">
                {/* Logo & Logout bar */}
                <div className="flex justify-between items-center md:px-8  bg-[#3F3E41] ">
                    <button
                        onClick={toggleSidebar}
                        className="lg:hidden text-2xl text-[#E68120] right-5 absolute"
                    >
                        {isSidebarOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
                    </button>

                    <Link href="/">
                        <Image src={logo} alt="Logo" width={180} height={50} className="lg:w-[180px] w-[120px]" />
                    </Link>
                    <button className="bg-[#D9D9D9] text-[#000] font-medium text-[15px] px-12 py-3 rounded-2xl lg:block hidden">
                        LogOut
                    </button>
                </div>
            </div>
        </>
    )
}