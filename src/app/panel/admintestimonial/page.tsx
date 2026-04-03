"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineDelete } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";

export default function Admintestimonial() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [startIndex, setStartIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(3);


    const testimonials = [
        {
            name: "Harisal",
            location: "Calicut",
            image: "/images/testimonialone.png",
            text: "We hired Milagra for our commercial space, and the results exceeded our expectations. The team is creative, responsive, and committed to quality. blending tradition ",
        },
        {
            name: "Joseph Varghese",
            location: "Thrissur",
            image: "/images/testimonialone.png",
            text: "We hired Milagra for our commercial space, and the results exceeded our expectations. The team is creative, responsive, and committed to quality. blending tradition ",
        },
        {
            name: "Cibin",
            location: "Calicut",
            image: "/images/testimonialone.png",
            text: "From the first consultation to final handover, the experience was seamless. Their design sense is exceptional, blending tradition with modern elements perfectly.",
        },
        {
            name: "Anjana",
            location: "Bangalore",
            image: "/images/testimonialone.png",
            text: "From the first consultation to final handover, the experience was seamless. Their design sense is exceptional, blending tradition with modern elements perfectly.",
        },
        {
            name: "Rahul",
            location: "Kochi",
            image: "/images/testimonialone.png",
            text: "From the first consultation to final handover, the experience was seamless. Their design sense is exceptional, blending tradition with modern elements perfectly.",
        },
    ];

    const visibleTestimonials = testimonials;


    return (
        <>
            <div className="container">
                <div className="lg:ml-56 lg:mt-36 mt-28">
                    <div className="flex flex-col justify-end items-end my-4">
                        <button
                            onClick={() => setIsFormOpen(true)}
                            className="bg-[#CC8710] text-[#fff] py-2 px-4 rounded-lg flex items-center gap-2 text-sm lg:text-lg"
                        >
                            <FaPlus /> ADD
                        </button>
                    </div>

                    {isFormOpen && (
                        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-20 pt-32 px-3 mb-5">
                            <div className="bg-white px-6 py-3 rounded-xl w-full lg:w-[50%] max-w-xl relative ">
                                <button
                                    className="absolute top-4 right-4 text-2xl"
                                    onClick={() => setIsFormOpen(false)}
                                    aria-label="Close form"
                                >
                                    <IoCloseOutline />
                                </button>
                                <h2 className="lg:text-2xl md:text-xl text-lg font-bold text-center my-6">Add  Review</h2>
                                <form className="flex flex-col gap-6 ">
                                    <div className="flex justify-center items-center">
                                        <div className="flex justify-center items-center flex-col ">
                                            <input
                                                id="image"
                                                type="file"
                                                className="lg:py-6 md:py-6 py-4  w-3/4 rounded-full bg-[#F1F1F1] pl-5"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col flex-1">
                                        <label className="lg:text-lg text-sm">Title</label>
                                        <input
                                            type="text"
                                            placeholder="Project Title"
                                            className="py-4 rounded w-full bg-[#F1F1F1] pl-5 text-sm"
                                        />
                                    </div>

                                    <textarea
                                        placeholder="Review..."
                                        className="py-4 rounded bg-[#F1F1F1] pl-5 text-sm"
                                        rows={4}
                                    />
                                    <div className="flex justify-center my-4">
                                        <button
                                            type="submit"
                                            className="bg-[#8D5212] text-white md:py-3 lg:px-10 px-6 py-2 rounded text-sm lg:text-lg"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((t, index) => (
                            <div
                                key={index}
                                className="relative group bg-white border border-gray-200 rounded p-6 shadow-md hover:shadow-lg transition-shadow duration-300 mb-5"
                            >
                                <div className="flex justify-around mb-4">
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
                                    />
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <h4 className="text-lg font-semibold">
                                        {t.name}, <span className="font-normal">{t.location}</span>
                                    </h4>
                                    <p className="text-sm font-light mt-2 text-gray-700">{t.text}</p>
                                </div>

                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300 rounded">
                                    <button
                                        className="bg-red-600 text-white p-3 rounded-full shadow-lg"
                                        onClick={() => console.log('Delete testimonial', index)} // Replace with your delete logic
                                    >
                                        <MdOutlineDelete size={24} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}