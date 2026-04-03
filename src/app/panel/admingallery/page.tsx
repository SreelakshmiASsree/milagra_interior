"use client";
import { useState } from "react";
import Image from "next/image";
import portfoliotwo from "../../../../public/images/portfoliotwo.png";
import portfoliothree from "../../../../public/images/portfoliothree.png"
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { MdOutlineDelete } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";

export default function Admingallery() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [images, setImages] = useState([
        portfoliotwo,
        portfoliothree,
        portfoliotwo,
        portfoliothree,
        portfoliothree,
        portfoliothree
    ]);

    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleDelete = () => {
        if (selectedIndex !== null) {
            const newImages = [...images];
            newImages.splice(selectedIndex, 1);
            setImages(newImages);
            setSelectedIndex(null);
        }
    };

    return (
        <div className="container ">
            {/* Add Button */}
            <div className="lg:ml-56 lg:mt-36 my-28">
                <div className="flex flex-col justify-end items-end my-4">
                    <button
                        onClick={() => setIsFormOpen(true)}
                        className="bg-[#CC8710] text-[#fff] py-2 px-4 rounded-lg flex items-center gap-2 text-sm lg:text-lg"
                    >
                        <FaPlus /> ADD
                    </button>
                </div>

                {isFormOpen && (
                    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-20">
                        <div className="bg-white p-6 rounded-xl w-[90%] max-w-2xl relative">
                            <button
                                className="absolute top-4 right-4 text-2xl"
                                onClick={() => setIsFormOpen(false)}
                                aria-label="Close form"
                            >
                                <IoCloseOutline />
                            </button>
                            <h2 className="lg:text-2xl md:text-xl text-lg font-bold text-center my-6">Add  Image</h2>
                            <form className="flex flex-col gap-6">
                                <div className="flex justify-center items-center">

                                    <div className="flex justify-center items-center flex-col ">

                                        <input
                                            id="image"
                                            type="file"
                                            className="lg:py-14 md:py-10 py-8 rounded w-3/4  bg-[#F1F1F1] pl-5"
                                        />
                                    </div>
                                </div>


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

                {/* Gallery Grid */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 justify-items-center">
                    {images.map((img, index) => (
                        <div key={index} className="relative group">
                            <Image
                                src={img}
                                width={410}
                                height={50}
                                alt={`gallery-${index}`}
                                className="rounded-lg"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50 bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
                                <button
                                    className="bg-red-600 text-white p-3 rounded-full shadow-lg"
                                    onClick={() => setSelectedIndex(index)}
                                >
                                    <MdOutlineDelete size={30} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Delete Confirmation Modal */}
                {selectedIndex !== null && (
                    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center w-100">
                            <h2 className="text-lg font-semibold mb-4">Are you sure?</h2>
                            <p className="text-sm mb-6">Do you want to delete this image?</p>
                            <div className="flex justify-center gap-4">
                                <button
                                    onClick={() => setSelectedIndex(null)}
                                    className="bg-gray-300 px-4 py-2 rounded-md"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleDelete}
                                    className="bg-red-600 text-white px-4 py-2 rounded-md"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
