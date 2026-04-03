"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../../public/images/milagra.png";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {

  const router = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = useState(false);

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
  };

  const handleNavigationToAbout = () => {
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
    if (pathname === "/") {
      const packageSection = document.getElementById("package");
      if (packageSection) {
        packageSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      sessionStorage.setItem("scrollTo", "package");
      router.push("/");
    }
  };

  return (
    <>
      <section className="bg-[#3F3E41]">
        {loading && (
          <div className="fixed inset-0 z-50 flex justify-center items-center bg-white bg-opacity-70">
            <div className="flex gap-3">
              <div className="w-3 h-3 bg-[#C4910D] rounded-full animate-bounce1"></div>
              <div className="w-3 h-3 bg-[#C4910D] rounded-full animate-bounce2"></div>
              <div className="w-3 h-3 bg-[#C4910D] rounded-full animate-bounce3"></div>
            </div>
          </div>
        )}
        <div className="relative w-full">
          <div className="container">
            <div className="md:pt-15 pt-5 md:px-6 px-0">
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:place-items-center items-center lg:gap-15 gap-10">
                {/* Column 1 */}
                <div className="flex flex-col md:gap-2">
                  <Image
                    src={logo}
                    alt="Logo"
                    width={200}
                    height={50}
                    className="transform transition-transform duration-300 hover:scale-105 lg:w-[200px] w-[150px]"
                  />
                  <p className="text-[#fff] md:text-[15px] text-sm font-normal">
                    Experience Bespoke Architectural Design Crafted to Reflect Your Vision And Lifestyle
                  </p>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col md:gap-4 gap-3 cursor-pointer">
                  <p onClick={() => handleNavigation("/")} className="font-medium text-[14px] md:text-[15px] text-[#fff] hover:text-[#C4910D]">Home</p>
                  <p onClick={handleNavigationToAbout} className="font-medium text-[14px] md:text-[15px] text-[#fff] hover:text-[#C4910D]">About Us</p>
                  <p onClick={handleNavigationToPackage} className="font-medium text-[14px] md:text-[15px] text-[#fff] hover:text-[#C4910D]">Packages</p>
                  <p onClick={() => handleNavigation("/gallery")} className="font-medium text-[14px] md:text-[15px] text-[#fff] hover:text-[#C4910D]">Gallery</p>
                  <p onClick={() => handleNavigation("/portfolio")} className="font-medium text-[14px] md:text-[15px] text-[#fff] hover:text-[#C4910D]">Portfolio</p>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col md:gap-5 gap-3 text-[#fff]">
                  <div>
                    <p className="flex items-center gap-4 md:text-[15px] text-[12px] font-medium">
                      <span className="md:text-2xl text-lg"><IoCallOutline /></span>
                      +91 9809584012
                    </p>
                  </div>
                  <div className="items-center gap-3">
                    <p className="flex items-center max-w-[320px] gap-4 md:text-[14px] text-sm mb-2 font-bold">
                      <span className="md:text-2xl text-lg"><IoLocationOutline /></span>
                      Milagra Designs | Interior Designers in
                    </p>
                    <p className="max-w-[280px] ml-8 md:text-[15px] text-[12px] font-medium">
                      Trivandrum and Kollam
                    </p>
                  </div>
                  <div>
                    <p className="flex items-center gap-4 md:text-[15px] text-[12px] font-medium">
                      <span className="lg:text-2xl text-lg"><AiOutlineMail /></span>
                      milagradesign@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:mt-15 mt-10 flex justify-center items-center bg-[#C4910D80] py-3">
            <p className="md:text-[15px] text-[12px] font-normal text-[#fff]">
              &copy; 2025 Door of Dream Architects. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
