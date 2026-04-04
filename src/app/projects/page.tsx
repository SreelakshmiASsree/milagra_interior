"use client"
import Navbar from "../../components/Navbar/page";
import Footer from "../../components/Footer/page";
import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowLeft } from "react-icons/hi";
import portfolioone from "../../../public/images/portfolioone.png";
import portfoliotwo from "../../../public/images/portfoliotwo.png";
import portfoliothree from "../../../public/images/portfoliothree.png";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { MdOutlineBedroomChild } from "react-icons/md";

export default function Projects() {

  // ✅ Dynamic data
  const projects = [
    {
      title: "skywall,Alappuzha",
      description: "Milagra Designs creates spaces that tell your story with timeless aesthetics and personalized touches. We blend creativity and functionality to deliver elegant, bespoke interiors. From concept to completion, our team ensures exceptional quality and detail, transforming homes and commercial spaces into inspiring environments filled with style and purpose.",
      mainImage: portfolioone,
      reverse: false,
      details: [
        { type: "area", value: "2150 sq.ft", image: portfoliotwo },
        { type: "year", value: "2024", image: portfoliotwo },
        { type: "bhk", value: "3 BHK", image: portfoliothree },
      ],
    },
    {
      title: "skywall,Alappuzha",
      description: "Milagra Designs creates spaces that tell your story with timeless aesthetics and personalized touches. We blend creativity and functionality to deliver elegant, bespoke interiors.",
      mainImage: portfolioone,
      reverse: false,
      details: [
        { type: "area", value: "1800 sq.ft", image: portfoliotwo },
        { type: "year", value: "2023", image: portfoliotwo },
        { type: "bhk", value: "2 BHK", image: portfoliothree },
      ],
    },
    {
      title: "skywall,Alappuzha",
      description: "Milagra Designs creates spaces that tell your story with timeless aesthetics and personalized touches.",
      mainImage: portfolioone,
      reverse: false,
      details: [
        { type: "area", value: "2500 sq.ft", image: portfoliotwo },
        { type: "year", value: "2025", image: portfoliotwo },
        { type: "bhk", value: "4 BHK", image: portfoliothree },
      ],
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div
        className="w-full lg:h-[300px] h-[150px] flex items-center justify-start bg-cover bg-center"
        style={{ backgroundImage: `url(/images/milagraimg6.jpg)` }}
      >
        <div className="container max-w-3xl px-6 text-white">
          <h1 className="lg:text-[72px] md:text-5xl text-4xl font-medium leading-tight lg:ml-20 ml-16 bg-black/10 w-fit">
            Projects
          </h1>
        </div>
      </div>

      <div className="container">

        {/* Back button */}
        <div className="w-full max-w-md sm:max-w-2xl lg:max-w-3xl my-3 md:flex justify-start items-start hidden lg:mt-10 mt-5">
          <Link href="/">
            <button className="mb-5 backdrop-blur-md flex items-center justify-center text-[#fff] bg-[#845607] hover:bg-[#fff] hover:text-[#C4910D] px-3 py-2 rounded-xl font-semibold text-[18px]">
              <span className="text-[20px] mr-2"><HiOutlineArrowLeft /></span>
              Back
            </button>
          </Link>
        </div>

        {/* Intro */}
        <div className="text-center max-w-[1380px] lg:mt-10 mt-5">
          <p className="text-sm lg:text-lg">
            Milagra Designs creates spaces that tell your story with timeless aesthetics and personalized touches.Milagra Designs creates spaces that tell your story with timeless aesthetics and personalized touches. We blend creativity and functionality to deliver elegant, bespoke interiors. From concept to completion, our team ensures exceptional quality and detail, transforming homes and commercial spaces into inspiring environments filled with style and purpose.
          </p>
        </div>

        {/* ✅ Projects Map */}
        {projects.map((item, index) => (
          <div key={index} >

            {/* Top Section */}
            <div
              className={`flex flex-col ${
                item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              } justify-center lg:gap-20 gap-6 mt-20 lg:mt-32`}
            >

              {/* Mobile heading */}
              <h1 className="lg:hidden text-xl font-normal text-center">
                {item.title}
              </h1>

              {/* Image */}
              <Image
                src={item.mainImage}
                width={550}
                height={0}
                alt="portfolio"
              />

              {/* Text */}
              <div>
                <h1 className="hidden lg:block text-xl lg:text-3xl font-normal mb-3 lg:mb-8">
                  {item.title}
                </h1>

                <p className="max-w-[500px] font-normal lg:text-[16px] text-xs lg:leading-7 leading-5 text-center lg:text-left">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Bottom Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:my-10 my-5 place-items-center">
              {item.details.map((detail, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <Image src={detail.image} width={400} height={0} alt="" />

                  <p className="text-center text-[#525252] flex justify-center items-center gap-2 font-normal text-sm lg:text-xl">

                    {detail.type === "area" && <LuSquareArrowOutUpRight />}
                    {detail.type === "year" && <SlCalender />}
                    {detail.type === "bhk" && <MdOutlineBedroomChild />}

                    {detail.value}
                  </p>
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>

      <Footer />
    </>
  );
}