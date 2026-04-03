"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoReorderThree } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import logo from "../../../public/images/milagra.png";
import { useRouter, usePathname } from "next/navigation";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (loading) {
            setLoading(false);
        }
    }, [pathname]);

    const handleNavigation = (path: string) => {
        if (pathname !== path) {
            setLoading(true);
            router.push(path);
        }
        setIsOpen(false); // close sidebar after navigation
    };

    const handleNavigationToAbout = () => {
        setIsOpen(false); // ✅ Close sidebar

        if (pathname === "/") {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            sessionStorage.setItem("scrollTo", "about");
            router.push("/");
        }
    };

    const handleNavigationToPackage = () => {
        setIsOpen(false); // ✅ Close sidebar

        if (pathname === "/") {
            const contactSection = document.getElementById("package");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            sessionStorage.setItem("scrollTo", "package");
            router.push("/");
        }
    };

    const handleNavigationToContact = () => {
        setIsOpen(false); // close sidebar

        if (pathname === "/") {
            const contactSection = document.getElementById("Consultation");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            sessionStorage.setItem("scrollTo", "Consultation");
            router.push("/");
        }
    };
    return (
        <>
            <nav className="w-full bg-[#3F3E41] relative z-50">
                {loading && (
                    <div className="fixed inset-0 z-50 flex justify-center items-center bg-white bg-opacity-70">
                        <div className="flex gap-3">
                            <div className="w-3 h-3 bg-[#C4910D] rounded-full animate-bounce1"></div>
                            <div className="w-3 h-3 bg-[#C4910D] rounded-full animate-bounce2"></div>
                            <div className="w-3 h-3 bg-[#C4910D] rounded-full animate-bounce3"></div>
                        </div>
                    </div>
                )}

                <div className="max-w-7xl mx-auto lg:px-0 py-2 lg:py-3 px-4">
                    <div className="flex justify-between items-center h-14 ">
                        {/* Logo */}
                        <Link href="/">
                            <Image src={logo} alt="Logo" width={180} height={50} className="w-[120px] lg:w-[200px]" />
                        </Link>

                        {/* Desktop Links */}
                        <div className="hidden lg:flex space-x-12 font-[500] text-md">
                            <button onClick={() => handleNavigation("/")} className="text-[#fff] font-normal text-lg hover:text-[#C4910D]">Home</button>
                            <button onClick={handleNavigationToAbout} className="text-[#fff] font-normal text-lg hover:text-[#C4910D]">About us</button>
                            <button onClick={handleNavigationToPackage} className="text-[#fff] font-normal text-lg hover:text-[#C4910D]">Packages</button>
                            <button onClick={() => handleNavigation("/portfolio")} className="text-[#fff] font-normal text-lg hover:text-[#C4910D]">Portfolio</button>
                            <button onClick={() => handleNavigation("/gallery")} className="text-[#fff] font-normal text-lg hover:text-[#C4910D]">Gallery</button>
                        </div>

                        {/* Contact Button */}
                        <div className="hidden lg:flex items-center gap-4">
                            <button
                                onClick={handleNavigationToContact}
                                className="border-[1px] border-[#C4910D] text-lg text-[#C4910D] px-6 py-2 rounded-lg text-[15px] font-medium hover:bg-[#C4910D] hover:text-[#fff] transition"
                            >
                                Contact Us
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden bg-white text-[#C4910D] text-3xl rounded-full"
                            onClick={() => setIsOpen(true)}
                        >
                            <IoReorderThree />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div className="fixed inset-y-0 right-20 w-2/3 bg-[#3F3E41] z-50 flex flex-col items-center space-y-6 text-white text-lg font-medium">
                        <div className="flex flex-col gap-4 mt-20">
                            <button
                                className="absolute top-5 right-5 text-3xl text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                <MdClose />
                            </button>
                            <button onClick={() => handleNavigation("/")} className="hover:text-[#C4910D]">Home</button>
                            <button onClick={handleNavigationToAbout} className="hover:text-[#C4910D]">About us</button>
                            <button onClick={handleNavigationToPackage} className="hover:text-[#C4910D]">Packages</button>
                            <button onClick={() => handleNavigation("/portfolio")} className="hover:text-[#C4910D]">Portfolio</button>
                            <button onClick={() => handleNavigation("/gallery")} className="hover:text-[#C4910D]">Gallery</button>
                            <button
                                onClick={handleNavigationToContact}
                                className="border border-[#C4910D] px-6 py-2 rounded-lg hover:bg-[#cea007] hover:text-white mt-4"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>

                )}
            </nav>
        </>
    );
}
