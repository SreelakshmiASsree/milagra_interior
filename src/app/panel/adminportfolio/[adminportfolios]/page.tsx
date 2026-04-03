"use client";
import { useState } from "react";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import portfolioone from "../../../../../public/images/portfolioone.png";
import portfoliotwo from "../../../../../public/images/portfoliotwo.png";
import portfoliothree from "../../../../../public/images/portfoliothree.png"
import { MdOutlineArrowForward } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { MdOutlineBedroomChild } from "react-icons/md";
export default function Adminportfolios() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    return (
        <>
            <div className="container">
                <div className="lg:ml-56 lg:mt-36 mt-28 mb-4">
                    <div className="flex flex-col justify-end items-end my-4">
                        <button
                            onClick={() => setIsFormOpen(true)}
                            className="bg-[#CC8710] text-[#fff] py-2 px-4 rounded-lg flex items-center gap-2 text-sm lg:text-lg"
                        >
                            Update
                        </button>
                    </div>
                    {isFormOpen && (
                        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-20 overflow-auto pt-24">
                            <div className="bg-white p-6 w-[90%] max-w-2xl relative max-h-[90vh] overflow-y-auto rounded-lg">
                                <button
                                    className="absolute top-4 right-4 text-2xl"
                                    onClick={() => setIsFormOpen(false)}
                                    aria-label="Close form"
                                >
                                    <IoCloseOutline />
                                </button>
                                <h2 className="text-lg lg:text-2xl md:text-xl font-bold text-center lg:my-6 my-4">Add Portfolio Item</h2>
                                <form className="flex flex-col gap-6">
                                    <div className="flex flex-col lg:flex-row gap-5">
                                        <div className="flex flex-col flex-1">
                                            <label className="lg:text-lg text-sm">Title</label>
                                            <input
                                                type="text"
                                                placeholder="Project Title"
                                                className="py-4 rounded w-full bg-[#F1F1F1] pl-5 text-sm"
                                            />
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <label className="lg:text-lg text-sm">Image</label>
                                            <input
                                                type="file"
                                                className="py-4 rounded w-full bg-[#F1F1F1] pl-5 text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col lg:flex-row gap-5">
                                        <div className="flex flex-col flex-1">
                                            <label className="lg:text-lg text-sm">Year</label>
                                            <input
                                                type="text"
                                                placeholder="Year"
                                                className="py-4 rounded bg-[#F1F1F1] pl-5 text-sm"
                                            />
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <label className="lg:text-lg text-sm">Sq.ft</label>
                                            <input
                                                type="text"
                                                placeholder="Sq.ft"
                                                className="py-4 rounded bg-[#F1F1F1] pl-5 text-sm"
                                            />
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <label className="lg:text-lg text-sm">Bhk</label>
                                            <input
                                                type="text"
                                                placeholder="Bhk"
                                                className="py-4 rounded bg-[#F1F1F1] pl-5 text-sm"
                                            />
                                        </div>
                                    </div>
                                    <textarea
                                        placeholder="Description..."
                                        className="py-4 rounded bg-[#F1F1F1] pl-5 text-sm"
                                        rows={4}
                                    />
                                    <div className="flex justify-center lg:my-4 my-2">
                                        <button
                                            type="submit"
                                            className="bg-[#8D5212] text-white md:py-3 lg:px-10 px-6 py-2 rounded text-sm lg:text-lg"
                                        >
                                            Update
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    <div>
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
                            <div className="flex justify-end items-center">
                                <button className="flex justify-center items-center gap-1 bg-[#e63030] text-[#fff] py-2 px-5 rounded-lg">Delete</button>
                            </div>
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
                            <div className="flex justify-end items-center">
                                <button className="flex justify-center items-center gap-1 bg-[#e63030] text-[#fff] py-2 px-5 rounded-lg">Delete</button>
                            </div>
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
                             <div className="flex justify-end items-center">
                                <button className="flex justify-center items-center gap-1 bg-[#e63030] text-[#fff] py-2 px-5 rounded-lg">Delete</button>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}