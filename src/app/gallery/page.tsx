"use client"
import Navbar from "../../components/Navbar/page";
import Image from "next/image";
import Link from "next/link";

import maingallery from "../../../public/images/milagraimg7.jpg";
import galleryone from "../../../public/images/milagraimg2.jpg";
import gallerytwo from "../../../public/images/milagraimg3.jpg";
import gallerythree from "../../../public/images/milagraimg4.jpg";
import galleryfour from "../../../public/images/milagraimg5.jpg";

import { HiOutlineArrowLeft } from "react-icons/hi";
import Footer from "../../components/Footer/page";

export default function Gallery() {

    // Added multiple images (no design change)
    const images = [
        maingallery,
        galleryone,
        gallerytwo,
        gallerythree,
        galleryfour,
        maingallery,
        galleryone,
        gallerytwo,
        gallerythree,
        galleryfour
    ];

    return (
        <>
            <Navbar />

            <div
                className="w-full lg:h-[300px] h-[150px] flex items-center justify-start bg-cover bg-center"
                style={{ backgroundImage: `url(/images/milagraimg6.jpg)` }}
            >
                <div className="container max-w-3xl px-6 text-white">
                    <h1 className="lg:text-[72px] md:text-5xl text-4xl font-medium leading-tight lg:ml-20 ml-16  bg-black/10 w-fit">
                        Gallery
                    </h1>
                </div>
            </div>

            <div className="container">

                <div className="w-full max-w-md sm:max-w-2xl lg:max-w-3xl my-3 md:flex justify-start items-start hidden lg:mt-10 mt-5">
                    <Link href="/">
                        <button className="mb-5 backdrop-blur-md flex items-center justify-center text-[#ffffff] bg-[#845607] px-3 py-2 rounded-xl font-semibold text-[18px] leading-[17px]">
                            <span className="text-[20px] mr-2">
                                <HiOutlineArrowLeft />
                            </span>
                            Back
                        </button>
                    </Link>
                </div>

                <div className="text-center max-w-[1380px] lg:mt-10 mt-5">
                    <p className="lg:text-lg text-sm">
                        Milagra Designs creates spaces that tell your story with timeless aesthetics and personalized touches...
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:my-10 my-5">
                    {images.map((img, index) => (
                        <div key={index} className="h-[300px]">
                            <Image
                                src={img}
                                width={350}
                                height={200}
                                alt={`gallery-${index}`}
                                className="rounded-lg w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

            </div>

            <Footer />
        </>
    );
}