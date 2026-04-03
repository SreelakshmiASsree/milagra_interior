"use client"
import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowLeft } from "react-icons/hi";
import portfolioone from "../../../public/images/portfolioone.png";
import portfoliotwo from "../../../public/images/portfoliotwo.png";
import portfoliothree from "../../../public/images/portfoliothree.png"
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { MdOutlineBedroomChild } from "react-icons/md";
export default function Portfolio() {
    return (
        <>
            <Navbar />
            <div
                className="w-full lg:h-[300px] h-[150px] flex items-center justify-start bg-cover bg-center"
                style={{ backgroundImage: `url(/images/milagraimg6.jpg)` }}
            >
                <div className="container max-w-3xl px-6 text-white">
                    <h1 className="lg:text-[72px] md:text-5xl text-4xl font-medium leading-tight lg:ml-44">Portfolio</h1>
                </div>
            </div>
            <div className="container">

                <div className="   w-full max-w-md sm:max-w-2xl lg:max-w-3xl my-3 md:flex justify-start items-start hidden lg:mt-10 mt-5">
                    <Link href="/">  <button className="mb-5  backdrop-blur-md flex  items-center justify-center text-[#fff] bg-[#845607] hover:bg-[#fff] hover:text-[#C4910D] px-3 py-2 rounded-xl font-semibold text-[18px] leading-[17px]">
                        <span className="text-[20px] mr-2" ><HiOutlineArrowLeft /></span>
                        Back
                    </button></Link>
                </div>
                <div className="text-center max-w-[1380px] lg:mt-10 mt-5">
                    <p className="text-sm lg:text-lg">Milagra Designs creates spaces that tell your story with timeless aesthetics and personalized touches. We blend
                        creativity and functionality to deliver elegant, bespoke interiors. From concept to completion, our team ensures
                        exceptional quality and detail,
                        transforming homes and commercial spaces into inspiring environments filled with style and purpose.</p>
                </div>

                <div>
                    <div className=" flex lg:flex-row flex-col justify-center lg:gap-20 gap-10 mt-5 lg:mt-16">
                        <Image
                            src={portfolioone}
                            width={550}
                            height={0}
                            alt="portfolioone"

                        />
                        <div>
                            <h1 className="text-xl lg:text-3xl font-normal mb-3 lg:mb-8">skywall,Alappuzha</h1>
                            <p className="max-w-[500px] font-normal lg:text-[16px] text-xs lg:leading-7 leading-5">Milagra Designs creates spaces that tell your story with timeless aesthetics and personalized touches.
                                We blend creativity and functionality to deliver elegant, bespoke interiors. From concept to completion,
                                our team ensures exceptional quality and detail, transforming
                                homes and commercial spaces into inspiring environments filled with style and purpose.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:my-10 my-5 place-items-center">
                        <div className="flex flex-col gap-4">
                            <Image
                                src={portfoliotwo}
                                width={400}
                                height={0}
                                alt="portfolioone"

                            />

                            <p className="text-center text-[#525252] flex justify-center items-center gap-2 font-normal text-sm lg:text-xl"><LuSquareArrowOutUpRight />2150 sq.ft</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Image
                                src={portfoliotwo}
                                width={400}
                                height={0}
                                alt="portfolioone"

                            />

                            <p className="text-center text-[#525252] flex justify-center items-center gap-2 font-normal  text-sm lg:text-xl"><SlCalender />2024</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Image
                                src={portfoliothree}
                                width={400}
                                height={0}
                                alt="portfolioone"

                            />
                            <p className="text-center text-[#525252] flex justify-center items-center gap-2 font-normal  text-sm lg:text-xl"><MdOutlineBedroomChild />3 BHK</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className=" flex lg:flex-row flex-col  justify-center lg:gap-20 gap-10 mt-5 lg:mt-16">
                        <Image
                            src={portfolioone}
                            width={550}
                            height={0}
                            alt="portfolioone"

                        />
                        <div>
                            <h1 className="text-xl lg:text-3xl font-normal mb-3 lg:mb-8">skywall,Alappuzha</h1>
                            <p className="max-w-[500px] font-normal lg:text-[16px] text-xs leading-5 lg:leading-7">Milagra Designs creates spaces that tell your story with timeless aesthetics and personalized touches.
                                We blend creativity and functionality to deliver elegant, bespoke interiors. From concept to completion,
                                our team ensures exceptional quality and detail, transforming
                                homes and commercial spaces into inspiring environments filled with style and purpose.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:my-10 my-5 place-items-center">
                        <div className="flex flex-col gap-4">
                            <Image
                                src={portfoliotwo}
                                width={400}
                                height={0}
                                alt="portfolioone"

                            />

                            <p className="text-center text-[#525252] flex justify-center items-center gap-2 font-normal  text-sm lg:text-xl"><LuSquareArrowOutUpRight />2150 sq.ft</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Image
                                src={portfoliotwo}
                                width={400}
                                height={0}
                                alt="portfolioone"

                            />

                            <p className="text-center text-[#525252] flex justify-center items-center gap-2 font-normal  text-sm lg:text-xl"><SlCalender />2024</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Image
                                src={portfoliothree}
                                width={400}
                                height={0}
                                alt="portfolioone"

                            />
                            <p className="text-center text-[#525252] flex justify-center items-center gap-2 font-normal  text-sm lg:text-xl"><MdOutlineBedroomChild />3 BHK</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=" flex lg:flex-row flex-col-reverse  justify-center lg:gap-20 gap-10 mt-5 lg:mt-16">

                        <div>
                            <h1 className="text-xl lg:text-3xl font-normal mb-3 lg:mb-8">skywall,Alappuzha</h1>
                            <p className="max-w-[500px] font-normal lg:text-[16px] text-xs leading-5 lg:leading-7">Milagra Designs creates spaces that tell your story with timeless aesthetics and personalized touches.
                                We blend creativity and functionality to deliver elegant, bespoke interiors. From concept to completion,
                                our team ensures exceptional quality and detail, transforming
                                homes and commercial spaces into inspiring environments filled with style and purpose.</p>
                        </div>

                        <Image
                            src={portfolioone}
                            width={550}
                            height={0}
                            alt="portfolioone"

                        />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:mt-10 lg:mb-28 my-5 place-items-center">
                        <div className="flex flex-col gap-4">
                            <Image
                                src={portfoliotwo}
                                width={400}
                                height={0}
                                alt="portfolioone"

                            />

                            <p className="text-center text-[#525252] flex justify-center items-center gap-2 font-normal  text-sm lg:text-xl"><LuSquareArrowOutUpRight />2150 sq.ft</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Image
                                src={portfoliotwo}
                                width={400}
                                height={0}
                                alt="portfolioone"

                            />

                            <p className="text-center text-[#525252] flex justify-center items-center gap-2 font-normal  text-sm lg:text-xl"><SlCalender />2024</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Image
                                src={portfoliothree}
                                width={400}
                                height={0}
                                alt="portfolioone"

                            />
                            <p className="text-center text-[#525252] flex justify-center items-center gap-2 font-normal  text-sm lg:text-xl"><MdOutlineBedroomChild />3 BHK</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}